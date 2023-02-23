const express = require("express");
const {
  registerUser,
  logInUser,
  getMe,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", registerUser);
router.post("/login", logInUser);
router.get("/me", protect, getMe);

module.exports = router;
