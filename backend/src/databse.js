const mongoose = require("mongoose");

async function databseConnection() {
  try {
    console.log(process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI, { serverApi: { version: "1", strict: true, deprecationErrors: true } });
  } catch (error) {
    console.log(error)
  }
  
}

module.exports = databseConnection;
