const indicatorHolder = document.getElementById("time-indicators");
const countIndicators = 12;

const clock = document.getElementById("analog-clock");
const clockRadius = clock.offsetWidth / 2 - 8;

for (let i = 0; i < countIndicators; i++) {
  const indicator = document.createElement("div");
  indicatorHolder.appendChild(indicator);
  indicator.classList.add("indicator");

  const indicatorHeight = parseFloat(getComputedStyle(indicator).height);
  const radius = clockRadius - indicatorHeight / 2;

  const angle = (i / countIndicators) * 2 * Math.PI - Math.PI / 2;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  const deg = (i / countIndicators) * 360;

  indicator.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%)) rotate(${deg}deg)`;
}

const secondsHand = document.getElementById("seconds-hand");
const minutesHand = document.getElementById("minutes-hand");
const hoursHand = document.getElementById("hours-hand");

let secondsDeg = 0;
let minutesDeg = 0;
let hoursDeg = 0;

const intervalMs = 10;

let now = new Date();
const seconds = now.getSeconds();
const minutes = now.getMinutes();
const hours = now.getHours();

SetStartValues();

function SetStartValues() {
  secondsDeg = (seconds / 60) * 360;
  minutesDeg = ((minutes * 60 + seconds) / 3600) * 360;
  hoursDeg = ((hours * 3600 + minutes * 60 + seconds) / 43200) * 360;
}

setInterval(() => {
  secondsDeg = setHand(secondsHand, secondsDeg, 60);
  minutesDeg = setHand(minutesHand, minutesDeg, 3600);
  hoursDeg = setHand(hoursHand, hoursDeg, 43200);
}, intervalMs);

function setHand(hand, deg, cycleSeconds) {
  deg += (360 / cycleSeconds) * (intervalMs / 1000);
  hand.style.transform = `translateX(-50%) rotate(${deg}deg)`;
  return deg;
}
