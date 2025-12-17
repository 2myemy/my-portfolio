import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-warm text-main shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-serif font-bold">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Chloe
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8 font-sans text-lg">
            <li><a href="#about" className="hover:text-accent transition">About</a></li>
            <li><a href="#projects" className="hover:text-accent transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-warm border-t">
          <ul className="flex flex-col items-center space-y-6 py-6 text-lg font-sans">
            <li>
              <a href="#about" onClick={() => setOpen(false)}>About</a>
            </li>
            <li>
              <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
