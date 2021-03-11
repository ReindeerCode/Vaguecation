require("dotenv").config();
const nodeFetch = require("node-fetch");
const router = require("express").Router();
const axios = require("axios");

const { REACT_APP_x_rapidapi_key } = process.env;

let options = {
  method: "GET",
  url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
  params: { countryIds: "US" },
  headers: {
    "x-rapidapi-key": `${REACT_APP_x_rapidapi_key}`,
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
  },
};

router.route("/rapid").get((req, res) => {
  axios
    .request(options)
    .then(function (response) {
      let input = response.data.data;
      //   console.log(input, "input here");
      let amount = input.length;
      let randomArray = input[Math.floor(Math.random() * amount)];
      axios
        .get(
          `https://test.api.amadeus.com/v1/shopping/activities?latitude=${randomArray.latitude}&longitude=${randomArray.longitude}&radius=1&key=RbgcnwyCHchASlFdpW9Wtq9GL6ZY`
        )
        .then((query) => {
          res.send("hello there");
          // res.json(res);
          // res.send(query)
        })
        .catch((e) => console.error(e));
    })
    .catch((e) => console.error(e));
});

module.exports = router;
