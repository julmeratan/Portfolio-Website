const InteractiveBackground = () => {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-0 bg-background">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Subtle gradient overlays */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, hsl(var(--primary) / 0.05) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 100% 50%, hsl(var(--accent) / 0.03) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 0% 80%, hsl(var(--primary) / 0.03) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Corner accents */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 opacity-20"
        style={{
          background: 'radial-gradient(circle at top right, hsl(var(--primary) / 0.1), transparent 70%)'
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 opacity-20"
        style={{
          background: 'radial-gradient(circle at bottom left, hsl(var(--accent) / 0.08), transparent 70%)'
        }}
      />
      
      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};

export default InteractiveBackground;
