const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// Matches with "/api/food"
router.route("/")
    .get(bookController.findAll)
    .post(bookController.create);

// Matches with "/api/food/:id"
router.route("/:id")
    .get(bookController.findById);

module.exports = router;
