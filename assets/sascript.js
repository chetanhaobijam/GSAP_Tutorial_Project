gsap.to("#female", {duration: 20, ease: "back", rotation: 360});
gsap.from(".circle", {opacity: 0, duration: 5, delay: 1, y: () => Math.random() * 200, ease: "elastic", stagger: 0.2});

