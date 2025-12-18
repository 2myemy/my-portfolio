const About = () => {
  return (
    <section
      id="about"
      className="bg-warm text-[#3e2c1c] py-24 px-6 md:px-10 font-sans"
    >
      <div className="max-w-6xl mx-auto flex justify-center">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Image */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] bg-circle rounded-full overflow-hidden shadow-md">
              <img
                src="/chloe-about.jpeg"
                alt="Chloe with Laptop"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text */}
          <div className="max-w-xl text-center md:text-right md:pl-4">
            <h2 className="text-4xl font-serif mb-6 tracking-tight">
              About Me
            </h2>

            <p className="mb-5 text-[18px] leading-relaxed">
              Hello! I'm <strong>Chloe,</strong> a Full-Stack Developer who
              enjoys building clear, intuitive web applications that solve real
              problems.
            </p>

            <p className="mb-5 text-[18px] leading-relaxed">
              With a background in computer science, I work primarily with
              React, TypeScript, Node.js, and PostgreSQL to build features
              end-to-end. I value clean architecture, readable code, and
              thoughtful user experiences that scale well as products grow.
            </p>

            <p className="text-[18px] leading-relaxed">
              I enjoy collaborating with others, breaking down complex
              requirements into reliable, user-centered products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
