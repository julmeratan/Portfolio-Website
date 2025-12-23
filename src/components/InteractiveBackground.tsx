import { useEffect, useRef, useState } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
}

const InteractiveBackground = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const rippleId = useRef(0);

  // Handle click ripple effect
  const handleClick = (e: React.MouseEvent) => {
    const newRipple: Ripple = {
      id: rippleId.current++,
      x: e.clientX,
      y: e.clientY,
      size: 0,
    };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 1000);
  };

  // Handle mouse move for interactive glow
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Initialize particles for water flow effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create particles
    const particleCount = 80;
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      hue: Math.random() * 60 + 10, // Orange-coral range
    }));

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0)";
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Water flow wave effect
      const time = Date.now() * 0.001;

      particlesRef.current.forEach((particle, i) => {
        // Update position with wave motion
        particle.x += particle.vx + Math.sin(time + i * 0.1) * 0.3;
        particle.y += particle.vy + Math.cos(time + i * 0.1) * 0.2;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with halogen glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 4
        );
        gradient.addColorStop(0, `hsla(${particle.hue}, 80%, 60%, ${particle.opacity})`);
        gradient.addColorStop(0.5, `hsla(${particle.hue}, 70%, 50%, ${particle.opacity * 0.5})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 60%, 40%, 0)`);

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 90%, 70%, ${particle.opacity})`;
        ctx.fill();
      });

      // Draw connections between nearby particles
      particlesRef.current.forEach((p1, i) => {
        particlesRef.current.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(20, 70%, 55%, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-auto z-0"
      onClick={handleClick}
      onMouseMove={handleMouseMove}
    >
      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ mixBlendMode: "screen" }}
      />

      {/* 3D Floating orbs with halogen effect */}
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl animate-float opacity-20"
        style={{
          background: "radial-gradient(circle, hsla(12, 76%, 61%, 0.6) 0%, hsla(25, 85%, 55%, 0.3) 50%, transparent 70%)",
          top: "10%",
          right: "10%",
          animationDuration: "8s",
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full blur-3xl animate-float opacity-25"
        style={{
          background: "radial-gradient(circle, hsla(200, 80%, 60%, 0.5) 0%, hsla(220, 70%, 50%, 0.2) 50%, transparent 70%)",
          bottom: "15%",
          left: "5%",
          animationDuration: "10s",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute w-64 h-64 rounded-full blur-3xl animate-float opacity-20"
        style={{
          background: "radial-gradient(circle, hsla(280, 70%, 60%, 0.5) 0%, hsla(300, 60%, 50%, 0.2) 50%, transparent 70%)",
          top: "50%",
          left: "40%",
          animationDuration: "12s",
          animationDelay: "4s",
        }}
      />

      {/* Mouse follow glow */}
      <div
        className="absolute w-64 h-64 rounded-full pointer-events-none transition-all duration-300 ease-out"
        style={{
          background: "radial-gradient(circle, hsla(12, 76%, 61%, 0.15) 0%, transparent 70%)",
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
          filter: "blur(40px)",
        }}
      />

      {/* Click ripple effects */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="ripple-effect" />
          <div className="ripple-effect" style={{ animationDelay: "0.2s" }} />
          <div className="ripple-effect" style={{ animationDelay: "0.4s" }} />
        </div>
      ))}

      {/* 3D Grid effect */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsla(12, 76%, 61%, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsla(12, 76%, 61%, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "center top",
        }}
      />

      {/* Gradient mesh */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
            </filter>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsla(12, 76%, 61%, 0.3)" />
              <stop offset="100%" stopColor="hsla(25, 85%, 55%, 0.1)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default InteractiveBackground;
