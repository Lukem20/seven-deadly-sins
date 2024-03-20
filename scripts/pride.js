import gsap from 'gsap';

const pride = document.querySelector('#prideAnimate');
gsap.to(pride, {
  color: "violet",
})

gsap.to(pride, {
  fontSize: 480,
  fontWeight: 900,
  duration: 6,
  ease: "power3.in"
});


const h1Element = document.querySelector('h1');
gsap.to(h1Element, {
  opacity: 0,
  duration: 0.5,
  delay: 5.5,
});