// This module will create the homepage of the site

const content = document.getElementById("content");

function displayHome () {

    // Title
    const title = document.createElement("h1");
    title.textContent = "Joel's Noodles";

    content.appendChild(title);

    // First paragraph
    const firstParagraph = document.createElement("p");
    firstParagraph.textContent = "Welcome to Joel's Noodles, the best noodle shop on the planet. We offer a wide range of products for all costumers!";

    content.appendChild(firstParagraph);

    // Invitation paragraph
    const invitationParagraph = document.createElement("p");
    invitationParagraph.textContent = "So what are you waiting for? Call and order your very own costumized noodle extravaganzaaa";

    content.appendChild(invitationParagraph);

}


export { displayHome };