"use strict";

//array of bikes
const bikes = [
  {
    name: "Bike1",
    weight: 50,
  },
  {
    name: "Bike2",
    weight: 10,
  },
  {
    name: "Bike3",
    weight: 40,
  },
  {
    name: "Bike4",
    weight: 80,
  },
  {
    name: "Bike5",
    weight: 5,
  },
  {
    name: "Bike6",
    weight: 55,
  },
];

const paragraph = document.querySelector("p");
// assuming the first bike is the lightest
let lowerWeight = bikes[0].weight;
let indexLighterBike = 0;
let nameLighterBike;
//comparing with other bikes except the first
for (let i = 1; i < bikes.length; i++) {
  const { name, weight } = bikes[i];
  if (weight < lowerWeight) {
    lowerWeight = weight;
    indexLighterBike = i;
    nameLighterBike = name;
  }
}
paragraph.innerText = `The lightest bike is the one named ${nameLighterBike} and weights ${lowerWeight}kg `;

// console.log(lowerWeight);
// console.log(indexLighterBike);
// console.log(nameLighterBike);
