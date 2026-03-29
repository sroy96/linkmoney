function TeamSlide() {
  const team = [
    {
      name: 'SAURAV ROY',
      role: 'CEO',
      description: 'Ex-Razorpay, Acko, Karza, ex-CTO Fridayy.ai, VIT Vellore',
      image: '/team/saurav.png',
      logos: ['/logos/razorpay.png', '/logos/acko.png', '/logos/karza.png'],
    },
    {
      name: 'DHIRAJ JAIN',
      role: 'CTO',
      description: 'Ex-Tech Lead AWS, Jio, Maintainer Linux Foundation, VIT Vellore',
      image: '/team/dhiraj.jpeg',
      logos: ['/logos/aws.png', '/logos/jio.png'],
    },
    {
      name: 'ANISH SAHA',
      role: 'Founding Engineer',
      description: 'Ex-Founding Engineer Supaki, Ex-Karza, VIT Vellore',
      image: '/team/anish.jpeg',
      logos: ['/logos/supaki.jpeg', '/logos/karza.png'],
    },
  ];

  return (
    <div className="min-h-screen bg-stone-100 px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-6 lg:mb-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-emerald-600 sm:h-20 sm:w-20">
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="h-1.5 w-1.5 rounded-full bg-white" />
                ))}
              </div>
            </div>

            <div className="relative pl-5 sm:pl-8">
              <div className="absolute left-0 top-0 h-full w-px bg-black/30" />
              <h1 className="text-3xl font-bold leading-[0.95] text-black sm:text-4xl lg:text-5xl">
                LinkMoney
                <br />
                Founding Team
              </h1>
            </div>
          </div>

          <div className="pl-1 text-left lg:text-right">
            <div className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Raising
              <br />
              <span className="text-emerald-600">$950K</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white/70 p-4 shadow-sm sm:p-5 lg:p-6"
            >
              <img
                src={member.image}
                alt={member.name}
                className="mb-5 h-64 w-full rounded-2xl object-cover shadow-md sm:h-72 lg:h-80 xl:h-72"
              />

              <h3 className="mb-2 text-2xl font-bold tracking-wide text-black sm:text-3xl">
                {member.name}
              </h3>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-gray-500 sm:text-base">
                {member.role}
              </p>

              <p className="mb-5 text-base leading-relaxed text-gray-700 sm:text-lg">
                {member.description}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {member.logos.map((logo, i) => (
                  <div
                    key={i}
                    className="flex h-12 items-center justify-center rounded-md bg-white px-3 py-2 shadow-sm sm:h-14 sm:px-4 sm:py-3"
                  >
                    <img
                      src={logo}
                      alt="logo"
                      className="h-6 object-contain sm:h-8"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamSlide;