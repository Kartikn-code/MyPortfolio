
import './App.css';
import "aos/dist/aos.css";

import Aboutme from './Aboutme';
import Skills from './Skills';



import BubbleEffect from './BubbleEffect';

// import Carousal from './Carousal'; 
// import GitHubStats from './Github';
import Projectsection from './Project';
import Experience from './Experience';
import Contact from './Contact';
import Demonav from './Demonav';
import Content from './Content';









function App() {
  return (
  <div>
 <BubbleEffect />
  <Demonav />
  <Content />
  <Aboutme />
  <Skills />
  {/* <Chart /> */}
  <Projectsection />
  {/* <Carousal /> */}
  {/* <GitHubStats /> */}
  <Experience />
  <Contact />





  
  
  






  </div> 
  
  )
}

export default App;
