import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

const ScheduleSection = () => {
  return (
    <section id="horarios" className="py-20 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-accent font-heading font-bold text-sm uppercase tracking-widest">
            Quando estamos abertos
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Horários de funcionamento
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground">Horários</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span className="text-foreground font-semibold">Segunda a sexta</span>
                <span className="text-muted-foreground text-sm">08h00 - 11h30 / 13h00 - 18h00</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-border">
                <span className="text-foreground font-semibold">Sábado</span>
                <span className="text-muted-foreground text-sm">08h00 - 12h00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-foreground font-semibold">Domingo</span>
                <span className="text-accent font-semibold text-sm">Fechado</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground">Localização</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Rua Usina de Canoas, 1101
              <br />
              Rosana - SP
            </p>
            <a
              href="https://www.google.com/maps/search/Rua+Usina+de+Canoas+1101+Rosana+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm hover:underline"
            >
              <MapPin className="w-4 h-4" />
              Ver no Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
