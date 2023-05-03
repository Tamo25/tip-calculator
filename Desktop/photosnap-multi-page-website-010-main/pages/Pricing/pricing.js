const checkBox = document.getElementById("checkbox");
const year = document.getElementById('year');
const month = document.getElementById('month');
const price1 = document.getElementById('price-1');
const price2 = document.getElementById('price-2');
const price3 = document.getElementById('price-3');
const period = document.getElementById("period");
const period2 = document.getElementById("period-2");
const period3 = document.getElementById("period-3");

month.style.opacity = '1';

checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
        year.style.opacity = '1';
        month.style.opacity = '0.5';
        period.textContent = "per year"; 
        period2.textContent = "per year"; 
        period3.textContent = "per year"; 
        price1.textContent = "$190.00";
        price2.textContent = "$390.00";
        price3.textContent = "$990.00";
    } else{
        year.style.opacity = '0.5';
        month.style.opacity = '1';
        period.textContent = "per month"; 
        period2.textContent = "per month"; 
        period3.textContent = "per month"; 
        price1.textContent = "$19.00";
        price2.textContent = "$39.00";
        price3.textContent = "$99.00";
    }

  });
  