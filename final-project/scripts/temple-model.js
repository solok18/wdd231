export function displayTempleDetails(temple) {
    const dialog = document.querySelector('#location-details');

    dialog.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${temple.name}</h2>
        <p><strong>Address:</strong> ${temple.addresses}</p>
        <p><strong>Phone:</strong> ${temple.phone}</p>
        <p><strong>Announce on:</strong> ${temple.announcement}</p>
        <p><strong>Groundbraking date:</strong> ${temple.grounbraking}</p>
        <p><strong>Site Dedicated by:</strong> ${temple.siteDedication}</p>
        <p><strong>Dedication date:</strong> ${temple.dedication}</p>
        <p><strong>Dedicated by:</strong> ${temple.decicatedBy}</p>
    `;

    dialog.showModal();

    document.getElementById('closeModal').addEventListener('click', () => {
        dialog.close();
    });
}