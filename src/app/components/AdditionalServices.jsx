export default function AdditionalServices() {
  const additionalServices = [
    {
      icon: "⚙️",
      title: "Mechanical Systems",
      description: "Professional mechanical engineering services including HVAC design, plumbing systems, and energy-efficient solutions for optimal building performance.",
      features: ["HVAC Design", "Plumbing Systems", "Energy Modeling", "Ventilation Solutions"]
    },
    {
      icon: "🏗️",
      title: "Architectural Solutions",
      description: "Comprehensive architectural design and planning services that blend functionality with aesthetic appeal for modern building projects.",
      features: ["Building Design", "Space Planning", "3D Modeling", "Code Analysis"]
    }
  ];

  return (
    <section id="additional-services" className="py-20 bg-gradient-to-br from-gray-50 via-green-50 to-teal-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-100/10 to-teal-100/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Additional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Expanding our expertise beyond electrical engineering, we also provide mechanical and architectural services 
            to offer comprehensive building solutions for your projects.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {additionalServices.map((service, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/20 hover:border-green-200/50 relative overflow-hidden"
            >
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl mb-6 text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-800 transition-colors duration-300">
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
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mr-3 shadow-sm"></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
              </div>
              
              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA Section */}
        <div className="text-center bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/20">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Need Mechanical or Architectural Services?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how our mechanical and architectural expertise can complement your project needs. 
            We provide integrated solutions that work seamlessly with our electrical engineering services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact"
              className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Additional Services Quote
            </a>
            <a 
              href="#services"
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Back to Main Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
