const mongoose = require("mongoose");

/**
 * Connects to the MongoDB database using the environment URI.
 */
const connectDB = async () => {
  try {
    const connString = process.env.MONGODB_URI;
    if (!connString) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    const conn = await mongoose.connect(connString);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
