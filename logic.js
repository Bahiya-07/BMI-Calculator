window.onload = () => {
    let button = document.querySelector("#btn");
 
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
let heightc= parseInt(document
    .querySelector("#height").value);
let weightc = parseInt(document
    .querySelector("#weight").value);

let resultc = document.querySelector("#result");

if (heightc === "" || isNaN(heightc)) 
    resultc.innerHTML = "Provide a valid Height!";

else if (weightc === "" || isNaN(weightc)) 
    resultc.innerHTML = "Provide a valid Weight!";

// If both input is valid, calculate the bmi
else {

    // Fixing upto 2 decimal places
    let bmi = (weightc / ((heightc * heightc) 
                        / 10000)).toFixed(2);

    // Dividing as per the bmi conditions
    if (bmi < 18.6) resultc.innerHTML =
        `Under Weight : <span>${bmi}</span>`;

    else if (bmi >= 18.6 && bmi < 24.9) 
        resultc.innerHTML = 
            `Normal : <span>${bmi}</span>`;

    else resultc.innerHTML =

        `Over Weight : <span>${bmi}</span>`;
        
}
}