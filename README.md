# GSAP Tutorial Project
GSAP Tutorial Project from Design Youtube Channel "GSAP Animation Tutorial" Video.

#### How to apply GSAP on our project
Copy the gsap js and CSS Rule Plugin js from the GSAP 3 Page and paste them on our html page. Write scripts about the animation on a script page.

__How to apply normal animations__
````javascript
gsap.from(".anim1", {opacity: 0, duration: 1, ease: Power1.inOut, x: -250});
````

__How to apply animations with CSS Rules such as on span::after__
````javascript
const rule = CSSRulePlugin.getRule("span::after");
gsap.to(rule, {cssRule: {scaleY : 0}, duration: 1, delay: 1});
````

__How to apply animation with stagger effect__
````javascript
gsap.from(".anim1", {opacity: 0, duration: 1, ease: Power1.inOut, x: -250, stagger: 0.6});
````

__How to apply timeline animations__
````javascript
const tl = gsap.timeline({defaults: {duration: 1}});
tl.from(".anim1", {opacity: 0, ease: Power1.inOut, x: -250, stagger: 0.6})
.to(rule, {cssRule: {scaleY: 0}}, "-=2.2");
````

__How to give a reverse function to a button__
````javascript
document.querySelector("#cta").addEventListener("click", () => {
  tl.reversed() ? tl.play() : tl.reverse();
})
````

We can also add different CSS Property to the animation. We can also multiple elements and apply animations on them.

__Rotation in 360(also logging the rotation)__
````javascript
//Set the two elements' transform origin to center
gsap.set("#male, #female", {transformOrigin: "50% 50%"});
gsap.to("#male, #female", {duration: 20, rotate: 360});

//Logging the rotation degrees
const myObject = {rotation: 0};
gsap.to(myObject, {duration: 20, rotation: 360, onUpdate: () => {
  console.log(myObject.rotation);
}});
````

__Animating multiple elements and using stagger__
We can use class as a selector to animate multiple elements at once and can also use stagger to add delay between the multiple elements.
````javascript
gsap.to("#female", {duration: 20, ease: "back", rotation: 360});
gsap.from(".circle", {opacity: 0, duration: 3, delay: 1, y: 250, ease: "elastic", stagger: 0.2});
````
__Giving Random Y Values__
We can give random y values for animation in two ways.
*Using Math.random() method
````javascript
gsap.from(".circle", {opacity: 0, duration: 5, delay: 1, y: () => Math.random() * 400 - 200, ease: "elastic", stagger: 0.2});
````

*Using random() method
````javascript
gsap.from(".circle", {opacity: 0, duration: 3, delay: 1, y: "random(-200, 200)", ease: "elastic", stagger: 0.2});
````

__Control Methods__
* Play Animation
````javascript
play.addEventListener("click", () => {
  anim.play();
});
````

* Pause Animation
````javascript
pause.addEventListener("click", () => {
  anim.pause();
});
````

* Seek the time progress of animation
````javascript
seek.addEventListener("click", () => {
  anim.seek(2);
  sequenceUpdateDragger();
});
````

* Show the animation at the provided progress
````javascript
progress.addEventListener("click", () => {
  anim.progress(0.3);
  sequenceUpdateDragger;
});
````

* Reverse Animation
````javascript
reverse.addEventListener("click", () => {
  anim.reverse();
});
````
* Speed up Animation by using timeScale() method
````javascript
timeSpeed.addEventListener("click", () => {
  anim.timeScale(4);
});
````

* Slow down Animation by using timeScale() method
````javascript
timeSlow.addEventListener("click", () => {
  anim.timeScale(0.4);
});
````

__Sequencing in GSAP__
We can add use timeline for smooth gsap animation. We can add relative positioning to tell when we want the animation to take place. We can also declare those positions as label and use it instead. We can repeat the animation and give the yoyo(alternate-reverse-alternate) effect.
````javascript
const anim = gsap.timeline({repeat: "1000", yoyo: true});
anim.addLabel("circlesIntro", "+=1");
anim.to("#female", {duration: 10, ease: "back", rotation: 360});
anim.from(".circle", {opacity: 0, duration: 10, y: "random(-200, 200)", ease: "elastic", stagger: 0.2}, "circlesIntro");
````

<hr>
<br>
#### The End
