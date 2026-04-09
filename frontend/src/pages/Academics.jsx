import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';

const Academics = () => {
    return (
        <div className="bg-surface text-on-surface flex min-h-screen font-body selection:bg-secondary-fixed">
            <Sidebar />

            <main className="flex-1 md:ml-64 min-h-screen pb-20">
                <Header title="IIITDM Jabalpur" />

                {/* Content Area */}
                <div className="px-6 lg:px-10 py-12 max-w-7xl mx-auto">
                    {/* Hero Stats / Asymmetric Layout */}
                    <section className="grid grid-cols-12 gap-8 mb-12">
                        <div className="col-span-12 lg:col-span-8">
                            <h2 className="text-4xl font-bold text-primary tracking-tight mb-2 font-headline">Academic Performance</h2>
                            <p className="text-on-surface-variant font-medium">B.Tech - Computer Science & Engineering (Batch 2021-25)</p>
                        </div>

                        {/* CGPA & Credit Progress Bento Cards */}
                        <div className="col-span-12 md:col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl p-8 flex flex-col md:flex-row items-center gap-12 shadow-sm hover:-translate-y-1 transition-transform cursor-pointer">
                            <div className="flex-1 w-full relative">
                                <div className="flex items-end gap-2 mb-1">
                                    <span className="text-6xl font-black text-primary leading-none font-headline">8.72</span>
                                    <span className="text-xl font-bold text-secondary mb-1">CGPA</span>
                                </div>
                                <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-widest">Current Standing</p>
                                
                                <div className="mt-6 flex flex-wrap gap-4">
                                    <div className="px-4 py-2 bg-surface-container-low rounded-lg flex-1 md:flex-none">
                                        <p className="text-[10px] font-bold text-on-surface-variant uppercase">SGPA (Last Sem)</p>
                                        <p className="text-xl font-bold text-primary font-headline">9.10</p>
                                    </div>
                                    <div className="px-4 py-2 bg-surface-container-low rounded-lg flex-1 md:flex-none">
                                        <p className="text-[10px] font-bold text-on-surface-variant uppercase">Rank in Batch</p>
                                        <p className="text-xl font-bold text-primary font-headline">12 / 120</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Circular Progress Gauge */}
                            <div className="w-40 h-40 relative flex items-center justify-center shrink-0">
                                <svg className="w-full h-full -rotate-90">
                                    <circle className="text-secondary-container/20" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeWidth="12"></circle>
                                    <circle className="text-secondary" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeDasharray="440" strokeDashoffset="110" strokeLinecap="round" strokeWidth="12"></circle>
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-2xl font-bold text-primary font-headline">124</span>
                                    <span className="text-[10px] font-bold text-on-surface-variant uppercase">of 160 Cr</span>
                                </div>
                            </div>
                        </div>

                        {/* CGPA Predictor Feature Card */}
                        <div className="col-span-12 md:col-span-12 lg:col-span-4 bg-primary text-on-primary rounded-xl p-8 overflow-hidden relative group cursor-pointer hover:shadow-xl transition-all">
                            <div className="relative z-10 h-full flex flex-col">
                                <span className="material-symbols-outlined text-4xl text-on-tertiary-container mb-4">auto_awesome</span>
                                <h3 className="text-xl font-bold mb-2 font-headline">CGPA Predictor</h3>
                                <p className="text-sm text-on-primary-container font-medium mb-6">Estimate your final graduation grade based on targeted semester goals.</p>
                                
                                <div className="space-y-4 mt-auto">
                                    <div className="bg-primary-container/50 p-4 rounded-lg">
                                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-on-primary-container mb-2">
                                            <span>Target Sem 7</span>
                                            <span>Grade A</span>
                                        </div>
                                        <input className="w-full h-1.5 bg-on-primary-fixed-variant rounded-full appearance-none accent-secondary" type="range" defaultValue={80} />
                                    </div>
                                    <button className="w-full py-3 bg-tertiary-fixed text-on-tertiary-fixed font-bold rounded-xl text-xs uppercase tracking-widest transition-all hover:bg-tertiary-fixed-dim hover:scale-95 duration-300">
                                        Calculate Potential
                                    </button>
                                </div>
                            </div>
                            {/* Aesthetic backdrop grain/gradient */}
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary via-primary to-secondary/20 opacity-50 pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
                        </div>
                    </section>

                    {/* Detailed Grid */}
                    <div className="grid grid-cols-12 gap-8">
                        {/* Performance Analytics Chart Area */}
                        <div className="col-span-12 lg:col-span-7 space-y-8">
                            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
                                <div className="flex justify-between items-center mb-10">
                                    <div>
                                        <h3 className="text-xl font-bold text-primary font-headline">Performance Analytics</h3>
                                        <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">Semester-wise Comparison</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-secondary"></div>
                                            <span className="text-[10px] font-bold text-on-surface-variant">YOURS</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-surface-container-high"></div>
                                            <span className="text-[10px] font-bold text-on-surface-variant">BATCH AVG</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-end justify-between h-64 px-2 md:px-4">
                                    {/* Sem 1 */}
                                    <div className="flex flex-col items-center gap-3 w-full group cursor-pointer">
                                        <div className="flex gap-1.5 items-end h-48 w-full justify-center relative">
                                            <div className="w-3 md:w-4 bg-surface-container-high rounded-t-full h-[65%]"></div>
                                            <div className="w-3 md:w-4 bg-secondary rounded-t-full h-[80%] transition-all group-hover:h-[82%] group-hover:bg-secondary-fixed"></div>
                                            <div className="absolute -top-6 bg-primary text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">8.0 SGPA</div>
                                        </div>
                                        <span className="text-[10px] font-bold text-on-surface-variant">SEM 1</span>
                                    </div>
                                    {/* Sem 2 */}
                                    <div className="flex flex-col items-center gap-3 w-full group cursor-pointer">
                                        <div className="flex gap-1.5 items-end h-48 w-full justify-center relative">
                                            <div className="w-3 md:w-4 bg-surface-container-high rounded-t-full h-[70%]"></div>
                                            <div className="w-3 md:w-4 bg-secondary rounded-t-full h-[85%] transition-all group-hover:h-[87%] group-hover:bg-secondary-fixed"></div>
                                            <div className="absolute -top-6 bg-primary text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">8.5 SGPA</div>
                                        </div>
                                        <span className="text-[10px] font-bold text-on-surface-variant">SEM 2</span>
                                    </div>
                                    {/* Sem 3 */}
                                    <div className="flex flex-col items-center gap-3 w-full group cursor-pointer">
                                        <div className="flex gap-1.5 items-end h-48 w-full justify-center relative">
                                            <div className="w-3 md:w-4 bg-surface-container-high rounded-t-full h-[75%]"></div>
                                            <div className="w-3 md:w-4 bg-secondary rounded-t-full h-[92%] transition-all group-hover:h-[94%] group-hover:bg-secondary-fixed"></div>
                                            <div className="absolute -top-6 bg-primary text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">9.2 SGPA</div>
                                        </div>
                                        <span className="text-[10px] font-bold text-on-surface-variant">SEM 3</span>
                                    </div>
                                    {/* Sem 4 */}
                                    <div className="flex flex-col items-center gap-3 w-full group cursor-pointer">
                                        <div className="flex gap-1.5 items-end h-48 w-full justify-center relative">
                                            <div className="w-3 md:w-4 bg-surface-container-high rounded-t-full h-[68%]"></div>
                                            <div className="w-3 md:w-4 bg-secondary rounded-t-full h-[88%] transition-all group-hover:h-[90%] group-hover:bg-secondary-fixed"></div>
                                            <div className="absolute -top-6 bg-primary text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">8.8 SGPA</div>
                                        </div>
                                        <span className="text-[10px] font-bold text-on-surface-variant">SEM 4</span>
                                    </div>
                                    {/* Sem 5 */}
                                    <div className="flex flex-col items-center gap-3 w-full group cursor-pointer">
                                        <div className="flex gap-1.5 items-end h-48 w-full justify-center relative">
                                            <div className="w-3 md:w-4 bg-surface-container-high rounded-t-full h-[72%]"></div>
                                            <div className="w-3 md:w-4 bg-secondary rounded-t-full h-[95%] transition-all group-hover:h-[97%] group-hover:bg-secondary-fixed"></div>
                                            <div className="absolute -top-6 bg-primary text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">9.5 SGPA</div>
                                        </div>
                                        <span className="text-[10px] font-bold text-on-surface-variant">SEM 5</span>
                                    </div>
                                    {/* Sem 6 */}
                                    <div className="flex flex-col items-center gap-3 w-full group cursor-pointer">
                                        <div className="flex gap-1.5 items-end h-48 w-full justify-center relative">
                                            <div className="w-3 md:w-4 bg-surface-container-high rounded-t-full h-[70%]"></div>
                                            <div className="w-3 md:w-4 bg-secondary rounded-t-full h-[91%] transition-all group-hover:h-[93%] group-hover:bg-secondary-fixed"></div>
                                            <div className="absolute -top-6 bg-primary text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">9.1 SGPA</div>
                                        </div>
                                        <span className="text-[10px] font-bold text-on-surface-variant">SEM 6</span>
                                    </div>
                                </div>
                            </div>

                            {/* Semester Grade Table */}
                            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
                                <div className="px-6 md:px-8 py-6 border-b border-outline-variant/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <h3 className="text-xl font-bold text-primary font-headline">Current Semester Records</h3>
                                    <div className="flex gap-2">
                                        <button className="px-4 py-2 bg-surface-container-low text-primary text-xs font-bold rounded-lg hover:bg-surface-container-high transition-colors">
                                            Download Transcript
                                        </button>
                                        <div className="relative">
                                            <select className="appearance-none bg-surface-container-low text-primary text-xs font-bold rounded-lg px-4 py-2 pr-8 border-none focus:ring-0 focus:outline-none">
                                                <option>Semester 6</option>
                                                <option>Semester 5</option>
                                            </select>
                                            <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[16px] pointer-events-none">expand_more</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead className="bg-surface-container-low/50">
                                            <tr>
                                                <th className="px-6 md:px-8 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Course Code</th>
                                                <th className="px-6 md:px-8 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Course Name</th>
                                                <th className="px-6 md:px-8 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-center">Credits</th>
                                                <th className="px-6 md:px-8 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-right">Grade</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-outline-variant/5">
                                            {[
                                                { code: 'CS304', name: 'Compiler Design', creds: 4, grade: 'A+', bg: 'bg-green-100', text: 'text-green-700' },
                                                { code: 'CS306', name: 'Computer Networks', creds: 4, grade: 'A', bg: 'bg-blue-100', text: 'text-blue-700' },
                                                { code: 'HS301', name: 'Professional Ethics', creds: 2, grade: 'A', bg: 'bg-blue-100', text: 'text-blue-700' },
                                                { code: 'CS308', name: 'Database Management Systems', creds: 4, grade: 'A+', bg: 'bg-green-100', text: 'text-green-700' },
                                                { code: 'PR302', name: 'Major Project Phase-I', creds: 6, grade: 'B+', bg: 'bg-orange-100', text: 'text-orange-700' }
                                            ].map((course, idx) => (
                                                <tr key={idx} className="hover:bg-surface-container-low/30 transition-colors group cursor-pointer">
                                                    <td className="px-6 md:px-8 py-5 text-sm font-bold text-primary">{course.code}</td>
                                                    <td className="px-6 md:px-8 py-5 text-sm font-medium text-on-surface group-hover:text-secondary transition-colors">{course.name}</td>
                                                    <td className="px-6 md:px-8 py-5 text-sm font-semibold text-center">{course.creds}</td>
                                                    <td className="px-6 md:px-8 py-5 text-right"><span className={`px-3 py-1 ${course.bg} ${course.text} rounded-full text-xs font-black`}>{course.grade}</span></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="col-span-12 lg:col-span-5 space-y-8">
                            {/* Faculty Mentors Section */}
                            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
                                <h3 className="text-xl font-bold text-primary mb-6 font-headline">Faculty Mentors</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 group cursor-pointer">
                                        <div className="w-14 h-14 rounded-xl overflow-hidden shadow-sm shrink-0">
                                            <img alt="Faculty Mentor 1" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6rpr473NyRQYRAdUTuHwALwFtI-aUpIklYzAMsEgsznIT3oUzxl8JQvN3m_S_uEEp5xG6WAE2ZUngU4iVGKf95tejPLZb10cB4G9FN8NAljCGT7jwIGzHAG_KOOO7awP7XE4my_ecw_4k27yNnAJp0vRXkKKemcSXvSINW8JCiZ6VUl4FRjPicVjSR2DBGLHgvnjTVlQvhDvaYoDUvR72bjMGbF119UmDqnkAb-BuWeq0PtCJCvuK8TqVxBbK5mg08HNTxW497xI"/>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-primary font-headline">Dr. Rajesh Gupta</p>
                                            <p className="text-xs font-medium text-on-surface-variant">Academic Supervisor</p>
                                            <div className="flex gap-3 mt-2">
                                                <span className="material-symbols-outlined text-[18px] text-secondary hover:text-primary transition-colors hover:scale-110">mail</span>
                                                <span className="material-symbols-outlined text-[18px] text-secondary hover:text-primary transition-colors hover:scale-110">calendar_month</span>
                                            </div>
                                        </div>
                                        <span className="material-symbols-outlined text-slate-300 group-hover:text-secondary group-hover:translate-x-1 transition-all">arrow_forward_ios</span>
                                    </div>
                                    <div className="flex items-center gap-4 group cursor-pointer">
                                        <div className="w-14 h-14 rounded-xl overflow-hidden shadow-sm shrink-0">
                                            <img alt="Faculty Mentor 2" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoqRUpC3CZrb-AYriOgortzhh_z6tlyZPjcyQSWVgQ17p-67onAcUXf6Fz9FoLsIHOfb4cud1RczTHTXgGaU4mXuuDcSqTU_n50WzJqk4Kaiqt_0p-6I8MYFDg9SSXV44yPm9HXDTODtXcdD5A-LphLZUAkv0-D4RDbL0wQqg52vIWVg51pJ6nKetlhJS9gv7O02pN7mIi2bsgNeRQYA4UCSHGaorshk68WCaGIxY516275CuDvckWTcnTCt3QfflKANwZlGzcmik"/>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-primary font-headline">Dr. Anita Sharma</p>
                                            <p className="text-xs font-medium text-on-surface-variant">Research Mentor</p>
                                            <div className="flex gap-3 mt-2">
                                                <span className="material-symbols-outlined text-[18px] text-secondary hover:text-primary transition-colors hover:scale-110">mail</span>
                                                <span className="material-symbols-outlined text-[18px] text-secondary hover:text-primary transition-colors hover:scale-110">chat</span>
                                            </div>
                                        </div>
                                        <span className="material-symbols-outlined text-slate-300 group-hover:text-secondary group-hover:translate-x-1 transition-all">arrow_forward_ios</span>
                                    </div>
                                </div>
                                <button className="w-full mt-8 py-3 bg-surface-container-low text-primary font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-surface-container-high transition-all active:scale-95">
                                    View Mentoring History
                                </button>
                            </div>

                            {/* Quick Insights Bento Card */}
                            <div className="bg-surface-container-low rounded-xl p-8 hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="material-symbols-outlined text-secondary">lightbulb</span>
                                    <h3 className="text-lg font-bold text-primary font-headline">Academic Insight</h3>
                                </div>
                                <div className="p-6 bg-surface-container-lowest rounded-xl shadow-sm border-l-4 border-secondary hover:border-l-8 transition-all cursor-pointer">
                                    <p className="text-sm leading-relaxed text-on-surface font-medium">
                                        "Your performance in <span className="font-bold text-secondary">CS304</span> is in the top 5% of the batch. Consider applying for the TA role in the upcoming semester."
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <div className="p-4 bg-surface-container-highest/40 rounded-xl hover:bg-surface-container-highest/70 transition-colors cursor-pointer">
                                        <p className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">Consistency</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xl font-bold text-primary font-headline">94%</span>
                                            <span className="material-symbols-outlined text-green-500 text-[16px]">trending_up</span>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-surface-container-highest/40 rounded-xl hover:bg-surface-container-highest/70 transition-colors cursor-pointer">
                                        <p className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">Credits/Sem</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xl font-bold text-primary font-headline">22.4</span>
                                            <span className="material-symbols-outlined text-blue-500 text-[16px]">horizontal_rule</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Graduation Status Tracking */}
                            <div className="bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl p-8 relative overflow-hidden group">
                                <h3 className="text-lg font-bold mb-6 relative z-10 font-headline">Degree Progress</h3>
                                <div className="space-y-4 relative z-10">
                                    {/* Progress Items */}
                                    <div>
                                        <div className="flex justify-between text-xs font-bold mb-2 uppercase tracking-wide">
                                            <span>Core Courses</span>
                                            <span>24 / 28</span>
                                        </div>
                                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-secondary-container w-[85%] rounded-full group-hover:bg-secondary-fixed transition-colors"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs font-bold mb-2 uppercase tracking-wide">
                                            <span>Electives</span>
                                            <span>10 / 12</span>
                                        </div>
                                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-secondary-container w-[78%] rounded-full group-hover:bg-secondary-fixed transition-colors"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs font-bold mb-2 uppercase tracking-wide">
                                            <span>Social Service</span>
                                            <span>2 / 2</span>
                                        </div>
                                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-400 w-full rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* Abstract overlay */}
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <MobileNav />
        </div>
    );
};

export default Academics;
