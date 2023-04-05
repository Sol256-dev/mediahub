const {
  getAllMedia,
  getSingleMedia,
  createNewMedia,
  updateMediaRecord,
  deleteMediaRecord,
} = require("../controllers/mediaController");
const validateToken = require("../middleware/validateTokenHandler");

const router = require("express").Router();

router.use(validateToken);
router.route("/").get(getAllMedia);
router.route("/create").post(createNewMedia);
router.route("/update/:id").patch(updateMediaRecord);
router.route("/detele/:id").delete(deleteMediaRecord);
router.route("/:id").get(getSingleMedia);

module.exports = router;
