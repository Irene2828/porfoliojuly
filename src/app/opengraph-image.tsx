import { ImageResponse } from 'next/og';

export const alt = 'Iryna Sheremeta — Product Designer & AI Builder';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          padding: 80,
          background: '#141413',
          color: '#ffffff',
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 700 }}>Iryna Sheremeta</div>
        <div style={{ fontSize: 44, color: '#efb4a4', marginTop: 24 }}>
          Product Designer & AI Builder
        </div>
        <div style={{ fontSize: 32, color: '#d1d1d1', marginTop: 40, lineHeight: 1.4 }}>
          Custom websites, apps, and workflows — from problem to solution.
        </div>
      </div>
    ),
    { ...size },
  );
}
