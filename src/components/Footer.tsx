import logo from "@/assets/logo-lubrimais.png";
import { Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <img src={logo} alt="Logo Lubrimais Lubrificantes" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-background/60 text-sm leading-relaxed">
              Especialistas em troca de óleo e lubrificantes automotivos desde 2015.
            </p>
          </div>

          <div>
            <h3 className="text-background font-heading font-bold text-sm uppercase tracking-widest mb-4">
              Links rápidos
            </h3>
            <nav className="flex flex-col gap-2" aria-label="Links do rodapé">
              {["Início", "Sobre", "Serviços", "Valores", "Horários", "Contato"].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="text-background/60 text-sm hover:text-background transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-background font-heading font-bold text-sm uppercase tracking-widest mb-4">
              Contato
            </h3>
            <div className="flex flex-col gap-3">
              <a href="mailto:kleberczampoli@gmail.com" className="flex items-center gap-2 text-background/60 text-sm hover:text-background transition-colors">
                <Mail className="w-4 h-4" /> kleberczampoli@gmail.com
              </a>
              <a href="https://www.google.com/maps/search/Rua+Usina+de+Canoas+1101+Rosana+SP" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/60 text-sm hover:text-background transition-colors">
                <MapPin className="w-4 h-4" /> Rua Usina de Canoas, 1101
              </a>
              <a href="https://www.instagram.com/lubrimaislubrificantes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/60 text-sm hover:text-background transition-colors">
                <Instagram className="w-4 h-4" /> @lubrimaislubrificantes
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-6 text-center">
          <p className="text-background/40 text-xs">
            © {new Date().getFullYear()} Lubrimais Lubrificantes. Todos os direitos reservados. CNPJ: 14.400.008/0001-50
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
