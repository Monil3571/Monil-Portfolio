import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 text-left"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all ">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                Crypto Currency Tracker{" "}
              </h3>
              <p className="text-gray-400 mb-4">
                A React app using Tailwind CSS and the CoinGecko API to display
                real-time cryptocurrency prices, symbols, and market caps.
                Includes a search function and a responsive layout. Deployed on
                Vercel and hosted on GitHub.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailwindCSS", "JavaScript", "Vite"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://crypto.monilpatel.dev"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Project ➝{" "}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all ">
              <h3 className="text-xl font-bold mb-2"> RestExplorer </h3>
              <p className="text-gray-400 mb-4">
                A responsive web app that displays detailed information about
                countries using the REST Countries API. Built with dynamic
                routing and a clean UI for an intuitive browsing experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React",
                  "React Router V7",
                  "TailwindCSS",
                  "Vite",
                  "REST Countries API",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://rest-explorer.monilpatel.dev/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Project ➝{" "}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all ">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                MERN Expense Tracker{" "}
              </h3>
              <p className="text-gray-400 mb-4">
                A responsive web app for tracking personal expenses, built with
                the MERN stack. Features real-time transaction updates, clean
                UI, and full CRUD functionality for seamless financial
                management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Tailwind", "Nodejs", "Express", "Mongoose"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://finance-tracker.monilpatel.dev/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Project ➝{" "}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all ">
              <h3 className="text-xl font-bold mb-2">
                {" "}
                Porsche Clone Website{" "}
              </h3>
              <p className="text-gray-400 mb-4">
                A fully responsive Porsche-themed website with sleek design that
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Html", "CSS", "Javascript", "Nodejs"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://monil3571.github.io/Final-project-css/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Project ➝{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
