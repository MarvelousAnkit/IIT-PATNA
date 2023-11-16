// import * as actionTypes from "./types";
// import jwt from "jwt-decode";
// import axios from "axios";

// const baseUrl = "http://localhost:8000";

// // // Action to refresh tokens and update store and local storage
// // export const refreshTokens = (refreshToken) => {
// //   // Call API to refresh tokens and get new access and refresh tokens
// //   return axios.post("/api/refresh-tokens", { refreshToken }).then((res) => {
// //     const tokens = res.data;

// //     // Update store and local storage with new tokens
// //     localStorage.setItem("accessToken", tokens.accessToken);
// //     localStorage.setItem("refreshToken", tokens.refreshToken);
// //     return tokens;
// //   });
// // };

// export const checkToken = () => (dispatch) => {
//   const accessToken = localStorage.getItem("accessToken");
//   const refreshToken = localStorage.getItem("refreshToken");

//   if (accessToken && refreshToken) {
//     const accessTokenExp = jwt(accessToken).exp * 1000;
//     const currTime = Date.now();

//     if (accessTokenExp < currTime) {
//       return axios.post("/api/refresh-tokens", { refreshToken }).then((res) => {
//         const tokens = res.data;
//         dispatch({ type: actionTypes.REFRESH_TOKEN, payload: tokens });
//         localStorage.setItem("accessToken", tokens.accessToken);
//         localStorage.setItem("refreshToken", tokens.refreshToken);
//         return true;
//       });
//     }
//   }
// };

// // Action to log in user
// export const loginUser = (userData) => (dispatch) => {
//   dispatch({ type: actionTypes.APP_LOADING });

//   axios
//     .post(`${baseUrl}/auth/login`, userData)
//     .then((res) => {
//       const tokens = res.data;

//       localStorage.setItem("accessToken", tokens.accessToken);
//       localStorage.setItem("refreshToken", tokens.refreshToken);

//       dispatch({ type: actionTypes.USER_LOGIN, payload: tokens });
//       dispatch({ type: actionTypes.SET_AUTHENTICATED });
//     })
//     .catch((err) => {
//       dispatch({ type: actionTypes.APP_LOADING });
//       console.error(err);
//     });
// };

// // Action to register user
// export const registerUser = (userData) => (dispatch) => {
//   dispatch({ type: actionTypes.APP_LOADING });

//   axios
//     .post(`${baseUrl}/auth/register`, userData)
//     .then((res) => {
//       const tokens = res.data;

//       localStorage.setItem("accessToken", tokens.accessToken);
//       localStorage.setItem("refreshToken", tokens.refreshToken);

//       dispatch({ type: actionTypes.USER_REGISTER, payload: tokens });
//       dispatch({ type: actionTypes.SET_AUTHENTICATED });
//     })
//     .catch((err) => {
//       dispatch({ type: actionTypes.APP_LOADING });
//       console.error(err);
//     });
// };

// // Action to log out user
// export const logout = () => (dispatch) => {
//   localStorage.removeItem("accessToken");
//   localStorage.removeItem("refreshToken");

//   dispatch({ type: actionTypes.LOGOUT });
//   dispatch({ type: actionTypes.SET_UNAUTHENTICATED });
// };

// export const initLogin = () => (dispatch) => {
//   const tokens = localStorage.getItem("accessToken");
//   dispatch({ type: actionTypes.USER_LOGIN, payload: tokens });
//   dispatch({ type: actionTypes.SET_AUTHENTICATED });
// };
