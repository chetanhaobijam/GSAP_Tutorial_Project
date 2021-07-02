gsap.set("#male, #female", {transformOrigin: "50% 50%"});
gsap.to("#male, #female", {duration: 10, rotation: 360,  ease: "Power1.inOut"});

const myObject = {rotation: 0};
gsap.to(myObject, {duration: 10, rotation: 360, ease: "Power1.inOut", onUpdate: () => {
  console.log(myObject.rotation);
}});