import { useState, useEffect } from 'react';

const MagicBrush = () => {
  const [stars, setStars] = useState([]);

  const handleMouseMove = (e) => {
    const newStar = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY
    };
    setStars((prevStars) => [...prevStars, newStar]);

    // Remove the star after 1.5 seconds for a longer twinkle effect
    setTimeout(() => {
      setStars((prevStars) => prevStars.filter((star) => star.id !== newStar.id));
    }, 1500);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden relative bg-gradient-to-b from-indigo-900 to-black">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-3 h-3 rounded-full bg-white animate-magic"
          style={{
            top: `${star.y}px`,
            left: `${star.x}px`,
            boxShadow: '0 0 8px #fff, 0 0 20px #9d4edd, 0 0 30px #5a189a'
          }}
        />
      ))}
    </div>
  );
};

export default MagicBrush;

// Add this CSS to your global styles or a CSS module
// In Tailwind, you can add this in your tailwind.config.js

/*
@keyframes magic {
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.8); }
  100% { opacity: 0; transform: scale(0.5); }
}

.animate-magic {
  animation: magic 1.5s ease-out forwards;
}
*/
