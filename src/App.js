
import './App.css';
import "aos/dist/aos.css";
import Header from './Header';
import Aboutme from './Aboutme';
import Skills from './Skills';
// import Chart from './Chart';
import Projects from './Projects';
import Content from './Content';
import BubbleEffect from './BubbleEffect';
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
  <Projects />
  <Experience/>






  </div> 
  
  )
}

export default App;
