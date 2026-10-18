'use client';

export default function Footer() {
  return (
    <footer 
      className="site-footer-minimal"
      style={{
        backgroundColor: '#ffffff',
        width: '100%',
        padding: '1.5rem 0 1.8rem 0',
        borderTop: '1px solid rgba(59, 163, 184, 0.15)',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div 
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          boxSizing: 'border-box'
        }}
      >
        <p 
          style={{
            fontFamily: "var(--font-label), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.04em',
            color: '#3ba3b8',
            margin: 0,
            textAlign: 'right',
            opacity: 0.9
          }}
        >
          &copy; {new Date().getFullYear()} Custom Websites &amp; Digital Products
        </p>
      </div>
    </footer>
  );
}
