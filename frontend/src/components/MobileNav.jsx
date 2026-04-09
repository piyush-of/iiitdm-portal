import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileNav = () => {
    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface-container-lowest border-t border-slate-100 px-6 py-3 flex justify-between items-center z-50 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
            <NavLink to="/dashboard" className={({isActive}) => `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-secondary' : 'text-slate-400 hover:text-secondary'}`}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
                <span className="text-[10px] font-bold">Dash</span>
            </NavLink>
            <NavLink to="/academics" className={({isActive}) => `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-secondary' : 'text-slate-400 hover:text-secondary'}`}>
                <span className="material-symbols-outlined">analytics</span>
                <span className="text-[10px] font-bold">Academics</span>
            </NavLink>
            <NavLink to="/placements" className={({isActive}) => `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-secondary' : 'text-slate-400 hover:text-secondary'}`}>
                <span className="material-symbols-outlined">work_outline</span>
                <span className="text-[10px] font-bold">Placed</span>
            </NavLink>
            <NavLink to="/campus" className={({isActive}) => `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-secondary' : 'text-slate-400 hover:text-secondary'}`}>
                <span className="material-symbols-outlined">account_balance</span>
                <span className="text-[10px] font-bold">Campus</span>
            </NavLink>
             <NavLink to="/about" className={({isActive}) => `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-secondary' : 'text-slate-400 hover:text-secondary'}`}>
                <span className="material-symbols-outlined">info</span>
                <span className="text-[10px] font-bold">About</span>
            </NavLink>
        </nav>
    );
};

export default MobileNav;
