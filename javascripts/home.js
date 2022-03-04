const typedH1 = document.getElementById("type-h1");
const myName = ", I'm Rangi";
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000;
let charIndex = 0;

function typeString() {
    if (charIndex < myName.length) {
        typedH1.innerHTML += myName.charAt(charIndex);
        charIndex++;
        setTimeout(typeString, typingDelay);
    }
    else {
        setTimeout(erase, newTextDelay);
    }

}

function erase() {
    if (charIndex > 0) {
        typedH1.innerHTML = myName.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);
    }
    else {
        setTimeout(typeString, typingDelay + 1000)
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(typeString, 500)
})
