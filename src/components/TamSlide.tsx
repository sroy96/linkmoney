import FloatingCoins from './FloatingCoins';

interface TierProps {
  value: string;
  usd: string;
  sub: string;
  hero?: boolean;
  delay: number;
}

function Tier({ value, usd, sub, hero = false, delay }: TierProps) {
  return (
    <div
      className="animate-fade-up flex flex-col items-center relative"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow blob (hero only) */}
      {hero && (
        <div
          className="pulse-glow absolute pointer-events-none"
          style={{
            width: 480,
            height: 220,
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(52,211,153,0.2) 0%, transparent 65%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(30px)',
          }}
        />
      )}

      {/* Main value */}
      <span
        className={`font-display font-black relative z-10 ${hero ? 'glow-neon-xl' : ''}`}
        style={{
          color: hero ? '#34D399' : '#e4e4e7',
fontSize: hero
  ? 'clamp(38px, 9vw, 112px)'
  : 'clamp(24px, 5.5vw, 68px)',
          lineHeight: 1,
          letterSpacing: '-0.025em',
          opacity: hero ? 1 : 0.75,
        }}
      >
        {value}
      </span>

      {/* USD */}
      <span
        className="font-display relative z-10"
        style={{
          color: hero ? '#6EE7B7' : '#52525b',
          fontSize: hero ? 22 : 15,
          fontWeight: 400,
          marginTop: 8,
          letterSpacing: '0.02em',
        }}
      >
        {usd}
      </span>

      {/* Subtext */}
      <span
        className="font-display uppercase tracking-widest relative z-10"
        style={{
          color: hero ? '#3d7a60' : '#3f3f46',
          fontSize: hero ? 11 : 10,
          marginTop: 12,
          letterSpacing: '0.22em',
        }}
      >
        {sub}
      </span>

      {/* Connecting line (non-hero) */}
      {!hero && (
        <div
          style={{
            position: 'absolute',
            top: -32,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 1,
            height: 28,
            background: 'linear-gradient(to bottom, rgba(52,211,153,0.15), rgba(52,211,153,0.05))',
          }}
        />
      )}
    </div>
  );
}

export default function TamSlide() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-12 py-16 scanlines overflow-hidden">

      {/* Left accent bar */}
      <div className="accent-bar absolute left-0 top-0 bottom-0 w-[3px] z-20" />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(52,211,153,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.025) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Coins */}
      <FloatingCoins />

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full flex flex-col items-center gap-0">

        {/* Title */}
        <h2
          className="glow-gold animate-fade-in font-display text-center tracking-widest uppercase mb-16"
          style={{
            color: '#D4A843',
            fontSize: 'clamp(9px, 2vw, 13px)',
            fontWeight: 400,
            letterSpacing: '0.2em',
            animationDelay: '0ms',
          }}
        >
          Massive Opportunity in Credit Improvement & Loan Optimisation
        </h2>

        {/* TAM — hero */}
        <Tier
          value="₹6L Cr"
          usd="($65B)"
          sub="120M credit-active users"
          hero
          delay={80}
        />

        {/* Funnel arrow */}
        <div className="flex flex-col items-center my-8 gap-1" style={{ opacity: 0.18 }}>
          {[0, 1, 2].map(i => (
            <div
              key={i}
              style={{
                width: 0,
                height: 0,
                borderLeft: `${8 - i * 2}px solid transparent`,
                borderRight: `${8 - i * 2}px solid transparent`,
                borderTop: `${6 - i}px solid #34D399`,
              }}
            />
          ))}
        </div>

        {/* SAM */}
        <Tier
          value="₹1.2L Cr"
          usd="($14.5B)"
          sub="24M digitally reachable users"
          delay={200}
        />

        {/* Funnel arrow */}
        <div className="flex flex-col items-center my-8 gap-1" style={{ opacity: 0.12 }}>
          {[0, 1, 2].map(i => (
            <div
              key={i}
              style={{
                width: 0,
                height: 0,
                borderLeft: `${8 - i * 2}px solid transparent`,
                borderRight: `${8 - i * 2}px solid transparent`,
                borderTop: `${6 - i}px solid #34D399`,
              }}
            />
          ))}
        </div>

        {/* SOM */}
        <Tier
          value="₹1,200 Cr"
          usd="($145M)"
          sub="1% market capture"
          delay={320}
        />

      </div>
    </div>
  );
}
