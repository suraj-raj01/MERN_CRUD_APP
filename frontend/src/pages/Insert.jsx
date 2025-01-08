import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import { message } from "antd";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { Calendar } from "primereact/calendar";

const Insert = () => {
  const navigate = useNavigate();
  const [Input, setInput] = useState({});
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(Input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let api = "http://localhost:8000/books/datasave";
    axios.post(api, Input).then((res) => {
      console.log(res.data);
    });
    message.success("Data inserted successfully !!");
    navigate("/display");
  };

  //goto home page
  const home = () => {
    navigate("/home");
  };
  //goto display page
  const display = () => {
    navigate("/display");
  };

  return (
    <div>
      <Container>
        <h1></h1>

        {/* For jump page  */}
        <div style={{
          display:'flex',
          alignItems:'center',
          justifyContent:'center'
        }}>
          <i
            class="fas fa-circle-left"
            style={{
              fontSize: "25px",
              color: "#22C55E",
              cursor: "pointer",
            }}
            onClick={home}
          ></i>
          <i
            class="fas fa-circle-right"
            style={{
              fontSize: "25px",
              color: "#22C55E",
              cursor: "pointer",
              marginLeft: "5px",
            }}
            onClick={display}
          ></i>
        </div>

        {/* Insert Form */}
        <br />
        <div id="form">
          <h4 style={{ textAlign: "center",color:'#22C55E'}}>Insert Form</h4>
          <p></p>
          <form>
            <input
              type="text"
              required
              name="authername"
              value={Input.authername}
              onChange={handleInput}
              placeholder="auther name"
            />
            <input
              type="text"
              required
              name="bookname"
              value={Input.bookname}
              onChange={handleInput}
              placeholder="book name"
            />
            {/* <input
              type="date"
              required
              name="publishdate"
              value={Input.publishdate}
              onChange={handleInput}
              placeholder="publish date"
            /> */}
            <Calendar
              id="calender"
              name="publishdate"
              value={Input.publishdate}
              onChange={handleInput}
              placeholder="publish date"
            />
            <input
              type="text"
              required
              name="imagelink"
              value={Input.imagelink}
              onChange={handleInput}
              placeholder="image link"
            />
            <input
              type="number"
              required
              name="bookprice"
              value={Input.bookprice}
              onChange={handleInput}
              placeholder="book price"
            />

            <Button
              label="Save Data"
              rounded
              severity="success"
              onClick={handleSubmit}
            ></Button>
            <h2></h2>
          </form>
        </div>
        <br />
        <br />
      </Container>
    </div>
  );
};

export default Insert;
