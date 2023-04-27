const billInput = document.getElementById('bill');
const tipButtons = document.querySelectorAll('.flex article');
const customTipInput = document.getElementById('custom-input');
const numPeopleInput = document.getElementById('people');
const tipAmountElement = document.querySelector('.tip p');
const totalAmountElement = document.querySelector('.total p');
const resetButton = document.querySelector('button');

let billAmount = 0;
let tipPercent = 0;
let numPeople = 1;

// Update bill amount
billInput.addEventListener('input', (e) => {
  billAmount = parseFloat(e.target.value);
  calculateTip();
});

// Update tip percent
tipButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.id === 'custom') {
      tipPercent = parseFloat(customTipInput.value);
    } else {
      tipPercent = parseFloat(button.textContent);
    }
    calculateTip();
  });
});

// Update number of people
numPeopleInput.addEventListener('input', (e) => {
  numPeople = parseFloat(e.target.value);
  calculateTip();
});

// Reset all inputs and results
resetButton.addEventListener('click', () => {
  billAmount = 0;
  tipPercent = 0;
  numPeople = 1;
  billInput.value = '';
  customTipInput.value = '';
  numPeopleInput.value = '';
  tipAmountElement.textContent = '$0.00';
  totalAmountElement.textContent = '$0.00';
});

// Calculate and update tip and total amounts
function calculateTip() {
  const tipAmount = billAmount * (tipPercent / 100) / numPeople;
  const totalAmount = billAmount * (1 + tipPercent / 100) / numPeople;
  tipAmountElement.textContent = `$${tipAmount.toFixed(2)}`;
  totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`;
}

