const memberships = [
    {
        membershipType: 'Gold',
        benefits: "Benefits",
        eventDiscount: '30% off events + VIP access',
        specialEvent: 'VIP-only events + meet-and-greets',
        trainingWorkshop: 'Personalized training & leadership development',
        advertising: 'Prime homepage spotlight + social media promo',
        sponsorships: 'Recognized at all major events',
        networking: 'Direct connection to high-profile partners',
    },
    {
        membershipType: 'Gold',
        benefits: "Benefits",
        eventDiscount: '30% off events + VIP access',
        specialEvent: 'VIP-only events + meet-and-greets',
        trainingWorkshop: 'Personalized training & leadership development',
        advertising: 'Prime homepage spotlight + social media promo',
        sponsorships: 'Recognized at all major events',
        networking: 'Direct connection to high-profile partners',
    },
    {
        membershipType: 'Gold',
        benefits: "Benefits",
        eventDiscount: '30% off events + VIP access',
        specialEvent: 'VIP-only events + meet-and-greets',
        trainingWorkshop: 'Personalized training & leadership development',
        advertising: 'Prime homepage spotlight + social media promo',
        sponsorships: 'Recognized at all major events',
        networking: 'Direct connection to high-profile partners',
    },
    {
        membershipType: 'Gold',
        benefits: "Benefits",
        eventDiscount: '30% off events + VIP access',
        specialEvent: 'VIP-only events + meet-and-greets',
        trainingWorkshop: 'Personalized training & leadership development',
        advertising: 'Prime homepage spotlight + social media promo',
        sponsorships: 'Recognized at all major events',
        networking: 'Direct connection to high-profile partners',
    }
    
]

import { displaymembershipDetails } from "./membership-model.js";

function displaymemberships(membershipList) {
    const membershipsSection = document.querySelector("#memberships");
    membershipsSection.innerHTML = "";

    // let totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);

    membershipList.forEach(membership => {

        const membershipCard = document.createElement("section");
        membershipCard.classList.add("membership-card");

        if (membership.completed){
            membershipCard.classList.add("completed");
        }

        membershipCard.innerHTML = `
        <h3>${membership.membershipType} ${membership.benefits}</h3>`;
        // <p><strong>Credits:</strong> ${membership.credits}</p>
        // <p><strong>Technologies:</strong> ${membership.technology.join(",")}</p>
        // `;

        membershipCard.addEventListener("click", () => displaymembershipDetails(membership));

        membershipsSection.appendChild(membershipCard);
    });

    // document.querySelector("#totalCredits").textContent = `Total Credits: ${totalCredits}`;
}

displaymemberships(memberships);

// function filtermemberships(category) {
//     let filtermemberships;

//     if (category === "all") {
//         filtermemberships = memberships;
//     } else {
//         filtermemberships = memberships.filter(membership => membership.subject === category);
//     }

//     displaymemberships(filtermemberships);
// }


// let totalCredits = memberships.reduce((sum, membership) => sum + membership.credits, 0);
// document.querySelector("#totalCredits").textContent = `Total Credits: ${totalCredits}`;
