import { displayTempleDetails } from "./temple-model.js";

const templesUrl = 'https://raw.githubusercontent.com/solok18/wdd231/refs/heads/main/final-project/data/temples.json';

const cards = document.querySelector('#temples');

async function getTempleData() {
    const response = await fetch(templesUrl);
    const data = await response.json();
    displayTemples(data.temples);

}

getTempleData();

function displayTemples(temples) {
    const templeContainer = document.querySelector("#temples");
    templeContainer.innerHTML = "";


    temples.forEach(temple => {

        const templeCard = document.createElement("section");
        templeCard.classList.add("temple-card");

    
        templeCard.innerHTML = `
            <img src="${temple.imageurl}" alt="${temple.name}" loading="lazy" width="300" height="200" class="temple-image">
            
        `;
            // <h2>${temple.name}</h2>
            // <button class="more-info">Learn More</button>
        
        const moreInfo = templeCard.querySelector('.temple-image');
        moreInfo.addEventListener("click", () => displayTempleDetails(temple));

        templeContainer.appendChild(templeCard);
    });

    
}

// displayTemples(templesUrl);
