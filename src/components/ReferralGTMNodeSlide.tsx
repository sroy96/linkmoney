import { Sparkles } from 'lucide-react';

function ReferralGTMNodeSlide() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-8 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0F9F73 0%, #0a6d50 50%, #052f27 100%)',
      }}
    >
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

      <div className="absolute left-0 top-0 bottom-0 w-px bg-black/40"></div>

      <div className="absolute top-12 left-12 grid grid-cols-3 gap-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-black/30 rounded-full"></div>
        ))}
      </div>

      <div className="max-w-4xl w-full z-10 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-white text-5xl font-bold">Link</h1>
          <Sparkles className="w-8 h-8 text-amber-400" />
        </div>
        <h2 className="text-white text-5xl font-light mb-6">Club</h2>

        <div className="w-24 h-px bg-black/30 mb-8"></div>

        <p className="text-gray-300 text-center text-base font-light mb-12 max-w-2xl">
          Be a part of our exclusive referral chain & earn money with ease
        </p>

        <div className="flex flex-col items-center space-y-8 mb-16">
          <p className="text-amber-400 text-2xl font-semibold tracking-wide">
            Add a Refer once, Earn forever
          </p>

          <p className="text-gray-400 text-lg font-light text-center max-w-2xl">
            Every time your referrals activates a partner you get upto
          </p>

          <div className="relative">
            <div className="absolute inset-0 bg-emerald-400/20 blur-3xl rounded-full scale-150"></div>
            <div className="text-white text-9xl font-bold relative z-10 glow-text-referral">
              20%
            </div>
          </div>

          <p className="text-gray-300 text-lg font-light">
            Of the first sale of the partner
          </p>
        </div>
      </div>

      <style>{`
        .glow-text-referral {
          text-shadow: 0 0 30px rgba(255,255,255,0.4),
                       0 0 60px rgba(52, 211, 153, 0.3),
                       0 0 90px rgba(52, 211, 153, 0.2);
        }
      `}</style>
    </div>
  );
}

export default ReferralGTMNodeSlide;
