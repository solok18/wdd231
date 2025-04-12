export function displaylocationDetails(location) {
    const dialog = document.querySelector('#location-details');

    dialog.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${location.name}</h2>
        <p><strong>Address:</strong> ${location.fact1}</p>
        <p><strong>Facts:</strong> ${location.fact2}</p>
        <p><strong>Facts:</strong> ${location.fact2}</p>
        <p><strong>Dine Out:</strong> ${location.food1}</p>
        <p><strong>Dine Out:</strong> ${location.food2}</p>
        <p><strong>Lodging:</strong> ${location.location1}</p>
        <p><strong>Lodging:</strong> ${location.location2}</p>
    `;

    dialog.showModal();

    document.getElementById('closeModal').addEventListener('click', () => {
        dialog.close();
    });
}