import { motion } from "framer-motion";
import { Shield, Eye, Award, Zap, Leaf } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Qualidade inegociável",
    description: "Trabalhamos apenas com as principais marcas e filtros do mercado.",
  },
  {
    icon: Eye,
    title: "Transparência",
    description: "Explicamos cada etapa do processo, garantindo que você saiba o que está sendo feito.",
  },
  {
    icon: Award,
    title: "Experiência e tradição",
    description: "Mais de 10 anos de história unindo conhecimento prático às novas tecnologias.",
  },
  {
    icon: Zap,
    title: "Agilidade com precisão",
    description: "Respeitamos seu tempo sem abrir mão do rigor técnico necessário.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Compromisso com o descarte correto de resíduos e preservação do meio ambiente.",
  },
];

const ValuesSection = () => {
  return (
    <section id="valores" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-accent font-heading font-bold text-sm uppercase tracking-widest">
            No que acreditamos
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mt-2">
            Missão, visão e valores
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20"
          >
            <h3 className="text-xl font-heading font-bold text-primary-foreground mb-3">
              Nossa missão
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Proporcionar segurança e longevidade aos veículos de nossos clientes através de uma troca de óleo especializada, utilizando produtos de alta qualidade e um atendimento transparente, técnico e ágil.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20"
          >
            <h3 className="text-xl font-heading font-bold text-primary-foreground mb-3">
              Nossa visão
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Ser a principal referência em cuidados automotivos na região, reconhecida pela excelência técnica, pela parceria com as melhores marcas do mercado e pela inovação constante nos serviços de manutenção preventiva.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-primary-foreground/15 rounded-full flex items-center justify-center mx-auto mb-3">
                <value.icon className="w-6 h-6 text-accent" />
              </div>
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
    </section>
  );
};

export default ValuesSection;
