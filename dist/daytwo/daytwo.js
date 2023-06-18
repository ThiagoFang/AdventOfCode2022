"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strategyGuide_1 = __importDefault(require("./strategyGuide"));
// --- Day 2: Rock Paper Scissors ---
//First Column:
//A for Rock, B for Paper, and C for Scissors.
//Second Column:
//X for Rock, Y for Paper, and Z for Scissors.
//Points:
// 1 for Rock, 2 for Paper, and 3 for Scissors
// 0 if you lost, 3 if the round was a draw, and 6 if you won
const sampleValues = `
A Y
B X 
C Z
`;
const getRounds = (values) => {
    const rounds = values.trim().split("\n");
    const result = rounds.map((round) => round.split(""));
    return result.map((round) => round.filter((item) => item !== " "));
};
const getItemValue = (item) => {
    if (item === "A" || item === "X")
        return 1; //Rock
    if (item === "B" || item === "Y")
        return 2; //Paper
    if (item === "C" || item === "Z")
        return 3; //Scissors
    return 0;
};
const getRoundsValues = (values) => {
    const newList = values.map((round) => {
        const newRound = [];
        for (const i of round) {
            newRound.push(getItemValue(i));
        }
        return newRound;
    });
    return newList;
};
const sampleResults = getRoundsValues(getRounds(sampleValues));
const inputResults = getRoundsValues(getRounds(strategyGuide_1.default));
const validateRoundScore = (rounds) => {
    return rounds.map((round) => {
        const player1 = round[0];
        const player2 = round[1];
        if (player1 === player2)
            return [player1 + 3, player2 + 3];
        if ((player1 === 1 && player2 === 3) || //Rock wins Scissors
            (player1 === 3 && player2 === 2) || //Scissors wins paper
            (player1 === 2 && player2 === 1) //Paper wins Rock
        ) {
            return [player1 + 6, player2];
        }
        return [player1, player2 + 6];
    });
};
const getSumOfPlayersRounds = (results) => {
    let player1 = 0;
    let player2 = 0;
    for (const round of results) {
        player1 += round[0];
        player2 += round[1];
    }
    return [player1, player2];
};
const finalSampleScore = validateRoundScore(sampleResults);
const finalSamplePLayersScore = getSumOfPlayersRounds(finalSampleScore);
console.log(`The score of sample players is: `);
console.log(`Player One: ${finalSamplePLayersScore[0]}, Player Two: ${finalSamplePLayersScore[1]}`);
const finalInputScore = validateRoundScore(inputResults);
const finalInputPlayersScore = getSumOfPlayersRounds(finalInputScore);
console.log(`The score of input players is: `);
console.log(`Player One: ${finalInputPlayersScore[0]}, Player Two: ${finalInputPlayersScore[1]}`);
