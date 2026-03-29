import FloatingCoins from './FloatingCoins';

function CashbackGTMSlide() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-8">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600"></div>

      <FloatingCoins />

      <div className="max-w-5xl w-full z-10">
        <h1 className="text-amber-500 text-xl font-light mb-24 text-center tracking-widest">
          Have Credit Score Above 800?
        </h1>

        <div className="flex flex-col items-center space-y-12 mb-24">
          <div className="flex items-baseline justify-center gap-6 flex-wrap">
            <span className="text-emerald-400 text-5xl font-light">Get Upto</span>

            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/20 blur-4xl rounded-full scale-150"></div>
              <span className="text-emerald-400 text-9xl font-bold relative z-10 glow-text">
                1%
              </span>
            </div>

            <span className="text-emerald-400 text-5xl font-light">Cashback</span>
          </div>

          <div className="text-emerald-300 text-3xl font-semibold">
            On every Loan
          </div>
        </div>

        <div className="text-center">
          <p className="text-amber-500 text-lg font-light tracking-wide">
            If not we will help build it
          </p>
        </div>
      </div>

      <style>{`
        .glow-text {
          text-shadow: 0 0 40px rgba(52, 211, 153, 0.6),
                       0 0 80px rgba(52, 211, 153, 0.4),
                       0 0 120px rgba(52, 211, 153, 0.2);
        }
      `}</style>
    </div>
  );
}

export default CashbackGTMSlide;
