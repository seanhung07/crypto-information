import React from 'react';
import { Container, Navbar,Nav,NavDropdown } from 'react-bootstrap';
// import ModalDialog from './ModalDialog';

const TopNavbar = () => {

  return (
        <Navbar variant="dark" bg="dark" expand="lg" style={{background: 'linear-gradient(45deg, rgba(41,39,41,1) 50%, rgba(61,59,61,1) 75%, rgba(110,109,110,1) 93%, rgba(128,120,120,0.8897934173669468) 100%'}}>
          <Container fluid>
            <Navbar.Brand href="/crypto-information" style={{fontSize: '30px', marginLeft: '10px'}}>Crypto Information</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
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
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  );
};

export default TopNavbar;