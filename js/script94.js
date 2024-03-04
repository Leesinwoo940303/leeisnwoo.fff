let bgImage = document.querySelector(".ARTART");
//  Now registering the scrollTrigger plugin to gsap
gsap.registerPlugin(ScrollTrigger);
// Now we are going to animate

gsap.fromTo(
  bgImage,
  {
    clipPath: "circle(5% at 77% 40%)",
    scale:1.1,
    opacity: .2
  },
  {
    clipPath: "circle(75% at 50% 50%)",
    scale: 1,
    opacity: 1,
    ease: "none",
    //  We want to do that animation on scroll
    scrollTrigger: {
      trigger: bgImage,
      scrub: 2,
      // start: "top center+=100",
      end: "top top",
      // start: "center center",
      // end,
      markers: false, // Set markers to false to hide the debug markers
    },
  }
);