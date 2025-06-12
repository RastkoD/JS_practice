let bodovi = prompt("Unesi broj bodova");
let ocena;
let poruka;

if (bodovi >= 91) {
  ocena = 10
  poruka = alert(`Ocena: ${ocena}, svaka cast`)
} else if (bodovi >= 81 && bodovi <= 90) {
  ocena = 9
  poruka = alert(`Ocena: ${ocena}, odlicno`)
} else if (bodovi >= 71 && bodovi <= 80) {
  ocena = 8
  poruka = alert(`Ocena: ${ocena}, vrlo dobar`)
} else if (bodovi >= 61 && bodovi <= 70) {
  ocena = 7
  poruka = alert(`Ocena: ${ocena}, dobar`)
} else if (bodovi >= 51 && bodovi <= 60) {
  ocena = 6
  poruka = alert(`Ocena: ${ocena}, jedva`)
} else {
  ocena = 5
  poruka = alert(`Ocena: ${ocena}, niste prosli`)
}

console.log(poruka);