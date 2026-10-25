import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClientWrapper from '../components/ClientWrapper';
import './page.css';

export const metadata = {
  title: 'About Me — Iryna Sheremeta',
  description: 'The story of how I became a product designer and builder.',
};

const stories = [
  {
    kicker: '01 / Fourteen — the chandelier',
    text: "My parents bought a chandelier with a thousand parts. The only instructions: a photo on the box. While everyone searched for the lost manual, I sat down and built it from the photo. A couple of hours. Because it was interesting. Because my brain lights up when there's a problem to solve.",
    image: '/about/story-01-chandelier.webp',
  },
  {
    kicker: '02 / Fifteen — the NATO competition',
    text: "At fifteen, my history teacher said: there's an international competition — go, you can do it. I knew zero about NATO. In two weeks I read everything I could find. I got inside it. And I won — the prize was a trip to the headquarters in Brussels. More wins followed over the years, team and solo. Not for the winning, though winning is nice. For the joy of getting inside something new. I'm not afraid of the new, of problems, of responsibility. I'm afraid of running out of time to become what I could.",
    image: '/about/story-02-nato.webp',
  },
  {
    kicker: '03 / Nineteen — the clothing brand',
    text: "At nineteen I was studying political science at the country's top university — but my head was full of a business plan: clothing made at home, matching my aesthetic, local. Idea, vision, embodiment. I wore every hat, but the real job was creative direction: building everything from nothing to stocked shelves, first clients, first growth.",
    image: '/about/story-03-atelier.webp',
  },
  {
    kicker: '04 / 2016 — the wall',
    text: "The project was growing — until it hit a problem only technology could solve. It was 2016. I looked for someone to build it. It didn't turn out the way I'd hoped. But the idea — that technology can make business better — outlived everything that came after: motherhood, a new continent, Covid, a war back home.",
    image: '/about/story-04-wall.webp',
  },
  {
    kicker: '05 / The same muscle',
    text: "I started learning tech on my own. Frontend first — but I quickly saw I cared more about logic and design than writing code. UX certification. Freelance. Then deeper into AI, end to end — and it drives me. It's the same muscle as the fashion years: there's a problem, there's a vision, there are tools. You go until it's real. Art direction, strategy, delegation, control. Everything that can be automated pulls me in; everything new that can be created pulls me forward.",
    image: '/about/story-05-muscle.webp',
  },
  {
    kicker: '06 / This Halloween — the spider web',
    text: "We pulled last Halloween's spider web out of storage: one giant knot. We were ready to buy a new one. Then my kid said: \"Mom, please fix it.\" Logic. Patience. Knot by knot — done. From \"let's just buy a new one\" to \"what if I try?\" That's the whole story, really.",
    image: '/about/story-06-spiderweb.webp',
  },
  {
    kicker: '07 / What\'s next',
    text: "I want to keep creating. Keep solving business problems. Keep growing in AI. There is so much to build. To improve. To fix.",
    image: '/about/story-07-horizon.webp',
  },
];

export default function AboutPage() {
  return (
    <ClientWrapper>
      <div className="v2-theme">
        <Header />

        <main className="about-page-wrapper">
          <div className="about-container">
            {stories.map((story, index) => (
              <div key={index} className="about-story-card">
                {/* On mobile, text is bottom (because of column-reverse). On desktop, odd elements text is on left, even on right */}
                <div className="about-text-content">
                  <div className="about-kicker">{story.kicker}</div>
                  <div className="about-story-text">{story.text}</div>
                </div>
                <div className="about-image-content">
                  <div className="about-image-wrapper">
                    <img
                      src={story.image}
                      alt={story.kicker}
                      className="about-image"
                      loading={index > 1 ? "lazy" : "eager"}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="about-cta-section prefooter-section" style={{ backgroundColor: 'transparent', padding: '80px 24px' }}>
            <h2 className="about-cta-text">Need a creative technologist? I'm here. Let's work.</h2>
            <div className="prefooter-cta-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '0rem', marginBottom: '2.5rem', justifyContent: 'center' }}>
              <a
                href="mailto:iryna@irynasheremeta.com"
                className="btn prefooter-btn-primary face-cta"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', transform: 'scale(1.05)' }}
              >
                <span>SEND YOUR PROBLEM MY WAY</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(-0.5px)' }}>
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ClientWrapper>
  );
}
