import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import { AlertBox } from "./../Components/ConfirmBox";
import { useNavigate, Link } from "react-router-dom";
import { useGlobalContext } from "./../App";

export const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [headers, setHeader] = useState("heading");
  const [description, setDescription] = useState("description");
  const [rememberMe, setRememberMe] = useState(true);
  /////////////////////////////////////////////////////
  const { url, setUrl, token, setToken } = useGlobalContext();
  //////////////////////////////////////////////////////
  function handleAlert(headers, description) {
    setHeader(headers);
    setDescription(description);
    setAlert(true);
  }
  /////////////////////////////////////////////////////

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = { email, password };

    try {
      const response = await axios.post(`${url}/api/login`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        if (rememberMe) {
          localStorage.setItem("token", response.data.token);
          const json = JSON.stringify(response.data.user);
          localStorage.setItem("user", json);
          setToken(response.data.token);
          navigate("/dashboard");
        }
        // props.setToken(response.data.token);
      } else {
        // handleAlert("Login Failed", response.data.message);
      }
    } catch (err) {
      // handleAlert("Login Failed", err.response.data.message);
      console.error("Error  : ", err);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card shadow" style={{ width: "24rem" }}>
          <div className="card-body">
            <h3 className="card-title text-center mb-4">Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label w-100 text-left">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="form-label w-100 text-left"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <p className="text-left mt-3">
              Forget Password?<Link to="/forget-password">click here</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
