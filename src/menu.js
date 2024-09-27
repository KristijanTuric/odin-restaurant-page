// This module will create the menu page of the site

const content = document.getElementById("content");

function displayMenu() {
    
    // Title
    const title = document.createElement("h1");
    title.textContent = "Joel's Noodles Menu";

    content.appendChild(title);

}

export { displayMenu };