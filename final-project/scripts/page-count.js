async function countVisits() {
    const pageCount = document.getElementById('pageCount');

        try {
            const visits = await new Promise((resolve) => {
                const storeVisits = localStorage.getItem('visits');
                resolve(storeVisits);
            });
            const newCount = visits ? parseInt(visits) + 1: 1;

            pageCount.textContent = `You have visited the page ${newCount} time${newCount !== 1 ? 's':''}`;

            localStorage.setItem('visits', newCount);

        } 
        catch (error) {
            pageCount.textContent = "Sorry, something went wrong.";
            console.error("Visit counter error:", error);
        }
}

document.addEventListener('DOMContentLoaded', countVisits);