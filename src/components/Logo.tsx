export const Logo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 500 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill="#F05A42">
      <rect x="10" y="25" width="10" height="10" />
      <rect x="25" y="25" width="10" height="10" />
      <rect x="40" y="25" width="10" height="10" />
      <rect x="55" y="25" width="10" height="10" />
      
      <rect x="10" y="40" width="10" height="10" />
      <rect x="55" y="40" width="10" height="10" />
      
      <rect x="10" y="55" width="10" height="10" />
      <rect x="25" y="55" width="10" height="10" />
      <rect x="40" y="55" width="10" height="10" />
      <rect x="55" y="55" width="10" height="10" />
      
      <rect x="10" y="70" width="10" height="10" />
      <rect x="25" y="70" width="10" height="10" />
      <rect x="40" y="70" width="10" height="10" />
      <rect x="55" y="70" width="10" height="10" />
    </g>
    <text x="75" y="68" fontFamily="system-ui, -apple-system, sans-serif" fontSize="42" fontWeight="bold" letterSpacing="-1">
      <tspan fill="#1E2A4F">LendingClub</tspan>
      <tspan fill="#F05A42">Finance</tspan>
    </text>
  </svg>
);
