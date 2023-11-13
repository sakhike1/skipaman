import qs from "qs";

const CLIENT_ID = "3a869dae9a5b6e5";
const ROOT_URL = "https://api.imgur.com";

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: "token",
    };

    window.location = `${ROOT_URL}/oath2/authorize?${qs.stringify(
      querystring
    )}`;
  },
};
