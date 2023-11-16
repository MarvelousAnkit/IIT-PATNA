import React, { useState } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authAction";
import { useNavigate } from "react-router-dom";

const initialUserData = {
  name: "Jane Doe",
  email: "jane_2001XX01@iitp.ac.in",
  regNo: "2001XX01",
  password: "",
};

const Register = (props) => {
  const navigate = useNavigate();

  const [registerFormData, setRegisterFormData] = useState(initialUserData);
  const { registerUser } = props;

  const onChange = (e) => {
    setRegisterFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const redirect = (event) => {
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserData = registerFormData;

    registerUser(newUserData, props.history);
  };

  return (
    <>
      <div className="tk-blob" style={{ width: "700px" }}></div>
      <div
        className="tk-blob"
        style={{
          fill: "#fdd25d",
          width: "700px",
          position: "fixed",
          right: 0,
          top: "700px",
        }}
      >
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 425.9 377">
          <path d="M389.3 42c39.8 40.8 47.5 116.3 21.3 165.4-26.1 49.1-86 71.8-145.9 104.3-59.8 32.5-119.6 74.8-168.9 63.4C46.5 363.7 7.6 298.5 1 235.7-5.5 173 20.3 112.5 59.8 71.9 99.3 31.2 152.4 10.2 215 2.8 277.5-4.7 349.5 1.2 389.3 42z"></path>
        </svg> */}
      </div>
      <div
        className="Auth-form-container"
        style={{ position: "fixed", top: 0 }}
      >
        <form className="Auth-form" onSubmit={handleSubmit}>
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
              Register
            </h4>

            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control mt-1"
                defaultValue={initialUserData.name}
                name="name"
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Roll Number</label>
              <input
                type="text"
                className="form-control mt-1"
                defaultValue={initialUserData.regNo}
                name="regNo"
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                name="email"
                defaultValue={initialUserData.email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                name="password"
                defaultValue={initialUserData.password}
                onChange={(e) => onChange(e)}
                required
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
            <div className="text-center mt-3">
              Already registered?{" "}
              <button className="mybtn" onClick={redirect}>
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { registerUser })(Register);
