import axios from "axios";

export default axios.create({
  baseURL:
    "https://npsk-api.onrender.com",
 
  headers: { "Content-Type": "application/json" },
});
