import { useState, useEffect } from 'react';
import { Shield, Lock, Key, Eye, FileText, Database } from 'lucide-react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: Shield, title: "Military-Grade Encryption", desc: "AES-256 encryption keeps your data fortress-strong" },
    { icon: Lock, title: "Zero-Knowledge Architecture", desc: "We can't see your data, even if we wanted to" },
    { icon: Key, title: "Biometric Access", desc: "Your fingerprint is the only key that matters" },
    { icon: Eye, title: "Privacy First", desc: "No tracking, no ads, no compromises" },
    { icon: FileText, title: "Document Vault", desc: "Store sensitive files with military precision" },
    { icon: Database, title: "Secure Backup", desc: "Multi-region redundancy for peace of mind" }
  ];

  return (
    <>
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-violet-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex justify-center text-white text-6xl mt-20 font-sans font-bold tracking-tight">
          <div className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
            Secure Vault
          </div>
        </div>
        <div className="flex justify-center text-gray-300 text-2xl mt-6 font-sans max-w-2xl mx-auto text-center px-4">
          <div className="leading-relaxed">
            Your digital fortress for the world's most sensitive information
          </div>
        </div>
      </div>

      
      <div className={`flex justify-center mt-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <button className="group relative px-8 py-4 text-xl font-semibold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-2xl shadow-2xl hover:shadow-violet-500/25 transform hover:scale-105 transition-all duration-300 ease-out overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="relative flex items-center gap-3">
            <Shield className="w-6 h-6" />
            Get Started Securely
          </div>
        </button>
      </div>

      
      <div className={`flex justify-center mt-20 px-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl w-full">
          
          
          <div 
            className="md:row-span-2 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 h-80 md:h-full rounded-3xl p-6 border border-zinc-700/50 hover:border-violet-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/10 cursor-pointer group"
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <Shield className="w-12 h-12 text-violet-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-3">{features[0].title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{features[0].desc}</p>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-2 text-violet-400 font-medium">
                  <span>Learn more</span>
                  <div className={`transition-transform duration-300 ${hoveredCard === 0 ? 'translate-x-2' : ''}`}>→</div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-600 h-80 rounded-3xl border border-zinc-700/50 hover:border-indigo-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10 cursor-pointer group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="relative h-full p-6 flex flex-col justify-end">
              <Lock className="w-10 h-10 text-indigo-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-2">{features[1].title}</h3>
              <p className="text-gray-200">{features[1].desc}</p>
            </div>
          </div>

          
          <div className="grid grid-rows-2 gap-4">
            <div 
              className="bg-gradient-to-bl from-zinc-800 via-zinc-700 to-zinc-600 rounded-3xl border border-zinc-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer group p-4"
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Key className="w-8 h-8 text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-lg font-semibold text-white mb-1">{features[2].title}</h4>
              <p className="text-gray-300 text-sm">{features[2].desc}</p>
            </div>
            <div 
              className="bg-gradient-to-l from-zinc-800 via-zinc-700 to-zinc-600 rounded-3xl border border-zinc-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer group p-4"
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Eye className="w-8 h-8 text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-lg font-semibold text-white mb-1">{features[3].title}</h4>
              <p className="text-gray-300 text-sm">{features[3].desc}</p>
            </div>
          </div>

          
          <div 
            className="bg-gradient-to-tr from-zinc-800 via-zinc-700 to-zinc-600 rounded-3xl border border-zinc-700/50 hover:border-emerald-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 cursor-pointer group p-6"
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <FileText className="w-10 h-10 text-emerald-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold text-white mb-2">{features[4].title}</h3>
            <p className="text-gray-300">{features[4].desc}</p>
          </div>

          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-t from-zinc-800 via-zinc-700 to-zinc-600 rounded-3xl border border-zinc-700/50 hover:border-orange-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer group p-4 flex flex-col items-center justify-center text-center">
              <Database className="w-8 h-8 text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-white font-medium text-sm">Secure Backup</span>
            </div>
            <div className="bg-gradient-to-t from-zinc-800 via-zinc-700 to-zinc-600 rounded-3xl border border-zinc-700/50 hover:border-pink-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10 cursor-pointer group p-4 flex flex-col items-center justify-center text-center">
              <Shield className="w-8 h-8 text-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-white font-medium text-sm">24/7 Guard</span>
            </div>
          </div>

          
          <div 
            className="bg-gradient-to-tl from-zinc-800 via-zinc-700 to-zinc-600 h-80 rounded-3xl border border-zinc-700/50 hover:border-yellow-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10 cursor-pointer group p-6"
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <Database className="w-10 h-10 text-yellow-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-2">{features[5].title}</h3>
                <p className="text-gray-300">{features[5].desc}</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-16 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className={`flex justify-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>SOC 2 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span>ISO 27001</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span>99.9% Uptime</span>
          </div>
        </div>
      </div>
    </>
  );
};