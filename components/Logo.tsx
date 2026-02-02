'use client';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="200"
      height="60"
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Star Compass Monogram */}
      <circle cx="30" cy="30" r="25" stroke="currentColor" strokeWidth="2" />
      <circle cx="30" cy="30" r="22" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />

      {/* Compass Points */}
      <path d="M30 10L33 22H27L30 10Z" fill="currentColor" />
      <path d="M30 50L27 38H33L30 50Z" fill="currentColor" />
      <path d="M50 30L38 27V33L50 30Z" fill="currentColor" />
      <path d="M10 30L22 33V27L10 30Z" fill="currentColor" />

      {/* Center GV Monogram */}
      <text
        x="30"
        y="38"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontFamily: 'var(--font-playfair), serif', fontWeight: 'bold', fontSize: '18px' }}
      >
        GV
      </text>

      {/* Brand Text */}
      <text
        x="70"
        y="40"
        fill="currentColor"
        style={{
          fontFamily: 'var(--font-playfair), serif',
          fontWeight: 'bold',
          fontSize: '24px',
          letterSpacing: '1px',
        }}
      >
        GV TRAVEL
      </text>
    </svg>
  );
}
