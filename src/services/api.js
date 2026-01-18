// services/api.js
import axios from "axios";

export default axios.create({
  baseURL: "https://pokedex-backend-git-main-sanketschalwadi-7970s-projects.vercel.app/api/",
});
