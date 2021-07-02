# GSAP Tutorial Project
GSAP Tutorial Project from Design Youtube Channel "GSAP Animation Tutorial" Video.

#### How to apply GSAP on our project
Copy the gsap js and CSS Rule Plugin js from the GSAP 3 Page and paste them on our html page. Write scripts about the animation within a script tag.

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
.to(rule, {cssRule: {scaleY: 0}, "-=2.2"});
````
