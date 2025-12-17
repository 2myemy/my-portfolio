const About = () => {
  return (
    <section
      id="about"
      className="bg-warm text-[#3e2c1c] py-24 px-6 md:px-10 font-sans"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:pl-24">
        {/* Image */}
        <div className="w-[240px] h-[240px] md:w-[340px] md:h-[340px] bg-circle rounded-full overflow-hidden shadow-md flex items-center justify-center">
          <img
            src="/chloe-about.jpeg"
            alt="Chloe with Laptop"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-4xl font-serif mb-6">About Me</h2>

          <p className="mb-5 text-[18px] leading-relaxed">
            Hello! I’m <strong>Chloe</strong>, a developer who values clarity,
            empathy, and meaningful design.
          </p>

          <p className="mb-5 text-[18px] leading-relaxed">
            I’ve been building with React, TypeScript, Node.js, and PostgreSQL.
            My favorite part of development is solving real-world problems
            through intuitive user experiences.
          </p>

          <p className="text-[18px] leading-relaxed">
            I believe thoughtful technology can support real people. That’s what
            I hope to create — one line of code at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
