import { ArrowDown, ArrowRight } from 'lucide-react';

/* ─── Reusable primitives ─────────────────────── */

function Step({
  label,
  highlight = false,
  small = false,
}: {
  label: string;
  highlight?: boolean;
  small?: boolean;
}) {
  return (
    <div
      style={{
        background: highlight ? 'rgba(52,211,153,0.08)' : '#18181b',
        border: `1px solid ${highlight ? 'rgba(52,211,153,0.35)' : '#27272a'}`,
        borderRadius: 10,
        padding: small
          ? 'clamp(8px,1vh,10px) clamp(12px,2vw,16px)'
          : 'clamp(10px,1.3vh,14px) clamp(14px,2.2vw,22px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {highlight && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '15%',
            right: '15%',
            height: 1,
            background:
              'linear-gradient(90deg, transparent, rgba(52,211,153,0.6), transparent)',
          }}
        />
      )}
      <span
        style={{
          color: highlight ? '#34D399' : '#e4e4e7',
          fontSize: small ? 'clamp(10px,1.6vw,13px)' : 'clamp(11px,1.8vw,14px)',
          fontWeight: highlight ? 700 : 500,
          letterSpacing: highlight ? '0.02em' : '0.01em',
          textShadow: highlight
            ? '0 0 20px rgba(52,211,153,0.5), 0 0 40px rgba(52,211,153,0.25)'
            : 'none',
          whiteSpace: 'normal',
          lineHeight: 1.25,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function DownArrow({ dim = false }: { dim?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '3px 0' }}>
      <ArrowDown
        size={14}
        style={{ color: dim ? '#3f3f46' : 'rgba(52,211,153,0.45)', flexShrink: 0 }}
      />
    </div>
  );
}

function SideArrow() {
  return (
    <ArrowRight
      size={14}
      style={{ color: 'rgba(52,211,153,0.4)', flexShrink: 0 }}
    />
  );
}

function FlowCol({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: 4,
        width: '100%',
        maxWidth: 260,
      }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        color: 'rgba(52,211,153,0.55)',
        fontSize: 'clamp(9px,1vw,10px)',
        letterSpacing: '0.32em',
        fontWeight: 600,
        textTransform: 'uppercase',
        marginBottom: 8,
        textAlign: 'center',
      }}
    >
      {children}
    </span>
  );
}

/* ─── Main component ──────────────────────────── */

