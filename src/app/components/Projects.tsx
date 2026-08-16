import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Bot, BarChart3, LineChart, Activity, BrainCircuit, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function Projects() {
  const projects = [
    {
      title: "RXEASEAI - AI-Powered Prescription Interpretation App",
      description: "Scans handwritten prescriptions and converts them into structured medical data with validation, recommendations, secure sharing, and history dashboards.",
      icon: Bot,
      tech: ["React.js", "Node.js", "Supabase", "Python", "FastAPI", "Flutter", "YOLO Segmentation", "Qwen-OCR"],
      gradient: "from-blue-400 to-cyan-500",
      demo: "https://rx-ease-ai.vercel.app",
      github: "https://github.com/developer-aneeb/RxEaseAI_Web"
    },
    {
      title: "FinSight - AI-Driven Personal Finance Manager",
      description: "A modern AI-driven platform to track income and expenses, enforce smart budgets, and receive data-driven AI insights.",
      icon: LineChart,
      tech: ["TypeScript", "React", "Next.js", "Tailwind CSS", "AI Insights", "Supabase"],
      gradient: "from-green-400 to-emerald-500",
      demo: "#",
      github: "https://github.com/developer-aneeb/FinSight"
    },
    {
      title: "MediTrack - Healthcare Management",
      description: "MERN stack application for managing prescriptions, medication reminders, and user profiles with an intuitive UI.",
      icon: Activity,
      tech: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript"],
      gradient: "from-rose-400 to-red-500",
      demo: "#",
      github: "https://github.com/developer-aneeb/MediTrack"
    },
    {
      title: "StoneFusionHub - Full-Stack Marketplace Platform",
      description: "Multi-role marketplace for construction materials with AI recommendations, real-time inventory, and optimized order workflows.",
      icon: BarChart3,
      tech: ["Next.js", "React", "Supabase", "PostgreSQL", "Tailwind CSS"],
      gradient: "from-purple-400 to-pink-500",
      demo: "#",
      github: "#"
    },
    {
      title: "Action Recognition using CNN & LSTM",
      description: "Deep learning model combining Convolutional Neural Networks and Long Short-Term Memory networks for video action recognition.",
      icon: BrainCircuit,
      tech: ["Python", "TensorFlow", "Keras", "CNN", "LSTM", "Computer Vision"],
      gradient: "from-orange-400 to-amber-500",
      demo: "#",
      github: "https://github.com/developer-aneeb/Action_Recognition_CNN_LSTM"
    },
    {
      title: "Applied AI & ML Projects",
      description: "A collection of Machine Learning, Data Science, and LLM engineering projects including predictive modeling, healthcare AI, and stock forecasting.",
      icon: Database,
      tech: ["Python", "Jupyter", "Machine Learning", "Data Science", "LLMs"],
      gradient: "from-indigo-400 to-blue-500",
      demo: "#",
      github: "https://github.com/developer-aneeb/AI-ML-Internship-Projects"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Production-ready AI products and platforms built for real-world workflows
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-400" asChild>
                        <a href={project.demo} aria-label={`${project.title} demo`}>
                          <ExternalLink size={16} />
                        </a>
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-400" asChild>
                        <a href={project.github} aria-label={`${project.title} GitHub`}>
                          <Github size={16} />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}