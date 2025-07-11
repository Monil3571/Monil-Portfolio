// import { useEffect } from "react";

import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
            Hi, I'm Monil Patel
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Full-Stack Web Developer skilled in Next.js, Tailwind CSS, and the
            MERN stack (MongoDB, Express.js, React, Node.js). I build fast,
            scalable, and user-friendly web apps using modern tools and clean,
            maintainable code. Always learning, always improving—driven to
            create meaningful digital experiences.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
            hover:shadow-[0_0_15px_rgba(59,130,236,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className=" border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,236,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
