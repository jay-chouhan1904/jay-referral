import axios from "axios";

const token = document.querySelector("[name=csrf-token]").content;

console.log(token);
export const axiosInstance = axios.create({
  headers: { "X-CSRF-TOKEN": token },
});
