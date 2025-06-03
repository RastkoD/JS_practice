//let name = prompt("Enter your name:").toLowerCase();
let name = "admin";
let nameParagraph = document.getElementById("name");
let carStats = document.getElementById("carStats");

nameParagraph.innerText = name;

nameParagraph.style.fontWeight = "bold";

if (name == "admin") {
  nameParagraph.style.color = "red";
} else {
  nameParagraph.style.color = "blue";
}

let cars = [
  "audi",
  "bmw",
  "mercedes",
  "toyota",
  "honda",
  "ford",
  "chevrolet",
  "nissan",
  "hyundai",
  "kia",
  "volkswagen",
  "porsche",
  "lexus",
  "mazda",
  "subaru",
  "jeep",
  "dodge",
  "chrysler",
  "jaguar",
  "land rover",
  "fiat",
  "peugeot",
  "renault",
];

let carsElement = document.getElementById("cars");
carsElement.innerHTML = "<h3>Cars</h3>";
carsElement.innerHTML += "<p>For sale:</p>"; //!

for (let i = 0; i < cars.length; i++) {
  //carsElement.innerHTML += "<p>" + cars[i] + "</p>";
  carsElement.innerHTML += `<p>${cars[i]}</p>`;
}

for (let car of cars) {
  console.log(car);
}

let carCharacteristics = {
  brand: "Opel",
  model: "Insignia",
  fuel: "Diesel",
};

// in za objekte
for (let key in carCharacteristics) {
  carStats.innerHTML += `<p>${key}: ${carCharacteristics[key]} </p>`;
}
