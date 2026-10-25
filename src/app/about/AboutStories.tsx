"use client";

import React, { useState, useRef, useEffect } from 'react';

const stories = [
  {
    chipLabel: "The chandelier",
    lead: "At fourteen,",
    text: "my parents bought a chandelier with a thousand parts. The only instructions: a photo on the box. While everyone searched for the lost manual, I sat down and built it from the photo. A couple of hours. Because it was interesting. Because my brain lights up when there's a problem to solve.",
  },
  {
    chipLabel: "NATO competition",
    lead: "At fifteen,",
    text: "my history teacher said: there's an international competition — go, you can do it. I knew zero about NATO. In two weeks I read everything I could find. I got inside it. And I won — the prize was a trip to the headquarters in Brussels. More wins followed over the years, team and solo. Not for the winning, though winning is nice. For the joy of getting inside something new. I'm not afraid of the new, of problems, of responsibility. I'm afraid of running out of time to become what I could.",
  },
  {
    chipLabel: "Clothing brand",
    lead: "At nineteen,",
    text: "I was studying political science at the country's top university — but my head was full of a business plan: clothing made at home, matching my aesthetic, local. Idea, vision, embodiment. I wore every hat, but the real job was creative direction: building everything from nothing to stocked shelves, first clients, first growth.",
  },
  {
    chipLabel: "The wall",
    lead: "In 2016,",
    text: "the project was growing — until it hit a problem only technology could solve. I looked for someone to build it. It didn't turn out the way I'd hoped. But the idea — that technology can make business better — outlived everything that came after: motherhood, a new continent, Covid, a war back home.",
  },
  {
    chipLabel: "The same muscle",
    lead: "Learning tech,",
    text: "I started on my own. Frontend first — but I quickly saw I cared more about logic and design than writing code. UX certification. Freelance. Then deeper into AI, end to end — and it drives me. It's the same muscle as the fashion years: there's a problem, there's a vision, there are tools. You go until it's real. Art direction, strategy, delegation, control. Everything that can be automated pulls me in; everything new that can be created pulls me forward.",
  },
  {
    chipLabel: "The spider web",
    lead: "This Halloween,",
    text: "we pulled last Halloween's spider web out of storage: one giant knot. We were ready to buy a new one. Then my kid said: \"Mom, please fix it.\" Logic. Patience. Knot by knot — done. From \"let's just buy a new one\" to \"what if I try?\" That's the whole story, really.",
  },
  {
    chipLabel: "What's next",
    lead: "Looking ahead,",
    text: "I want to keep creating. Keep solving business problems. Keep growing in AI. There is so much to build. To improve. To fix.",
  },
];

export default function AboutStories() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpenIndex(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="about-hero-interactive" ref={containerRef}>
      <div className="about-hero-intro">
        <h1 className="about-hero-title">My Story</h1>
        <p className="about-hero-desc">
          Everything I've studied (social sciences) or done professionally — fashion design and brand management, web design, building products with AI — reflects how I approach the problems I solve for businesses and professionals: from identifying the problem and shaping the vision for solving it, to choosing the tools and executing it beautifully — until it feels right for the business, and leaves it better.
        </p>
        <p className="about-hero-cta-note">
          <strong>Tap any chip on the page to read a short life story</strong> that made me - <em>me</em>.
        </p>
      </div>

      <div className="scattered-chips-container">
        {stories.map((story, i) => (
          <div
            key={i}
            className={`story-item story-item-${i} ${openIndex === i ? 'is-active' : ''}`}
          >
            <button
              type="button"
              className={`story-chip ${openIndex === i ? 'active' : ''}`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
            >
              {story.chipLabel}
            </button>

            {openIndex === i && (
              <div className="story-popover-card">
                <button
                  type="button"
                  className="story-popover-close"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenIndex(null);
                  }}
                  aria-label="Close story"
                >
                  ✕
                </button>
                <div className="story-popover-body">
                  <p>
                    <strong>{story.lead}</strong> {story.text}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
