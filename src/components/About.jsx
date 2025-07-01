import { useState, useEffect } from 'react';
import { Shield, Users, Award, Globe, Zap, Heart} from 'lucide-react';

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "24/7", label: "Security Monitoring", icon: Shield },
    { number: "99.9%", label: "Uptime Guarantee", icon: Award },
    { number: "256-bit", label: "Encryption Standard", icon: Users },
    { number: "Zero", label: "Data Breaches", icon: Globe }
  ];

  const timeline = [
    {
      year: "2022",
      title: "The Beginning",
      description: "Started with a simple idea: make security accessible to everyone"
    },
    {
      year: "2023",
      title: "First Launch",
      description: "Released our core security features with zero-knowledge architecture"
    },
    {
      year: "2024",
      title: "Enhanced Protection",
      description: "Added biometric access and advanced encryption protocols"
    },
    {
      year: "2025",
      title: "Today",
      description: "Continuously improving to keep your data safe and secure"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Every decision we make starts with one question: How does this protect our users?",
      color: "violet"
    },
    {
      icon: Heart,
      title: "Privacy by Design",
      description: "We build privacy into everything from the ground up, not as an afterthought.",
      color: "rose"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We're constantly pushing the boundaries of what's possible in digital security.",
      color: "amber"
    },
    {
      icon: Users,
      title: "Trust",
      description: "Trust is earned through transparency, consistency, and putting users first.",
      color: "emerald"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-gray-900 to-black text-white overflow-hidden">
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
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

      
      <div className={`relative z-10 pt-20 pb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Our Story
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Born from the belief that digital privacy is a fundamental right, not a privilege
          </p>
        </div>
      </div>

     
      <div className={`relative z-10 px-4 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-600 rounded-2xl p-6 border border-zinc-700/50 hover:border-violet-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/10 group"
                >
                  <Icon className="w-8 h-8 text-violet-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

     
      <div className={`relative z-10 px-4 mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Why We're Different
            </span>
          </h2>
          <div className="bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-600 rounded-3xl p-8 md:p-12 border border-zinc-700/50">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6">
              Security doesn't have to be complicated. We believe protection should be 
              invisible, automatic, and just work.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              No complex setups, no confusing settings, no compromises. 
              Just powerful security that adapts to your life, not the other way around.
            </p>
          </div>
        </div>
      </div>

      
      <div className={`relative z-10 px-4 mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Our Journey
            </span>
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-6 group"
                onMouseEnter={() => setActiveSection(index)}
              >
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                    activeSection === index 
                      ? 'border-violet-400 bg-violet-400/20 text-violet-300 scale-110' 
                      : 'border-zinc-600 bg-zinc-800 text-gray-400'
                  }`}>
                    {item.year.slice(-2)}
                  </div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-600 rounded-2xl p-6 border border-zinc-700/50 hover:border-violet-500/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-violet-500/10">
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className={`relative z-10 px-4 mb-20 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
              Our Values
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              const colorClasses = {
                violet: 'border-violet-500/50 shadow-violet-500/10 text-violet-400',
                rose: 'border-rose-500/50 shadow-rose-500/10 text-rose-400',
                amber: 'border-amber-500/50 shadow-amber-500/10 text-amber-400',
                emerald: 'border-emerald-500/50 shadow-emerald-500/10 text-emerald-400'
              };
              
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-600 rounded-3xl p-8 border border-zinc-700/50 hover:${colorClasses[value.color]} transition-all duration-500 hover:scale-105 hover:shadow-2xl group cursor-pointer`}
                >
                  <Icon className={`w-12 h-12 ${colorClasses[value.color].split(' ')[2]} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
};