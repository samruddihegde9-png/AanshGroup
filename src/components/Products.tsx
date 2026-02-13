"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ToggleRight,
    Smartphone,
    Layout,
    Maximize2,
    Settings,
    Zap,
    CheckCircle2,
    Palette,
    Layers,
    Activity,
    Wifi,
    Timer
} from 'lucide-react';

const products = [
    {
        id: 'smart-plug',
        title: 'Smart Plug',
        category: 'Basic Control',
        description: 'Essential component for controlling individual appliances or devices with ease. Features real-time energy monitoring and voice assistant integration.',
        icon: Zap,
        color: 'from-blue-500 to-blue-700',
        features: ['Energy Monitor', 'Voice Sync', 'Schedules'],
        interactiveButtons: [
            { label: 'On/Off', icon: Zap },
            { label: 'Timer', icon: Timer },
            { label: 'Energy', icon: Activity }
        ]
    },
    {
        id: '5-1-lcd',
        title: '5+1 Variant + LCD Remote',
        category: 'Premium Glass',
        description: 'Elegant five-switch panel with LCD display and remote, finished in high-quality premium glass. Perfect for luxury living rooms.',
        icon: Layout,
        color: 'from-slate-800 to-slate-900',
        features: ['LCD Display', 'Remote Sync', 'Glass Finish'],
        interactiveButtons: [
            { label: 'Glass', icon: Layers },
            { label: 'Remote', icon: Wifi },
            { label: 'Display', icon: Smartphone }
        ]
    },
    {
        id: '7-2-remote',
        title: '7+2 Variant + Remote',
        category: 'Premium Glass',
        description: 'Comprehensive control panel with seven switches, two functions, and remote capability for large spaces.',
        icon: Maximize2,
        color: 'from-indigo-600 to-indigo-800',
        features: ['9 Total Controls', 'Wide Range', 'Multi-User'],
        interactiveButtons: [
            { label: '7 Switch', icon: ToggleRight },
            { label: '2 Dimmer', icon: Layers },
            { label: 'Group', icon: Layout }
        ]
    },
    {
        id: '4-2-acrylic',
        title: '4+2 Variant + Remote',
        category: 'Premium Acrylic',
        description: 'Sleek and durable acrylic finish panel offering four switches and two specialized functions.',
        icon: Smartphone,
        color: 'from-blue-400 to-blue-600',
        features: ['Acrylic Finish', 'Sleek Profile', 'Compact'],
        interactiveButtons: [
            { label: 'Acrylic', icon: Palette },
            { label: 'Link', icon: Wifi },
            { label: 'Config', icon: Settings }
        ]
    },
    {
        id: 'proj-lift',
        title: 'Projector Lift Controller',
        category: 'Specialized Control',
        description: 'Dedicated management system for projector lift mechanisms, embellishing your smart home entertainment.',
        icon: Settings,
        color: 'from-slate-700 to-slate-850',
        features: ['Auto Ceiling', 'Silent Motor', 'Limit Set'],
        interactiveButtons: [
            { label: 'Lift Up', icon: Maximize2 },
            { label: 'Lift Down', icon: Maximize2, rotate: 180 },
            { label: 'Motor', icon: Activity }
        ]
    },
];

