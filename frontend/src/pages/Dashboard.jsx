import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';

const Dashboard = () => {
    const [profileData, setProfileData] = useState({
        name: 'Aditya',
        cgpa: '8.75',
        cgpaTrend: '+0.12',
        credits: 142,
        attendance: 88,
        highestPackage: '87.54',
        newOpportunities: 12,
        schedule: [
            { time: '09:00', title: 'Distributed Systems', location: 'CR-102', color: 'secondary' },
            { time: '11:30', title: 'Machine Learning Lab', location: 'Computing Center 2', color: 'slate-300' },
            { time: '15:00', title: 'Placement Prep Seminar', location: 'Auditorium', color: 'orange-500' }
        ]
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        // Fetch from backend API
        axios.get(`${API_URL}/api/student/profile`)
            .then(res => {
                setProfileData(res.data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error("Error fetching data from API wrapper, using default mock.", err);
                setIsLoading(false);
            });
    }, []);



    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-surface">
                <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="bg-surface text-on-surface font-body selection:bg-secondary-fixed min-h-screen">
            <Sidebar />

            <main className="md:ml-64 pb-20 md:pb-0">
                <Header title="IIITDM Jabalpur" />

                {/* Dashboard Canvas */}
                <div className="p-6 lg:p-12 max-w-7xl mx-auto space-y-10">
                    {/* Welcome Banner */}
                    <section className="relative overflow-hidden rounded-[2rem] p-10 lg:p-16 bg-gradient-to-br from-primary via-primary-container to-primary text-on-primary">
                        <div className="relative z-10 max-w-2xl">
                            <span className="inline-block py-1 px-4 rounded-full bg-secondary-container/20 text-secondary-fixed text-xs font-bold tracking-widest uppercase mb-4">Academic Portal v4.0</span>
                            <h2 className="text-4xl lg:text-6xl font-manrope font-extrabold tracking-tight mb-4">Welcome back, <span className="text-secondary-fixed">{profileData.name}</span></h2>
                            <p className="text-on-primary-container font-medium text-lg lg:text-xl leading-relaxed">Your semester progress is looking strong. You have 3 upcoming lab submissions and 2 recruitment tests scheduled for this week.</p>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>
                        <div className="absolute right-20 top-10 opacity-20 hidden lg:block">
                            <span className="material-symbols-outlined text-[12rem]" style={{ fontVariationSettings: "'wght' 100" }}>architecture</span>
                        </div>
                    </section>

                    {/* Main Grid: Bento Style */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Performance Overview */}
                        <div className="lg:col-span-8 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {/* CGPA Card */}
                                <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between aspect-square md:aspect-auto hover:-translate-y-1 transition-transform cursor-pointer">
                                    <span className="text-secondary font-bold text-sm tracking-widest uppercase font-manrope">Current CGPA</span>
                                    <div className="mt-4">
                                        <h3 className="text-5xl font-manrope font-black text-primary">{profileData.cgpa}</h3>
                                        <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-green-500 text-sm">trending_up</span>
                                            {profileData.cgpaTrend} from last semester
                                        </p>
                                    </div>
                                </div>
                                {/* Credits Card */}
                                <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform cursor-pointer">
                                    <span className="text-secondary font-bold text-sm tracking-widest uppercase font-manrope">Credits Earned</span>
                                    <div className="mt-4">
                                        <h3 className="text-5xl font-manrope font-black text-primary">{profileData.credits}</h3>
                                        <div className="mt-4 w-full bg-secondary-container/20 h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-secondary h-full rounded-full" style={{ width: `${(profileData.credits / 160) * 100}%` }}></div>
                                        </div>
                                        <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-tighter">{Math.round((profileData.credits / 160) * 100)}% of Degree requires</p>
                                    </div>
                                </div>
                                {/* Attendance Card */}
                                <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform cursor-pointer">
                                    <span className="text-secondary font-bold text-sm tracking-widest uppercase font-manrope">Attendance</span>
                                    <div className="mt-4">
                                        <h3 className="text-5xl font-manrope font-black text-primary">{profileData.attendance}%</h3>
                                        <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                                            Excellent Standing
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Trend Chart Section */}
                            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
                                <div className="flex justify-between items-center mb-8">
                                    <h4 className="font-manrope font-bold text-xl text-primary">Academic Performance Trend</h4>
                                    <div className="flex gap-2">
                                        <span className="bg-surface-container-low px-3 py-1 rounded-full text-xs font-bold text-primary">Sem 1-6</span>
                                    </div>
                                </div>
                                <div className="h-48 flex items-end justify-between gap-2 px-4">
                                    <div className="w-full bg-surface-container-low rounded-t-lg relative group h-[70%] cursor-pointer hover:opacity-80">
                                        <div className="absolute inset-x-0 bottom-0 bg-blue-200/50 rounded-t-lg h-full"></div>
                                    </div>
                                    <div className="w-full bg-surface-container-low rounded-t-lg relative group h-[75%] cursor-pointer hover:opacity-80">
                                        <div className="absolute inset-x-0 bottom-0 bg-blue-300/50 rounded-t-lg h-full"></div>
                                    </div>
                                    <div className="w-full bg-surface-container-low rounded-t-lg relative group h-[82%] cursor-pointer hover:opacity-80">
                                        <div className="absolute inset-x-0 bottom-0 bg-blue-400/50 rounded-t-lg h-full"></div>
                                    </div>
                                    <div className="w-full bg-surface-container-low rounded-t-lg relative group h-[80%] cursor-pointer hover:opacity-80">
                                        <div className="absolute inset-x-0 bottom-0 bg-blue-500/50 rounded-t-lg h-full"></div>
                                    </div>
                                    <div className="w-full bg-surface-container-low rounded-t-lg relative group h-[85%] cursor-pointer hover:opacity-80">
                                        <div className="absolute inset-x-0 bottom-0 bg-blue-600/50 rounded-t-lg h-full"></div>
                                    </div>
                                    <div className="w-full bg-surface-container-low rounded-t-lg relative group h-[90%] cursor-pointer hover:opacity-80">
                                        <div className="absolute inset-x-0 bottom-0 bg-primary-container rounded-t-lg h-full"></div>
                                    </div>
                                </div>
                                <div className="flex justify-between mt-4 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-6">
                                    <span>Sem 1</span>
                                    <span>Sem 2</span>
                                    <span>Sem 3</span>
                                    <span>Sem 4</span>
                                    <span>Sem 5</span>
                                    <span>Sem 6</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="lg:col-span-4 space-y-6">
                            {/* Placement Quick View */}
                            <div className="bg-tertiary-fixed p-8 rounded-xl shadow-sm relative overflow-hidden group cursor-pointer">
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="bg-tertiary-container text-on-tertiary-container text-[10px] font-black py-1 px-3 rounded-full uppercase tracking-widest">Placement Hotspot</span>
                                        <span className="material-symbols-outlined text-on-tertiary-fixed-variant">trending_up</span>
                                    </div>
                                    <h4 className="text-on-tertiary-fixed font-manrope font-bold text-sm uppercase tracking-tighter opacity-70">Highest Domestic Package</h4>
                                    <div className="text-4xl font-manrope font-black text-on-tertiary-fixed mt-1">₹{profileData.highestPackage} <span className="text-xl">LPA</span></div>
                                    <div className="mt-8 pt-6 border-t border-on-tertiary-fixed/10 flex items-center justify-between">
                                        <span className="text-on-tertiary-fixed font-bold text-sm">New Opportunities</span>
                                        <span className="bg-white text-tertiary-container h-8 w-8 rounded-full flex items-center justify-center font-black text-sm shadow-sm transition-transform group-hover:scale-110">{profileData.newOpportunities}</span>
                                    </div>
                                </div>
                                <div className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-10 group-hover:scale-110 transition-transform duration-500">
                                    <span className="material-symbols-outlined text-[10rem]">workspace_premium</span>
                                </div>
                            </div>

                            {/* Upcoming Schedule */}
                            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
                                <h4 className="font-manrope font-bold text-xl text-primary mb-6">Today's Schedule</h4>
                                <div className="space-y-4">
                                    {profileData.schedule.map((item, idx) => (
                                        <div className="flex gap-4" key={idx}>
                                            <div className="flex flex-col items-center">
                                                <span className="text-xs font-bold text-primary">{item.time}</span>
                                                {idx !== profileData.schedule.length - 1 && <div className="w-px h-full bg-slate-100 my-2"></div>}
                                            </div>
                                            <div className="flex-1 pb-2">
                                                <div className={`p-4 rounded-xl bg-surface-container-low border-l-4 border-${item.color} transition-all hover:translate-x-1 duration-300 cursor-pointer`}>
                                                    <h5 className="font-bold text-sm text-primary">{item.title}</h5>
                                                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                                                        <span className="material-symbols-outlined text-[14px]">location_on</span> {item.location}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="p-8 text-center pb-24 md:pb-8">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">Built for the future of IIITDM Jabalpur</p>
                </footer>
            </main>

            <MobileNav />
        </div>
    );
};

export default Dashboard;
