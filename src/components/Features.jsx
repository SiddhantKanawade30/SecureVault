import React, { useEffect, useState } from 'react';
import { Shield, Lock, Key, Eye, FileText, Database, Fingerprint, UserCheck, CloudLightning } from 'lucide-react';

export const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featureList = [
    {
      icon: Shield,
      title: 'End-to-End Encryption',
      desc: 'Passwords are encrypted on your device using AES-256 before being stored in the database.',
      color: 'text-violet-400',
    },
    {
      icon: Lock,
      title: 'Zero-Knowledge Architecture',
      desc: 'Only you can decrypt your data. Not even we have access to your vault.',
      color: 'text-indigo-400',
    },
    {
      icon: Eye,
      title: 'Privacy First',
      desc: 'No trackers. No ads. No data sharing. Ever.',
      color: 'text-cyan-400',
    },
    {
      icon: FileText,
      title: 'Document Vault',
      desc: 'Store confidential files with military-grade protection.',
      color: 'text-emerald-400',
    },
    {
      icon: CloudLightning,
      title: 'Secure Backup & Sync',
      desc: 'Multi-region encrypted backups ensure your data is always available.',
      color: 'text-yellow-400',
    },
    {
      icon: UserCheck,
      title: 'Multi-Device Support',
      desc: 'Access your vault from anywhere, securely synced across devices.',
      color: 'text-orange-400',
    },
    {
      icon: Database,
      title: 'Self-Healing Redundancy',
      desc: 'Automatic failover and redundancy with 99.9% uptime guarantee.',
      color: 'text-red-400',
    },
  ];

  return (
    <div className={`py-20 px-6 min-h-screen bg-neutral-950 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="text-center text-white text-4xl font-bold mb-10">
        App Features
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {featureList.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-2xl border border-zinc-600/50 hover:border-violet-500/50 shadow-lg hover:shadow-violet-400/10 p-6 transition-all duration-300 transform hover:scale-105 group"
          >
            <feature.icon className={`w-10 h-10 mb-4 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
            <h3 className="text-white text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
