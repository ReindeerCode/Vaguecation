const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const travelSchema = new Schema({
  // day: {
  //   type: Date,
  //   default: Date.now(),
  // },
  email: {
    type: String,
    required: "Email is required",
  },
  trip: [
    {
      day: {
        type: Date,
        default: Date.now(),
      },

      city: {
        type: String,
        trim: true,
        required: "city is required by MongoDB",
      },
      region: {
        type: String,
        trim: true,
        required: "region is required by MongoDB",
      },
      country: {
        type: String,
        trim: true,
        required: "country is required by MongoDB",
      },
    },
  ],
});

const travel = mongoose.model("Trip", travelSchema);

module.exports = travel;
