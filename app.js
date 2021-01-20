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
  const TRANSPORTATION = [
    "Bus",
    "Train",
    "Bike",
    "Car",
    "Horseback",
    "Skateboard",
  ];
  const ENTERTAINMENT = [
    "Museum",
    "Zoo",
    "Park",
    "Theater",
    "Brewery Tour",
    "Shopping",
  ];

  let dayTrip = generateDayTrip();

  while (!dayTrip.confirmed) {
    let command = promptUser.call(dayTrip);

    if (command === null) {
      console.log("Day Trip Cancelled!");
      return;
    }

    switch (command.toLowerCase()) {
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
        confirmDayTrip.call(dayTrip);
        break;
      default:
        console.log("Invalid command, please try again!");
    }
  }

  function generateDayTrip() {
    return {
      confirmed: false,
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
      `Your day trip is displayed below:\n\n
      Destination: ${this.destination} (enter 'd' to change)\n
      Restaurant: ${this.restaurant} (enter 'r' to change)\n
      Transportation: ${this.transportation} (enter 't' to change)\n
      Entertainment: ${this.entertainment} (enter 'e' to change)\n\n\nTo confirm the day trip, enter 'confirm'.\n`,
      "confirm"
    );
  }

  function confirmDayTrip() {
    this.confirmed = true;
    displayDayTrip.call(this);
  }

  function displayDayTrip() {
    console.log("Your Day Trip: \n");
    console.log("Destination: ", this.destination);
    console.log("Restaurant: ", this.restaurant);
    console.log("Transportation: ", this.transportation);
    console.log("Entertainment: ", this.entertainment);
  }

  function randomNumber(max) {
    return Math.floor(Math.random() * max);
  }
};

dayTripApp();
