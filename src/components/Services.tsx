"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Search, Database, Cpu, Globe } from 'lucide-react';

const services = [
    {
        title: 'Web Development',
        description: 'Bespoke web applications built with Next.js, React, and cutting-edge technologies.',
        icon: <Globe className="w-8 h-8" />,
        color: 'bg-blue-500',
    },
    {
        title: 'Mobile Solutions',
        description: 'High-performance native and cross-platform mobile apps for iOS and Android.',
        icon: <Smartphone className="w-8 h-8" />,
        color: 'bg-indigo-500',
    },
    {
        title: 'UI/UX Design',
        description: 'User-centric design that balances aesthetic beauty with functional excellence.',
        icon: <Layout className="w-8 h-8" />,
        color: 'bg-purple-500',
    },
    {
        title: 'AI & Data Science',
        description: 'Leveraging machine learning and data analytics to drive business intelligence.',
        icon: <Cpu className="w-8 h-8" />,
        color: 'bg-cyan-500',
    },
    {
        title: 'SEO & Marketing',
        description: 'Comprehensive digital strategies to boost your online visibility and growth.',
        icon: <Search className="w-8 h-8" />,
        color: 'bg-emerald-500',
    },
    {
        title: 'Backend Systems',
        description: 'Robust, scalable, and secure server-side architectures for complex needs.',
        icon: <Database className="w-8 h-8" />,
        color: 'bg-rose-500',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4"
                    >
                        What We Offer
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                    >
                        Our Core Expertise
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-3xl mx-auto text-lg text-slate-600"
                    >
                        We provide comprehensive technology solutions tailored to meet the unique challenges of your industry.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all hover:shadow-2xl hover:shadow-blue-500/10 group"
                        >
                            <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>
                            <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
