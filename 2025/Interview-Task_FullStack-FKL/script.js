const API = "api.php";

// seconds to h:m
const formatTime = (totalSeconds) => {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  return `${h}h ${m}m`;
};

// daily total
document.getElementById("btn-daily").addEventListener("click", () => {
  const date = document.getElementById("date-single").value;
  const out = document.getElementById("out-daily");

  if (!date) return alert("Izaberite datum.");

  out.innerHTML = "Loading...";

  fetch(`${API}?action=get_daily_total&date=${date}`)
    .then((r) => r.json())
    .then((data) => {
      if (data.error) throw new Error(data.error);

      if (!data.length) {
        out.innerHTML = "Nema podataka za ovaj dan.";
        return;
      }

      let html = "<table><tr><th>ID</th><th>Ime</th><th>Vreme Rada</th></tr>";
      let totalSec = 0;

      data.forEach((w) => {
        totalSec += w.sekunde;
        html += `<tr>
                    <td>${w.id_radnika}</td>
                    <td>${w.ime_radnika}</td>
                    <td class="time">${w.ukupno_vreme}</td>
                </tr>`;
      });

      html += "</table>";
      html += `<div class="summary">Ukupno svi radnici: ${formatTime(totalSec)}</div>`;
      out.innerHTML = html;
    })
    .catch((err) => {
      out.innerHTML = `<span style="color:red">Greška: ${err.message}</span>`;
    });
});

// single worker
document.getElementById("btn-range").addEventListener("click", () => {
  const wid = document.getElementById("worker-id").value;
  const start = document.getElementById("date-start").value;
  const end = document.getElementById("date-end").value;
  const out = document.getElementById("out-range");

  if (!wid || !start || !end) return alert("Molimo popunite sva polja!");
  if (start > end) return alert("Početni datum mora biti pre krajnjeg!");

  out.innerHTML = "loading...";

  fetch(
    `${API}?action=get_worker_range&worker_id=${wid}&start_date=${start}&end_date=${end}`,
  )
    .then((r) => r.json())
    .then((data) => {
      if (data.error) throw new Error(data.error);

      const dates = Object.keys(data).sort();
      if (dates.length === 0) {
        out.innerHTML = "Nema podataka za ovog radnika u datom periodu.";
        return;
      }

      const workerName = data[dates[0]][0].ime_radnika;
      let html = `<p><strong>Radnik:</strong> ${workerName}</p>`;
      html += "<table><tr><th>Datum Smene</th><th>Vreme Rada</th></tr>";

      let totalSec = 0;

      dates.forEach((date) => {
        const dayData = data[date][0];
        totalSec += dayData.sekunde;
        html += `<tr>
                    <td>${date}</td>
                    <td class="time">${dayData.ukupno_vreme}</td>
                </tr>`;
      });

      html += "</table>";
      html += `<div class="summary">Ukupno u periodu: ${formatTime(totalSec)}</div>`;
      out.innerHTML = html;
    })
    .catch((err) => {
      out.innerHTML = `<span style="color:red">Greška: ${err.message}</span>`;
    });
});

window.addEventListener("DOMContentLoaded", () => {
  const today = new Date().toISOString().slice(0, 10);

  let lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 7);
  const weekAgo = lastWeek.toISOString().slice(0, 10);

  document.getElementById("date-single").value = today;
  document.getElementById("date-start").value = weekAgo;
  document.getElementById("date-end").value = today;
});
