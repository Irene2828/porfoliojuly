'use client';

import { useState } from 'react';
import styles from './FooterGarden.module.css';

const descriptions = [
  'A drooping plant sits in dry, cracked soil. Bring in the watering can.',
  'The watering can is ready. Water the plant.',
  'Water reaches the soil, the cracks disappear, and the leaves lift. Grow the plant.',
  'The plant is tall with open leaves and a peach blossom. Growth complete. Use the reset control to start again.',
];

export default function FooterGarden() {
  const [step, setStep] = useState(0);

  return (
    <div className={styles.garden} data-step={step}>
      <button
        type="button"
        className={styles.scene}
        onClick={() => setStep(current => Math.min(current + 1, 3))}
        aria-label={`Plant growth game, step ${step + 1} of 4. ${descriptions[step]}`}
        aria-disabled={step === 3}
      >
        <svg viewBox="0 0 480 280" fill="none" aria-hidden="true">
          <path d="M180 226H300" stroke="#dd7f2d" strokeWidth="1" />
          <g className={styles.plant}>
            <path className={styles.stem} d="M240 196C240 180 237 162 240 143C242 132 250 132 256 143" />
            <path className={styles.tallStem} d="M240 196C240 157 234 117 240 77" />
            <g className={styles.leftLeaf}>
              <path d="M239 163C219 160 209 149 211 139C226 137 239 147 239 163Z" />
            </g>
            <g className={styles.rightLeaf}>
              <path d="M240 150C241 134 252 125 268 127C269 140 257 150 240 150Z" />
            </g>
            <g className={styles.upperLeaves}>
              <path d="M238 119C220 119 208 108 209 96C226 95 238 105 238 119Z" />
              <path d="M239 104C243 87 254 81 267 84C266 98 255 106 239 104Z" />
            </g>
            <g className={styles.blossom}>
              <path d="M240 79C223 78 218 68 224 62C214 49 226 41 235 50C236 33 250 33 251 49C265 40 272 52 261 62C274 72 257 87 240 79Z" />
              <circle cx="243" cy="64" r="5" fill="#dd7f2d" />
            </g>
          </g>
          <path d="M216 198H264L258 224H222Z" fill="#17130f" stroke="#dd7f2d" strokeWidth="2" />
          <ellipse className={styles.soil} cx="240" cy="197" rx="25" ry="6" />
          <path className={styles.cracks} d="M227 194L233 198L229 201M233 198L242 195L248 199L254 196" stroke="#17130f" strokeWidth="1.5" />
          <ellipse cx="240" cy="197" rx="25" ry="6" stroke="#dd7f2d" strokeWidth="2" />
          <g className={styles.canPosition}>
            <g className={styles.can} stroke="#f2a65a" strokeWidth="2" strokeLinejoin="round">
              <path d="M313 115H348L343 145H317Z" fill="#17130f" />
              <path d="M347 119C375 106 372 144 344 137M316 133L291 117L286 121L316 144M323 114V108H338V114" />
              <path d="M282 116L289 110L295 117L288 123Z" fill="#dd7f2d" />
            </g>
          </g>
          <g className={styles.water} stroke="#f2a65a" strokeWidth="2" strokeLinecap="round">
            <path d="M287 147Q258 158 249 191M291 151Q268 168 258 192M283 144Q252 155 240 191" strokeDasharray="4 7" />
          </g>
          <g className={styles.growth} stroke="#f2a65a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M300 199V83M294 90L300 83L306 90" />
          </g>
          <g>
            {[0, 1, 2, 3].map(dot => (
              <circle key={dot} cx={222 + dot * 12} cy="258" r="2.5" fill={dot <= step ? '#f2a65a' : '#17130f'} stroke="#dd7f2d" />
            ))}
          </g>
        </svg>
      </button>
      <button type="button" className={styles.reset} onClick={() => setStep(0)} aria-label="Reset plant growth game">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 9a7 7 0 1 1 0 6M5 4v5h5" />
        </svg>
      </button>
      <span className={styles.srOnly} role="status" aria-live="polite" aria-atomic="true">
        {`Step ${step + 1} of 4. ${descriptions[step]}`}
      </span>
    </div>
  );
}
