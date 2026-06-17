import React from 'react';
import { motion } from 'motion/react';

export function TechStack() {
  const techCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", level: 92, icon: "🧱" },
        { name: "CSS", level: 90, icon: "🎨" },
        { name: "Bootstrap", level: 86, icon: "🧩" },
        { name: "Tailwind CSS", level: 92, icon: "🌬️" },
        { name: "JavaScript", level: 90, icon: "⚡" },
        { name: "React.js", level: 92, icon: "⚛️" },
        { name: "Next.js", level: 88, icon: "▲" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Express.js", level: 88, icon: "🚀" },
        { name: "Python", level: 92, icon: "🐍" },
        { name: "FastAPI", level: 87, icon: "⚡" },
        { name: "RESTful APIs", level: 90, icon: "🔗" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", level: 88, icon: "🍃" },
        { name: "PostgreSQL", level: 90, icon: "🐘" },
        { name: "Supabase", level: 88, icon: "🧪" },
        { name: "Firebase", level: 86, icon: "🔥" },
        { name: "SQL", level: 90, icon: "🗃️" }
      ]
    },
    {
      category: "AI / ML",
      skills: [
        { name: "YOLO Segmentation", level: 88, icon: "🎯" },
        { name: "Qwen-OCR & Pipelines", level: 90, icon: "🔎" },
        { name: "Model Training", level: 87, icon: "🧠" },
        { name: "Preprocessing", level: 90, icon: "🧼" },
        { name: "Annotation", level: 85, icon: "📝" }
      ]
    },
    {
      category: "Tools / Deployment",
      skills: [
        { name: "Git", level: 90, icon: "🌱" },
        { name: "GitHub", level: 90, icon: "🐙" },
        { name: "npm", level: 88, icon: "📦" },
        { name: "VS Code", level: 90, icon: "🧩" },
        { name: "Render", level: 85, icon: "☁️" },
        { name: "Vercel", level: 86, icon: "▲" },
        { name: "Hugging Face", level: 84, icon: "🤗" },
        { name: "Kaggle", level: 83, icon: "📊" }
      ]
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-gray-400 text-lg">
            The stack I use to build production-ready AI products
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 15 }}
                      className="text-2xl"
                    >
                      {skill.icon}
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-purple-400 text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + index * 0.1 + 0.5 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}