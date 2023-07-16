
import './App.css';
import Background from './components/background/background'
import CustomNavBar from './components/customNavBar/customNavBar';
import InfoSection from './components/infoSection/infoSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLong } from '@fortawesome/free-solid-svg-icons';
import AnimatedText from './components/animatedText/animatedText';


function App() {
  return (
    <div className="App">
      <Background />
      <CustomNavBar />
      <div className='MiddleSection'>
        <div className="Intro" id='top'><h1>Hello there!</h1> <FontAwesomeIcon icon={faDownLong}  className='icono' /></div>
        <InfoSection linker="about">
          <h1  className='title'>About</h1>
          <AnimatedText>Hello there guys! I'm Daniel a Junior Full Stack Web Developer</AnimatedText>
          <AnimatedText>I'm a very passionate individual towards everything tech related</AnimatedText>
        </InfoSection>
        <InfoSection linker="experience">
          <h1 className='title'>Experience</h1>
          <AnimatedText>-Full Stack Developer Intern 2023/02 to 2023/05 : <a href="https://arteia.com/en/" className='linkies'>Arteia(Kraków/Poland)</a></AnimatedText>
          <AnimatedText>-Industrial Mechanic 2020/02 to 2020/07 : <a href="https://papresa.com/" className='linkies'>Papresa(Donostia/Spain)</a></AnimatedText>
        </InfoSection>
        <InfoSection linker="education">
          <h1 className='title'>Education</h1>
          <AnimatedText>-Zubiri Manteo 2020-2022 : Web Development</AnimatedText>
          <AnimatedText>-Don Bosco 2019-2021: Industrial Mechanic</AnimatedText>
          <AnimatedText>-UPV College 2018-2019: Computer Science</AnimatedText>
          <AnimatedText>-Baccalaureate 2016-2018</AnimatedText>
        </InfoSection>
        <InfoSection linker="skills">
          <h1 className='title'>Skills</h1>
          <AnimatedText>Git | Javascript | PHP | AWS | HTML  | React</AnimatedText>
          <AnimatedText>Linux | Java | SQL | CSS | Laravel</AnimatedText>
        </InfoSection>
        <InfoSection linker="contact">
          <h1 className='title'>Contact</h1>
          <AnimatedText>You can contact me in using the following email</AnimatedText>
          <AnimatedText><a href='mailto:dmartin3005@gmail.com' className='linkies'>dmartin3005@gmail.com</a></AnimatedText>
        </InfoSection>
      </div>
      <footer> © Made by Daniel Martín 2023</footer>
    </div>
    
  );
}

export default App;
