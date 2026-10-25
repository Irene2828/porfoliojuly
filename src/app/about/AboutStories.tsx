"use client";

import React, { useState, useRef, useEffect } from 'react';

const stories = [
  {
    chipLabel: "The chandelier",
    kicker: '01 / Fourteen — the chandelier',
    text: "My parents bought a chandelier with a thousand parts. The only instructions: a photo on the box. While everyone searched for the lost manual, I sat down and built it from the photo. A couple of hours. Because it was interesting. Because my brain lights up when there's a problem to solve.",
  },
  {
    chipLabel: "NATO competition",
    kicker: '02 / Fifteen — the NATO competition',
    text: "At fifteen, my history teacher said: there's an international competition — go, you can do it. I knew zero about NATO. In two weeks I read everything I could find. I got inside it. And I won — the prize was a trip to the headquarters in Brussels. More wins followed over the years, team and solo. Not for the winning, though winning is nice. For the joy of getting inside something new. I'm not afraid of the new, of problems, of responsibility. I'm afraid of running out of time to become what I could.",
  },
  {
    chipLabel: "Clothing brand",
    kicker: '03 / Nineteen — the clothing brand',
    text: "At nineteen I was studying political science at the country's top university — but my head was full of a business plan: clothing made at home, matching my aesthetic, local. Idea, vision, embodiment. I wore every hat, but the real job was creative direction: building everything from nothing to stocked shelves, first clients, first growth.",
  },
  {
    chipLabel: "The wall",
    kicker: '04 / 2016 — the wall',
    text: "The project was growing — until it hit a problem only technology could solve. It was 2016. I looked for someone to build it. It didn't turn out the way I'd hoped. But the idea — that technology can make business better — outlived everything that came after: motherhood, a new continent, Covid, a war back home.",
  },
  {
    chipLabel: "The same muscle",
    kicker: '05 / The same muscle',
    text: "I started learning tech on my own. Frontend first — but I quickly saw I cared more about logic and design than writing code. UX certification. Freelance. Then deeper into AI, end to end — and it drives me. It's the same muscle as the fashion years: there's a problem, there's a vision, there are tools. You go until it's real. Art direction, strategy, delegation, control. Everything that can be automated pulls me in; everything new that can be created pulls me forward.",
  },
  {
    chipLabel: "The spider web",
    kicker: '06 / This Halloween — the spider web',
    text: "We pulled last Halloween's spider web out of storage: one giant knot. We were ready to buy a new one. Then my kid said: \"Mom, please fix it.\" Logic. Patience. Knot by knot — done. From \"let's just buy a new one\" to \"what if I try?\" That's the whole story, really.",
  },
  {
    chipLabel: "What's next",
    kicker: '07 / What\'s next',
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
      <div className="scattered-chips-container">
        {stories.map((story, i) => (
          <button
            key={i}
            className={`story-chip story-chip-${i} ${openIndex === i ? 'active' : ''}`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            {story.chipLabel}
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div className="expanded-story-card">
          <div className="expanded-story-content">
            <h3>{stories[openIndex].kicker}</h3>
            <p>{stories[openIndex].text}</p>
          </div>
        </div>
      )}
    </div>
  );
}
