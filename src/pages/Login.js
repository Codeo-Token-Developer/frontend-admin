import React, { useState, useContext } from "react";
import axios from "axios";
import { urlContext } from "../Context";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../Auth";

function Login() {
  const initialState = {
    email: "",
    password: ""
  };

  const baseUrl = useContext(urlContext);
  const [loginData, setLoginData] = useState(initialState);

  let history = useHistory();

  const handleChange = e => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const onLogin = e => {
    e.preventDefault();
    Swal.showLoading();
    axios({
      url: `${baseUrl}/admins/login`,
      method: "POST",
      data: {
        email: loginData.email,
        password: loginData.password
      }
    })
      .then(({ data }) => {
        Swal.close();
        auth.onLogin(() => {
          localStorage.setItem("adminToken", data.token);
          history.push("/dashboard");
        });
      })
      .catch(err => {
        Swal.close();
        Swal.fire({
          icon: "error",
          title: err.response.data.message,
          showConfirmButton: false,
          timer: 1500
        });
      });
  };

  return (
    <>
      <LoginTemplate onLogin={onLogin} handleChange={handleChange} />
    </>
  );
}

//Template
function LoginTemplate(props) {
  return (
    <>
      <div>
        <div className="account-body accountbg">
          {/* Log In page */}
          <div className="row vh-100 ">
            <div className="col-12 align-self-center">
              <div className="auth-page">
                <div className="card auth-card shadow-lg">
                  <div className="card-body">
                    <div className="px-3">
                      <div className="auth-logo-box">
                        <a href="index.html" className="logo logo-admin">
                          <img
                            src="../assets/images/codeoku.png"
                            height={55}
                            alt="logo"
                            className="auth-logo"
                          />
                        </a>
                      </div>
                      {/*end auth-logo-box*/}
                      <div className="text-center auth-logo-text">
                        <h4 className="mt-0 mb-3 mt-5">Codeo Admin</h4>
                        <p className="text-muted mb-0">
                          Sign in to continue to Acess Backend.
                        </p>

                        <LoginForm
                          onLogin={props.onLogin}
                          handleChange={props.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function LoginForm(props) {
  return (
    <form className="form-horizontal auth-form my-4" onSubmit={props.onLogin}>
      <div className="form-group">
        <label htmlFor="username">Email</label>
        <div className="input-group mb-3">
          <span className="auth-form-icon">
            <i className="dripicons-user" />
          </span>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            onChange={props.handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="userpassword">Password</label>
        <div className="input-group mb-3">
          <span className="auth-form-icon">
            <i className="dripicons-lock" />
          </span>
          <input
            type="password"
            name="password"
            className="form-control"
            id="userpassword"
            placeholder="Enter password"
            onChange={props.handleChange}
          />
        </div>
      </div>

      <div className="form-group row mt-4">
        <div className="col-sm-6">
          <div className="custom-control custom-switch switch-success">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitchSuccess"
            />
            <label
              className="custom-control-label text-muted"
              htmlFor="customSwitchSuccess"
            >
              Remember me
            </label>
          </div>
        </div>
      </div>

      <div className="form-group mb-0 row">
        <div className="col-12 mt-2">
          <button
            className="btn btn-gradient-primary btn-round btn-block waves-effect waves-light"
            type="submit"
          >
            Log In <i className="fas fa-sign-in-alt ml-1" />
          </button>
        </div>
      </div>
    </form>
  );
}

export default Login;
