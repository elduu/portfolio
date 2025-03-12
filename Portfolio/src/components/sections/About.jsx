import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "TailwindCSS",
  ];

  const backendSkills = ["Python", "Django", "Laravel"];

  const softSkills = [
    "Problem-solving",
    "Teamwork and Collaboration",
    "Adaptability",
    "Effective Communication",
    "Leadership",
    "Time Management",
    "Attention to Detail",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-black text-white"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions. I am committed to continuously
              improving my skills and integrating security throughout the development lifecycle.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
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
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S. in Software Engineering</strong> - Bahirdar University
                  (2013-2017)
                </li>
                <li>
                  Relevant Coursework: Web Development, Ethical Hacking, Artificial Intelligence,
                  Cybersecurity
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Intern at Awash Bank (2015) and (2016)
                  </h4>
                  <p>
                    Worked on penetration testing and vulnerability assessment in the first year,
                    and risk and governance team in the next year.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Intern at Kuraz-Tech Startups (2016)
                  </h4>
                  <p>
                    Assisted as a back-end developer with Laravel and integration of REST APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Soft Skills Section */}
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all mt-8">
            <h3 className="text-xl font-bold mb-4">💡 Soft Skills</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {softSkills.map((skill, index) => (
                <li key={index} className="text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
