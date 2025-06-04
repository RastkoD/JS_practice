let courses = [
  "JavaScript for Beginners",
  "Advanced React and Redux",
  "Python for Data Science",
  "Full-Stack Web Development with Node.js",
  "Java Programming Masterclass",
  "Intro to Algorithms and Data Structures",
  "DevOps and CI/CD with Docker & Jenkins",
];

// function advantages = reusability(code that can be used in several places),
// readability, no code duplicates(usually), single modification place
listCourses();

calculator(10, 4, "*");
calculator(8, 2, "/");
calculator(3, 23, "+");

// Functions
function listCourses() {
  const coursesDiv = document.getElementById("courses");

  // list courses
  for (let course of courses) {
    coursesDiv.innerHTML += course + "<hr/>";
  }
}

// args
function calculator(a, b, o) {
  if (o === "-") {
    console.log(a - b);
  } else if (o === "+") {
    console.log(a + b);
  } else if (o === "*") {
    console.log(a * b);
  } else if (o === "/") {
    console.log(a / b);
  } else {
    console.log("mistake was made");
  }
}