export default function Products() {
    const [selectedProduct, setSelectedProduct] = useState(products[0]);
    const [activeAction, setActiveAction] = useState<string | null>(null);

    return (
        <section id="products" className="py-24 bg-[#f8fafc] relative overflow-hidden min-h-[900px]">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-5%] right-[-5%] w-[35%] h-[35%] bg-blue-100/30 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-5%] left-[-5%] w-[35%] h-[35%] bg-indigo-100/30 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-blue-600 uppercase bg-blue-50/50 rounded-lg backdrop-blur-sm border border-blue-100"
                    >
                        Interactive Showcase
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight"
                    >
                        Explore Our <span className="text-blue-600 italic">Smart Range</span>
                    </motion.h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left Panel: Selection Menu */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-4">
                        {products.map((product) => (
                            <button
                                key={product.id}
                                onClick={() => setSelectedProduct(product)}
                                className={`group flex items-center p-5 rounded-3xl transition-all duration-300 text-left relative overflow-hidden ${selectedProduct.id === product.id
                                        ? 'bg-white shadow-xl shadow-blue-500/10 border-blue-200'
                                        : 'bg-white/40 hover:bg-white border-transparent'
                                    } border`}
                            >
                                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                                    <product.icon className="w-6 h-6" />
                                </div>
                                <div className="ml-4 flex-1">
                                    <h4 className={`font-bold transition-colors ${selectedProduct.id === product.id ? 'text-blue-600' : 'text-slate-700'}`}>
                                        {product.title}
                                    </h4>
                                    <p className="text-xs text-slate-400 uppercase font-semibold tracking-tighter">{product.category}</p>
                                </div>
                                {selectedProduct.id === product.id && (
                                    <motion.div
                                        layoutId="active-indicator"
                                        className="w-1.5 h-6 bg-blue-600 rounded-full ml-2"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Right Panel: Active Product Detail */}
                    <div className="flex-1 w-full min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedProduct.id}
                                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -40, scale: 0.95 }}
                                transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                                className="bg-white rounded-[3.5rem] p-8 lg:p-12 shadow-2xl shadow-blue-500/5 border border-slate-100 relative overflow-hidden"
                            >
                                {/* Decorative Glass Layer */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-transparent rounded-full -mr-20 -mt-20 opacity-50 blur-3xl pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
                                        <div>
                                            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">
                                                {selectedProduct.category}
                                            </span>
                                            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                                                {selectedProduct.title}
                                            </h3>
                                        </div>
                                        <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${selectedProduct.color} flex items-center justify-center text-white shadow-2xl rotate-3 shrink-0`}>
                                            <selectedProduct.icon className="w-12 h-12" />
                                        </div>
                                    </div>

                                    <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
                                        {selectedProduct.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        {/* Features List */}
                                        <div>
                                            <h5 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Key Specifications</h5>
                                            <div className="space-y-4">
                                                {selectedProduct.features.map((feature, i) => (
                                                    <div key={i} className="flex items-center text-slate-700 font-semibold group" style={{ transition: 'all 0.3s' }}>
                                                        <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 group-hover:scale-125 transition-transform" />
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Interactive "Tiny Buttons" Panel */}
                                        <div className="bg-slate-50/50 rounded-[2.5rem] p-8 border border-slate-100">
                                            <h5 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 text-center">Interactive Simulator</h5>
                                            <div className="flex flex-wrap justify-center gap-4">
                                                {selectedProduct.interactiveButtons.map((btn, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => {
                                                            setActiveAction(btn.label);
                                                            setTimeout(() => setActiveAction(null), 1000);
                                                        }}
                                                        className={`flex flex-col items-center justify-center w-20 h-20 rounded-2xl transition-all duration-300 ${activeAction === btn.label
                                                                ? 'bg-blue-600 text-white scale-95'
                                                                : 'bg-white shadow-sm text-slate-600 hover:shadow-md hover:scale-105 border border-slate-100'
                                                            }`}
                                                    >
                                                        {/* @ts-ignore */}
                                                        <btn.icon className={`w-6 h-6 mb-2 ${btn.rotate ? `rotate-[180deg]` : ''}`} />
                                                        <span className="text-[10px] font-bold uppercase tracking-tighter">{btn.label}</span>
                                                    </button>
                                                ))}
                                            </div>
                                            <p className="text-[11px] text-slate-400 mt-6 text-center font-medium italic">
                                                {activeAction ? `Activating ${activeAction}...` : 'Select a function to test'}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-12 flex flex-col sm:flex-row gap-4">
                                        <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-black transition-all shadow-lg hover:shadow-slate-200">
                                            Request Quote
                                        </button>
                                        <button className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center">
                                            Technical Specs
                                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
