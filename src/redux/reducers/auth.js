import {
  REG_SUCCESS,
  REG_FAIL,
  REG_USER,
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_SUCCESS,
  AUTH_FAIL,
  LOGOUT
} from "../actionType";
const initialState = {
  authUser: null,
  isAuth: false,
  token: localStorage.getItem("token"),
  loading: "none",
  response: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REG_USER:
      return {
        ...state,
        loading: "start"
      };
    case REG_SUCCESS:
      return {
        ...state,
        loading: "done",
        response: payload
      };
    case REG_FAIL:
      return {
        ...state,
        loading: "done",
        response: payload
      };
    case LOGIN_USER:
      return {
        ...state,
        loading: "start"
      };
    case LOGIN_SUCCESS: {
      localStorage.setItem("token", payload.data.token);
      return {
        ...state,
        loading: "done",
        response: payload
      };
    }
    case LOGIN_FAIL:
      return {
        ...state,
        loading: "done",
        response: payload
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuth: true,
        authUser: payload.data
      };
    case AUTH_FAIL:
      return {
        ...state,
        response: payload,
        isAuth: false,
        authUser: null
      };
    case LOGOUT:
      return {
        ...state,
        response: {},
        isAuth: false,
        authUser: null
      };
    default:
      return state;
  }
};
