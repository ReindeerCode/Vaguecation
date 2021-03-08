const router = require("express").Router();
const tripRoutes = require("./tripDetails");

router.use("/tripDetails", tripRoutes);

module.exports = router;
