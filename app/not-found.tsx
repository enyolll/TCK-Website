import Link from 'next/link'

export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          background: '#ffffff',
          color: '#0b1b2b',
          display: 'grid',
          placeItems: 'center',
          minHeight: '100vh',
          margin: 0,
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <div>
          <p style={{ color: '#4f5b6b', letterSpacing: '0.1em', fontSize: 12 }}>
            404
          </p>
          <h1 style={{ fontSize: 32, margin: '0.5rem 0 1rem' }}>
            Page not found
          </h1>
          <p style={{ color: '#4f5b6b', marginBottom: '2rem' }}>
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            style={{
              display: 'inline-block',
              background: '#143055',
              color: '#fff',
              padding: '0.75rem 1.25rem',
              borderRadius: 10,
              textDecoration: 'none',
            }}
          >
            Return home
          </Link>
        </div>
      </body>
    </html>
  )
}
