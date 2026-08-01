import React from "react";

const About = () => {
  return (
    <div
      id="about"
      name="about"
      className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            About Me
          </h2>
        </div>

        <div className="bg-gray-800 rounded-lg p-8 shadow-lg transform transition-all duration-300 hover:shadow-xl border border-gray-700 space-y-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed text-lg">
              I started my career as a Frontend Developer and gradually evolved into a Full Stack Developer by expanding my expertise across backend development, databases, and cloud-native architectures.
              Throughout my journey, I have designed and delivered enterprise-grade applications from scratch, built reusable micro-frontends, developed AI-driven workflow platforms, and contributed to scalable solutions deployed across Development, QA, Demo, and Production environments.
            </p>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
              <span>🏆</span> What I Do
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <li className="flex items-start gap-2.5">
                <span className="text-xl">🚀</span>
                <span>Build scalable enterprise web applications</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-xl">🤖</span>
                <span>Develop AI-powered workflow automation platforms</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-xl">🧩</span>
                <span>Design Micro Frontend architectures</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-xl">🔐</span>
                <span>Implement secure authentication using OAuth & JWT</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-xl">📊</span>
                <span>Create interactive workflow canvases with D3.js</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-xl">⚡</span>
                <span>Optimize application performance and code quality</span>
              </li>
              <li className="flex items-start gap-2.5 col-span-1 md:col-span-2">
                <span className="text-xl">📦</span>
                <span>Build production-ready full-stack applications</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Career Progression & Professional Details</h3>
            <p className="text-gray-300 leading-relaxed">
              Enthusiastic to learn and explore new technologies, I have progressed from a frontend specialist into a well-rounded MERN Stack developer.
              My journey involves building robust, high-performance user interfaces and integrating them seamlessly with backend APIs and microservices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-700 pt-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-blue-400">Core Frontend Expertise</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>React.js, Next.js, Angular</li>
                <li>TypeScript, Modern JavaScript (ES6+)</li>
                <li>Chakra UI, Tailwind CSS, Material UI, SCSS</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-blue-400">Core Backend & Data</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Node.js, Express.js</li>
                <li>MongoDB, MySQL</li>
                <li>Micro Frontends, API Gateways</li>
                <li>Docker, CI/CD, SonarQube</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Project Delivery</h3>
            <p className="text-gray-300">
              Over the past 3+ years, I have contributed to the successful delivery of 5+ enterprise-grade applications in a fast-paced product startup.
              My work spans AI-powered workflow automation, Micro Frontends, API Gateway platforms, Auditing Platform solutions, and full-stack web applications,
              with a strong focus on performance, scalability, security, and exceptional user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
