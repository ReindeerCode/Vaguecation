const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/VaguecationDB"
);

const tripSeed = [
  {
    day: new Date(),
    email: "email1@yahoo.com",
    trip: [
      {
        homeZip: "55113",
        vacationZip: "03275",
        hotel: "DoubleTree",
        restaurants: ["Pops", "Johnson's"],
        vacationDays: 5,
      },
    ],
  },
  {
    day: new Date(),
    email: "email2@yahoo.com",
    trip: [
      {
        homeZip: "03301",
        vacationZip: "55343",
        hotel: "DoubleTree",
        restaurants: ["Taco John's", "Pizza Palace"],
        vacationDays: 6,
      },
    ],
  },
];

db.userTravel
  .remove({})
  .then(() => db.userTravel.collection.insertMany(tripSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
