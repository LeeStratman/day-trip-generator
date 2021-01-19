"use strict";

const DESTINATIONS = [
  "Wisconsin Dells",
  "Chippewa Falls",
  "Spring Green",
  "Baraboo",
  "Door County",
];
const RESTAURANTS = [
  "Pizza Hut",
  "Taco John's",
  "Applebee's",
  "Culvers",
  "Chick-fil-A",
];
const TRANSPORTATION = ["Bus", "Train", "Bike", "Car"];
const ENTERTAINMENT = [
  "Museum",
  "Zoo",
  "Park",
  "Theater",
  "Brewery Tour",
  "Shopping",
];

function generateDayTrip() {
  let dayTrip = {
    destination: "",
    restaurant: "",
    transportation: "",
    entertainment: "",
  };

  dayTrip.destination = DESTINATIONS[randomNumber(DESTINATIONS.length)];
  dayTrip.restaurant = RESTAURANTS[randomNumber(RESTAURANTS.length)];
  dayTrip.transportation = TRANSPORTATION[randomNumber(TRANSPORTATION.length)];
  dayTrip.entertainment = ENTERTAINMENT[randomNumber(ENTERTAINMENT.length)];

  console.log(dayTrip);
}

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

generateDayTrip();
