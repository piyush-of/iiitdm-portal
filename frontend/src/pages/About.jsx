import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';

const About = () => {
    return (
        <div className="bg-surface text-on-surface flex min-h-screen font-body selection:bg-secondary-fixed">
            <Sidebar />

            <main className="flex-1 md:ml-64 min-h-screen pb-20">
                <Header title="IIITDM Jabalpur" />

                {/* Main Content Canvas */}
                <div className="p-6 lg:p-12 max-w-7xl mx-auto space-y-12">
                    {/* Hero Section: The Vision */}
                    <section>
                        <div className="relative overflow-hidden rounded-3xl p-8 md:p-16 bg-primary-container text-white shadow-lg">
                            <div className="relative z-10 max-w-2xl">
                                <span className="inline-block px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container text-xs font-bold tracking-widest uppercase mb-6">The Vision</span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 leading-tight font-headline">Integrating Design, Tech, and Manufacturing.</h1>
                                <p className="text-sm md:text-lg text-on-primary-container leading-relaxed mb-8 font-medium">
                                    The IIITDMJ Portal is more than a utility; it's a digital ecosystem designed to bridge the gap between academic excellence and operational precision. We unify academic management, placement tracking, and campus resources into a singular, high-performance interface.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
                                        <span className="material-symbols-outlined text-secondary-fixed text-[20px]">architecture</span>
                                        <span className="text-sm font-bold tracking-wide">Design Centric</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
                                        <span className="material-symbols-outlined text-secondary-fixed text-[20px]">precision_manufacturing</span>
                                        <span className="text-sm font-bold tracking-wide">Manufacturing Rigor</span>
                                    </div>
                                </div>
                            </div>
                            {/* Abstract BG Decoration */}
                            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 md:opacity-20 pointer-events-none transition-transform duration-1000 origin-right">
                                <svg className="w-full h-full scale-150 relative top-10 md:top-0" fill="none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M400 0H0V400H400V0Z" fill="url(#paint0_linear)"></path>
                                    <defs>
                                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear" x1="0" x2="400" y1="0" y2="400">
                                            <stop stopColor="white"></stop>
                                            <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </section>

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        {/* The Creator: Piyush Kumawat */}
                        <section className="col-span-12 lg:col-span-7 bg-surface-container-lowest rounded-3xl p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start border border-outline-variant/15 hover:shadow-md transition-shadow">
                            <div className="shrink-0 overflow-hidden rounded-2xl group">
                                <img alt="Piyush Kumawat Profile" className="w-48 h-48 md:w-56 md:h-56 object-cover shadow-inner group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBky7Qcn4IAcCMx_XhgyCuSuuqYho9Y4yiKbJHfSXoExWRHmteMsdbrz-qTcxwO0qg1Yzh52P38iuvqof2PdsZGuuzVf4L5XKkpI9GiqNxEQk7RMmtTLWekZKrGQzaMDTnoljPViaN1VL6OOg9z7blnNQxUA84-aSOhhn1-DaayOAfxJrNcLE0QCfWWtxIZ6LIJftZMDUkxCw9wzHYZmHnJObg906JQfGJsbfKPosRvDRuv4DPHjynE6BUYTztLOV2BgiDlLaHqZF0"/>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <span className="inline-block px-3 py-1 bg-tertiary/10 text-on-tertiary-container font-black tracking-widest text-[10px] uppercase rounded-full mb-3">Lead Architect</span>
                                <h2 className="text-3xl font-bold text-primary mb-4 font-headline">Piyush Kumawat</h2>
                                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-medium">
                                    As a student at IIITDM Jabalpur, Piyush envisioned a portal that reflected the institute's core philosophy of innovation. With a focus on high-end UI/UX and scalable architecture, he leads the technical direction of the portal.
                                </p>
                                <div className="flex gap-4 justify-center md:justify-start">
                                    <a className="p-3 bg-surface-container rounded-xl hover:bg-secondary-container hover:text-white transition-colors group cursor-pointer active:scale-95" href="#">
                                        <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">code</span>
                                    </a>
                                    <a className="p-3 bg-surface-container rounded-xl hover:bg-secondary-container hover:text-white transition-colors group cursor-pointer active:scale-95" href="#">
                                        <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">person_search</span>
                                    </a>
                                    <a className="p-3 bg-surface-container rounded-xl hover:bg-secondary-container hover:text-white transition-colors group cursor-pointer active:scale-95" href="#">
                                        <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">alternate_email</span>
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* The Organization */}
                        <section className="col-span-12 lg:col-span-5 bg-surface-container-low rounded-3xl p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2 font-headline">
                                    <span className="material-symbols-outlined text-secondary">hub</span>
                                    Student Innovation Lab
                                </h3>
                                <p className="text-on-surface-variant text-sm leading-relaxed font-medium">
                                    The Portal Development Team operates under the Student Innovation Lab, a collaborative space where ideas are forged into production-ready software. We prioritize peer mentorship and industrial standards.
                                </p>
                            </div>
                            <div className="mt-8 pt-8 border-t border-outline-variant/30">
                                <div className="flex -space-x-4">
                                    <img alt="team1" className="w-12 h-12 rounded-full border-4 border-surface-container-low relative z-30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLs7b4Kdn9_gJdqZtKu5dUo5MQF0ZOY5tEv1-2ujZ6ejEPuOIobyOrCIyRd_CPT18GLDYl5UkrR_jahVtjGL9F7f8lDwT-oKUiRgC-u3oiDfpAOt8hci-3m1tLKW1GApND1E6R9DmR3Aq_eLShyzJjxuBbxtXrI8QTX-yGVuzNluAng_Rns92U_ZKpAiE3P3WB4NDdvxRcfbOm2KwA4JhDHV3fmiV745xUh7APbXiOHQ9mtiwLyF3xTTgKwdYAc9b3HtMKFeG3EiQ"/>
                                    <img alt="team2" className="w-12 h-12 rounded-full border-4 border-surface-container-low relative z-20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhs8qgj-_oeq_HYkaoqqzJKX0lEENFUhmdMDqnLJ20nV6Qx6RvUa4856yh2yvu8R3DORKLDSfdaJiQ-vwQjYmwd2ij345-e4BIINPQ8Y6DACGEni5MHQx1WamCpduc1gmMbOXrtCm-EY5c4RVfnEWGXj0VbtPs8__yoHgqO33qMa-26HKLEMxIIjxe-Yml7_WS7e8QKnBwa4-Dztj3owMZKLSD9TZVQhhSA8qPGDzOn7DViTQNUDhK1RZv2tm1A-WAg6u384CXEQc"/>
                                    <img alt="team3" className="w-12 h-12 rounded-full border-4 border-surface-container-low relative z-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5yhlytnwIs8tjHSfsdmKVEnN_L54w0cC0jogNdLjuHBABA-nZO2P-Q2Mk2uZbwhvribXzLoPmg6cCEz55seLSab0YU9Zqe3ZFzIlNCFASB8TFr-gPexikWF_CGjlAceJDcAGJlalnN076tUdeuUmqBdjj9FGaPGnoWHX8vaqGxSOBkRfKrFCpE5N1OH4g3Q3YqhiQIu_H0TvwcaeSC_-rAxaL9fQU_cwRIMSyp-B2w3_kbC12J5NLihieJJo9YCFsOtvD1Fm6zoo"/>
                                    <div className="w-12 h-12 rounded-full border-4 border-surface-container-low bg-secondary flex items-center justify-center text-[10px] font-bold text-white uppercase relative z-0">
                                        +12
                                    </div>
                                </div>
                                <p className="text-xs font-bold text-on-surface-variant mt-4 uppercase tracking-wider">Contributors</p>
                            </div>
                        </section>

                        {/* Tech Stack */}
                        <section className="col-span-12 lg:col-span-8 bg-surface-container-highest rounded-3xl p-8 hover:shadow-md transition-shadow">
                            <h3 className="text-sm font-black text-primary uppercase tracking-[0.2em] mb-8">Forge Technology Stack</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                                <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col items-center justify-center gap-3 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
                                    <span className="material-symbols-outlined text-4xl text-secondary">layers</span>
                                    <span className="text-xs font-bold font-headline uppercase">React</span>
                                </div>
                                <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col items-center justify-center gap-3 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
                                    <span className="material-symbols-outlined text-4xl text-secondary">palette</span>
                                    <span className="text-xs font-bold font-headline uppercase">Tailwind</span>
                                </div>
                                <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col items-center justify-center gap-3 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
                                    <span className="material-symbols-outlined text-4xl text-secondary">database</span>
                                    <span className="text-xs font-bold font-headline uppercase">PostgreSQL</span>
                                </div>
                                <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col items-center justify-center gap-3 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer">
                                    <span className="material-symbols-outlined text-4xl text-secondary">terminal</span>
                                    <span className="text-xs font-bold font-headline uppercase">Node.js</span>
                                </div>
                            </div>
                        </section>

                        {/* Support / Contact */}
                        <section className="col-span-12 lg:col-span-4 bg-tertiary-fixed rounded-3xl p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
                            <div>
                                <h3 className="text-xl font-bold text-on-tertiary-fixed mb-4 font-headline">Contact & Support</h3>
                                <p className="text-on-tertiary-fixed-variant text-sm mb-6 leading-relaxed">
                                    Encountered a bug or have a feature request? Our dev team is listening.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <button className="w-full py-4 bg-tertiary-container text-on-tertiary-container rounded-xl md:rounded-full font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity active:scale-95 text-sm uppercase tracking-wide">
                                    <span className="material-symbols-outlined text-[18px]">bug_report</span>
                                    Report Issue
                                </button>
                                <button className="w-full py-4 border-2 border-tertiary-container/30 text-tertiary-container rounded-xl md:rounded-full font-bold flex items-center justify-center gap-2 hover:bg-tertiary-container/5 transition-colors active:scale-95 text-sm uppercase tracking-wide">
                                    <span className="material-symbols-outlined text-[18px]">rate_review</span>
                                    Feedback
                                </button>
                            </div>
                        </section>
                    </div>

                    {/* Innovative Metric Footer */}
                    <footer className="mt-16 pt-12 md:pt-16 border-t border-surface-variant">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10 text-center md:text-left hover:-translate-y-1 transition-transform">
                                <span className="text-5xl md:text-[56px] font-headline font-black text-primary leading-none tracking-tighter">5k+</span>
                                <p className="text-xs font-bold text-secondary uppercase tracking-widest mt-3">Active Users</p>
                            </div>
                            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10 text-center md:text-left hover:-translate-y-1 transition-transform">
                                <span className="text-5xl md:text-[56px] font-headline font-black text-primary leading-none tracking-tighter">99.9%</span>
                                <p className="text-xs font-bold text-secondary uppercase tracking-widest mt-3">Uptime Reliability</p>
                            </div>
                            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10 text-center md:text-left sm:col-span-2 md:col-span-1 hover:-translate-y-1 transition-transform">
                                <span className="text-5xl md:text-[56px] font-headline font-black text-primary leading-none tracking-tighter">150+</span>
                                <p className="text-xs font-bold text-secondary uppercase tracking-widest mt-3">Modules Deployed</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </main>

            <MobileNav />
        </div>
    );
};

export default About;
