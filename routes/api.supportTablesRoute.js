const {
  getMediaTypes,
  createMediaType,
  getGenre,
  createGenre,
  getOrigins,
  createOrigin,
} = require("../controllers/supportTablesController");
const validateToken = require("../middleware/validateTokenHandler");

const router = require("express").Router();

router.use(validateToken)
router.route("/mediatype").get(getMediaTypes).post(createMediaType);
router.route("/genre").get(getGenre).post(createGenre);
router.route("/origin").get(getOrigins).post(createOrigin);

module.exports = router;
