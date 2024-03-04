// set images
// demo works but images are blocked by codepen Cors issue
var images = [
  "./images/1.png",
  "./images/4.png",

]
// instanciate slider
var rbgShiftSlider = new rbgShiftSlider({
  nav: true,
  navElement: '.scene-nav',
  slideImages: images,
  stageWidth: 1920,
  stageHeight: 1131,
  displacementImage: 'https://images.unsplash.com/photo-1495757450029-09dbedacbc36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
  fullScreen: true,
  transitionDuration: 0.20, // must be 0.1 > transitionGhostDuration
  transitionGhostDuration: 0.25,
  transitionFilterIntensity: 150,
  transitionSpriteIntensity: 1,
  mouseDispIntensity: 3,
  interactive: true,
  autoPlay: true,
  autoPlaySpeed: 1500,
});