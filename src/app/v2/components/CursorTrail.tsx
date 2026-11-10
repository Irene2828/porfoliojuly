'use client';

import React, { useEffect, useRef } from 'react';

// A lightweight, minimalist particle trail cursor effect using Canvas.
// It creates a subtle "stardust" effect by spawning microscopic dots (1-2px)
// that slowly fade out and drift slightly.

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

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
    const cursor = cursorRef.current;

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
      if (cursor) {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        cursor.classList.toggle('cursor-arrow-hover', Boolean((e.target as HTMLElement | null)?.closest('a, button, [role="button"]')));
      }

      const target = e.target as HTMLElement | null;
      const isInteractive = target?.closest('a, button, [role="button"], input[type="submit"], input[type="button"], .btn, .nav-link, .hero-ring-badge');
      
      // On general cursor movement spawn 1 delicate speck; on interactive elements spawn 2 specks
      const numParticles = isInteractive ? (Math.random() > 0.4 ? 2 : 1) : (Math.random() > 0.55 ? 1 : 0);
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: mouse.x + (Math.random() - 0.5) * 4,
          y: mouse.y + (Math.random() - 0.5) * 4,
          vx: (Math.random() - 0.5) * 0.9,
          vy: (Math.random() - 0.5) * 0.9 - 0.15, // Subtle gentle drift
          life: 1,
          maxLife: Math.random() * 25 + 18, // Quick graceful fade
          size: Math.random() > 0.5 ? 1.5 : 1.2, // Delicate 1.2px - 1.5px fine dust
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
          // Delicate, airy peach dust dot
          const alpha = Math.min(0.72, Math.max(0, p.life * 0.72));
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
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
        aria-hidden="true"
      />
      <div ref={cursorRef} className="cursor-arrow" aria-hidden="true">
        <svg viewBox="0 0 32 38" focusable="false">
          <path d="M3 2.5 28.8 16.8c1.4.8 1.1 2.8-.5 3.2l-8.8 2.2 5.3 10.1c.5 1 .1 2.2-.9 2.7l-2.5 1.3c-1 .5-2.2.1-2.7-.9l-5.2-10.1-5.9 6.8c-1 1.1-2.9.5-3-1L3 2.5Z" />
        </svg>
      </div>
    </>
  );
}
