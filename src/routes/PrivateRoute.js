import React from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

const PrivateRoute = ({ children, isAuth }) => {
  return <div>{isAuth ? children : <Redirect to="/login"></Redirect>}</div>;
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {})(PrivateRoute);
