// import React from 'react'
// import "./experience.css";

// const Experience = () => {
//   return (
//    <section className='experience'>
//     <h1>Professional Experience</h1>
//     <div>

//     </div>
//    </section>
//   )
// }

//export default Experience

import React,{useState} from 'react'

const Experience = () => {
  const [display,setdisplay]=useState(false);
  const handleclick= () =>{
    setdisplay(true);
  }
 
  return (
   <div className='experience'>
    <button onClick={handleclick}>Buyme</button>

    {display && (
      <div className="dummy">
       hello this is karthikeyan S
       <button>Cancel</button>
      </div>
    )}
   </div>
  );
};

export default Experience