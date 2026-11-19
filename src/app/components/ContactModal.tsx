'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export function openContact(subject?: string) {
  window.dispatchEvent(new CustomEvent('open-contact', { detail: { subject } }));
}

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState<string | undefined>(undefined);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [company, setCompany] = useState('');
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const firstFieldRef = useRef<HTMLInputElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ subject?: string }>).detail;
      setSubject(detail?.subject);
      setStatus('idle');
      setError('');
      setOpen(true);
    };
    window.addEventListener('open-contact', handler);
    return () => window.removeEventListener('open-contact', handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const t = setTimeout(() => firstFieldRef.current?.focus(), 60);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      clearTimeout(t);
    };
  }, [open, close]);

  if (!open) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, subject, company }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus('error');
        setError(data.error || 'Could not send. Please try again or email me directly.');
        return;
      }
      setStatus('sent');
    } catch {
      setStatus('error');
      setError('Could not send. Please try again or email me directly.');
    }
  };

  return (
    <div
      className="contact-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Send me a message"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <style>{`
        .contact-modal-overlay {
          position: fixed; inset: 0; z-index: 2000;
          background: rgba(8, 8, 10, 0.72);
          display: flex; align-items: center; justify-content: center;
          padding: 1.25rem;
        }
        .contact-modal-panel {
          background: #121316; color: #ffffff;
          border: 1px solid #2a2c31; border-radius: 20px;
          width: 100%; max-width: 520px; max-height: calc(100vh - 2.5rem);
          overflow-y: auto; padding: 2.25rem 2rem 2rem;
          position: relative;
          font-family: 'Montserrat', system-ui, sans-serif;
        }
        .contact-modal-close {
          position: absolute; top: 0.9rem; right: 0.9rem;
          width: 36px; height: 36px; border-radius: 50%;
          background: transparent; border: 1px solid #2a2c31; color: rgba(255,255,255,0.75);
          font-size: 17px; line-height: 1; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
        }
        .contact-modal-close:hover { border-color: #f2908f; color: #f2908f; }
        .contact-modal-title {
          font-family: 'Newsreader', 'Source Serif 4', Georgia, serif;
          font-weight: 400; font-size: 34px; line-height: 1.05; letter-spacing: -0.018em;
          margin: 0 0 0.5rem;
        }
        .contact-modal-title em { color: #f2908f; }
        .contact-modal-sub {
          margin: 0 0 1.6rem; font-size: 14px; line-height: 1.55; color: rgba(255,255,255,0.62);
        }
        .contact-modal-subject {
          display: inline-block; margin: 0 0 1.2rem; padding: 0.3rem 0.7rem;
          border: 1px solid #2a2c31; border-radius: 999px;
          font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.7);
        }
        .contact-modal-field { margin-bottom: 1.05rem; }
        .contact-modal-label {
          display: block; margin-bottom: 0.45rem;
          font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(255,255,255,0.55);
        }
        .contact-modal-input {
          width: 100%; box-sizing: border-box;
          background: #181a1f; border: 1px solid #2a2c31; border-radius: 12px;
          padding: 0.8rem 1rem; color: #ffffff; font-size: 15px; font-family: inherit;
          outline: none;
        }
        .contact-modal-input:focus { border-color: #f2908f; }
        textarea.contact-modal-input { min-height: 120px; resize: vertical; }
        .contact-modal-hp { position: absolute; left: -9999px; width: 1px; height: 1px; opacity: 0; }
        .contact-modal-error { margin: 0.9rem 0 0; font-size: 13.5px; line-height: 1.5; color: #f2908f; }
        .contact-modal-submit {
          width: 100%; margin-top: 1.35rem;
          background: #f2908f; color: #121316; border: none; border-radius: 999px;
          padding: 0.95rem 1.5rem; cursor: pointer;
          font-family: inherit; font-size: 14px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
        }
        .contact-modal-submit:disabled { opacity: 0.6; cursor: default; }
        .contact-modal-alt { margin: 1.1rem 0 0; text-align: center; font-size: 13px; color: rgba(255,255,255,0.5); }
        .contact-modal-alt a { color: rgba(255,255,255,0.8); }
        .contact-modal-copy {
          display: inline-flex; align-items: center; gap: 0.4rem;
          margin-left: 0.6rem; padding: 0.3rem 0.75rem;
          background: transparent; border: 1px solid #2a2c31; border-radius: 999px;
          color: rgba(255,255,255,0.8); font-family: inherit; font-size: 12px; font-weight: 600;
          letter-spacing: 0.04em; cursor: pointer; vertical-align: middle;
        }
        .contact-modal-copy:hover { border-color: #f2908f; color: #f2908f; }
        .contact-modal-sent { text-align: center; padding: 1.5rem 0 0.5rem; }
        .contact-modal-sent-title {
          font-family: 'Newsreader', 'Source Serif 4', Georgia, serif;
          font-size: 30px; font-weight: 400; margin: 0 0 0.6rem;
        }
        .contact-modal-sent-title em { color: #f2908f; }
        .contact-modal-sent p { margin: 0 0 1.6rem; font-size: 14.5px; line-height: 1.6; color: rgba(255,255,255,0.65); }
      `}</style>

      <div className="contact-modal-panel">
        <button type="button" className="contact-modal-close" aria-label="Close" onClick={close}>
          ✕
        </button>

        {status === 'sent' ? (
          <div className="contact-modal-sent">
            <h3 className="contact-modal-sent-title">
              Message <em>sent.</em>
            </h3>
            <p>Thank you — I read every message myself and will get back to you soon.</p>
            <button type="button" className="contact-modal-submit" onClick={close}>
              Done
            </button>
          </div>
        ) : (
          <>
            <h3 className="contact-modal-title">
              Send me a <em>message.</em>
            </h3>
            <p className="contact-modal-sub">Tell me what you need built or fixed. I read and reply to every message myself.</p>
            {subject ? <span className="contact-modal-subject">About: {subject}</span> : null}
            <form onSubmit={submit}>
              <div className="contact-modal-field">
                <label className="contact-modal-label" htmlFor="cm-name">Your name</label>
                <input
                  id="cm-name"
                  ref={firstFieldRef}
                  className="contact-modal-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  required
                />
              </div>
              <div className="contact-modal-field">
                <label className="contact-modal-label" htmlFor="cm-email">Your email</label>
                <input
                  id="cm-email"
                  className="contact-modal-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>
              <div className="contact-modal-field">
                <label className="contact-modal-label" htmlFor="cm-message">Message</label>
                <textarea
                  id="cm-message"
                  className="contact-modal-input"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <input
                className="contact-modal-hp"
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              {status === 'error' ? <p className="contact-modal-error">{error}</p> : null}
              <button type="submit" className="contact-modal-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
              <p className="contact-modal-alt">
                Prefer email? <a href="mailto:iryna@irynasheremeta.com">iryna@irynasheremeta.com</a>
                <button
                  type="button"
                  className="contact-modal-copy"
                  onClick={() => {
                    navigator.clipboard.writeText('iryna@irynasheremeta.com').then(() => {
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }).catch(() => {});
                  }}
                >
                  {copied ? 'Copied' : 'Copy email'}
                </button>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
