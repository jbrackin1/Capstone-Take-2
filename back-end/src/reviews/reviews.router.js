const router = require("express").Router();
const controller = require("./reviews.controller");

router.route("/").get(controller.list);

router
    .route("/:review_id")
    .get(controller.read)

module.exports = router;