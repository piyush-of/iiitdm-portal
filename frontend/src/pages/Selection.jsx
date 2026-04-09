import React from 'react';
import { useNavigate } from 'react-router-dom';

const Selection = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-background text-on-background font-body min-h-screen flex flex-col">
            {/* TopAppBar */}
            <header className="fixed top-0 w-full z-50 bg-slate-50 dark:bg-slate-950 flex justify-between items-center px-8 h-16 max-w-full">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
                    </div>
                    <span className="text-xl font-bold tracking-tighter text-blue-900 dark:text-blue-50">The Academic Architect</span>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex gap-4">
                        <button className="material-symbols-outlined text-slate-500 dark:text-slate-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors duration-300 p-2 rounded-full">help_outline</button>
                        <button className="material-symbols-outlined text-slate-500 dark:text-slate-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors duration-300 p-2 rounded-full">language</button>
                    </div>
                    <img 
                        alt="University Institutional Logo" 
                        className="w-10 h-10 rounded-full border-2 border-outline-variant/20" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEylxVk979FgsY1TJlYP9ABxwgc-egrwNlLXXPValjCScwD8FDi58q_esrIsWOsOlgfmY19Jo9jcaK_OAOcY7mfA79Uxoi3abt0Tgdhm0EMbf1Y7RYYqw8QGXWSRuY8wkFRCDKtEKjTrlXhYsWNZY6hIVP_1JqfpAf0axP0gbjFmNDj7i3779mCCpz-M_KLe08QaINc_w6JA00VBwZH1rsTykv4bdYhD21ojHOAZRnx8b49PcWg0G_0BXLyznHbF4A1ES8pv_Gy6I"
                    />
                </div>
            </header>

            <main className="flex-grow pt-24 pb-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
                {/* Welcome Section */}
                <section className="mb-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <h2 className="font-headline text-sm font-semibold text-secondary uppercase tracking-[0.2em] mb-4">Identity Authorization</h2>
                            <h1 className="font-headline text-5xl font-extrabold text-primary tracking-tight leading-tight">
                                Welcome back, User.<br/>
                                <span className="text-on-primary-container">Select your portal access.</span>
                            </h1>
                        </div>
                        {/* Security Badge */}
                        <div className="bg-surface-container-low p-6 rounded-xl border-b-2 border-secondary/20 flex items-center gap-4 min-w-[280px]">
                            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                                <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                            </div>
                            <div>
                                <p className="font-headline text-primary font-bold text-lg">Arjun Mehta</p>
                                <p className="text-xs font-label uppercase tracking-widest text-secondary font-semibold">Roll: 2024CS1052</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Role Selection Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {/* Student Portal */}
                    <div 
                        className="group relative bg-surface-container-lowest p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0px_12px_32px_rgba(13,29,42,0.04)] cursor-pointer overflow-hidden border-b-2 border-transparent hover:border-secondary"
                        onClick={() => navigate('/login')}
                    >
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-surface-container-low rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-50"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-surface-container-low rounded-xl flex items-center justify-center mb-8 group-hover:bg-secondary-container transition-colors duration-300">
                                <span className="material-symbols-outlined text-secondary text-3xl group-hover:text-white">school</span>
                            </div>
                            <h3 className="font-headline text-2xl font-bold text-primary mb-2">Student Portal</h3>
                            <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">Access your academic journey, tracking, and career opportunities.</p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-xs font-medium text-on-surface-variant/80">
                                    <span className="material-symbols-outlined text-sm">auto_stories</span>
                                    <span>Academics &amp; Registration</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs font-medium text-on-surface-variant/80">
                                    <span className="material-symbols-outlined text-sm">work_outline</span>
                                    <span>Placement Cell &amp; Internships</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs font-medium text-on-surface-variant/80">
                                    <span className="material-symbols-outlined text-sm">account_balance_wallet</span>
                                    <span>Fees &amp; Resources</span>
                                </div>
                            </div>
                            <button className="mt-10 w-full py-4 px-6 bg-primary text-on-primary rounded-xl font-bold tracking-tight group-hover:bg-secondary transition-all flex items-center justify-center gap-2">
                                Enter Student Hub
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                    </div>

                    {/* Faculty Portal */}
                    <div className="group relative bg-surface-container-lowest p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0px_12px_32px_rgba(13,29,42,0.04)] cursor-pointer overflow-hidden border-b-2 border-transparent hover:border-secondary">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-surface-container-low rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-50"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-surface-container-low rounded-xl flex items-center justify-center mb-8 group-hover:bg-secondary-container transition-colors duration-300">
                                <span className="material-symbols-outlined text-secondary text-3xl group-hover:text-white">biotech</span>
                            </div>
                            <h3 className="font-headline text-2xl font-bold text-primary mb-2">Faculty Portal</h3>
                            <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">Management of course delivery, grading systems, and institutional research.</p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-xs font-medium text-on-surface-variant/80">
                                    <span className="material-symbols-outlined text-sm">grading</span>
                                    <span>Course Grading &amp; Analytics</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs font-medium text-on-surface-variant/80">
                                    <span className="material-symbols-outlined text-sm">science</span>
                                    <span>Research Management</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs font-medium text-on-surface-variant/80">
                                    <span className="material-symbols-outlined text-sm">calendar_month</span>
                                    <span>Lecture Scheduling</span>
                                </div>
                            </div>
                            <button className="mt-10 w-full py-4 px-6 bg-surface-container-high text-primary rounded-xl font-bold tracking-tight group-hover:bg-primary group-hover:text-white transition-all flex items-center justify-center gap-2">
                                Enter Faculty Hub
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                    </div>

                    {/* Admin Console */}
                    <div className="group relative bg-surface-container-lowest p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0px_12px_32px_rgba(13,29,42,0.04)] cursor-pointer overflow-hidden border-b-2 border-transparent hover:border-tertiary-container">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary-fixed rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-30"></div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-surface-container-low rounded-xl flex items-center justify-center mb-8 group-hover:bg-tertiary-container transition-colors duration-300">
                                <span className="material-symbols-outlined text-secondary text-3xl group-hover:text-on-tertiary-container">admin_panel_settings</span>
                            </div>
                            <h3 className="font-headline text-2xl font-bold text-primary mb-2">Admin Console</h3>
                            <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">System-wide configuration, security protocols, and staff administration.</p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-xs font-medium text-on-surface-variant/80">
                                    <span className="material-symbols-outlined text-sm">groups</span>
                                    <span>Staff Management</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs font-medium text-on-surface-variant/80">
                                    <span className="material-symbols-outlined text-sm">security</span>
                                    <span>Security &amp; Auth Logs</span>
                                </div>
                                <div className="flex items-center gap-3 text-xs font-medium text-on-surface-variant/80">
                                    <span className="material-symbols-outlined text-sm">settings_input_component</span>
                                    <span>Core Infrastructure</span>
                                </div>
                            </div>
                            <button className="mt-10 w-full py-4 px-6 bg-tertiary-container text-on-tertiary-container rounded-xl font-bold tracking-tight transition-all flex items-center justify-center gap-2">
                                Enter Admin Panel
                                <span className="material-symbols-outlined text-sm">lock_open</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* System Status Info */}
                <div className="bg-surface-container-high rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
                        <p className="text-sm text-on-surface-variant">Your current session is encrypted and restricted based on your institutional clearance levels.</p>
                    </div>
                    <div className="flex gap-8">
                        <div className="text-center">
                            <p className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">Network Status</p>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-sm font-bold text-primary">SECURE</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">Last Login</p>
                            <p className="text-sm font-bold text-primary">Today, 08:42 AM</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full py-8 border-none bg-slate-50 dark:bg-slate-950 flex flex-col md:flex-row justify-between items-center px-12 space-y-4 md:space-y-0">
                <p className="font-inter text-xs tracking-wide uppercase text-slate-400 dark:text-slate-500">
                    © 2024 Technical Institute of Architecture. All rights reserved.
                </p>
                <div className="flex gap-8">
                    <a className="font-inter text-xs tracking-wide uppercase text-slate-400 dark:text-slate-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" href="#">Privacy Policy</a>
                    <a className="font-inter text-xs tracking-wide uppercase text-slate-400 dark:text-slate-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" href="#">Security Standards</a>
                    <a className="font-inter text-xs tracking-wide uppercase text-slate-400 dark:text-slate-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" href="#">Support</a>
                </div>
            </footer>
        </div>
    );
};

export default Selection;
