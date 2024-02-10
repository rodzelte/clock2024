function updateClock() {
  fetch("https://worldtimeapi.org/api/ip")
    .then((response) => response.json())
    .then((data) => {
      const hour = String(data.datetime.slice(11, 13)).padStart(2, "0");
      const minute = String(data.datetime.slice(14, 16)).padStart(2, "0");
      const second = String(data.datetime.slice(17, 19)).padStart(2, "0");
      const location = data.timezone;

      const hourDisplay = document.querySelector(".hour");
      const minuteDisplay = document.querySelector(".minute");
      const secondDisplay = document.querySelector(".second");
      const locationDisplay = document.querySelector(".location");

      hourDisplay.textContent = hour;
      minuteDisplay.textContent = minute;
      secondDisplay.textContent = second;
      locationDisplay.textContent = location;
    })
    .catch((error) => console.error("Error fetching time:", error));
}

// Call the function every second
setInterval(updateClock, 1000);

function getLocation() {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const city = data.city;
            const cityDisplay = document.querySelector('.city');
            cityDisplay.textContent = `City: ${city}`;
        })
        .catch(error => console.error('Error fetching location:', error));
}

getLocation();
