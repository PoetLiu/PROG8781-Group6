import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/logo.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">
            <img
              src={logo}
              className="d-inline-block align-top logo"
              alt="Style.me logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center">
            <Nav.Link href="/Digital-Fashion">Digital Fashion</Nav.Link>
            <Nav.Link href="/">Link</Nav.Link>
            <Nav.Link href="/">Link</Nav.Link>
            <Nav.Link href="/">Link</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='btn-primary'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;