const Hero = () => {
  return (
    <section className="min-h-[80vh] bg-warm flex text-main px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Right: Text */}
        <div className="md:w-1/2 text-center">
          <h2 className="text-4xl md:text-5xl font-serif">Hey there!</h2>
          <h1 className="mt-2 text-5xl md:text-6xl font-serif relative inline-block">
            <span className="relative z-10">This is Chloe</span>
            <span className="absolute bottom-1 left-0 w-full h-2 bg-accent z-0 rounded-md translate-y-2"></span>
          </h1>
          <p className="mt-8 text-lg md:text-xl font-sans text-sub">
            I’m a web developer who loves to create beautiful websites.
            <br />
            I’m so excited to take on new projects with you!
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-[280px] h-[280px] md:w-[340px] md:h-[340px] bg-circle rounded-full overflow-hidden shadow-md flex items-center justify-center">
            <img
              src="/chloe-portrait.png"
              alt="Chloe illustration"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
