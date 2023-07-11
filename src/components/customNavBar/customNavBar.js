import './customNavBar.css'
import CustomButton from '../customButton/customButton';
import CustomLogo from '../customLogo/customLogo'

function customNavBar(props) {
  return (
    <div className="customNavBar">
      <CustomLogo/>
      <CustomButton name="About" icon="faQuestion"/>
      <CustomButton name="Experience"/>
      <CustomButton name="Who am I"/>
      <CustomButton name="Contact"/>
    </div>
  );
}

export default customNavBar;
