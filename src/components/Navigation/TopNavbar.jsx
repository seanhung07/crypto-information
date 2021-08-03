import React from 'react';
import { Container, Navbar,Nav,NavDropdown } from 'react-bootstrap';
const TopNavbar = ({title}) => {

  return (
        <Navbar variant="dark" bg="dark" expand="lg" style={{background: 'linear-gradient(45deg, rgba(0,0,0,1) 17%, rgba(0,0,0,1) 33%, rgba(0,0,0,1) 46%, rgba(5,5,5,1) 56%, rgba(15,14,15,1) 69%, rgba(25,24,25,1) 86%, rgba(41,39,41,1) 100%, rgba(61,59,61,1) 100%)'}}>
          <Container fluid>
            <Navbar.Brand href="/crypto-information" style={{fontSize: '30px', marginLeft: '10px'}}>Crypto Information</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Nav style={{marginTop:'10px', fontSize:'20px'}}>{title}</Nav>
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="More Information"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="/crypto-information/#/order">ETH Order Book</NavDropdown.Item>
                  <NavDropdown.Item href="/crypto-information/#/draw">TradingView</NavDropdown.Item>
                  <NavDropdown.Item href="/crypto-information/#/data">Long/Short</NavDropdown.Item>
                  <NavDropdown.Item href="/crypto-information/#/liquidation">Liquidation</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  );
};

export default TopNavbar;