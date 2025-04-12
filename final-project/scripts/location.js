import { displaylocationDetails } from "./location-model.js";

const locationsUrl = 'https://raw.githubusercontent.com/solok18/wdd231/refs/heads/main/final-project/data/locations.json';

const cards = document.querySelector('#locations');

async function getlocationData() {
    const response = await fetch(locationsUrl);
    const data = await response.json();
    displaylocations(data.locations);

}

getlocationData();

function displaylocations(locations) {
    const locationContainer = document.querySelector("#locations");
    locationContainer.innerHTML = "";


    locations.forEach(location => {

        const locationCard = document.createElement("section");
        locationCard.classList.add("location-card");

    
        locationCard.innerHTML = `
            
            <h2>${location.name}</h2>
            <button class="more-info">Learn More</button>
        `;
        // <img src="${location.imageurl}" alt="${location.name}" loading="lazy" width="300" height="200"></img>
        const moreInfo = locationCard.querySelector('.more-info');
        moreInfo.addEventListener("click", () => displaylocationDetails(location));

        locationContainer.appendChild(locationCard);
    });

    
}

// displaylocations(locationsUrl);
