require("dotenv").config();
// const nodeFetch = require("node-fetch");
const router = require("express").Router();
const axios = require("axios");

const { REACT_APP_x_rapidapi_key } = process.env;

let options = {
  method: "GET",
  url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
  params: { limit: "10", countryIds: "US" },
  headers: {
    "x-rapidapi-key": `${REACT_APP_x_rapidapi_key}`,
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
  },
};

//* request gets random city in USA information. Information is put into MongoDB and emailed to user
router.route("/location").get((req, res) => {
  axios
    .request(options)
    .then(function (response) {
      let input = response.data.data;
      let amount = input.length;
      let randomArray = input[Math.floor(Math.random() * amount)];
      res.json(randomArray);
    })
    .catch((e) => console.error(e));
});

module.exports = router;
