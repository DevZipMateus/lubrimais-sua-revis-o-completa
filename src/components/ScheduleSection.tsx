import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";
import bgSchedule from "@/assets/bg-schedule.jpg";

const ScheduleSection = () => {
  return (
    <section id="horarios" className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgSchedule})` }}
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
          >
            <span className="text-accent font-heading font-bold text-sm uppercase tracking-widest">
              Quando estamos abertos
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
              Horários de funcionamento
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0,0,0,0.1)" }}
              className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Clock className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="text-lg font-heading font-bold text-foreground">Horários</h3>
              </div>
              <div className="space-y-4">
                {[
                  { day: "Segunda a sexta", time: "08h00 - 11h30 / 13h00 - 18h00" },
                  { day: "Sábado", time: "08h00 - 12h00" },
                ].map((item) => (
                  <div key={item.day} className="flex justify-between items-center pb-3 border-b border-border">
                    <span className="text-foreground font-semibold">{item.day}</span>
                    <span className="text-muted-foreground text-sm">{item.time}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-semibold">Domingo</span>
                  <span className="text-accent font-semibold text-sm">Fechado</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0,0,0,0.1)" }}
              className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <MapPin className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="text-lg font-heading font-bold text-foreground">Localização</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Rua Usina de Canoas, 1101
                <br />
                Rosana - SP
              </p>
              <motion.a
                href="https://www.google.com/maps/search/Rua+Usina+de+Canoas+1101+Rosana+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm hover:underline"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-4 h-4" />
                Ver no Google Maps
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
