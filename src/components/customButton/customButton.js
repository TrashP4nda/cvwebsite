import './customButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, fas } from '@fortawesome/free-solid-svg-icons'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { parse } from '@fortawesome/fontawesome-svg-core'
import { icon, library } from '@fortawesome/fontawesome-svg-core'


library.add(fas,faQuestion)

function customButton(props) {
   var icono = parse.icon({ prefix: 'fas', iconName: 'faQuestion'})
  return (
    <div className="customButton">
     <FontAwesomeIcon icon={faQuestion} />
      {props.name}
    </div>
  );
}

export default customButton;
