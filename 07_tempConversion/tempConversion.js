const convertToCelsius = function(farh) {

  if (farh === 32) return 0;
  let celsius = ((farh - 32) * 5/9).toFixed(1);
  return +celsius;
};

const convertToFahrenheit = function(celc) {

  if (celc === 0) return 32;
  let fahrenheit = ((celc *(9/5)) + 32).toFixed(1);

  return +fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
