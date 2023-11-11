const mongoose = require("mongoose");
require("dotenv").config();

const uri = `mongodb+srv://${process.env.userName}:${process.env.userPassword}@cluster0.6dsiakk.mongodb.net/burger-hut`;

const dbConnect = async () => {
  try {
    await mongoose.connect(uri, {});
    console.log("database connected..");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
