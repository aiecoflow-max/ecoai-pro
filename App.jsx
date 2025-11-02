<header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-white/10 shadow-md">
  <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
    {/* LOGO + TITLE */}
    <div className="flex items-center gap-4">
      <img
        src="/ecoflow-logo.png"
        alt="EcoFlow AI Logo"
        className="h-20 w-auto object-contain mix-blend-screen"
      />
      <h1
  className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-none"
  style={{ fontFamily: "'Montserrat', sans-serif" }}
>
  EcoFlow <span className="text-emerald-400">AI</span>
</h1>


    {/* NAV LINKS */}
    <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
      <a href="#products" className="hover:text-white">Products</a>
      <a href="#courses" className="hover:text-white">Courses</a>
      <a href="#research" className="hover:text-white">Research</a>
      <a href="#consulting" className="hover:text-white">Consulting</a>
      <a href="#contact" className="hover:text-white">Contact</a>
    </nav>

    {/* CTA */}
    <a
      href="#waitlist"
      className="rounded-xl bg-white text-slate-900 text-sm px-4 py-2 font-semibold hover:bg-emerald-400 hover:text-slate-900 transition"
    >
      Join Waitlist
    </a>
  </div>
</header>
