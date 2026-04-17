import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Target, Lightbulb, Users, BookOpen, Clock, GitBranch,
  GraduationCap, Mail, Phone, Send, ChevronRight, Globe
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const missionVision = [
  {
    title: "Mission",
    description:
      "To transform secondary education in Malawi by providing equitable access to a comprehensive, free digital learning platform that enhances student engagement, improves academic performance, and fosters lifelong learning for all, regardless of geographic or socioeconomic barriers.",
    icon: Target,
    accent: "hsl(43, 96%, 52%)", // brand-gold
  },
  {
    title: "Vision",
    description:
      "To be the leading catalyst for educational equity in Malawi, where every secondary student has the tools and opportunity to achieve their full academic potential, thereby contributing to an educated, innovative, and prosperous nation as envisioned by Malawi 2063.",
    icon: Lightbulb,
    accent: "hsl(174, 72%, 28%)", // brand-teal
  },
];

const values = [
  { title: "Equity & Inclusion", description: "We believe every student deserves access to quality education, regardless of background or location.", icon: Users, num: "01" },
  { title: "Quality & Relevance", description: "We uphold the highest standards of educational content, aligned to Malawi's national curriculum.", icon: GraduationCap, num: "02" },
  { title: "Innovation & Adaptability", description: "We embrace technology as a powerful tool for change, continuously evolving our platform.", icon: GitBranch, num: "03" },
  { title: "Collaboration & Partnership", description: "We achieve more together — working with teachers, students, and communities.", icon: BookOpen, num: "04" },
];

const philosophyPoints = [
  {
    title: "Active Recall & Spaced Repetition",
    text: "Through interactive quizzes and progressive learning paths, we help students strengthen memory retention and master concepts over time.",
    icon: Clock,
  },
  {
    title: "Multimodal Learning",
    text: "We cater to diverse learning styles by offering content in various formats — text, video, audio, and interactive exercises.",
    icon: Lightbulb,
  },
  {
    title: "Formative Assessment",
    text: "Our platform provides instant feedback and detailed analytics so students and teachers can track progress in real time.",
    icon: GraduationCap,
  },
  {
    title: "Contextualized Learning",
    text: "By using local examples and offering content in both English and Chichewa, we make learning deeply relevant.",
    icon: Globe,
  },
];

const stats = [
  { value: "40+", label: "Subjects Covered" },
  { value: "Free", label: "Always & Forever" },
  { value: "JCE & MSCE", label: "Curriculum Aligned" },
  { value: "Malawi", label: "Nationwide Reach" },
];

