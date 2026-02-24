import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";
import bgVitrine from "@/assets/bg-vitrine.jpg";

const VitrineSection = () => {
  return (
    <section id="produtos" className="relative py-20 overflow-hidden">
      {/* Background parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgVitrine})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-hero-overlay/80" />

      <div className="relative container mx-auto px-4">
        <div className="bg-hero-overlay/35 backdrop-blur-sm rounded-3xl p-8 md:p-14 shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-8 h-8 text-accent" />
              </div>

              <span className="text-accent font-heading font-bold text-sm uppercase tracking-widest">
                Nossa vitrine
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mt-2 mb-6">
                Confira nossos produtos
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                Trabalhamos com as melhores marcas de lubrificantes, filtros e aditivos do mercado. Acesse nossa vitrine e conheça toda a nossa linha de produtos com preços e disponibilidade em tempo real.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/vitrine"
                  className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-heading font-bold text-lg hover:opacity-90 transition-opacity"
                >
                  Acessar vitrine de produtos
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/5599999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/40 px-8 py-4 rounded-lg font-heading font-semibold text-lg hover:bg-primary-foreground/20 transition-colors"
                >
                  Solicitar orçamento
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;
