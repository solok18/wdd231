function countFirstVisit() {
    const pageCount = document.getElementById('pageCount');
    const visits = localStorage.getItem('visits');

    if (!visits) {
        pageCount.textContent = "Welcom! Let us know if you have any questions.";
    }

    const currentDate = new Date();
    localStorage.setItem('visits', currentDate.toISOString());
}

document.addEventListener('DOMContentLoaded', countFirstVisit);