'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ATELIER_VIDEO = '/bridal-homepage/atelier-camille-homepage.mp4';
const ATELIER_POSTER = '/bridal-homepage/atelier-camille-homepage-poster.jpg';

export default function BridalAiHomepageShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoReady(true);
          observer.disconnect();
        }
      },
      { rootMargin: '480px 0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="bridal-ai-showcase" className="bridal-ai-homepage-section">
      <style>{`
        .bridal-ai-homepage-section {
          background: #ffffff;
          color: #000000;
          overflow: hidden;
          padding: 10.2rem 0 0;
          width: 100%;
        }
        .bridal-ai-homepage-inner {
          width: min(1200px, calc(100% - 3rem));
          margin: 0 auto;
          padding-bottom: 5.1rem;
        }
        .bridal-ai-homepage-heading {
          max-width: 720px;
          margin: 0 auto 3.5rem;
          text-align: center;
        }
        .bridal-ai-homepage-divider {
          width: 60px;
          height: 1px;
          margin: 0 auto 2.5rem;
          background: #2d3139;
        }
        .bridal-ai-homepage-heading h2 {
          margin: 0 auto 1.25rem;
          font-family: var(--font-heading), Georgia, serif;
          font-size: var(--text-section-title);
          font-weight: 400;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: #000000;
        }
        .bridal-ai-homepage-heading p,
        .bridal-ai-homepage-body {
          margin: 0 auto;
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
          font-size: var(--text-body);
          font-weight: 300;
          line-height: var(--lh-body);
          letter-spacing: -0.011em;
          color: rgba(0, 0, 0, 0.72);
        }
        .bridal-ai-homepage-media {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 2.5rem;
          align-items: start;
        }
        .bridal-ai-homepage-static,
        .bridal-ai-homepage-video-column {
          min-width: 0;
        }
        .bridal-ai-homepage-static {
          display: grid;
          gap: 1.5rem;
        }
        .bridal-ai-homepage-static img,
        .bridal-ai-homepage-generic-video,
        .bridal-ai-homepage-video {
          display: block;
          width: 100%;
          max-width: 100%;
          height: auto;
          border: 0;
          border-radius: 0;
          box-shadow: none;
        }
        .bridal-ai-homepage-video {
          background: #f0eee9;
        }
        .bridal-ai-homepage-generic-video {
          background: #eeece7;
        }
        .bridal-ai-homepage-caption {
          margin: 0.85rem 0 0;
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif;
          font-size: var(--text-label);
          font-weight: 300;
          line-height: 1.4;
          letter-spacing: -0.011em;
          color: rgba(0, 0, 0, 0.56);
        }
        .bridal-ai-homepage-body {
          max-width: 70ch;
          margin-top: 2rem;
          text-align: center;
        }
        @media (min-width: 901px) {
          .bridal-ai-homepage-heading p,
          .bridal-ai-homepage-body {
            font-size: calc(var(--text-body) + 2px);
          }
        }
        @media (max-width: 900px) {
          .bridal-ai-homepage-section {
            padding-top: 5.1rem;
          }
          .bridal-ai-homepage-inner {
            width: calc(100% - 3rem);
          }
          .bridal-ai-homepage-heading {
            margin-bottom: 2.5rem;
          }
          .bridal-ai-homepage-heading h2 {
            font-size: clamp(1.9rem, 8vw, 2.4rem);
          }
          .bridal-ai-homepage-media {
            grid-template-columns: minmax(0, 1fr);
            gap: 2rem;
          }
          .bridal-ai-homepage-body {
            margin-top: 2rem;
          }
        }
      `}</style>

      <div className="bridal-ai-homepage-inner">
        <motion.div
          className="bridal-ai-homepage-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="bridal-ai-homepage-divider" aria-hidden="true" />
          <h2>But wait… can’t AI do it all for me?</h2>
          <p>Take one case. You need a website for your custom bridal atelier. You go to AI.</p>
        </motion.div>

        <div className="bridal-ai-homepage-media">
          <div className="bridal-ai-homepage-static">
            <video
              className="bridal-ai-homepage-generic-video"
              src="/bridal-ai-video.mp4"
              poster="/bridal-homepage/ai-generated-sites-grid.jpg"
              preload="metadata"
              autoPlay
              muted
              loop
              playsInline
              controls
              aria-label="Generic AI-generated bridal atelier website demo"
            />
          </div>

          <div className="bridal-ai-homepage-video-column">
            <video
              className="bridal-ai-homepage-video"
              src={videoReady ? ATELIER_VIDEO : undefined}
              poster={ATELIER_POSTER}
              preload={videoReady ? 'metadata' : 'none'}
              autoPlay={videoReady}
              muted
              loop
              playsInline
              controls
              aria-label="Atelier Camille custom bridal atelier website demo"
            />
            <p className="bridal-ai-homepage-caption">An example I built for this page.</p>
          </div>
        </div>

        <p className="bridal-ai-homepage-body">
          I use AI too. The difference is knowing what your site should say, who it’s for, and why a visitor should pick up the phone.
        </p>
      </div>
    </section>
  );
}
