import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import {Table} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
const Display = () => {
  const [mydata, setMydata] = useState([]);
  const navigate = useNavigate();
  const loadData = () => {
    let api = "http://localhost:8000/books/display";
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const details = (id) =>{
    navigate(`/details/${id}`)
  }

  let sno=0;
  const res = mydata.map((key) => {
    sno++;
    let date = key.publish_date;
    let newdate = date.split('T')
    let actualDate = newdate[0];
    // let actualDate = newdate1.reverse();
    
    return (
      <>
        <tr>
          <td style={{textAlign:'center',fontWeight:'bold'}}>{sno}</td>
          <td style={{textTransform:'capitalize',cursor:'pointer'}} onClick={()=>{details(key._id)}}>{key.auther_name}</td>
          <td style={{textTransform:'capitalize',cursor:'pointer'}} onClick={()=>{details(key._id)}}>{key.book_name}</td>
          <td style={{fontWeight:'bold'}}>{actualDate}</td>
          <td>{key.book_price}{".00 ₹"}</td>
        </tr>
      </>
    );
  });

  return (
    <div>
      <Container>
        <h1>Display Page</h1>
        <Table bordered responsive striped variant="light" hover>
            <thead>
                <tr>
                <th style={{fontWeight:'bold',backgroundColor:'#2A174F',color:'white',textAlign:'center'}}>S.No</th>
                <th style={{fontWeight:'bold',backgroundColor:'#2A174F',color:'white'}}>Auther Name</th>
                <th style={{fontWeight:'bold',backgroundColor:'#2A174F',color:'white'}}>Book Name</th>
                <th style={{fontWeight:'bold',backgroundColor:'#2A174F',color:'white'}}>Publish Date</th>
                <th style={{fontWeight:'bold',backgroundColor:'#2A174F',color:'white'}}>Book Price</th>
                </tr>
            </thead>
            <tbody>
                {res}
            </tbody>
        </Table>
        <br /><br />
      </Container>
    </div>
  );
};

export default Display;
