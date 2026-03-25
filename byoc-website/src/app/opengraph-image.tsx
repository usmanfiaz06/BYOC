import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'BYOC — The Global Table for Builders';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1A1510',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: '50%',
            border: '1px solid rgba(200,128,42,0.12)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: -60,
            right: -60,
            width: 380,
            height: 380,
            borderRadius: '50%',
            border: '1px solid rgba(200,128,42,0.08)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -180,
            left: -100,
            width: 600,
            height: 600,
            borderRadius: '50%',
            border: '1px solid rgba(200,128,42,0.06)',
            display: 'flex',
          }}
        />

        {/* Accent tag */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#C8802A',
              display: 'flex',
            }}
          />
          <span
            style={{
              fontSize: 16,
              color: '#C8802A',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            Buy Your Own Coffee
          </span>
        </div>

        {/* Main heading */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 400,
            color: '#FAF7F4',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '28px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span>The Global Table</span>
          <span>for Builders</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 22,
            color: 'rgba(250,247,244,0.45)',
            letterSpacing: '0.01em',
            lineHeight: 1.5,
            maxWidth: 700,
            display: 'flex',
          }}
        >
          3,200+ founders, operators & investors across 21 countries. No stages, no sponsors — just real conversations over coffee.
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            gap: '60px',
            marginTop: '48px',
          }}
        >
          {[
            { value: '3,200+', label: 'Members' },
            { value: '140+', label: 'Gatherings' },
            { value: '21', label: 'Countries' },
            { value: '18', label: 'Cities' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}
            >
              <span
                style={{
                  fontSize: 36,
                  color: '#C8802A',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: 12,
                  color: 'rgba(250,247,244,0.3)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom border accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, #C8802A, rgba(200,128,42,0.2))',
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
