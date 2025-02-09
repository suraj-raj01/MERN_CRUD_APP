import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Display = () => {

  const [mydata, setMydata] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const navigate = useNavigate();
  const loadData = () => {
    let api = "https://mern-crud-app-c493.onrender.com/books/display";
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 1000);
    setIsVisible(true);
  }, []);

  const details = (id) => {
    navigate(`/details/${id}`);
  };

  //goto insert page
  const insert = () => {
    navigate("/insert");
  };
  //goto update page
  const update = () => {
    navigate("/update");
  };

  let sno = 0;
  const res = mydata.map((key) => {
    sno++;
    let date = key.publish_date;
    let newdate = date.split("T");
    let actualDate = newdate[0];
    // let actualDate = newdate1.reverse();

    return (
      <>
        <tr>
          <td style={{ textAlign: "center", fontWeight: "bold" }}>{sno}</td>
          <td
            style={{ textTransform: "capitalize", cursor: "pointer" }}
            onClick={() => {
              details(key._id);
            }}
          >
            {key.auther_name}
          </td>
          <td
            style={{ textTransform: "capitalize", cursor: "pointer" }}
            onClick={() => {
              details(key._id);
            }}
          >
            {key.book_name}
          </td>
          <td style={{ fontWeight: "bold", textAlign:'center'}}>{actualDate}</td>
          <td style={{ textAlign:'center'}}>
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
        <h1>Display Page</h1>
        {/* For jump page  */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <i
            class="fas fa-circle-left"
            style={{
              fontSize: "25px",
              color: "#22C55E",
              cursor: "pointer",
            }}
            onClick={insert}
          ></i>
          <i
            class="fas fa-circle-right"
            style={{
              fontSize: "25px",
              color: "#22C55E",
              cursor: "pointer",
              marginLeft: "5px",
            }}
            onClick={update}
          ></i>
        </div>
        <br />
        <Table bordered responsive striped variant="light" hover>
          <thead>
            <tr>
              <th
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#22C55E",
                  color: "white",
                  textAlign: "center",
                }}
              >
                S.No
              </th>
              <th
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#22C55E",
                  color: "white"
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
                Book Titles
              </th>
              <th
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#22C55E",
                  color: "white",
                  textAlign:'center'
                }}
              >
                Publish Date
              </th>
              <th
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#22C55E",
                  color: "white",
                  textAlign:'center'
                }}
              >
                Book Price
              </th>
            </tr>
          </thead>
          <tbody>
            {res}
          </tbody>
        </Table>
        <br />
        <br />
      </Container>
    </div>
  );
};

export default Display;
