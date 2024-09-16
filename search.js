// Simulated data
const mockData = [
    { npi: '1790141828', date: '2024-01-06', vendor: 'Smokey Point Smiles', insurance: 'Prema Blue Cross' },
    { npi: '0987654321', date: '2024-08-15', vendor: 'ABCD Point', insurance: 'Prema Blue Cross' }
];

// Function to handle the search
function searchEntities() {
    const searchInput = document.getElementById('search-input').value;
    const dateFilter = document.getElementById('date-filter').value;
    const vendorFilter = document.getElementById('vendor-filter').value;

    let filteredData = mockData;

    // Filter by search input
    if (searchInput) {
        filteredData = filteredData.filter(item =>
            item.npi.includes(searchInput) ||
            item.date.includes(searchInput) ||
            item.vendor.includes(searchInput)
        );
    }

    // Filter by date
    if (dateFilter) {
        filteredData = filteredData.filter(item => item.date === dateFilter);
    }

    // Filter by vendor
    if (vendorFilter) {
        filteredData = filteredData.filter(item => item.vendor === vendorFilter);
    }

    displayResults(filteredData);
}

// Function to display search results
function displayResults(data) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (data.length === 0) {
        resultsContainer.innerHTML = '<p>No records found.</p>';
        return;
    }

    data.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.innerHTML = `
            <p><strong>NPI:</strong> ${item.npi}</p>
            <p><strong>Date:</strong> ${item.date}</p>
            <p><strong>Vendor:</strong> ${item.vendor}</p>
            <p><strong>Insurance:</strong> ${item.insurance}</p>
            <button onclick="redirectToEOB('${item.npi}')">Explanation of Benefits</button>
        `;
        resultsContainer.appendChild(resultItem);
    });
}

// Function to handle redirect to the Explanation of Benefits page
function redirectToEOB(npi) {
    // Correcting the URL redirection to include the npi as a query parameter
    window.location.href = `next.html?npi=${npi}`;
}
