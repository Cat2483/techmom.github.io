const red = 135;
const green = 203;
const blue = 165;

const header = document.getElementById("header");
console.log(header.innerText)

function changeColor() {
    console.log(window.scrollY)
    const scrollFactor = 1 + window.scrollY / 400;

    const r = red / scrollFactor;
    const g = green / scrollFactor;
    const b = blue / scrollFactor;


    const updatedColor = `rgb(${r}, ${g}, ${b})`;

    header.style.backgroundColor = updatedColor;

}
changeColor()

window.addEventListener("scroll", changeColor)

