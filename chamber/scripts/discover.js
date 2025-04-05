import { displayLocationDetails } from "./discover-model.js";

const areaUrl = 'https://raw.githubusercontent.com/solok18/wdd231/refs/heads/main/chamber/discoverItems.json';

const cards = document.querySelector('#areas');

async function getareaData() {
    const response = await fetch(areaUrl);
    const data = await response.json();
    // console.table(data.prophets);
    displayareas(data.areas);

}

getareaData();

function displayareas(areas) {
    const locationCard = document.querySelector("#areas");
    locationCard.innerHTML = "";

    // let totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);

    areas.forEach(area => {

        const areaCard = document.createElement("section");
        areaCard.classList.add("area-card");

        // if (membership.completed){
        //     membershipCard.classList.add("completed");
        // }

        areaCard.innerHTML = `
            ${area.imageurl ? `<img src="${area.imageurl}" alt="${area.name}">`: ''}
            <h2>${area.name}</h2>
            <button class="more-info">Learn More</button>
            
            
        `;

        const moreInfo = areaCard.querySelector('.more-info');
        moreInfo.addEventListener("click", () => displayLocationDetails(area));

        locationCard.appendChild(areaCard);
    });

    // document.querySelector("#totalCredits").textContent = `Total Credits: ${totalCredits}`;
}

displayareas(areaUrl);
// getareaData();