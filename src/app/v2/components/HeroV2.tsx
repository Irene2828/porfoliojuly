'use client';

import '@/app/components/Hero.css';
import heroImage from '@/app/assets/new_me.jpg';

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
        @media (min-width: 901px) {
          .v2-theme .hero-statement,
          .hero-statement,
          .hero-name-group .hero-text h1.hero-statement {
            zoom: 1 !important;
            font-size: clamp(50px, 4.5vw, 64px) !important;
            line-height: 1.15 !important;
            letter-spacing: -0.018em !important;
          }
          .headline-desktop {
            display: flex !important;
            flex-direction: column !important;
            gap: 0px !important;
          }
          .headline-desktop .headline-line {
            display: block !important;
            line-height: 1.15 !important;
            white-space: nowrap !important;
          }
        }
        .headline-desktop-light,
        .headline-mobile-light {
          font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
          font-weight: 400 !important;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          letter-spacing: -0.018em !important;
        }
        .headline-desktop-accent,
        .headline-mobile-accent {
          font-family: 'Newsreader', 'Source Serif 4', Georgia, serif !important;
          font-weight: 400 !important;
          background: none !important;
          -webkit-background-clip: border-box !important;
          background-clip: border-box !important;
          color: #f2908f !important;
          -webkit-text-fill-color: #f2908f !important;
          display: inline-block !important;
          letter-spacing: -0.01em !important;
        }
        .headline-desktop-serif,
        .headline-mobile-serif {
          font-family: 'Newsreader', 'Source Serif 4', Georgia, serif !important;
          font-style: italic !important;
          font-weight: 400 !important;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          letter-spacing: -0.01em !important;
        }
        .headline-desktop-serif-normal,
        .headline-mobile-serif-normal {
          font-family: 'Newsreader', 'Source Serif 4', Georgia, serif !important;
          font-style: normal !important;
          font-weight: 400 !important;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          letter-spacing: -0.01em !important;
        }
        .v2-theme .hero-statement,
        .hero-statement {
          color: rgba(255, 255, 255, 0.8) !important;
          -webkit-text-fill-color: rgba(255, 255, 255, 0.8) !important;
        }
        .v2-theme .headline-mockup-bold,
        .headline-mockup-bold {
          font-weight: 500 !important;
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
          color: #d9d9d9 !important;
          -webkit-text-fill-color: #d9d9d9 !important;
          font-weight: 300 !important;
        }
        .v2-theme .hero-frame-paragraph .hero-body-light,
        .hero-frame-paragraph .hero-body-light,
        .hero-body-light {
          font-weight: 300 !important;
          font-style: italic !important;
        }
        .v2-theme .hero-frame-paragraph .hero-body-normal,
        .hero-frame-paragraph .hero-body-normal,
        .hero-body-normal {
          font-weight: 500 !important; /* one touch bolder on desktop hero */
          font-style: normal !important;
          color: #d9d9d9 !important;
          -webkit-text-fill-color: #d9d9d9 !important;
        }
        .v2-theme .hero-frame-paragraph .hero-body-bold,
        .hero-frame-paragraph .hero-body-bold,
        .hero-body-bold,
        .v2-theme .hero-frame-paragraph strong,
        .hero-frame-paragraph strong {
          color: #d9d9d9 !important;
          -webkit-text-fill-color: #d9d9d9 !important;
          font-weight: 600 !important;
        }
        .v2-theme .hero-frame-paragraph em,
        .hero-frame-paragraph em {
          color: #d9d9d9 !important;
          -webkit-text-fill-color: #d9d9d9 !important;
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
          display: block;
        }
        .hero-body-desktop .hero-body-row {
          display: block !important;
        }
        .hero-body-mobile {
          display: none;
        }
        @media (min-width: 901px) {
          .hero-body-mobile {
            display: none !important;
          }
          .hero-body-desktop {
            display: block !important;
          }
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
            font-family: var(--font-body) !important;
            font-size: 17.33px !important; /* +10% text size */
            font-weight: 400 !important;
            color: #d9d9d9 !important;
            -webkit-text-fill-color: #d9d9d9 !important;
            text-align: left !important;
            align-self: flex-start !important;
            margin-left: 0 !important;
            margin-top: 1.26rem !important; /* headline-body spacing, tightened 10% from 1.4rem */
            line-height: 1.5225 !important;
          }
          .v2-theme .hero-frame-paragraph .hero-body-light,
          .hero-frame-paragraph .hero-body-light,
          .hero-body-mobile .hero-body-row,
          .hero-body-mobile,
          .hero-body-mobile-text {
            font-family: var(--font-body) !important;
            font-size: 15.6px !important; /* -10% text size from 17.33px */
            font-weight: 400 !important;
            font-style: normal !important; /* not italic on mobile */
            color: #d9d9d9 !important;
            -webkit-text-fill-color: #d9d9d9 !important;
            line-height: 1.5225 !important;
          }
          .v2-theme .hero-frame-paragraph .hero-body-bold,
          .hero-frame-paragraph .hero-body-bold,
          .hero-body-mobile .hero-body-bold,
          .hero-body-mobile strong {
            display: block !important;
            margin-top: 0.65rem !important; /* increased spacing between bold and unbold text */
            font-family: var(--font-body) !important;
            font-size: 15.6px !important;
            font-weight: 400 !important; /* unbolded: same 400 weight as unbolded text */
            font-style: normal !important; /* not italic */
            color: #d9d9d9 !important;
            -webkit-text-fill-color: #d9d9d9 !important;
            line-height: 1.5225 !important;
            letter-spacing: normal !important;
          }
          .hero-body-desktop {
            display: none !important;
          }
          .hero-body-mobile {
            display: block !important;
            max-width: 100% !important;
            width: 100% !important;
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
            transform: scale(0.733) !important; /* circled image +15% larger on mobile */
            transform-origin: center center !important;
            box-shadow: none !important;
            -webkit-box-shadow: none !important;
          }
          .v2-theme .hero-image,
          .hero-image {
            box-shadow: none !important;
            -webkit-box-shadow: none !important;
          }
          .v2-theme .hero-dot-overlay,
          .hero-dot-overlay {
            display: none !important;
          }
          .v2-theme .hero-content,
          .hero-content {
            margin-top: 0.325rem !important; /* equal spacing: space below shapes matches space above (46px) */
          }
          .v2-theme .hero-container,
          .hero-container {
            gap: 0rem !important; /* equal spacing: space below shapes matches space above (46px) */
          }
          .v2-theme .hero-statement,
          .hero-statement,
          .v2-theme .headline-mobile,
          .headline-mobile {
            font-size: clamp(2.82rem, 12.77vw, 4.18rem) !important; /* +20% mobile hero headline */
            line-height: 1.02 !important; /* line spacing 20% less */
          }
          .v2-theme .headline-mobile,
          .headline-mobile {
            line-height: 1.02 !important;
            gap: 0px !important;
          }
          .v2-theme .headline-mobile .headline-line,
          .headline-mobile .headline-line {
            display: block !important;
            line-height: 1.02 !important;
            font-size: 1em !important;
            margin: 0 !important;
            padding: 0 !important;
            white-space: nowrap !important;
          }
          .v2-theme .headline-mobile .headline-line *,
          .headline-mobile .headline-line * {
            display: inline !important;
            line-height: 1.02 !important;
            font-size: 1em !important;
            margin: 0 !important;
            padding: 0 !important;
            vertical-align: baseline !important;
          }
          .v2-theme .headline-pair-gap,
          .headline-pair-gap {
            margin-top: 0rem !important; /* same spacing between 2 & 3 as between 1 & 2 */
          }
          .v2-theme .hero-ctas,
          .v2-theme .hero-ctas-outside {
            margin-top: 2.1735rem !important; /* body-buttons spacing +20% from 1.81125rem */
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
            height: 3.25rem !important; /* -10% from 3.612rem */
            width: auto !important;
            padding: 0 1.88rem !important; /* -10% from 2.088rem */
            margin: 0 auto !important;
            justify-content: center !important;
            white-space: nowrap !important;
            border-radius: 44px !important;
            border: 1px solid #e2a792 !important;
            box-shadow: none !important;
            transform: none;
            box-sizing: border-box !important;
            gap: 0.49rem !important;
          }
          .v2-theme .hero-ctas-outside .prefooter-btn-primary span,
          .v2-theme .hero-ctas-outside .face-cta span,
          .v2-theme .hero-ctas-outside .btn-primary-outline span {
            font-size: 0.78rem !important; /* -10% from 0.864rem */
            font-weight: 700 !important;
            letter-spacing: 0.08em !important;
            white-space: nowrap !important;
            display: inline-block !important;
          }
          .v2-theme .hero-ctas-outside .prefooter-btn-primary svg,
          .v2-theme .hero-ctas-outside .face-cta svg,
          .v2-theme .hero-ctas-outside .btn-primary-outline svg {
            width: 11px !important;
            height: 11px !important;
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
        @media (min-width: 901px) {
          .v2-theme .hero-ctas-outside .prefooter-btn-primary,
          .v2-theme .hero-ctas-outside .face-cta,
          .v2-theme .hero-ctas-outside .btn-primary-outline.btn-primary,
          .v2-theme .hero-ctas-outside .btn-primary,
          .v2-theme .hero-ctas-outside .btn-primary-outline,
          .hero-ctas-outside .btn-primary-outline {
            font-family: var(--font-label), sans-serif !important;
            font-size: 0.72rem !important;
            font-weight: 700 !important;
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
            font-weight: 700 !important;
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
          .v2-theme .hero-image-wrapper,
          .hero-image-wrapper {
            top: -5.4rem !important;
          }
        }
        /* Mobile hero body line width (350px to 900px, covers iPhone 13, 13 mini, display zoom, 12, 14, 15) */
        @media (max-width: 900px) {
          .v2-theme .hero-name-group,
          .hero-name-group {
            width: 100% !important;
            max-width: 100% !important;
          }
          .v2-theme .hero-text,
          .hero-text {
            width: 100% !important;
            max-width: 100% !important;
          }
          .v2-theme .hero-text .hero-frame-paragraph,
          .hero-text .hero-frame-paragraph,
          .v2-theme .hero-frame-paragraph,
          .hero-frame-paragraph {
            width: calc(100% + 0.85rem) !important;
            max-width: 520px !important;
            margin-right: -0.85rem !important;
          }
          .hero-body-mobile {
            width: 100% !important;
            max-width: 100% !important;
          }
        }
        /* Very small screens (<= 349px, e.g. iPhone 5 / SE 1st gen) */
        @media (max-width: 349px) {
          .v2-theme .hero-frame-paragraph,
          .hero-frame-paragraph {
            width: 100% !important;
            max-width: 100% !important;
            margin-right: auto !important;
          }
          .hero-body-mobile {
            width: 100% !important;
            max-width: 100% !important;
          }
        }

        /* ─────────────────────────────────────────────────────────────────────────
           MOBILE HERO CHOREOGRAPHY — Designer-Builder Precision Load (<= 900px)
           ───────────────────────────────────────────────────────────────────────── */
        @media (max-width: 900px) {
          /* 1. Portrait Crisp Scale & Rise (no blur so face is razor-sharp) */
          @keyframes mobilePortraitReveal {
            0% {
              opacity: 0;
              transform: scale(0.91) translate3d(0, 10px, 0);
            }
            100% {
              opacity: 1;
              transform: scale(1) translate3d(0, 0, 0);
            }
          }

          /* Subtle orbital calibration pulse around the circular portrait */
          @keyframes mobileOrbitalPulse {
            0% {
              opacity: 0;
              transform: scale(0.88);
            }
            35% {
              opacity: 0.7;
            }
            100% {
              opacity: 0;
              transform: scale(1.08);
            }
          }

          /* 2. Architectural CAD Wireframe Expansion & Stroke Drawing */
          @keyframes mobileWireframeTopRight {
            0% {
              opacity: 0;
              transform: translate3d(-20px, 20px, 0) scale(0.86);
            }
            100% {
              opacity: 1;
              transform: translate3d(0, 0, 0) scale(1);
            }
          }

          @keyframes mobileWireframeBottomLeft {
            0% {
              opacity: 0;
              transform: translate3d(20px, -20px, 0) scale(0.86);
            }
            100% {
              opacity: 1;
              transform: translate3d(0, 0, 0) scale(1);
            }
          }

          @keyframes mobileWireframeStrokeDraw {
            0% {
              stroke-dashoffset: 760;
              stroke-opacity: 0.85;
            }
            60% {
              stroke-opacity: 0.65;
            }
            100% {
              stroke-dashoffset: 0;
              stroke-opacity: 0.4;
            }
          }

          @keyframes mobileWireframeDashSettle {
            0% {
              stroke-dashoffset: 36;
              stroke-opacity: 0.75;
            }
            100% {
              stroke-dashoffset: 0;
              stroke-opacity: 0.35;
            }
          }

          /* 3. Editorial 4-Line Headline Staggered Rise (no filter on parent so background-clip:text stays vibrant from frame 1) */
          @keyframes mobileHeadlineLineReveal {
            0% {
              opacity: 0;
              transform: translate3d(0, 16px, 0);
            }
            100% {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }

          /* Warm champagne-coral catchlight sweep on accent nouns */
          @keyframes mobileAccentLuster {
            0% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          /* Signature editorial warm bloom on "yours." */
          @keyframes mobileYoursSignature {
            0% {
              opacity: 0;
              text-shadow: 0 0 22px rgba(242, 144, 143, 0.75);
            }
            55% {
              opacity: 1;
              text-shadow: 0 0 14px rgba(214, 183, 146, 0.42);
            }
            100% {
              opacity: 1;
              text-shadow: 0 0 0px rgba(242, 144, 143, 0);
            }
          }

          /* 4. Two-Beat Body Copy Glide */
          @keyframes mobileBodyBlockReveal {
            0% {
              opacity: 0;
              transform: translate3d(0, 14px, 0);
            }
            100% {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }

          /* 5. Primary CTA Pill Rise, Specular Silk Sheen & Arrow Vector Lock */
          @keyframes mobilePrimaryCtaReveal {
            0% {
              opacity: 0;
              transform: translate3d(0, 14px, 0) scale(0.96);
            }
            100% {
              opacity: 1;
              transform: translate3d(0, 0, 0) scale(1);
            }
          }

          @keyframes mobileCtaSpecularSweep {
            0% {
              transform: translate3d(-140%, 0, 0) skewX(-22deg);
              opacity: 0;
            }
            20% {
              opacity: 0.9;
            }
            100% {
              transform: translate3d(240%, 0, 0) skewX(-22deg);
              opacity: 0;
            }
          }

          @keyframes mobileCtaArrowLaunch {
            0% {
              opacity: 0;
              transform: translate3d(-5px, 5px, 0) scale(0.8);
            }
            65% {
              opacity: 1;
              transform: translate3d(1px, -1.5px, 0) scale(1.06);
            }
            100% {
              opacity: 1;
              transform: translate3d(0, -0.5px, 0) scale(1);
            }
          }

          @keyframes mobileSecondaryCtaReveal {
            0% {
              opacity: 0;
              transform: translate3d(0, 10px, 0);
            }
            100% {
              opacity: 1;
              transform: translate3d(0, 0, 0);
            }
          }

          @keyframes mobileSecondaryArrowNudge {
            0% {
              transform: translate3d(0, -4px, 0);
              opacity: 0;
            }
            60% {
              transform: translate3d(0, 2px, 0);
              opacity: 1;
            }
            100% {
              transform: translate3d(0, 0, 0);
              opacity: 1;
            }
          }

          /* Apply Portrait & Wireframe Choreography */
          .v2-theme .hero-image-container {
            position: relative !important;
          }
          .v2-theme .hero-image-container::after {
            content: '';
            position: absolute;
            inset: -2px;
            border-radius: 50%;
            border: 1.2px solid rgba(242, 144, 143, 0.45);
            pointer-events: none;
            z-index: 3;
            animation: mobileOrbitalPulse 1.05s cubic-bezier(0.16, 1, 0.3, 1) 0.06s both;
          }
          .v2-theme .hero-image-container .hero-image,
          .hero-image-container .hero-image {
            will-change: transform, opacity;
            animation: mobilePortraitReveal 0.78s cubic-bezier(0.16, 1, 0.3, 1) 0.02s both !important;
          }
          .v2-theme .hero-shape-top-right,
          .hero-shape-top-right {
            will-change: transform, opacity;
            animation: mobileWireframeTopRight 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both !important;
          }
          .v2-theme .hero-shape-bottom-left,
          .hero-shape-bottom-left {
            will-change: transform, opacity;
            animation: mobileWireframeBottomLeft 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.16s both !important;
          }
          .hero-shape-top-right svg rect:not([stroke-dasharray]),
          .hero-shape-bottom-left svg rect:not([stroke-dasharray]) {
            stroke-dasharray: 760;
            animation: mobileWireframeStrokeDraw 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both;
          }
          .hero-shape-top-right svg rect[stroke-dasharray],
          .hero-shape-bottom-left svg rect[stroke-dasharray] {
            animation: mobileWireframeDashSettle 1.15s cubic-bezier(0.16, 1, 0.3, 1) 0.16s both;
          }

          /* Apply 4-Line Editorial Headline Cascade */
          .v2-theme .headline-mobile > .headline-line,
          .headline-mobile > .headline-line {
            will-change: transform, opacity;
            animation: mobileHeadlineLineReveal 0.72s cubic-bezier(0.16, 1, 0.3, 1) both !important;
          }
          .v2-theme .headline-mobile > .headline-line:nth-child(1),
          .headline-mobile > .headline-line:nth-child(1) {
            animation-delay: 0.08s !important;
          }
          .v2-theme .headline-mobile > .headline-line:nth-child(2),
          .headline-mobile > .headline-line:nth-child(2) {
            animation-delay: 0.15s !important;
          }
          .v2-theme .headline-mobile > .headline-line:nth-child(3),
          .headline-mobile > .headline-line:nth-child(3) {
            animation-delay: 0.22s !important;
          }
          .v2-theme .headline-mobile > .headline-line:nth-child(4),
          .headline-mobile > .headline-line:nth-child(4) {
            animation-delay: 0.29s !important;
          }

          /* Accent Words Solid Peach Brand Color & "yours." Signature */
          .v2-theme .headline-mobile .headline-mobile-accent,
          .headline-mobile .headline-mobile-accent {
            background: none !important;
            -webkit-background-clip: border-box !important;
            background-clip: border-box !important;
            color: #f2908f !important;
            -webkit-text-fill-color: #f2908f !important;
          }
          .v2-theme .headline-mobile .headline-mobile-serif,
          .headline-mobile .headline-mobile-serif {
            animation: mobileYoursSignature 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.38s both !important;
          }

          /* Apply Two-Beat Body Copy Glide */
          .v2-theme .hero-body-mobile .hero-body-mobile-text,
          .hero-body-mobile .hero-body-mobile-text {
            display: block !important;
            will-change: transform, opacity;
            animation: mobileBodyBlockReveal 0.72s cubic-bezier(0.16, 1, 0.3, 1) 0.38s both !important;
          }
          .v2-theme .hero-body-mobile .hero-body-bold,
          .hero-body-mobile .hero-body-bold {
            will-change: transform, opacity;
            animation: mobileBodyBlockReveal 0.72s cubic-bezier(0.16, 1, 0.3, 1) 0.46s both !important;
          }

          /* Apply CTA Entrance, Specular Sheen & Arrow Vectors */
          .v2-theme .hero-ctas-outside .face-cta,
          .hero-ctas-outside .face-cta {
            position: relative !important;
            overflow: hidden !important;
            will-change: transform, opacity;
            animation: mobilePrimaryCtaReveal 0.76s cubic-bezier(0.16, 1, 0.3, 1) 0.54s both !important;
          }
          .v2-theme .hero-ctas-outside .face-cta::after,
          .hero-ctas-outside .face-cta::after {
            content: '';
            position: absolute;
            top: -10%;
            left: 0;
            width: 36%;
            height: 120%;
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.48) 50%,
              rgba(255, 255, 255, 0) 100%
            );
            pointer-events: none;
            animation: mobileCtaSpecularSweep 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.82s both;
          }
          .v2-theme .hero-ctas-outside .face-cta svg,
          .hero-ctas-outside .face-cta svg {
            animation: mobileCtaArrowLaunch 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.68s both !important;
          }
          .v2-theme .hero-ctas-outside .btn-secondary-stacked,
          .hero-ctas-outside .btn-secondary-stacked {
            will-change: transform, opacity;
            animation: mobileSecondaryCtaReveal 0.72s cubic-bezier(0.16, 1, 0.3, 1) 0.62s both !important;
          }
          .v2-theme .hero-ctas-outside .btn-secondary-stacked .arrow,
          .hero-ctas-outside .btn-secondary-stacked .arrow {
            display: inline-block !important;
            animation: mobileSecondaryArrowNudge 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.78s both !important;
          }
        }

        /* Respect Reduced Motion Preferences on Mobile */
        @media (max-width: 900px) and (prefers-reduced-motion: reduce) {
          .v2-theme .hero-image-container::after,
          .v2-theme .hero-ctas-outside .face-cta::after {
            display: none !important;
            animation: none !important;
          }
          .v2-theme .hero-image-container .hero-image,
          .v2-theme .hero-shape-top-right,
          .v2-theme .hero-shape-bottom-left,
          .hero-shape-top-right svg rect,
          .hero-shape-bottom-left svg rect,
          .v2-theme .headline-mobile > .headline-line,
          .v2-theme .headline-mobile .headline-mobile-accent,
          .v2-theme .headline-mobile .headline-mobile-serif,
          .v2-theme .hero-body-mobile .hero-body-mobile-text,
          .v2-theme .hero-body-mobile .hero-body-bold,
          .v2-theme .hero-ctas-outside .face-cta,
          .v2-theme .hero-ctas-outside .face-cta svg,
          .v2-theme .hero-ctas-outside .btn-secondary-stacked,
          .v2-theme .hero-ctas-outside .btn-secondary-stacked .arrow {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }
      `}</style>
    

      <div className="container hero-container" style={{ position: 'relative' }}>
        {/* Left side (now visually Left): Content, Headline frame, and CTAs */}
        <div className="hero-content" style={{ position: 'relative' }}>
          <div className="hero-copy-motion" style={{ position: 'relative', zIndex: 1 }}>
            <div className="hero-name-group" style={{ position: 'relative', maxWidth: '100%' }}>
              <div
                className="hero-text"
              >
                <h1 className="hero-statement hero-statement-anim" style={{ display: 'flex', flexDirection: 'column', gap: '0px', lineHeight: '1.22', color: 'rgba(255, 255, 255, 0.8)', WebkitTextFillColor: 'rgba(255, 255, 255, 0.8)' }}>
                  {/* Desktop Headline (3 lines) */}
                  <span className="headline-desktop">
                    <span className="headline-line">
                      <span className="headline-desktop-serif-normal">Custom</span>{' '}
                      <strong className="headline-desktop-accent">websites,</strong>
                    </span>
                    <span className="headline-line">
                      <strong className="headline-desktop-accent">tools,</strong>{' '}
                      <strong className="headline-desktop-accent">and</strong>{' '}
                      <strong className="headline-desktop-accent">workflows.</strong>
                    </span>
                    <span className="headline-line">
                      <span className="headline-desktop-serif-normal">Built for one business &mdash;</span>{' '}
                      <em className="headline-desktop-serif">yours.</em>
                    </span>
                  </span>

                  {/* Mobile Headline (4 lines, left-aligned) */}
                  <span className="headline-mobile" style={{ gap: '0px', lineHeight: 1.02 }}>
                    <span className="headline-line">
                      <span className="headline-mobile-serif-normal">Custom</span>{' '}
                      <strong className="headline-mobile-accent">websites,</strong>
                    </span>
                    <span className="headline-line">
                      <strong className="headline-mobile-accent">tools,</strong>{' '}
                      <strong className="headline-mobile-accent">and</strong>{' '}
                      <strong className="headline-mobile-accent">workflows.</strong>
                    </span>
                    <span className="headline-line">
                      <span className="headline-mobile-serif-normal">Built for one</span>
                    </span>
                    <span className="headline-line">
                      <span className="headline-mobile-serif-normal">business &mdash;</span>{' '}
                      <em className="headline-mobile-serif">yours.</em>
                    </span>
                  </span>
                </h1>
                <p className="hero-frame-paragraph hero-paragraph-anim" style={{ marginTop: '1.7rem', fontSize: '1.395rem', lineHeight: '1.75', color: '#d9d9d9', WebkitTextFillColor: '#d9d9d9', fontWeight: 300, opacity: 1, textWrap: 'pretty' }}>
                  <span className="hero-body-desktop">
                    <span className="hero-body-row hero-body-light" style={{ fontWeight: 300 }}>Got a dated site that undersells you, a task that eats your week, a process held together</span>
                    <span className="hero-body-row hero-body-light" style={{ fontWeight: 300 }}>by spreadsheets? <span className="hero-body-normal" style={{ fontWeight: 500, fontStyle: 'normal' }}>I build what fixes it, so you don&rsquo;t have to.</span></span>
                  </span>
                  <span className="hero-body-mobile">
                    <span className="hero-body-mobile-text hero-body-light">Got a dated site that undersells you, a task that eats your week, a process held together by spreadsheets?</span>{' '}
                    <strong className="hero-body-bold">I build what fixes it, so you don’t have to.</strong>
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
                  maskImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 60%, rgba(0, 0, 0, 0.35) 100%)',
                  WebkitMaskImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 60%, rgba(0, 0, 0, 0.35) 100%)'
                }}
              >
                {/* Outer Rectangle - Dashed lower line under image */}
                <rect x="6" y="6" width="188" height="188" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="1.2" strokeDasharray="4 4" strokeOpacity="0.35" />
                {/* Inner Rectangle - Solid, Pale subtle stroke matching top solid line */}
                <rect x="36" y="36" width="128" height="128" stroke="rgba(247, 214, 208, 0.45)" strokeWidth="1.2" strokeOpacity="0.4" />
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
