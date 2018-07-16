const router = require("express").Router();
const championDataRoutes = require("./championData");

// Book routes
router.use("/championData", championDataRoutes);

module.exports = router;
