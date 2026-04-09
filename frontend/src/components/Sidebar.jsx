import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        navigate('/login');
    };

    return (
        <aside className="h-screen w-64 fixed left-0 top-0 bg-slate-100 dark:bg-slate-900 flex flex-col py-6 z-40 hidden md:flex">
            <div className="px-8 mb-10">
                <h1 className="font-black text-xl text-blue-900 dark:text-white leading-none">The Academic Architect</h1>
                <p className="text-[10px] font-bold tracking-[0.2em] text-blue-900/60 dark:text-white/60 mt-1 uppercase">IIITDM JABALPUR</p>
            </div>

            <nav className="flex-1 flex flex-col gap-1">
                <NavLink 
                    to="/dashboard" 
                    className={({isActive}) => `flex items-center gap-3 px-8 py-4 font-manrope text-sm tracking-tight transition-all duration-300 ${isActive ? 'text-blue-900 dark:text-white font-bold border-r-4 border-orange-600 dark:border-orange-500 bg-white dark:bg-slate-800/50' : 'text-slate-500 dark:text-slate-400 hover:text-blue-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 font-semibold'}`}
                >
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
                    <span>Dashboard</span>
                </NavLink>
                <NavLink 
                    to="/academics" 
                    className={({isActive}) => `flex items-center gap-3 px-8 py-4 font-manrope text-sm tracking-tight transition-all duration-300 ${isActive ? 'text-blue-900 dark:text-white font-bold border-r-4 border-orange-600 dark:border-orange-500 bg-white dark:bg-slate-800/50' : 'text-slate-500 dark:text-slate-400 hover:text-blue-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 font-semibold'}`}
                >
                    <span className="material-symbols-outlined">analytics</span>
                    <span>Academic Records</span>
                </NavLink>
                <NavLink 
                    to="/placements" 
                    className={({isActive}) => `flex items-center gap-3 px-8 py-4 font-manrope text-sm tracking-tight transition-all duration-300 ${isActive ? 'text-blue-900 dark:text-white font-bold border-r-4 border-orange-600 dark:border-orange-500 bg-white dark:bg-slate-800/50' : 'text-slate-500 dark:text-slate-400 hover:text-blue-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 font-semibold'}`}
                >
                    <span className="material-symbols-outlined">work_outline</span>
                    <span>Placement Portal</span>
                </NavLink>
                <NavLink 
                    to="/campus" 
                    className={({isActive}) => `flex items-center gap-3 px-8 py-4 font-manrope text-sm tracking-tight transition-all duration-300 ${isActive ? 'text-blue-900 dark:text-white font-bold border-r-4 border-orange-600 dark:border-orange-500 bg-white dark:bg-slate-800/50' : 'text-slate-500 dark:text-slate-400 hover:text-blue-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 font-semibold'}`}
                >
                    <span className="material-symbols-outlined">account_balance</span>
                    <span>Campus Resources</span>
                </NavLink>
                <NavLink 
                    to="/about" 
                    className={({isActive}) => `flex items-center gap-3 px-8 py-4 font-manrope text-sm tracking-tight transition-all duration-300 ${isActive ? 'text-blue-900 dark:text-white font-bold border-r-4 border-orange-600 dark:border-orange-500 bg-white dark:bg-slate-800/50' : 'text-slate-500 dark:text-slate-400 hover:text-blue-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 font-semibold'}`}
                >
                    <span className="material-symbols-outlined">info</span>
                    <span>About Portal</span>
                </NavLink>
            </nav>

            <div className="px-6 mt-auto">
                <button className="w-full bg-primary text-on-primary py-3 px-4 rounded-xl font-manrope font-bold text-sm hover:bg-primary-container transition-all active:scale-95">
                    Quick Support
                </button>
                <div className="mt-6 flex flex-col gap-1">
                    <a className="flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-blue-900 font-manrope text-sm font-semibold cursor-pointer">
                        <span className="material-symbols-outlined">settings</span>
                        <span>Settings</span>
                    </a>
                    <button onClick={handleSignOut} className="flex items-center gap-3 px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-blue-900 font-manrope text-sm font-semibold w-full text-left">
                        <span className="material-symbols-outlined">logout</span>
                        <span>Sign Out</span>
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
