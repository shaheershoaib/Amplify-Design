'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Icon Components
const Zap = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
const Building = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="21" width="18" height="3"></rect><rect x="5" y="3" width="14" height="18" rx="2"></rect><path d="M9 10h.01"></path><path d="M9 14h.01"></path><path d="M9 18h.01"></path><path d="M15 10h.01"></path><path d="M15 14h.01"></path><path d="M15 18h.01"></path></svg>;
const Train = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line><line x1="12" y1="5" x2="12" y2="10"></line><path d="M8 15h0.01"></path><path d="M16 15h0.01"></path><path d="M7 21l3 -2"></path><path d="M17 21l-3 -2"></path></svg>;
const Stethoscope = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path><circle cx="20" cy="10" r="2"></circle></svg>;
const AlertTriangle = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>;
const Mail = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const Phone = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const Menu = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>;
const X = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const CheckCircle = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
const Briefcase = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
const ArrowLeft = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>;

export default function IbrarPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['All', 'Industrial', 'Healthcare', 'Residential', 'Transit'];

  const projects = [
    {
      id: 1,
      title: "Hazardous Propane Facility",
      category: "Industrial",
      icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
      description: "Electrical design for hazardous location facility with strict safety code compliance.",
      details: ["Class I, Div 1 & 2 Classification", "Explosion-proof Motor Controls", "Intrinsically Safe Wiring"]
    },
    {
      id: 2,
      title: "Medical Clinic Upgrade",
      category: "Healthcare",
      icon: <Stethoscope className="w-6 h-6 text-red-500" />,
      description: "Tenant improvement electrical systems for patient care environments.",
      details: ["CSA Z32 Compliance", "Isolated Ground Receptacles", "Medical Grade Lighting"]
    },
    {
      id: 3,
      title: "Luxury Apartment Complex",
      category: "Residential",
      icon: <Building className="w-6 h-6 text-blue-500" />,
      description: "High-density power distribution for multi-story residential building.",
      details: ["Main Service & Metering Centers", "Suite Load Calculations (CEC)", "Balanced House Panels"]
    },
    {
      id: 4,
      title: "SkyTrain Infrastructure",
      category: "Transit",
      icon: <Train className="w-6 h-6 text-green-600" />,
      description: "Critical systems integration for mass transit operations.",
      details: ["Station Power & Lighting", "Wayside Power Integration", "SCADA & PA Systems"]
    },
    {
      id: 5,
      title: "Manufacturing Plant",
      category: "Industrial",
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      description: "Heavy power distribution for large-scale industrial facility.",
      details: ["600V Distribution", "High-bay Industrial Lighting", "Industrial Fire Alarms"]
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="font-sans selection:bg-blue-600 selection:text-white">
      <style jsx global>{`
        .glass-panel {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
        }
        .glass-nav {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(226, 232, 240, 1);
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }
        .gradient-text {
          background: linear-gradient(135deg, #0284c7 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-color: rgba(14, 165, 233, 0.4);
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center group cursor-pointer">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-500 transition-colors shadow-sm">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-slate-900 leading-none">AMPLIFY DESIGN</span>
                <span className="text-xs text-blue-600 font-bold tracking-wide mt-1">IBRAR AHMAD | P.ENG</span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Expertise', 'Portfolio'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-600 hover:text-blue-600 text-sm font-semibold transition-colors">{item}</a>
              ))}
              <Link href="/" className="text-slate-600 hover:text-blue-600 text-sm font-semibold transition-colors flex items-center">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Main Site
              </Link>
              <a href="#contact" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all shadow-lg">
                Contact Me
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-slate-900 p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-panel border-t border-slate-200 absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {['About', 'Expertise', 'Portfolio'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md">{item}</a>
              ))}
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-md">Back to Main Site</Link>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block mt-4 text-center px-3 py-3 bg-blue-600 text-white rounded-md font-bold">Contact Me</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
            Available for New Projects
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
            Bridging Critical Systems <br className="hidden md:block" />
            & <span className="gradient-text">Building Infrastructure</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed">
            Professional Electrical Engineer transforming complex requirements into precise, code-compliant designs for medical, industrial, and residential facilities.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#portfolio" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center shadow-xl shadow-slate-900/10">
              <Briefcase className="w-5 h-5 mr-2" />
              View Projects
            </a>
            <a href="#contact" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all flex items-center justify-center shadow-sm">
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-200 pt-10">
            {[
              { label: 'Experience', value: '7+ Years' },
              { label: 'Projects', value: '100+ Delivered' },
              { label: 'License', value: 'P.Eng Certified' },
              { label: 'Specialty', value: 'Critical Systems' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
                <span className="text-sm text-slate-500 uppercase tracking-wider mt-1 font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm">Core Competencies</h2>
            <p className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Engineering Excellence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glass-panel p-8 rounded-2xl hover-card transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Building Power</h3>
              <ul className="space-y-3 text-slate-600">
                {['Service Entrance Sizing', 'Voltage Drop Calculations', 'Load Balancing', 'Fault Current Analysis'].map(item => (
                  <li key={item} className="flex items-start text-sm">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2 */}
            <div className="glass-panel p-8 rounded-2xl hover-card transition-all duration-300 border-blue-100">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <AlertTriangle className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Life Safety</h3>
              <ul className="space-y-3 text-slate-600">
                {['Fire Alarm Design (ULC)', 'Verifications (S537)', 'Emergency Lighting', 'Sprinkler Integration'].map(item => (
                  <li key={item} className="flex items-start text-sm">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-3 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3 */}
            <div className="glass-panel p-8 rounded-2xl hover-card transition-all duration-300">
              <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                <Building className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Specialized Facilities</h3>
              <ul className="space-y-3 text-slate-600">
                {['Hazardous Locs (Class I)', 'Patient Care Areas (Z32)', 'Multi-Unit Metering', 'Revit MEP & BIM'].map(item => (
                  <li key={item} className="flex items-start text-sm">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm">Portfolio</h2>
            <p className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Featured Projects</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-2 mb-12 overflow-x-auto pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div key={project.id} className="glass-panel rounded-xl overflow-hidden hover-card transition-all duration-300 flex flex-col group bg-white">
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors border border-slate-100">
                      {project.icon}
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">{project.description}</p>
                  <div className="border-t border-slate-100 pt-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Deliverables</h4>
                    <ul className="space-y-2">
                      {project.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-600">
                          <span className="mr-2 text-blue-500">•</span> {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-slate-900 pt-20 pb-10 border-t border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800 rounded-2xl p-10 md:p-16 text-center mb-16 relative overflow-hidden border border-slate-700 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let&apos;s Discuss Your Next Project</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Ready to deliver code-compliant, efficient, and safe electrical designs for your building infrastructure needs.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="mailto:ibrar@amplifydesign.ca" className="flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg">
                <Mail className="w-5 h-5 mr-3" />
                ibrar@amplifydesign.ca
              </a>
              <a href="tel:825-438-1945" className="flex items-center justify-center px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-xl transition-all">
                <Phone className="w-5 h-5 mr-3" />
                825-438-1945
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
            <div className="flex items-center mb-4 md:mb-0">
              <Zap className="h-5 w-5 text-blue-500 mr-2" />
              <span className="font-semibold text-slate-200">AMPLIFY DESIGN</span>
            </div>
            <div className="flex space-x-6">
              <a href="https://linkedin.com/in/ibrarahmad" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
              <span>Calgary, AB</span>
            </div>
            <div className="mt-4 md:mt-0">
              &copy; {new Date().getFullYear()} Ibrar Ahmad. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
