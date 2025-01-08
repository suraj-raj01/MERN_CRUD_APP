import React from 'react'
import { Button } from 'primereact/button';
import { Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
        <div id="hero">
          <div id="nav">
            <Nav as={Link} to="recent"><Button label="Recent Activity" severity="success" raised /></Nav>
            <Nav as={Link} to="yeardata"><Button label="Years Activity" severity="success" raised /></Nav>
            <Nav as={Link} to="delete"><Button label="Recent Delete" severity="success" raised /></Nav>
            <Nav as={Link} to="add"><Button label="Recently Added" severity="success" raised /></Nav>
          </div>
          <div id="homeoutlet">
           <Outlet/>
          </div>
        </div>
        <br /><br />
    </div>
  )
}

export default Dashboard
