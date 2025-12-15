const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-warm text-main py-6 px-10 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo or Name */}
        <div className="text-2xl font-serif font-bold"><button>Chloe</button></div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 font-sans text-lg">
            <li>
              <a href="#about" className="hover:text-accent transition">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-accent transition">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-accent transition">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
