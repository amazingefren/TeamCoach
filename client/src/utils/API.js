import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("/api/users");
  },
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  postUser: function(data, id) {
    return axios.post("/api/teams/" + id, { data });
  },
  deleteUser: function(data) {
    return axios.delete("/api/users", { data });
  },
  allTeams: function() {
    return axios.get("/api/teams");
  },
  createTeam: function(data) {
    return axios.post("/api/teams", { data });
  },
  getTeamUsers: function(data) {
    return axios.get("/api/teams/users");
  },
  postPlan: function(data, id) {
    return axios.post("/api/plans/" + id, { data });
  },

  getPlan: function(id) {
    return axios.get("/api/plans/" + id);
  },
  
  checkLogin: function(data, user) {
    return axios.post("/api/login/" + user, { data });
  }
};
