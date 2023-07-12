import logo from './logo.svg';
import './App.css';
import Background from './components/background/background'
import CustomNavBar from './components/customNavBar/customNavBar';

function App() {
  return (
    <div className="App">
      <Background/>
      <CustomNavBar/>
      <div className='MiddleSection'>
        <div className='InfoSection'>
          <h1>About</h1>
          <p>I am Daniel Martín , Junior Full Stack Developer</p>
        </div>
        <div className='InfoSection'>
          <h1>Education</h1>
          
            
        </div>
        <div className='InfoSection'>
          <h1>Experience</h1>
          <p>I am Daniel Martín , Junior Full Stack Developer</p>
        </div>
        <div className='InfoSection'>
          <h1>Contact</h1>
          <p>Here you will find my social </p>
        </div>
      </div>
      



    </div>
  );
}

export default App;
