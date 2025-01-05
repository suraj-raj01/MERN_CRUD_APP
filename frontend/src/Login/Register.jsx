import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
const Register = () => {
  const navigate = useNavigate();

  const [Input, setValue] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setValue((values) => ({ ...values, [name]:value }));
    console.log(Input);
  };

  const handleSubmit = async() =>{
    let api = `http://localhost:8000/user/userlogin`;
    await axios.post(api,Input).then((res)=>{
      console.log(res.data);
    })
    message.success("user register successfully!!!")
  }

  const login = () => {
    navigate("/login");
  };
  return (
    <div>
      <div id="loginform">
        <h4>Register Form</h4>
        <InputText
          name="name"
          placeholder="enter your name"
          value={Input.name}
          onChange={handleInput}
        />
        <InputText
          name="email"
          placeholder="enter your email"
          value={Input.email}
          onChange={handleInput}
        />
        <InputText
          name="mobile"
          placeholder="enter your phone"
          value={Input.mobile}
          onChange={handleInput}
        />
        <InputText
          type="password"
          name="password"
          placeholder="enter password"
          value={Input.password}
          onChange={handleInput}
        />

        <Button
          label="Register" severity="success" rounded
          onClick={handleSubmit}
        />
        <Button
          label="Already have account"
          severity="success"
          style={{ backgroundColor: "", boxShadow: "none" }}
          onClick={login}
        />
      </div>
    </div>
  );
};

export default Register;
