import { useState, useEffect } from 'react';
import { 
  Mail, 
  Shield, 
  MessageCircle, 
  FileText,
  Users
} from 'lucide-react';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    urgency: 'medium'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        urgency: 'medium'
      });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Contact",
      primary: "kanawadesiddhant30@gmail.com",
      secondary: "Direct communication",
      color: "violet",
      description: "Reach out for any inquiries, support, or collaboration opportunities"
    },
    {
      icon: Users,
      title: "LinkedIn Profile",
      primary: "Connect with Siddhant",
      secondary: "Professional networking",
      color: "indigo",
      description: "View professional background and connect for business opportunities",
      link: "https://www.linkedin.com/in/siddhant-kanawade/"
    },
    {
      icon: MessageCircle,
      title: "Project Discussion",
      primary: "Let's collaborate",
      secondary: "Open to new opportunities",
      color: "purple",
      description: "Interested in discussing projects, partnerships, or development work"
    },
    {
      icon: Shield,
      title: "Security Expertise",
      primary: "Vault Solutions",
      secondary: "Secure application development",
      color: "cyan",
      description: "Specialized in building secure, robust applications with modern tech stack"
    }
  ];

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-800 relative overflow-hidden">
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center items-center gap-3 mb-6">
            <Shield className="w-12 h-12 text-violet-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Contact Us
            </h1>
          </div>
          
        </div>

        
        <div className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const colorClasses = {
                violet: 'border-violet-500/50 hover:shadow-violet-500/20 text-violet-400',
                indigo: 'border-indigo-500/50 hover:shadow-indigo-500/20 text-indigo-400',
                purple: 'border-purple-500/50 hover:shadow-purple-500/20 text-purple-400',
                cyan: 'border-cyan-500/50 hover:shadow-cyan-500/20 text-cyan-400'
              };

              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 rounded-3xl p-6 border border-zinc-700/50 hover:${colorClasses[method.color]} transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${method.link ? 'cursor-pointer' : 'cursor-default'} group`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => method.link && window.open(method.link, '_blank', 'noopener,noreferrer')}
                >
                  <Icon className={`w-10 h-10 ${colorClasses[method.color].split(' ')[2]} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                  <p className={`${colorClasses[method.color].split(' ')[2]} font-semibold mb-1`}>{method.primary}</p>
                  <p className="text-gray-400 text-sm mb-3">{method.secondary}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{method.description}</p>
                  {method.link && (
                    <div className="mt-4 flex items-center gap-2 text-violet-400 font-medium text-sm">
                      <span>Visit Profile</span>
                      <div className={`transition-transform duration-300 ${hoveredCard === index ? 'translate-x-2' : ''}`}>→</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        
        <div className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 rounded-3xl p-8 border border-zinc-700/50">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-violet-400" />
              <h2 className="text-2xl font-bold text-white">About Secure Vault</h2>
            </div>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                Secure Vault represents the cutting edge of digital security applications, built with modern technologies 
                and best practices in mind. This project showcases expertise in secure application development, 
                user experience design, and robust architecture.
              </p>
              <p>
                The application features military-grade encryption, zero-knowledge architecture, and a beautiful, 
                intuitive interface that makes security accessible to everyone. Built with React, modern CSS techniques, 
                and attention to detail in both functionality and design.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet-400">React</div>
                  <div className="text-sm text-gray-400">Frontend Framework</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-400">Tailwind</div>
                  <div className="text-sm text-gray-400">CSS Framework</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">Security</div>
                  <div className="text-sm text-gray-400">Focus Area</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">UX/UI</div>
                  <div className="text-sm text-gray-400">Design Priority</div>
                </div>
              </div>
            </div>
          </div>
        </div>

       
        
      </div>
    </div>
  );
}