const Hero = () => {
  return (
    <section className="min-h-[80vh] bg-warm text-main px-6 md:px-10 flex items-center">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 py-14 md:py-20">
        {/* Left: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-serif">Hey there!</h2>

          <h1 className="mt-2 text-5xl md:text-6xl font-serif relative inline-block">
            <span className="relative z-10">This is Chloe</span>
            <span className="absolute bottom-1 left-0 w-full h-2 bg-accent z-0 rounded-md translate-y-2"></span>
          </h1>

          <p className="mt-6 md:mt-8 text-lg md:text-xl font-sans text-sub leading-relaxed">
            I'm a Full-Stack Developer, focused on building intuitive,
            user-centered web applications with React and TypeScript.
            <br />
            I care deeply about usability, clean architecture, and building
            products people enjoy using.
          </p>

          {/* CTA */}
          <div className="mt-7 md:mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#ffcfb3] text-[#3e2c1c] rounded-full font-medium hover:bg-[#ffc1a1] transition"
            >
              View Projects
            </a>

            <a
              href="/Chloe_Lee_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-medium border border-[#3e2c1c]/30 text-[#3e2c1c] hover:bg-[#3e2c1c]/5 transition"
            >
              Resume <span className="ml-1 opacity-70">(PDF)</span>
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="w-[220px] h-[280px] sm:w-[260px] sm:h-[320px] md:w-[480px] md:h-[520px] rounded-3xl overflow-hidden">
            <img
              src="/chloe-portrait.png"
              alt="Chloe portrait"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
