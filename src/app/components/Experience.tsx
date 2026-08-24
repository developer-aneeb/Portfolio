import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "AI/ML Engineering Intern",
      company: "DevelopersHub Corporation",
      location: "Islamabad, Pakistan",
      period: "Apr 2026 - Jun 2026",
      type: "Professional Experience",
      icon: Briefcase,
      accentColor: "from-blue-500/20 to-indigo-500/20",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/30",
      achievements: [
        "Engineered BERT-based NLP text classification and sentiment models achieving 91%+ evaluation accuracy on benchmark datasets.",
        "Built contextual conversational agent pipelines with FastAPI backend microservices and structured JSON parsing.",
        "Constructed automated data cleaning, bounding box annotation, and augmentation pipelines for computer vision workflows."
      ],
      skills: ["PyTorch", "FastAPI", "BERT", "NLP", "Computer Vision", "Data Preprocessing"]
    },
    {
      title: "Bachelor of Science in Computer Science",
      company: "Air University",
      location: "Islamabad, Pakistan",
      period: "2022 - 2026",
      type: "Education & Foundations",
      icon: GraduationCap,
      accentColor: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/30",
      achievements: [
        "Core focus in Deep Learning, Computer Vision, Algorithms & Data Structures, and Distributed Database Systems.",
        "Developed full-stack capstone projects integrating custom-trained deep neural networks with modern React/Next.js interfaces.",
        "Coursework: Design & Analysis of Algorithms, Artificial Intelligence, Mobile Computing, Software Engineering, Calculus."
      ],
      skills: ["Algorithms", "Deep Learning", "Full-Stack Web", "Database Design", "Software Architecture"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2 block">
            Career & Education
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
            Experience & Academic Background
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-4">
            Hands-on machine learning engineering combined with strong algorithmic computer science fundamentals.
          </p>
        </motion.div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Timeline Bullet Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-5 h-5 rounded-full bg-slate-950 border-2 border-blue-400 flex items-center justify-center shadow-md shadow-blue-500/30">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                </div>

                {/* Card Container */}
                <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-all duration-300 shadow-xl">
                  {/* Header Row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${exp.accentColor} border ${exp.borderColor}`}>
                        <Icon className={`w-5 h-5 ${exp.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-100">{exp.title}</h3>
                        <div className="text-sm font-medium text-blue-400">{exp.company}</div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-slate-400 space-y-1">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 font-medium">
                        <Calendar className="w-3 h-3 text-purple-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="inline-flex items-center gap-1 text-slate-400 text-[11px] pt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet Achievements */}
                  <div className="space-y-2.5 my-5">
                    {exp.achievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-slate-300 text-sm leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/60 text-xs font-medium text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}