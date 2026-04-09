import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';

const Placements = () => {
    return (
        <div className="bg-surface text-on-surface flex min-h-screen font-body selection:bg-secondary-fixed">
            <Sidebar />

            <main className="flex-1 md:ml-64 min-h-screen pb-20">
                <Header title="IIITDM Jabalpur" />

                {/* Content Canvas */}
                <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-12">
                    {/* Hero Stats: Bento Layout */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 relative overflow-hidden rounded-xl bg-primary-container text-white p-8 flex flex-col justify-between min-h-[240px] hover:shadow-lg transition-shadow group">
                            <div className="z-10">
                                <h2 className="text-on-primary-container font-headline font-bold text-lg mb-2">Performance Milestone 2024</h2>
                                <div className="flex items-baseline gap-4 mt-4">
                                    <span className="text-4xl md:text-5xl font-black font-headline tracking-tight group-hover:scale-105 transition-transform origin-left">₹87.54 LPA</span>
                                    <span className="text-on-primary-container/80 font-semibold hidden sm:inline">Highest Domestic</span>
                                </div>
                            </div>
                            <div className="z-10 mt-8 flex gap-6">
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold">71%</span>
                                    <span className="text-xs text-on-primary-container/70 uppercase tracking-widest font-bold">Students &gt; ₹10 LPA</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold">140+</span>
                                    <span className="text-xs text-on-primary-container/70 uppercase tracking-widest font-bold">Global Recruiters</span>
                                </div>
                            </div>
                            {/* Aesthetic Background Graphic */}
                            <div className="absolute right-0 bottom-0 opacity-10 md:opacity-20 transform md:translate-x-10 translate-y-10 scale-125 md:scale-150 group-hover:scale-[2] transition-transform duration-1000">
                                <span className="material-symbols-outlined text-[150px] md:text-[200px]" style={{ fontVariationSettings: "'wght' 700" }}>monitoring</span>
                            </div>
                        </div>

                        <div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between border-b-2 border-orange-500 shadow-sm hover:-translate-y-1 transition-transform">
                            <div>
                                <span className="inline-flex items-center px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full text-[10px] font-black uppercase tracking-wider mb-4">
                                    Global Outreach
                                </span>
                                <h3 className="text-slate-500 font-semibold mb-1">Highest International</h3>
                                <p className="text-4xl font-black text-primary font-headline">₹80 LPA</p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-outline-variant/10">
                                <p className="text-xs text-slate-400 leading-relaxed italic">"Achieving excellence across borders through innovation and technical rigor."</p>
                            </div>
                        </div>
                    </section>

                    {/* Main Content Split: Jobs & Management */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Column: Job Listings */}
                        <div className="col-span-12 lg:col-span-8 space-y-6">
                            <div className="flex justify-between items-end mb-2">
                                <div>
                                    <h2 className="text-2xl font-black text-primary font-headline tracking-tight">Active Opportunities</h2>
                                    <p className="text-slate-500 text-sm">Real-time recruitment feed for the Class of 2024</p>
                                </div>
                                <button className="text-secondary font-bold text-sm flex items-center hover:underline active:scale-95 transition-transform">
                                    View All <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                                </button>
                            </div>

                            <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-x-auto border border-outline-variant/10">
                                <table className="w-full text-left border-collapse min-w-[600px]">
                                    <thead>
                                        <tr className="bg-surface-container-low/50">
                                            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Company</th>
                                            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Role</th>
                                            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Package</th>
                                            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                                            <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-surface-container-low">
                                        <tr className="hover:bg-slate-50/80 transition-colors group cursor-pointer">
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center font-bold text-slate-400">G</div>
                                                    <span className="font-bold text-slate-800">Google</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-slate-600 font-medium">Software Engineer</td>
                                            <td className="px-6 py-5 font-bold text-slate-800">₹42.5 LPA</td>
                                            <td className="px-6 py-5">
                                                <span className="px-3 py-1 bg-green-50 text-green-700 text-[10px] font-black uppercase rounded-full">Apply Now</span>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <button className="bg-primary text-white px-4 py-2 rounded-xl text-xs font-bold transition-all hover:bg-primary-container group-hover:scale-105 active:scale-95">Details</button>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/80 transition-colors group cursor-pointer">
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center font-bold text-slate-400">N</div>
                                                    <span className="font-bold text-slate-800">NVIDIA</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-slate-600 font-medium">Hardware Architect</td>
                                            <td className="px-6 py-5 font-bold text-slate-800">₹38.0 LPA</td>
                                            <td className="px-6 py-5">
                                                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-black uppercase rounded-full">Interviewing</span>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <button className="bg-surface-container-low text-primary px-4 py-2 rounded-xl text-xs font-bold transition-all hover:bg-surface-container-high group-hover:scale-105 active:scale-95">Status</button>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/80 transition-colors group cursor-pointer">
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center font-bold text-slate-400">A</div>
                                                    <span className="font-bold text-slate-800">Atlassian</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-slate-600 font-medium">SRE II</td>
                                            <td className="px-6 py-5 font-bold text-slate-800">₹54.0 LPA</td>
                                            <td className="px-6 py-5">
                                                <span className="px-3 py-1 bg-slate-100 text-slate-400 text-[10px] font-black uppercase rounded-full">Closed</span>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <button className="text-slate-300 px-4 py-2 rounded-xl text-xs font-bold cursor-not-allowed">Details</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Application History Timeline */}
                            <div className="pt-8">
                                <h3 className="text-lg font-black text-primary font-headline tracking-tight mb-6">Recent Activity</h3>
                                <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200">
                                    <div className="relative pl-10 group cursor-pointer">
                                        <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-4 border-orange-500 z-10 group-hover:scale-125 transition-transform"></div>
                                        <div className="bg-surface-container-low p-4 rounded-xl hover:shadow-md transition-shadow">
                                            <p className="text-[10px] font-bold text-orange-600 uppercase tracking-widest mb-1">Today, 10:45 AM</p>
                                            <h4 className="font-bold text-slate-800">Application Submitted: Google</h4>
                                            <p className="text-xs text-slate-500 mt-1">Software Engineer Role - Portfolio Version 2.4 attached.</p>
                                        </div>
                                    </div>
                                    <div className="relative pl-10 group cursor-pointer">
                                        <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-white border-4 border-blue-500 z-10 group-hover:scale-125 transition-transform"></div>
                                        <div className="bg-surface-container-low/50 p-4 rounded-xl opacity-80 hover:opacity-100 transition-opacity hover:shadow-md border border-transparent hover:border-blue-500/20">
                                            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">Yesterday</p>
                                            <h4 className="font-bold text-slate-800">Shortlisted for Interview: NVIDIA</h4>
                                            <p className="text-xs text-slate-500 mt-1">Technical Round 1 scheduled for Friday, Oct 27.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Profiles & Tools */}
                        <div className="col-span-12 lg:col-span-4 space-y-8">
                            {/* Resume Management */}
                            <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="font-headline font-bold text-slate-800">Resume Artifacts</h3>
                                    <button className="p-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors active:scale-95">
                                        <span className="material-symbols-outlined text-sm">add</span>
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-blue-600 flex items-center justify-between group cursor-pointer hover:shadow-md transition-all">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-red-500">picture_as_pdf</span>
                                            <div>
                                                <p className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">DevOps_Master_V2</p>
                                                <p className="text-[10px] text-slate-400 mt-0.5">Uploaded 2 days ago</p>
                                            </div>
                                        </div>
                                        <button className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-primary">
                                            <span className="material-symbols-outlined text-lg">visibility</span>
                                        </button>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-slate-200 flex items-center justify-between group cursor-pointer hover:shadow-md transition-all">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-red-500">picture_as_pdf</span>
                                            <div>
                                                <p className="text-sm font-bold text-slate-800">General_Software_V1</p>
                                                <p className="text-[10px] text-slate-400 mt-0.5">Uploaded 1 month ago</p>
                                            </div>
                                        </div>
                                        <button className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 hover:text-primary">
                                            <span className="material-symbols-outlined text-lg">visibility</span>
                                        </button>
                                    </div>
                                </div>
                            </section>

                            {/* Skills & Certifications */}
                            <section className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10">
                                <h3 className="font-headline font-bold text-slate-800 mb-6">Verified Skills</h3>
                                <div className="flex flex-wrap gap-2 group">
                                    {['Machine Learning', 'Kubernetes', 'React Native', 'Python'].map(skill => (
                                        <span key={skill} className="px-3 py-1.5 bg-secondary/10 text-secondary rounded-lg text-xs font-bold border border-secondary/20 hover:bg-secondary hover:text-white transition-colors cursor-pointer">{skill}</span>
                                    ))}
                                    {['AWS Certified', 'System Design'].map(skill => (
                                        <span key={skill} className="px-3 py-1.5 bg-tertiary/5 text-tertiary-container rounded-lg text-xs font-bold border border-tertiary-container/20 hover:bg-tertiary-container hover:text-white transition-colors cursor-pointer">{skill}</span>
                                    ))}
                                    <button className="px-3 py-1.5 bg-slate-100 text-slate-500 rounded-lg text-xs font-bold hover:bg-slate-200 transition-colors active:scale-95">
                                        + Add Skills
                                    </button>
                                </div>
                            </section>

                            {/* CTA Feature Card */}
                            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary to-blue-900 p-8 text-white group cursor-pointer hover:shadow-xl transition-shadow">
                                <div className="relative z-10">
                                    <h4 className="font-headline font-extrabold text-xl mb-2">Resume Review</h4>
                                    <p className="text-blue-100/80 text-xs mb-6 leading-relaxed">Get your profile reviewed by industry mentors from our alumni network.</p>
                                    <button className="w-full bg-white text-blue-900 py-3 rounded-xl font-bold text-sm hover:bg-blue-50 transition-all shadow-lg active:scale-95 group-hover:shadow-white/20">
                                        Book a Slot
                                    </button>
                                </div>
                                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:rotate-12 group-hover:scale-110 transition-all duration-700">
                                    <span className="material-symbols-outlined text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Action Button */}
                <button className="fixed bottom-24 right-6 md:bottom-10 md:right-10 bg-orange-600 text-white h-14 w-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:bg-orange-500 active:scale-95 transition-all z-50">
                    <span className="material-symbols-outlined">chat</span>
                </button>
            </main>

            <MobileNav />
        </div>
    );
};

export default Placements;
