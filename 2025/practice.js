let username = prompt("Enter your name").toLowerCase();
let password = prompt("Enter your password").toLowerCase();

console.log(username);

if (username == "admin" && password == "1234") {
  console.log("Welcome admin");
} else {
  console.log("Incorrect username or password");
}

let role = "moderator";

if (role == "user" || role == "admin") {
  console.log("You are: " + role);
} else {
  console.log("You are not user or admin");
}
