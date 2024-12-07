// import axios from "axios";

// const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// const headers = {
//   AUthorization: "bearer " + TMDB_TOKEN,
// };

// export const fetchDataFromApi = async (url, params) => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}${url}`, {
//       headers,
//       params,
//     });
//     return data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

// sum.js
export function sum(a, b) {
  return a + b;
}
