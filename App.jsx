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

/* UI bits */
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
    <div className="min-h-screen w-full bg-slate-900 text-slate-100" style={{ fontFamily: "'Montserrat', system-ui, sans-serif" }}>
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-white/10 shadow-md">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/ecoflow-logo.png"
              alt="EcoFlow AI Logo"
              className="h-20 w-auto object-contain"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-none">
              EcoFlow <span className="text-emerald-400">AI</span>
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#courses" className="hover:text-white">Courses</a>
            <a href="#research" className="hover:text-white">Research</a>
            <a href="#consulting" className="hover:text-white">Consulting</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#waitlist" className="rounded-xl bg-white text-slate-900 text-sm px-4 py-2 font-semibold hover:bg-emerald-400 transition">
            Join Waitlist
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw
