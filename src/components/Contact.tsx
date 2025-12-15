const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-warm  text-[#3e2c1c] py-24 px-10 font-sans text-center"
    >
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-serif mb-6">Contact</h2>
        <p className="text-[18px] leading-relaxed mb-8">
          I’d love to hear from you — whether it’s about a project, an
          opportunity, or just to say hi.
        </p>

        <a
          href="mailto:chloe.artache@gmail.com"
          className="inline-block px-6 py-3 bg-[#ffcfb3] text-[#3e2c1c] rounded-full font-medium hover:bg-[#ffc1a1] transition"
        >
          Send me an email
        </a>

        <div className="mt-10 space-x-6 text-lg">
          <a
            href="https://github.com/2myemy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/the-chloest/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
