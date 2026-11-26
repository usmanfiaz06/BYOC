import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const runtime = 'nodejs';
export const alt = 'BYOC — Buy Your Own Coffee. Founders and executives meeting over coffee in 21 countries.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ background: '#0B0A09', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '64px 72px', color: '#F7F5F0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 22, letterSpacing: 4, textTransform: 'uppercase', color: '#8FA0FF' }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: '#2340FF', display: 'flex' }} />
          BYOC · Since 2020
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 128, fontWeight: 800, lineHeight: 0.9, letterSpacing: -4, textTransform: 'uppercase' }}>Buy your own</div>
          <div style={{ fontSize: 128, fontWeight: 800, lineHeight: 0.9, letterSpacing: -4, textTransform: 'uppercase', color: '#2340FF' }}>coffee.</div>
          <div style={{ marginTop: 28, fontSize: 32, lineHeight: 1.3, color: 'rgba(247,245,240,0.8)', maxWidth: 900 }}>
            Founders, executives and operators meeting over coffee they pay for themselves.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 64, fontSize: 26, color: 'rgba(247,245,240,0.7)' }}>
          <span>212+ gatherings</span>
          <span>3,200+ members</span>
          <span>21 countries</span>
          <span>byoc.global</span>
        </div>
      </div>
    ),
    size,
  );
}
