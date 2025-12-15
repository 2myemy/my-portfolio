const projects = [
  {
    title: "Booksy",
    description:
      "A full-stack book marketplace where users can buy and sell books.",
    image: "/booksy.png",
    link: "https://booksy.netlify.app",
  },
  {
    title: "Portfolio Site",
    description:
      "This very site — built with React, Tailwind, and love.",
    image: "/portfolio-thumb.png",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-warm text-[#3e2c1c] py-24 px-10 font-sans"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif mb-12">Projects</h2>

        <div className="grid grid-cols-2 gap-12">
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