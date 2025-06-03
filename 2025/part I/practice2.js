let brands = [
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

let userBrand = prompt("Enter your car brand:").toLowerCase();
console.log(userBrand);

//if (brands.includes(userBrand)) {
//  console.log("We have spare parts for " + userBrand.toUpperCase());
//} else {
//  console.log("We do not have spare parts for " + userBrand);
//}

if (!brands.includes(userBrand)) {
  console.log("This brand does not exist");
}
