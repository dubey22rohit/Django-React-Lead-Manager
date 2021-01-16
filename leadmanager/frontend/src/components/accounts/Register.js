import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";
import PropTypes from "prop-types";

export class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confpassword: "",
  };
  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confpassword } = this.setState;
    if (password != confpassword) {
      this.props.createMessage({ passwordNotMatch: "Passwords do not match!" });
    } else {
      const newUser = { username, email, password };
      this.props.register(newUser);
    }
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, email, password, confpassword } = this.state;
    return (
      <div>
        <div className="card card-body mt-6 mb-4">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                className="form-control"
                type="text"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="text"
                name="email"
                onChange={this.onChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                type="text"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                className="form-control"
                type="text"
                name="confpassword"
                onChange={this.onChange}
                value={confpassword}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p>
              Already have an account?<Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { register, createMessage })(Register);
