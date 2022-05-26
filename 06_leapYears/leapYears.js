const leapYears = function (year = 0) {
  let isLeap = false;
  if (year % 4 === 0 && year % 100 === 0) {
    if (year % 400 === 0) isLeap = true;
  } else if (year % 4 === 0) isLeap = true;
  return isLeap;
};

// Do not edit below this line
module.exports = leapYears;
