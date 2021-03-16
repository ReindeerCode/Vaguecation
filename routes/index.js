const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//* all API Routes will start with /api
router.use("/api", apiRoutes);


router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
