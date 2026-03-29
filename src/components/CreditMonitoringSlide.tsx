export default function CreditMonitoringSlide() {
  return (
    <div
      className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#000000', fontFamily: "'Poppins', sans-serif" }}
    >

      {/* ══════════════════════════════════════════ */}
      {/*  DECORATIVE ELEMENTS                       */}
      {/* ══════════════════════════════════════════ */}

      {/* ── Emerald accent bar — far left ── */}
      <div
        className="absolute left-0 top-0 bottom-0 pointer-events-none"
        style={{
          width: 'clamp(3px,0.35vw,5px)',
          background: 'linear-gradient(to bottom, transparent, #0F9F73 15%, #34D399 50%, #0F9F73 85%, transparent)',
          boxShadow: '0 0 18px rgba(52,211,153,0.45), 0 0 40px rgba(52,211,153,0.2)',
        }}
      />

      {/* ── Thin dark grey vertical line — right side ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: 'clamp(48px,7vw,96px)',
          top: '8%',
          bottom: '8%',
          width: 1,
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.07) 15%, rgba(255,255,255,0.07) 85%, transparent)',
        }}
      />

      {/* ── Subtle grid lines ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(52,211,153,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.018) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* ── 3×3 dot grid — top left ── */}
      <div
        className="absolute pointer-events-none"
        style={{ top: 'clamp(24px,5vh,48px)', left: 'clamp(24px,4vw,52px)' }}
      >
        {[0,1,2].map((row) => (
          <div key={row} className="flex gap-3" style={{ marginBottom: 12 }}>
            {[0,1,2].map((col) => (
              <div
                key={col}
                style={{
                  width: 'clamp(4px,0.55vw,7px)',
                  height: 'clamp(4px,0.55vw,7px)',
                  borderRadius: '50%',
                  background: '#34D399',
                  opacity: 0.25,
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* ── Diagonal stripe motif — bottom right ── */}
      <div
        className="absolute pointer-events-none overflow-hidden"
        style={{
          bottom: 0,
          right: 'clamp(48px,7vw,96px)',
          width: 'clamp(80px,14vw,160px)',
          height: 'clamp(80px,14vw,160px)',
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
              opacity: 0.07,
              bottom: `${i * 14}px`,
              right: '-50%',
              transform: 'rotate(-45deg)',
              transformOrigin: 'right center',
            }}
          />
        ))}
      </div>

      {/* ── Slide number — bottom left ── */}
      <div
        className="absolute bottom-7 z-10"
        style={{
          left: 'clamp(24px,4vw,52px)',
          fontSize: 'clamp(8px,1vw,10px)',
          letterSpacing: '0.28em',
          color: 'rgba(255,255,255,0.15)',
          fontWeight: 400,
        }}
      >
        05
      </div>

      {/* ── Top eyebrow label ── */}
      <div
        className="absolute top-7 z-10"
        style={{
          left: 'clamp(24px,4vw,52px)',
          fontSize: 'clamp(8px,1vw,10px)',
          letterSpacing: '0.38em',
          color: 'rgba(52,211,153,0.5)',
          fontWeight: 500,
          textTransform: 'uppercase',
        }}
      >
        Market Signal
      </div>

      {/* ── Source note — bottom right ── */}
      <div
        className="absolute bottom-7 z-10"
        style={{
          right: 'clamp(60px,9vw,110px)',
          fontSize: 'clamp(7px,0.9vw,10px)',
          letterSpacing: '0.15em',
          color: 'rgba(255,255,255,0.12)',
          fontWeight: 300,
        }}
      >
        Source: TransUnion CIBIL 2024
      </div>

      {/* ══════════════════════════════════════════ */}
      {/*  MAIN CONTENT                              */}
      {/* ══════════════════════════════════════════ */}
      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={{
          paddingLeft: 'clamp(60px,10vw,120px)',
          paddingRight: 'clamp(60px,10vw,120px)',
          gap: 0,
          marginTop: '-4vh',
        }}
      >

        {/* Eyebrow tag */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 'clamp(16px,3vh,36px)',
          }}
        >
          <div style={{
            width: 'clamp(18px,2.5vw,32px)',
            height: 1,
            background: 'rgba(52,211,153,0.4)',
            borderRadius: 1,
          }} />
          <span
            style={{
              color: 'rgba(52,211,153,0.6)',
              fontSize: 'clamp(8px,1.1vw,11px)',
              letterSpacing: '0.42em',
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            The Demand Is Already There
          </span>
          <div style={{
            width: 'clamp(18px,2.5vw,32px)',
            height: 1,
            background: 'rgba(52,211,153,0.4)',
            borderRadius: 1,
          }} />
        </div>

        {/* ── Hero number ── */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>

          {/* Emerald halo behind number */}
          <div
            style={{
              position: 'absolute',
              width: 'clamp(200px,40vw,520px)',
              height: 'clamp(100px,18vw,240px)',
              borderRadius: '50%',
              background: 'radial-gradient(ellipse, rgba(52,211,153,0.13) 0%, rgba(52,211,153,0.05) 50%, transparent 75%)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              filter: 'blur(36px)',
              pointerEvents: 'none',
            }}
          />

          <span
            style={{
              color: '#34D399',
              fontSize: 'clamp(80px,17vw,210px)',
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              position: 'relative',
              zIndex: 1,
              textShadow: `
                0 0 40px rgba(52,211,153,0.55),
                0 0 80px rgba(52,211,153,0.35),
                0 0 140px rgba(52,211,153,0.2),
                0 0 200px rgba(52,211,153,0.1)
              `,
            }}
          >
            180+M
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: 'clamp(40px,5.5vw,68px)',
            height: 2,
            background: 'linear-gradient(90deg, transparent, rgba(52,211,153,0.55), transparent)',
            borderRadius: 2,
            margin: 'clamp(16px,3vh,36px) auto',
          }}
        />

        {/* Supporting statement */}
        <p
          style={{
            color: '#f4f4f5',
            fontSize: 'clamp(16px,3vw,38px)',
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: '-0.015em',
            maxWidth: 'clamp(260px,50vw,620px)',
          }}
        >
          Indian Customers Check
          <br />
          <span style={{ color: '#a1a1aa', fontWeight: 400 }}>
            Credit Report Actively
          </span>
        </p>

        {/* Tertiary note */}
        <p
          style={{
            color: 'rgba(255,255,255,0.2)',
            fontSize: 'clamp(9px,1.2vw,13px)',
            fontWeight: 300,
            letterSpacing: '0.08em',
            marginTop: 'clamp(16px,3vh,36px)',
          }}
        >
          Yet less than 2% receive actionable guidance to improve their score
        </p>

      </div>

    </div>
  );
}