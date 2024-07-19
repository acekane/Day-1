let CelsiusTemprerature=25;
let FahrenheitTemprerature=77;

function convertToCelsius(cesius){

    return(cesius*9/5)+32;
}
function converToFahrenheit(Fahrenheit){
    return(Fahrenheit-32)*5/9;
}

let convertTOFahrenheit=convertToCelsius(CelsiusTemprerature);
let convertTOCelsius=converToFahrenheit(FahrenheitTemprerature);

console.log("Celsius: ",CelsiusTemprerature,"°C");
console.log("Convert To Fahrenheit: ",convertTOFahrenheit,"°F");

console.log("Fahrenheit: ",FahrenheitTemprerature,"°F");
console.log("convert to Celsius: ",convertTOCelsius,"°C");

document.getElementById('Celsius').innerHTML=(`Celsius : ${CelsiusTemprerature}°C`);
document.getElementById('Fahrenheit').innerHTML=(`Convert To Fahrenheit: ${convertTOFahrenheit}°F`);
document.getElementById('Fahrenheit1').innerHTML=(`Fahrenheit: ${FahrenheitTemprerature}°F`);
document.getElementById('Celsius1').innerHTML=(`Convet to Celsius: ${convertTOCelsius}°C`);









