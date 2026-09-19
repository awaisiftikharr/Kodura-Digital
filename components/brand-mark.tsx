type BrandMarkProps = {
  className?: string;
  compact?: boolean;
};

export function BrandMark({ className = "", compact = false }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 220 220"
      className={className}
      role="img"
      aria-label="Kodura Digital logo"
    >
      <defs>
        <linearGradient id="koduraBlue" x1="17" y1="18" x2="176" y2="190" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8BD0FF" />
          <stop offset="0.35" stopColor="#3B8CFF" />
          <stop offset="1" stopColor="#0B5BFF" />
        </linearGradient>
        <linearGradient id="koduraGlow" x1="36" y1="26" x2="162" y2="162" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F5F8FF" stopOpacity="0.98" />
          <stop offset="1" stopColor="#BAD9FF" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      <rect x="16" y="16" width="188" height="188" rx="42" fill="#050914" stroke="rgba(255,255,255,0.08)" />
      <rect x="35" y="35" width="150" height="150" rx="34" fill="url(#koduraBlue)" opacity="0.15" />

      <path
        d="M62 54V166H83V122.5L119.5 166H144L102 119.5L146 54H123L83 103.5V54H62Z"
        fill="url(#koduraGlow)"
      />
      <path
        d="M111 54H122L92.5 95.5L122 140H111L84 98.5L111 54Z"
        fill="url(#koduraBlue)"
        opacity="0.95"
      />
      <path d="M81 54H96V166H81V54Z" fill="url(#koduraGlow)" opacity="0.88" />
      <path d="M128 62L147 62C167 62 180 75 180 93C180 108 170 118 155 121L128 126V62ZM147 100C156 100 162 96 162 89C162 82 156 78 147 78H141V100H147Z" fill="url(#koduraBlue)" opacity="0.98" />

      {!compact && (
        <g transform="translate(0 185)">
          <text x="110" y="12" textAnchor="middle" fill="#F5F8FF" fontFamily="Arial, Helvetica, sans-serif" fontSize="21" letterSpacing="6.2" fontWeight="700">
            KODURA
          </text>
          <text x="110" y="33" textAnchor="middle" fill="#9CB4D3" fontFamily="Arial, Helvetica, sans-serif" fontSize="9" letterSpacing="6.5" fontWeight="600">
            DIGITAL
          </text>
        </g>
      )}
    </svg>
  );
}
