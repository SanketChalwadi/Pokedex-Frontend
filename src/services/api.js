// services/api.js
import axios from "axios";

export default axios.create({
  baseURL: "https://pokedex-backend-ffhl.onrender.com/api/pokemon",
});
