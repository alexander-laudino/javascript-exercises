const sumAll = function (start = 0, end = 0) {
  let sum = 0;
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  if (
    start < 0 ||
    end < 0 ||
    !(typeof start === "number") ||
    !(typeof end === "number")
  ) {
    sum = "ERROR";
  } else {
    for (start; start <= end; start++) sum += start;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
