const express = require("express");
const {
  getAllGoalsController,
  getGoalController,
  setGoalController,
  updateGoalController,
  deleteGoalController,
} = require("../controllers/goalControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router
  .route("/")
  .get(protect, getAllGoalsController)
  .post(protect, setGoalController);
router
  .route("/:id")
  .get(protect, getGoalController)
  .put(protect, updateGoalController)
  .delete(protect, deleteGoalController);

module.exports = router;
