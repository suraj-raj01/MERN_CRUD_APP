import React, { useState} from "react";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import {message} from "antd";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { Calendar } from 'primereact/calendar';

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
    message.success("Data inserted successfully !!")
    navigate("/display")
  };

  return (
    <div>
      <Container>
        <h1></h1>
        <br />
        <div id="form">
          <h4 style={{textAlign:'center'}}>Insert Form</h4>
          <form>
            <br />
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
            <Calendar id="calender" name="publishdate"
              value={Input.publishdate}
              onChange={handleInput}
              placeholder="publish date" />
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

            <Button label="Save Data" rounded severity="success" onClick={handleSubmit}>
            </Button>
            <br />
          </form>
        </div>
        <br />
        <br />
      </Container>
    </div>
  );
};

export default Insert;
