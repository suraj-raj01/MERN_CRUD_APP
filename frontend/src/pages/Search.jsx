import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import { Button } from 'primereact/button';
import axios from "axios"
import { Table } from "react-bootstrap";
import {message} from "antd"
import {useNavigate} from "react-router-dom"

const Search = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState("");
  const [mydata,setMydata] = useState([]);

  const mySearch = (e) =>{
    let stdname = e.target.value;
    setUser(stdname);
    let api = `http://localhost:8000/books/display`;
    axios.get(api).then((res)=>{
      setMydata(res.data);
      console.log(res.data);
    })
  }

  const search = (e) =>{
    e.preventDefault();
    message.error("Please enter book name")
  }

  //details
  const details = (id) =>{
    navigate(`/details/${id}`)
  }

  let ans = mydata.map((key)=>{
    let str = key.book_name.toUpperCase();
    let status = str.includes(user.toUpperCase());

    // date format
    let date = key.publish_date;
    let date1 = date.split("T");
    let orgdate = date1[0];

    if(status){
    return(
      <>
      <tr>
        <td onClick={()=>{details(key._id)}} style={{cursor:'pointer'}}>{key.auther_name}</td>
        <td onClick={()=>{details(key._id)}} style={{cursor:'pointer'}}>{key.book_name}</td>
        <td>{orgdate}</td>
        <td>{key.book_price}{".00 ₹"}</td>
      </tr>
      </>
    )
    }
  })

  return (
    <div>
      <Container>
        <h1>Search Page</h1>
        <Form className="d-flex" style={{width:'350px'}}>
            <Form.Control
              type="search"
              placeholder="Search books..."
              className="me-2"
              aria-label="Search"
              value={user}
              onChange={mySearch}
            />
            <Button label="Search" severity="success" raised style={{width:'120px',borderRadius:'5px'}} onClick={search}></Button>
          </Form>
          <br /><br /> 
          <Table bordered striped hover responsive>
            <thead>
              <tr>
                <th style={{fontWeight:'bold',backgroundColor:'#2A174F',color:'white'}}>Auther Name</th>
                <th style={{fontWeight:'bold',backgroundColor:'#2A174F',color:'white'}}>Book Title</th>
                <th style={{fontWeight:'bold',backgroundColor:'#2A174F',color:'white'}}>Publish Date</th>
                <th style={{fontWeight:'bold',backgroundColor:'#2A174F',color:'white'}}>Book Price</th>
              </tr>
            </thead>
            <tbody>
              {ans}
            </tbody>
          </Table>
      </Container>
    </div>
  );
};

export default Search;
