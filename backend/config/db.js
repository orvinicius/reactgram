const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
  // connect to database
  try {
    const dbConn = await mongoose.connect(
      process.env.MONGODB_URI ||
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.yyfkjv8.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("DB connected!");

    return dbConn;
  } catch (error) {
    console.error(error);
  }
};

conn();

module.exports = conn;
