const Hero = () => {
  return (
    <section className="min-h-screen bg-warm text-main flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-serif">Hi, I’m Chloe Lee</h1>
      <p className="mt-6 text-xl font-sans text-sub max-w-xl">
        I design & build thoughtful experiences for people.
      </p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 rounded-full font-medium bg-accent hover:bg-accent-dark text-main transition"
      >
        View My Work
      </a>
    </section>
  )
}

export default Hero