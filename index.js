// Lenis
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
   lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// gsap timeline.
var tl = gsap.timeline();

// hero section parallax animation.
gsap.to("main img", {
   y: "15%",
   scrollTrigger: {
      trigger: "main",
      scrub: 1,
      start: "bottom bottom",
      end: "bottom top",
   },
});

// area2 text reveal animation.
gsap.from(".area2_left p", {
   duration: 0.5,
   y: "105%",
   stagger: 0.01,
   scrollTrigger: {
      trigger: ".area2_left",
      start: "top 80%",
   },
});
gsap.from(".area2_right p", {
   duration: 0.5,
   opacity: 0,
   scrollTrigger: {
      trigger: ".area2_right",
      start: "top 80%",
   },
});
