export default function Projects() {
  const projects = [
    {
      title: "Manufacturing Facility",
      category: "Industrial",
      description: "Complete electrical design for a large-scale manufacturing facility including electrical load calculations, service sizing, and comprehensive panel schedules.",
      technologies: ["Electrical Load Design", "Service Sizing", "Panel Schedules", "Industrial Power Systems"],
      image: "/api/placeholder/600/400",
      status: "Completed 2024"
    },
    {
      title: "Medical Clinic",
      category: "Healthcare",
      description: "Advanced electrical systems design for a medical clinic featuring Z32 medical bonding designs, specialized lighting, and critical safety systems.",
      technologies: ["Z32 Bonding Design", "Medical Equipment", "Lighting Design", "Fire Alarm Design"],
      image: "/api/placeholder/600/400",
      status: "Completed 2023"
    },
    {
      title: "Apartment Building",
      category: "Residential",
      description: "Multi-unit residential electrical design including service distribution, lighting systems, fire alarm integration, and verification services.",
      technologies: ["Service Sizing", "Lighting Design", "Fire Alarm Systems", "Verification Services"],
      image: "/api/placeholder/600/400",
      status: "In Progress"
    },
    {
      title: "Restaurant & Bay Projects",
      category: "Commercial",
      description: "Diverse commercial electrical projects including restaurant kitchens, service bays, and retail spaces with custom lighting and power solutions.",
      technologies: ["Commercial Lighting", "Kitchen Equipment", "Panel Schedules", "Code Compliance"],
      image: "/api/placeholder/600/400",
      status: "Multiple Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of innovative engineering solutions that have transformed 
            industries and communities around the world.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-2 shadow-2xl group"
            >
              {/* Project Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/80 text-6xl">🏗️</div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-400 whitespace-nowrap ml-4">
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
