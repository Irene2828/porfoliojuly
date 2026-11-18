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
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (prefersReducedMotion || isTouchDevice) return;

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

    // Resize canvas to full window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const spawnDust = (x: number, y: number, target: EventTarget | null, isIntro = false) => {
      mouse.x = x;
      mouse.y = y;
      const targetElement = target instanceof HTMLElement ? target : null;
      
      const isInteractive = targetElement?.closest('a, button, [role="button"], input[type="submit"], input[type="button"], .btn, .nav-link, .hero-ring-badge');
      // Keep the live cursor behavior unchanged; the intro uses the same specks at a
      // slightly denser cadence so the existing dust trail visibly travels the headline.
      const numParticles = isIntro ? 3 : isInteractive ? (Math.random() > 0.4 ? 2 : 1) : (Math.random() > 0.55 ? 1 : 0);
      const introHorizontalSpread = isIntro ? 3.2 : 4;
      const introHorizontalDrift = isIntro ? 0.72 : 0.9;
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: x + (Math.random() - 0.5) * introHorizontalSpread,
          y: y + (Math.random() - 0.5) * 4,
          vx: (Math.random() - 0.5) * introHorizontalDrift,
          vy: (Math.random() - 0.5) * 0.9 - 0.15, // Subtle gentle drift
          life: 1,
          maxLife: isIntro ? Math.random() * 42 + 60 : Math.random() * 25 + 18, // Let the intro dust remain visible across the full headline pass
          size: Math.random() > 0.5 ? 1.5 : 1.2, // Delicate 1.2px - 1.5px fine dust
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      spawnDust(e.clientX, e.clientY, target);
    };

    let introAnimationFrameId: number | undefined;
    let introTimeoutId: number | undefined;
    let introCancelled = false;

    const runHeroIntroTrail = () => {
      if (introCancelled) return;

      const hero = document.querySelector<HTMLElement>('.hero-hire');
      const headlineCandidates = hero
        ? Array.from(hero.querySelectorAll<HTMLElement>('.headline-desktop, .headline-mobile'))
        : [];
      const headline = headlineCandidates.find((element) => {
        const rect = element.getBoundingClientRect();
        const styles = window.getComputedStyle(element);
        return rect.width > 0 && rect.height > 0 && styles.display !== 'none' && styles.visibility !== 'hidden';
      });
      if (!headline) return;

      const lines = Array.from(headline.querySelectorAll<HTMLElement>('.headline-line')).filter((line) => {
        const rect = line.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      });
      if (lines.length < 2) return;

      const firstLine = lines[0].getBoundingClientRect();
      const lastLine = lines[lines.length - 1].getBoundingClientRect();
      const points = [
        { x: firstLine.left + 4, y: firstLine.top + firstLine.height / 2 },
        { x: lastLine.right - 4, y: lastLine.top + lastLine.height / 2 },
      ];
      const duration = 1372;
      const startedAt = performance.now();

      const animateIntro = (now: number) => {
        if (introCancelled) return;
        const progress = Math.min(1, (now - startedAt) / duration);
        const easedProgress = progress;
        const segmentPosition = easedProgress * (points.length - 1);
        const segmentIndex = Math.min(points.length - 2, Math.floor(segmentPosition));
        const segmentProgress = segmentPosition - segmentIndex;
        const from = points[segmentIndex];
        const to = points[segmentIndex + 1];
        const x = from.x + (to.x - from.x) * segmentProgress;
        const y = from.y + (to.y - from.y) * segmentProgress;

        spawnDust(x, y, document.elementFromPoint(x, y), true);

        if (progress < 1) {
          introAnimationFrameId = requestAnimationFrame(animateIntro);
        }
      };

      introTimeoutId = window.setTimeout(() => {
        introAnimationFrameId = requestAnimationFrame(animateIntro);
      }, 180);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const scheduleHeroIntro = () => {
      if (introCancelled) return;
      requestAnimationFrame(() => requestAnimationFrame(runHeroIntroTrail));
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(scheduleHeroIntro).catch(scheduleHeroIntro);
    } else {
      scheduleHeroIntro();
    }

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
      introCancelled = true;
      if (introTimeoutId !== undefined) window.clearTimeout(introTimeoutId);
      if (introAnimationFrameId !== undefined) cancelAnimationFrame(introAnimationFrameId);
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
    </>
  );
}
