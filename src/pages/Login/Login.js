import { React, useState } from "react";
import "./login.css";
import InputField from "../components/InputField";
import { useNavigate, useLocation } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
// import { login } from "../controllers/authController";

const Login = () => {
  // const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setFormData((preValue) => ({ ...preValue, [name]: value }));
  };

  const handleSubmit = async (event) => {
    // event.preventDefault();
    // // const { status, message } = await login(formData);
    // if (status === true) {
    //   // setAuth(true);
    //   console.log(status + " Login SuccessFully  ");
    //   navigate(from, { replace: true });
    //   return;
    // }
    // console.log(message);
  };

  return (
    <div className="authentication">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-12 mx-auto">
            <form method="post" className="signup-form" onSubmit={handleSubmit}>
              <p className="sign-in-head">Sign In Hello {true}</p>
              <div class="input-container  my-3">
                <InputField
                  label="Email"
                  onChange={handleChange}
                  name={`email`}
                  // value={formData.email}
                  placeHolder="xyz@gmail.com"
                  type="email"
                />
              </div>
              {/* <p
                style={{
                  fontSize: "0.8rem",
                  color: "red",
                  textAlign: "left",
                  margin: "0px",
                }}
              >{`Email Required`}</p> */}

              <div class="input-container my-3">
                <InputField
                  label="Password"
                  onChange={handleChange}
                  name={`password`}
                  // value={data.password}
                  placeHolder="......"
                  type="password"
                />
              </div>

              <button className="btn signup-btn" type="submit">
                Sign Up
              </button>
            </form>
          </div>
          <div className="col-lg-6 col-md-8 col-12 mx-auto d-flex align-items-center justify-content-center flex-column ">
            <div className="auth-btn-area" style={{ width: "100%" }}>
              <div className="row">
                <div className="col-lg-8 col-sm-10 mx-auto col-12 ">
                  <div className="wrapper-form-btn">
                    <p className="create-an-acc">Create an account</p>
                    <button className="btn signup-btn">Register</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
