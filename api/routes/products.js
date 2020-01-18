const router = require("express").Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage: storage });

const {
  GET_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
} = require("../controllers/products");

router
  .route("/")
  .get(GET_PRODUCTS)
  .post(upload.single("image"), ADD_PRODUCT);

router
  .route("/:id")
  .put(UPDATE_PRODUCT)
  .delete(DELETE_PRODUCT);

module.exports = router;
