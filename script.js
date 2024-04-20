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

  if (currentTime.getHours() < "0" || currentTime.getHours() > "12") {
    pm.style.color = "#fff";
    pm.classList.add("shadow");
  } else {
    pm.style.color = "#a8a8a8";
    am.style.color = "#fff";
    am.classList.add("shadow");
  }
  // time section
  hours.textContent =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  minutes.textContent =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  seconds.textContent =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

  // date section
  // weekDay.textContent = weekDays[currentTime.getDay()];
  weekDay.textContent = Intl.DateTimeFormat("default", {
    weekday: "long",
  }).format(currentTime);
  day.textContent = currentTime.getDate();
  month.textContent = Intl.DateTimeFormat("default", { month: "long" }).format(
    currentTime
  );
  year.textContent = currentTime.getFullYear();
}, 1000);
