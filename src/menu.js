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
    const singaporianRiceNoodles = new MenuItem("Singapore Rice Noodles", "This is amazing you should try this.", 4.99, "https://www.seriouseats.com/thmb/ySajYxQlTQvWjlS6_PLiROIk5FY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__20150424-singapore-noodles-shao-zhong-20-130b0ed9d8ad45b3bd164cbe1328abef.jpg");
    const ramen = new MenuItem("Ramen", "The best Ramen around, even Naruto likes it!", 5.68, "https://www.seriouseats.com/thmb/aTvOUCzbAhOOforjNuUpjS2xAoE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__04__20200420-easy-ramen-noodles-sho-spaeth-3-691ebeca20e44bb89a3dca4aca3d0887.jpg");
    const thaiGlassNoodle = new MenuItem("Thai Glass Noodle", "We bring the best glass noodles you have ever tasted!", 7.68, "https://www.seriouseats.com/thmb/RIVd2zzsj-9DwdJVWJIU69sIdks=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20210928-yam-woon-sen-thai-glass-noodle-salad-vicky-wasik-29-ca742631b53241399c6281a08b81982f.jpg");
    const japaneseColdNoodle = new MenuItem("Japanese Cold Noodles With Broth", "The coldest noodles, The Tastiest, Try it!", 5.55, "https://www.seriouseats.com/thmb/xhsv6lGCMtV52y5JLnkL5Bubwgg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__08__20160719-bukkake-udon-2-2a336be307ae451586895e225b218f29.jpg");
    const loMeinNoodles = new MenuItem("Stir-Fried Lo Mein Noodles", "With Pork and Vegetables", 6.66, "https://www.seriouseats.com/thmb/CI_AI9F-p8CT50gzSj0nsyAr8MY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__03__Stir_Fried_Lo_Mein_20170315_3-edit-2c3b383fcb0049239ce4cdf90b0d9603.jpg");
    const beefLoMeinNoodles = new MenuItem("Stir-Fried Lo Mein Noodles", "With Beef and Broccoli", 6.69, "https://www.seriouseats.com/thmb/bzYVvawxvCaAGw9XWrMS4UihAXo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/stir-fried-lo-mein-beef-broccoli-recipe-hero_1-fb1583fd219b4cb584af022fb9d2f2e8.JPG");
    const chickenNoodleSoup = new MenuItem("Vietnamese Chicken Noodle Soup", "Chicken inside, it doesn't bite, probably...", 5.55, "https://www.seriouseats.com/thmb/2KIoQUZgc5bVxYNuWsjBR02Bd1Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__01__20140108-pressure-cooker-pho-ga-vietnamese-chicken-noodle-soup-06-16a750a314f7453084da70c4ba982ee2.jpg");
    const chineseColdNoodle = new MenuItem("Chinese Cold Noodle Salad", "With Sesame Dressing", 7.59, "https://www.seriouseats.com/thmb/pGgVaJqJJRMZzzeODxMjm6rv95w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20220720-Seasame-Noodles--Amanda-Suarez-Hero-53162bd767484e0aac39b833bc67be1a.JPG");

    // Display all menu items
    const menuItems = [singaporianRiceNoodles, ramen, thaiGlassNoodle, japaneseColdNoodle, loMeinNoodles, beefLoMeinNoodles, chickenNoodleSoup, chineseColdNoodle];
    menuItems.forEach(displayAllMenuItems);

    content.appendChild(menuContainer);

    function displayAllMenuItems(item)
    {
        item.displayMenuItem();
    }

    // Change the content section background color
    content.style.backgroundColor = "beige";

}

class MenuItem
{
    constructor(title, description, price, image) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.image = image;
    }

    displayMenuItem() {
        const newDiv = document.createElement("div");

        newDiv.style.borderRadius = "8px";
        newDiv.style.height = "300px";
        newDiv.style.width = "320px";
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
        titleDiv.style.fontWeight = "bold";

        newDiv.appendChild(titleDiv);

        const imageDiv = document.createElement("img");
        imageDiv.style.height = "200px";
        imageDiv.style.width = "250px";
        imageDiv.style.maxHeight = "200px";
        imageDiv.style.maxWidth = "250px";
        imageDiv.setAttribute("src", this.image);
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