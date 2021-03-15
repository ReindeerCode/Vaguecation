import axios from "axios";

export const API = {
  createLocation: () => {
    return axios.get("/api/location/location");
  },
  createTrip: (trip) => {
    return axios.post("/api/tripDetails/trips", trip);
  },
  getRandom: () => {
    return axios.get("/api/photos/random");
  },
};
