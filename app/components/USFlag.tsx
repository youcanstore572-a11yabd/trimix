// app/components/USAFlag.tsx

type USAFlagProps = {
  className?: string;
};

export default function USAFlag({ className = 'w-5 h-5' }: USAFlagProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Circle mask so the flag is cropped into a round badge */}
        <clipPath id="usaFlagCircle">
          <circle cx="10" cy="10" r="9" />
        </clipPath>

        {/* Subtle inner shade for depth */}
        <radialGradient id="usaFlagShade" cx="30%" cy="25%" r="80%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.10" />
          <stop offset="60%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.18" />
        </radialGradient>
      </defs>

      {/* Flag content, cropped into a circle at radius 9 */}
      <g clipPath="url(#usaFlagCircle)">
        {/* Base — 13 stripes (7 red, 6 white) */}
        <rect width="20" height="20" fill="#FFFFFF" />

        {/* Red stripes */}
        <rect y="0"      width="20" height="1.54" fill="#B22234" />
        <rect y="3.08"   width="20" height="1.54" fill="#B22234" />
        <rect y="6.15"   width="20" height="1.54" fill="#B22234" />
        <rect y="9.23"   width="20" height="1.54" fill="#B22234" />
        <rect y="12.31"  width="20" height="1.54" fill="#B22234" />
        <rect y="15.38"  width="20" height="1.54" fill="#B22234" />
        <rect y="18.46"  width="20" height="1.54" fill="#B22234" />

        {/* Canton (blue field in top-left, 40% width × 54% height) */}
        <rect x="0" y="0" width="8" height="10.77" fill="#3C3B6E" />

        {/* Stars — simplified 3 rows of small white dots to represent the 50-star field at this size */}
        <g fill="#FFFFFF">
          {/* Row 1 */}
          <circle cx="1.0" cy="1.4" r="0.28" />
          <circle cx="2.6" cy="1.4" r="0.28" />
          <circle cx="4.2" cy="1.4" r="0.28" />
          <circle cx="5.8" cy="1.4" r="0.28" />
          <circle cx="7.4" cy="1.4" r="0.28" />

          {/* Row 2 (offset) */}
          <circle cx="1.8" cy="3.0" r="0.28" />
          <circle cx="3.4" cy="3.0" r="0.28" />
          <circle cx="5.0" cy="3.0" r="0.28" />
          <circle cx="6.6" cy="3.0" r="0.28" />

          {/* Row 3 */}
          <circle cx="1.0" cy="4.6" r="0.28" />
          <circle cx="2.6" cy="4.6" r="0.28" />
          <circle cx="4.2" cy="4.6" r="0.28" />
          <circle cx="5.8" cy="4.6" r="0.28" />
          <circle cx="7.4" cy="4.6" r="0.28" />

          {/* Row 4 (offset) */}
          <circle cx="1.8" cy="6.2" r="0.28" />
          <circle cx="3.4" cy="6.2" r="0.28" />
          <circle cx="5.0" cy="6.2" r="0.28" />
          <circle cx="6.6" cy="6.2" r="0.28" />

          {/* Row 5 */}
          <circle cx="1.0" cy="7.8" r="0.28" />
          <circle cx="2.6" cy="7.8" r="0.28" />
          <circle cx="4.2" cy="7.8" r="0.28" />
          <circle cx="5.8" cy="7.8" r="0.28" />
          <circle cx="7.4" cy="7.8" r="0.28" />

          {/* Row 6 (offset) */}
          <circle cx="1.8" cy="9.4" r="0.28" />
          <circle cx="3.4" cy="9.4" r="0.28" />
          <circle cx="5.0" cy="9.4" r="0.28" />
          <circle cx="6.6" cy="9.4" r="0.28" />
        </g>

        {/* Soft shading layer */}
        <rect width="20" height="20" fill="url(#usaFlagShade)" />
      </g>

      {/* Solid white circle border on top */}
      <circle
        cx="10"
        cy="10"
        r="9"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.5"
      />
    </svg>
  );
}