const router = require("express").Router();
const {
  GET_ORDERS,
  ADD_ORDER,
  UPDATE_ORDER,
  DELETE_ORDER
} = require("../controllers/orders");
const checkAuth = require("../../middlewares/checkAuth");

router
  .route("/")
  .get(GET_ORDERS)
  .post(checkAuth, ADD_ORDER);

router
  .route("/:id")
  .put(checkAuth, UPDATE_ORDER)
  .delete(checkAuth, DELETE_ORDER);

module.exports = router;
