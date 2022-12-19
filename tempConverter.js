//prompts user for a temperature in Kelvin
var kelvin = prompt('Enter a temperature in Kelvin: ');

//converts temperature to Celsius
let celsius = (kelvin - 273.15).toFixed(2);

//converts Celsius to Fahrenheit
let fahrenheit = (celsius * (9/5) + 32).toFixed(2);

//prints results
console.log(`The temperature is ${celsius} degrees Celsius or ${fahrenheit} degrees Fahrenheit.`);
