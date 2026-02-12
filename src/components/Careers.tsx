"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Heart, Globe, Lightbulb, ArrowRight } from 'lucide-react';

const positions = [
    {
        title: 'Security System Engineer',
        location: 'Mumbai / On-site',
        type: 'Full-time',
    },
    {
        title: 'Automation Specialist',
        location: 'Bangalore / Hybrid',
        type: 'Full-time',
    },
    {
        title: 'Safety Compliance Officer',
        location: 'Remote',
        type: 'Contract',
    },
];

const benefits = [
    {
        title: 'Global Impact',
        description: 'Work on cutting-edge security projects that protect lives worldwide.',
        icon: Globe,
    },
    {
        title: 'Innovative Culture',
        description: 'A workspace that encourages new ideas and unconventional thinking.',
        icon: Lightbulb,
    },
    {
        title: 'Health & Wellness',
        description: 'Comprehensive health plans and wellness programs for all employees.',
        icon: Heart,
    },
];

export default function Careers() {
    return (
        <section id="careers" className="py-24 bg-slate-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4"
                        >
                            Join Our Team
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
                        >
                            Shape The Future of <br />
                            <span className="text-blue-400">Secure Living</span>
                        </motion.h3>
                        <p className="text-xl text-slate-400 mb-12 max-w-lg leading-relaxed">
                            We're looking for passionate individuals who want to redefine how the world
                            thinks about safety and automation.
                        </p>

                        <div className="space-y-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start space-x-6"
                                >
                                    <div className="bg-blue-500/10 p-4 rounded-2xl border border-blue-500/20">
                                        <benefit.icon className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                                        <p className="text-slate-400">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-600 rounded-[3rem] blur-[120px] opacity-20" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-8 sm:p-12 rounded-[3rem]"
                        >
                            <h4 className="text-2xl font-bold mb-8 flex items-center">
                                <Briefcase className="w-6 h-6 mr-3 text-blue-400" />
                                Open Opportunities
                            </h4>
                            <div className="space-y-6">
                                {positions.map((pos, index) => (
                                    <div key={index} className="group cursor-pointer">
                                        <div className="flex justify-between items-center p-6 bg-slate-900/50 border border-slate-700 rounded-2xl group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
                                            <div>
                                                <h5 className="font-bold text-lg mb-1">{pos.title}</h5>
                                                <div className="text-sm text-slate-400 group-hover:text-blue-100 flex items-center">
                                                    <span>{pos.location}</span>
                                                    <span className="mx-2">•</span>
                                                    <span>{pos.type}</span>
                                                </div>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white transform group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-10 py-5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20">
                                View All Positions
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
