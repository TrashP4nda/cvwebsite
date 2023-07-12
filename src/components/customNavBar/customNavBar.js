import './customNavBar.css'
import CustomButton from '../customButton/customButton';
import CustomLogo from '../customLogo/customLogo'

function customNavBar(props) {
  return (
    <div className="customNavBar">
      <ul>
          <li><CustomLogo/></li>
          <li><CustomButton name="About" icon="faQuestion"/></li>
          <li><CustomButton name="Experience"/></li>
          <li><CustomButton name="Contact"/></li>
      </ul>
    </div>
  );
}

export default customNavBar;
