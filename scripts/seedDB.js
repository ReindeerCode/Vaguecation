const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/VaguecationDB",
  { useNewUrlParser: true }
);

const tripSeed = [
  {
    email: "email1@yahoo.com",
    trip: [
      {
        day: new Date(),
        city: "Aarons Corner",
        region: "North Carolina",
        country: "United States of America",
      },
    ],
  },
  {
    email: "email2@yahoo.com",
    trip: [
      {
        day: new Date(),
        city: "Aixàs",
        region: "Sant Julià de Lòria",
        country: "Andorra",
      },
    ],
  },
];

db.travelDetails
  .remove({})
  .then(() => db.travelDetails.collection.insertMany(tripSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
