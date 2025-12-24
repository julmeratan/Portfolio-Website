import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div
        className="absolute rounded-full"
        style={{
          left: position.x,
          top: position.y,
          width: "400px",
          height: "400px",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, hsl(180 100% 50% / 0.15) 0%, hsl(320 100% 60% / 0.08) 40%, transparent 70%)",
          filter: "blur(30px)",
          transition: "left 0.1s ease-out, top 0.1s ease-out",
        }}
      />
    </div>
  );
};

export default CursorGlow;