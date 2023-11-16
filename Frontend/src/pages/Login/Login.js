import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { Button } from "antd";
import { checkToken, initLogin, loginUser } from "../../actions/authAction";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser, initLogin, checkToken } = props;
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    // call the login function from the authActions file
    loginUser(email, password);
  };
  const redirect = (event) => {
    navigate("/signin");
  };
  useEffect(() => {
    var flag = checkToken();
    if (flag) {
      initLogin();
      navigate("/home");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="tk-blob" style={{ width: "700px" }}></div>
      <div
        className="Auth-form-container"
        style={{ position: "absolute", top: 0 }}
      >
        <form className="Auth-form" onSubmit={handleLogin}>
          <h3
            className="Auth-form-title"
            style={{
              padding: "20px 0",
              backgroundColor: "#1188f0",
              color: "white",
            }}
          >
            IIT Patna
          </h3>
          <div className="Auth-form-content">
            <h4
              className="Auth-form-title"
              style={{
                color: "gray",
              }}
            >
              Login
            </h4>

            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="jane_2001XX01@iitp.ac.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="bg-blue-500 p-2 rounded text-white"
              >
                Submit
              </button>
            </div>
            <div
              className="text-center"
              style={{
                marginTop: "20px",
                padding: "20px 0",
              }}
            >
              Not registered yet?{" "}
              <button className="mybtn" onClick={redirect}>
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  loginUser,
  initLogin,
  checkToken,
})(Login);
