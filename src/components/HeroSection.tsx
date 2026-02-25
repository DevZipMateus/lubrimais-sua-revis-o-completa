import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo-lubrimais.png";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background parallax with slow zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${heroBg})` }}
        role="img"
        aria-label="Oficina de troca de óleo profissional"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-hero-overlay/85" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary-foreground/20"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-28 md:py-32">
        {/* Animated logo */}
        <motion.img
          src={logo}
          alt="Logo Lubrimais"
          className="h-16 sm:h-20 md:h-28 mx-auto mb-6 sm:mb-8 drop-shadow-2xl brightness-0 invert"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
        />

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-black text-primary-foreground mb-4 sm:mb-6 leading-tight px-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Lubrimais Lubrificantes
        </motion.h1>

        <motion.h2
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/80 font-body max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Mais de 10 anos cuidando do motor do seu veículo com excelência, qualidade e as melhores marcas do mercado.
        </motion.h2>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-heading font-bold text-base sm:text-lg transition-all w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px -10px rgba(227, 30, 36, 0.5)" }}
            whileTap={{ scale: 0.97 }}
          >
            Agende sua troca de óleo
          </motion.a>
          <motion.a
            href="#sobre"
            className="bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/40 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-heading font-semibold text-base sm:text-lg hover:bg-primary-foreground/20 transition-colors w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Conheça a empresa
          </motion.a>
          <motion.a
            href="/vitrine"
            className="bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/40 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-heading font-semibold text-base sm:text-lg hover:bg-primary-foreground/20 transition-colors w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Ver nossos produtos
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/30 to-transparent" />
    </section>
  );
};

export default HeroSection;
