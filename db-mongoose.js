const mongoose = require("mongoose");

function dbConnect(url = "mongodb://localhost:27017/VaguecationDB") {
  return mongoose
    .connect(process.env.MONGODB_URI || url, { useUnifiedTopology: true })
    .then(() => console.log(`Mongoose is connect to  ${url}`))
    .catch((err) => console.error("Mongoose failed to connect"));
}

module.exports = {
  dbConnect,
};
