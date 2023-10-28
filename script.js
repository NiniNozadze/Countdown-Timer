const currentDate = new Date();
const targetDate = new Date(currentDate.getTime() + 14 * 24 * 60 * 60 * 1000); 

function Countdown() {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

const setDays=document.querySelector(".days").innerHTML = days;
const setHours=document.querySelector(".hours").innerHTML = hours;
const setMinutes=document.querySelector(".minutes").innerHTML = minutes;
const setSeconds=document.querySelector(".seconds").innerHTML = seconds;
}
Countdown();
setInterval(Countdown, 1000);
