"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle } from 'lucide-react';

const projects = [
    {
        title: 'Luxury Villa Automation',
        client: 'Private Client, Bangalore',
        description: 'Complete smart home integration including lighting, climate, and high-end security.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
        tags: ['Automation', 'Security'],
    },
    {
        title: 'Corporate Office Security',
        client: 'Tech Park, Mumbai',
        description: 'Advanced biometric access control and AI surveillance for a multi-story office.',
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800',
        tags: ['Security', 'AI'],
    },
    {
        title: 'Industrial Fire Safety',
        client: 'Manufacturing Plant, Pune',
        description: 'Integration of intelligent fire detection and suppression systems with real-time monitoring.',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
        tags: ['Fire Safety', 'Industrial'],
    },
    {
        title: 'Smart Apartment Complex',
        client: 'Prestige Heights',
        description: 'Community-wide safety network and automated entrance management.',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
        tags: ['Housing', 'Security'],
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl text-center md:text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4"
                        >
                            Our Projects
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                        >
                            Delivering Excellence <br />
                            <span className="text-blue-600">Across Sectors</span>
                        </motion.h3>
                        <p className="text-lg text-slate-600">
                            Explore our portfolio of successful implementations where we've transformed
                            spaces with intelligent security and automation.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-slate-900 rounded-[2.5rem] overflow-hidden aspect-[16/10] shadow-2xl"
                        >
                            {/* Image with overlay */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-tighter">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-2">{project.title}</h4>
                                <p className="text-blue-400 font-medium mb-4 flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    {project.client}
                                </p>
                                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md group-hover:text-white transition-colors">
                                    {project.description}
                                </p>

                                <div className="mt-8 flex items-center text-white font-bold group/btn cursor-pointer">
                                    <span className="border-b-2 border-transparent group-hover/btn:border-blue-500 transition-all">View Case Study</span>
                                    <ExternalLink className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform text-blue-400" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
