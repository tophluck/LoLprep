import axios from "axios";

export default {
  getChampions: function() {
    return axios.get("/api/allChampions")
  },
  getChampion: function(name) {
    return axios.get("/api/searchChampion/" + name);
  }
};
