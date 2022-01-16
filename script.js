const calculate = document.querySelector('#btn');
const addDonations = document.querySelector('#addDonations');
addDonations.addEventListener('click', showDonations);
function showDonations(e){
    e.preventDefault();
    donations.style.display = 'block';
}

calculate.addEventListener('click', calculateCost);

function calculateCost (e){
    e.preventDefault();
    const cost = document.querySelector('#cost').value;
    const people = document.querySelector('#people').value;
    const donations = document.querySelector('#donations').value;

    if(cost==='' || people==='' || people<1){
        Swal.fire({
            icon: 'error',
            title: 'Sorry...',
            text: 'Please enter all information...',
        })
    }

    let amountPerPersone = cost/people;
    let donationsPerPersone = (cost*donations)/people;
    let totalSum = amountPerPersone + donationsPerPersone;

    amountPerPersone = amountPerPersone.toFixed(2);
    donationsPerPersone = donationsPerPersone.toFixed(2);
    totalSum = totalSum.toFixed(2);

    document.querySelector('#dividedBill').textContent = amountPerPersone;
    document.querySelector('#dividedDonations').textContent = donationsPerPersone;
    document.querySelector('#billAndDonations').textContent = totalSum;
}