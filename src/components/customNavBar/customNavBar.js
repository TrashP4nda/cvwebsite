
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./customNavBar.css"


function customNavBar(props) {
  return (
    <Navbar collapseOnSelect expand="lg" className='bg-transparent'>
      <Container fluid>
        <Navbar.Brand className=""><h1>Daniel Martín</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' className="collapsibleButton" />
        <Navbar.Collapse id="responsive-navbar-nav"  >
          <Nav className='ms-auto'>
            <Nav.Link href="#home" className=' mx-auto' ><h4>About
              <span className="animate-flicker">|</span>
            </h4>
            </Nav.Link>
            <Nav.Link href="#link" className=' mx-auto'><h4>Experience</h4></Nav.Link>
            <Nav.Link href="#link" className=' mx-auto'><h4>Education</h4></Nav.Link>
            <Nav.Link href="#link" className=' mx-auto'><h4>Contact</h4></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>



    </Navbar>
  );
}

export default customNavBar;
