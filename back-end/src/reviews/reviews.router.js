const router = require("express").Router();
const controller = require("./reviews.controller");

router.route("/").get(controller.list).post(controller.create);

router
    .route("/:reviewId")
    .get(controller.read)
    .delete(controller.destroy)
    .patch(controller.update)


module.exports = router;