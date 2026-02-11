"use client";

import React from 'react';
import Link from 'next/link';
import { Rocket, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <Rocket className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">
                                Educe<span className="text-blue-500">Tech</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed">
                            Empowering businesses with innovative technology solutions. We bridge the gap between complex challenges and elegant digital experiences.
                        </p>
                        <div className="flex space-x-4">
                            {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase().replace(' ', '')}`} className="text-slate-400 hover:text-blue-500 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Our Services</h4>
                        <ul className="space-y-4">
                            {['Web Development', 'App Development', 'Cloud Solutions', 'AI & Data', 'Digital Marketing'].map((item) => (
                                <li key={item}>
                                    <Link href="#services" className="text-slate-400 hover:text-blue-500 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-slate-400">
                                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>123 Tech Square, Innovation Park, <br />Cyber City, India - 560001</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-400">
                                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>hello@educetech.in</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-400">
                                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>+91 (800) 123-4567</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:row justify-between items-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} Educe Technologic Pvt Ltd. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
