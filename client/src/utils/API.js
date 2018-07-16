import axios from "axios";

export default {
  getChampions: function() {
    return axios.get("/api/allChampions")
  }
};
