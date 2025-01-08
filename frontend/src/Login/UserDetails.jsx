import axios from "axios";
import React, { useEffect, useState } from "react";
import {Table } from "react-bootstrap";
import {useParams } from "react-router-dom";
const UserDetails = () => {
  const { id } = useParams();
  const [mydata, setMydata] = useState({});

  const loadData = () => {
    let api = `http://localhost:8000/user/userdetails/${id}`;
    axios.get(api).then((res) => {
      setMydata(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h1>User Details</h1>
      <div id="details">
        {/* <span id="remove" onClick={logout}><i class="fas fa-right-from-bracket"></i></span> */}

        <div id="box">
          <h2 style={{ color: "#22C55E" }}>User Details</h2>
          <br />
          <h5>Name : {mydata.user_name}</h5>
          <h5>Email : {mydata.user_email}</h5>
          <h5>Phone : {mydata.user_phone}</h5>
          <h5>
            Password : <span id="pass-hide">{mydata.password}</span>
          </h5>
          <br />
        </div>

        <div id="box2">
          <div style={{ textAlign: "start", width: "100%", color: "red" }}>
            <h4>User Purchased Books</h4>
          </div>
          <Table bordered striped hover width="100%" height="42%">
            <thead>
              <tr>
                <th>Auther Name</th>
                <th>Book Titles</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default UserDetails;
