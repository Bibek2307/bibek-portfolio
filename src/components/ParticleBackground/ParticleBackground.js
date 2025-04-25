// Remove "use client" - not needed for Create React App
import React, { useEffect, useRef } from "react"; // Import React

// Define the Particle class (removed TypeScript types)
class Particle {
  constructor(canvasWidth, canvasHeight) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * 1.5 + 0.5;
    this.speedX = Math.random() * 1 - 0.5; // Speed range
    this.speedY = Math.random() * 1 - 0.5; // Speed range
    this.color = 'rgba(0, 255, 0, 0.7)'; // Green color with transparency
  }

  update(canvasWidth, canvasHeight) {
    this.x += this.speedX;
    this.y += this.speedY;

    // Boundary checks (wrap around)
    if (this.x > canvasWidth) this.x = 0;
    else if (this.x < 0) this.x = canvasWidth;
    if (this.y > canvasHeight) this.y = 0;
    else if (this.y < 0) this.y = canvasHeight;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 10; // Glow effect
    ctx.shadowColor = 'rgba(0, 255, 0, 0.5)'; // Glow color
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    // Reset shadow for other elements if needed (though lines don't use fill)
    ctx.shadowBlur = 0;
  }
}

export default function ParticleBackground() {
  const canvasRef = useRef(null); // Removed TypeScript generic

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particlesArray = []; // Define particlesArray here

    // Set canvas dimensions and recreate particles on resize
    const setupCanvas = () => {
      if (!canvas || !ctx) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Recreate particles based on new dimensions
      particlesArray = [];
      // Adjust particle density based on screen size
      const numberOfParticles = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000));

      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle(canvas.width, canvas.height));
      }
    };

    // Handle resize
    window.addEventListener('resize', setupCanvas);
    setupCanvas(); // Initial setup

    // Animation function
    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(canvas.width, canvas.height);
        particlesArray[i].draw(ctx);

        // Connect particles with lines
        for (let j = i + 1; j < particlesArray.length; j++) { // Start j from i + 1 to avoid duplicate checks
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Draw line if close enough
          if (distance < 100) {
            ctx.beginPath();
            // Adjust line color and opacity based on distance
            ctx.strokeStyle = `rgba(0, 240, 160, ${1 - distance / 100})`; // Use theme color for lines
            ctx.lineWidth = 0.3; // Thinner lines
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', setupCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <canvas
      ref={canvasRef}
      // Apply styles directly to mimic the previous fixed background behavior
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Ensure it's behind all other content
        pointerEvents: 'none', // Make canvas non-interactive
        backgroundColor: 'transparent' // Ensure canvas itself is transparent
      }}
    />
  );
}