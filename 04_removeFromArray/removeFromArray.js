const removeFromArray = function (array = [], ...args) {
  let argsArray = args;
  for (const item of argsArray) {
    if (!array.includes(item)) {
      continue;
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
        array.splice(i, 1);
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
