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
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Electrical Engineering Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized electrical engineering solutions for modern buildings, focusing on safety, 
            efficiency, and code compliance with innovative design approaches.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className="text-6xl mb-6">{service.icon}</div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
