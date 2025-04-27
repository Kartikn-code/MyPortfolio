import React, { useState, useEffect, useRef } from "react";

const BubbleEffect = () => {
  const [bubbles, setBubbles] = useState([]);
  const lastX = useRef(0);
  const lastY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const speed = Math.hypot(
        e.clientX - lastX.current,
        e.clientY - lastY.current
      );
      lastX.current = e.clientX;
      lastY.current = e.clientY;

      if (speed > 20) {
        createBubble(e.clientX, e.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const createBubble = (x, y) => {
    const newBubble = {
      id: Date.now(),
      x,
      y,
      size: Math.random() * 30 + 10,
      opacity: Math.random(),
    };
    setBubbles((prev) => [...prev, newBubble]);

    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
    }, 1000);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          style={{
            position: "absolute",
            left: bubble.x,
            top: bubble.y,
            width: bubble.size,
            height: bubble.size,
            background: `rgba(244, 111, 12, ${bubble.opacity})`,

            borderRadius: "50%",
            backdropFilter: "brightness(200%)",
            boxShadow: "0px 20px 20px 0pxrgb(154, 157, 149)",
            transform: "translate(-250%, -250%)",
            animation: "rise .5s linear forwards",
          }}
        />
      ))}
      <style>{`
                @keyframes rise {
                    to {
                        transform: translate(-350%, -150px);
                        opacity: 0;
                        scale:1.9;
                    }
                }
            `}</style>
    </div>
  );
};

export default BubbleEffect;
