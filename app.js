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

let dayTrip = generateDayTrip();
let confirmed = false;

while (!confirmed) {
  displayDayTrip(dayTrip);
  let command = prompt(
    "Your day trip is below. To refresh, enter 'a'.  To update an option, enter the first letter.  To confirm your trip, enter 'confirm'"
  );

  switch (command) {
    case "a":
      dayTrip = generateDayTrip();
      break;
    case "d":
      dayTrip = updateDayTrip(dayTrip, "destination");
      break;
    case "r":
      dayTrip = updateDayTrip(dayTrip, "restaurant");
      break;
    case "t":
      dayTrip = updateDayTrip(dayTrip, "transportation");
      break;
    case "e":
      dayTrip = updateDayTrip(dayTrip, "entertainment");
      break;
    case "confirm":
      confirmed = true;
      console.log("confirmed");
      break;
    default:
      console.log("Invalid command, please try again!");
  }
}

function generateDayTrip() {
  return {
    destination: DESTINATIONS[randomNumber(DESTINATIONS.length)],
    restaurant: RESTAURANTS[randomNumber(RESTAURANTS.length)],
    transportation: TRANSPORTATION[randomNumber(TRANSPORTATION.length)],
    entertainment: ENTERTAINMENT[randomNumber(ENTERTAINMENT.length)],
  };
}

function updateDayTrip(trip, tripProperty) {
  switch (tripProperty) {
    case "destination":
      trip.destination = updateTripProperty(DESTINATIONS, trip.destination);
      break;
    case "restaurant":
      trip.restaurant = updateTripProperty(RESTAURANTS, trip.restaurant);
      break;
    case "transportation":
      trip.transportation = updateTripProperty(
        TRANSPORTATION,
        trip.transportation
      );
      break;
    case "entertainment":
      trip.entertainment = updateTripProperty(
        ENTERTAINMENT,
        trip.entertainment
      );
      break;
  }

  return trip;
}

function updateTripProperty(options, currentOption) {
  let newOption = options[randomNumber(options.length)];
  while (newOption === currentOption) {
    newOption = options[randomNumber(options.length)];
  }
  return newOption;
}

function displayDayTrip(dayTrip) {
  console.clear();
  console.log("Your Day Trip: \n");
  console.log("Destination: ", dayTrip.destination);
  console.log("Restaurant: ", dayTrip.restaurant);
  console.log("Transportation: ", dayTrip.transportation);
  console.log("Entertainment: ", dayTrip.entertainment);
}

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}
