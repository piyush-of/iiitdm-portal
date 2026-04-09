import React from 'react';

const Header = ({ title = "IIITDM Jabalpur" }) => {
    return (
        <header className="bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl sticky top-0 w-full z-30 shadow-sm dark:shadow-none flex justify-between items-center px-8 py-3">
            <div className="flex items-center gap-4">
                <span className="md:hidden material-symbols-outlined text-primary cursor-pointer">menu</span>
                <span className="text-lg font-extrabold text-blue-900 dark:text-white uppercase tracking-wider font-manrope">{title}</span>
            </div>
            <div className="flex items-center gap-6">
                <div className="relative hidden lg:block">
                    <input className="bg-surface-container-high border-none rounded-full px-6 py-2 text-sm w-64 focus:ring-2 focus:ring-secondary/20 transition-all outline-none" placeholder="Search resources..." type="text"/>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                </div>
                <div className="flex items-center gap-4 text-blue-900 dark:text-blue-100">
                    <button className="hover:bg-blue-50 dark:hover:bg-blue-900/30 p-2 rounded-full transition-colors duration-300">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                    <button className="hover:bg-blue-50 dark:hover:bg-blue-900/30 p-2 rounded-full transition-colors duration-300">
                        <span className="material-symbols-outlined">help</span>
                    </button>
                    <div className="h-10 w-10 rounded-full bg-surface-variant overflow-hidden border-2 border-white shadow-sm">
                        <img alt="Student Profile Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_rsHK2j1O5Ip5-C3f65LmZUMLFmJYGzl_GG6jINcOiN0jbv06Pz-nx95cK5qv_Qu2yPDHXl63uwfg86zyleG-hEl84TWNxPZJiBLCyxogJrTtldgQimNSHKRuQG4WaoeEKJlUI3OZCXV9lp9TsyGkgLTBcxpEUdoyVjVQLG57YuGNi3Ro4r7jdyE4AIkTZxxKWHjzOowP--vV7lTeeFypdfqUIBIBgyifm4xYW9kNzYNcWdqF-ZSaeH5Mpe47-dNs-HicTZ95J_4"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
