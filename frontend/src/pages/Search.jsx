import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { Button } from "primereact/button";
import axios from "axios";
import { Table } from "react-bootstrap";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [book, setBook] = useState("");
  const [mydata, setMydata] = useState([]);

  const mySearch = (e) => {
    let stdname = e.target.value;
    setBook(stdname);
    let api = `https://mern-crud-app-c493.onrender.com/books/searchdisplay`;
    axios.post(api,{book:book}).then((res) => {
      setMydata(res.data);
      console.log(res.data);
    });
  };

  const search = (e) => {
    e.preventDefault();
    message.error("Please enter book name");
  };

  //details
  const details = (id) => {
    navigate(`/details/${id}`);
  };

  // goto update page
  const update = () => {
    navigate("/update");
  };
  // goto home page
  const home = () => {
    navigate("/home");
  };
  
  let ans = mydata.map((key) => {
    // date format
    let date = key.publish_date;
    let date1 = date.split("T");
    let orgdate = date1[0];

      return (
        <>
          <tr>
            <td
              onClick={() => {
                details(key._id);
              }}
              style={{ cursor: "pointer" }}
            >
              {key.auther_name}
            </td>
            <td
              onClick={() => {
                details(key._id);
              }}
              style={{ cursor: "pointer" }}
            >
              {key.book_name}
            </td>
            <td>{orgdate}</td>
            <td>
              {key.book_price}
              {".00 ₹"}
            </td>
          </tr>
        </>
      );
  });

  return (
    <div>
      <Container>
        <h1>Search Page</h1>
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "50px",
            display:'flex',
            flexDirection:'row-reverse',
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Form className="d-flex" style={{ width: "350px" }}>
            <Form.Control
              type="search"
              placeholder="Enter book name"
              className="me-0"
              aria-label="Search"
              value={book}
              onChange={mySearch}
              style={{ borderRadius: "0px", boxShadow: "none" }}
            />
            <Button
              label=""
              severity="success"
              style={{ width: "70px", borderRadius: "0px" }}
              onClick={search}
            >
              <i class="fas fa-magnifying-glass"></i>
            </Button>
          </Form>
          

          {/*----------- for jump page start ------------*/}

          <div>
            <i
              class="fas fa-circle-left"
              style={{
                fontSize: "25px",
                color: "#22C55E",
                cursor: "pointer",
              }}
              onClick={update}
            ></i>
            <i
              class="fas fa-circle-right"
              style={{
                fontSize: "25px",
                color: "#22C55E",
                cursor: "pointer",
                marginLeft: "5px",
              }}
              onClick={home}
            ></i>
          </div>
        </div>
        {/* -------------------jump page end------------------- */}
        <p></p>
        {/* ----------Data Dispaly into Table------------------- */}
        <Table bordered striped hover responsive>
          <thead>
            <tr>
              <th
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#22C55E",
                  color: "white",
                }}
              >
                Auther Name
              </th>
              <th
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#22C55E",
                  color: "white",
                }}
              >
                Book Title
              </th>
              <th
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#22C55E",
                  color: "white",
                }}
              >
                Publish Date
              </th>
              <th
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#22C55E",
                  color: "white",
                }}
              >
                Book Price
              </th>
            </tr>
          </thead>
          <tbody>{ans}</tbody>
        </Table>
        <br /><br/>
      </Container>
    </div>
  );
};

export default Search;
