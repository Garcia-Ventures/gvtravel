'use client';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="220"
      height="60"
      viewBox="0 0 220 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Star Compass Monogram */}
      <circle cx="30" cy="30" r="25" stroke="currentColor" strokeWidth="2" />
      <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />

      {/* Compass Points - smaller to leave room for GV */}
      <path d="M30 8L32 18H28L30 8Z" fill="currentColor" />
      <path d="M30 52L28 42H32L30 52Z" fill="currentColor" />
      <path d="M52 30L42 28V32L52 30Z" fill="currentColor" />
      <path d="M8 30L18 32V28L8 30Z" fill="currentColor" />

      {/* Center GV Monogram - positioned more clearly */}
      <text
        x="30"
        y="35"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontFamily: 'var(--font-playfair), serif', fontWeight: 'bold', fontSize: '14px' }}
      >
        GV
      </text>

      {/* Brand Text - wider viewBox to fit full text */}
      <text
        x="65"
        y="40"
        fill="currentColor"
        style={{
          fontFamily: 'var(--font-playfair), serif',
          fontWeight: 'bold',
          fontSize: '22px',
          letterSpacing: '2px',
        }}
      >
        GV TRAVEL
      </text>
    </svg>
  );
}
