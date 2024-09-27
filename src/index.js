import logoImage from "./logo.png";
import "./style.css";
import { displayHome } from "./home";
import { displayAbout } from "./about";
import { displayMenu } from "./menu";

const content = document.getElementById("content");

const homeBtn = document.getElementById("homeBtn");
const aboutBtn = document.getElementById("aboutBtn");
const menuBtn = document.getElementById("menuBtn");

displayHome();

aboutBtn.addEventListener('click', () => { 
    clearAllChildren(content);
    displayAbout();
})

homeBtn.addEventListener('click', () => {
    clearAllChildren(content);
    displayHome();
})

menuBtn.addEventListener('click', () => {
    clearAllChildren(content);
    displayMenu();
})

// Clears all children of the given element
function clearAllChildren (element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.lastChild);
    }
}