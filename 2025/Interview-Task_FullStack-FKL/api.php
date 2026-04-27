<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

// connect db
$host = 'localhost';
$db   = 'fabrika_test';
$user = 'root';
$pass = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8mb4", $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);
} catch (PDOException $e) {
    die(json_encode(['error' => 'DB error: ' . $e->getMessage()]));
}

$action = $_GET['action'] ?? '';

if ($action === 'get_daily_total') {
    $date = $_GET['date'] ?? '';
    if (!$date) die(json_encode(['error' => 'Missing date parameter']));

    $data = calculateWorkerTimeFromLogs($pdo, null, $date, $date);
    echo json_encode($data[$date] ?? []);
    exit;
}

if ($action === 'get_worker_range') {
    $wid  = $_GET['worker_id'] ?? '';
    $from = $_GET['start_date'] ?? '';
    $to   = $_GET['end_date'] ?? '';

    if (!$wid || !$from || !$to) die(json_encode(['error' => 'Missing parameters for range']));

    echo json_encode(calculateWorkerTimeFromLogs($pdo, $wid, $from, $to));
    exit;
}

echo json_encode(['error' => 'Unknown action']);
exit;

function calculateWorkerTimeFromLogs($pdo, $workerId, $startDate, $endDate)
{
    $from = date('Y-m-d', strtotime($startDate . ' -1 day'));
    $to   = date('Y-m-d', strtotime($endDate . ' +1 day'));

    $sql = "SELECT * FROM test_log_r WHERE datum BETWEEN :s AND :e";

    if ($workerId) $sql .= " AND id_radnika = :wid";
    $sql .= " ORDER BY id_posla, id_radnika, datum, vreme";

    $stmt = $pdo->prepare($sql);
    $params = ['s' => $from, 'e' => $to];
    if ($workerId) $params['wid'] = $workerId;
    $stmt->execute($params);

    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $jobs = [];
    foreach ($rows as $r) {
        $jobs[$r['id_posla']][] = $r;
    }

    $normalizedJobs = [];

    foreach ($jobs as $jobId => $entries) {
        $startsPerWorker = [];
        $names = [];
        $ends = [];

        foreach ($entries as $e) {
            $dt = $e['datum'] . ' ' . $e['vreme'];
            $wid = $e['id_radnika'];

            $names[$wid] = $e['ime_radnika'];

            if ($e['id_aktivnosti'] == 2) {
                $startsPerWorker[$wid][] = $dt;
            }
            elseif ($e['id_aktivnosti'] == 3) {
                if (!empty($startsPerWorker[$wid])) {
                    array_pop($startsPerWorker[$wid]);
                }
            }
            elseif ($e['id_aktivnosti'] == 6) {
                $ends[] = $dt;

                if (!isset($startsPerWorker[$wid])) $startsPerWorker[$wid] = [];
            }
        }

        if (empty($ends)) continue;

        $validStarts = [];
        foreach ($startsPerWorker as $wid => $stack) {
            if (!empty($stack)) $validStarts[] = $stack[0]; 
        }

        if (empty($validStarts)) continue;

        $normalizedJobs[] = [
            'start'   => min($validStarts),
            'end'     => max($ends),
            'workers' => $startsPerWorker, 
            'names'   => $names
        ];
    }

    $workerDailyBuckets = [];

    foreach ($normalizedJobs as $job) {
        $tsStart = strtotime($job['start']);
        $tsEnd   = strtotime($job['end']);

        $day = date('H:i:s', $tsStart) < '06:00:00'
            ? date('Y-m-d', strtotime('-1 day', $tsStart))
            : date('Y-m-d', $tsStart);

        if ($day < $startDate || $day > $endDate) continue;

        foreach ($job['workers'] as $wid => $_) {
            $workerDailyBuckets[$day][$wid]['name'] = $job['names'][$wid];
            $workerDailyBuckets[$day][$wid]['spans'][] = [$tsStart, $tsEnd];
        }
    }

    $out = [];

    foreach ($workerDailyBuckets as $day => $workers) {
        foreach ($workers as $wid => $w) {
            
            $spans = $w['spans'];
            usort($spans, function($a, $b) { return $a[0] <=> $b[0]; });

            $merged = [];
            foreach ($spans as $s) {
                if (empty($merged)) { 
                    $merged[] = $s; 
                    continue; 
                }

                $lastIndex = count($merged) - 1;
                if ($s[0] <= $merged[$lastIndex][1]) {
                    $merged[$lastIndex][1] = max($merged[$lastIndex][1], $s[1]);
                } else {
                    $merged[] = $s;
                }
            }

            $seconds = 0;
            foreach ($merged as $m) {
                $seconds += ($m[1] - $m[0]);
            }

            $out[$day][] = [
                'id_radnika'   => $wid,
                'ime_radnika'  => $w['name'],
                'ukupno_vreme' => gmdate('H:i:s', $seconds),
                'sekunde'      => $seconds
            ];
        }
    }

    return $out;
}