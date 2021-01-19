"use strict";

let dayTripApp = function () {
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

    let command = promptUser();

    switch (command.toLowerCase()) {
      case "a":
        dayTrip = generateDayTrip();
        break;
      case "d":
        dayTrip.destination = updateTripProperty(
          DESTINATIONS,
          dayTrip.destination
        );
        break;
      case "r":
        dayTrip.restaurant = updateTripProperty(
          RESTAURANTS,
          dayTrip.restaurant
        );
        break;
      case "t":
        dayTrip.transportation = updateTripProperty(
          TRANSPORTATION,
          dayTrip.transportation
        );
        break;
      case "e":
        dayTrip.entertainment = updateTripProperty(
          ENTERTAINMENT,
          dayTrip.entertainment
        );
        break;
      case "confirm":
        confirmDayTrip();
        break;
      default:
        console.log("Invalid command, please try again!");
    }
  }

  function generateDayTrip() {
    return {
      destination: updateTripProperty(DESTINATIONS),
      restaurant: updateTripProperty(RESTAURANTS),
      transportation: updateTripProperty(TRANSPORTATION),
      entertainment: updateTripProperty(ENTERTAINMENT),
    };
  }

  function updateTripProperty(options, currentOption = "") {
    let newOption = options[randomNumber(options.length)];

    while (newOption === currentOption) {
      newOption = options[randomNumber(options.length)];
    }

    return newOption;
  }

  function promptUser() {
    return prompt(
      "Your day trip is displayed in the console. To generate a new trip, enter 'a'.  To update a single option, enter the first letter of that option (e.g. To change the destination, enter the letter 'd').  To confirm the day trip, enter 'confirm'."
    );
  }

  function confirmDayTrip() {
    confirmed = true;
    alert("Your trip has been confirmed! Enjoy!");
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
};

dayTripApp();
