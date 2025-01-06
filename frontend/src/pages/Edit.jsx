import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import { message } from "antd";
import { Button } from "primereact/button";
import { Calendar } from 'primereact/calendar';
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Input, setInput] = useState({});

  const loadData = () => {
    let api = `http://localhost:8000/books/editdisplay`;
    axios.post(api, { id: id }).then((res) => {
      setInput(res.data);
    });
  };
  useEffect(() => {
    loadData();
  }, []);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(Input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let api = `http://localhost:8000/books/editdatasave/${id}`;
    axios.post(api,Input).then((res) => {
      console.log(Input);
      message.success("Data updated successfully !!");
      navigate("/display");
    });
  };

    //goto home page
    const home = () => {
      navigate("/home");
    };
    //goto insert page
    const insert = () => {
      navigate("/insert");
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
            onClick={insert}
          ></i>
        </div>
        <br />
        <div id="form">
          <h4 style={{ textAlign: "center",color:'#22C55E' }}>Update Form</h4>
          <p></p>
          <form>
            <input
              type="text"
              required
              name="auther_name"
              value={Input.auther_name}
              onChange={handleInput}
              placeholder="auther name"
            />
            <input
              type="text"
              required
              name="book_name"
              value={Input.book_name}
              onChange={handleInput}
              placeholder="book name"
            />
            {/* <input
              type="date"
              required
              name="publish_date"
              value={Input.publish_date}
              onChange={handleInput}
              placeholder="publish date"
            /> */}
            <Calendar
              id="calender"
              name="publish_date"
              value={Input.publish_date}
              onChange={handleInput}
              placeholder="publish date"
            />

            <input
              type="text"
              required
              name="image_link"
              value={Input.image_link}
              onChange={handleInput}
              placeholder="image link"
            />

            <input
              type="number"
              required
              name="book_price"
              value={Input.book_price}
              onChange={handleInput}
              placeholder="book price"
            />

            <Button
              label="Update Data"
              severity="success"
              onClick={handleSubmit}
            ></Button>
            <p></p>
          </form>
        </div>
        <br />
        <br />
      </Container>
    </div>
  );
};

export default Edit;
