const router = require("express").Router();
const {
  GET_ORDERS,
  ADD_ORDER,
  UPDATE_ORDER,
  DELETE_ORDER
} = require("../controllers/orders");

router
  .route("/")
  .get(GET_ORDERS)
  .post(ADD_ORDER);

router
  .route("/:id")
  .put(UPDATE_ORDER)
  .delete(DELETE_ORDER);

module.exports = router;
