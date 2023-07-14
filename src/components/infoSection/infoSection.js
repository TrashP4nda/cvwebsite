import './infoSection.css'
import { Container } from 'react-bootstrap';

import { AnimationOnScroll } from 'react-animation-on-scroll';
;


function infoSection(props) {

  return (
    <div className="infoSection" id={props.id}>
        <Container fluid>
       
        <p className='title'>{props.title}</p>
        <AnimationOnScroll animateIn="textAnim" duration="5s" >
        
        <p className='typewriter' >{props.text}<a href={props.link}>{props.linktext}</a></p>
        <p className='typewriter' >{props.text2}<a href={props.link2}>{props.linktext2}</a></p>
        
        </AnimationOnScroll>
        </Container>


    </div>
  );
}









export default infoSection;
