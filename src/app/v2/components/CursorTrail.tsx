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

      // Only spawn particle trail when hovering over links, buttons, or interactive elements
      const target = e.target as HTMLElement | null;
      const isInteractive = target?.closest('a, button, [role="button"], input[type="submit"], input[type="button"], .btn, .nav-link, .hero-ring-badge');
      if (!isInteractive) return;
      
      // Spawn particles only on interactive hover movement
      const numParticles = 3;
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: mouse.x + (Math.random() - 0.5) * 6,
          y: mouse.y + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 1.8,
          vy: (Math.random() - 0.5) * 1.8 - 0.4, // Slight upward drift like luminous dust
          life: 1,
          maxLife: Math.random() * 30 + 25,
          size: Math.random() * 2 + 2.5, // 2.5px to 4.5px so it is clearly visible
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const render = () => {
      // Clear canvas on each frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Brand peach color (#f2908f)
      const baseColor = '242, 144, 143'; 

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        
        // Update life
        p.life -= 1 / p.maxLife;

        if (p.life > 0) {
          // Draw particle with clear brand peach color and soft outer glow
          const alpha = Math.min(1, Math.max(0, p.life * 1.0));
          ctx.fillStyle = `rgba(${baseColor}, ${alpha})`;
          
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
