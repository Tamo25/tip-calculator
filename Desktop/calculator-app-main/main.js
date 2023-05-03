const checkBox = document.getElementById('checkbox');
const calculatorLight = document.querySelector('.calculator-light');
const calculator = document.querySelector('.calculator');
const theme = document.querySelector('.theme');
const body = document.body;


checkBox.addEventListener("change", () =>{
    if(checkBox.checked){
        calculatorLight.style.display = "block";
        body.style.backgroundColor = " #E6E6E6";
        calculator.style.display = "none";
        theme.style.color = "#36362C";
    }else{
        calculatorLight.style.display = "none";
        body.style.backgroundColor = "#3A4663";
        calculator.style.display = "block";
        theme.style.color = "#FFF";
    }
});

