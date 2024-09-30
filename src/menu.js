// This module will create the menu page of the site

const content = document.getElementById("content");
const menuContainer = document.createElement("div");
menuContainer.style.display = "flex";
menuContainer.style.flexDirection = "row";
menuContainer.style.gap = "10px";
menuContainer.style.flexWrap = "wrap";
menuContainer.style.justifyContent = "center";

function displayMenu() { 

    // Clears old children before drawing new ones
    // Without this it will keep adding children each time the Menu button is clicked
    while (menuContainer.hasChildNodes()) {
        menuContainer.removeChild(menuContainer.lastChild);
    }

    // Title
    const title = document.createElement("h1");
    title.textContent = "Joel's Noodles Menu";
    title.style.marginBottom = "40px";

    content.appendChild(title);

    // Menu Items
    for(let i = 0; i < 6; i++) {
        const someBurger = new MenuItem("Vietnamese Noodles", "This is amazing you should try this.", 3.99);
        someBurger.displayMenuItem();
    }
    
    content.appendChild(menuContainer);

    // Change the content section background color
    content.style.backgroundColor = "beige";

}

class MenuItem
{
    constructor(title, description, price) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.image = null; // TODO
    }

    displayMenuItem() {
        const newDiv = document.createElement("div");

        newDiv.style.borderRadius = "8px";
        newDiv.style.height = "280px";
        newDiv.style.border = "solid";
        newDiv.style.padding = "10px";
        newDiv.style.display = "flex";
        newDiv.style.flexDirection = "column";
        newDiv.style.alignItems = "center";
        newDiv.style.justifyContent = "space-between";
        newDiv.style.backgroundColor = "white";

        const titleDiv = document.createElement("div");
        titleDiv.textContent = this.title;
        titleDiv.style.backgroundColor = "white";
        titleDiv.style.padding = "5px";
        titleDiv.style.borderRadius = "8px";

        newDiv.appendChild(titleDiv);

        const imageDiv = document.createElement("img");
        imageDiv.style.height = "200px";
        imageDiv.style.width = "250px";
        imageDiv.setAttribute("src", "https://tarasmulticulturaltable.com/wp-content/uploads/2013/06/Pho-Bo-Vietnamese-Beef-Noodle-Soup-2-of-3-1024x683.jpg");
        imageDiv.style.border = "4px gold solid";
        imageDiv.style.borderRadius = "8px";

        newDiv.appendChild(imageDiv);

        const priceDiv = document.createElement("p");
        priceDiv.textContent = this.price + "$";
        priceDiv.style.backgroundColor = "white";
        priceDiv.style.padding = "5px";
        priceDiv.style.borderRadius = "8px";

        newDiv.appendChild(priceDiv);

        const descDiv = document.createElement("p");
        descDiv.textContent = this.description;
        descDiv.style.backgroundColor = "white";
        descDiv.style.padding = "5px";
        descDiv.style.borderRadius = "8px";

        newDiv.appendChild(descDiv);

        menuContainer.appendChild(newDiv);
    }

}

export { displayMenu };