// Simulated data for the explanation of benefits
const eobData = {
    '1790141828': {
        grandTotal: {
            billedCharges: '22554.00',
            allowedAmount: '10988.92',
            providerAdjustment: '11565.08',
            insuranceAdjustment: '56.65',
            patientLiability: '0.00',
            payableAmount: '10932.27',
            npi: '1790141828'
        },
        paymentDetails: [
            { date: '2024-01-06', checkNumber: '0029152491', paymentReference: '#2024010650200888', providerName: '-', taxId: '463111392', npi: '1790141828', address: '-', bank: '-', payableAmount: '10932.27' }
        ],
        detailedExplanation: [
            { patientName: 'Meier Burton', serviceDates: '2023-12-12', codeModifier: 'D6057', unitsBilled: '1/1', billedCharges: '1155.00', allowedAmount: '708.78', adjustment: '446.22A', insuranceAdjustment: '0', patientLiability: '0.00', payableAmount: '10874.37' }
        ]
    },
    '0987654321': {
        grandTotal: {
            billedCharges: '000.00',
            allowedAmount: '00.00',
            providerAdjustment: '00.00',
            insuranceAdjustment: '00.00',
            patientLiability: '00.00',
            payableAmount: '00.00',
            npi: '0987654321'
        },
        paymentDetails: [
            { date: '2024-08-15', checkNumber: '-', paymentReference: '-', providerName: '-', taxId: '-', npi: '0987654321', address: '-', bank: '-', payableAmount: '00.00' }
        ],
        detailedExplanation: [
            { patientName: '-', serviceDates: '2024-08-10', codeModifier: '-', unitsBilled: '-', billedCharges: '-', allowedAmount: '-', adjustment: '-', insuranceAdjustment: '-', patientLiability: '-', payableAmount: '-' }
        ]
    }
};

// Function to load EOB data based on NPI
function loadEOB() {
    const params = new URLSearchParams(window.location.search);
    const npi = params.get('npi');

    if (eobData[npi]) {
        const grandTotalSummary = eobData[npi].grandTotal;
        const paymentDetails = eobData[npi].paymentDetails;
        const detailedExplanation = eobData[npi].detailedExplanation;

        populateGrandTotal(grandTotalSummary);
        populatePaymentDetails(paymentDetails);
        populateDetailedExplanation(detailedExplanation);
    }
}

function populateGrandTotal(data) {
    const grandTotalElement = document.getElementById('grand-total-summary');
    grandTotalElement.innerHTML = `
        <tr>
            <td>${data.billedCharges}</td>
            <td>${data.allowedAmount}</td>
            <td>${data.providerAdjustment}</td>
            <td>${data.insuranceAdjustment}</td>
            <td>${data.patientLiability}</td>
            <td>${data.payableAmount}</td>
            <td>${data.npi}</td>
        </tr>
    `;
}

function populatePaymentDetails(data) {
    const paymentDetailsElement = document.getElementById('payment-details');
    data.forEach(item => {
        paymentDetailsElement.innerHTML += `
            <tr>
                <td>${item.date}</td>
                <td>${item.checkNumber}</td>
                <td>${item.paymentReference}</td>
                <td>${item.providerName}</td>
                <td>${item.taxId}</td>
                <td>${item.npi}</td>
                <td>${item.address}</td>
                <td>${item.bank}</td>
                <td>${item.payableAmount}</td>
            </tr>
        `;
    });
}

function populateDetailedExplanation(data) {
    const detailedExplanationElement = document.getElementById('detailed-explanation-of-payment');
    data.forEach(item => {
        detailedExplanationElement.innerHTML += `
            <tr>
                <td>${item.patientName}</td>
                <td>${item.serviceDates}</td>
                <td>${item.codeModifier}</td>
                <td>${item.unitsBilled}</td>
                <td>${item.billedCharges}</td>
                <td>${item.allowedAmount}</td>
                <td>${item.adjustment}</td>
                <td>${item.insuranceAdjustment}</td>
                <td>${item.patientLiability}</td>
                <td>${item.payableAmount}</td>
            </tr>
        `;
    });
}

// Load EOB data when the page is ready
window.onload = loadEOB;
