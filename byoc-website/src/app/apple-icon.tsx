import { ImageResponse } from 'next/og';

// Apple touch icon — Apple ignores SVGs, so render a 180×180 PNG of the BYOC
// coffee-cup mark to match the favicon (app/icon.svg).
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1A1510',
        }}
      >
        <svg width="120" height="120" viewBox="0 0 512 512" fill="none">
          <path
            d="M128 180h200v180c0 44-40 80-100 80s-100-36-100-80z"
            stroke="#C8802A"
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M328 220h28c28 0 50 22 50 50s-22 50-50 50h-28"
            stroke="#C8802A"
            strokeWidth="24"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M188 140c0-20 16-24 16-44" stroke="#C8802A" strokeWidth="16" strokeLinecap="round" opacity="0.6" />
          <path d="M228 130c0-20 16-24 16-44" stroke="#C8802A" strokeWidth="16" strokeLinecap="round" opacity="0.45" />
          <path d="M268 140c0-20 16-24 16-44" stroke="#C8802A" strokeWidth="16" strokeLinecap="round" opacity="0.3" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
