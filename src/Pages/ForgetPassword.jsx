import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import { AlertBox } from "./../Components/ConfirmBox";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./../App";

export const ForgetPassword = (props) => {
  const navigate = useNavigate();
  const [resetToken, setResetToken] = useState("");
  const [requestReset, setRequestReset] = useState(true);
  const [otpValidation, setOtpValidation] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);

  ///////////////////////////////////////////////////////////////
  function emailSent(token = "data") {
    setRequestReset(false);
    setResetToken(token);
    setOtpValidation(true);
    console.log({ tokenFromApi: token });
  }
  /////////////////////////////////////////////////////////////
  function validateSuccess(token = "data") {
    setOtpValidation(false);
    setResetPassword(true);
    setResetToken(token);
  }
  ////////////////////////////////////////////////////////////
  function goToLogin() {
    navigate("/login");
  }
  ////////////////////////////////////////////////////////////
  return (
    <>
      <ResetRequest
        show={requestReset}
        btnClick={emailSent}
        url={props.url}
        onCancel={goToLogin}
        token={resetToken}
      />
      <OtpValidation
        show={otpValidation}
        btnClick={validateSuccess}
        url={props.url}
        token={resetToken}
      />
      <ResetPassword
        show={resetPassword}
        btnClick={goToLogin}
        url={props.url}
        token={resetToken}
      />
    </>
  );
};

function ResetRequest(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("Error");
  const [showError, setShowError] = useState(false);
  const [disable, setDisable] = useState(false);
  const { url, token } = useGlobalContext();

  /////////////////////////////////////////////////////

  if (!props.show) return;
  ///////////////////////////////////////
  function openError(data = "Error") {
    setShowError(true);
    setErrorMsg(data);
  }
  /////////////////////////////////////
  const handleSubmit = async (e) => {
    setShowError(false);
    setDisable(true);
    console.log({ Url: url, token: props.token });
    e.preventDefault();
    let data = { email: email };
    try {
      const response = await axios.post(`${url}/api/forgetPassword`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.success) {
        console.log(response.data);
        props.btnClick(response.data.token);
        setDisable(false);
      } else {
        openError(response.data.message);
        console.log(response.data);
        setDisable(false);
      }
    } catch (err) {
      setDisable(false);
      openError("Error Occur Try again later");
      console.error("Error  : ", err.response);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card shadow" style={{ width: "24rem" }}>
          <div className="card-body">
            <h3 className="card-title text-center mb-4">Forget Password</h3>
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
                {showError ? (
                  <div className="div text-left text-danger">{errorMsg}</div>
                ) : (
                  ""
                )}
              </div>
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-outline-danger col-5"
                  disabled={disable}
                  onClick={props.onCancel}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-outline-primary col-5"
                  disabled={disable}
                >
                  Send Otp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function OtpValidation(props) {
  const [otp, setOtp] = useState("");
  const [errorData, setErrorData] = useState("Invalid Otp");
  const [showError, setShowError] = useState(false);
  const { url, token } = useGlobalContext();

  if (!props.show) return null;
  //////////////////////////////////////////////
  function handleError(data = "Error") {
    setShowError(true);
    setErrorData(data);
  }
  /////////////////////////////////////////////
  // Submit handler for the form
  async function handleSubmit(e) {
    e.preventDefault();
    let formData = {
      token: props.token,
      otp: otp,
    };
    try {
      const response = await axios.post(`${url}/api/validateOtp`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        console.log(response.data.token);
        props.btnClick(response.data.token);
      } else {
        console.log(props.data);
        handleError(props.data.message);
      }
    } catch (err) {
      console.error("Error  : ", err.response);
      handleError(err.response.data.message);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow" style={{ width: "24rem" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Validate OTP</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="otp" className="form-label w-100 text-left">
                Enter OTP
              </label>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                containerStyle={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
                inputStyle={{
                  width: "20%",
                  height: "4rem",
                  fontWeight: "bold",
                  borderRadius: ".5rem",
                  fontSize: "1.4rem",
                  border: "1px solid #E0E0E0",
                }}
                renderSeparator={<span></span>}
                renderInput={(props) => <input type="text" {...props} />}
              />
            </div>
            {showError && (
              <p className="text-left mt-3 text-danger">{errorData}</p>
            )}
            <div className="d-flex justify-content-end">
              <button type="submit" className="col-6 btn btn-outline-primary">
                Verify OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const ResetPassword = (props) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const { url, token } = useGlobalContext();

  if (!props.show) return null;

  const validatePassword = (password) => {
    const minLength = 8;
    if (password.length < minLength) {
      return "Password must be at least 8 characters long.";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordValidationError = validatePassword(password);
    setPasswordError(passwordValidationError);

    if (passwordValidationError) return;

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      return;
    }

    console.log({ token: props.token, password });

    try {
      let formData = { password };
      const response = await axios.post(`${url}/api/updatePassword`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${props.token}`, // Correct Bearer token format
        },
      });

      if (response.data.success) {
        console.log(props.data);
        props.btnClick();
      } else {
        console.log(props.data);
      }
    } catch (err) {
      console.error("Error  : ", err.response);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow" style={{ width: "24rem" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Reset Password</h3>
          <form onSubmit={handleSubmit}>
            {/* Password input */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label w-100 text-left">
                New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {passwordError && (
                <div className="text-danger mt-2">{passwordError}</div>
              )}
            </div>

            {/* Confirm Password input */}
            <div className="mb-3">
              <label
                htmlFor="confirmPassword"
                className="form-label w-100 text-left"
              >
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {confirmPasswordError && (
                <div className="text-danger mt-2">{confirmPasswordError}</div>
              )}
            </div>

            {/* Submit button */}
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-outline-primary">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
