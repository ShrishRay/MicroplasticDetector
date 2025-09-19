const data = {
  India: {
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Karnataka: ["Bangalore", "Mysore"],
    TamilNadu: ["Chennai", "Coimbatore"]
  },
  USA: {
    California: ["Los Angeles", "San Francisco"],
    Texas: ["Houston", "Dallas"]
  },
  Australia: {
    Queensland: ["Brisbane", "Cairns"],
    Victoria: ["Melbourne", "Geelong"]
  }
};

const countrySelect = document.getElementById("country");
const stateSelect = document.getElementById("state");
const citySelect = document.getElementById("city");
const volumeSelect = document.getElementById("volume");

function populateCountries() {
  for (let country in data) {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  }
}

function updateStates() {
  stateSelect.innerHTML = '<option value="">--Choose State--</option>';
  citySelect.innerHTML = '<option value="">--Choose City--</option>';
  const selectedCountry = countrySelect.value;
  if (selectedCountry && data[selectedCountry]) {
    for (let state in data[selectedCountry]) {
      const option = document.createElement("option");
      option.value = state;
      option.textContent = state;
      stateSelect.appendChild(option);
    }
  }
}

function updateCities() {
  citySelect.innerHTML = '<option value="">--Choose City--</option>';
  const selectedCountry = countrySelect.value;
  const selectedState = stateSelect.value;
  if (selectedCountry && selectedState && data[selectedCountry][selectedState]) {
    data[selectedCountry][selectedState].forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  }
}

function showLoading() {
  const country = countrySelect.value;
  const state = stateSelect.value;
  const city = citySelect.value;
  const volume = volumeSelect.value;

  if (country && state && city && volume) {
    document.getElementById("loadingModal").style.display = "flex";

    setTimeout(() => {
      document.getElementById("loadingModal").style.display = "none";
      alert("Search complete! Displaying results...");
    }, 3000);
  } else {
    alert("Please fill all fields before searching.");
  }
}

populateCountries();