export default function GTMIntroSlide() {
  return (
    <div
      className="relative min-h-screen overflow-hidden bg-black"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Left emerald accent bar */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0"
        style={{
          width: 'clamp(3px,0.35vw,5px)',
          background:
            'linear-gradient(to bottom, transparent, #0F9F73 15%, #34D399 50%, #0F9F73 85%, transparent)',
          boxShadow:
            '0 0 18px rgba(52,211,153,0.45), 0 0 40px rgba(52,211,153,0.2)',
        }}
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(52,211,153,0.016) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.016) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* 3×3 dot grid */}
      <div
        className="pointer-events-none absolute"
        style={{ top: 'clamp(20px,4vh,44px)', left: 'clamp(20px,3.5vw,48px)' }}
      >
        {[0, 1, 2].map((row) => (
          <div key={row} className="flex gap-3" style={{ marginBottom: 10 }}>
            {[0, 1, 2].map((col) => (
              <div
                key={col}
                style={{
                  width: 'clamp(4px,0.5vw,6px)',
                  height: 'clamp(4px,0.5vw,6px)',
                  borderRadius: '50%',
                  background: '#34D399',
                  opacity: 0.2,
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Diagonal stripes */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 overflow-hidden"
        style={{
          width: 'clamp(80px,12vw,140px)',
          height: 'clamp(80px,12vw,140px)',
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: '220%',
              height: 1.5,
              background: '#34D399',
              opacity: 0.06,
              bottom: `${i * 13}px`,
              right: '-50%',
              transform: 'rotate(-45deg)',
              transformOrigin: 'right center',
            }}
          />
        ))}
      </div>

      {/* Slide meta */}
      <div
        className="absolute left-6 top-6 z-10 sm:left-8 sm:top-7"
        style={{
          fontSize: 'clamp(8px,1vw,10px)',
          letterSpacing: '0.38em',
          color: 'rgba(52,211,153,0.4)',
          fontWeight: 500,
          textTransform: 'uppercase',
        }}
      >
        Go-To-Market
      </div>

      <div
        className="absolute bottom-6 left-6 z-10 sm:bottom-7 sm:left-8"
        style={{
          fontSize: 'clamp(8px,1vw,10px)',
          letterSpacing: '0.25em',
          color: 'rgba(255,255,255,0.12)',
        }}
      >
        06
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center"
        style={{
          paddingLeft: 'clamp(20px,5vw,80px)',
          paddingRight: 'clamp(20px,5vw,80px)',
          paddingTop: 'clamp(64px,10vh,96px)',
          paddingBottom: 'clamp(48px,8vh,80px)',
          gap: 'clamp(20px,3vh,30px)',
        }}
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-2">
          <h1
            style={{
              color: '#ffffff',
              fontSize: 'clamp(24px,4vw,48px)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1,
              textAlign: 'center',
            }}
          >
            How LinkMoney Works
          </h1>

          <p
            style={{
              color: '#52525b',
              fontSize: 'clamp(11px,1.8vw,15px)',
              fontWeight: 300,
              letterSpacing: '0.04em',
              textAlign: 'center',
              lineHeight: 1.4,
            }}
          >
            Two entry paths → one monetisable credit journey
          </p>

          <div
            style={{
              width: 'clamp(32px,5vw,56px)',
              height: 1,
              background:
                'linear-gradient(90deg, transparent, rgba(52,211,153,0.5), transparent)',
              marginTop: 4,
            }}
          />
        </div>

        {/* Responsive flow wrapper */}
        <div className="flex w-full max-w-6xl flex-col items-center gap-10 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:gap-6">
          {/* Left - Agent flow */}
          <div className="flex w-full flex-col items-center">
            <SectionLabel>Agent Path</SectionLabel>
            <FlowCol>
              <Step label="🧑‍💼 Agent" />
              <DownArrow />
              <Step label="Creates Lead (Partner App)" />
              <DownArrow />
              <Step label="Check Eligibility" />
              <DownArrow />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-start sm:justify-center">
                <div className="flex flex-col items-center gap-1">
                  <Step label="✅ Eligible" small />
                  <DownArrow />
                  <Step label="🏦 Loan" highlight small />
                </div>

                <div
                  className="hidden sm:block"
                  style={{
                    width: 1,
                    height: 72,
                    background: '#27272a',
                    marginTop: 8,
                    flexShrink: 0,
                  }}
                />

                <div className="flex flex-col items-center gap-1">
                  <Step label="❌ Not Eligible" small />
                  <DownArrow />
                  <Step label="Send to App" small />
                </div>
              </div>
            </FlowCol>
          </div>

          {/* Center - Engine */}
          <div className="flex w-full max-w-xs flex-col items-center gap-2 lg:pt-8">
            <div className="hidden items-center gap-2 lg:flex">
              <SideArrow />
              <div
                style={{
                  width: 'clamp(6px,1vw,10px)',
                  height: 1,
                  background: 'rgba(52,211,153,0.3)',
                }}
              />
              <SideArrow />
            </div>

            <div
              style={{
                background: 'rgba(52,211,153,0.07)',
                border: '1px solid rgba(52,211,153,0.4)',
                borderRadius: 12,
                padding: 'clamp(10px,1.5vh,18px) clamp(14px,2vw,24px)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '10%',
                  right: '10%',
                  height: 1,
                  background:
                    'linear-gradient(90deg, transparent, rgba(52,211,153,0.8), transparent)',
                }}
              />
              <div
                style={{
                  color: '#34D399',
                  fontSize: 'clamp(10px,1.2vw,13px)',
                  fontWeight: 800,
                  letterSpacing: '0.02em',
                  textShadow:
                    '0 0 20px rgba(52,211,153,0.6), 0 0 50px rgba(52,211,153,0.3)',
                  lineHeight: 1.35,
                }}
              >
                Credit
                <br />
                Improvement
                <br />
                Engine
              </div>
            </div>

            <DownArrow />
            <Step label="Builder Loan / FD Card" small />
            <DownArrow />
            <Step label="Repayments" small />
            <DownArrow />
            <Step label="Score Improves" highlight small />
            <DownArrow />

            <div
              style={{
                background: 'rgba(52,211,153,0.1)',
                border: '1px solid rgba(52,211,153,0.5)',
                borderRadius: 10,
                padding: 'clamp(8px,1.2vh,14px) clamp(12px,1.8vw,20px)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '10%',
                  right: '10%',
                  height: 1,
                  background:
                    'linear-gradient(90deg, transparent, rgba(52,211,153,0.9), transparent)',
                }}
              />
              <span
                style={{
                  color: '#34D399',
                  fontSize: 'clamp(10px,1.3vw,14px)',
                  fontWeight: 800,
                  textShadow:
                    '0 0 25px rgba(52,211,153,0.7), 0 0 55px rgba(52,211,153,0.35)',
                  letterSpacing: '0.01em',
                  whiteSpace: 'normal',
                  lineHeight: 1.25,
                }}
              >
                🚀 Better Loan Unlocks
              </span>
            </div>
          </div>

          {/* Right - Direct flow */}
          <div className="flex w-full flex-col items-center">
            <SectionLabel>Direct User Path</SectionLabel>
            <FlowCol>
              <Step label="👤 User" />
              <DownArrow />
              <Step label="Downloads App" />
              <DownArrow />
              <Step label="Checks Score" />
              <DownArrow />
              <Step label="✨ +40 Points to Unlock Cashback" highlight />
              <DownArrow />
              <Step label="Starts Improvement" />
            </FlowCol>
          </div>
        </div>
      </div>
    </div>
  );
}