import { motion } from "framer-motion";
import { Shield, Eye, Award, Zap, Leaf } from "lucide-react";
import bgValues from "@/assets/bg-values.jpg";

const values = [
  { icon: Shield, title: "Qualidade inegociável", description: "Trabalhamos apenas com as principais marcas e filtros do mercado." },
  { icon: Eye, title: "Transparência", description: "Explicamos cada etapa do processo, garantindo que você saiba o que está sendo feito." },
  { icon: Award, title: "Experiência e tradição", description: "Mais de 10 anos de história unindo conhecimento prático às novas tecnologias." },
  { icon: Zap, title: "Agilidade com precisão", description: "Respeitamos seu tempo sem abrir mão do rigor técnico necessário." },
  { icon: Leaf, title: "Sustentabilidade", description: "Compromisso com o descarte correto de resíduos e preservação do meio ambiente." },
];

const ValuesSection = () => {
  return (
    <section id="valores" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgValues})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-hero-overlay/70" />

      <div className="relative container mx-auto px-4">
        <div className="bg-hero-overlay/35 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-xl">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-heading font-bold text-sm uppercase tracking-widest">
              No que acreditamos
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary-foreground mt-2">
              Missão, visão e valores
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto mb-8 sm:mb-14">
            {[
              {
                title: "Nossa missão",
                text: "Proporcionar segurança e longevidade aos veículos de nossos clientes através de uma troca de óleo especializada, utilizando produtos de alta qualidade e um atendimento transparente, técnico e ágil.",
              },
              {
                title: "Nossa visão",
                text: "Ser a principal referência em cuidados automotivos na região, reconhecida pela excelência técnica, pela parceria com as melhores marcas do mercado e pela inovação constante nos serviços de manutenção preventiva.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.02, boxShadow: "0 15px 30px -10px rgba(0,0,0,0.3)" }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 lg:p-8 border border-primary-foreground/20 transition-all"
              >
                <h3 className="text-xl font-heading font-bold text-primary-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="text-center cursor-default"
              >
                <motion.div
                  className="w-14 h-14 bg-primary-foreground/15 rounded-full flex items-center justify-center mx-auto mb-3"
                  whileHover={{ scale: 1.15, backgroundColor: "rgba(255,255,255,0.25)" }}
                  transition={{ duration: 0.2 }}
                >
                  <value.icon className="w-6 h-6 text-accent" />
                </motion.div>
                <h3 className="text-sm font-heading font-bold text-primary-foreground mb-1">
                  {value.title}
                </h3>
                <p className="text-xs text-primary-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
