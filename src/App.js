
import './App.css';
import "aos/dist/aos.css";
import Header from './Header';
import Aboutme from './Aboutme';
import Skills from './Skills';
// import Chart from './Chart';
import Projects from './Projects';
import Content from './Content';
import BubbleEffect from './BubbleEffect';






function App() {
  return (
  <div>
    
 <BubbleEffect />
  <Header />
  <Content />
  <Aboutme />
  <Skills />
  {/* <Chart /> */}
  <Projects />






  </div> 
  
  )
}

export default App;
