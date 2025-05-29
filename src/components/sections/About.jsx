import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];

  const backendSkills = ["Node.js", "Phython", "AWS", "MongoDB", "GraphQL"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 text-left"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-left">
              Passionate developer with expertise in buidling scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                  "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                  "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Diploma in Computer Programming </strong> - Georgrian
                  College (October 2023 - Present)
                </li>

                <li>
                  Relevant Coursework: Data Stuctures, Full-Stack Development,
                  Cloud Computing, Internet of Things
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    <strong>Web Developer Intern </strong>(May 2025 - Present)
                  </h4>
                  <p>
                    {" "}
                    Currently developing and enhancing STEM Canada's digital
                    platforms using WordPress and custom full-stack solutions
                    (MERN, PHP, JavaScript) to support scalable and engaging
                    STEM education initiatives across Canada.{" "}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    <strong> Volunteer Tutor at Pathways to Education </strong>
                    (Jan 2024 - Sept 2024)
                  </h4>
                  <p>
                    {" "}
                    Tutored middle school students in multiple subjects,
                    including Computer Programming, Maths and Science
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    <strong>
                      Junior Web Developer at Shree Balaji Motors{" "}
                    </strong>
                    (Nov 2022 - Aug 2023)
                  </h4>
                  <p>
                    {" "}
                    Assisted in the development and maintainence of the
                    company's e-commerce website.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
