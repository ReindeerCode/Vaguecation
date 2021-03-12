import axios from "axios";

export const API = {
  createLocation: () => {
    return axios.get("/api/location/location");
  },
  getRandom: () => {
    return axios.get("/api/photos/random");
  },
};