export default function Abouts() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-28 pt-24 pb-20 overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-yellow-200/20 to-yellow-300/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-teal-200/20 to-teal-300/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

        <div className="relative max-w-4xl">
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp} custom={0}
            className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 text-xs text-yellow-600 font-semibold tracking-widest uppercase mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
            About Learn Malawi
          </motion.div>

          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-8"
          >
            Free education for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-teal-400">
              every Malawian
            </span>{" "}
            student.
          </motion.h1>

          <motion.p
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mb-12"
          >
            Learn Malawi is a free digital education platform dedicated to one powerful goal: quality education for every secondary school student in Malawi. We provide curriculum-aligned resources for JCE and MSCE learners, with accessible, engaging content built for real classroom success.
          </motion.p>

          <motion.div
            initial="hidden" animate="visible" variants={fadeUp} custom={3}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white px-6 py-6 text-center hover:bg-gradient-to-br hover:from-yellow-50 hover:to-orange-50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-2xl md:text-3xl font-black text-yellow-500 mb-1 hover:text-yellow-600 transition-colors duration-300">{s.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="px-6 md:px-16 lg:px-28 py-24 relative">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="mb-16">
          <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-3">Purpose</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Mission & Vision</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {missionVision.map((mv, i) => {
            const Icon = mv.icon;
            return (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.5}
                className="group relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-10 hover:bg-gradient-to-br hover:from-yellow-50 hover:to-teal-50 hover:border-yellow-300 hover:shadow-xl hover:shadow-yellow-100/50 transition-all duration-500 overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 rounded-t-3xl"
                  style={{ background: `linear-gradient(90deg, ${mv.accent}, transparent)` }}
                />
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
                  style={{ background: `${mv.accent}15`, border: `1px solid ${mv.accent}30` }}
                >
                  <Icon size={24} style={{ color: mv.accent }} />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight text-gray-900">{mv.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{mv.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 md:px-16 lg:px-28 py-24 bg-gray-50 border-y border-gray-100">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
          <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-3">What Drives Us</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Our Values</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.15}
                className="group bg-white border border-gray-200 rounded-2xl p-7 hover:bg-gradient-to-br hover:from-yellow-50 hover:to-orange-50 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-200/50 hover:scale-105 transition-all duration-500 cursor-default"
              >
                <div className="text-xs font-black text-gray-200 mb-6 text-right tabular-nums">{val.num}</div>
                <div className="w-10 h-10 rounded-xl bg-yellow-100 border border-yellow-200 flex items-center justify-center mb-5 group-hover:bg-yellow-200 group-hover:border-yellow-300 group-hover:scale-110 transition-all duration-300">
                  <Icon size={18} className="text-yellow-600 group-hover:text-yellow-700 transition-colors duration-300" />
                </div>
                <h3 className="text-base font-bold mb-3 leading-tight text-gray-900">{val.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{val.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="px-6 md:px-16 lg:px-28 py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
          <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-3">How We Teach</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Educational Philosophy</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {philosophyPoints.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.15}
                className="flex gap-6 bg-white border border-gray-200 rounded-2xl p-8 hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-200/50 hover:scale-102 transition-all duration-500"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-100 border border-teal-200 flex items-center justify-center mt-0.5 group-hover:bg-teal-200 group-hover:border-teal-300 group-hover:scale-110 transition-all duration-300">
                  <Icon size={18} className="text-teal-600 group-hover:text-teal-700 transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-2 text-gray-900">{pt.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{pt.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 md:px-16 lg:px-28 py-24 border-t border-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-3">Reach Out</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-10 text-sm">
              Have questions, suggestions, or want to partner with us? We'd love to hear from you.
            </p>
            <div className="space-y-5">
              {[
                { label: "Mr Willard Zimba", value: "+265 997 67 47 58", icon: Phone },
                { label: "Mr Innocent Gomwa", value: "+265 883 36 08 44", icon: Phone },
                { label: "General Inquiries", value: "learn@malawi.edu.mw", icon: Mail },
              ].map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-100 group-hover:border-yellow-300 group-hover:scale-110 transition-all duration-300">
                      <Icon size={16} className="text-gray-600 group-hover:text-yellow-600 transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">{c.label}</div>
                      <div className="text-sm font-semibold text-gray-900">{c.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.2}>
            {sent ? (
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-12 text-center">
                <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Message Sent!</h3>
                <p className="text-gray-600 text-sm">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: "name", placeholder: "Your Name", type: "text" },
                  { name: "email", placeholder: "Your Email", type: "email" },
                ].map((f) => (
                  <input
                    key={f.name}
                    type={f.type}
                    placeholder={f.placeholder}
                    required
                    value={formData[f.name as keyof typeof formData]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, [f.name]: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:bg-white focus:ring-2 focus:ring-yellow-100 focus:shadow-lg transition-all duration-300"
                  />
                ))}
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:bg-white focus:ring-2 focus:ring-yellow-100 focus:shadow-lg transition-all duration-300 resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-4 rounded-xl text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group hover:shadow-lg hover:shadow-yellow-200/50 hover:scale-105"
                >
                  Send Message
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer strip */}
      <div className="border-t border-gray-100 px-6 md:px-16 lg:px-28 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-xs">© 2026 Learn Malawi. Free education for every student.</p>
        <p className="text-gray-500 text-xs">Advancing Malawi 2063</p>
      </div>
    </div>
  );
}