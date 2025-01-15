import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

const TopNavbar = () => {

  return (
    <div>
      <Navbar expand="lg" className="" id='navbar'>
      <Container>
        <Navbar.Brand as={Link} to="home" style={{fontWeight:'bold',color:'#22C55E'}}>Book-Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" style={{maxHeight:'400px',textAlign:'center',backgroundColor:'white',padding:'10px',margin:'20px',borderRadius:'10px'}}>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home"> Home</Nav.Link>
            <Nav.Link as={Link} to="dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="insert">Insert</Nav.Link>
            <Nav.Link as={Link} to="display">Display</Nav.Link>
            <Nav.Link as={Link} to="update">Update</Nav.Link>
            {/* <Nav.Link as={Link} to="search">Search</Nav.Link> */}
            {/* <NavDropdown title="Categories" id="collapsible-nav-dropdown" >
              <NavDropdown.Item as={Link} to="insert">Insert</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="display">Display</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="update">Update</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="search">Search Data</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <div id='search-login'>
            <Nav.Link as={Link} to="search"><i class="fas fa-magnifying-glass"></i></Nav.Link>
            <Nav.Link as={Link} to="login"><i class="fas fa-circle-user"></i></Nav.Link>
            </div>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </div>
  )
}

export default TopNavbar
