const router = require("express").Router();
const tripRoutes = require("./tripDetails");
const photoRoutes = require("./photoRoutes");
const rapidRoutes = require("./rapid");

router.use("/tripDetails", tripRoutes);
router.use("/photos", photoRoutes);
router.use("/", rapidRoutes);

module.exports = router;
