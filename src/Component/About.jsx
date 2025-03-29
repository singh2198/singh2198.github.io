import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div id="about" className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            About Me
          </h2>
        </div>
        

        <div className="bg-gray-800 rounded-lg p-8 shadow-lg transform transition-all duration-300 hover:shadow-xl border border-gray-700">
          <div className="space-y-6">
            <div className="prose prose-invert">
              <p className="text-gray-300 leading-relaxed text-lg">
                Aspiring Full Stack MERN Developer, enthusiastic to learn and
                explore new technologies. With expertise in:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-400">Frontend</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-blue-400">Backend</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">Project Experience</h3>
                <p className="text-gray-300">
                  Successfully completed 4 major projects, including 2 solo and 2 collaborative endeavors.
                  Currently seeking opportunities in technology-driven organizations to further develop
                  and apply my skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
