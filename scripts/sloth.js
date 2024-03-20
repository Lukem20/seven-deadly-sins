import gsap from 'gsap';


// Animate "Sloth" breathing effect
const sloth = document.querySelector('h1');

// Animate SVG "zzz" path
const path = document.querySelector('svg path');
const pathLength = path.getTotalLength();
const tweenLengthMilisecPerPixel = 2.5;
const tweenLengthSecs = (tweenLengthMilisecPerPixel / 1000) * pathLength;

path.style.strokeDasharray = path.style.strokeDashoffset = pathLength;

const tl2 = gsap.timeline({ defaults: {
    repeat: -1,
    ease: "power1.inOut",
    repeatDelay: 1.2,
    duration: tweenLengthSecs,
}});

tl2.fromTo(path, 
    { // Start values

    },
    { // End values
        strokeDashoffset: 1,

    });