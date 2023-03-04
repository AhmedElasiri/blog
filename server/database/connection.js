const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    const con = await mongoose.connect("mongodb://127.0.0.1:27017/blog");
    console.log(`mongodb connected: ${con.connection.host}`);
  } catch (err) {
    console.log(`====> error ${err}`);
    process.exit(1);
  }
};

module.exports = connectDB