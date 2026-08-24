import React from 'react';
import { motion } from 'motion/react';
import { Layers, ShieldCheck, Zap, Award, GraduationCap, Briefcase } from 'lucide-react';
import profileImage from 'figma:asset/profile.jpeg';

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
            Bridging AI Research & Production Web Systems
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-sm w-full">
              {/* Refined Glass Glow Border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/30 via-indigo-500/20 to-purple-500/30 blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700/60 p-3 backdrop-blur-md shadow-2xl overflow-hidden">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src={profileImage}
                    alt="Aneeb Ur Rehman - Full Stack AI Engineer"
                    className="w-full h-full object-cover object-center filter grayscale-[15%] contrast-[105%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <div className="pt-3 pb-1 px-2 text-center">
                  <div className="text-sm font-semibold text-slate-200">Aneeb Ur Rehman</div>
                  <div className="text-xs text-blue-400">Full-Stack AI & Deep Learning Engineer</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technical Story & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                I am a <strong className="text-slate-100 font-semibold">Full-Stack AI Engineer</strong> passionate 
                about moving artificial intelligence beyond offline notebooks into responsive, deterministic, 
                and secure real-world products.
              </p>
              <p>
                My expertise centers on <strong className="text-blue-300 font-medium">Computer Vision & OCR pipelines</strong>, 
                deep learning classification models, and integrating intelligent backends with modern, intuitive user interfaces 
                using <strong className="text-slate-100 font-semibold">FastAPI, React.js, TypeScript, and Supabase</strong>.
              </p>
              <p>
                During my AI/ML Engineering internship at <strong className="text-purple-300 font-medium">DevelopersHub Corporation</strong>, 
                I built production-grade NLP services, BERT classification pipelines, and contextual conversational agents, 
                grounding my approach in algorithmic rigor and low-latency system design.
              </p>
            </div>

            {/* Core Engineering Pillars */}
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <Zap className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Latency</span>
                </div>
                <div className="text-sm font-medium text-slate-200">Optimized Pipelines</div>
                <div className="text-xs text-slate-400 mt-1">Modular vision & OCR inference with pre-filtering</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-purple-400 mb-2">
                  <Layers className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Full-Stack</span>
                </div>
                <div className="text-sm font-medium text-slate-200">Type-Safe Architecture</div>
                <div className="text-xs text-slate-400 mt-1">FastAPI microservices + React/Next.js UI</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-pink-400 mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Reliability</span>
                </div>
                <div className="text-sm font-medium text-slate-200">Production AI</div>
                <div className="text-xs text-slate-400 mt-1">Schema validation & fallback parsing</div>
              </div>
            </div>

            {/* Academic & Professional Context */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-blue-400" />
                <span>BS Computer Science • Air University (2022-2026)</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-purple-400" />
                <span>AI/ML Engineering Experience • DevelopersHub</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}