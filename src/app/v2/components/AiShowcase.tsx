'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function AiShowcase() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = [useRef<HTMLVideoElement | null>(null), useRef<HTMLVideoElement | null>(null)];

  const toggleVideo = (index: number) => {
    const video = videoRefs[index].current;
    if (!video) return;
    if (playingVideo === index) {
      video.pause();
      setPlayingVideo(null);
    } else {
      videoRefs.forEach((ref, refIndex) => {
        if (refIndex !== index) ref.current?.pause();
      });
      void video.play();
      setPlayingVideo(index);
    }
  };

  return (
    <section
      id="ai-showcase"
      className="faq-section"
      style={{
        backgroundColor: '#ffffff',
        padding: '5.1rem 0 0 0',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .faq-section {
          background-color: #ffffff !important;
          color: #000000 !important;
        }
        .faq-kicker {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: 0.72rem !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.14em !important;
          color: #f2908f !important;
          -webkit-text-fill-color: #f2908f !important;
        }
        .faq-headline { text-align: center;
  font-family: var(--font-heading) !important;
          font-weight: 400 !important;
          letter-spacing: -0.02em !important;
          color: #000000 !important;
          -webkit-text-fill-color: #000000 !important;
        }
        .faq-section-heading {
          font-family: var(--font-heading) !important;
          font-weight: 400 !important;
          letter-spacing: -0.02em !important;
          color: var(--color-heading-silver) !important;
          -webkit-text-fill-color: var(--color-heading-silver) !important;
        }
        .faq-section-subline {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: clamp(1.05rem, 2.4vw, 1.2rem) !important;
          font-weight: 300 !important;
          line-height: 1.55 !important;
          letter-spacing: -0.011em !important;
          color: var(--color-body-dark, #2b3038) !important;
          -webkit-text-fill-color: var(--color-body-dark, #2b3038) !important;
          font-style: normal !important;
        }
        .faq-subline {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-weight: 300 !important;
          letter-spacing: -0.011em !important;
          color: rgba(0, 0, 0, 0.72) !important;
          -webkit-text-fill-color: rgba(0, 0, 0, 0.72) !important;
        }
        .faq-item {
          border-top: 1px solid rgba(0, 0, 0, 0.12) !important;
        }
        .faq-item:last-child {
          border-bottom: 1px solid rgba(0, 0, 0, 0.12) !important;
        }
        .faq-toggle {
          display: flex !important;
          align-items: center !important;
          justify-content: flex-start !important;
          width: 100% !important;
          background: none !important;
          border: none !important;
          cursor: pointer !important;
          padding: 1.7rem 2.5rem 1.7rem 0 !important;
          position: relative !important;
          text-align: left !important;
        }
        .faq-question {
          font-family: 'Newsreader', Georgia, serif !important;
          font-weight: 400 !important;
          letter-spacing: -0.015em !important;
          color: #000000 !important;
          -webkit-text-fill-color: #000000 !important;
        }
        .faq-indicator {
          position: absolute !important;
          right: 0.25rem !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: 1.6rem !important;
          font-weight: 300 !important;
          line-height: 1 !important;
          color: #f2908f !important;
          -webkit-text-fill-color: #f2908f !important;
          width: 2rem !important;
          text-align: center !important;
          flex-shrink: 0 !important;
        }
        .faq-answer-list {
          list-style: disc !important;
          padding: 0 0.5rem 1.9rem 1.4rem !important;
          margin: 0 !important;
          text-align: left !important;
        }
        .faq-answer-list li {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: 1.02rem !important;
          font-weight: 300 !important;
          letter-spacing: -0.011em !important;
          line-height: 1.65 !important;
          color: rgba(0, 0, 0, 0.78) !important;
          -webkit-text-fill-color: rgba(0, 0, 0, 0.78) !important;
          margin-bottom: 0.55rem !important;
          padding-left: 0.25rem !important;
        }
        .faq-answer-list li:last-child {
          margin-bottom: 0 !important;
        }
        .faq-answer-list li::marker {
          color: #f2908f !important;
        }
        .faq-closing {
          font-family: 'Newsreader', Georgia, serif !important;
          font-weight: 400 !important;
          letter-spacing: -0.015em !important;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
        }
        .faq-case-media {
          display: grid !important;
          grid-template-columns: 1fr 1fr !important;
          gap: 2.5rem !important; width: min(1200px, calc(100vw - 3rem)) !important; max-width: 1200px !important;
          align-items: start !important;
          margin: 0 0 3.5rem 50% !important; transform: translateX(-50%) !important;
        }
        .faq-case-video {
          display: block !important;
          width: 100% !important;
          height: auto !important;
          border-radius: 0 !important;
          box-shadow: none !important;
        }
        .faq-case-image {
          display: block !important;
          width: 100% !important;
          height: auto !important;
          border-radius: 0 !important;
          box-shadow: none !important;
        }
        .faq-case-caption {
          font-family: var(--font-body), 'Plus Jakarta Sans', sans-serif !important;
          font-size: 1rem !important;
          font-weight: 300 !important;
          letter-spacing: -0.011em !important;
          line-height: 1.55 !important;
          color: rgba(0, 0, 0, 0.72) !important;
          -webkit-text-fill-color: rgba(0, 0, 0, 0.72) !important;
          margin: 0.85rem 0 0 0 !important;
        }
        .faq-cta-heading .faq-cta-white {
          font-weight: 300 !important;
          font-style: italic !important;
          letter-spacing: 0.015em !important;
          color: rgba(255, 255, 255, 0.8) !important;
          -webkit-text-fill-color: rgba(255, 255, 255, 0.8) !important;
        }
        @media (max-width: 900px) {
          .faq-headline { text-align: center;
            font-size: clamp(1.9rem, 8vw, 2.4rem) !important; margin-left: 0 !important; margin-right: 0 !important;
          }
          .faq-question {
          font-size: 1.2915rem !important;
          }
          .faq-answer-list li {
            font-size: 1.071rem !important;
          }
          .faq-toggle {
            padding: 1.4rem 2.25rem 1.4rem 0 !important;
          }
          .faq-case-media {
            grid-template-columns: 1fr !important;
          }
          .faq-section .cases-decor-line {
            margin-top: 10.2rem !important;
          }
          .faq-cta-heading {
            text-align: left !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            max-width: 32ch !important;
          }
          .faq-cta-heading .faq-cta-accent {
            font-weight: 500 !important;
            font-style: italic !important;
          }
          .faq-cta-heading .faq-cta-white {
            font-weight: 300 !important;
            color: rgba(255, 255, 255, 0.8) !important;
            -webkit-text-fill-color: rgba(255, 255, 255, 0.8) !important;
          }
          .faq-cta-wrapper {
            max-width: 720px !important;
          }
        }
        /* Match the “Made by someone…” statement at every viewport width. */
        .faq-cta-heading {
          font-size: clamp(1.05rem, 2.4vw, 1.2rem) !important;
        }
        .faq-cta-heading,
        .faq-cta-heading .faq-cta-white,
        .faq-cta-heading .faq-cta-accent {
          font-weight: 700 !important;
        }
      `}</style>
      <div
        style={{
          maxWidth: '720px',
          width: '100%',
          margin: '0 auto',
          padding: '0 1.5rem 5.1rem',
          textAlign: 'left',
        }}
      >
        <motion.h2
          className="faq-headline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.78, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 4.4vw, 42px)',
            lineHeight: 1.2,
            color: '#000000',
            letterSpacing: '-0.02em',
            margin: '0 auto 1.25rem auto',
          }}
        >
          Why Hire Someone If There&apos;s AI?
        </motion.h2>
        <motion.p
          className="faq-subline"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.68, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontSize: 'clamp(1.05rem, 2.4vw, 1.2rem)',
            lineHeight: 1.55,
            margin: '0 auto 3.5rem auto',
            textAlign: 'center',
            maxWidth: '52ch',
          }}
        >
          Take one case. You need a website for your custom bridal atelier. You go to AI.
        </motion.p>
        <div className="faq-case-media">
          {[['/bridal-ai-video.mp4', undefined], ['/bridal-desktop-scroll-faststart.mp4', '/bridal-scroll-poster.jpg']].map(([src, poster], index) => (
            <div key={src}>
              <button type="button" onClick={() => toggleVideo(index)} style={{ display: 'block', position: 'relative', width: '100%', padding: 0, border: 0, background: 'none', cursor: 'pointer' }} aria-label={playingVideo === index ? 'Pause recording' : 'Play recording'}>
                <video ref={videoRefs[index]} className="faq-case-video" src={src} poster={poster} muted loop playsInline />
                <span aria-hidden="true" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '3rem', height: '3rem', borderRadius: '50%', background: 'rgba(255,255,255,0.88)', color: '#1A1F2B', display: playingVideo === index ? 'none' : 'grid', placeItems: 'center', fontSize: '1.15rem' }}>▶</span>
              </button>
              <p style={{ fontFamily: 'var(--font-label), sans-serif', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5C6672', textAlign: 'center', margin: '0.7rem 0 0' }}>Tap to play</p>
            </div>
          ))}
          <p style={{ gridColumn: '1 / -1', fontFamily: "var(--font-body), 'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.05rem, 2.4vw, 1.2rem)', fontWeight: 700, letterSpacing: '-0.011em', lineHeight: 1.65, color: 'rgba(0, 0, 0, 0.78)', textAlign: 'center', margin: '0.5rem auto 0', maxWidth: '52ch' }}>Made by someone who designs, builds, and answers for the result — because their name is on it.</p>
        </div>
        <motion.p
          className="faq-subline"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.68, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(1.05rem, 2.4vw, 1.2rem)', lineHeight: 1.55, margin: '0 auto 1.25rem auto', textAlign: 'center', maxWidth: '52ch' }}
        >
          Or take the Terry Fox poster tool. Ask AI to generate the posters, and it drifts: spacing off, brand rules broken, fonts it doesn&apos;t have. And you can&apos;t expect every volunteer to know how to direct AI until it behaves.
        </motion.p>
        <motion.p
          className="faq-subline"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.68, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(1.05rem, 2.4vw, 1.2rem)', lineHeight: 1.55, margin: '0 auto 1.25rem auto', textAlign: 'center', maxWidth: '52ch' }}
        >
          I build for deterministic output: rules, logic, and a human in charge. A custom solution, built around the problem — and it scales to the next problem, and the next.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.68, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "var(--font-body), 'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(1.05rem, 2.4vw, 1.2rem)', fontWeight: 700, letterSpacing: '-0.011em', lineHeight: 1.65, color: 'rgba(0, 0, 0, 0.78)', textAlign: 'center', margin: '2rem auto 0', maxWidth: '52ch' }}
        >
          That&apos;s where I can help.
        </motion.p>
      </div>
    </section>
  );
}
