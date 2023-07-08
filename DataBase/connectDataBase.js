const mongoose = require("mongoose");
const connectDatabase = async () => {
  mongoose.connect(process.env.DB).then(() => {
    console.log("Database is running");
  });
};
module.exports = connectDatabase;
