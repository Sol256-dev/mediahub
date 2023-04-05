const {
  getAlluser,
  getSingleuser,
  createNewuser,
  updateuserRecord,
  deleteuserRecord,
  login,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = require("express").Router();

router.route("/register").post(createNewuser);
router.get("/", validateToken, getAlluser);
router.route("/login").post(login);
router.patch("/update/:id", validateToken, updateuserRecord);
router.get("/:id", validateToken, getSingleuser);
router.delete("/delete/:id", validateToken, deleteuserRecord);

module.exports = router;
