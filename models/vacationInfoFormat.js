const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const travelSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  email: {
    type: String,
    required: "Email is required",
  },
  trip: [
    {
      homeZip: {
        type: String,
        trim: true,
        required: "homeZip is required",
      },
      city: {
        type: String,
        trim: true,
        required: "city is required",
      },
      region: {
        type: String,
        trim: true,
        required: "region is required",
      },
      country: [
        {
          type: String,
          trim: true,
          required: "country is required",
        },
      ],
    },
  ],
});

const travel = mongoose.model("trip", travelSchema);

module.exports = travel;
