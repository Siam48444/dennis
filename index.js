// Lenis
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
   lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

gsap.to("main img", {
   y: "15%",
   scrollTrigger: {
      trigger: "main",
      scrub: 1,
      start: "bottom bottom",
      end: "bottom top",
   },
});
