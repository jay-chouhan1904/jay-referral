import axios from "axios";

export const checkForAuth = async () => {
  try {
    let response = await axios.get("verify_current_user");
    let data = await response.data;
    console.log(data);
    return data.status;
  } catch (error) {
    console.log(error);
    return false;
  }
};
