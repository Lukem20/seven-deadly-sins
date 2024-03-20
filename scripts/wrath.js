// Get reference to "Wrath"
const shakeChars = document.querySelectorAll(".shake-text");


// Generates a random offset from -3 to 3.
function getRandomOffset() {
    const num = Math.max(Math.floor(Math.random() * 4), 1);
    return Math.random() < 0.5 ? -num : num;
};


let isPaused;
const animate = () => {
    // If not hovering, shake the characters using the randomly generated offset.
    if (!isPaused) {

        shakeChars.forEach(char => {
            char.style.transform = `translate(${getRandomOffset()}px, ${getRandomOffset()}px)`;
        });
        requestAnimationFrame(animate);

    } else {
    // Hovering over "Wrath", remove shake animation.
        [...shakeChars].forEach(char => char.removeAttribute("style"));
    }
};


// // Add event listener to set isPaused if the user is hovering or not.
// document.querySelectorAll(".shake-text").forEach(element => {
//     element.addEventListener("mouseenter", () => {isPaused = true}, {passive: true});
//     element.addEventListener("mouseleave", () => {isPaused = false; requestAnimationFrame(animate)}, {passive: true});
//     requestAnimationFrame(animate);
// }, {passive: true});


requestAnimationFrame(animate);