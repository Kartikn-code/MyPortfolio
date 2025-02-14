import React from 'react';


const AboutMe = () => (
  <section className='min-h-screen flex items-center justify-center bg-gray-100'>
    <Card className='max-w-2xl p-8 bg-white shadow-2xl rounded-2xl'>
      <CardContent>
        <h1 className='text-4xl font-bold mb-4'>Hi, I’m Karthikeyan S</h1>
        <p className='text-lg mb-4'>I’m a Full Stack Developer who loves building user-friendly web applications. I’m passionate about creating impactful digital experiences with clean, efficient code.</p>
        <p className='text-lg mb-4'>I enjoy working with modern web technologies, building responsive front-ends, and designing scalable backends. Continuously learning and experimenting with new tools, I strive to stay ahead in the ever-evolving tech landscape.</p>
        <p className='text-lg mb-4'>Driven by curiosity and a desire to solve real-world problems, I bring creativity and dedication to every line of code. Let’s build something impactful together!</p>
        <Button className='mt-4' onClick={() => alert('Contact me!')}>Contact Me</Button>
      </CardContent>
    </Card>
  </section>
);

const App = () => (
  <div className='bg-gray-50 min-h-screen'>
    <AboutMe />
  </div>
);

export default App;
