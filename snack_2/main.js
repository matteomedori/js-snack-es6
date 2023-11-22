"use strict";

/*
FUNCTIONS
*/

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
OPERATIONS
*/

const footballTeams = [
  {
    name: "Juventus",
    points: 0,
    foulsDrawn: 0,
  },
  {
    name: "Inter",
    points: 0,
    foulsDrawn: 0,
  },
  {
    name: "Milan",
    points: 0,
    foulsDrawn: 0,
  },
  {
    name: "Lazio",
    points: 0,
    foulsDrawn: 0,
  },
  {
    name: "Roma",
    points: 0,
    foulsDrawn: 0,
  },
  {
    name: "Napoli",
    points: 0,
    foulsDrawn: 0,
  },
];

footballTeams.forEach((footballTeam) => {
  footballTeam.points = randomNum(0, 80);
  footballTeam.foulsDrawn = randomNum(0, 50);
});

// console.log(footballTeams);

const newArr = footballTeams.map(({ points, ...rest }) => rest);
console.log(newArr);
