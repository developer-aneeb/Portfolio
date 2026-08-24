import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowRight, CheckCircle2, Cpu, Sparkles, Layers, ShieldCheck, Database, LineChart, Activity, BrainCircuit } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function Projects() {
  const projects = [
    {
      title: "FinSight — AI-Driven Personal Finance Manager",
      tagline: "Intelligent expense tracking & automated budget anomaly detection",
      description: "A production personal finance web platform that processes multi-account transactions, categorizes expenses automatically, and leverages LLM-driven budget heuristics to flag unsustainable spending trends.",
      metrics: "Sub-200ms query latency • Automated transaction classification",
      tech: ["TypeScript", "Next.js", "React", "Supabase", "Tailwind CSS"],
      icon: LineChart,
      color: "from-emerald-500/20 to-teal-500/20",
      accent: "text-emerald-400",
      demo: "https://github.com/developer-aneeb/FinSight",
      github: "https://github.com/developer-aneeb/FinSight"
    },
    {
      title: "MediTrack — Healthcare & Medication System",
      tagline: "End-to-end patient prescription schedule & dosage tracking",
      description: "Full-stack MERN application engineered for patients and clinic staff to organize complex multi-drug regimens with real-time reminder workflows and comprehensive audit histories.",
      metrics: "99.9% notification uptime • Robust role-based patient access",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
      icon: Activity,
      color: "from-rose-500/20 to-red-500/20",
      accent: "text-rose-400",
      demo: "https://github.com/developer-aneeb/MediTrack",
      github: "https://github.com/developer-aneeb/MediTrack"
    },
    {
      title: "StoneFusionHub — Marketplace Platform",
      tagline: "Scalable B2B construction materials procurement engine",
      description: "Multi-role marketplace architecture featuring real-time inventory management, price matching, and dynamic order pipeline optimization with granular PostgreSQL row-level security.",
      metrics: "Multi-tenant role isolation • Real-time inventory sync",
      tech: ["Next.js", "PostgreSQL", "Supabase", "React", "Tailwind CSS"],
      icon: Layers,
      color: "from-purple-500/20 to-indigo-500/20",
      accent: "text-purple-400",
      demo: "https://github.com/developer-aneeb",
      github: "https://github.com/developer-aneeb"
    },
    {
      title: "Action Recognition — CNN + LSTM Architecture",
      tagline: "Spatio-temporal human action classification in video streams",
      description: "Deep learning pipeline combining 2D Convolutional neural nets for frame-level feature extraction with Long Short-Term Memory recurrent networks for temporal sequence understanding.",
      metrics: "88.6% Test Accuracy on multi-class video action benchmarks",
      tech: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN", "LSTM"],
      icon: BrainCircuit,
      color: "from-amber-500/20 to-orange-500/20",
      accent: "text-amber-400",
      demo: "https://github.com/developer-aneeb/Action_Recognition_CNN_LSTM",
      github: "https://github.com/developer-aneeb/Action_Recognition_CNN_LSTM"
    },
    {
      title: "Applied AI & ML Internship Portfolio",
      tagline: "BERT text classifiers, predictive models & conversational agents",
      description: "Production and research implementations delivered at DevelopersHub Corporation, spanning transformer-based NLP pipelines, healthcare risk models, and time-series forecasting algorithms.",
      metrics: "5+ distinct ML pipelines deployed • Production-ready APIs",
      tech: ["Python", "PyTorch", "Hugging Face", "FastAPI", "Pandas"],
      icon: Database,
      color: "from-blue-500/20 to-cyan-500/20",
      accent: "text-blue-400",
      demo: "https://github.com/developer-aneeb/AI-ML-Internship-Projects",
      github: "https://github.com/developer-aneeb/AI-ML-Internship-Projects"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2 block">
            Portfolio & Systems
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-4">
            Production AI pipelines, architectural decisions, and end-to-end software systems.
          </p>
        </motion.div>

        {/* 1. HERO CASE STUDY: RxEaseAI */}
        <div id="case-study" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-slate-900/80 border border-blue-500/30 p-6 sm:p-8 lg:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Case Study Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-slate-800 pb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-medium text-blue-300 mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Flagship AI Case Study</span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                  RxEaseAI — AI-Powered Prescription Interpretation System
                </h3>
                <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-3xl">
                  An intelligent computer vision and OCR pipeline that parses complex, handwritten doctor 
                  prescriptions into structured, verified medical JSON with dosage safety validations.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/20"
                  asChild
                >
                  <a href="https://rx-ease-ai-web.vercel.app" target="_blank" rel="noopener noreferrer">
                    Live Demo
                    <ExternalLink className="w-4 h-4 ml-1.5" />
                  </a>
                </Button>

                <Button
                  size="sm"
                  variant="outline"
                  className="bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-700"
                  asChild
                >
                  <a href="https://github.com/developer-aneeb/RxEaseAI_Web" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-1.5" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">94.2%</div>
                <div className="text-xs text-slate-400 mt-1">Handwriting Extraction Accuracy</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="text-2xl sm:text-3xl font-extrabold text-purple-400">&lt;1.7s</div>
                <div className="text-xs text-slate-400 mt-1">Median Pipeline Latency</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="text-2xl sm:text-3xl font-extrabold text-pink-400">65%</div>
                <div className="text-xs text-slate-400 mt-1">OCR Token Cost Reduction</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">100%</div>
                <div className="text-xs text-slate-400 mt-1">Strict JSON Schema Adherence</div>
              </div>
            </div>

            {/* Visual Architecture Diagram */}
            <div className="mb-10">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400" />
                <span>System Architecture & Vision-to-JSON Pipeline Flow</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center relative group">
                  <div className="text-[10px] font-mono uppercase text-slate-500 mb-1">Step 01</div>
                  <div className="text-xs font-bold text-slate-200">Prescription Input</div>
                  <div className="text-[11px] text-slate-400 mt-1">Mobile Camera or File Upload</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-blue-900/50 text-center relative group">
                  <div className="text-[10px] font-mono uppercase text-blue-400 mb-1">Step 02</div>
                  <div className="text-xs font-bold text-blue-300">YOLO Segmentation</div>
                  <div className="text-[11px] text-slate-400 mt-1">ROI Text Region Extraction</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center relative group">
                  <div className="text-[10px] font-mono uppercase text-slate-500 mb-1">Step 03</div>
                  <div className="text-xs font-bold text-slate-200">Pre-Processing</div>
                  <div className="text-[11px] text-slate-400 mt-1">Contrast, Binarization, Noise Clean</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-purple-900/50 text-center relative group">
                  <div className="text-[10px] font-mono uppercase text-purple-400 mb-1">Step 04</div>
                  <div className="text-xs font-bold text-purple-300">Qwen-OCR Pipeline</div>
                  <div className="text-[11px] text-slate-400 mt-1">Multi-modal Vision LLM Parsing</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center relative group">
                  <div className="text-[10px] font-mono uppercase text-slate-500 mb-1">Step 05</div>
                  <div className="text-xs font-bold text-slate-200">FastAPI & Schema</div>
                  <div className="text-[11px] text-slate-400 mt-1">Pydantic Validation & Drug Safety</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-emerald-900/50 text-center relative group">
                  <div className="text-[10px] font-mono uppercase text-emerald-400 mb-1">Step 06</div>
                  <div className="text-xs font-bold text-emerald-300">Client Delivery</div>
                  <div className="text-[11px] text-slate-400 mt-1">Supabase DB + React & Flutter UI</div>
                </div>
              </div>
            </div>

            {/* Engineering Decisions & Problem Solved */}
            <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-slate-800 text-sm">
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Key Engineering Decisions</span>
                </h4>
                <ul className="space-y-2 text-slate-300 text-xs leading-relaxed">
                  <li>
                    <strong className="text-slate-100">YOLO Text Bounding:</strong> Cropping prescription text before running OCR eliminated hallucination on blank document margins and slashed token latency by 65%.
                  </li>
                  <li>
                    <strong className="text-slate-100">Asynchronous Microservice:</strong> Built with FastAPI to keep compute-heavy vision inferences independent from real-time database transactions.
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  <span>Validation & Safety Controls</span>
                </h4>
                <ul className="space-y-2 text-slate-300 text-xs leading-relaxed">
                  <li>
                    <strong className="text-slate-100">Deterministic Pydantic Schemas:</strong> Enforces structured medicine name, dosage, frequency, and instructions output with confidence thresholds.
                  </li>
                  <li>
                    <strong className="text-slate-100">Multi-Client Synchronization:</strong> Unified Supabase backend with Row Level Security supporting web (React) and mobile (Flutter) apps.
                  </li>
                </ul>
              </div>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-800/80">
              {["Python", "FastAPI", "Qwen-OCR", "YOLO Segmentation", "React.js", "Flutter", "Supabase", "OpenCV"].map(t => (
                <span key={t} className="px-3 py-1 rounded-md bg-slate-800/60 border border-slate-700 text-xs font-medium text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 2. ADDITIONAL PRODUCTION & RESEARCH PROJECTS GRID */}
        <div>
          <div className="text-left mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Additional AI & Full-Stack Systems
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Engineered across diverse domains including financial analytics, healthcare, and deep learning video classification.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex"
                >
                  <Card className="bg-slate-900/60 border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between backdrop-blur-sm rounded-2xl overflow-hidden">
                    <CardHeader className="space-y-3 pb-3">
                      <div className="flex items-center justify-between">
                        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${project.color} border border-slate-700/60`}>
                          <Icon className={`w-5 h-5 ${project.accent}`} />
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-slate-400 hover:text-white" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} code`}>
                              <Github className="w-4 h-4" />
                            </a>
                          </Button>
                        </div>
                      </div>

                      <CardTitle className="text-lg font-bold text-slate-100 group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="text-xs font-medium text-blue-400">
                        {project.tagline}
                      </div>
                      <CardDescription className="text-xs text-slate-300 leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4 pt-2">
                      <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 text-[11px] text-slate-300">
                        <span className="font-semibold text-slate-200">Impact/Metric: </span>
                        {project.metrics}
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-slate-800/70 text-slate-300 text-[10px] border border-slate-700/50"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}