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
        price: '$999/year',
    },
    {
        membershipType: 'Silver',
        benefits: "Benefits",
        eventDiscount: '20% off events',
        specialEvent: 'Priority registration for exclusive events',
        trainingWorkshop: 'Free entry to premium workshops',
        advertising: 'Featured placement on homepage & newsletter',
        sponsorships: 'Recognized in select events',
        networking: 'Introductions to potential sponsors',
        price: '$499/year',
    },
    {
        membershipType: 'Bronze',
        benefits: "Benefits",
        eventDiscount: '10% off events',
        specialEvent: 'Invitation to annual networking event',
        trainingWorkshop: 'Access to select training sessions',
        advertising: 'Logo on the website directory',
        sponsorships: 'Listed as a supporter',
        networking: 'Invitation to member networking groups',
        price: '$199/year',
    },
    {
        membershipType: 'Non-Profit',
        benefits: "Benefits",
        eventDiscount: '30% off events + free booth at nonprofit fairs',
        specialEvent: 'Access to nonprofit-specific workshops & networking',
        trainingWorkshop: 'Grant-writing & fundraising workshops',
        advertising: 'Nonprofit spotlight in newsletters & website',
        sponsorships: 'Featured as a mission partner in fundraising efforts',
        networking: 'Exclusive nonprofit coalition & donor introductions',
        price: '$299/year',
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
