export default function RejectionStatementSlide() {
  return (
    <div
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{ background: '#0F9F73', fontFamily: "'Poppins', sans-serif" }}
    >

      {/* ══════════════════════════════════════════ */}
      {/*  DECORATIVE ELEMENTS                       */}
      {/* ══════════════════════════════════════════ */}

      {/* ── 3×3 dot grid — top left ── */}
      <div
        className="absolute pointer-events-none"
        style={{ top: 'clamp(24px,5vh,48px)', left: 'clamp(24px,4vw,52px)' }}
      >
        {[0, 1, 2].map((row) => (
          <div key={row} className="flex gap-3" style={{ marginBottom: 12 }}>
            {[0, 1, 2].map((col) => (
              <div
                key={col}
                style={{
                  width: 'clamp(5px,0.7vw,8px)',
                  height: 'clamp(5px,0.7vw,8px)',
                  borderRadius: '50%',
                  background: '#000',
                  opacity: 0.55,
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* ── Thin black vertical line — left ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: 'clamp(44px,7vw,88px)',
          top: '7%',
          bottom: '7%',
          width: 1.5,
          background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.55) 12%, rgba(0,0,0,0.55) 88%, transparent)',
        }}
      />

      {/* ── Tall black right panel ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          right: 0,
          width: 'clamp(18px,2.8vw,36px)',
          height: '100%',
          background: 'rgba(0,0,0,0.88)',
        }}
      />

      {/* ── Diagonal stripe motif — bottom right ── */}
      <div
        className="absolute pointer-events-none overflow-hidden"
        style={{
          bottom: 0,
          right: 'clamp(18px,2.8vw,36px)',
          width: 'clamp(100px,18vw,200px)',
          height: 'clamp(100px,18vw,200px)',
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: '220%',
              height: 2,
              background: '#000',
              opacity: 0.18,
              bottom: `${i * 15}px`,
              right: '-50%',
              transform: 'rotate(-45deg)',
              transformOrigin: 'right center',
            }}
          />
        ))}
      </div>

      {/* ── Small top-right label (inside panel) ── */}
      <div
        className="absolute top-7 z-10"
        style={{
          right: 'clamp(28px,4.5vw,56px)',
          fontSize: 'clamp(7px,0.9vw,9px)',
          letterSpacing: '0.3em',
          color: 'rgba(0,0,0,0.35)',
          textTransform: 'uppercase',
          writingMode: 'vertical-rl',
          fontWeight: 500,
        }}
      >
        The Problem
      </div>

      {/* ── Slide number — bottom left ── */}
      <div
        className="absolute bottom-7 z-10"
        style={{
          left: 'clamp(60px,9vw,100px)',
          fontSize: 'clamp(8px,1.1vw,10px)',
          letterSpacing: '0.25em',
          color: 'rgba(0,0,0,0.35)',
          fontWeight: 400,
        }}
      >
        01
      </div>

      {/* ── Thin horizontal rule — above statement ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          left: 'clamp(60px,10vw,120px)',
          right: 'clamp(50px,5vw,80px)',
          height: 1,
          background: 'rgba(0,0,0,0.12)',
          transform: 'translateY(-clamp(80px,14vw,160px))',
        }}
      />

      {/* ══════════════════════════════════════════ */}
      {/*  MAIN CONTENT                              */}
      {/* ══════════════════════════════════════════ */}
      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={{
          paddingLeft: 'clamp(72px,12vw,140px)',
          paddingRight: 'clamp(52px,6vw,100px)',
          gap: 'clamp(8px,1.5vh,20px)',
        }}
      >

        {/* Eyebrow */}
        <span
          style={{
            color: 'rgba(0,0,0,0.45)',
            fontSize: 'clamp(9px,1.4vw,12px)',
            letterSpacing: '0.4em',
            fontWeight: 500,
            textTransform: 'uppercase',
            marginBottom: 'clamp(4px,1vh,12px)',
          }}
        >
          India's Credit Reality
        </span>

        {/* 85% — hero stat */}
        <div
          style={{
            color: '#000',
            fontSize: 'clamp(88px,18vw,220px)',
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            position: 'relative',
          }}
        >
          85%
          {/* Ghost echo for depth */}
          <span
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'transparent',
              WebkitTextStroke: '1.5px rgba(0,0,0,0.08)',
              fontSize: 'inherit',
              fontWeight: 'inherit',
              letterSpacing: 'inherit',
              lineHeight: 'inherit',
              transform: 'translate(4px, 4px)',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            85%
          </span>
        </div>

        {/* Thick rule between stat and statement */}
        <div
          style={{
            width: 'clamp(48px,7vw,80px)',
            height: 3,
            background: 'rgba(0,0,0,0.7)',
            borderRadius: 2,
            margin: 'clamp(4px,1vh,12px) auto',
          }}
        />

        {/* Supporting statement */}
        <p
          style={{
            color: '#000',
            fontSize: 'clamp(18px,3.2vw,42px)',
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            maxWidth: 'clamp(280px,55vw,680px)',
          }}
        >
          of Credit Applications Gets Rejected,
          <br />
          <span style={{ fontWeight: 400, opacity: 0.75 }}>and Nobody Fixes It</span>
        </p>

        {/* Bottom micro caption */}
        <p
          style={{
            color: 'rgba(0,0,0,0.4)',
            fontSize: 'clamp(9px,1.2vw,13px)',
            fontWeight: 300,
            letterSpacing: '0.06em',
            marginTop: 'clamp(8px,1.5vh,20px)',
          }}
        >
          Source: RBI Credit Report 2024 &nbsp;·&nbsp; 120M+ credit-active Indians affected
        </p>

      </div>

    </div>
  );
}