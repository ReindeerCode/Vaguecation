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
        city: "Aarons Corner",
        region: "North Carolina",
        country: "United States of America",
      },
    ],
  },
  {
    day: new Date(),
    email: "email2@yahoo.com",
    trip: [
      {
        homeZip: "03301",
        city: "Aixàs",
        region: "Sant Julià de Lòria",
        country: "Andorra",
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
