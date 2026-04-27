const services = ["Plumber Job", "Carpenter Job"];
const locations = ["Wien", "Wels"];
const jobs = [
  { name: "Plumber Wien", slug: "plumber-wien" },
  { name: "Carpenter Wels", slug: "carpenter-wels" },
];

const serviceDropdown = document.querySelector("#service-dropdown");
const locationDropdown = document.querySelector("#location-dropdown");
const refreshBtn = document.getElementById("refresh");
const searchBtn = document.getElementById("search");

let selectedService = null;
let selectedLocation = null;

setupDropdown(serviceDropdown, services, (val) => {
  selectedService = val;
  toggleRefresh();
});
setupDropdown(locationDropdown, locations, (val) => {
  selectedLocation = val;
  toggleRefresh();
});

refreshBtn.addEventListener("click", () => {
  clearDropdown(serviceDropdown);
  clearDropdown(locationDropdown);
  selectedService = null;
  selectedLocation = null;
  refreshBtn.hidden = true;
});

searchBtn.addEventListener("click", () => {
  if (!selectedService && !selectedLocation) return;

  if (!selectedService || !selectedLocation) {
    alert("Please select both service and location.");
    return;
  }

  const job = jobs.find(
    (j) =>
      j.name
        .toLowerCase()
        .includes(selectedService.split(" ")[0].toLowerCase()) &&
      j.name.toLowerCase().includes(selectedLocation.toLowerCase())
  );

  if (job) {
    window.location.href = `/jobs/${job.slug}`;
  } else {
    alert("This job exists in DB but page not created yet.");
  }
});

function setupDropdown(dropdownEl, items, onSelect) {
  const input = dropdownEl.querySelector(".dropdown-search");
  const list = dropdownEl.querySelector(".dropdown-list");

  renderList(items);

  input.addEventListener("focus", () => {
    list.style.display = "block";
  });

  input.addEventListener("input", () => {
    const term = input.value.toLowerCase();
    const filtered = items.filter((item) => item.toLowerCase().includes(term));
    renderList(filtered);
  });

  function renderList(arr) {
    list.innerHTML = "";
    arr.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      li.addEventListener("click", () => {
        input.value = item;
        list.style.display = "none";
        onSelect(item);
      });
      list.appendChild(li);
    });
  }

  document.addEventListener("click", (e) => {
    if (!dropdownEl.contains(e.target)) {
      list.style.display = "none";
    }
  });
}

function clearDropdown(dropdownEl) {
  const input = dropdownEl.querySelector(".dropdown-search");
  input.value = "";
}

function toggleRefresh() {
  if (selectedService || selectedLocation) {
    refreshBtn.hidden = false;
  } else {
    refreshBtn.hidden = true;
  }
}
