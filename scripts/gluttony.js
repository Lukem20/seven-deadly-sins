import gsap from 'gsap';

const gluttony = document.querySelector('h1');

gsap.from(gluttony, {
    fontSize: 100,
    fontWeight: 200,
    duration: 6,
    ease: "power3.in"
  });
