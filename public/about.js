 // use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin)
  gsap.from(".member", {
    y: 100,
    duration: 2,
    stagger: 0.5,
    opacity: 0,
  })
  // gsap code here!
});
