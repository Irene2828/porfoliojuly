'use client';

import '@/app/components/Hero.css';
import heroImage from '@/app/assets/test.webp';

export default function HeroV2() {
  return (
    <section className="section hero-section" id="home" style={{ backgroundColor: '#121316', background: '#121316' }}>
      {/* Off-black matte theme rules */}
      <style>{`
        .hero-section,
        .v2-theme .hero-section {
          background: #121316 !important;
          background-color: #121316 !important;
        }
        .hero-bg-split {
          display: none !important;
        }
        /* Headline scaled down (now +5% larger on desktops: 0.84) */
        .v2-theme .hero-statement,
        .hero-statement {
          zoom: 0.84;
        }
        .v2-theme .hero-statement,
        .hero-statement {
          color: rgba(255, 255, 255, 0.8) !important;
          -webkit-text-fill-color: rgba(255, 255, 255, 0.8) !important;
        }
        .v2-theme .headline-mockup-bold,
        .headline-mockup-bold {
          font-weight: 600 !important;
          letter-spacing: 0.025em !important;
          color: #f2908f !important;
          -webkit-text-fill-color: #f2908f !important;
        }
        .v2-theme .headline-mockup-light,
        .headline-mockup-light {
          font-weight: 300 !important;
          letter-spacing: normal !important;
          color: rgba(255, 255, 255, 0.8) !important;
          -webkit-text-fill-color: rgba(255, 255, 255, 0.8) !important;
        }
        .v2-theme .headline-light,
        .headline-light {
          font-weight: 400 !important;
          color: rgba(255, 255, 255, 0.8) !important;
          -webkit-text-fill-color: rgba(255, 255, 255, 0.8) !important;
        }
        .v2-theme .hero-frame-paragraph,
        .hero-frame-paragraph {
          color: #b8c5d4 !important;
          -webkit-text-fill-color: #b8c5d4 !important;
          font-weight: 300 !important;
        }
        .v2-theme .hero-frame-paragraph .hero-body-light,
        .hero-frame-paragraph .hero-body-light,
        .hero-body-light {
          font-weight: 300 !important;
        }
        .v2-theme .hero-frame-paragraph .hero-body-bold,
        .hero-frame-paragraph .hero-body-bold,
        .hero-body-bold,
        .v2-theme .hero-frame-paragraph strong,
        .hero-frame-paragraph strong {
          color: #b8c5d4 !important;
          -webkit-text-fill-color: #b8c5d4 !important;
          font-weight: 600 !important;
        }
        .v2-theme .hero-frame-paragraph em,
        .hero-frame-paragraph em {
          color: #b8c5d4 !important;
          -webkit-text-fill-color: #b8c5d4 !important;
          font-style: normal !important;
        }
        .hero-offer-item {
          display: inline;
          cursor: pointer;
          font-weight: 700 !important;
          letter-spacing: 0.025em !important;
          text-decoration: underline transparent !important;
          text-decoration-thickness: 1.5px;
          text-underline-offset: 4.5px;
          transition: text-decoration-color 0.22s ease;
        }
        .hero-offer-item:hover {
          text-decoration-color: #fed5b8 !important;
        }
        .hero-body-desktop {
          display: inline;
        }
        .hero-body-mobile {
          display: none;
        }
        @media (max-width: 900px) {
          .v2-theme .hero-statement,
          .hero-statement {
            zoom: 0.845 !important; /* +5% headline size on mobile */
          }
          .v2-theme .hero-name-group .hero-text,
          .hero-name-group .hero-text,
          .hero-text {
            align-items: flex-start !important;
            text-align: left !important;
          }
          .v2-theme .hero-text .hero-frame-paragraph,
          .hero-text .hero-frame-paragraph,
          .v2-theme .hero-frame-paragraph,
          .hero-frame-paragraph {
            text-align: left !important;
            align-self: flex-start !important;
            margin-left: 0 !important;
            margin-right: auto !important;
            margin-top: 1.26rem !important; /* headline-body spacing, tightened 10% from 1.4rem */
            line-height: 1.705 !important; /* body text lines, increased 10% from 1.55 */
            font-size: clamp(0.86rem, 3.7vw, 1.05rem) !important;
            max-width: 100% !important;
            width: 100% !important;
          }
          .hero-body-desktop {
            display: none !important;
          }
          .hero-body-mobile {
            display: block !important;
          }
          .hero-body-row {
            display: block !important;
          }
          .v2-theme .hero-image-wrapper,
          .hero-image-wrapper {
            padding-top: 1.2rem !important;
            padding-bottom: 0rem !important; /* tight: text pulled up toward image */
            margin-bottom: 0rem !important;
          }
          .v2-theme .hero-image-container,
          .hero-image-container {
            transform: scale(0.6375) !important; /* circled image 15% smaller */
            transform-origin: center center !important;
          }
          .v2-theme .hero-content,
          .hero-content {
            margin-top: 1.8rem !important; /* headline lowered 20% down in mobile hero */
          }
          .v2-theme .hero-container,
          .hero-container {
            gap: 0.5rem !important;
          }
          .v2-theme .headline-mobile,
          .headline-mobile {
            line-height: 1.205 !important; /* +10% larger line spacing */
            gap: 0px !important;
          }
          .v2-theme .headline-mobile .headline-line,
          .headline-mobile .headline-line {
            display: block !important;
            line-height: 1.205 !important; /* +10% larger line spacing */
            font-size: 1em !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .v2-theme .headline-mobile .headline-line *,
          .headline-mobile .headline-line * {
            display: inline !important;
            line-height: 1.205 !important;
            font-size: 1em !important;
            margin: 0 !important;
            padding: 0 !important;
            vertical-align: baseline !important;
          }
          .v2-theme .headline-mobile .headline-mockup-light,
          .v2-theme .headline-mobile .headline-mockup-bold,
          .headline-mobile .headline-mockup-light,
          .headline-mobile .headline-mockup-bold {
            font-size: 1em !important;
            line-height: 1.205 !important;
          }
          .v2-theme .headline-pair-gap,
          .headline-pair-gap {
            margin-top: 0rem !important; /* same spacing between 2 & 3 as between 1 & 2 */
          }
          .v2-theme .hero-ctas,
          .v2-theme .hero-ctas-outside {
            margin-top: 1.81125rem !important; /* body-buttons spacing +15% from 1.575rem */
            gap: 0.765rem !important; /* button-button spacing tightened 10% from 0.85rem */
            justify-content: center !important;
            align-items: center !important;
            width: 100% !important;
          }
          .v2-theme .hero-ctas-outside .prefooter-btn-primary,
          .v2-theme .hero-ctas-outside .face-cta,
          .v2-theme .hero-ctas-outside .btn-primary-outline.btn-primary,
          .v2-theme .hero-ctas-outside .btn-primary,
          .v2-theme .hero-ctas-outside .btn-primary-outline {
            background: linear-gradient(315deg, #d6b792 0%, #f2908f 100%) !important;
            height: 2.72rem !important;
            width: auto !important;
            min-width: min(75%, 246px) !important;
            max-width: 92% !important;
            padding: 0 1.19rem !important;
            margin: 0 auto !important;
            justify-content: center !important;
            white-space: nowrap !important;
            border-radius: 40px !important;
            border: 1px solid #e2a792 !important;
            box-shadow: none !important;
            transform: none !important;
            box-sizing: border-box !important;
          }
          .v2-theme .hero-ctas-outside .prefooter-btn-primary span,
          .v2-theme .hero-ctas-outside .face-cta span,
          .v2-theme .hero-ctas-outside .btn-primary-outline span {
            font-size: 0.67rem !important;
            letter-spacing: 0.05em !important;
            white-space: nowrap !important;
            display: inline-block !important;
          }
          .v2-theme .badge-anchor-websites,
          .badge-anchor-websites {
            bottom: -51px !important;
            left: -12px !important;
          }
          .v2-theme .hero-ring-badge,
          .hero-ring-badge,
          .badge-designer {
            font-size: 11.5px !important;
            padding: 5px 20px !important;
            width: fit-content !important;
            max-width: none !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            box-sizing: border-box !important;
            white-space: nowrap !important;
            letter-spacing: 0.02em !important;
            transform: scale(1.44) !important;
            transform-origin: bottom left !important;
          }
        }
        /* Primary CTA: matching prefooter pill button style (mixed beige & peach gradient, border-radius: 40px) */
        .v2-theme .hero-ctas-outside .prefooter-btn-primary,
        .v2-theme .hero-ctas-outside .face-cta,
        .v2-theme .hero-ctas-outside .btn-primary-outline.btn-primary,
        .v2-theme .hero-ctas-outside .btn-primary,
        .v2-theme .hero-ctas-outside .btn-primary-outline,
        .hero-ctas-outside .btn-primary-outline {
          font-family: var(--font-label), sans-serif !important;
          font-size: 0.72rem !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.08em !important;
          height: 3.01rem !important;
          padding: 0 1.74rem !important;
          background: linear-gradient(315deg, #d6b792 0%, #f2908f 100%) !important;
          border: 1px solid #e2a792 !important;
          color: #000000 !important;
          -webkit-text-fill-color: #000000 !important;
          border-radius: 40px !important;
          box-shadow: none !important;
          transform: none !important;
          transition: all 0.25s ease !important;
        }
        .v2-theme .hero-ctas-outside .prefooter-btn-primary span,
        .v2-theme .hero-ctas-outside .face-cta span,
        .v2-theme .hero-ctas-outside .btn-primary-outline span {
          font-size: 0.72rem !important;
          font-weight: 600 !important;
          letter-spacing: 0.08em !important;
        }
        .v2-theme .hero-ctas-outside .prefooter-btn-primary:hover,
        .v2-theme .hero-ctas-outside .face-cta:hover,
        .v2-theme .hero-ctas-outside .btn-primary-outline.btn-primary:hover,
        .v2-theme .hero-ctas-outside .btn-primary:hover,
        .v2-theme .hero-ctas-outside .btn-primary-outline:hover,
        .hero-ctas-outside .btn-primary-outline:hover {
          background: linear-gradient(315deg, #ddc19e 0%, #f49c9b 100%) !important;
          border-color: #e2a792 !important;
          color: #000000 !important;
          -webkit-text-fill-color: #000000 !important;
          border-radius: 40px !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 24px rgba(242, 144, 143, 0.28) !important;
        }
        .v2-theme .hero-ctas-outside .prefooter-btn-primary:hover svg,
        .v2-theme .hero-ctas-outside .face-cta:hover svg,
        .v2-theme .hero-ctas-outside .btn-primary-outline.btn-primary:hover svg,
        .v2-theme .hero-ctas-outside .btn-primary-outline:hover svg {
          stroke: #000000 !important;
        }
        /* Desktop size matching: .hero-container has transform: scale(0.88) at min-width: 1200px.
           Counter-scale by 1 / 0.88 = 1.13636 so the rendered button dimensions match prefooter CTA exactly. */
        @media (min-width: 1200px) {
          .v2-theme .hero-ctas-outside .prefooter-btn-primary,
          .v2-theme .hero-ctas-outside .face-cta,
          .v2-theme .hero-ctas-outside .btn-primary-outline.btn-primary,
          .v2-theme .hero-ctas-outside .btn-primary,
          .v2-theme .hero-ctas-outside .btn-primary-outline {
            transform: scale(1.13636) !important;
            transform-origin: right center !important;
          }
          .v2-theme .hero-ctas-outside .prefooter-btn-primary:hover,
          .v2-theme .hero-ctas-outside .face-cta:hover,
          .v2-theme .hero-ctas-outside .btn-primary-outline.btn-primary:hover,
          .v2-theme .hero-ctas-outside .btn-primary:hover,
          .v2-theme .hero-ctas-outside .btn-primary-outline:hover {
            transform: translateY(-2px) scale(1.13636) !important;
          }
        }
        /* Secondary CTA in hero: match headline unbolded text rgba(255, 255, 255, 0.8) */
        .v2-theme .hero-ctas-outside .btn-secondary-stacked,
        .hero-ctas-outside .btn-secondary-stacked,
        .btn-secondary-stacked {
          color: rgba(255, 255, 255, 0.8) !important;
          -webkit-text-fill-color: rgba(255, 255, 255, 0.8) !important;
          letter-spacing: 0.12em !important;
        }
        .v2-theme .hero-ctas-outside .btn-secondary-stacked .arrow,
        .hero-ctas-outside .btn-secondary-stacked .arrow {
          color: rgba(255, 255, 255, 0.8) !important;
        }
        .v2-theme .hero-ctas-outside .btn-secondary-stacked::after {
          background-color: rgba(255, 255, 255, 0.8) !important;
        }
        @media (min-width: 901px) {
          .v2-theme .hero-image-container,
          .hero-image-container {
            box-shadow: -8px -8px 0px 0px #1e2026 !important;
          }
        }
      `}</style>

      <div className="container hero-container" style={{ position: 'relative' }}>
        {/* Left side (now visually Left): Content, Headline frame, and CTAs */}
        <div className="hero-content" style={{ position: 'relative' }}>
          <div className="hero-copy-motion" style={{ position: 'relative', zIndex: 1 }}>
            <div className="hero-name-group" style={{ position: 'relative', width: 'fit-content', maxWidth: '100%' }}>
              <div
                className="hero-text"
                style={{ transform: 'translateY(-0.4rem)' }}
              >
                <h1 className="hero-statement hero-statement-anim" style={{ display: 'flex', flexDirection: 'column', gap: '0px', lineHeight: '1.22', color: 'rgba(255, 255, 255, 0.8)', WebkitTextFillColor: 'rgba(255, 255, 255, 0.8)' }}>
                  {/* Desktop Headline (2 lines) */}
                  <span className="headline-desktop" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    <span className="headline-line headline-light" style={{ color: 'rgba(255, 255, 255, 0.8)', WebkitTextFillColor: 'rgba(255, 255, 255, 0.8)' }}>
                      <span className="headline-mockup-light" style={{ fontWeight: 300, color: 'rgba(255, 255, 255, 0.8)', WebkitTextFillColor: 'rgba(255, 255, 255, 0.8)' }}>Custom</span>{' '}
                      <strong className="headline-mockup-bold" style={{ fontWeight: 600, letterSpacing: '0.025em', color: '#f2908f', WebkitTextFillColor: '#f2908f' }}>websites, tools, workflows.</strong>
                    </span>
                    <span className="headline-line headline-light" style={{ color: 'rgba(255, 255, 255, 0.8)', WebkitTextFillColor: 'rgba(255, 255, 255, 0.8)' }}>
                      <span className="headline-mockup-light" style={{ fontWeight: 300, color: 'rgba(255, 255, 255, 0.8)', WebkitTextFillColor: 'rgba(255, 255, 255, 0.8)' }}>Built for one business: <em style={{ fontStyle: 'italic' }}>yours.</em></span>
                    </span>
                  </span>

                  {/* Mobile Headline (3 lines, left-aligned) */}
                  <span className="headline-mobile" style={{ gap: '0px', lineHeight: 1.205, color: 'rgba(255, 255, 255, 0.8)' }}>
                    <span className="headline-line" style={{ lineHeight: 1.205, fontSize: '1em', margin: 0, padding: 0, color: 'rgba(255, 255, 255, 0.8)', WebkitTextFillColor: 'rgba(255, 255, 255, 0.8)' }}>
                      <span className="headline-mockup-light" style={{ fontWeight: 300, fontSize: '1em', lineHeight: 1.205, color: 'rgba(255, 255, 255, 0.8)', WebkitTextFillColor: 'rgba(255, 255, 255, 0.8)' }}>Custom</span>{' '}
                      <strong className="headline-mockup-bold" style={{ fontWeight: 600, fontSize: '1em', lineHeight: 1.205, letterSpacing: '0.025em', color: '#f2908f', WebkitTextFillColor: '#f2908f' }}>websites, tools</strong>
                    </span>
                    <span className="headline-line" style={{ lineHeight: 1.205, fontSize: '1em', margin: 0, padding: 0, color: 'rgba(255, 255, 255, 0.8)', WebkitTextFillColor: 'rgba(255, 255, 255, 0.8)' }}>
                      <strong className="headline-mockup-bold" style={{ fontWeight: 600, fontSize: '1em', lineHeight: 1.205, letterSpacing: '0.025em', color: '#f2908f', WebkitTextFillColor: '#f2908f' }}>&amp; workflows.</strong>
                    </span>
                    <span className="headline-line" style={{ lineHeight: 1.205, fontSize: '1em', margin: 0, padding: 0, color: 'rgba(255, 255, 255, 0.8)', WebkitTextFillColor: 'rgba(255, 255, 255, 0.8)' }}>
                      <span className="headline-mockup-light" style={{ fontWeight: 300, fontSize: '1em', lineHeight: 1.205, color: 'rgba(255, 255, 255, 0.8)', WebkitTextFillColor: 'rgba(255, 255, 255, 0.8)' }}>Built for one business: <em style={{ fontStyle: 'italic', fontSize: '1em', lineHeight: 1.205 }}>yours.</em></span>
                    </span>
                  </span>
                </h1>
                <p className="hero-frame-paragraph hero-paragraph-anim" style={{ marginTop: '1.7rem', fontSize: '1.213rem', lineHeight: '1.75', color: '#b8c5d4', WebkitTextFillColor: '#b8c5d4', maxWidth: '100%', fontWeight: 300, opacity: 1, textWrap: 'pretty' }}>
                  <span className="hero-body-desktop">
                    <strong className="hero-body-bold">You tell me what&rsquo;s not working</strong> &ndash; <span className="hero-body-light" style={{ fontWeight: 300 }}>a site that undersells you, a task that eats your week, a process held together by spreadsheets.</span> <strong className="hero-body-bold">I take it from there and build the solution.</strong>
                  </span>
                  <span className="hero-body-mobile">
                    <span className="hero-body-row"><strong className="hero-body-bold">You tell me what&rsquo;s not working</strong> -</span>
                    <span className="hero-body-row hero-body-light" style={{ fontWeight: 300 }}>a site that undersells you, a task that eats your</span>
                    <span className="hero-body-row hero-body-light" style={{ fontWeight: 300 }}>week, a process held together by spreadsheets.</span>
                    <span className="hero-body-row"><strong className="hero-body-bold">I take it from there and build the solution.</strong></span>
                  </span>
                </p>
              </div>

              {/* CTAs: right-aligned flush with content block */}
              <div
                className="hero-ctas hero-ctas-outside hero-ctas-anim"
                style={{ 
                  width: '100%', 
                  maxWidth: '100%',
                  display: 'flex', 
                  justifyContent: 'flex-end', 
                  alignItems: 'center', 
                  gap: '1.5rem', 
                  marginTop: '3.9rem' 
                }}
              >
                <a 
                  href="#contact" 
                  className="btn prefooter-btn-primary face-cta" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
                >
                  <span>SEND YOUR PROBLEM MY WAY</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-0.5px)' }}>
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
                <a href="#cases" className="btn btn-secondary btn-secondary-stacked" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  SEE WHAT I’VE BUILT <span className="arrow" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>↓</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right side (now visually Right): Image with Concentric Geometric Rings & Hugging Labels */}
        <div className="hero-image-wrapper">
          <div className="hero-image-container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="hero-image-brackets"></div>
            <div className="hero-image-brackets-left"></div>
            <img src={heroImage.src} alt="Iryna Sheremeta" className="hero-image" style={{ position: 'relative', zIndex: 2 }} />
            <div className="hero-dot-overlay"></div>

            {/* Geometric square shapes: Bottom-Left of Image */}
            <div 
              className="hero-shape-bottom-left" 
              aria-hidden="true" 
              style={{ 
                position: 'absolute', 
                bottom: '-35px', 
                left: '-45px', 
                width: '200px', 
                height: '200px', 
                pointerEvents: 'none', 
                zIndex: 1 
              }}
            >
              <svg 
                width="200" 
                height="200" 
                viewBox="0 0 200 200" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ 
                  width: '100%', 
                  height: '100%',
                  maskImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.15) 100%)',
                  WebkitMaskImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.15) 100%)'
                }}
              >
                {/* Outer Rectangle - Lined (solid), Pale subtle stroke */}
                <rect x="6" y="6" width="188" height="188" stroke="rgba(247, 214, 208, 0.45)" strokeWidth="1.2" strokeOpacity="0.4" />
                {/* Middle Rectangle - Dashed, Pale subtle stroke */}
                <rect x="36" y="36" width="128" height="128" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1.2" strokeDasharray="4 4" strokeOpacity="0.35" />
                {/* Inner Rectangle - Lined (solid), Pale subtle stroke */}
                <rect x="66" y="66" width="68" height="68" stroke="rgba(247, 214, 208, 0.35)" strokeWidth="1.2" strokeOpacity="0.3" />
              </svg>
            </div>

            {/* Geometric square shapes: Top-Right of Image (Mirror looking) */}
            <div 
              className="hero-shape-top-right" 
              aria-hidden="true" 
              style={{ 
                position: 'absolute', 
                top: '-35px', 
                right: '-45px', 
                width: '200px', 
                height: '200px', 
                pointerEvents: 'none', 
                zIndex: 1 
              }}
            >
              <svg 
                width="200" 
                height="200" 
                viewBox="0 0 200 200" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ 
                  width: '100%', 
                  height: '100%',
                  maskImage: 'linear-gradient(315deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.15) 100%)',
                  WebkitMaskImage: 'linear-gradient(315deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.15) 100%)'
                }}
              >
                {/* Outer Rectangle - Lined (solid), Pale subtle stroke */}
                <rect x="6" y="6" width="188" height="188" stroke="rgba(247, 214, 208, 0.45)" strokeWidth="1.2" strokeOpacity="0.4" />
                {/* Middle Rectangle - Dashed, Pale subtle stroke */}
                <rect x="36" y="36" width="128" height="128" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1.2" strokeDasharray="4 4" strokeOpacity="0.35" />
                {/* Inner Rectangle - Lined (solid), Pale subtle stroke */}
                <rect x="66" y="66" width="68" height="68" stroke="rgba(247, 214, 208, 0.35)" strokeWidth="1.2" strokeOpacity="0.3" />
              </svg>
            </div>


          </div>

          <span className="hero-hover-surface" aria-hidden="true"></span>
        </div>
      </div>
      <div className="hero-bottom-hairline-line"></div>
    </section>
  );
}
