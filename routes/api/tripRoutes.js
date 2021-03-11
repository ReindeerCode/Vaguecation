const router = require("express").Router();

router.route("/test").get((req, res) => {
  res.json({ success: true });
})

module.exports = router;
