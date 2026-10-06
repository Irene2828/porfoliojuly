'use client';

import React, { useEffect, useRef } from 'react';

// A lightweight, minimalist particle trail cursor effect using Canvas.
// It creates a subtle "stardust" effect by spawning microscopic dots (1-2px)
// that slowly fade out and drift slightly.

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Accessibility check: Do not animate if user prefers reduced motion.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
    }> = [];

    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };
    let isMoving = false;

    // Resize canvas to full window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      isMoving = true;
      
      // Spawn particles on movement
      const numParticles = 2; // Keep it minimalist, not too dense
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: mouse.x,
          y: mouse.y,
          vx: (Math.random() - 0.5) * 1.5, // Slight horizontal drift
          vy: (Math.random() - 0.5) * 1.5, // Slight vertical drift
          life: 1, // Opacity starts full
          maxLife: Math.random() * 40 + 30, // Random lifespan (approx 1-2 seconds at 60fps)
          size: Math.random() > 0.5 ? 1 : 2, // 1 to 2 pixels max
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const render = () => {
      // Clear canvas on each frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // We use a subtle slate-grey to match the minimalist aesthetic
      const baseColor = '74, 85, 104'; // #4a5568 (slate charcoal) used in hero

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        
        // Update life
        p.life -= 1 / p.maxLife;

        if (p.life > 0) {
          // Draw particle
          // Start opacity low (e.g. 0.4 max) and fade out
          const opacity = Math.max(0, p.life * 0.4);
          ctx.fillStyle = `rgba(${baseColor}, ${opacity})`;
          
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Clean up dead particles
      particles = particles.filter(p => p.life > 0);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999, // Ensure it's above other elements but doesn't block clicks
      }}
      aria-hidden="true"
    />
  );
}
