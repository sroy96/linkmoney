const COINS = [
  { top: '8%',  left: '12%', size: 34, delay: 0,   duration: 9  },
  { top: '18%', left: '82%', size: 26, delay: 2.5, duration: 11 },
  { top: '38%', left: '7%',  size: 30, delay: 4,   duration: 10 },
  { top: '55%', left: '88%', size: 22, delay: 1.2, duration: 12 },
  { top: '72%', left: '18%', size: 28, delay: 3,   duration: 10 },
  { top: '12%', left: '65%', size: 20, delay: 5.5, duration: 9  },
  { top: '65%', left: '72%', size: 32, delay: 1.8, duration: 8  },
  { top: '85%', left: '55%', size: 18, delay: 3.5, duration: 11 },
  { top: '48%', left: '93%', size: 24, delay: 0.8, duration: 13 },
  { top: '30%', left: '3%',  size: 16, delay: 6,   duration: 10 },
];

export default function FloatingCoins() {
  return (
    <>
      {COINS.map((coin, i) => (
        <div
          key={i}
          className="absolute coin-float pointer-events-none"
          style={{
            top: coin.top,
            left: coin.left,
            width: coin.size,
            height: coin.size,
            animationDelay: `${coin.delay}s`,
            animationDuration: `${coin.duration}s`,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <radialGradient id={`cg-${i}`} cx="38%" cy="35%" r="60%">
                <stop offset="0%"   stopColor="#F5C842" stopOpacity="0.55" />
                <stop offset="55%"  stopColor="#D4A843" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#92600A" stopOpacity="0.20" />
              </radialGradient>
              <filter id={`gf-${i}`}>
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <circle
              cx="50" cy="50" r="46"
              fill={`url(#cg-${i})`}
              stroke="rgba(245, 200, 66, 0.25)"
              strokeWidth="1.5"
              filter={`url(#gf-${i})`}
            />
            {/* Inner ring */}
            <circle
              cx="50" cy="50" r="38"
              fill="none"
              stroke="rgba(245, 200, 66, 0.12)"
              strokeWidth="1"
            />
            <text
              x="50" y="55"
              textAnchor="middle"
              fontSize="42"
              fontWeight="700"
              fill="rgba(92, 46, 4, 0.55)"
              style={{ fontFamily: 'system-ui' }}
            >
              ₹
            </text>
          </svg>
        </div>
      ))}
    </>
  );
}
