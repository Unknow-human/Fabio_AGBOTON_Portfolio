import { motion } from "motion/react";
import { Cpu, Code2, Wrench } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Cpu className="w-10 h-10 text-primary" />,
      title: "Programmation Embarquée",
      description: "Conception et programmation de microcontrôleurs pour des systèmes automatisés et intelligents."
    },
    {
      icon: <Wrench className="w-10 h-10 text-primary" />,
      title: "Systèmes Industriels",
      description: "Installation, maintenance et optimisation de systèmes électriques et industriels complexes."
    },
    {
      icon: <Code2 className="w-10 h-10 text-primary" />,
      title: "Développement Web & Logiciel",
      description: "Création de plateformes web modernes, d'outils SaaS et d'applications interactives."
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services d'Excellence</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une double expertise alliant le matériel (hardware) et le logiciel (software) pour des solutions complètes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border p-8 rounded-xl hover:border-primary/50 transition-colors group"
            >
              <div className="mb-6 p-4 bg-muted rounded-lg inline-block group-hover:bg-primary/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
