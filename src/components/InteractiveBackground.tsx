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
  colorType: number; // 0: rose, 1: cream, 2: orchid
}

interface WaterDrop {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

// Hex colors converted to RGB for canvas
const COLORS = {
  rose: { r: 196, g: 115, b: 124 },      // #C4737C
  cream: { r: 225, g: 211, b: 202 },     // #E1D3CA
  ivory: { r: 243, g: 238, b: 233 },     // #F3EEE9
  orchid: { r: 223, g: 160, b: 243 },    // #DFA0F3
};

const InteractiveBackground = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const waterDropsRef = useRef<WaterDrop[]>([]);
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
    }, 1200);
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

    // Create particles with new color palette
    const particleCount = 100;
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.6 + 0.3,
      colorType: Math.floor(Math.random() * 3),
    }));

    // Create water drops
    const dropCount = 30;
    waterDropsRef.current = Array.from({ length: dropCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 8 + 4,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.4 + 0.2,
    }));

    const getColor = (type: number, opacity: number) => {
      switch (type) {
        case 0:
          return `rgba(${COLORS.rose.r}, ${COLORS.rose.g}, ${COLORS.rose.b}, ${opacity})`;
        case 1:
          return `rgba(${COLORS.cream.r}, ${COLORS.cream.g}, ${COLORS.cream.b}, ${opacity})`;
        case 2:
          return `rgba(${COLORS.orchid.r}, ${COLORS.orchid.g}, ${COLORS.orchid.b}, ${opacity})`;
        default:
          return `rgba(${COLORS.orchid.r}, ${COLORS.orchid.g}, ${COLORS.orchid.b}, ${opacity})`;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Water flow wave effect
      const time = Date.now() * 0.001;

      // Draw water wave layers
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        
        for (let x = 0; x <= canvas.width; x += 10) {
          const y = canvas.height - 100 - i * 50 + 
            Math.sin(x * 0.01 + time + i) * 20 + 
            Math.sin(x * 0.02 + time * 1.5 + i * 2) * 15;
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();
        
        const gradient = ctx.createLinearGradient(0, canvas.height - 200, 0, canvas.height);
        gradient.addColorStop(0, `rgba(${COLORS.orchid.r}, ${COLORS.orchid.g}, ${COLORS.orchid.b}, ${0.03 - i * 0.008})`);
        gradient.addColorStop(1, `rgba(${COLORS.rose.r}, ${COLORS.rose.g}, ${COLORS.rose.b}, ${0.05 - i * 0.01})`);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Animate water drops (floating up)
      waterDropsRef.current.forEach((drop) => {
        drop.y -= drop.speed;
        drop.x += Math.sin(time * 2 + drop.y * 0.02) * 0.5;
        
        if (drop.y < -drop.size) {
          drop.y = canvas.height + drop.size;
          drop.x = Math.random() * canvas.width;
        }

        // Draw water drop with glow
        const dropGradient = ctx.createRadialGradient(
          drop.x, drop.y, 0,
          drop.x, drop.y, drop.size * 2
        );
        dropGradient.addColorStop(0, `rgba(${COLORS.orchid.r}, ${COLORS.orchid.g}, ${COLORS.orchid.b}, ${drop.opacity})`);
        dropGradient.addColorStop(0.5, `rgba(${COLORS.rose.r}, ${COLORS.rose.g}, ${COLORS.rose.b}, ${drop.opacity * 0.5})`);
        dropGradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = dropGradient;
        ctx.fill();

        // Core drop
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${drop.opacity * 0.8})`;
        ctx.fill();
      });

      // Animate particles
      particlesRef.current.forEach((particle, i) => {
        // Update position with wave motion
        particle.x += particle.vx + Math.sin(time + i * 0.1) * 0.4;
        particle.y += particle.vy + Math.cos(time + i * 0.1) * 0.3;

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
          particle.size * 5
        );
        gradient.addColorStop(0, getColor(particle.colorType, particle.opacity));
        gradient.addColorStop(0.4, getColor(particle.colorType, particle.opacity * 0.4));
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = getColor(particle.colorType, particle.opacity * 1.2);
        ctx.fill();
      });

      // Draw connections between nearby particles
      particlesRef.current.forEach((p1, i) => {
        particlesRef.current.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${COLORS.orchid.r}, ${COLORS.orchid.g}, ${COLORS.orchid.b}, ${0.12 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.8;
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
      style={{
        background: `linear-gradient(180deg, 
          rgba(243, 238, 233, 1) 0%, 
          rgba(225, 211, 202, 0.8) 40%, 
          rgba(223, 160, 243, 0.2) 70%,
          rgba(196, 115, 124, 0.15) 100%)`
      }}
    >
      {/* Canvas for particle and water effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ mixBlendMode: "normal" }}
      />

      {/* 3D Floating orbs with new palette */}
      <div
        className="absolute w-96 h-96 rounded-full blur-3xl animate-float opacity-30"
        style={{
          background: `radial-gradient(circle, rgba(223, 160, 243, 0.6) 0%, rgba(196, 115, 124, 0.3) 50%, transparent 70%)`,
          top: "10%",
          right: "10%",
          animationDuration: "8s",
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full blur-3xl animate-float opacity-35"
        style={{
          background: `radial-gradient(circle, rgba(196, 115, 124, 0.5) 0%, rgba(225, 211, 202, 0.3) 50%, transparent 70%)`,
          bottom: "15%",
          left: "5%",
          animationDuration: "10s",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute w-64 h-64 rounded-full blur-3xl animate-float opacity-25"
        style={{
          background: `radial-gradient(circle, rgba(225, 211, 202, 0.6) 0%, rgba(223, 160, 243, 0.3) 50%, transparent 70%)`,
          top: "50%",
          left: "40%",
          animationDuration: "12s",
          animationDelay: "4s",
        }}
      />
      <div
        className="absolute w-72 h-72 rounded-full blur-3xl animate-float opacity-20"
        style={{
          background: `radial-gradient(circle, rgba(223, 160, 243, 0.5) 0%, transparent 60%)`,
          top: "30%",
          right: "30%",
          animationDuration: "9s",
          animationDelay: "1s",
        }}
      />

      {/* Mouse follow glow with new colors */}
      <div
        className="absolute w-80 h-80 rounded-full pointer-events-none transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle, rgba(223, 160, 243, 0.2) 0%, rgba(196, 115, 124, 0.1) 40%, transparent 70%)`,
          left: mousePosition.x - 160,
          top: mousePosition.y - 160,
          filter: "blur(50px)",
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

      {/* 3D Grid effect with new palette */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(196, 115, 124, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196, 115, 124, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "center top",
        }}
      />

      {/* Crystal clear gradient overlay */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(243, 238, 233, 0.8) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 100% 50%, rgba(223, 160, 243, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 0% 80%, rgba(196, 115, 124, 0.2) 0%, transparent 50%)
          `
        }}
      />
    </div>
  );
};

export default InteractiveBackground;
