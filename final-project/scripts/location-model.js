export function displaylocationDetails(location) {
    const dialog = document.querySelector('#location-details');

    dialog.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${location.name}</h2>
        <p><strong>Address:</strong> ${location.addresses}</p>
        <p><strong>Description:</strong> ${location.description}</p>
    `;

    dialog.showModal();

    document.getElementById('closeModal').addEventListener('click', () => {
        dialog.close();
    });
}