// This module will create the about page of the site

const content = document.getElementById("content");

function displayAbout() {
    
    // Title
    const title = document.createElement("h1");
    title.textContent = "About Joel's Noodles";

    content.appendChild(title);

}

export { displayAbout };