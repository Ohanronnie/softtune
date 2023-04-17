import axios from "axios";
//axios.defaults.withCredentials = true;
const baseurl = "http://localhost:3001";
function request(method, url, data, config = {}) {
  let fetchUrl;
  if (url.startsWith("http://") || url.startsWith("https://")) {
    fetchUrl = url;
  } else {
    fetchUrl = `${baseurl}${!url.startsWith("/") ? "/" : ""}${url}`;
  }
  const promise = new Promise((resolve, reject) => {
    axios({
      url: fetchUrl,
      withCredentials: true,
      method: method,
      data: data,
      ...config,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
  return promise;
}
export const axiosInstance = {
  get: (...args) => request("GET", ...args),
  post: (...args) => request("POST", ...args),
  put: (...args) => request("PUT", ...args),
  delete: (...args) => request("DELETE", ...args),
  head: (...args) => request("HEAD", ...args),
  patch: (...args) => request("patch", ...args),
};
