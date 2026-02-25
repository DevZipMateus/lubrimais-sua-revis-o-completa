import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import bgContact from "@/assets/bg-contact.jpg";

const contacts = [
  { icon: Mail, label: "E-mail", value: "kleberczampoli@gmail.com", href: "mailto:kleberczampoli@gmail.com", external: false },
  { icon: Phone, label: "WhatsApp", value: "Fale conosco", href: "https://wa.me/5599999999999", external: true },
  { icon: MapPin, label: "Endereço", value: "Rua Usina de Canoas, 1101", href: "https://www.google.com/maps/search/Rua+Usina+de+Canoas+1101+Rosana+SP", external: true },
  { icon: Instagram, label: "Instagram", value: "@lubrimaislubrificantes", href: "https://www.instagram.com/lubrimaislubrificantes", external: true },
];

const ContactSection = () => {
  return (
    <section id="contato" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgContact})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative container mx-auto px-4">
        <div className="bg-background/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-xl">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-heading font-bold text-sm uppercase tracking-widest">
              Fale conosco
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">
              Entre em contato
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {contacts.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 sm:gap-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-md border border-border group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0,0,0,0.12)" }}
                >
                  <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300"
                    whileHover={{ rotate: 10 }}
                  >
                    <contact.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </motion.div>
                  <div>
                    <div className="text-sm text-muted-foreground">{contact.label}</div>
                    <div className="text-foreground font-semibold text-sm">{contact.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
