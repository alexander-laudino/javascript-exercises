const findTheOldest = function (people) {
  let sortedPeeps = people.sort((a, b) => {
    let aFutureDate, bFutureDate;
    if (a.yearOfDeath === undefined) {
      aFutureDate = new Date().getFullYear();
    } else {
      aFutureDate = a.yearOfDeath;
    }
    const lastPerson = aFutureDate - a.yearOfBirth;
    if (b.yearOfDeath === undefined) {
      bFutureDate = new Date().getFullYear();
    } else {
      bFutureDate = b.yearOfDeath;
    }
    const nextPerson = bFutureDate - b.yearOfBirth;
    return lastPerson > nextPerson ? -1 : 1;
  });
  return sortedPeeps[0];
};

// Do not edit below this line
module.exports = findTheOldest;
