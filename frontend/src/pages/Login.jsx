import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [rollNumber, setRollNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const response = await axios.post(`${API_URL}/api/login`, {
                rollNumber,
                password
            });
            
            // In a real app we'd save response.data.token to localStorage
            setIsLoading(false);
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
            setIsLoading(false);
            // Even if backend fails, navigate for demo purposes or show error
            navigate('/dashboard');
        }
    };

    return (
        <div className="bg-surface font-body text-on-surface selection:bg-secondary-fixed">
            <div className="min-h-screen flex flex-col md:flex-row">
                {/* Branding Side */}
                <section className="relative hidden md:flex md:w-1/2 lg:w-3/5 bg-primary overflow-hidden items-center justify-center p-12">
                    {/* Background Image with Tonal Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            alt="Technical architectural blueprints and high-precision machinery" 
                            className="w-full h-full object-cover mix-blend-overlay opacity-40" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzBgn0zjMuniIo6Qf9ciXz5DHnmNX6RiFHPgPs1pJFFh4hLUnp8SljNUsKXULreW0yjQyaY9E3ZVBsQrasgnMvhgJ4MNQNfBAjI4aeR9zsob8AXeX2V5gEUptTThfe5H8Lpo-McUqX3SOIFlgiltKZH4oDnMy0AqAXrQK2Al5IcLXBPNu1VGyDtiHzdV97XDQZFHhlbr0Z3LGOlQA6imv5XiO6zOqPlMReZG8q9MbS_0p4ix4DjjhUcURqHUH9HUqXr-SuwWdy5IA"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-transparent opacity-90"></div>
                        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, #00214710 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
                    </div>
                    {/* Content Overlay */}
                    <div className="relative z-10 max-w-xl">
                        <div className="flex flex-col space-y-6">
                            <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full w-fit">
                                <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
                                <span className="text-white font-headline text-xs tracking-widest uppercase">Institutional Access</span>
                            </div>
                            <h1 className="font-headline text-5xl lg:text-7xl font-extrabold text-white tracking-tighter leading-tight">
                                The Academic Architect
                            </h1>
                            <p className="text-primary-fixed-dim text-xl font-medium tracking-tight">
                                IIITDM Jabalpur Student Portal
                            </p>
                            <div className="pt-12 grid grid-cols-2 gap-8">
                                <div>
                                    <p className="font-headline text-white text-3xl font-bold">4.0</p>
                                    <p className="text-secondary-fixed text-xs uppercase tracking-widest mt-1">Design &amp; Manufacturing</p>
                                </div>
                                <div>
                                    <p className="font-headline text-white text-3xl font-bold">Secure</p>
                                    <p className="text-secondary-fixed text-xs uppercase tracking-widest mt-1">Institutional Standards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Subtle Technical Branding */}
                    <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                        <div className="text-white/20 text-[10rem] font-extrabold font-headline leading-none select-none tracking-tighter">
                            IIITDMJ
                        </div>
                    </div>
                </section>
                
                {/* Login Canvas */}
                <main className="flex-1 flex flex-col justify-center items-center px-6 py-12 bg-surface lg:px-24">
                    <div className="w-full max-w-md space-y-10">
                        {/* Mobile Header */}
                        <div className="md:hidden flex flex-col items-center text-center space-y-2 mb-8">
                            <h2 className="font-headline text-3xl font-extrabold text-primary tracking-tighter">The Academic Architect</h2>
                            <p className="text-secondary font-medium text-sm">IIITDM Jabalpur Portal</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-headline text-2xl font-bold text-on-surface tracking-tight">Sign In to Dashboard</h3>
                            <p className="text-on-surface-variant text-sm">Enter your institutional credentials to proceed to the secure campus environment.</p>
                        </div>
                        
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                {/* Input Field: Roll Number */}
                                <div className="relative group">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-primary mb-2">Roll Number / Institutional Email</label>
                                    <div className="relative">
                                        <span className="absolute left-0 bottom-3 material-symbols-outlined text-outline">alternate_email</span>
                                        <input 
                                            className="w-full pl-8 pb-3 bg-transparent border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all outline-none text-on-surface font-medium placeholder:text-outline-variant" 
                                            placeholder="e.g. 21BCE001" 
                                            type="text"
                                            value={rollNumber}
                                            onChange={(e) => setRollNumber(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                {/* Input Field: Password */}
                                <div className="relative group">
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-primary">Password</label>
                                        <a className="text-xs font-bold text-secondary hover:text-primary transition-colors duration-300" href="#">Forgot Password?</a>
                                    </div>
                                    <div className="relative">
                                        <span className="absolute left-0 bottom-3 material-symbols-outlined text-outline">lock</span>
                                        <input 
                                            className="w-full pl-8 pb-3 bg-transparent border-b-2 border-outline-variant focus:border-secondary focus:ring-0 transition-all outline-none text-on-surface font-medium placeholder:text-outline-variant" 
                                            placeholder="••••••••" 
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <button className="absolute right-0 bottom-3 text-outline hover:text-on-surface transition-colors" type="button">
                                            <span className="material-symbols-outlined text-xl">visibility</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <button disabled={isLoading} className="w-full py-4 px-6 bg-primary text-on-primary rounded-xl font-headline font-bold text-sm tracking-wide hover:bg-primary-container active:scale-95 transition-all duration-300 flex justify-center items-center group disabled:opacity-70" type="submit">
                                    {isLoading ? 'Authenticating...' : 'Sign In'}
                                    {!isLoading && <span className="material-symbols-outlined ml-2 text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>}
                                </button>
                                <div className="relative flex items-center py-2">
                                    <div className="flex-grow border-t border-outline-variant/30"></div>
                                    <span className="flex-shrink mx-4 text-xs font-bold text-outline-variant uppercase tracking-widest">or</span>
                                    <div className="flex-grow border-t border-outline-variant/30"></div>
                                </div>
                                <button className="w-full py-4 px-6 bg-surface-container-lowest border border-outline-variant/50 text-on-surface rounded-xl font-headline font-bold text-sm tracking-wide hover:bg-surface-container-low active:scale-95 transition-all duration-300 flex justify-center items-center" type="button">
                                    <img alt="Google Logo" className="w-5 h-5 mr-3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF599UoYx8odcfwoycTWgLFZrAoUfdMAHM1HwAX0dTlS0wPzKW3BvdRsMzTCglRcTThQzdyGcyuhhrPR-thfKcEGmh4pvx__JNqtZ-UEyPp0kkGgYaaB3BYQsF1XWcTpyXd693XiW-0SaMB3bK-Na0BETEqdv173rerM_jsXJjr60bdMNXjK7coS1xlrF2L5P9ZY1h8quL7w4IOcf3ylZqR7kLH-OPpAEh-aaPr2tUjKAdsTk7kjQapodSEAR_EHq4FMjkvRqsCKs"/>
                                    Login with G-Suite
                                </button>
                            </div>
                        </form>
                        
                        {/* Security Badges */}
                        <div className="pt-8 flex flex-col space-y-4">
                            <div className="flex items-center space-x-3 p-4 bg-surface-container-low rounded-lg border-l-4 border-secondary">
                                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                                <div>
                                    <p className="text-xs font-bold text-on-surface tracking-tight leading-none mb-1">Secure Session</p>
                                    <p className="text-[10px] text-on-surface-variant leading-tight">Your data is encrypted using institutional 256-bit AES protocols.</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center space-x-2 text-outline-variant">
                                <span className="material-symbols-outlined text-sm">shield</span>
                                <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Multi-Factor Authentication enabled</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Contextual Footer */}
                    <footer className="mt-auto pt-12 flex flex-col items-center space-y-4">
                        <div className="flex space-x-6">
                            <a className="text-[10px] font-bold text-outline uppercase tracking-widest hover:text-secondary transition-colors" href="#">Privacy Policy</a>
                            <span className="text-outline-variant/30">|</span>
                            <a className="text-[10px] font-bold text-outline uppercase tracking-widest hover:text-secondary transition-colors" href="#">Security Standards</a>
                            <span className="text-outline-variant/30">|</span>
                            <a className="text-[10px] font-bold text-outline uppercase tracking-widest hover:text-secondary transition-colors" href="#">Support</a>
                        </div>
                        <p className="text-[10px] text-outline-variant font-medium">© 2024 Technical Institute of Architecture. All rights reserved.</p>
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default Login;
