"use client";

import React from 'react';
import Link from 'next/link';
import { Rocket, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const id = (href === '#' || href === '#home') ? 'home' : href.substring(1);
            const element = document.getElementById(id);
            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
    };

    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link
                            href="#home"
                            onClick={(e) => scrollToSection(e as any, '#home')}
                            className="flex items-center space-x-2"
                        >
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <Rocket className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">
                                Aansh<span className="text-blue-500">Group</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed">
                            To deliver intelligent, integrated security solutions that enhance safety, efficiency and control for modern residential and commercial spaces.
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
                            {['Home', 'About Us', 'Products', 'Portfolio', 'Clients', 'Awards', 'Careers', 'Contact'].map((item) => {
                                const href = `#${item.toLowerCase().replace(' ', '') === 'aboutus' ? 'about' : item.toLowerCase().replace(' ', '')}`;
                                return (
                                    <li key={item}>
                                        <Link
                                            href={href}
                                            onClick={(e) => scrollToSection(e as any, href)}
                                            className="text-slate-400 hover:text-blue-500 transition-colors"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>


                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-slate-400">
                                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>123 Tech Square, Innovation Park, <br />Cyber City, Bangalore - 560001</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-400">
                                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>contact@aanshgroup.com</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-400">
                                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>+91 (800) 123-4567</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:row justify-between items-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} Aansh Group Pvt Ltd. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
