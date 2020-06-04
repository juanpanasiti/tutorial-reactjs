import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/home2">Features</Nav.Link>
          <Nav.Link href="/f2">Pricing</Nav.Link>
        </Nav>
        
      </Navbar>
    </div>
  );
};
export default Navigation;
