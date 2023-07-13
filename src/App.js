
import './App.css';
import Background from './components/background/background'
import CustomNavBar from './components/customNavBar/customNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Background/> 
      <CustomNavBar/>
      {/*<div className='MiddleSection'>
        <div className='InfoSection'>
          <div className='timeline'></div>
          <div className='text'>
          <h1 className="text-3xl font-bold underline text-white">
      
    </h1>
          
          </div>
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
      </div>*/}
    </div>
  );
}

export default App;
