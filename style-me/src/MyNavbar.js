// Created by Peng Liu(8903532)
// Modified by Riten Sunilbhai Patel(8938590)
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/logo.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation } from 'react-router-dom';

function MyNavbar() {
  const location = useLocation();
  const checkAlive = (self) =>
    location.pathname === '/' + self ? 'active' : '';
  return (
    <Navbar
      expand='lg'
      className='bg-body-tertiary fixed-top'
      // Riten Sunilbhai Patel(8938590) Fixed-top for sticky navbar
      bg='light'
      data-bs-theme='light'
    >
      <Container>
        <Navbar.Brand href='/'>
          <img
            src={logo}
            className='d-inline-block align-top logo'
            alt='Style.me logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto justify-content-center'>
            <Nav.Link
              href='/Digital-Fashion'
              className={checkAlive('Digital-Fashion')}
            >
              Digital Fashion
            </Nav.Link>
            <Nav.Link href='/AR' className={checkAlive('AR')}>
              AR
            </Nav.Link>
            <Nav.Link href='/Blog' className={checkAlive('Blog')}>
              Blog
            </Nav.Link>
            <Nav.Link href='/Demo' className={checkAlive('Demo')}>
              Demo
            </Nav.Link>
            <Nav.Link href='/Contact' className={checkAlive('Contact')}>
              Contact
            </Nav.Link>
          </Nav>
          <Form className='d-flex'>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
