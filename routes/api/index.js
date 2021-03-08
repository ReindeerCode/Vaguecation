const router = require("express").Router();
const tripRoutes = require("./tripDetails");
const photoRoutes = require("./photoRoutes");

router.use("/tripDetails", tripRoutes);
router.use("/photos", photoRoutes);

module.exports = router;
