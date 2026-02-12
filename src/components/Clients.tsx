"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle2, Building2, UserCheck } from 'lucide-react';

const clients = [
    {
        name: 'Prestige Group',
        category: 'Residential',
        description: 'Implemented integrated security and smart automation for luxury apartment complexes.',
        logo: Building2,
    },
    {
        name: 'Sobha Developers',
        category: 'Construction',
        description: 'Advanced surveillance and access control systems for multiple construction sites.',
        logo: Building2,
    },
    {
        name: 'Brigade Enterprises',
        category: 'Commercial',
        description: 'Comprehensive fire safety and building management solutions for office towers.',
        logo: Building2,
    },
    {
        name: 'Resident Associations',
        category: 'Housing',
        description: 'Community-wide safety networks and AI-powered entrance monitoring systems.',
        logo: UserCheck,
    },
];

export default function Clients() {
    return (
        <section id="clients" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4"
                        >
                            Our Trust
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900"
                        >
                            Trusted by Leading <br />
                            <span className="text-blue-600">Enterprises & Partners</span>
                        </motion.h3>
                    </div>
                    <div className="flex items-center space-x-4 bg-slate-50 px-6 py-4 rounded-3xl border border-slate-100">
                        <Shield className="w-10 h-10 text-emerald-500" />
                        <div>
                            <div className="font-bold text-slate-900 text-xl">100%</div>
                            <div className="text-slate-500 text-xs uppercase tracking-wider">Client Satisfaction</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all group"
                        >
                            <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <client.logo className="w-8 h-8" />
                            </div>
                            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2 block">{client.category}</span>
                            <h4 className="text-xl font-bold text-slate-900 mb-4">{client.name}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                {client.description}
                            </p>
                            <div className="flex items-center text-emerald-500 text-sm font-bold">
                                <CheckCircle2 className="w-4 h-4 mr-2" />
                                <span>Verified Partner</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
