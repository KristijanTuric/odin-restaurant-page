// This module will create the homepage of the site

const content = document.getElementById("content");

function displayHome () {

    // Title
    const title = document.createElement("h1");
    title.textContent = "Joel's Noodles";
    title.style.fontSize = "45px";
    title.style.marginBottom = "20px";

    content.appendChild(title);

    // First paragraph
    const firstParagraph = document.createElement("p");
    firstParagraph.textContent = "Welcome to Joel's Noodles, the best noodle shop on the PLANET. We offer a wide range of products for ALL costumers!";

    // Style the paragraph
    firstParagraph.style.width = "40vw";
    firstParagraph.style.backgroundColor = "black";
    firstParagraph.style.padding = "5px";
    firstParagraph.style.border = "gold 1px solid";
    firstParagraph.style.borderRadius = "8px";
    firstParagraph.style.fontSize = "20px";

    content.appendChild(firstParagraph);

    // Invitation paragraph
    const invitationParagraph = document.createElement("p");
    invitationParagraph.textContent = "So what are you waiting for? Call and order your very own costumized NOODLE extravaganzaaa";

    // Style the paragraph
    invitationParagraph.style.marginTop = "10px";
    invitationParagraph.style.width = "40vw";
    invitationParagraph.style.backgroundColor = "black";
    invitationParagraph.style.padding = "5px";
    invitationParagraph.style.border = "gold 1px solid";
    invitationParagraph.style.borderRadius = "8px";
    invitationParagraph.style.fontSize = "20px";

    content.appendChild(invitationParagraph);

    // Call paragraph
    const callParagraph = document.createElement("p");
    callParagraph.textContent = "Call Us: 123 456 789";

    // Style the paragraph
    callParagraph.style.marginTop = "10px";
    callParagraph.style.width = "auto";
    callParagraph.style.backgroundColor = "black";
    callParagraph.style.padding = "5px";
    callParagraph.style.border = "gold 1px solid";
    callParagraph.style.borderRadius = "8px";
    callParagraph.style.fontSize = "28px";

    content.appendChild(callParagraph);

    // Change the content section background color
    content.style.backgroundColor = "transparent";

}


export { displayHome };