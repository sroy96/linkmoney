import { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RevenueSlide from './components/RevenueSlide';
import TamSlide from './components/TamSlide';
import LinkmoneyCover from './components/LinkMoneyCover';
import PilotSlide from './components/PilotSlide';
import ProblemDetailSlide from './components/ProblemDetailSlide';
import RejectionStatementSlide from './components/RejectionStatementSlide';
import FixableInsightSlide from './components/FixableInsight';
import CreditMonitoringSlide from './components/CreditMonitoringSlide';
import GTMIntroSlide from './components/GTMSlide';
import CashbackGTMSlide from './components/CashbackGTMSlide';
import ReferralGTMNodeSlide from './components/ReferralGTMNodeSlide';
import TeamSlide from './components/LinkmoneyTeam';

const SLIDES = [
  { component: LinkmoneyCover, label: 'Cover' },
  { component: PilotSlide, label: 'PilotSlide' },
  { component: ProblemDetailSlide, label: 'ProblemDetail' },
  { component: RejectionStatementSlide, label: 'RejectionStatement' },
  { component: FixableInsightSlide, label: 'FixableInsightSlide' },
  { component: CreditMonitoringSlide, label: 'Market Signal' },
  { component: RevenueSlide, label: 'Revenue' },
  { component: TamSlide, label: 'TAM / SAM / SOM' },
  { component: GTMIntroSlide, label: 'GTMIntroSlide' },
  { component: CashbackGTMSlide, label: 'CashbackGTMSlide' },
  { component: ReferralGTMNodeSlide, label: 'ReferralGTMNodeSlide' },
  { component: TeamSlide, label: 'LinkmoneyTeam' },
];

export default function App() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((c) => Math.max(0, c - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => Math.min(SLIDES.length - 1, c + 1));
  }, []);

  const Slide = SLIDES[current].component;

  return (
    <div className="relative min-h-screen w-full bg-black">
      <div className="min-h-screen w-full pb-28">
        <Slide />
      </div>

      {/* Navigation */}
      <nav className="fixed bottom-6 left-1/2 z-[999] flex -translate-x-1/2 items-center gap-5 px-4">
        <button
          onClick={prev}
          disabled={current === 0}
          aria-label="Previous slide"
          className="group flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-200"
          style={{
            background: 'rgba(13,13,13,0.8)',
            borderColor:
              current === 0
                ? 'rgba(39,39,42,0.4)'
                : 'rgba(52,211,153,0.25)',
            opacity: current === 0 ? 0.3 : 1,
            cursor: current === 0 ? 'not-allowed' : 'pointer',
            backdropFilter: 'blur(8px)',
          }}
        >
          <ChevronLeft
            size={18}
            style={{ color: '#34D399', opacity: current === 0 ? 0.4 : 1 }}
          />
        </button>

        <div
          className="flex items-center gap-2 rounded-full px-4 py-3"
          style={{
            background: 'rgba(13,13,13,0.72)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {SLIDES.map((slide, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}: ${slide.label}`}
              className="rounded-full transition-all duration-300"
              style={{
                height: 8,
                width: i === current ? 36 : 8,
                background:
                  i === current ? '#34D399' : 'rgba(63,63,70,0.7)',
                boxShadow:
                  i === current
                    ? '0 0 12px rgba(52,211,153,0.5)'
                    : 'none',
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={current === SLIDES.length - 1}
          aria-label="Next slide"
          className="group flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-200"
          style={{
            background: 'rgba(13,13,13,0.8)',
            borderColor:
              current === SLIDES.length - 1
                ? 'rgba(39,39,42,0.4)'
                : 'rgba(52,211,153,0.25)',
            opacity: current === SLIDES.length - 1 ? 0.3 : 1,
            cursor:
              current === SLIDES.length - 1 ? 'not-allowed' : 'pointer',
            backdropFilter: 'blur(8px)',
          }}
        >
          <ChevronRight
            size={18}
            style={{
              color: '#34D399',
              opacity: current === SLIDES.length - 1 ? 0.4 : 1,
            }}
          />
        </button>
      </nav>

      {/* Slide counter */}
      <div
        className="fixed bottom-6 right-6 z-[999] font-display"
        style={{ color: '#3f3f46', fontSize: 11, letterSpacing: '0.15em' }}
      >
        {String(current + 1).padStart(2, '0')} /{' '}
        {String(SLIDES.length).padStart(2, '0')}
      </div>

      {/* Slide label */}
      <div
        className="fixed right-6 top-6 z-[999] font-display uppercase tracking-widest"
        style={{ color: '#27272a', fontSize: 9, letterSpacing: '0.25em' }}
      >
        {SLIDES[current].label}
      </div>
    </div>
  );
}