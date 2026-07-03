import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'TCK — Cross-Border Business Support Between Korea and Europe'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background:
            'radial-gradient(circle at 80% 0%, #1e3f6e 0%, #0a1e3a 55%, #061429 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: 8,
            }}
          >
            TCK
          </div>
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              background: '#B08D57',
            }}
          />
          <div
            style={{
              fontSize: 14,
              letterSpacing: 4,
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            Korea ↔ Europe Consulting
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              fontWeight: 600,
              maxWidth: 1000,
            }}
          >
            Cross-Border Business Support Between Korea and Europe
          </div>
          <div
            style={{
              fontSize: 22,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: 900,
            }}
          >
            Sourcing · Market Entry · OEM Coordination · Inspection
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 16,
            color: 'rgba(255,255,255,0.55)',
            letterSpacing: 4,
            textTransform: 'uppercase',
          }}
        >
          <span>Seoul · Frankfurt · Hamburg</span>
          <span>tck</span>
        </div>
      </div>
    ),
    size,
  )
}
