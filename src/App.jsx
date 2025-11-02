import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, LineChart, Layers, Sparkles, Globe2, Database, Building2 } from "lucide-react";

function EcoFlowLogo({ size = 56, withWordmark = true }) {
  return (
    <div className="flex items-center gap-3 select-none">
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-xl"
        aria-label="AI EcoFlow logo"
      >
        <defs>
          <radialGradient id="g" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#15e0b4" />
            <stop offset="100%" stopColor="#00C897" />
          </radialGradient>
        </defs>
        <path
          d="M100 10c25 0 38 8 53 20s27 29 30 47-2 38-12 54-26 28-42 34-33 6-49 1-31-16-44-31S16 103 18 84s14-36 28-48S75 10 100 10z"
          fill="url(#g)"
        />
        <path
          d="M64 120c30-22 48-36 72-70"
          stroke="#0B1220"
          strokeOpacity=".25"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle cx="76" cy="112" r="6" fill="#0B1220" fillOpacity=".25" />
        <circle cx="98" cy="94" r="6" fill="#0B1220" fillOpacity=".25" />
        <circle cx="124" cy="64" r="6" fill="#0B1220" fillOpacity=".25" />
      </svg>
      {withWordmark && (
        <div className="leading-tight">
          <div className="text-xl md:text-2xl font-semibold tracking-tight text-white">AI EcoFlow</div>
          <div className="text-[0.8rem] uppercase tracking-widest text-emerald-200/90">Flow Smarter. Build Greener.</div>
        </div>
      )}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
      <Sparkles className="h-3.5 w-3.5" /> {children}
    </span>
  );
}

function CTA({ children }) {
  return (
    <button className="group inline-flex items-center gap-2 rounded-2xl bg-emerald-500/90 px-5 py-3 font-semibold text-slate-900 shadow-lg transition hover:bg-emerald-400">
      {children}
      <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" />
    </button>
  );
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
      <div className="mb-3 inline-flex rounded-xl bg-emerald-400/15 p-2">
        <Icon className="h-5 w-5 text-emerald-300" />
      </div>
      <div className="text-white font-semibold mb-1">{title}</div>
      <div className="text-slate-300 text-sm leading-relaxed">{desc}</div>
    </div>
  );
}

function ProductCard({ title, desc, price, badge, cta }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
      {badge && <div className="mb-3 inline-flex rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-200">{badge}</div>}
      <div className="text-white text-lg font-semibold mb-1">{title}</div>
      <div className="text-slate-300 text-sm leading-relaxed mb-4">{desc}</div>
      <div className="flex items-end justify-between">
        <div className="text-emerald-300 font-semibold text-xl">{price}</div>
        <button className="rounded-xl border border-emerald-300/40 px-4 py-2 text-sm text-emerald-200 hover:bg-emerald-400/10">{cta}</button>
      </div>
    </div>
  );
}

