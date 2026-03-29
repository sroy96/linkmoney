import { useEffect, useState } from 'react';
import FloatingCoins from './FloatingCoins';

export default function LinkmoneyCover() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <div className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden bg-black scanlines">

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

      {/* ── Floating coins ── */}
      <FloatingCoins />

      {/* ── Geometric accent lines ── */}
      {/* Top-left corner bracket */}
      <div className="absolute top-10 left-8 pointer-events-none" style={{ opacity: 0.2 }}>
        <div style={{ width: 40, height: 2, background: '#34D399', marginBottom: 0 }} />
        <div style={{ width: 2, height: 40, background: '#34D399' }} />
      </div>
      {/* Bottom-right corner bracket */}
      <div className="absolute bottom-10 right-8 pointer-events-none flex flex-col items-end" style={{ opacity: 0.2 }}>
        <div style={{ width: 2, height: 40, background: '#34D399', marginLeft: 'auto' }} />
        <div style={{ width: 40, height: 2, background: '#34D399' }} />
      </div>

      {/* ── Thin horizontal rule across full width ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          left: 0,
          right: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent 0%, rgba(52,211,153,0.08) 20%, rgba(52,211,153,0.12) 50%, rgba(52,211,153,0.08) 80%, transparent 100%)',
          transform: 'translateY(-120px)',
        }}
      />

      {/* ── Main content ── */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6"
        style={{
          opacity: mounted ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      >

        {/* Glow halo behind title */}
        <div
          className="absolute pulse-glow pointer-events-none"
          style={{
            width: 'clamp(280px, 60vw, 700px)',
            height: 'clamp(120px, 20vw, 260px)',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(52,211,153,0.13) 0%, rgba(52,211,153,0.05) 50%, transparent 75%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(32px)',
            zIndex: 0,
          }}
        />

        {/* Eyebrow label */}
        <div
          className="font-display animate-fade-in mb-5"
          style={{
            color: '#34D399',
            fontSize: 'clamp(9px, 2vw, 11px)',
            letterSpacing: '0.45em',
            fontWeight: 500,
            textTransform: 'uppercase',
            animationDelay: '100ms',
            opacity: 0.8,
          }}
        >
          Investor Pitch · 2025
        </div>

        {/* ── LINKMONEY wordmark ── */}
        <h1
          className="font-display font-black animate-fade-up relative z-10"
          style={{
            fontSize: 'clamp(42px, 11vw, 132px)',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            color: '#ffffff',
            animationDelay: '0ms',
            textShadow: `
              0 0 60px rgba(52,211,153,0.25),
              0 0 120px rgba(52,211,153,0.12),
              0 2px 40px rgba(0,0,0,0.8)
            `,
          }}
        >
          LINK
          <span
            style={{
              color: '#34D399',
              textShadow: `
                0 0 30px rgba(52,211,153,0.9),
                0 0 70px rgba(52,211,153,0.55),
                0 0 140px rgba(52,211,153,0.3)
              `,
            }}
          >
            MONEY
          </span>
        </h1>

        {/* Thin divider under wordmark */}
        <div
          className="animate-fade-in"
          style={{
            width: 'clamp(60px, 12vw, 120px)',
            height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(52,211,153,0.5), transparent)',
            margin: 'clamp(16px, 3vw, 28px) auto',
            animationDelay: '250ms',
          }}
        />

        {/* Tagline */}
        <p
          className="font-display animate-fade-up"
          style={{
            fontSize: 'clamp(12px, 2.8vw, 18px)',
            color: '#71717a',
            fontWeight: 300,
            letterSpacing: '0.03em',
            maxWidth: 'clamp(260px, 55vw, 580px)',
            lineHeight: 1.65,
            animationDelay: '180ms',
          }}
        >
          Fixing India's credit health at scale through{' '}
          <span style={{ color: '#a1a1aa', fontWeight: 400 }}>10M+ agents</span>
        </p>

        {/* Micro stat pills */}
        <div
          className="animate-fade-in flex flex-wrap justify-center gap-4 mt-8"
          style={{ animationDelay: '350ms' }}
        >
          {[
            { label: 'Credit-Active Users', value: '120M' },
            { label: 'Addressable Market', value: '$72B' },
            { label: 'Rev / User', value: '₹3,400' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                padding: 'clamp(8px,1.5vw,12px) clamp(14px,2.5vw,22px)',
                border: '1px solid rgba(52,211,153,0.12)',
                borderRadius: 4,
                background: 'rgba(52,211,153,0.04)',
                backdropFilter: 'blur(6px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <span
                className="font-display font-bold"
                style={{ color: '#e4e4e7', fontSize: 'clamp(14px,2.5vw,20px)', letterSpacing: '-0.01em' }}
              >
                {stat.value}
              </span>
              <span
                className="font-display uppercase"
                style={{ color: '#3f3f46', fontSize: 'clamp(7px,1.2vw,9px)', letterSpacing: '0.2em' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom contact block ── */}
      <div
        className="absolute bottom-8 left-8 z-20 animate-fade-in font-display"
        style={{ animationDelay: '500ms' }}
      >
        <div style={{ color: '#27272a', fontSize: 'clamp(8px,1.5vw,11px)', letterSpacing: '0.12em', lineHeight: 2 }}>
          <div>saurav.roy@linkmoney.in</div>
          <div>+91-9585386951</div>
        </div>
      </div>

      {/* ── Slide label bottom-right ── */}
      <div
        className="absolute bottom-8 right-8 z-20 font-display"
        style={{ color: '#1f1f23', fontSize: 'clamp(8px,1.2vw,10px)', letterSpacing: '0.2em' }}
      >
        CONFIDENTIAL
      </div>
    </div>
  );
}