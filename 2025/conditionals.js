let siteName = "Rastko",
  siteLink = "https://rastkod.netlify.app/",
  courses = ["html/css", "JavaScript", "Java", "SQL"];

// conditional statements - if / provere

if (siteName == "RSTK") {
  console.log(courses);
} else if (siteName == "Rastko") {
  console.log("Rastko = RSTK");
} else {
  console.log("Site name does not exist");
}

courses.push("TypeScript");

let numberOfCourses = courses.length;
console.log(numberOfCourses);

if (numberOfCourses > 2) {
  console.log("More than 2 courses available");
}
