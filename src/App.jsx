import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Leaf,
  LineChart,
  Layers,
  Sparkles,
  Globe2,
  Database,
  Building2,
} from "lucide-react";

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
      {badge && (
        <div className="mb-3 inline-flex rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-200">
          {badge}
        </div>
      )}
      <div className="text-white text-lg font-semibold mb-1">{title}</div>
      <div className="text-slate-300 text-sm leading-relaxed mb-4">{desc}</div>
      <div className="flex items-end justify-between">
        <div className="text-emerald-300 font-semibold text-xl">{price}</div>
        <button className="rounded-xl border border-emerald-300/40 px-4 py-2 text-sm text-emerald-200 hover:bg-emerald-400/10">
          {cta}
        </button>
      </div>
    </div>
  );
}

export default function EcoFlowLanding() {
  return (
    <div className="min-h-screen w-full bg-slate-900 text-slate-100">
      {/* ======================== NAV ======================== */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          {/* NEW LOGO */}
          <div className="flex items-center gap-3">
            <img
              src="/ecoflow-logo.png"
              alt="EcoFlow AI Logo"
              className="h-12 w-auto"
            />
            <span className="text-xl font-semibold text-white">EcoFlow AI</span>
          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#courses" className="hover:text-white">Courses</a>
            <a href="#research" className="hover:text-white">Research</a>
            <a href="#consulting" className="hover:text-white">Consulting</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href="#waitlist"
            className="rounded-xl bg-white text-slate-900 text-sm px-4 py-2 font-semibold"
          >
            Join Waitlist
          </a>
        </div>
      </header>

      {/* ======================== HERO ======================== */}
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
                Design smarter. Build greener.{" "}
                <span className="text-emerald-300">With AI.</span>
              </motion.h1>
              <p className="mt-4 text-slate-300 leading-relaxed">
                EcoFlow AI는 초기 설계 단계에서{" "}
                <span className="text-white font-medium">
                  탄소·에너지·자재
                </span>
                를 실시간으로 비교하고, 최적 설계를 제안하는{" "}
                <span className="text-white font-medium">
                  AI 기반 지속가능 디자인 플랫폼
                </span>
                입니다.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <CTA>Try LCA Sheet (Free Preview)</CTA>
                <button className="rounded-2xl border border-white/15 px-5 py-3 text-slate-200 hover:bg-white/5">
                  View Demo
                </button>
              </div>
              <div className="mt-6 flex items-center gap-6 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1">
                  <Globe2 className="h-4 w-4" /> Global
                </span>
                <span className="inline-flex items-center gap-1">
                  <Database className="h-4 w-4" /> Material CO₂ DB
                </span>
                <span className="inline-flex items-center gap-1">
                  <Building2 className="h-4 w-4" /> Data Center · Housing
                </span>
              </div>
            </div>

            {/* HERO CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-3xl bg-emerald-500/10 blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-2xl">
                <div className="flex items-center justify-between">
                  <img
                    src="/ecoflow-logo.png"
                    alt="EcoFlow AI Mini Logo"
                    className="h-8 w-auto"
                  />
                  <span className="text-xs text-emerald-200">
                    EcoFlow Pro — MVP
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-xl bg-white/5 p-3">
                    <div className="text-emerald-300 text-sm font-semibold">
                      -37%
                    </div>
                    <div className="text-[10px] text-slate-300">
                      Embodied Carbon
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3">
                    <div className="text-emerald-300 text-sm font-semibold">
                      +18%
                    </div>
                    <div className="text-[10px] text-slate-300">
                      Thermal Efficiency
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3">
                    <div className="text-emerald-300 text-sm font-semibold">
                      ×10
                    </div>
                    <div className="text-[10px] text-slate-300">
                      Faster Decisions
                    </div>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl bg-slate-950/60 border border-white/10 p-4">
                  <div className="text-xs text-slate-300">
                    Prompt → Recommendation
                  </div>
                  <div className="mt-2 text-sm text-white/90 font-mono">
                    “데이터센터 외벽을 저탄소 콘크리트 vs CLT로 비교해줘.”
                  </div>
                  <div className="mt-3 text-xs text-emerald-200/90">
                    ▶ Result: CLT 외피 + 리사이클 알루미늄 루버 조합이 28% 낮은
                    CO₂e
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================== FEATURES ======================== */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-4 gap-4">
          <Feature
            icon={Leaf}
            title="Sustainable by Default"
            desc="초기 설계에서 자동으로 저탄소 옵션을 추천합니다."
          />
          <Feature
            icon={LineChart}
            title="Real-time LCA"
            desc="자재·구조·외피별 kgCO₂e를 즉시 비교."
          />
          <Feature
            icon={Layers}
            title="BIM-Ready"
            desc="Revit/IFC 데이터와 호환되는 워크플로우."
          />
          <Feature
            icon={Globe2}
            title="Global Materials DB"
            desc="지역별 재료 특성과 공급망을 반영."
          />
        </div>
      </section>

      {/* ======================== PRODUCTS, COURSES, ETC. ======================== */}
      {/* (Keep your existing Products, Courses, Research, Consulting, Footer sections here as before) */}
    </div>
  );
}
