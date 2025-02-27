import axios from "axios";
import React, { useEffect, useState } from "react";
import {Table} from "react-bootstrap"
import { useNavigate } from "react-router-dom";

const RecentAdd = () => {
  const [mydata, setMydata] = useState([]);
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
          <td style={{textTransform:'capitalize',cursor:'pointer',fontWeight:'600'}} onClick={()=>{details(key._id)}}>{key.auther_name}</td>
          <td style={{textTransform:'capitalize',cursor:'pointer'}} onClick={()=>{details(key._id)}}>{key.book_name}</td>
          <td style={{fontWeight:'bold'}}>{actualDate}</td>
          <td>{key.book_price}{".00 ₹"}</td>
        </tr>
      </>
    );
  });
  return (
    <div>
      <div id="recent-delete" style={
        {
            width:'100%',
            height:'60vh',
            boxShadow:'0px 0px 1px',
            borderRadius:'5px',
            display:'flex',
            alignItems:'start',
            justifyContent:'center'
        }
      }>
        <Table bordered hover striped>
            <thead>
                <tr>
                    <th style={{borderTopLeftRadius:'5px',textAlign:'center',backgroundColor:'#22C55E',color:'white'}}>S.No</th>
                    <th style={{backgroundColor:'#22C55E',color:'white'}}>Author Name</th>
                    <th style={{backgroundColor:'#22C55E',color:'white'}}>Book Name</th>
                    <th style={{backgroundColor:'#22C55E',color:'white'}}>Publish Date</th>
                    <th style={{borderTopRightRadius:'5px',backgroundColor:'#22C55E',color:'white'}}>Book Price</th>
                </tr>
            </thead>
            <tbody>
                {res}
            </tbody>
        </Table>
      </div>
    </div>
  );
};

export default RecentAdd;
