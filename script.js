document.getElementById('calculateBtn').addEventListener('click', calculateLoan);

function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const loanDuration = parseFloat(document.getElementById('loanDuration').value);
    const result = document.getElementById('result');

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanDuration)) {
        result.innerHTML = 'Please enter valid numbers for all fields.';
        return;
    }

    const monthlyInterestRate = interestRate / 100 / 12;
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanDuration));
    const totalInterest = (monthlyPayment * loanDuration) - loanAmount;
    const totalPayment = monthlyPayment * loanDuration;

    // displayResult(monthlyPayment, totalInterest);
    result.innerHTML = `
        <p>Monthly Payment: ${monthlyPayment.toFixed(2)}</p>
        <p>Total Interest Paid: ${totalInterest.toFixed(2)}</p>
        <p>Total Amount Paid: ${totalPayment.toFixed(2)}</p>
    `;
}

// function displayResult(monthlyPayment, totalInterest){
//     result.innerHTML = `
//         <p>Monthly Payment: ${monthlyPayment.toFixed(2)}</p>
//         <p>Total Interest Paid: ${totalInterest.toFixed(2)}</p>
//     `;
// }

document.getElementById('resetBtn').addEventListener('click', function () {
    document.getElementById('loanAmount').value = '';
    document.getElementById('interestRate').value = '';
    document.getElementById('loanDuration').value = '';
    document.getElementById('result').innerHTML = '';
})