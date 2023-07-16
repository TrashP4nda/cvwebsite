
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./customNavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function customNavBar(props) {
  return (
    <Navbar collapseOnSelect expand="lg" className='bg-transparent' fixed='top'>
      <Container fluid>
        <Navbar.Brand href="#top" className="ms-3"><h1>Daniel Martín</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' className="collapsibleButton" />
        <Navbar.Collapse id="responsive-navbar-nav"  className='collapsibleItems'  >
          <Nav className='ms-auto'>
            <Nav.Link href="#about" className='mx-auto prueba' ><h4>About
              <span className="animate-flicker">1</span>
            </h4>
            </Nav.Link>
            <Nav.Link to="about" smooth="true" duration={100} className='mx-auto prueba'><h4>Experience<span className="animate-flicker">1</span></h4></Nav.Link>
            <Nav.Link to="education" smooth="true" duration={100} className='mx-auto prueba'><h4>Education<span className="animate-flicker">1</span></h4></Nav.Link>
            <Nav.Link to="skills" smooth="true" duration={100} className='mx-auto prueba'><h4>Skills<span className="animate-flicker">1</span></h4></Nav.Link>
            <Nav.Link to="contact" smooth="true" duration={100} className='mx-auto prueba'><h4>Contact<span className="animate-flicker">1</span></h4></Nav.Link>
            <Nav.Link href="https://github.com/TrashP4nda"><FontAwesomeIcon icon={faGithub} className='icono mx-auto prueba'/></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/daniel-mart%C3%ADn-7387b7172/"><FontAwesomeIcon icon={faLinkedin} className='icono mx-auto prueba'/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>



    </Navbar>
  );
}

export default customNavBar;
