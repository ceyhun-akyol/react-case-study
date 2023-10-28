import axios from "axios";

const API_URL = "https://nesine-case-study.onrender.com/";

class BetService {
  getPublicContent() {
    return axios.get(API_URL + "bets");
  }
}

export default new BetService();
