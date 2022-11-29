import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ColorSchemesExample() {
  return (
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My Forum</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <NavDropdown title="Latest News here" id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://www.nhl.com/" target="_blank">NHL</NavDropdown.Item>
              <NavDropdown.Item href="https://www.nfl.com/" target="_blank">NFL</NavDropdown.Item>
              <NavDropdown.Item href="https://www.mlb.com/" target="_blank">MLB</NavDropdown.Item>
              <NavDropdown.Item href="https://www.sportingnews.com/ca/nba?gr=www" target="_blank">NBA</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Your Opinion!
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default ColorSchemesExample;