const asyncHandler = require("express-async-handler");
const GoalModel = require("../models/GoalModel");
const UserModel = require("../models/UserModel");

// @desc        Get all Goals
// route        GET /api/goals
// access       Private
const getAllGoalsController = asyncHandler(async (req, res) => {
  const goals = await GoalModel.find({ userID: req.user.id });

  res.status(200).json(goals);
});

// @desc        Get one Goal
// route        GET /api/goals/:id
// access       Private
const getGoalController = asyncHandler(async (req, res) => {
  const goal = await GoalModel.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error(`Goal with this id: ${req.params.id} not available`);
  }

  res.status(200).json(goal);
});

// @desc        Set Goal
// route        POST /api/goals
// access       Private
const setGoalController = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("You must set Text");
  }

  const createdGoal = await GoalModel.create({
    text: req.body.text,
    userID: req.user.id,
  });
  return res.status(200).json(createdGoal);
});

// @desc        Update Goal
// route        PUT /api/goals/:id
// access       Private
const updateGoalController = asyncHandler(async (req, res) => {
  const foundGoal = await GoalModel.findById(req.params.id);

  if (!foundGoal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  // const user = await UserModel.findById(req.user.id);

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure authenticated user matches goal user
  if (req.user.id !== foundGoal.userID.toString()) {
    res.status(401);
    throw new Error("User not Authorized");
  }

  const updatedGoal = await GoalModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedGoal);
});

// @desc        Delete Goal
// route        DELETE /api/goals/:id
// access       Private

const deleteGoalController = asyncHandler(async (req, res) => {
  const foundGoal = await GoalModel.findById(req.params.id);

  if (!foundGoal) {
    res.status(400);
    throw new Error(`Goal with id:${req.params.id} is unavailable.. Try again`);
  }

  const user = await UserModel.findById(req.user.id);

  // Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure authenticated user matches goal user
  if (user.id !== foundGoal.userID.toString()) {
    res.status(401);
    throw new Error("User not Authorized");
  }

  const deletedGoal = await GoalModel.findByIdAndDelete(req.params.id);
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAllGoalsController,
  getGoalController,
  setGoalController,
  updateGoalController,
  deleteGoalController,
};
