"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Camera, Lock, Bell, Cpu, Zap } from 'lucide-react';

const products = [
    {
        title: 'AI Surveillance System',
        category: 'Monitoring',
        description: 'Advanced 4K thermal cameras with human and vehicle detection algorithms.',
        icon: Camera,
        color: 'bg-blue-500',
    },
    {
        title: 'Smart Access Control',
        category: 'Security',
        description: 'Biometric and RFID-based entry systems with cloud management.',
        icon: Lock,
        color: 'bg-indigo-500',
    },
    {
        title: 'Home Automation Hub',
        category: 'Automation',
        description: 'Centrally manage lighting, climate, and security from a single interface.',
        icon: Cpu,
        color: 'bg-purple-500',
    },
    {
        title: 'Fire Safety Systems',
        category: 'Protection',
        description: 'Intelligent smoke and heat detectors with automatic emergency alerts.',
        icon: Shield,
        color: 'bg-rose-500',
    },
    {
        title: 'Intrusion Detection',
        category: 'Security',
        description: 'Invisible laser curtains and glass-break sensors for comprehensive perimeter safety.',
        icon: Bell,
        color: 'bg-amber-500',
    },
    {
        title: 'Energy Management',
        category: 'Lifestyle',
        description: 'Smart meters and power control systems to optimize energy consumption.',
        icon: Zap,
        color: 'bg-emerald-500',
    },
];

export default function Products() {
    return (
        <section id="products" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4"
                    >
                        Our Products
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        Innovative Solutions For <br />
                        <span className="text-blue-600">Every Environment</span>
                    </motion.h3>
                    <p className="text-lg text-slate-600">
                        We provide state-of-the-art hardware and software integrated seamlessly to provide
                        maximum security and convenience for your space.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group"
                        >
                            <div className={`${product.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                                <product.icon className="w-8 h-8" />
                            </div>
                            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2 block">{product.category}</span>
                            <h4 className="text-2xl font-bold text-slate-900 mb-4">{product.title}</h4>
                            <p className="text-slate-600 leading-relaxed">
                                {product.description}
                            </p>
                            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center text-slate-400 group-hover:text-blue-600 transition-colors font-semibold">
                                <span>Learn More</span>
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
