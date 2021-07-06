const anim = gsap.timeline();

anim.to("#female", {duration: 10, ease: "back", rotation: 360});
anim.from(".circle", {opacity: 0, duration: 10, y: "random(-200, 200)", ease: "elastic", stagger: 0.2}, "-=10");

// Variable Declarations
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const seek = document.querySelector("#seek");
const progress = document.querySelector("#progress");
const reverse = document.querySelector("#reverse");
const timeSpeed = document.querySelector("#timeSpeed");
const timeSlow = document.querySelector("#timeSlow");

// Control Methods
play.addEventListener("click", () => {
  anim.play();
});
pause.addEventListener("click", () => {
  anim.pause();
});
seek.addEventListener("click", () => {
  anim.seek(2);
  sequenceUpdateDragger();
});
progress.addEventListener("click", () => {
  anim.progress(0.6);
  sequenceUpdateDragger();
});
reverse.addEventListener("click", () => {
  anim.reverse();
});
timeSpeed.addEventListener("click", () => {
  anim.timeScale(4);
});
timeSlow.addEventListener("click", () => {
  anim.timeScale(0.4);
});