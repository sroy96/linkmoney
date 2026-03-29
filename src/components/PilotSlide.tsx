import { ArrowRight } from 'lucide-react';
import FloatingCoins from './FloatingCoins';

const FLOW = [
  { value: '28', unit: 'Leads', sub: 'per week' },
  { value: '2',  unit: 'Loans', sub: 'per week' },
  { value: '₹1L', unit: 'Avg Ticket', sub: 'size' },
  { value: '3%',  unit: 'Commission', sub: 'earned' },
];

const INSIGHTS = [
  { pct: '23%', label: 'High FOIR', sub: 'Over-utilisation' },
  { pct: '31%', label: 'DPD but 650+', sub: 'Recoverable score' },
  { pct: '16%', label: 'MSMEs', sub: 'Thin / no file' },
];

export default function PilotSlide() {
  return (
    <div className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden bg-black scanlines px-6 py-16">

      {/* ── Left accent bar ── */}
      <div className="accent-bar absolute left-0 top-0 bottom-0 w-[3px] z-20" />

      {/* ── Subtle grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(52,211,153,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.018) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* ── Coins ── */}
      <FloatingCoins />

      {/* ── Glow behind hero number ── */}
      <div
        className="absolute pulse-glow pointer-events-none"
        style={{
          width: 'clamp(200px, 40vw, 480px)',
          height: 'clamp(100px, 15vw, 200px)',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(52,211,153,0.14) 0%, transparent 70%)',
          top: '57%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(40px)',
        }}
      />

      {/* ══════════════════════════════════════════ */}
      {/*  CONTENT                                   */}
      {/* ══════════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-10">

        {/* ── Header ── */}
        <div className="flex flex-col items-center gap-3 animate-fade-up" style={{ animationDelay: '0ms' }}>
          {/* Eyebrow */}
          <span
            className="font-display uppercase tracking-widest"
            style={{ color: '#34D399', fontSize: 'clamp(9px,1.8vw,11px)', letterSpacing: '0.4em', opacity: 0.85 }}
          >
            Proof of Concept
          </span>

          {/* Title */}
          <h1
            className="font-display font-black text-white text-center"
            style={{
              fontSize: 'clamp(32px, 7vw, 80px)',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              textShadow: '0 2px 40px rgba(0,0,0,0.8)',
            }}
          >
            INITIAL PILOT
          </h1>

          {/* Subtitle */}
          <p
            className="font-display text-center"
            style={{ color: '#71717a', fontSize: 'clamp(11px,2.2vw,15px)', fontWeight: 300, letterSpacing: '0.04em' }}
          >
            4 Agents &nbsp;·&nbsp; 2 Months &nbsp;·&nbsp; Real Revenue Data
          </p>

          {/* Divider */}
          <div style={{
            width: 'clamp(48px,10vw,80px)', height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(52,211,153,0.45), transparent)',
            marginTop: 4,
          }} />
        </div>

        {/* ── Flow row ── */}
        <div
          className="animate-fade-up w-full"
          style={{ animationDelay: '120ms' }}
        >
          <div className="flex flex-wrap justify-center items-center gap-3">
            {FLOW.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                {/* Card */}
                <div
                  style={{
                    background: '#18181b',
                    border: '1px solid #27272a',
                    borderRadius: 12,
                    padding: 'clamp(12px,2vw,20px) clamp(16px,2.5vw,28px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    minWidth: 'clamp(90px,14vw,140px)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Top micro-glow line */}
                  <div style={{
                    position: 'absolute', top: 0, left: '15%', right: '15%', height: 1,
                    background: 'linear-gradient(90deg, transparent, rgba(52,211,153,0.25), transparent)',
                  }} />
                  <span
                    className="font-display font-black"
                    style={{ color: '#ffffff', fontSize: 'clamp(18px,3vw,28px)', lineHeight: 1, letterSpacing: '-0.01em' }}
                  >
                    {item.value}
                  </span>
                  <span
                    className="font-display font-semibold"
                    style={{ color: '#a1a1aa', fontSize: 'clamp(10px,1.6vw,13px)', letterSpacing: '0.05em' }}
                  >
                    {item.unit}
                  </span>
                  <span
                    className="font-display"
                    style={{ color: '#52525b', fontSize: 'clamp(8px,1.2vw,10px)', letterSpacing: '0.08em' }}
                  >
                    {item.sub}
                  </span>
                </div>

                {/* Arrow — not after last */}
                {i < FLOW.length - 1 && (
                  <ArrowRight
                    style={{ color: '#34D399', opacity: 0.5, flexShrink: 0 }}
                    size={16}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Conversion row ── */}
        <div
          className="animate-fade-up flex flex-wrap justify-center items-center gap-4"
          style={{ animationDelay: '240ms' }}
        >
          {/* Weekly box */}
          <div
            style={{
              background: '#18181b',
              border: '1px solid #27272a',
              borderRadius: 12,
              padding: 'clamp(14px,2vw,22px) clamp(20px,3vw,36px)',
              textAlign: 'center',
            }}
          >
            <div
              className="font-display font-bold"
              style={{ color: '#e4e4e7', fontSize: 'clamp(20px,4vw,36px)', letterSpacing: '-0.01em' }}
            >
              ₹6,000
            </div>
            <div
              className="font-display uppercase"
              style={{ color: '#52525b', fontSize: 'clamp(8px,1.3vw,10px)', letterSpacing: '0.22em', marginTop: 4 }}
            >
              Per Week
            </div>
          </div>

          {/* Arrow */}
          <ArrowRight style={{ color: '#34D399', opacity: 0.6, flexShrink: 0 }} size={20} />

          {/* Hero monthly box */}
          <div
            style={{
              background: 'linear-gradient(135deg, #0d1f18 0%, #0a1a14 100%)',
              border: '1px solid rgba(52,211,153,0.22)',
              borderRadius: 16,
              padding: 'clamp(18px,2.5vw,32px) clamp(28px,4vw,52px)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Glow top line */}
            <div style={{
              position: 'absolute', top: 0, left: '10%', right: '10%', height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(52,211,153,0.6), transparent)',
            }} />
            {/* Corner dots */}
            {['top-2 left-2','top-2 right-2','bottom-2 left-2','bottom-2 right-2'].map((pos) => (
              <div key={pos} className={`absolute ${pos} w-1 h-1 rounded-full`}
                style={{ background: 'rgba(52,211,153,0.3)' }} />
            ))}

            <div
              className="font-display font-black glow-neon-xl"
              style={{
                color: '#34D399',
                fontSize: 'clamp(40px,8vw,88px)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              ₹24,000
            </div>
            <div
              className="font-display uppercase"
              style={{ color: '#34D399', fontSize: 'clamp(8px,1.3vw,10px)', letterSpacing: '0.3em', marginTop: 6, opacity: 0.6 }}
            >
              Per Month / Agent
            </div>
          </div>
        </div>

        {/* ── Insight block ── */}
        <div
          className="animate-fade-up w-full"
          style={{ animationDelay: '360ms' }}
        >
          <div
            style={{
              background: '#0c0c0c',
              border: '1px solid rgba(127,29,29,0.25)',
              borderRadius: 16,
              padding: 'clamp(18px,3vw,32px) clamp(20px,4vw,40px)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Subtle red-tint top glow */}
            <div style={{
              position: 'absolute', top: 0, left: '20%', right: '20%', height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(239,68,68,0.2), transparent)',
            }} />

            {/* Insight title */}
            <div className="flex flex-col items-center gap-1 mb-6">
              <span
                className="font-display font-bold text-center"
                style={{ color: '#f4f4f5', fontSize: 'clamp(14px,2.8vw,22px)', letterSpacing: '-0.01em' }}
              >
                70% of Rejected Leads are{' '}
                <span style={{ color: '#34D399' }}>Fixable</span>
              </span>
              <span
                className="font-display"
                style={{ color: '#52525b', fontSize: 'clamp(9px,1.5vw,11px)', letterSpacing: '0.1em' }}
              >
                Breakdown by rejection reason
              </span>
            </div>

            {/* Three columns */}
            <div className="grid grid-cols-3 gap-4">
              {INSIGHTS.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-1 text-center"
                  style={{
                    padding: 'clamp(10px,1.8vw,18px) 8px',
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: 10,
                    border: '1px solid rgba(255,255,255,0.04)',
                  }}
                >
                  <span
                    className="font-display font-black"
                    style={{
                      color: '#f4f4f5',
                      fontSize: 'clamp(22px,4.5vw,44px)',
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {item.pct}
                  </span>
                  <span
                    className="font-display font-semibold"
                    style={{ color: '#a1a1aa', fontSize: 'clamp(10px,1.6vw,13px)' }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="font-display"
                    style={{ color: '#3f3f46', fontSize: 'clamp(8px,1.2vw,10px)', letterSpacing: '0.06em' }}
                  >
                    {item.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}