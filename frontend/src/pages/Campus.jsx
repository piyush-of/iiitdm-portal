import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';

const Campus = () => {
    return (
        <div className="bg-surface text-on-surface flex min-h-screen font-body selection:bg-secondary-fixed">
            <Sidebar />

            <main className="flex-1 md:ml-64 min-h-screen pb-20">
                <Header title="IIITDM Jabalpur" />

                {/* Canvas Content */}
                <div className="p-6 lg:p-10 space-y-10 max-w-7xl mx-auto">
                    {/* Hero Section: Campus Map & Directions */}
                    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="col-span-12 lg:col-span-8 relative rounded-3xl overflow-hidden min-h-[300px] lg:h-[400px] shadow-sm bg-surface-container-low group cursor-pointer border border-transparent hover:border-secondary/30 transition-colors">
                            <div className="absolute inset-0 z-0">
                                <img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt="Campus Map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKrnp9sH727t1_tI77seXncwSmSyTSzHl1wAtRpo9KPYjS9wn8SU-0RAekTZC4bAAyxxEZtdANeo7m1dY51hp2vg5lLEgudEmfz4sf4ExFgwQxjIUUvtaDHIrGbSZaCcyic634KjLuXf_aaNSoDkQ4SJjL9lNKgSQvLLcHBiQj6Wl6Ay6Rw3knYWrVIzrelSMl1cqKz5Cn6raFBKa3w5KxOivSKLNaziG8MASSZtdTtu5I2Jl2Kr-PBNEZCLU2_S0HAFhkuYTSm5Q"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent"></div>
                            </div>
                            <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8 text-white z-10 w-full pr-6">
                                <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-2 font-headline">Campus Navigator</h2>
                                <p className="text-blue-100 font-medium max-w-md text-sm lg:text-base">Find your way through PDPM IIITDM Jabalpur's state-of-the-art academic blocks and residential zones.</p>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <button className="bg-white text-primary px-4 lg:px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-50 transition-all text-xs lg:text-sm active:scale-95">
                                        <span className="material-symbols-outlined text-[18px]">explore</span>
                                        Interactive Map
                                    </button>
                                    <button className="bg-primary/30 backdrop-blur-md text-white border border-white/20 px-4 lg:px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/50 transition-all text-xs lg:text-sm active:scale-95">
                                        <span className="material-symbols-outlined text-[18px]">near_me</span>
                                        Get Directions
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Facility Booking */}
                        <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest p-8 rounded-3xl flex flex-col justify-between shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow">
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-1 font-headline">Facility Booking</h3>
                                <p className="text-slate-500 text-sm mb-6">Reserve high-end infrastructure for your next project or meeting.</p>
                                <div className="space-y-3">
                                    <div className="group flex items-center justify-between p-4 bg-surface-container-low rounded-2xl hover:bg-secondary-container/10 transition-all cursor-pointer">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 shrink-0 bg-secondary/10 rounded-full flex items-center justify-center">
                                              <span className="material-symbols-outlined text-secondary text-[20px]">computer</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm text-primary">Computer Lab 03</p>
                                                <p className="text-[10px] uppercase font-bold tracking-widest text-secondary mt-0.5">Available: 14 Slots</p>
                                            </div>
                                        </div>
                                        <span className="material-symbols-outlined text-slate-300 group-hover:text-secondary group-hover:translate-x-1 transition-all">arrow_forward</span>
                                    </div>
                                    <div className="group flex items-center justify-between p-4 bg-surface-container-low rounded-2xl hover:bg-secondary-container/10 transition-all cursor-pointer">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 shrink-0 bg-secondary/10 rounded-full flex items-center justify-center">
                                              <span className="material-symbols-outlined text-secondary text-[20px]">videocam</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm text-primary">VC Room - Central</p>
                                                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-0.5">Next: 3:00 PM</p>
                                            </div>
                                        </div>
                                        <span className="material-symbols-outlined text-slate-300 group-hover:text-secondary group-hover:translate-x-1 transition-all">arrow_forward</span>
                                    </div>
                                </div>
                            </div>
                            <button className="mt-6 w-full py-4 border-2 border-slate-100 rounded-2xl text-slate-600 font-bold hover:bg-slate-50 transition-all active:scale-95 text-sm uppercase tracking-widest">
                                View All Facilities
                            </button>
                        </div>
                    </section>

                    {/* News and Clubs Section (Asymmetric Grid) */}
                    <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Library Section */}
                        <div className="col-span-12 lg:col-span-2 space-y-8">
                            <div className="bg-primary p-8 lg:p-10 rounded-[2.5rem] relative overflow-hidden group">
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] group-hover:bg-secondary/30 transition-colors duration-700"></div>
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-extrabold text-white mb-6 font-headline">Knowledge Commons</h2>
                                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                                        <div className="flex-grow relative">
                                            <input className="w-full bg-white/10 border-none rounded-2xl py-4 px-6 pr-14 text-white placeholder:text-blue-200/50 focus:ring-2 focus:ring-secondary focus:bg-white/20 transition-all outline-none" placeholder="Search Books, Journals, Research Papers..." type="text"/>
                                            <button className="absolute right-3 top-2.5 bg-secondary hover:bg-secondary-fixed text-white hover:text-secondary-fixed-variant p-1.5 rounded-xl transition-colors active:scale-95">
                                                <span className="material-symbols-outlined">search</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-4">
                                        <a className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 px-5 py-3 rounded-full text-blue-100 text-sm font-semibold transition-all hover:-translate-y-0.5 active:scale-95" href="#">
                                            <span className="material-symbols-outlined text-[18px]">auto_stories</span>
                                            IEEE Xplore
                                        </a>
                                        <a className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 px-5 py-3 rounded-full text-blue-100 text-sm font-semibold transition-all hover:-translate-y-0.5 active:scale-95" href="#">
                                            <span className="material-symbols-outlined text-[18px]">menu_book</span>
                                            ACM Digital Library
                                        </a>
                                        <a className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 px-5 py-3 rounded-full text-blue-100 text-sm font-semibold transition-all hover:-translate-y-0.5 active:scale-95" href="#">
                                            <span className="material-symbols-outlined text-[18px]">database</span>
                                            ScienceDirect
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Club Directory (Bento Style) */}
                            <div>
                                <div className="flex justify-between items-end mb-6">
                                    <h2 className="text-2xl font-extrabold text-primary font-headline">Student Innovation Clubs</h2>
                                    <a className="text-sm font-bold text-secondary flex items-center gap-1 hover:underline" href="#">Explore All <span className="material-symbols-outlined text-[16px]">open_in_new</span></a>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="h-14 w-14 bg-slate-900 rounded-2xl flex items-center justify-center shadow-inner">
                                                <span className="material-symbols-outlined text-white text-[28px]">code</span>
                                            </div>
                                            <span className="bg-green-100 text-green-700 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">Active Now</span>
                                        </div>
                                        <h4 className="text-lg font-bold text-primary mb-1 font-headline">The Bitrayals</h4>
                                        <p className="text-xs text-slate-400 font-medium mb-4 tracking-tight">Competitive Programming & Development</p>
                                        <div className="bg-surface-container-low p-4 rounded-xl">
                                            <p className="text-xs font-bold text-primary flex items-center gap-2 mb-1 uppercase tracking-wider">
                                                <span className="material-symbols-outlined text-[14px]">bolt</span>
                                                Recent Activity
                                            </p>
                                            <p className="text-[11px] text-slate-500 leading-relaxed font-medium">Organized 'Binary Blitz 2.0' with 400+ participants from central India.</p>
                                        </div>
                                    </div>
                                    <div className="bg-surface-container-lowest p-6 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border-l-4 border-orange-500 cursor-pointer flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="h-14 w-14 bg-tertiary-container rounded-2xl flex items-center justify-center shadow-inner">
                                                    <span className="material-symbols-outlined text-on-tertiary-container text-[28px]">precision_manufacturing</span>
                                                </div>
                                            </div>
                                            <h4 className="text-lg font-bold text-primary mb-1 font-headline">Robotics Club</h4>
                                            <p className="text-xs text-slate-400 font-medium mb-4 tracking-tight">Hardware, IoT & Automation</p>
                                        </div>
                                        <div className="bg-tertiary-fixed p-4 rounded-xl mt-auto">
                                            <p className="text-xs font-bold text-on-tertiary-fixed flex items-center gap-2 mb-1 uppercase tracking-wider">
                                                <span className="material-symbols-outlined text-[14px]">settings</span>
                                                Project Spotlight
                                            </p>
                                            <p className="text-[11px] text-on-tertiary-fixed-variant leading-relaxed font-medium">Developing an autonomous campus delivery rover for the infirmary.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Campus News Feed */}
                        <div className="col-span-12 lg:col-span-1 space-y-6 flex flex-col">
                            <div className="bg-surface-container-lowest p-6 lg:p-8 rounded-[2rem] shadow-sm border border-slate-50 flex-grow hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-extrabold text-primary mb-6 flex items-center gap-3 font-headline">
                                    <span className="material-symbols-outlined text-secondary">rss_feed</span>
                                    Campus Pulse
                                </h3>
                                <div className="space-y-6">
                                    {/* News Item */}
                                    <div className="group cursor-pointer">
                                        <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">Festival Update</p>
                                        <h5 className="font-bold text-sm text-primary group-hover:text-secondary transition-colors leading-snug mb-2 font-headline">Abhikalpan 2024: Theme Reveal & Core Committee Registration Starts</h5>
                                        <p className="text-xs text-slate-500 line-clamp-2 md:line-clamp-3">Get ready for Central India's biggest technical fest. Early bird registrations for events open next Monday.</p>
                                        <div className="mt-3 flex items-center gap-4 text-[10px] font-bold text-slate-400">
                                            <span className="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">schedule</span> 2h ago</span>
                                            <span className="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">visibility</span> 1.2k</span>
                                        </div>
                                    </div>
                                    <div className="h-px bg-slate-100/80"></div>
                                    {/* News Item */}
                                    <div className="group cursor-pointer">
                                        <p className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mb-1">Academics</p>
                                        <h5 className="font-bold text-sm text-primary group-hover:text-orange-600 transition-colors leading-snug mb-2 font-headline">Revised Examination Guidelines for Semester VI Research Projects</h5>
                                        <p className="text-xs text-slate-500 line-clamp-2 md:line-clamp-3">The Dean Academics has released the new evaluation rubric focusing on practical prototype development.</p>
                                        <div className="mt-3 flex items-center gap-4 text-[10px] font-bold text-slate-400">
                                            <span className="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">schedule</span> 5h ago</span>
                                            <span className="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">visibility</span> 842</span>
                                        </div>
                                    </div>
                                    <div className="h-px bg-slate-100/80"></div>
                                    {/* News Item */}
                                    <div className="group cursor-pointer">
                                        <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Cultural</p>
                                        <h5 className="font-bold text-sm text-primary group-hover:text-blue-400 transition-colors leading-snug mb-2 font-headline">Tarang: Auditions for the Music & Dance Society next Friday</h5>
                                        <p className="text-xs text-slate-500 line-clamp-2 md:line-clamp-3">The annual cultural gala is approaching. Showcase your talent at the Open Theatre auditions.</p>
                                        <div className="mt-3 flex items-center gap-4 text-[10px] font-bold text-slate-400">
                                            <span className="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">schedule</span> 1d ago</span>
                                            <span className="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">visibility</span> 2.1k</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="mt-8 w-full py-4 bg-surface-container-low rounded-xl text-primary font-bold text-xs uppercase tracking-widest hover:bg-surface-container-high transition-all active:scale-95">
                                    View Archive
                                </button>
                            </div>

                            {/* Small Stat Card */}
                            <div className="bg-primary-container p-6 rounded-3xl text-white shadow-md relative overflow-hidden group">
                                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                <div className="flex items-center gap-3 mb-4 relative z-10">
                                    <span className="material-symbols-outlined text-secondary-container">network_check</span>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Network Status</span>
                                </div>
                                <div className="flex justify-between items-end relative z-10">
                                    <div>
                                        <p className="text-3xl font-black font-headline">98.4%</p>
                                        <p className="text-[10px] font-medium opacity-60 uppercase tracking-wider mt-1">Campus Wi-Fi Uptime</p>
                                    </div>
                                    <div className="h-10 w-16 bg-white/10 rounded-lg flex items-end p-1.5 gap-1 shadow-inner">
                                        <div className="w-2.5 bg-secondary-container h-1/2 rounded-full"></div>
                                        <div className="w-2.5 bg-secondary-container h-3/4 rounded-full"></div>
                                        <div className="w-2.5 bg-secondary-container h-full rounded-full animate-pulse"></div>
                                        <div className="w-2.5 bg-secondary-container h-2/3 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            {/* FAB: Help/Ask Support */}
            <button className="fixed bottom-24 right-6 md:bottom-10 md:right-10 h-14 w-14 md:h-16 md:w-16 bg-secondary text-white rounded-full shadow-[0_12px_32px_rgba(13,29,42,0.15)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 hover:bg-secondary-fixed hover:text-secondary-fixed-variant">
                <span className="material-symbols-outlined text-2xl md:text-3xl">chat_bubble</span>
            </button>

            <MobileNav />
        </div>
    );
};

export default Campus;
