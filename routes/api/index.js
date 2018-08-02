const router = require("express").Router();
const championDataRoutes = require("./championData");

router.use("/championData", championDataRoutes);

module.exports = router;
