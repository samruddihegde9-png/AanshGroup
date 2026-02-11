"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-900">
            {/* Background Orbs */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-8">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-400 text-sm font-medium tracking-wide uppercase">Innovating the Digital Frontier</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
                        Next-Gen Tech For <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                            Modern Businesses
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-10 leading-relaxed">
                        We build high-performance web applications, mobile experiences, and AI-driven solutions that scale with your vision.
                    </p>

                    <div className="flex flex-col sm:row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link
                            href="#portfolio"
                            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center group hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/25"
                        >
                            View Our Work
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#services"
                            className="w-full sm:w-auto px-8 py-4 bg-slate-800 text-white rounded-2xl font-bold hover:bg-slate-700 transition-all border border-slate-700"
                        >
                            Explore Services
                        </Link>
                    </div>
                </motion.div>

                {/* Stats / Features Mini */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-10"
                >
                    {[
                        { label: 'Project Success', value: '98%' },
                        { label: 'Active Clients', value: '50+' },
                        { label: 'Code Quality', value: 'A+' },
                        { label: 'Support', value: '24/7' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-slate-500 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
