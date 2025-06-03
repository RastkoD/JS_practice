let person = document.getElementById("person");

let users = {
  name: "Rastko",
  lastName: "Dimitrijevic",
  age: 36,
  job: "self-unemployed",
  salary: 800,
};

for (key in users) {
  let value = users[key];
  let style = "";
  const text = ["Low salary", "Normal salary", "High salary"];

  if (key === "age") {
    if (value > 60) {
      style = "color:green";
    } else if (value >= 18 && value <= 60) {
      style = "color:blue";
    } else {
      style = "color:red";
    }
  }

  if (key === "salary") {
    if (value > 3000) {
      value = text[2];
    } else if (value >= 1000 && value <= 3000) {
      value = text[1];
    } else {
      value = text[0];
    }
  }

  person.innerHTML += `<p style="${style}">${key}: ${value}</p>`;
}
