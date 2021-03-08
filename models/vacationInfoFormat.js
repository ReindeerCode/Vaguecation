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
      vacationZip: {
        type: String,
        trim: true,
        required: "vacationZip is required",
      },
      hotel: {
        type: String,
        trim: true,
        required: "hotel is required",
      },
      restaurants: [
        {
          type: String,
          trim: true,
          required: "restaurants is required",
        },
      ],
      vacationDays: {
        type: Number,
        required: "Duration is required",
        min: 1,
      },
    },
  ],
});

const travel = mongoose.model("trip", travelSchema);

module.exports = travel;
