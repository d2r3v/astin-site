// Reusable SVG background patterns for sections

// Clean mesh grid pattern - perfect for structured sections
export const MeshPattern = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="100%" 
    height="100%"
    className="absolute inset-0"
  >
    <defs>
      <pattern id="mesh" width="80" height="80" patternUnits="userSpaceOnUse">
        <path 
          d="M0 40 H80 M40 0 V80" 
          stroke="#1e40af" 
          strokeOpacity="0.02" 
          strokeWidth="1"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#mesh)" />
  </svg>
);

// Node-link triangle pattern - adds subtle geometric interest
export const NodeLinkPattern = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="100%" 
    height="100%"
    className="absolute inset-0"
  >
    <defs>
      <pattern id="node-link" width="100" height="100" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="2" fill="#1e40af" fillOpacity="0.08" />
        <circle cx="70" cy="40" r="2" fill="#1e40af" fillOpacity="0.08" />
        <circle cx="40" cy="70" r="2" fill="#1e40af" fillOpacity="0.08" />
        <path 
          d="M10 10 L70 40 L40 70 Z" 
          stroke="#1e40af" 
          strokeOpacity="0.05" 
          strokeWidth="1" 
          fill="none"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#node-link)" />
  </svg>
);

// Wave pattern for hero section bottom
export const WaveBottom = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 1440 320"
    className="absolute bottom-0 left-0 w-full"
    preserveAspectRatio="none"
  >
    <path 
      fill="#1e40af" 
      fillOpacity="0.03"
      d="M0,160L80,165.3C160,171,320,181,480,165.3C640,149,800,107,960,106.7C1120,107,1280,149,1360,170.7L1440,192V0H0Z"
    />
  </svg>
);

// Alternative wave for top sections
export const WaveTop = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 1440 320"
    className="absolute top-0 left-0 w-full rotate-180"
    preserveAspectRatio="none"
  >
    <path 
      fill="#dc2626" 
      fillOpacity="0.02"
      d="M0,160L80,165.3C160,171,320,181,480,165.3C640,149,800,107,960,106.7C1120,107,1280,149,1360,170.7L1440,192V0H0Z"
    />
  </svg>
);

// Subtle dots grid - lighter alternative
export const DotsPattern = () => (
  <svg
    className="absolute inset-0 h-full w-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="dots-pattern"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="2" cy="2" r="1" fill="#1e40af" opacity="0.15" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dots-pattern)" />
  </svg>
);
