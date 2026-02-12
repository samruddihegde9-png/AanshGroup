"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Target, Eye, Users } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4"
                        >
                            Who We Are
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 mb-8"
                        >
                            The Future Of <br />
                            <span className="text-blue-600">Secure Living</span>
                        </motion.h3>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                            The future of secure living lies in intelligent integration—where automation, AI surveillance, fire safety, networking, and access control operate as one seamless ecosystem. Modern spaces are no longer defined by walls alone, but by the intelligence that protects and manages them.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            {[
                                'AI-Powered Surveillance',
                                'Smart Automation',
                                'Seamless Integration',
                                'Access Control',
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-3 text-slate-700 font-semibold">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:row space-y-6 sm:space-y-0 sm:space-x-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-100 p-3 rounded-xl shrink-0">
                                    <Target className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Our Mission</h4>
                                    <p className="text-sm text-slate-500 tracking-tight">To provide comprehensive security solutions that protect lives and property through advanced technology and exceptional service.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-indigo-100 p-3 rounded-xl shrink-0">
                                    <Eye className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Our Vision</h4>
                                    <p className="text-sm text-slate-500 tracking-tight">To be the most trusted security partner for homes and businesses across the region.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl overflow-hidden relative shadow-2xl">
                            {/* Abstract decorative elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
                            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

                            <div className="absolute inset-0 flex items-center justify-center p-12">
                                <div className="text-center text-white">
                                    <Users className="w-24 h-24 mx-auto mb-6 opacity-80" />
                                    <div className="text-6xl font-black mb-2 tracking-tighter">14</div>
                                    <div className="text-xl font-medium uppercase tracking-widest opacity-80">Years of Experience</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
