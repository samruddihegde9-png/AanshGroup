"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

const projects = [
    {
        title: 'E-Commerce Platform',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
        description: 'A full-featured online store with real-time inventory and secure payments.',
    },
    {
        title: 'Health & Fitness App',
        category: 'Mobile App',
        image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800',
        description: 'Cross-platform mobile application for personalized workout tracking.',
    },
    {
        title: 'Fintech Dashboard',
        category: 'UI/UX Design',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        description: 'Complex data visualization platform for financial analytics and reporting.',
    },
    {
        title: 'Real Estate Portal',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
        description: 'Property listing and management system with advanced search filters.',
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:row justify-between items-end mb-16 gap-8 text-center md:text-left">
                    <div className="max-w-2xl mx-auto md:mx-0">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4"
                        >
                            Our Portfolio
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900"
                        >
                            Delivering Projects That <br />
                            <span className="text-blue-600">Make An Impact</span>
                        </motion.h3>
                    </div>
                    <Link
                        href="#contact"
                        className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all"
                    >
                        Start Your Project
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-[2rem] bg-slate-100 aspect-[16/10]"
                        >
                            {/* Image Placeholder with Gradient Overlay */}
                            <div
                                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                                style={{ backgroundImage: `url(${project.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-2">{project.category}</span>
                                <h4 className="text-3xl font-bold text-white mb-3 tracking-tight">{project.title}</h4>
                                <p className="text-slate-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    <button className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-white/20">
                                        <Github className="w-5 h-5" />
                                    </button>
                                    <button className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-white/20">
                                        <ExternalLink className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
