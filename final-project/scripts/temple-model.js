export function displayTempleDetails(temple) {
    const dialog = document.querySelector('#location-details');

    dialog.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${temple.name}</h2>
        <p><strong>Address:</strong> ${temple.addresses}</p>
        <p><strong>Description:</strong> ${temple.description}</p>
    `;

    dialog.showModal();

    document.getElementById('closeModal').addEventListener('click', () => {
        dialog.close();
    });
}