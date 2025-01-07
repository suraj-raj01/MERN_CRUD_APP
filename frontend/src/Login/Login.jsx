import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {message} from "antd"
import axios from "axios"

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const login=(e)=>{
    e.preventDefault();
    if(user==""){
      message.error("Please enter username");
      document.getElementById("user").focus();
      return false;
    }
    if(pass==""){
      message.error("Please enter password");
      document.getElementById("pass").focus();
    }
    else{
      let api = `http://localhost:8000/user/userdisplay/?user_name=${user}`;
      axios.get(api).then((res)=>{
        if(res.data.length>=1){
          if(res.data[0].password==pass){
            localStorage.setItem("username",res.data[0].user_name.toUpperCase());
            localStorage.setItem("useremail",res.data[0].user_email.toLowerCase());
            localStorage.setItem("userphone",res.data[0].user_phone);
            localStorage.setItem("password",res.data[0].password);
            message.success(`Welcome Mr. "${res.data[0].user_name.toUpperCase()}"`);
            navigate("/userdashboard")
            setUser("");
            setPass("")
          }
          else{
            message.error("incorrect password !!!")
          }
          
        }else{
          message.error("username not found !!!")
        }
      })
    }
  }

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
            id="user"
            name="username"
            placeholder="usernam"
            value={user}
            onChange={(e)=>{setUser(e.target.value)}}
          />
          <InputText
            type="password"
            id="pass"
            name="password"
            placeholder="password"
            value={pass}
            onChange={(e)=>{setPass(e.target.value)}}
          />
          <NavLink
            style={{ marginLeft: "53%", fontWeight: "bold", color: "#2A174F" }}
          >
            Forgot password?
          </NavLink>
          <Button label="Login" severity="success" onClick={login}/>
          <Button label="Don't have account" severity="success" onClick={register} />
        </div>
      </div>
    </div>
  );
};

export default Login;
