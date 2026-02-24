import { motion } from "framer-motion";
import aboutImg from "@/assets/about-img.jpg";
import bgAbout from "@/assets/bg-about.jpg";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

const AboutSection = () => {
  return (
    <section id="sobre" className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgAbout})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative container mx-auto px-4">
        <div className="bg-background/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60, rotate: -2 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring" }}
            >
              <motion.img
                src={aboutImg}
                alt="Mecânico realizando troca de óleo automotivo"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.span variants={itemVariants} className="text-accent font-heading font-bold text-sm uppercase tracking-widest block">
                Nossa história
              </motion.span>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
                Sobre a Lubrimais
              </motion.h2>
              <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed mb-4">
                A Lubrimais Lubrificantes surgiu em 2015, buscando levar para a cidade de Rosana e distrito de Porto Primavera a excelência no atendimento de troca de óleo. Somos uma empresa 100% dedicada à troca de todos os filtros e trabalhamos com as melhores marcas de lubrificantes do mercado.
              </motion.p>
              <motion.p variants={itemVariants} className="text-muted-foreground leading-relaxed mb-6">
                Tivemos que lidar com uma mudança na cultura da região, onde não existia uma empresa focada somente na troca de óleo. Com qualidade nos produtos e atendimento, hoje temos mais de 10 anos de mercado sendo referência nesse tipo de prestação de serviço.
              </motion.p>
              <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
                {[
                  { value: "10+", label: "Anos de mercado", color: "text-primary" },
                  { value: "100%", label: "Dedicação", color: "text-primary" },
                  { value: "★", label: "Referência regional", color: "text-accent" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 bg-secondary rounded-xl"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`text-3xl font-heading font-black ${stat.color}`}>{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
