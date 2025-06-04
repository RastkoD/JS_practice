let courses = [
  {
    name: "Python",
    price: 300,
    description: "Python course with mentorship",
    details: [
      "24 classes",
      "Covers basics to OOP",
      "Includes Matplotlib and NumPy",
      "1-on-1 mentor support",
    ],
  },
  {
    name: "JavaScript",
    price: 250,
    description: "Comprehensive JavaScript course for beginners to advanced",
    details: [
      "35 lessons",
      "Covers ES6+, DOM, and async programming",
      "Project: Build a dynamic website",
      "Includes debugging techniques",
    ],
  },
  {
    name: "Python",
    price: 350,
    description:
      "Focuses on using Python for data analysis and machine learning",
    details: [
      "Pandas and NumPy for data handling",
      "Intro to scikit-learn and Matplotlib",
      "Real-world datasets and projects",
      "Final project: Predictive model",
    ],
  },
  {
    name: "Node.js",
    price: 500,
    description: "Covers front-end and back-end development with Node.js",
    details: [
      "React and Express.js integration",
      "MongoDB for database",
      "RESTful API creation",
      "Deploy to cloud platforms",
    ],
  },
  {
    name: "Java",
    price: 400,
    description: "Deep dive into Java programming for desktop and web",
    details: [
      "Covers Java SE & JavaFX",
      "OOP principles and multithreading",
      "MySQL database integration",
      "Build a GUI-based app",
    ],
  },
  {
    name: "Algorithms",
    price: 275,
    description: "Learn core computer science concepts with practical examples",
    details: [
      "Linked lists, trees, and graphs",
      "Sorting and searching algorithms",
      "Big-O analysis",
      "Weekly coding challenges",
    ],
  },
  {
    name: "DevOps",
    price: 450,
    description: "Hands-on DevOps course with containerization and automation",
    details: [
      "Build and deploy with Docker",
      "Automate pipelines with Jenkins",
      "GitHub Actions overview",
      "Real-world CI/CD project",
    ],
  },
  {
    name: "React",
    price: 320,
    description:
      "Build dynamic UIs using React and state management with Redux",
    details: [
      "Hooks and functional components",
      "Redux store and middleware",
      "Routing with React Router",
      "Final SPA project",
    ],
  },
  {
    name: "TensorFlow",
    price: 480,
    description: "Apply machine learning concepts using TensorFlow framework",
    details: [
      "Supervised and unsupervised learning",
      "Neural networks and CNNs",
      "Use TensorFlow and Keras",
      "Train models on real datasets",
    ],
  },
  {
    name: "Cybersecurity",
    price: 300,
    description: "Introduction to security principles and best practices",
    details: [
      "Network security basics",
      "Common vulnerabilities & exploits",
      "Tools like Wireshark and Metasploit",
      "Simulated attack scenarios",
    ],
  },
];

var lastBtnClicked = null;

listCourses();

let searchBtn = document.getElementById("searchCourseBtn");

searchBtn.addEventListener("click", () => {
  const searchText = document.getElementById("searchText").value;

  if (searchText == "") {
    return alert("Please Enter Desired Course Name");
  }

  const courseFound = courseExists(searchText);

  if (!courseFound) {
    return alert("Course does not exist!");
  }

  const allCourses = document.getElementsByClassName("singleCourse");

  for (let singleCourse of allCourses) {
    singleCourse.classList.remove("hidden");

    const courseName = singleCourse.querySelector(".courseName").textContent;

    if (courseName.toLowerCase() != searchText) {
      singleCourse.classList.add("hidden");
    }
  }
});

function courseExists(courseName) {
  for (let course of courses) {
    if (course.name.toLowerCase() == courseName.toLowerCase()) {
      return true;
    }
  }

  return false;
}

function listCourses() {
  const coursesDiv = document.getElementById("courses");

  for (let course of courses) {
    const courseName = document.createElement("h2");
    courseName.innerText = course.name;
    courseName.classList = "courseName";

    const coursePrice = document.createElement("p");
    coursePrice.innerText = `€${course.price}`;

    const courseDesc = document.createElement("p");
    courseDesc.innerText = course.description;

    const courseButton = document.createElement("button");
    courseButton.innerText = "More info";
    courseButton.classList = "ctaCourse";

    courseButton.addEventListener("click", (e) => showCourseInfo(e, course));

    const courseWrap = document.createElement("div");
    courseWrap.classList = "singleCourse";
    courseWrap.append(courseName, courseDesc, coursePrice, courseButton);

    coursesDiv.append(courseWrap);
  }
}

function showCourseInfo(e, course) {
  if (lastBtnClicked != null) {
    lastBtnClicked.classList.remove("highlighted");
  }

  e.currentTarget.parentNode.classList.add("highlighted");
  lastBtnClicked = e.currentTarget.parentNode;

  const courseInfoDiv = document.getElementById("courseInfo");
  courseInfoDiv.innerHTML = "";

  courseInfoDiv.classList = "";

  const courseTitle = document.createElement("h1");
  courseTitle.innerText = course.name;

  const courseDetailsList = document.createElement("ul");

  for (let detail of course.details) {
    const courseDetailListItem = document.createElement("li");
    courseDetailListItem.innerText = detail;

    courseDetailsList.append(courseDetailListItem);
  }

  courseInfoDiv.append(courseTitle, courseDetailsList);
}
