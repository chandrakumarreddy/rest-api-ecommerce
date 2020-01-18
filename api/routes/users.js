const router = require("express").Router();
const { SIGNUP } = require("../controllers/users");

router.post("/signup", SIGNUP);

module.exports = router;
