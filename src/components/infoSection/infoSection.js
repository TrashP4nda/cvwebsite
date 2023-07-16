
import './infoSection.css'
import { Container } from 'react-bootstrap';


function infoSection({ children, linker }) {

  return (
    <Container>
      <div className='infoSection' id={linker}>

        {children}

      </div>
    </Container>
  );
}

export default infoSection;
