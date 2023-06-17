import elvesStorage from "./elvesStorage";

/*
--- Day 1: Calorie Counting ---
Santa's reindeer typically eat regular reindeer food, but they need a lot of magical energy to deliver presents on Christmas. For that, their favorite snack is a special type of star fruit that only grows deep in the jungle. The Elves have brought you on their annual expedition to the grove where the fruit grows.

To supply enough magical energy, the expedition needs to retrieve a minimum of fifty stars by December 25th. Although the Elves assure you that the grove has plenty of fruit, you decide to grab any fruit you see along the way, just in case.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

The jungle must be too overgrown and difficult to navigate in vehicles or access from the air; the Elves' expedition traditionally goes on foot. As your boats approach land, the Elves begin taking inventory of their supplies. One important consideration is food - in particular, the number of Calories each Elf is carrying (your puzzle input).

The Elves take turns writing down the number of Calories contained by the various meals, snacks, rations, etc. that they've brought with them, one item per line. Each Elf separates their own inventory from the previous Elf's inventory (if any) by a blank line.

For example, suppose the Elves finish writing their items' Calories and end up with the following list:

*/

// --- Day 1: Calorie Counting ---
const sampleCalorieList = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

const getHigher = (list: number[]) => {
  let max = 0;
  for (const number of list) {
    max = number > max ? number : max;
  }
  return max;
};

const getCaloriesValues = (sample: string) => {
  return sample.split("\n\n").map((line) => {
    const calories = line.split("\n");

    return calories.reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0);
  });
};

const sampleValues = getCaloriesValues(sampleCalorieList);
console.log(`Max Calories from Sample: ${getHigher(sampleValues)}`);

const inputValues = getCaloriesValues(elvesStorage);
console.log(`Max Calories from input: ${getHigher(inputValues)}`);

// --- Part Two ---
const getSumOfTopThree = (sample: number[]) => {
  const ranking = sample.sort((a, b) => b - a).slice(0, 3);

  return ranking.reduce((acc, curr) => acc + curr);
};

console.log(
  `The sum of top three sample elves is: ${getSumOfTopThree(sampleValues)}`
);

console.log(
  `The sum of top three input elves is: ${getSumOfTopThree(inputValues)}`
);
