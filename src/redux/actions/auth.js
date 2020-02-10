import {
  REG_USER,
  REG_SUCCESS,
  REG_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_USER,
  AUTH_FAIL,
  AUTH_SUCCESS,
  LOGOUT
} from "../actionType";
import axios from "axios";

let response = null;
let config = {
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json"
  }
};

export const checkAuthenticatedUser = username => async dispatch => {
  let response = null;
  let token = localStorage.getItem("token");
  if (!token) {
    dispatch({
      type: AUTH_FAIL
    });
  } else {
    try {
      config.headers.Authorization = `Bearer ${token}`;
      response = await axios.get(`/user/${username}`, config);
      dispatch({
        type: AUTH_SUCCESS,
        payload: response
      });
      localStorage.setItem("username", username);
    } catch (err) {
      dispatch({
        type: AUTH_FAIL,
        payload: response
      });
    }
  }
};

export const signup = user => async dispatch => {
  let body = { ...user };
  dispatch({
    type: REG_USER
  });
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  try {
    response = await axios.post("auth/register", body, config);
    dispatch({
      type: REG_SUCCESS,
      payload: response
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: REG_FAIL,
      payload: response
    });
  }
};

export const login = payload => async dispatch => {
  let body = { ...payload };

  dispatch({
    type: LOGIN_USER
  });

  try {
    response = await axios.post("auth/login", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response
    });
  } catch (err) {
    response = {
      data: { error: true, message: "Invalid Credentials" }
    };
    dispatch({
      type: LOGIN_FAIL,
      payload: response
    });
  }
};

export const logout = () => dispatch => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    dispatch({
      type: LOGOUT,
      payload: response
    });
  } catch (err) {
    console.error(err);
  }
};
