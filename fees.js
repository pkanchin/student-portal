document.addEventListener('DOMContentLoaded', (event) => {
    const annualFees = 300000;
    const hostelFees = 80000;
    const messFees = 50000;
    const libraryFees = 20000;

    const totalFees = annualFees + hostelFees + messFees + libraryFees;

    document.getElementById('totalFees').textContent = `₹${totalFees.toLocaleString()}`;

    document.getElementById('payButton').addEventListener('click', () => {
        alert('Proceeding to payment');
    });
});
