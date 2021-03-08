import axios from "axios";

export const API = {
  getPhotos: () => {
    return axios.get("/api/photos/photos");
  },
};
