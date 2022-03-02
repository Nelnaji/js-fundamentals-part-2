"use strict";
/////////////////////////////////////////////////////
//////// -- JS Fundamentals part 2 -- //////////////
////////////////////////////////////////////////////

////////////////////////////////////////////////////
////////////// -- Challenge #1 -- //////////////////
////////////////////////////////////////////////////
/*
const calcAverage = (score1, score2, score3) => {
  const avgScore = (score1 + score2 + score3) / 3;
  return avgScore;
};

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas && avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win with ${avgDolphins} points`);
  } else if (avgKoalas > avgDolphins && avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalass win with ${avgKoalas} points`);
  } else {
    console.log(`No one wins`);
  }
};

checkWinner(avgDolphins, avgKoalas);
*/

////////////////////////////////////////////////////
////////////// -- Challenge #2 -- //////////////////
////////////////////////////////////////////////////

/*
const calcTip = (bill) => {
  let tip;
  if (bill <= 300 && bill >= 50) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.2;
  }
  return tip;
};

console.log(calcTip(400));

const tips = [calcTip(125), calcTip(555), calcTip(44)];
console.log(tips);
const total = [tips[0] + 125, tips[1] + 555, tips[2] + 44];
console.log(total);
*/

////////////////////////////////////////////////////
////////////// -- Challenge #3 -- //////////////////
////////////////////////////////////////////////////
/*
const mark = {
  firstName: "Mark",
  lastName: "Miller",
  age: 44,
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  age: 38,
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

// you must call the method because it does not call itself

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log("Mark is heavier");
} else {
  console.log("John is Heavier");
}
*/

////////////////////////////////////////////////////
////////////// -- Challenge #4 -- //////////////////
////////////////////////////////////////////////////
/*
const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calcTip = (bill) => {
  let tip;

  if (bill <= 300 && bill >= 50) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.2;
  }
  let total = tip + bill;
  return total;
};

const calcAverage = function (parametre) {
  let sum = 0;
  for (let i = 0; i <= parametre.length - 1; i++) {
    sum = sum + parametre[i];
  }
  let average = sum / parametre.length;
  console.log(average);
  return average;
};

for (let i = 0; i < bill.length - 1; i++) {
  console.log(calcTip(bill[i]));
}

calcAverage(bill);
*/
