import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';

const TopNavbar = () => {
  // const navigate = useNavigate();
  // const login = () =>{
  //   navigate("/login");
  // }

  return (
    <div>
      <Navbar expand="lg" className="bg-body" id='navbar'>
      <Container>
        <Navbar.Brand as={Link} to="home" style={{fontWeight:'bold',color:'#2A174F'}}>Book-Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" style={{maxHeight:'400px',textAlign:'center',backgroundColor:'white',padding:'10px',margin:'20px',borderRadius:'10px'}}>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="insert">Insert</Nav.Link>
            <Nav.Link as={Link} to="display">Display</Nav.Link>
            <Nav.Link as={Link} to="update">Update</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
            <NavDropdown title="Categories" id="collapsible-nav-dropdown" >
              <NavDropdown.Item as={Link} to="insert">Insert</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="display">
                Display
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="update">Update</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="search">
                Search Data
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'8px'}}>
            <Nav.Link as={Link} to="search"><i class="fas fa-magnifying-glass"></i></Nav.Link>
            <Nav.Link as={Link} to="login">
            <i class="fas fa-circle-user"></i>
            </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </div>
  )
}

export default TopNavbar
