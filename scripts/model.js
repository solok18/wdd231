

// const courseDetails = document.getElementById("course-details");

export function displayCourseDetails(course) {

    const courseDetails = document.querySelector("#course-details");

    // courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;
    courseDetails.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
        courseDetails.close();
    });

    // courseDiv.addEventListener('click', () => {
    //     displayCourseDetails(course);
    // })
}

// displayCourseDetails(course)

// courseDiv.addEventListener('click', () => {
//     displayCourseDetails(course);
// });