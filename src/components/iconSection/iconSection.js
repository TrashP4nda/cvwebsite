import './iconSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


function iconSection(props) {

  return (
    <div className="iconSection" id={props.id}>
      
       
        <AnimationOnScroll animateIn="animate__bounceIn" delay="7s" >
        <FontAwesomeIcon icon={faGithub}/>
        <FontAwesomeIcon icon={faLinkedin}/>
        </AnimationOnScroll>
      
        


    </div>
  );
}









export default iconSection;
