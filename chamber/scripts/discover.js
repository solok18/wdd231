import { displayLocationDetails } from "./discover-model.js";

const areaUrl = 'https://raw.githubusercontent.com/solok18/wdd231/refs/heads/main/chamber/discoverItems.json';

const cards = document.querySelector('#areas');

async function getareaData() {
    const response = await fetch(areaUrl);
    const data = await response.json();
    displayareas(data.areas);

}

getareaData();

function displayareas(areas) {
    const locationCard = document.querySelector("#areas");
    locationCard.innerHTML = "";


    areas.forEach(area => {

        const areaCard = document.createElement("section");
        areaCard.classList.add("area-card");

    
        areaCard.innerHTML = `
            <img src="${area.imageurl}" alt="${area.name}" loading="lazy" width="300" height="200">
            <h2>${area.name}</h2>
            <button class="more-info">Learn More</button>
        `;
        
        const moreInfo = areaCard.querySelector('.more-info');
        moreInfo.addEventListener("click", () => displayLocationDetails(area));

        locationCard.appendChild(areaCard);
    });

    
}

displayareas(areaUrl);
