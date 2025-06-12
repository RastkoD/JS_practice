let firstNameInput = document.getElementById("fname");
let lastNameInput = document.getElementById("lname");
let submitBtn = document.getElementById("submitBtn");
let checkBtn = document.getElementById("subscribe");
let emailBox = document.getElementById("email");
let form = document.getElementById("form");
let message = document.getElementById("message");
let statusMsg = document.getElementById("popup");

window.onload = function () {
  firstNameInput.value = "";
  lastNameInput.value = "";
  message.value = "";
  emailBox.value = "";
  checkBtn.checked = false;
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    isSubscibed: checkBtn.checked,
    comment: message.value,
  };

  if (checkBtn.checked) {
    formData.email = emailBox.value;
  }

  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    firstNameInput.value = "";
    lastNameInput.value = "";
    message.value = "";
    emailBox.value = "";
    checkBtn.checked = false;

    showStatus(`Thanks for your submission, ${formData.firstName}`, "green");
  } else {
    showStatus("Oops, something went wrong", "red");
  }
});

function showStatus(msg, clr) {
  statusMsg.innerText = msg;
  statusMsg.style.background = clr;
  statusMsg.style.right = "0";

  setTimeout(() => {
    statusMsg.style.right = "-100%";
  }, 2000);
}

submitBtn.disabled = true;
firstNameInput.addEventListener("input", checkInput);
lastNameInput.addEventListener("input", checkInput);

function checkInput() {
  if (firstNameInput.value != "" && lastNameInput.value != "") {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

checkBtn.addEventListener("change", checkCheck);

function checkCheck() {
  if (checkBtn.checked === true) {
    emailBox.style.opacity = "1";
    emailBox.style.cursor = "inherit";
  } else {
    emailBox.style.opacity = "0";
    emailBox.style.cursor = "default";
  }
}
