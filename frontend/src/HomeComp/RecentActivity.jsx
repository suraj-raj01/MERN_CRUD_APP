import React, { useEffect, useState } from "react";
import ChartComp from "./ChartComp";
import ChartComp1 from "./ChartComp1";
import { Table } from "react-bootstrap";
import axios from "axios";
const RecentActivity = () => {
  
  const[userdata,setUserData] = useState([]);
  const loadData = () =>{
    let api = `http://localhost:8000/user/userdisplay`;
    axios.get(api).then((res)=>{
      setUserData(res.data);
    })
  }
  useEffect(()=>{
    loadData();
  },[])

  const res = userdata.map((key)=>{
    return(
      <>
        <tr>
          <td style={{cursor:'text',fontWeight:'normal',textTransform:'uppercase'}}>{key.user_name}</td>
          <td style={{cursor:'text',fontWeight:'normal'}}>{key.user_email}</td>
        </tr>
      </>
    )
  })

  return (
    <div>
      <div id="contents">
        <div id="box" style={{display:'flex',alignItems:'center',justifyContent:'start'}}>
        <h5 className="m-2" style={{padding:'10px',color:'#2A174F',textAlign:'center'}}>User Activities</h5>
          <Table bordered>
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
