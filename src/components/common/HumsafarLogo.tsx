

const HumsafarLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`humsafar-logo-svg ${className}`} style={{ display: 'flex', alignItems: 'center' }}>
      <svg 
        width="180" 
        height="60" 
        viewBox="0 0 240 80" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: '100%', height: 'auto' }}
      >
        <defs>
          <linearGradient id="modernBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="accentGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        
        <g transform="translate(10, 10)">
          <path d="M 0 50 L 15 25 L 25 35 L 40 10 L 60 50 Z" fill="url(#modernBlue)" opacity="0.9"/>
          
          <g transform="translate(30, 20) rotate(-15)">
            <path d="M -12 0 L -7 -1.5 L 0 -4 L 7 -1.5 L 12 0 L 7 1 L 0 4 L -7 1 Z" fill="url(#accentGold)"/>
            <path d="M 0 -4 L 0 -7 L 1.5 -8.5 L 1.5 -4 Z" fill="url(#accentGold)"/>
            <path d="M 0 4 L 0 7 L -1.5 8.5 L -1.5 4 Z" fill="url(#accentGold)"/>
          </g>
          
          <circle cx="30" cy="30" r="28" fill="none" stroke="url(#modernBlue)" strokeWidth="1" opacity="0.3"/>
        </g>
        
        <text x="75" y="35" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="#1E40AF">HUM</text>
        <text x="115" y="35" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="300" fill="#3B82F6">SAFAR</text>
        
        <text x="75" y="52" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="400" fill="#64748B" letterSpacing="1">DISCOVER AFGHANISTAN</text>
      </svg>
    </div>
  );
};

export default HumsafarLogo;
