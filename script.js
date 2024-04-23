const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const am = document.getElementById("am");
const pm = document.getElementById("pm");
const weekDay = document.querySelector(".weekDay");
const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");

setInterval(() => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentSeconds = currentTime.getSeconds();

  // Time Format
  if (currentHour < "0" || currentHour > "12") {
    pm.style.color = "#fff";
    pm.classList.add("shadow");
  } else {
    pm.style.color = "#a8a8a8";
    am.style.color = "#fff";
    am.classList.add("shadow");
  }

  // Time
  hours.innerHTML = `${currentHour < "10" ? "0" : ""}${currentHour}`;

  minutes.innerHTML = `${currentMinute < "10" ? "0" : ""}${currentMinute}`;

  seconds.innerHTML = `${currentSeconds < "10" ? "0" : ""}${currentSeconds}`;

  // Date
  weekDay.innerHTML = Intl.DateTimeFormat("default", {
    weekday: "long",
  }).format(currentTime);

  day.innerHTML = currentTime.getDate();

  month.innerHTML = Intl.DateTimeFormat("default", {
    month: "long",
  }).format(currentTime);

  year.innerHTML = currentTime.getFullYear();
}, 1000);
