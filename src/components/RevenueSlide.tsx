import FloatingCoins from './FloatingCoins';

const BREAKDOWN = [
  { label: 'Subscription',      value: '₹300' },
  { label: 'Improvement',       value: '₹200–₹400' },
  { label: 'Loan',              value: '₹1,400–₹2,000' },
  { label: 'Balance Transfer',  value: '₹1,000+' },
];

export default function RevenueSlide() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-12 py-16 scanlines overflow-hidden">

      {/* ── Left accent bar ──────────────────────── */}
      <div className="accent-bar absolute left-0 top-0 bottom-0 w-[3px] z-20" />

      {/* ── Subtle grid lines ────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(52,211,153,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.025) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* ── Coins ────────────────────────────────── */}
      <FloatingCoins />

      {/* ── Central glow blob behind ₹3,400 ─────── */}
      <div
        className="absolute pulse-glow pointer-events-none"
        style={{
          width: 520,
          height: 320,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(52,211,153,0.18) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -56%)',
          filter: 'blur(40px)',
        }}
      />

      {/* ── Content ──────────────────────────────── */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center gap-16">

        {/* Title */}
        <h2
          className="glow-gold animate-fade-in font-display text-center tracking-widest uppercase"
          style={{
            color: '#D4A843',
           fontSize: 'clamp(9px, 2.2vw, 14px)',
            fontWeight: 400,
            letterSpacing: '0.2em',
            animationDelay: '0ms',
          }}
        >
          ₹3,400 Revenue Per User Across Credit Lifecycle
        </h2>

        {/* Three columns — fixed layout so centre never overflows */}
        <div
          className="w-full"
          style={{
            display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
alignItems: 'center',
gap: '0 16px',
          }}
        >

          {/* Left — Agent */}
          <div
            className="animate-fade-up flex flex-col items-center gap-3"
            style={{ animationDelay: '100ms' }}
          >
            <span
              className="font-display uppercase tracking-widest"
              style={{ color: '#52525b', fontSize: 11, letterSpacing: '0.25em' }}
            >
              Agent User
            </span>
            <span
              className="font-display font-bold"
              style={{
                color: '#a1a1aa',
                fontSize: 'clamp(20px, 5vw, 60px)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                whiteSpace: 'nowrap',
              }}
            >
              ₹3,000
            </span>
          </div>

          {/* Centre — Blended (hero) — fixed width so it never spills */}
          <div
            className="animate-fade-up flex flex-col items-center gap-3 relative"
            style={{ animationDelay: '0ms', flexShrink: 0 }}
          >
            {/* Thin top rule */}
            <div
              style={{
                position: 'absolute',
                top: -24,
                left: '5%',
                right: '5%',
                height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(52,211,153,0.45), transparent)',
              }}
            />
            <span
              className="font-display uppercase tracking-widest glow-neon-md"
              style={{ color: '#34D399', fontSize: 11, letterSpacing: '0.3em' }}
            >
              Blended
            </span>
            <span
              className="font-display font-black glow-neon-xl"
              style={{
                color: '#34D399',
             fontSize: 'clamp(36px, 8vw, 96px)',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                whiteSpace: 'nowrap',
              }}
            >
              ₹3,400
            </span>
            {/* Bottom rule */}
            <div
              style={{
                position: 'absolute',
                bottom: -24,
                left: '5%',
                right: '5%',
                height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(52,211,153,0.45), transparent)',
              }}
            />
          </div>

          {/* Right — Direct */}
          <div
            className="animate-fade-up flex flex-col items-center gap-3"
            style={{ animationDelay: '200ms' }}
          >
            <span
              className="font-display uppercase tracking-widest"
              style={{ color: '#52525b', fontSize: 11, letterSpacing: '0.25em' }}
            >
              Direct User
            </span>
            <span
              className="font-display font-bold"
              style={{
                color: '#a1a1aa',
                fontSize: 'clamp(20px, 5vw, 60px)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                whiteSpace: 'nowrap',
              }}
            >
              ₹4,400
            </span>
          </div>
        </div>

        {/* Breakdown row */}
        <div
          className="animate-fade-up flex items-center justify-center gap-0 w-full"
          style={{ animationDelay: '350ms' }}
        >
          {BREAKDOWN.map((item, i) => (
            <div key={i} className="flex items-center">
              {i > 0 && (
                <div
                  style={{
                    width: 1,
                    height: 24,
                    background: 'rgba(63,63,70,0.6)',
                    margin: '0 28px',
                  }}
                />
              )}
              <div className="flex flex-col items-center gap-1">
                <span
                  className="font-display uppercase tracking-widest"
                  style={{ color: '#3f3f46', fontSize: 9, letterSpacing: '0.2em' }}
                >
                  {item.label}
                </span>
                <span
                  className="font-display"
                  style={{ color: '#71717a', fontSize: 13, fontWeight: 500 }}
                >
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
