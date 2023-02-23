const jwt = require("jsonwebtoken");
const UserModel = require("../models/UserModel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from the header
      token = req.headers.authorization.split(" ")[1];

      // Checks if token is valid -> returns user object
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from decoded token
      const user = await UserModel.findById(decoded.id).select("-password");

      if (!user) {
        res.status(401);
        throw new Error("User not found");
      }

      req.user = user;

      next();
    } catch (error) {
      res.status(400);
      throw new Error("User Unauthorized!");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Unauthorized, no token");
  }
});

module.exports = { protect };
