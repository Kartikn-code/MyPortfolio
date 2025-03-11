
import './App.css';
import "aos/dist/aos.css";
import Header from './Header';
import Aboutme from './Aboutme';
import Skills from './Skills';
// import Chart from './Chart';

import Content from './Content';
import BubbleEffect from './BubbleEffect';

import Carousal from './Carousal'; 
// import GitHubStats from './Github';
import Projectsection from './Project';
import Experience from './Experience';





function App() {
  return (
  <div>
    
 <BubbleEffect />
  <Header />
  <Content />
  <Aboutme />
  <Skills />
  {/* <Chart /> */}
  <Projectsection />
  <Carousal />
  {/* <GitHubStats /> */}
  <Experience />
  






  </div> 
  
  )
}

export default App;
