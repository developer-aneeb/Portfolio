import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, Copy, Check, MessageSquare, Sparkles, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulates prompt submission response
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('dev.aneeb.rehman@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
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
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
            Let's Build Intelligent Systems Together
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mt-4">
            Whether you have an AI pipeline to architect, a full-stack product to ship, or a technical inquiry.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <Card className="bg-slate-900/70 border-slate-800 backdrop-blur-md rounded-2xl shadow-2xl p-2 sm:p-4">
              <CardHeader className="space-y-1">
                <CardTitle className="text-xl font-bold text-slate-100 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                  <span>Send a Direct Message</span>
                </CardTitle>
                <CardDescription className="text-xs text-slate-400">
                  Fill in your details below and I'll respond within 24 hours.
                </CardDescription>
              </CardHeader>

              <CardContent>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                      <Check className="w-6 h-6" />
                    </div>
                    <div className="text-base font-semibold text-emerald-300">Message Received!</div>
                    <p className="text-xs text-slate-300 max-w-md mx-auto">
                      Thank you for reaching out, {formData.name || 'there'}. I'll get back to your email shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-slate-300">Your Name</label>
                        <Input
                          type="text"
                          name="name"
                          placeholder="e.g. Sarah Connor"
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-slate-950/70 border-slate-800 text-slate-100 placeholder:text-slate-600 focus:border-blue-500 rounded-xl text-sm"
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-slate-300">Your Email</label>
                        <Input
                          type="email"
                          name="email"
                          placeholder="e.g. sarah@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-slate-950/70 border-slate-800 text-slate-100 placeholder:text-slate-600 focus:border-blue-500 rounded-xl text-sm"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Project Type or Topic</label>
                      <Input
                        type="text"
                        name="subject"
                        placeholder="e.g. Computer Vision Architecture / Full-Stack Role"
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-slate-950/70 border-slate-800 text-slate-100 placeholder:text-slate-600 focus:border-blue-500 rounded-xl text-sm"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Message</label>
                      <Textarea
                        name="message"
                        placeholder="Describe your technical requirements, opportunity, or questions..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="bg-slate-950/70 border-slate-800 text-slate-100 placeholder:text-slate-600 focus:border-blue-500 rounded-xl text-sm resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-200"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Contact Hub & Direct Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Direct Email</div>
                  <div className="text-sm font-medium text-slate-200">dev.aneeb.rehman@gmail.com</div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleCopyEmail}
                  className="flex-1 bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-700 text-xs rounded-xl"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 mr-1.5" />
                      Copy Email
                    </>
                  )}
                </Button>

                <Button
                  size="sm"
                  className="flex-1 bg-blue-600/80 hover:bg-blue-500 text-white text-xs rounded-xl"
                  asChild
                >
                  <a href="mailto:dev.aneeb.rehman@gmail.com">
                    Open Mailer
                  </a>
                </Button>
              </div>
            </div>

            {/* Social & Professional Presence Links */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm shadow-xl space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                Professional Channels
              </div>

              <a
                href="https://github.com/developer-aneeb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-200 group-hover:text-white">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-200 group-hover:text-blue-300">GitHub Profile</div>
                    <div className="text-xs text-slate-500">@developer-aneeb</div>
                  </div>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-slate-200">View Repos →</span>
              </a>

              <a
                href="https://www.linkedin.com/in/aneeb-ur-rehman-528a50299/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-200 group-hover:text-blue-300">LinkedIn Profile</div>
                    <div className="text-xs text-slate-500">Aneeb Ur Rehman</div>
                  </div>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-slate-200">Connect →</span>
              </a>
            </div>

            {/* Location & Status Card */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Islamabad, Pakistan (UTC+5)</span>
              </div>
              <span className="text-emerald-400 font-medium">Remote & Global Available</span>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-8 border-t border-slate-800/80 text-xs text-slate-500 space-y-2"
        >
          <p>© 2026 ANEEB UR REHMAN • Full-Stack AI Engineer</p>
          <p className="text-slate-600">
            Architected with React, TypeScript, Tailwind CSS & Motion. Built for production-ready AI systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
