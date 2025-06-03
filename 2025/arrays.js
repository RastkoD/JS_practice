// array = tip podatka

let products = ["apple", "passion fruit", "banana", "grapes"];
console.log(products[0], products[3]);

products[0] = "orange";

console.log(products[0]);

products.push("pineapple");
console.log(products, products.length);

// Objects

let person = {
  name: "Rastko",
  age: 36,
  professor: true,
  courses: ["HTML/CSS", "JavaScript", "PHP", "SQL"],
  pets: ["Nala", "Arka"],
  physicalCharacteristics: {
    height: 186,
    weight: 100,
    hair: "dark / gray",
  },
};

console.log(person.name, person.age, person.courses[1], person.pets);

console.log(person["name"]);
console.log(person.physicalCharacteristics.hair);
