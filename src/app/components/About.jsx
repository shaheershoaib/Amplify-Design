export default function About() {
  const stats = [
    { number: "P.ENG", label: "Professional Engineer" },
    { number: "APEGA", label: "Certified Member" },
    { number: "CEC", label: "Code Compliant" },
    { number: "CSA", label: "Standards Certified" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Engineering Excellence 
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Amplify Design, we specialize in electrical building design, fire alarm systems, verification, and lighting solutions, tailored for today's evolving commercial and residential spaces. {" "} 
              <strong>Our mission</strong> is to deliver safe, efficient, and code-compliant designs that not only meet standards, but exceed expectations.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Agility</h3>
                  <p className="text-gray-600">We move fast, adapt quickly, and bring fresh perspectives to traditional engineering challenges.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Quality & Precision</h3>
                  <p className="text-gray-600">Every project undergoes rigorous quality control to ensure the highest standards of excellence.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Personal Attention</h3>
                  <p className="text-gray-600">Every client gets direct access to our founding team, ensuring personalized service and rapid response times.</p>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Stats */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Credentials</h3>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Portfolio Link */}
          <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet Our Lead Engineer</h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Explore the portfolio of Ibrar Ahmad, P.Eng - showcasing 5+ years of experience in critical electrical systems.
            </p>
            <a 
              href="/ibrar-portfolio"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              View Ibrar Ahmad&apos;s Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
