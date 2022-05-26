const ftoc = function (temp = 0) {
  let celsius = (temp - 32) * (5 / 9);
  if (!(celsius % 1 === 0)) celsius = parseFloat(celsius.toFixed(1));
  return celsius;
};

const ctof = function (temp = 0) {
  let fahr = temp * (90 / 50) + 32;
  if (!(fahr % 1 === 0)) fahr = parseFloat(fahr.toFixed(1));
  return fahr;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
