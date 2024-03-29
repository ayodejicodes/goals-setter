const mongoose = require("mongoose");

// Connect to MONGO DB..
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB connected Sucessfully ${conn.connection.host}`.green.underline
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
