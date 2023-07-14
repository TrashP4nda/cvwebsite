
import './App.css';
import Background from './components/background/background'
import CustomNavBar from './components/customNavBar/customNavBar';
import InfoSection from './components/infoSection/infoSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong } from '@fortawesome/free-solid-svg-icons';



function App() {
  return (
    <div className="App">
      <Background />
      <CustomNavBar />
      <div className='MiddleSection'>
        <div className="Intro" id='top'><h1>Hello there!</h1> <FontAwesomeIcon icon={faDownLong}  className='icono' /></div>
        <InfoSection title="About" text="Hi , I am Daniel and I am a Junior Full Stack developer :D"  id="about" text2="I'm really passionate about tech and like to experiment in my free time , currently trying to get info infoSec" />
        <InfoSection title="Experience" text=" -Full Stack Developer Intern 2023/02 to 2023/05 --> " linktext="Arteia(Kraków/Poland)" link="https://arteia.com/en/" id="experience" text2="-Industrial Mechanic 2020/02 to 2020/07 --> " linktext2="Papresa(Donostia/Spain)" link2="https://papresa.com/"></InfoSection>
        <InfoSection title="Education" text="-Zubiri Manteo 2020-2022 --> Web Development" text2="-Don Bosco 2019-2021 --> Industrial Mechatronics" id="education"/>
        <InfoSection title="Skills" id="skills" text=" Git 6/10 | Javascript 7/10 | PHP 7/10 | AWS 6/10 | HTML 9/10 | React 6/10 " text2="Linux 7/10 | Java 7/10 | SQL 7/10 | CSS 7/10 | Laravel 7/10"/>
        <InfoSection title="Contact"  text="You can contact me in the following" linktext2="dmartin3005@gmail.com" link2="mailto:dmartin3005@gmail.com" id="contact"/>
      </div>
      <footer> © Made by Daniel Martín 2023</footer>
    </div>
    
  );
}

export default App;
