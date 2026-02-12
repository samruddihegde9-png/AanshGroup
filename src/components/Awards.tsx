"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Medal } from 'lucide-react';

const awards = [
    {
        year: '2024',
        title: 'Innovation in Security',
        organization: 'Tech Excellence Awards',
        icon: Trophy,
    },
    {
        year: '2023',
        title: 'Best Integration Partner',
        organization: 'Global Security Forum',
        icon: Award,
    },
    {
        year: '2023',
        title: 'Top 10 Security Firms',
        organization: 'Business Review',
        icon: Star,
    },
    {
        year: '2022',
        title: 'Customer Choice Award',
        organization: 'Consumer Safety Council',
        icon: Medal,
    },
];

export default function Awards() {
    return (
        <section id="awards" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-12">
                    <div className="max-w-2xl text-center md:text-left">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4"
                        >
                            Recognition
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                        >
                            Excellence Recognized By <br />
                            <span className="text-blue-600">The Industry</span>
                        </motion.h3>
                        <p className="text-lg text-slate-600">
                            Our commitment to quality and innovation has earned us numerous accolades
                            from industry leaders and safety organizations.
                        </p>
                    </div>
                    <div className="bg-blue-600 p-8 rounded-[3rem] text-white flex items-center space-x-6">
                        <Trophy className="w-16 h-16 opacity-50" />
                        <div>
                            <div className="text-4xl font-extrabold">12+</div>
                            <div className="text-blue-100 font-medium uppercase tracking-wider">Industry Awards</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <award.icon className="w-24 h-24" />
                            </div>
                            <div className="text-blue-600 font-bold mb-4">{award.year}</div>
                            <h4 className="text-xl font-bold text-slate-900 mb-2">{award.title}</h4>
                            <p className="text-slate-500 text-sm font-medium">{award.organization}</p>
                            <div className="mt-8">
                                <award.icon className="w-8 h-8 text-blue-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
