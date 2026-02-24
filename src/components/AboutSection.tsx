import { motion } from "framer-motion";
import aboutImg from "@/assets/about-img.jpg";
import bgAbout from "@/assets/bg-about.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="relative py-20 overflow-hidden">
      {/* Background parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgAbout})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative container mx-auto px-4">
        <div className="bg-background/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={aboutImg}
              alt="Mecânico realizando troca de óleo automotivo"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-accent font-heading font-bold text-sm uppercase tracking-widest">
              Nossa história
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
              Sobre a Lubrimais
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Lubrimais Lubrificantes surgiu em 2015, buscando levar para a cidade de Rosana e distrito de Porto Primavera a excelência no atendimento de troca de óleo. Somos uma empresa 100% dedicada à troca de todos os filtros e trabalhamos com as melhores marcas de lubrificantes do mercado.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Tivemos que lidar com uma mudança na cultura da região, onde não existia uma empresa focada somente na troca de óleo. Com qualidade nos produtos e atendimento, hoje temos mais de 10 anos de mercado sendo referência nesse tipo de prestação de serviço.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-secondary rounded-xl">
                <div className="text-3xl font-heading font-black text-primary">10+</div>
                <div className="text-sm text-muted-foreground mt-1">Anos de mercado</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-xl">
                <div className="text-3xl font-heading font-black text-primary">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Dedicação</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-xl">
                <div className="text-3xl font-heading font-black text-accent">★</div>
                <div className="text-sm text-muted-foreground mt-1">Referência regional</div>
              </div>
            </div>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
