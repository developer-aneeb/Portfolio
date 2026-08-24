import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Layers, Cpu, Code2, Terminal } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 relative">
      <div className="text-center max-w-5xl mx-auto">
        {/* Availability / Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-md mb-8 shadow-lg shadow-blue-500/5"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-slate-300">
            Available for Full-Stack AI Engineering Roles
          </span>
        </motion.div>

        {/* Main Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-4 mb-6"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100">
            ANEEB UR REHMAN
          </h1>
          <div className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Full-Stack AI Engineer
          </div>
        </motion.div>

        {/* Narrative & Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-8"
        >
          Architecting production AI products that transform complex vision models, OCR pipelines, 
          and LLMs into scalable, high-performance web applications.
        </motion.p>

        {/* Core Pillars / Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10 max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs font-medium text-slate-300 backdrop-blur-sm">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>Computer Vision & OCR Pipelines</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs font-medium text-slate-300 backdrop-blur-sm">
            <Code2 className="w-3.5 h-3.5 text-purple-400" />
            <span>Full-Stack Architecture (React + FastAPI)</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs font-medium text-slate-300 backdrop-blur-sm">
            <Terminal className="w-3.5 h-3.5 text-pink-400" />
            <span>Applied Machine Learning & NLP</span>
          </div>
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-2.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-200 hover:shadow-blue-500/35 hover:-translate-y-0.5"
            asChild
          >
            <a href="#projects">
              Explore Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="bg-slate-900/80 hover:bg-slate-800 border-slate-700/80 text-slate-200 font-medium px-6 py-2.5 rounded-xl transition-all duration-200 hover:border-slate-600 hover:-translate-y-0.5"
            asChild
          >
            <a href="#case-study">
              <Sparkles className="w-4 h-4 mr-2 text-indigo-400" />
              View Case Study
            </a>
          </Button>

          <Button
            size="lg"
            variant="ghost"
            className="text-slate-300 hover:text-white hover:bg-slate-800/50 px-5 py-2.5 rounded-xl transition-all duration-200"
            asChild
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>

        {/* Quick Highlights / Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-slate-800/60"
        >
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm text-left">
            <div className="text-2xl font-bold text-blue-400">94%+</div>
            <div className="text-xs text-slate-400 mt-1">Prescription OCR Accuracy</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm text-left">
            <div className="text-2xl font-bold text-purple-400">&lt;1.8s</div>
            <div className="text-xs text-slate-400 mt-1">Median Pipeline Latency</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm text-left">
            <div className="text-2xl font-bold text-pink-400">6+</div>
            <div className="text-xs text-slate-400 mt-1">Production & Research Systems</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm text-left">
            <div className="text-2xl font-bold text-emerald-400">End-to-End</div>
            <div className="text-xs text-slate-400 mt-1">Full-Stack AI Deployment</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}