const router = require("express").Router();
//const mongoose = require("mongoose");
const Travel = require("../../models/vacationInfoFormat");

router.route("/trips").post((req, res) => {
  console.log(req.body, "this is our body request");
  const tripSeed = [
    {
      email: req.body.email,
      trip: [
        {
          day: new Date(),
          city: req.body.trip[0].city,
          region: req.body.trip[0].region,
          country: req.body.trip[0].country,
        },
      ],
    },
  ];

  Travel.insertMany(tripSeed)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
