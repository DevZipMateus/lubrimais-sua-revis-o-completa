import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-lubrimais.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Valores", href: "#valores" },
  { label: "Horários", href: "#horarios" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#inicio" className="flex items-center">
          <img src={logo} alt="Logo Lubrimais Lubrificantes" className="h-12 md:h-14" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-heading font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-heading font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Agende agora
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="lg:hidden bg-background border-t border-border" aria-label="Menu mobile">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 font-heading font-semibold hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5599999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-5 py-3 rounded-lg font-heading font-bold text-sm text-center hover:opacity-90 transition-opacity"
            >
              Agende agora
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
