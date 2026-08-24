import React from 'react';
import { motion } from 'motion/react';
import { Brain, Cpu, Server, Layout, Database, Cloud, Check } from 'lucide-react';

export function TechStack() {
  const domains = [
    {
      category: "Computer Vision & AI Engineering",
      icon: Brain,
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/30",
      description: "Pipeline architecture for image understanding, OCR, and transformer-based text models.",
      skills: [
        "YOLO Segmentation & Detection",
        "Qwen-OCR & Vision LLMs",
        "PyTorch & TensorFlow",
        "OpenCV & Image Preprocessing",
        "BERT & Text Classification",
        "Hugging Face Transformers"
      ]
    },
    {
      category: "Backend & Microservices",
      icon: Server,
      color: "from-purple-500/20 to-indigo-500/20",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/30",
      description: "High-throughput asynchronous APIs and type-safe validation layers.",
      skills: [
        "FastAPI (Python)",
        "Node.js & Express.js",
        "RESTful API Design",
        "Pydantic Schema Validation",
        "Asynchronous Task Workers",
        "JWT & Role-Based Auth"
      ]
    },
    {
      category: "Frontend & UI Systems",
      icon: Layout,
      color: "from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-400",
      borderColor: "border-pink-500/30",
      description: "Modern, reactive web applications with clean state management.",
      skills: [
        "TypeScript & JavaScript (ES6+)",
        "React.js & Next.js",
        "Tailwind CSS",
        "Responsive & Adaptive UI",
        "Motion & Micro-interactions",
        "Client State Management"
      ]
    },
    {
      category: "Databases & Cloud Deployment",
      icon: Database,
      color: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-400",
      borderColor: "border-emerald-500/30",
      description: "Reliable persistent storage, security policies, and production deployment.",
      skills: [
        "PostgreSQL & SQL",
        "Supabase (Auth, RLS, Storage)",
        "MongoDB & Mongoose",
        "Git & GitHub Actions",
        "Vercel & Render Cloud",
        "Linux Environment & Docker basics"
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-pink-400 mb-2 block">
            Technical Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
            Engineering Capabilities & Stack
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-4">
            Curated tools and frameworks used to engineer resilient, end-to-end AI systems.
          </p>
        </motion.div>

        {/* Matrix Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <motion.div
                key={domain.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${domain.color} border ${domain.borderColor}`}>
                      <Icon className={`w-5 h-5 ${domain.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-100">{domain.category}</h3>
                      <p className="text-xs text-slate-400 mt-0.5">{domain.description}</p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid sm:grid-cols-2 gap-2.5 my-6">
                    {domain.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs font-medium text-slate-300"
                      >
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 font-mono">
                  PRODUCTION TESTED & VERIFIED
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
