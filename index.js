const red = 5;
const green = 129;
const blue = 59;

const header = document.getElementById("header");


function changeColor() {

    const scrollFactor = 1 + window.scrollY / 400;

    const r = red / scrollFactor;
    const g = green / scrollFactor;
    const b = blue / scrollFactor;

    const header = document.getElementById("header");

    const updatedColor = `rgb (${r}, ${g}, ${b})`;


    header.style.backgroundColor = updatedColor;



}
changeColor()
window.addEventListener('scroll', changeColor)

