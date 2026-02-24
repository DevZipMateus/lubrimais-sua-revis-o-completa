import { motion } from "framer-motion";
import { Droplets, Filter, FlaskConical } from "lucide-react";

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
    <section id="servicos" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-accent font-heading font-bold text-sm uppercase tracking-widest">
            O que fazemos
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Nossos serviços
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-border group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
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
    </section>
  );
};

export default ServicesSection;
