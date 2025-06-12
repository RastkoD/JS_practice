document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const firstName = document.getElementById("firstName").value;

  if (email && firstName) {
    document.getElementById("success-msg").classList.remove("hidden");
    document.getElementById("signup-form").reset();
  }
});
