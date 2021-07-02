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

