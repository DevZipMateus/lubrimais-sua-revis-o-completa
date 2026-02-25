import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight, Sparkles } from "lucide-react";
import bgVitrine from "@/assets/bg-vitrine.jpg";

const VitrineSection = () => {
  return (
    <section id="produtos" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgVitrine})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-hero-overlay/80" />

      {/* Decorative animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 rounded-full bg-accent/5"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-primary-foreground/5"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="bg-hero-overlay/35 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-14 shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <ShoppingBag className="w-8 h-8 text-accent" />
            </motion.div>

            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-accent font-heading font-bold text-sm uppercase tracking-widest inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Nossa vitrine
              <Sparkles className="w-4 h-4" />
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mt-2 mb-4 sm:mb-6"
            >
              Confira nossos produtos
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-primary-foreground/80 text-base sm:text-lg leading-relaxed mb-6 sm:mb-10 max-w-2xl mx-auto"
            >
              Trabalhamos com as melhores marcas de lubrificantes, filtros e aditivos do mercado. Acesse nossa vitrine e conheça toda a nossa linha de produtos com preços e disponibilidade em tempo real.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="/vitrine"
                className="inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-heading font-bold text-base sm:text-lg transition-all w-full sm:w-auto"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px -10px rgba(227, 30, 36, 0.5)" }}
                whileTap={{ scale: 0.97 }}
              >
                Acessar vitrine de produtos
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.a>
              <motion.a
                href="https://wa.me/5599999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/40 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-heading font-semibold text-base sm:text-lg hover:bg-primary-foreground/20 transition-colors w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Solicitar orçamento
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;
