import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import {Table} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import {message} from "antd";

const Update = () => {

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

  //delete items
  const deleteItem = async(id) =>{
    let api = `http://localhost:8000/books/delrec`;
    try {
      let response = await axios.post(api,{id:id});
      message.success("data deleted successfully")
      loadData();
    } catch (error) {
      message.error(error.response.data.msg);
    }
  }
  //edit items
  const editItem = (id) =>{
    navigate(`/editdata/${id}`);
  }
  //details
  const details = (id) =>{
    navigate(`/details/${id}`)
  }

    //goto display page
    const display = () => {
      navigate("/display");
    };
    //goto search page
    const search = () => {
      navigate("/search");
    };

  let sno=0;
  const res = mydata.map((key) => {
    sno++;
    let date = key.publish_date;
    let newdate = date.split('T');
    let actualDate = newdate[0];
    return (
      <>
        <tr >
          <td style={{textAlign:'center',fontWeight:'bold'}}>{sno}</td>
          <td style={{textTransform:'capitalize',cursor:'pointer'}} onClick={()=>{details(key._id)}}>{key.auther_name}</td>
          <td style={{textTransform:'capitalize',cursor:'pointer'}} onClick={()=>{details(key._id)}}>{key.book_name}</td>
          <td style={{fontWeight:'bold'}}>{actualDate}</td>
          <td style={{textAlign:'center'}}>{key.book_price}{".00 ₹"}</td>
          <td style={{textAlign:'center'}}>
          <span style={{cursor:'pointer'}} onClick={()=>{deleteItem(key._id)}}><i class="fas fa-trash"></i></span>
          &nbsp;&nbsp;&nbsp;
          <span style={{cursor:'pointer'}} onClick={()=>{editItem(key._id)}}><i class="fas fa-pen-to-square"></i></span>
          </td>
        </tr>
      </>
    );
  });

  return (
    <div>
      <Container>
        <h1>Update Page</h1>
         {/* For jump page  */}
         <div style={{
          display:'flex',
          alignItems:'center',
          justifyContent:'start'
        }}>
          <i
            class="fas fa-circle-left"
            style={{
              fontSize: "25px",
              color: "#22C55E",
              cursor: "pointer",
            }}
            onClick={display}
          ></i>
          <i
            class="fas fa-circle-right"
            style={{
              fontSize: "25px",
              color: "#22C55E",
              cursor: "pointer",
              marginLeft: "5px",
            }}
            onClick={search}
          ></i>
        </div>
        <br />
        <Table bordered responsive striped variant="light" hover>
            <thead>
                <tr>
                <th style={{fontWeight:'bold',backgroundColor:'#22C55E',color:'white',textAlign:'center'}}>S.No</th>
                <th style={{fontWeight:'bold',backgroundColor:'#22C55E',color:'white'}}>Auther Name</th>
                <th style={{fontWeight:'bold',backgroundColor:'#22C55E',color:'white'}}>Book Titles</th>
                <th style={{fontWeight:'bold',backgroundColor:'#22C55E',color:'white'}}>Publish Date</th>
                <th style={{fontWeight:'bold',backgroundColor:'#22C55E',color:'white', textAlign:'center'}}>Book Price</th>
                <th style={{fontWeight:'bold',backgroundColor:'#22C55E',color:'white',textAlign:'center'}}>Update</th>
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

export default Update;
