import { message } from 'antd';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const UserDashboard = () => {

    const navigate = useNavigate();

    const[user,setUser] = useState("")
    const[email,setEmail] = useState("")
    const[phone,setPhone] = useState("")
    const[pass,setPass] = useState("")

    useEffect(()=>{
        setUser(localStorage.getItem("username"))
        setEmail(localStorage.getItem("useremail"))
        setPhone(localStorage.getItem("userphone"))
        setPass(localStorage.getItem("password"))
    },[]);

    const logout=()=>{
        localStorage.clear();
        message.success("LogOut Successfully!!")
        navigate("/home")
    }

  return (
    <div>
      <h1>User Dashboard</h1>
      <div id="details">

      {/* <span id="remove" onClick={logout}><i class="fas fa-right-from-bracket"></i></span> */}

        <div id="box">
        <h2 style={{color:'#22C55E'}}>User Details</h2><br />
            <h5>Name : {user}</h5>
            <h5>Email : {email.toLowerCase()}</h5>
            <h5>Phone : {phone}</h5>
            <h5>Password : <span id='pass-hide'>{pass}</span></h5>
            <br />
            <Button style={{width:'120px',padding:'6px'}} variant="outline-danger" onClick={logout}>LogOut</Button>
        </div>

        <div id="box2">
           <h3>Welcome Mr. <span style={{color:'#22C55E'}}>{user}</span></h3>
            <div style={{textAlign:'start',width:'100%',color:'red'}}><h4>Your Purchased Books</h4></div>
            <Table bordered striped hover width='100%' height="42%">
                <thead>
                    <tr>
                        <th>Auther Name</th>
                        <th>Book Titles</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </Table>
        </div>

      </div>
      <br /><br />
    </div>
  )
}

export default UserDashboard
