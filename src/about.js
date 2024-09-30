// This module will create the about page of the site

const content = document.getElementById("content");
const aboutContainer = document.createElement("div");
aboutContainer.style.width = "20vw";
aboutContainer.style.height = "50vh";
aboutContainer.style.border = "gold 3px solid";
aboutContainer.style.borderRadius = "8px";
aboutContainer.style.backgroundColor = "white";
aboutContainer.style.padding = "10px";

function displayAbout() {
    while (aboutContainer.hasChildNodes()) {
        aboutContainer.removeChild(aboutContainer.lastChild);
    }

    // Title
    const title = document.createElement("h1");
    title.textContent = "About Joel's Noodles";
    title.style.marginBottom = "40px";

    content.appendChild(title);

    displayInfo();

    content.appendChild(aboutContainer);

    // Change the content section background color
    content.style.backgroundColor = "beige";
}

function displayInfo() {
    const infoParagraph = document.createElement("p");
    infoParagraph.textContent = "We are always working, so feel free to call or visit us at 55 Woodsrow Rangarok Avenue";
    infoParagraph.style.fontSize = "20px";

    aboutContainer.appendChild(infoParagraph);
}

export { displayAbout };