const router = require("express").Router();
const mongoose = require("mongoose");
const Travel = require("../../models/vacationInfoFormat");

router.route("/trips").post((req, res) => {
  console.log(req.body, "this is our body request");
  const tripSeed = [
    {
      day: new Date(),
      email: req.body.email,
      trip: [
        {
          homeZip: req.body.trip[0].homeZip,
          city: req.body.trip[0].city,
          region: req.body.trip[0].region,
          country: req.body.trip[0].country,
        },
      ],
    },
  ];

  //   console.log(JSON.parse(tripSeed,null,1), "this is our seed");

  Travel.insertMany(tripSeed)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
    });

  //   let email = req.body.email;
  //   let trip = req.body.trip;
  //   console.log(req.body);
  //   let { email, trip } = req.body;
  //   let newTravel = { email, trip };
  //   Travel.insertMany([newTravel])
  //     .then((results) => {
  //       res.status(201).json(newTravel);
  //       console.log(results);
  //     })
  //     .catch((err) => {
  //       console.log("this our error");
  //       console.error(err);
  //     });
});

module.exports = router;
