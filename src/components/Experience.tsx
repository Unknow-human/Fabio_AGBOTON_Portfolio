import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

export function Experience() {
  const timeline = [
    {
      year: "En cours",
      title: "Étudiant en MASTER",
      subtitle: "Systèmes Industriels",
      description: "Spécialisation avancée en ingénierie, automatisation et gestion de projets industriels complexes."
    },
    {
      year: "Obtenue",
      title: "Licence Professionnelle",
      subtitle: "Génie Électrique & Informatique Industrielle",
      description: "Formation pratique et théorique sur les systèmes embarqués, l'électrotechnique et l'informatique."
    },
    {
      year: "Obtenu",
      title: "BACCALAUREAT",
      subtitle: "Série Technique",
      description: "Bases solides en mathématiques, physique appliquée et sciences de l'ingénieur."
    },
    {
      year: "Obtenu",
      title: "Certificat d'Aptitude Professionnelle (CAP)",
      subtitle: "Électrotechnique",
      description: "Premiers pas dans le domaine technique avec une forte orientation pratique et terrain."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30 border-y border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Parcours Professionnel</h2>
          <p className="text-muted-foreground">
            Une évolution académique constante, de la pratique terrain à l'ingénierie de haut niveau.
          </p>
        </div>

        <div className="relative border-l border-primary/30 ml-3 md:ml-6 space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3.5 top-1.5 w-7 h-7 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                <GraduationCap size={14} className="text-primary" />
              </div>

              <div className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 transition-colors">
                <span className="text-xs font-mono text-primary uppercase tracking-wider mb-2 block">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <h4 className="text-sm font-medium text-muted-foreground mb-4">{item.subtitle}</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
