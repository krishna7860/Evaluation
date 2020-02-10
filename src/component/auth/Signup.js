import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { signup } from "../../redux/actions/auth";
// token,name,email,password,username,mobile,description
const Signup = ({ history, signup, response, loading }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: ""
  });

  useEffect(() => {
    console.log(loading);
    if (loading == "done") {
      if (response.data.error) {
        alert(response.data.message);
      } else {
        alert(response.data.message);
        history.push("/login");
      }
    }
  }, [loading]);

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    signup(user);
    setUser({
      name: "",
      email: "",
      password: "",
      username: "",
      mobile: "",
      description: ""
    });
  };

  const { name, email, password, username, mobile, description } = user;
  return (
    <div className="col-md-4 col-sm-10 mx-auto">
      <form className="mt-4 p-3" onSubmit={handleSubmit}>
        <h3>User Registration</h3>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            name="name"
            required
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            name="email"
            required
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            className="form-control"
            name="password"
            required
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            className="form-control"
            name="username"
            required
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input
            type="text"
            value={mobile}
            className="form-control"
            name="mobile"
            required
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            type="text"
            value={description}
            className="form-control"
            name="description"
            required
            onChange={handleChange}
          ></textarea>
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn btn-primary btn-block"
        ></input>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  response: state.auth.response,
  loading: state.auth.loading
});

export default connect(mapStateToProps, { signup })(Signup);
