gsap.registerPlugin(ScrollTrigger);

// make the boxes random colors
gsap.set(".box", { backgroundColor: "rgb(random(0,190), random(0,190), random(0,190))" });

// apply parallax effect to any element with a data-speed attribute
gsap.to("[data-speed]", {
  y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window),
  ease: "none",
  scrollTrigger: {
    start: "top bottom",
    end: "max",
    invalidateOnRefresh: true,
    scrub: 1
  }
});