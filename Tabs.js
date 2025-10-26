import React, { useState } from "react";

// The array of tab names
const tabs = ["About Me", "Experiences", "Technical Skills"];

// Object containing the content for each tab, defined as functional components (or functions returning JSX)
const tabContent = {
  "About Me": () => (
    <div className="space-y-4 animate-fade-in">
      <div className="p-6 rounded-xl bg-gray-300 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="text-2xl font-bold mb-3 text-indigo-600">👋 Hello!</h3>
        <p className="leading-relaxed text-gray-700">
          I&apos;m Samiksha Walbe, a Computer Science student specializing in Artificial Intelligence and Machine Learning. 
          Currently pursuing my Bachelor of Technology at MATOSHRI PRATISHTHAN SCHOOL OF ENGINEERING KHUPSARWADI NANDED.
        </p>
      </div>
      {/* Note: Removed dark mode-specific classes like bg-white bg-opacity-10 backdrop-blur-sm */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="font-semibold mb-2 text-indigo-600">🎯 Technical Expertise</h4>
          <ul className="list-disc ml-4 space-y-1 text-gray-700">
            <li>Python, Java, C++</li>
            <li>Machine Learning & AI</li>
            <li>Web Development</li>
            <li>Data Structures & Algorithms</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="font-semibold mb-2 text-indigo-600">🌟 Highlights</h4>
          <ul className="list-disc ml-4 space-y-1 text-gray-700">
            <li>Full-stack Web Developer Certification</li>
            <li>Proficient in ML Frameworks</li>
            <li>Trilingual: English, Marathi, Hindi</li>
          </ul>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h4 className="font-semibold mb-2 text-indigo-600">📧 Contact</h4>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:samikshawalbe3516@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-indigo-500 transition-colors">
            <span>✉️</span>
            samikshawalbe3516@gmail.com
          </a>
          <a href="tel:+919322946822" className="flex items-center gap-2 text-gray-600 hover:text-indigo-500 transition-colors">
            <span>📱</span>
            +91 9322946822
          </a>
          <a href="https://www.linkedin.com/in/samiksha-walbe-81a3972b1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-indigo-500 transition-colors">
            <span>💼</span>
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  ),
  "Experiences": () => (
    <div className="bg-indigo-50 p-4 rounded-lg">
      <div className="p-4 rounded-lg bg-gray-50">
        <h3 className="text-xl font-bold mb-3 text-blue-600">🎓 Education</h3>
        <div className="space-y-3">
          <div className="border-l-2 border-blue-500 pl-4">
            <h4 className="font-semibold">Bachelor of Technology in Computer Science and Engineering</h4>
            <p className="text-blue-500">MATOSHRI PRATISHTHAN SCHOOL OF ENGINEERING</p>
            <p className="text-gray-600">Aug 2023 - Present</p>
            <div className="mt-2">
              <p className="font-semibold text-sm text-gray-600">Relevant Coursework:</p>
              <ul className="list-disc ml-4 mt-1 space-y-1 text-sm text-gray-600">
                <li>Data Structures & Algorithms</li>
                <li>Database Management Systems</li>
                <li>Object-Oriented Programming</li>
                <li>Web Development</li>
                <li>Machine Learning Fundamentals</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-3 text-indigo-600">💻 Projects</h3>
        <div className="space-y-4">
          <div className="border-l-2 border-indigo-500 pl-4">
            <h4 className="font-semibold text-indigo-700">Attendance App</h4>
            <p className="text-gray-500">Role: Developer, Main Contributor</p>
            <ul className="list-disc ml-4 mt-2 space-y-2 text-gray-700">
              <li>Designed and maintained a web-based attendance tracking application</li>
              <li>Implemented user registration and authentication for students and teachers</li>
              <li>Enhanced UI/UX for improved user experience</li>
              <li>Managed version control using GitHub for features and bug fixes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
  "Technical Skills": () => (
    <div className="space-y-4 animate-fade-in">
      {/* REMOVED conditional classes using isDarkMode, set to a fixed light theme class */}
      <div className={`p-4 rounded-lg bg-gray-100`}>
        <h3 className="text-xl font-bold mb-3 text-blue-600">🛠️ Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-indigo-700">Programming Languages</h4>
            <div className="flex flex-wrap gap-2">
              {["Python", "Java", "C++", "C"].map(skill => (
                // REMOVED conditional classes using isDarkMode, set to a fixed light theme class
                <span key={skill} className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 bg-indigo-100 text-indigo-600 hover:bg-indigo-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-semibold text-indigo-700">ML Frameworks & Libraries</h4>
            <div className="flex flex-wrap gap-2">
              {["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenCV"].map(skill => (
                <span key={skill} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-indigo-700">Data Analysis & Visualization</h4>
            <div className="flex flex-wrap gap-2">
              {["Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau", "PowerBI"].map(skill => (
                <span key={skill} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-indigo-700">Development Tools</h4>
            <div className="flex flex-wrap gap-2">
              {["Git", "Jupyter Notebook", "Google Colab", "AWS", "Azure"].map(skill => (
                <span key={skill} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* REMOVED dark mode bg-gray-700 class, set to a fixed light theme class */}
      <div className="bg-indigo-50 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-3 text-indigo-600">🎯 Focus Areas</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-indigo-700">Artificial Intelligence & Machine Learning</h4>
            <p className="mt-1 text-gray-700">Proficient in implementing machine learning algorithms and deep learning frameworks. Passionate about solving complex problems through AI.</p>
          </div>
          <div>
            <h4 className="font-semibold text-indigo-700">Full-Stack Development</h4>
            <p className="mt-1 text-gray-700">Certified Full-stack Web Developer with experience in building responsive and user-friendly applications.</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="p-6 rounded-xl bg-white text-gray-800 shadow-xl max-w-4xl mx-auto my-8">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6 border-b pb-3">Samiksha Walbe's Profile</h2>
      <div className="flex flex-wrap gap-3 mb-6">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`px-5 py-2.5 rounded-full transition-all duration-200 text-sm md:text-base ${
              activeTab === tab 
                ? "bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-200"
                : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>
        {/* Call the function associated with the active tab name to render content */}
        {tabContent[activeTab]()}
      </div>
    </div>
  );
}