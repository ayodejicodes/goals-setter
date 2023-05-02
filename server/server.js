const express = require("express");
const color = require("colors");
require("dotenv").config();
const connectDB = require("./config/db");
const errorHandlerMiddleware = require("./middlewares/errorHandlerMiddleware");
const cors = require("cors");

const port = process.env.PORT || 7000;
const app = express();
connectDB();

// MIDDLEWARES
// handles JSON data
app.use(express.json());
// handles form data
app.use(express.urlencoded({ extended: false }));

app.use(cors());

// ROUTES
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Handles Errors
app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Server is running on ${port}`.blue);
});

console.log("Port", process.env.PORT);
