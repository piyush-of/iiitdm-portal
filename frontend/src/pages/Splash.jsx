import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Automatically transition to Portal Access Selection after 5 seconds
        const timer = setTimeout(() => {
            navigate('/selection');
        }, 5000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="bg-surface font-body text-on-surface flex items-center justify-center min-h-screen overflow-hidden">
            {/* Splash Container */}
            <div className="relative flex flex-col items-center justify-center text-center p-8 max-w-4xl w-full">
                {/* Background Subtle Texture */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-surface-container-low via-surface to-surface-bright opacity-60"></div>
                
                {/* Institutional Context */}
                <div className="mb-12 flex flex-col items-center gap-3">
                    <div className="w-16 h-16 bg-surface-container-lowest rounded-xl shadow-[0_12px_32px_rgba(13,29,42,0.04)] flex items-center justify-center p-3 mb-2">
                        <img 
                            alt="IIITDM Jabalpur Logo" 
                            className="w-full h-full object-contain grayscale brightness-50" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt2GiA5gOCKEMrWUz1qvRGzos766XDB7ZMPytQaVxmaVcvArW2K09kIgXbyIU61dRKFc1ZXRZWX3R1GLbzsJ7zQwGS_OE41Nm0R_ioS1qMo4Aq9GaLhPz-1tSXJpBRCBaQppHDyMw0OnGrGOfjvccD32kafcqoU-kmhxkvjmh6YHdU8spxvOinEErbobhMqhUt0mX3hfrU3-jNluxP9-8Kw6P-gJDo-DcSfmsdAbhcRdj3x16r3GlG-URsFIlX05lsl4ZGBjrPyt0"
                        />
                    </div>
                    <span className="font-headline font-bold text-secondary uppercase tracking-[0.2em] text-xs">IIITDM Jabalpur</span>
                </div>
                
                {/* Main Identity Canvas */}
                <div className="relative inline-block px-4">
                    {/* Typographic Anchor */}
                    <h1 className="font-headline font-extrabold text-5xl md:text-7xl lg:text-8xl text-primary tracking-tighter relative z-10">
                        <span className="animate-typewriter inline-block overflow-hidden whitespace-nowrap border-r-[3px] border-primary w-0" style={{ animation: "typewriter 2.5s steps(22) forwards, blink 0.75s step-end infinite" }}>The Academic Architect</span>
                    </h1>
                    {/* Horizontal Flash Effect */}
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-secondary/40 to-white z-20 pointer-events-none" style={{ animation: "sweep 1.5s ease-in-out 3s forwards", opacity: 0 }}></div>
                    
                    {/* Architectural Underline */}
                    <div className="h-1 w-24 bg-tertiary-container mt-6 mx-auto rounded-full opacity-0" style={{ animation: "fadeIn 1s ease-out 3.5s forwards" }}></div>
                </div>
                
                {/* Subtle Label Footer */}
                <div className="mt-16 flex flex-col items-center gap-4 opacity-0" style={{ animation: "fadeIn 1s ease-out 3.5s forwards" }}>
                    <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-full cursor-pointer hover:bg-surface-container-highest transition-colors duration-300" onClick={() => navigate('/selection')}>
                        <span className="material-symbols-outlined text-[18px] text-on-surface-variant">lock</span>
                        <span className="font-label text-xs font-semibold text-on-surface-variant tracking-widest uppercase">Secure Portal Access</span>
                    </div>
                    
                    {/* Loading Indicator */}
                    <div className="w-48 h-[2px] bg-surface-container-high rounded-full overflow-hidden">
                        <div className="h-full bg-secondary w-1/3 rounded-full" style={{ animation: "progress 2s infinite ease-in-out" }}></div>
                    </div>
                </div>
                
                {/* Geometric Background Elements */}
                <div className="fixed -top-24 -left-24 w-96 h-96 bg-surface-container-low rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <div className="fixed -bottom-48 -right-24 w-[30rem] h-[30rem] bg-surface-container-high rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
            </div>
            
            {/* Background Data Texture */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKJxv3YHPP9j0-vqVHZsdzguX4dp0a5gM0pdzvXqOAo73HgLkydMgX8pqUm0De_y1UYxTysR6DXhZoqQbFfT5m1Wm8tiTnFBwQnnds8gF_Bi419p4HXc1l6tf9EIL-Tg5d0eqRMWp4PcRWQy9xy1dk5g0odIlFUoKgu8JmphLnfQ79aJJaTpND35VxwfjCxfntxikpASMKL0kyde61FJPsvndso33xFpcTK-N0gfU1Fbldl4xsvMbv2yIBUyMHs7vP8LmYuO7SDfw')" }}></div>
            
            <style>{`
                @keyframes typewriter {
                    from { width: 0; }
                    to { width: 100%; }
                }
                @keyframes blink {
                    50% { border-color: transparent; }
                }
                @keyframes sweep {
                    0% { transform: translateX(-100%) skewX(-20deg); opacity: 0; }
                    50% { opacity: 0.8; }
                    100% { transform: translateX(200%) skewX(-20deg); opacity: 0; }
                }
                @keyframes fadeIn {
                    to { opacity: 1; }
                }
                @keyframes progress {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(300%); }
                }
            `}</style>
        </div>
    );
};

export default Splash;
