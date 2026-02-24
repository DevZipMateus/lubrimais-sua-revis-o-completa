import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-accent font-heading font-bold text-sm uppercase tracking-widest">
            Fale conosco
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
            Entre em contato
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href="mailto:kleberczampoli@gmail.com"
              className="flex items-center gap-4 bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">E-mail</div>
                <div className="text-foreground font-semibold text-sm">kleberczampoli@gmail.com</div>
              </div>
            </a>

            <a
              href="https://wa.me/5599999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">WhatsApp</div>
                <div className="text-foreground font-semibold text-sm">Fale conosco</div>
              </div>
            </a>

            <a
              href="https://www.google.com/maps/search/Rua+Usina+de+Canoas+1101+Rosana+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Endereço</div>
                <div className="text-foreground font-semibold text-sm">Rua Usina de Canoas, 1101</div>
              </div>
            </a>

            <a
              href="https://www.instagram.com/lubrimaislubrificantes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Instagram className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Instagram</div>
                <div className="text-foreground font-semibold text-sm">@lubrimaislubrificantes</div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
