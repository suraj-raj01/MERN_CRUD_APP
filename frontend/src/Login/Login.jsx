import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleInput = () => {};

  const register = () => {
    navigate("/register");
  };

  return (
    <div>
      <h1></h1>
      <div>
        <div id="loginform">
          <h4>Login Form</h4>
          <InputText
            name="username"
            placeholder="usernam"
            value={value.username}
            onChange={handleInput}
          />
          <InputText
            name="password"
            placeholder="password"
            value={value.password}
            onChange={handleInput}
          />
          <NavLink
            style={{ marginLeft: "53%", fontWeight: "bold", color: "#2A174F" }}
          >
            Forgot password?
          </NavLink>
          <Button label="Login" severity="success" />
          <Button label="Don't have account" severity="success" onClick={register} />
        </div>
      </div>
    </div>
  );
};

export default Login;
