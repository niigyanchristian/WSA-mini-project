const mongoose= require("mongoose");


async function MongoDB() {
  try {
    console.log('=======CONNETING DATABASE=========');
    await mongoose.connect(process.env.URL);
    // initializeDatabase()
    console.log('=======DATABASE CONNECTED=========');
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

module.exports = MongoDB;