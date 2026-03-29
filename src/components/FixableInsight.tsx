export default function FixableInsightSlide() {
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
        {[0,1,2].map((row) => (
          <div key={row} className="flex gap-3" style={{ marginBottom: 12 }}>
            {[0,1,2].map((col) => (
              <div
                key={col}
                style={{
                  width: 'clamp(5px,0.7vw,8px)',
                  height: 'clamp(5px,0.7vw,8px)',
                  borderRadius: '50%',
                  background: '#000',
                  opacity: 0.5,
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
          background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.5) 12%, rgba(0,0,0,0.5) 88%, transparent)',
        }}
      />

      {/* ── Diagonal stripe motif — bottom LEFT ── */}
      <div
        className="absolute pointer-events-none overflow-hidden"
        style={{
          bottom: 0,
          left: 0,
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
              opacity: 0.15,
              bottom: `${i * 15}px`,
              left: '-50%',
              transform: 'rotate(45deg)',
              transformOrigin: 'left center',
            }}
          />
        ))}
      </div>

      {/* ── Tall black right panel ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          right: 0,
          width: 'clamp(36px,4.5vw,64px)',
          height: '100%',
          background: 'rgba(0,0,0,0.88)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Glowing vertical "Did you know?" text */}
        <span
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
            color: '#34D399',
            fontSize: 'clamp(9px,1.2vw,13px)',
            fontWeight: 700,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            textShadow: `
              0 0 12px rgba(52,211,153,0.9),
              0 0 28px rgba(52,211,153,0.6),
              0 0 55px rgba(52,211,153,0.35),
              0 0 90px rgba(52,211,153,0.18)
            `,
          }}
        >
          Did you know?
        </span>
      </div>

      {/* ── Slide number — bottom left ── */}
      <div
        className="absolute bottom-7 z-10"
        style={{
          left: 'clamp(60px,9vw,100px)',
          fontSize: 'clamp(8px,1.1vw,10px)',
          letterSpacing: '0.25em',
          color: 'rgba(0,0,0,0.3)',
          fontWeight: 400,
        }}
      >
        03
      </div>

      {/* ── Top eyebrow label ── */}
      <div
        className="absolute top-7 z-10"
        style={{
          left: 'clamp(60px,9vw,100px)',
          fontSize: 'clamp(8px,1.1vw,10px)',
          letterSpacing: '0.35em',
          color: 'rgba(0,0,0,0.38)',
          fontWeight: 500,
          textTransform: 'uppercase',
        }}
      >
        Insight
      </div>

      {/* ══════════════════════════════════════════ */}
      {/*  MAIN CONTENT                              */}
      {/* ══════════════════════════════════════════ */}
      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={{
          paddingLeft: 'clamp(72px,12vw,140px)',
          paddingRight: 'clamp(72px,8vw,120px)',
          gap: 'clamp(6px,1.2vh,16px)',
        }}
      >

        {/* Eyebrow tag */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 'clamp(4px,1vh,12px)',
          }}
        >
          <div style={{ width: 'clamp(20px,3vw,36px)', height: 2, background: 'rgba(0,0,0,0.4)', borderRadius: 2 }} />
          <span
            style={{
              color: 'rgba(0,0,0,0.45)',
              fontSize: 'clamp(8px,1.2vw,11px)',
              letterSpacing: '0.4em',
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            The Opportunity
          </span>
          <div style={{ width: 'clamp(20px,3vw,36px)', height: 2, background: 'rgba(0,0,0,0.4)', borderRadius: 2 }} />
        </div>

        {/* ── 70% hero stat ── */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              color: '#000',
              fontSize: 'clamp(96px,20vw,240px)',
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: '-0.045em',
              position: 'relative',
              zIndex: 1,
            }}
          >
            70%
          </div>
          {/* Ghost echo for depth */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'transparent',
              WebkitTextStroke: '1.5px rgba(0,0,0,0.07)',
              fontSize: 'clamp(96px,20vw,240px)',
              fontWeight: 900,
              letterSpacing: '-0.045em',
              lineHeight: 0.88,
              transform: 'translate(5px,5px)',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            70%
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: 'clamp(40px,6vw,72px)',
            height: 3,
            background: 'rgba(0,0,0,0.65)',
            borderRadius: 2,
            margin: 'clamp(4px,1.2vh,16px) auto',
          }}
        />

        {/* Supporting statement */}
        <p
          style={{
            color: '#000',
            fontSize: 'clamp(13px,2.2vw,28px)',
            fontWeight: 800,
            lineHeight: 1.25,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            maxWidth: 'clamp(260px,48vw,600px)',
          }}
        >
          of Rejections Are Fixable
          <br />
          <span style={{ opacity: 0.6, fontWeight: 700 }}>With Better Credit</span>
          <br />
          <span style={{ opacity: 0.6, fontWeight: 700 }}>Intelligence + Guided</span>
          <br />
          <span style={{ opacity: 0.6, fontWeight: 700 }}>Improvement</span>
        </p>

        {/* Bottom source note */}
        <p
          style={{
            color: 'rgba(0,0,0,0.35)',
            fontSize: 'clamp(8px,1.1vw,12px)',
            fontWeight: 300,
            letterSpacing: '0.06em',
            marginTop: 'clamp(8px,2vh,24px)',
          }}
        >
          Based on analysis of 50,000+ rejection cases &nbsp;·&nbsp; LinkMoney Internal Data
        </p>

      </div>

    </div>
  );
}