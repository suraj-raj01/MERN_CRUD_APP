import React, { useEffect, useState } from "react";
import ChartComp from "./ChartComp";
import ChartComp1 from "./ChartComp1";
import { Table } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const RecentActivity = () => {

  const navigate = useNavigate();

  const[userdata,setUserData] = useState([]);
  const loadData = () =>{
    let api = `https://mern-crud-app-c493.onrender.com/user/userdisplay`;
    axios.get(api).then((res)=>{
      setUserData(res.data);
    })
  }
  useEffect(()=>{
    loadData();
  },[])

  const userDetails=(id)=>{
    navigate(`/userDetails/${id}`)
  }

  const res = userdata.map((key)=>{
    return(
      <>
        <tr>
          <td onClick={()=>{userDetails(key._id)}} style={{cursor:'pointer',fontWeight:'normal',textTransform:'uppercase'}}>{key.user_name}</td>
          <td style={{cursor:'text',fontWeight:'normal'}}>{key.user_email}</td>
        </tr>
      </>
    )
  })

  return (
    <div>
      <div id="contents">
        <div id="box" style={{display:'flex',alignItems:'center',justifyContent:'start'}}>
        <h5 className="m-2" style={{padding:'10px',color:'#22C55E',textAlign:'center'}}>User Activities</h5>
          <Table bordered responsive striped style={{width:'100%'}}>
            <thead>
              <tr>
                <th style={{backgroundColor:'#22C55E',color:'white'}}>User</th>
                <th style={{backgroundColor:'#22C55E',color:'white'}}>Email</th>
              </tr>
            </thead>
            <tbody>
            {res}
            </tbody>
          </Table>
        </div>
        <div id="box">
            <ChartComp1/>
        </div>
        <div id="box">
        <ChartComp/>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
