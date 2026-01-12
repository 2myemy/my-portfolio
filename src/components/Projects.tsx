const projects = [
  {
    title: "Sajumon — Real-Time Chat Application",
    description:
      "Sajumon is a real-time, chat-based fortune reading web application built with Server-Sent Events (SSE) and the OpenAI API. It delivers responses through a streaming conversation flow, creating a smooth and responsive chat experience.",
    techstack: "React, TypeScript, TailwindCSS, Node.js, SSE, OpenAI API",
    image: "/sajumon.png",
    link: "https://sajumon.netlify.app",
  },
  {
    title: "Booksy — Full-Stack Book Marketplace",
    description:
      "Booksy is a full-stack marketplace for browsing and managing books, designed with a clean, user-focused interface. The project emphasizes clear application structure, reusable components, and maintainable frontend–backend separation.",
    techstack: "React, TypeScript, Node.js, Express, PostgreSQL",
    image: "/booksy.png",
    link: "https://booksy-client.netlify.app",
  },
];
const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-warm text-[#3e2c1c] py-24 px-6 md:px-10 font-sans"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif mb-12 text-center md:text-left">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-[#f0e6da]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-serif mb-3">{project.title}</h3>

                <p className="text-[16px] text-[#6b5e54] leading-relaxed mb-6">
                  {project.description}
                </p>

                <p className="text-[14px] text-[#6b5e54] leading-relaxed mb-6">
                  Tech Stack: {project.techstack}
                </p>

                <a
                  href={project.link}
                  className="inline-block px-5 py-2 bg-[#ffcfb3] text-[#3e2c1c] rounded-full font-medium hover:bg-[#ffc1a1] transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
