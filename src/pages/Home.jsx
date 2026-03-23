export default function Home() {
  const navItems = [
    "What it does",
    "Live Calculator",
    "Benefits",
    "Pricing",
    "Insights",
    "Contact",
  ];

  return (
    <div
      className="relative min-h-screen overflow-hidden text-white"
      style={{
        fontFamily: '"Inter", sans-serif',
        background:
          "radial-gradient(circle at 20% 80%, rgba(36,94,220,0.25), transparent 30%), radial-gradient(circle at 75% 20%, rgba(117,41,188,0.30), transparent 35%), linear-gradient(120deg, #040726 0%, #09104a 25%, #151b67 55%, #36155f 80%, #22072f 100%)",
      }}
    >
      {/* GRID */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:120px_100%]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:100%_120px]" />
      </div>

      {/* GUIDE LINES */}
      <div className="absolute left-[120px] top-0 bottom-0 w-[2px] bg-white/40 z-10" />
      <div className="absolute left-0 right-0 top-[110px] h-[2px] bg-white/40 z-10" />

      {/* HEADER */}
      <header className="relative z-20 h-[110px]">
        <div className="flex items-center justify-between h-full max-w-[1700px] mx-auto pl-[180px] pr-[60px]">

          {/* LOGO */}
          <div
            style={{ fontFamily: '"Outfit", sans-serif', fontWeight: 600 }}
            className="text-[48px]"
          >
            EcoFlow
          </div>

          {/* NAV */}
          <nav className="hidden lg:flex gap-12">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[18px] text-white/90 hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* LOGIN */}
          <button className="text-[18px] text-white/90 hover:text-white">
            Login
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-20 max-w-[1700px] mx-auto pl-[180px] pr-[80px] pt-[60px]">

        <div className="max-w-[1050px]">

          {/* LABEL */}
          <div className="text-[12px] uppercase tracking-[0.15em] text-white/50 mb-5">
            Early-stage decision intelligence for capital projects
          </div>

          {/* HEADLINE (FIXED SIZE) */}
          <h1 className="text-[72px] leading-[0.95] tracking-[-0.04em] font-medium">
            Quantify cost, carbon, and certification risk before design begins.
          </h1>

          {/* TEXT */}
          <div className="mt-8 space-y-4 max-w-[820px] text-[20px] text-white/80 leading-[1.5]">
            <p>
              Evaluate real cost impact, embodied carbon, and certification exposure across multiple scenarios — before decisions lock in millions in risk.
            </p>
            <p>
              Compare options, align stakeholders earlier, and move into design with quantified clarity instead of assumptions.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="mt-10 flex gap-4">
            <button className="bg-white text-black px-7 py-3 rounded-full text-[16px] font-medium">
              Run a scenario analysis
            </button>

            <button className="border border-white/30 px-7 py-3 rounded-full text-[16px] font-medium hover:bg-white/10">
              View sample output
            </button>
          </div>

          <div className="mt-3 text-white/50 text-[13px]">
            Free preview — no signup required
          </div>

        </div>
      </section>
    </div>
  );
}
