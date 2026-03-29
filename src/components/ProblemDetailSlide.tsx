export default function ProblemDetailSlide() {
  return (
    <div
      className="min-h-screen relative flex flex-col overflow-hidden"
      style={{ background: '#E9E9E9', fontFamily: "'Poppins', sans-serif" }}
    >

      {/* ── Thin black left vertical line ── */}
      <div
        className="absolute z-10 pointer-events-none"
        style={{
          left: 'clamp(28px, 5vw, 56px)',
          top: '8%',
          bottom: '8%',
          width: 1,
          background: 'linear-gradient(to bottom, transparent, #111 10%, #111 90%, transparent)',
        }}
      />

      {/* ── Dark emerald block — upper right ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          right: 0,
          width: 'clamp(14px, 2.2vw, 28px)',
          height: 'clamp(120px, 28vh, 260px)',
          background: 'linear-gradient(to bottom, #064e3b, #065f46)',
          borderBottomLeftRadius: 4,
        }}
      />

      {/* ── Diagonal stripe motif — bottom right ── */}
      <div
        className="absolute pointer-events-none overflow-hidden"
        style={{ bottom: 0, right: 0, width: 'clamp(80px,14vw,160px)', height: 'clamp(80px,14vw,160px)' }}
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: '200%',
              height: 1.5,
              background: '#111',
              opacity: 0.12,
              bottom: `${i * 16}px`,
              right: `-40%`,
              transform: 'rotate(-45deg)',
              transformOrigin: 'right center',
            }}
          />
        ))}
      </div>

      {/* ── Small top-left label ── */}
      <div
        className="absolute top-7 z-10"
        style={{
          left: 'clamp(52px, 8vw, 88px)',
          fontSize: 'clamp(8px, 1.1vw, 10px)',
          letterSpacing: '0.3em',
          color: '#9ca3af',
          textTransform: 'uppercase',
          fontWeight: 500,
        }}
      >
        Problem
      </div>

      {/* ── Slide number — bottom left ── */}
      <div
        className="absolute bottom-7 z-10"
        style={{
          left: 'clamp(52px, 8vw, 88px)',
          fontSize: 'clamp(8px, 1.1vw, 10px)',
          letterSpacing: '0.2em',
          color: '#d1d5db',
          fontWeight: 400,
        }}
      >
        02
      </div>

      {/* ══════════════════════════════════ */}
      {/*  MAIN CONTENT                      */}
      {/* ══════════════════════════════════ */}
      <div
        className="relative z-10 flex flex-col w-full h-full"
        style={{
          paddingLeft: 'clamp(60px, 10vw, 120px)',
          paddingRight: 'clamp(40px, 8vw, 100px)',
          paddingTop: 'clamp(48px, 8vh, 80px)',
          paddingBottom: 'clamp(40px, 6vh, 64px)',
        }}
      >

        {/* ── TITLE ── */}
        <h1
          className="font-black text-center w-full"
          style={{
            color: '#0a0a0a',
            fontSize: 'clamp(22px, 4.5vw, 58px)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            marginBottom: 'clamp(32px, 6vh, 64px)',
            maxWidth: 820,
            alignSelf: 'center',
          }}
        >
          The Credit System Stops<br />
          <span style={{ color: '#064e3b' }}>at Rejection</span>
        </h1>

        {/* ── Thin rule under title ── */}
        <div
          style={{
            width: 'clamp(40px, 6vw, 64px)',
            height: 2,
            background: '#064e3b',
            alignSelf: 'center',
            marginBottom: 'clamp(28px, 5vh, 52px)',
            borderRadius: 2,
          }}
        />

        {/* ── Two-column grid ── */}
        <div
          className="grid w-full flex-1"
          style={{
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(24px, 4vw, 64px)',
            alignItems: 'start',
          }}
        >

          {/* ─── LEFT: Agents ─── */}
          <Section
            heading="Agents"
            items={[
              {
                text: 'Blind applications → high rejection rates',
                bold: false,
              },
              {
                text: 'No digital infrastructure to fix customer credit issues',
                sub: 'Existing processes are manual, slow and resource-heavy.',
                bold: false,
                subBold: true,
              },
              {
                text: 'Zero monetisation of rejected leads.',
                bold: false,
              },
            ]}
          />

          {/* ─── RIGHT: Customer ─── */}
          <Section
            heading="Customer"
            items={[
              { text: 'Credit score worsens after every rejection.', bold: false },
              { text: 'Massive demand goes unmonetised.', bold: false },
              { text: 'No understanding of why they are rejected.', bold: false },
              { text: 'Credit improvement tools are DIY and passive.', bold: false },
            ]}
          />
        </div>

      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────── */
/*  Section sub-component                          */
/* ─────────────────────────────────────────────── */
interface BulletItem {
  text: string;
  bold?: boolean;
  sub?: string;
  subBold?: boolean;
}

function Section({ heading, items }: { heading: string; items: BulletItem[] }) {
  return (
    <div className="flex flex-col" style={{ gap: 'clamp(16px, 2.5vh, 28px)' }}>

      {/* Heading row */}
      <div className="flex items-center gap-3">
        <div
          style={{
            width: 'clamp(18px, 2.5vw, 28px)',
            height: 2,
            background: '#064e3b',
            borderRadius: 2,
            flexShrink: 0,
          }}
        />
        <h2
          className="font-black"
          style={{
            color: '#0a0a0a',
            fontSize: 'clamp(16px, 2.2vw, 28px)',
            letterSpacing: '-0.015em',
            lineHeight: 1,
          }}
        >
          {heading}
        </h2>
      </div>

      {/* Bullet list */}
      <ul className="flex flex-col" style={{ gap: 'clamp(10px, 1.8vh, 18px)', paddingLeft: 4 }}>
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 items-start">
            {/* Bullet dot */}
            <div
              style={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                background: '#064e3b',
                flexShrink: 0,
                marginTop: 'clamp(6px, 1vw, 10px)',
              }}
            />
            <div className="flex flex-col gap-1">
              <span
                style={{
                  color: '#1c1c1e',
                  fontSize: 'clamp(12px, 1.6vw, 18px)',
                  fontWeight: item.bold ? 700 : 400,
                  lineHeight: 1.55,
                  letterSpacing: '-0.005em',
                }}
              >
                {item.text}
              </span>
              {item.sub && (
                <span
                  style={{
                    color: '#374151',
                    fontSize: 'clamp(11px, 1.35vw, 15px)',
                    fontWeight: item.subBold ? 700 : 400,
                    lineHeight: 1.5,
                    paddingLeft: 2,
                  }}
                >
                  {item.sub}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}