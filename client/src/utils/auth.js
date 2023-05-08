import { axiosInstance as axios } from "./axios.js";
export async function auth(location) {
  if (
    location.pathname.includes("login") ||
    location.pathname.includes("signup") ||
    location.pathname === "/"
  ) {
  } else {
    try {
      let res = await axios.get("/res");

    } catch (error) {
      if (error.response.status === 500) {
        return error;
      }
    }
  }
}
