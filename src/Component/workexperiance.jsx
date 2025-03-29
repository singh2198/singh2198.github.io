import React from "react";
// import "./workexperiance.css";

const WorkExperience = () => {
  // Sample work experience data - you can replace this with your own data
  const workExperiences = [
    {
      company: "Bootnext Tech Venture Private ltd.",
      position: "Associate Software Developer",
      duration: "2023 - Present",
      description: [
        "Developing and maintaining enterprise-level web applications using Angular.",
        "Collaborated with backend teams to integrate APIs, optimize UI performance, and ensure seamless user experience.",
        "Designed and implemented Microfrontend-based architecture, enabling modular and scalable frontend applications.",
        "Collaborated with senior developers and cross-functional teams (DevOps, QA, etc.) to debug, optimize, and deploy production-ready features."
      ],
      skills: ["Javascript","Angular","FreeMarker Template Language","MySql"],
    },
    // Add more work experiences as needed
  ];

  return (
    <div  name="Work Experience" className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white py-8 sm:py-12 px-2 sm:px-4 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Work Experience
          </h2>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {workExperiences.map((experience, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-700"
            >
              <div className="flex flex-col space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-400">{experience.position}</h3>
                    <h4 className="text-lg sm:text-xl text-gray-300">{experience.company}</h4>
                  </div>
                  <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500 rounded-full text-sm font-semibold self-start">
                    {experience.duration}
                  </span>
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {experience.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-sm sm:text-base leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-2 sm:mt-4">
                  {experience.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-2.5 sm:px-3 py-1 bg-gray-700 rounded-full text-xs sm:text-sm text-blue-300 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
