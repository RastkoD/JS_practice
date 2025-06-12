document.getElementById("celsius").addEventListener("input", ourAction);

const fahrenheitField = document.getElementById("fahrenheit");

function ourAction(e) {
  const celsiusValue = e.target.value.trim();

  if (isNaN(celsiusValue) || celsiusValue === "") {
    fahrenheitField.textContent = "Please enter a valid number";
    return;
  }

  const newTemp = celsiusValue * 1.8 + 32;

  fahrenheitField.textContent = newTemp;
}
