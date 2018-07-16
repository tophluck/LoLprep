const router = require("express").Router();
const championDataController = require("../../controllers/championDataController");

router.route("/api/getChampions")
  .get(championDataController.findAll)

router.route("/api/searchChampion:id")
  .get(championDataController.findByName)
  .get(championDataController.findByTags)

router.route("/api/role/:id")
    .get(championDataController.findByRole)

module.exports = router;
