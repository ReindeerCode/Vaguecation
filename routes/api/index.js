const router = require("express").Router();
const tripRoutes = require("./tripRoutes");
const photoRoutes = require("./photoRoutes");
const locationRoutes = require("./locationRoutes");

//* defines second / for api routes
router.use("/tripDetails", tripRoutes);
router.use("/photos", photoRoutes);
router.use("/location", locationRoutes);

module.exports = router;
