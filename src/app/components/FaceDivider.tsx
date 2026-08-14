import { useRef } from 'react';
import './FaceDivider.css';

export default function FaceDivider() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section className="face-divider-section" ref={containerRef}>
      <a href="mailto:hello@example.com" className="btn btn-primary">
        Let's Work on your next build
      </a>
    </section>
  );
}
