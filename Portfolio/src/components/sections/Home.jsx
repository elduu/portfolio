import { motion } from "framer-motion";
import profilePic from "../../assets/rediet.jpg"; // Update with your actual profile picture
import cvFile from "../../assets/redietyilma.pdf"; // Update with your actual CV file

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-black text-white px-6 md:px-12"
    >
      {/* Left Side - Profile Image */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src={profilePic}
          alt="Rediet Yilma"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg object-cover border-4 border-gray-700"
        />
      </div>
      
      {/* Right Side - Introduction */}
      <div className="w-full md:w-2/3 text-center md:text-left mt-6 md:mt-0">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        Hello, I’m Rediet Yilma
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg">
          I’m a Back-End developer passionate about building web applications.
          With expertise in Laravel, Django, Python, and cybersecurity, I thrive on solving complex challenges while ensuring the best user experience and security practices.
          Beyond development, I explore vulnerability research and ethical hacking, integrating security into the development lifecycle.
        </p>
        
        {/* Buttons */}
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
          >
            Contact Me
          </a>
          <a
            href={cvFile}
            download="redietyilma.pdf"
            className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)]"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};
