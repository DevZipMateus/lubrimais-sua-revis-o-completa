import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Oficina de troca de óleo profissional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay/85" />
      </div>

      <div className="relative container mx-auto px-4 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-primary-foreground mb-6 leading-tight">
            Lubrimais Lubrificantes
          </h1>
          <h2 className="text-lg md:text-2xl text-primary-foreground/80 font-body max-w-2xl mx-auto mb-10 leading-relaxed">
            Mais de 10 anos cuidando do motor do seu veículo com excelência, qualidade e as melhores marcas do mercado.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/5599999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-heading font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Agende sua troca de óleo
            </a>
            <a
              href="#sobre"
              className="bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/40 px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-primary-foreground/20 transition-colors"
            >
              Conheça a empresa
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
