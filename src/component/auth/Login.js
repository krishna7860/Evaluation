import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login, checkAuthenticatedUser } from "../../redux/actions/auth";

const Login = ({
  history,
  login,
  loading,
  response,
  checkAuthenticatedUser,
  isAuth
}) => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  useEffect(() => {
    if (isAuth) {
      history.push("/dash");
    } else {
      if (loading == "done") {
        if (response.data.error) {
          alert(response.data.message);
        } else {
          alert("login Successfull");
          checkAuthenticatedUser(user.username);
        }
      }
    }
  }, [loading, isAuth]);

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const { username, password } = user;

  const handleSubmit = e => {
    e.preventDefault();
    login(user);
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-10  mx-auto">
      <form className="mt-4" onSubmit={handleSubmit}>
        <h3>Login to Airmeet</h3>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={handleChange}
            className="form-control"
            name="username"
            required
          ></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={handleChange}
            name="password"
            required
          ></input>
          <input
            type="submit"
            className="btn btn-primary btn-block mt-4"
            value="Login"
          ></input>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  response: state.auth.response,
  loading: state.auth.loading,
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { login, checkAuthenticatedUser })(
  Login
);
