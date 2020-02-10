import React, { useEffect } from "react";
import Navbar from "../component/common/Navbar";
import { Switch, Route } from "react-router-dom";
import Login from "../component/auth/Login";
import Signup from "../component/auth/Signup";
import { connect } from "react-redux";
import { checkAuthenticatedUser } from "../redux/actions/auth";
import Dashboard from "./Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";

const Main = ({ history, checkAuthenticatedUser, isAuth, match, token }) => {
  useEffect(() => {
    let user = localStorage.getItem("username");
    checkAuthenticatedUser(user);
    if (isAuth) {
      history.push("/dash");
    }
  }, [isAuth]);
  return (
    <div>
      {isAuth ? null : <Navbar></Navbar>}
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <PrivateRoute {...match}>
          <Dashboard token={token}></Dashboard>
        </PrivateRoute>
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  token: state.auth.token
});

export default connect(mapStateToProps, { checkAuthenticatedUser })(Main);
