import { motion } from "framer-motion";
import { Droplets, Filter, FlaskConical } from "lucide-react";
import bgServices from "@/assets/bg-services.jpg";

const services = [
  {
    icon: Droplets,
    title: "Troca de óleo",
    description:
      "Serviço especializado de troca de óleo com produtos de alta qualidade das melhores marcas do mercado.",
  },
  {
    icon: Filter,
    title: "Troca de filtros",
    description:
      "Substituição de todos os tipos de filtros: óleo, ar, combustível e cabine, garantindo a performance do motor.",
  },
  {
    icon: FlaskConical,
    title: "Lubrificantes e aditivos",
    description:
      "Trabalhamos com as principais marcas de lubrificantes e aditivos para garantir a saúde e longevidade do seu motor.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgServices})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative container mx-auto px-4">
        <div className="bg-background/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent font-heading font-bold text-sm uppercase tracking-widest">
              O que fazemos
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
              Nossos serviços
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)" }}
                className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border group cursor-default"
              >
                <motion.div
                  className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:shadow-lg transition-all duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </motion.div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
