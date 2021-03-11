require("dotenv").config();
const nodeFetch = require("node-fetch");
const router = require("express").Router();
const { createApi } = require("unsplash-js");

const unsplash = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_API_Key,
  fetch: nodeFetch,
});

router.route("/random").get((req, res) => {
  unsplash.photos
    .getRandom({ count: 10, query: "travel" })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.route("/photos").get((req, res) => {
  unsplash.search
    .getPhotos({ query: "travel", per_page: 5 })
    .then((results) => {
      res.json(results);
    });
});

module.exports = router;
