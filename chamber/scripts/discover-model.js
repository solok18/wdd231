export function displayLocationDetails(area) {
    const dialog = document.querySelector('#location-details');

    dialog.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${area.name}</h2>
        ${area.imageurl ? `<img src="${area.imageurl}" alt="${area.name}">` : ''}
        <p><strong>Address:</strong> ${area.addresses}</p>
        <p>${area.description}</p>
    `;

    dialog.showModal();

    document.getElementById('closeModal').addEventListener('click', () => {
        dialog.close();
    });
}