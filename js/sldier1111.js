gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease:"none",duration: 2});

const timeline = gsap.timeline();
timeline
  .from(".sec3",{xPercent:"-100"})
  .from(".sec4",{xPercent:"100"})
  .from(".sec5",{yPercent:"100"});

ScrollTrigger.create({
  animation: timeline,
  trigger: ".container",
  start: "top top",
  end: "+=300%",
  scrub: 2,
  pin: true,
  markers: true,
  anticipatePin: 1
});