

// const courseDetails = document.getElementById("course-details");

export function displaymembershipDetails(membership) {

    const membershipDetails = document.querySelector("#memberships-details");

    // membershipDetails.innerHTML = '';
    membershipDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${membership.membershipType} Membership</h2>
    
    <p><strong>Event Dsicounts</strong>: ${membership.eventDiscount}</p>
    <p><strong>Special Events</strong>: ${membership.specialEvent}</p>
    <p><strong>Training and Workshops</strong>: ${membership.trainingWorkshops}</p>
    <p><strong>Adverising</strong>: ${membership.advertising}</p>
    <p><strong>Sponsorships</strong>: ${membership.sponsorships}</p>
    <p><strong>Networking</strong>: ${membership.networking}</p>
    
    `;
    membershipDetails.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
        membershipDetails.close();
    });

    // courseDiv.addEventListener('click', () => {
    //     displayCourseDetails(course);
    // })
}

// displayCourseDetails(course)

// courseDiv.addEventListener('click', () => {
//     displayCourseDetails(course);
// });