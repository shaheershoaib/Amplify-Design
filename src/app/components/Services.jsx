export default function Services() {
  const services = [
    {
      icon: "⚡",
      title: "Electrical Building Design",
      description: "Complete electrical system design for commercial and residential buildings, ensuring safe, efficient, and code-compliant installations.",
      features: ["Power Distribution", "Load Calculations", "Panel Schedules", "Conduit & Cable Design"]
    },
    {
      icon: "🚨",
      title: "Fire Alarm Systems",
      description: "Comprehensive fire alarm system design and verification services to protect lives and property with cutting-edge safety technology.",
      features: ["System Design", "Code Compliance", "Device Placement", "Testing & Verification"]
    },
    {
      icon: "💡",
      title: "Lighting Solutions",
      description: "Advanced lighting design services that enhance functionality, aesthetics, and energy efficiency for any space.",
      features: ["LED Design", "Energy Analysis", "Photometric Studies", "Control Systems"]
    },
    {
      icon: "🔍",
      title: "System Verification",
      description: "Professional verification and commissioning services to ensure all electrical systems perform as designed and meet regulations.",
      features: ["Performance Testing", "Code Verification", "Documentation", "Compliance Reports"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/10 to-purple-100/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Specialized electrical engineering solutions for modern buildings, focusing on safety, 
            efficiency, and code compliance with innovative design approaches that exceed industry standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20 hover:border-blue-200/50 relative overflow-hidden"
            >
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl mb-6 text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mr-3 shadow-sm"></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA Section */}
        <div className="text-center bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/20">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get expert electrical engineering consultation tailored to your specific needs. 
            Let's discuss how we can bring your vision to life with precision and innovation.
          </p>
          
          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Electrical Design
            </a>
            <a 
              href="#contact"
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Fire Alarm Design/Verification
            </a>
          </div>
          
          {/* Secondary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Get A Consultation
            </a>
            <a 
              href="#projects"
              className="border-2 border-gray-400 text-gray-600 hover:bg-gray-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              View Our Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
