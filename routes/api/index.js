const router = require("express").Router();

const bookRoutes = require("./book");



// User routes
router.use("/book",bookRoutes)

module.exports = router;