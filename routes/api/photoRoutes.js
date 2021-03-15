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
    .getRandom({ count: 6, query: "travel" })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