export default function EcoFlowLanding() {
  return (
    <div className="min-h-screen w-full bg-slate-900 text-slate-100">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <EcoFlowLogo size={44} />
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#courses" className="hover:text-white">Courses</a>
            <a href="#research" className="hover:text-white">Research</a>
            <a href="#consulting" className="hover:text-white">Consulting</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#waitlist" className="rounded-xl bg-white text-slate-900 text-sm px-4 py-2 font-semibold">Join Waitlist</a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-600/10 via-emerald-500/0 to-transparent" />
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Pill>AI Shapes the Future of Sustainable Architecture</Pill>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-white"
              >
                Design smarter. Build greener. <span className="text-emerald-300">With AI.</span>
              </motion.h1>
              <p className="mt-4 text-slate-300 leading-relaxed">
                EcoFlow AI는 초기 설계 단계에서 <span className="text-white font-medium">탄소·에너지·자재</span>를 실시간으로 비교하고, 
                최적 설계를 제안하는 <span className="text-white font-medium">AI 기반 지속가능 디자인 플랫폼</span>입니다.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <CTA>Try LCA Sheet (Free Preview)</CTA>
                <button className="rounded-2xl border border-white/15 px-5 py-3 text-slate-200 hover:bg-white/5">View Demo</button>
              </div>
              <div className="mt-6 flex items-center gap-6 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1"><Globe2 className="h-4 w-4"/> Global</span>
                <span className="inline-flex items-center gap-1"><Database className="h-4 w-4"/> Material CO₂ DB</span>
                <span className="inline-flex items-center gap-1"><Building2 className="h-4 w-4"/> Data Center · Housing</span>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-3xl bg-emerald-500/10 blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-2xl">
                <div className="flex items-center justify-between">
                  <EcoFlowLogo size={40} withWordmark={false} />
                  <span className="text-xs text-emerald-200">EcoFlow Pro — MVP</span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-xl bg-white/5 p-3">
                    <div className="text-emerald-300 text-sm font-semibold">-37%</div>
                    <div className="text-[10px] text-slate-300">Embodied Carbon</div>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3">
                    <div className="text-emerald-300 text-sm font-semibold">+18%</div>
                    <div className="text-[10px] text-slate-300">Thermal Efficiency</div>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3">
                    <div className="text-emerald-300 text-sm font-semibold">×10</div>
                    <div className="text-[10px] text-slate-300">Faster Decisions</div>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl bg-slate-950/60 border border-white/10 p-4">
                  <div className="text-xs text-slate-300">Prompt → Recommendation</div>
                  <div className="mt-2 text-sm text-white/90 font-mono">“데이터센터 외벽을 저탄소 콘크리트 vs CLT로 비교해줘.”</div>
                  <div className="mt-3 text-xs text-emerald-200/90">▶ Result: CLT 외피 + 리사이클 알루미늄 루버 조합이 28% 낮은 CO₂e</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid md:grid-cols-4 gap-4">
        <Feature icon={Leaf} title="Sustainable by Default" desc="초기 설계에서 자동으로 저탄소 옵션을 추천합니다." />
        <Feature icon={LineChart} title="Real-time LCA" desc="자재·구조·외피별 kgCO₂e를 즉시 비교." />
        <Feature icon={Layers} title="BIM-Ready" desc="Revit/IFC 데이터와 호환되는 워크플로우." />
        <Feature icon={Globe2} title="Global Materials DB" desc="지역별 재료 특성과 공급망을 반영." />
      </div>
    </section>

    <section id="products" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Products</h2>
        <a href="#" className="text-sm text-emerald-300 hover:underline">View all</a>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <ProductCard
          title="EcoFlow LCA Sheet"
          desc="엑셀/구글시트 기반 자재별 탄소계산 템플릿 + 가이드북."
          price="$79"
          badge="Best for Architects"
          cta="Buy on Gumroad"
        />
        <ProductCard
          title="Revit Sustainable Library (Beta)"
          desc="저탄소 자재 패밀리 & 디테일 템플릿. 초기 설계에 최적."
          price="$99"
          badge="BIM"
          cta="Download"
        />
        <ProductCard
          title="EcoFlow Pro SaaS"
          desc="실시간 LCA 비교 플랫폼 — 설계 결정 속도 10배 향상."
          price="$29 / mo"
          badge="Coming Soon"
          cta="Join Waitlist"
        />
      </div>
    </section>

    <section id="courses" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Courses</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <ProductCard title="AI Eco Design Fundamentals" desc="AI × 건축 설계의 핵심 개념을 90분에." price="Free" cta="Start" />
        <ProductCard title="AI + LCA Masterclass" desc="실전 LCA 워크플로우: Revit · Sheets · ChatGPT." price="$129" cta="Enroll" />
        <ProductCard title="Sustainability Design Pro (Certificate)" desc="프로 인증 트랙 — 포트폴리오 포함." price="$249" cta="Apply" />
      </div>
    </section>

    <section id="research" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Research & Insights</h2>
      <div className="grid md:grid-cols-3 gap-4 text-sm">
        <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
          <div className="text-white font-semibold">AI in Data Center Design</div>
          <p className="text-slate-300 mt-2">수직형(Vertical) 데이터센터와 폐열 재이용(Heat Reuse) 전략.</p>
          <a className="text-emerald-300 text-xs mt-3 inline-block" href="#">Read</a>
        </div>
        <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
          <div className="text-white font-semibold">Low-Carbon Material Innovations</div>
          <p className="text-slate-300 mt-2">CLT, 저탄소 콘크리트, 재생 알루미늄 외피 비교.</p>
          <a className="text-emerald-300 text-xs mt-3 inline-block" href="#">Read</a>
        </div>
        <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
          <div className="text-white font-semibold">Housing × Micro-Agritech</div>
          <p className="text-slate-300 mt-2">거주·생산·교육이 결합된 모듈러 주거 프로토타입.</p>
          <a className="text-emerald-300 text-xs mt-3 inline-block" href="#">Read</a>
        </div>
      </div>
    </section>

    <section id="consulting" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Consulting</h2>
          <p className="mt-3 text-slate-300">개발사·설계사·공공부문을 위한 AI 지속가능 설계 자문. 초기계획, 프로토타입, LCA 보고서 자동화까지 전 과정 지원합니다.</p>
          <ul className="mt-4 text-slate-200 text-sm space-y-2 list-disc pl-5">
            <li>데이터센터 · 물류캠퍼스 · 대규모 주거</li>
            <li>AI+LCA 초기 의사결정 프레임워크</li>
            <li>표준/BOD 정립, 다분야 조율</li>
          </ul>
          <div className="mt-6">
            <CTA>Request Proposal</CTA>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-slate-300">Sample KPI (Quarter)</div>
          <div className="mt-3 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl bg-slate-950/50 p-4">
              <div className="text-emerald-300 font-semibold text-xl">12</div>
              <div className="text-[11px] text-slate-300">Projects</div>
            </div>
            <div className="rounded-xl bg-slate-950/50 p-4">
              <div className="text-emerald-300 font-semibold text-xl">28%</div>
              <div className="text-[11px] text-slate-300">CO₂e ↓</div>
            </div>
            <div className="rounded-xl bg-slate-950/50 p-4">
              <div className="text-emerald-300 font-semibold text-xl">4.7★</div>
              <div className="text-[11px] text-slate-300">Client NPS</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="waitlist" className="mx-auto max-w-3xl px-4 py-16">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-white/5 p-8 text-center">
        <EcoFlowLogo size={52} />
        <h3 className="mt-4 text-2xl font-semibold text-white">Join the EcoFlow Pro Waitlist</h3>
        <p className="mt-2 text-slate-300">출시 소식을 가장 먼저 받고, 베타 초대와 얼리버드 혜택을 받아보세요.</p>
        <form className="mt-6 mx-auto flex max-w-md gap-2" onSubmit={(e) => e.preventDefault()}>
          <input className="flex-1 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Your email"/>
          <button className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900">Notify me</button>
        </form>
      </div>
    </section>

    <footer id="contact" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div className="col-span-2">
          <EcoFlowLogo size={44} />
          <p className="mt-3 text-slate-300 max-w-md">AI × Architecture × Sustainability. From data to decisions — EcoFlow builds a carbon-smart design future.</p>
        </div>
        <div>
          <div className="text-white font-semibold mb-2">Contact</div>
          <ul className="text-slate-300 space-y-1">
            <li>hello@ecoai.pro</li>
            <li>Seattle, WA</li>
            <li><a className="hover:underline" href="https://www.linkedin.com/in/jeehee-hong-165b08341" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-2">Legal</div>
          <ul className="text-slate-300 space-y-1">
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
      <div className="text-xs text-slate-400 text-center pb-8">© {new Date().getFullYear()} AI EcoFlow. All rights reserved.</div>
    </footer>
  </div>
  );
}
