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

  // Time Format:
  if (currentTime.getHours() < "0" || currentTime.getHours() > "12") {
    pm.style.color = "#fff";
    pm.classList.add("shadow");
  } else {
    pm.style.color = "#a8a8a8";
    am.style.color = "#fff";
    am.classList.add("shadow");
  }

  // time:
  hours.innerHTML = `${
    currentTime.getHours() < "10" ? "0" : ""
  }${currentTime.getHours()}`;

  minutes.innerHTML = `${
    currentTime.getMinutes() < "10" ? "0" : ""
  }${currentTime.getMinutes()}`;

  seconds.innerHTML = `${
    currentTime.getSeconds() < "10" ? "0" : ""
  }${currentTime.getSeconds()}`;

  // Date:
  weekDay.innerHTML = Intl.DateTimeFormat("default", {
    weekday: "long",
  }).format(currentTime);

  day.innerHTML = currentTime.getDate();

  month.innerHTML = Intl.DateTimeFormat("default", {
    month: "long",
  }).format(currentTime);

  year.innerHTML = currentTime.getFullYear();
}, 1000);
