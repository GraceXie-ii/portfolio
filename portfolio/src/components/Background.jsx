import {useState, useEffect, useMemo} from "react";
import cloudImage from "../assets/clouds.png";

export default function Background(){

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particles = useMemo(() => Array.from({ length: 70}, (_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        position: "absolute",
        width: "3px",
        height: "3px",
        backgroundColor: "#e5ffe7ff",
        borderRadius: "50%",
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `flash ${3 + Math.random() * 5}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 4}s`,
      }}
    />
  )), []);

  return (
    <>
      <style>
        {`
          @keyframes flash {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
          }
          @keyframes cloudFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
        `}
      </style>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
          overflow: "hidden"
        }}
      >
        {particles}

        <img
          src={cloudImage}
          alt=""
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            left: `${(mousePosition.x - 30) * 0.05}%`,
            top: `${(mousePosition.y - 30) * 0.03}%`,
            opacity: 0.9,
            transition: "all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            animation: "cloudFloat 12s ease-in-out infinite",
            filter: "blur(0.5px)",
            objectFit: "cover",
            willChange: "transform",
          }}
        />
      </div>
    </>
  );
}