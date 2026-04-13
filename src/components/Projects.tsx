import { motion } from "motion/react";
import { ExternalLink, Github, Monitor, Cpu } from "lucide-react";

export function Projects() {
  const webProjects = [
    {
      title: "Publisher Pro",
      description: "Plateforme de publication de contenu avec intégration de paiement via FedaPay.",
      tags: ["React", "Vite", "FedaPay", "SaaS"],
      link: "https://publisher-beryl.vercel.app/#",
    },
    {
      title: "Social Media TTS Generator",
      description: "Outil de génération de voix (Text-to-Speech) optimisé pour les créateurs de contenu sur les réseaux sociaux.",
      tags: ["TTS", "IA", "Web App"],
      link: "https://tts-a9z7.vercel.app/#/",
    },
    {
      title: "Nexus Arena",
      description: "Plateforme interactive et compétitive (Gaming/Arena) avec des fonctionnalités en temps réel.",
      tags: ["Gaming", "Temps Réel", "Interactive"],
      link: "https://nexus-arena-118r.onrender.com/",
    },
    {
      title: "Portfolio Industriel",
      description: "Vitrine professionnelle présentant mes réalisations en ingénierie et systèmes embarqués.",
      tags: ["Portfolio", "Vitrine", "UI/UX"],
      link: "https://fabio-agboton.onrender.com/",
    },
    {
      title: "Auto-stop",
      description: "Application de covoiturage pour assurer la sécurité et la confiance entre les acteurs de ce services (passager et conducteur)",
      tags: ["firebase", "Vite","fluter","TypeScript"],
      link: "https://gen-lang-client-0059539005.firebaseapp.com/",
    },
    {
      title: "Aura",
      description: "Site de prestation de service et de présentation de produit ",
      tags: ["firebase", "next.js", "TypeScript"],
      link: "https://aura-h411.onrender.com",
    }
  ];

const industrialProjects = [
    "Gestion d'incubation par microcontrôleur (couveuse automatisée)",
    "Commande d'éclairage par détection acoustique",
    "Navigation autonome par détection d'obstacles",
    "BASI (Bloc D'alimentation Sans Interruption)",
    "Conversion statique d'énergie : Onduleur domestique",
    "Installation électrique domestique",
    "Démarrage d'un moteur à courant alternatif",
    "Sécurisation d'accès par identification électronique",
    "Pompage d'eau automatique",
    "Plateforme de déploiement et vitrine logicielle"
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projets Réalisés</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une sélection de mes travaux récents, allant du développement web full-stack à l'ingénierie des systèmes embarqués.
          </p>
        </div>

        {/* Web Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Monitor className="text-primary" size={28} />
            <h3 className="text-2xl font-semibold">Développement Web & Logiciel</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {webProjects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 transition-all group relative overflow-hidden flex flex-col h-full hover:shadow-[0_0_20px_rgba(0,242,255,0.1)]"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h4>
                  <ExternalLink size={20} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
                
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider font-mono px-2 py-1 bg-muted text-muted-foreground rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-border/50 flex items-center gap-2 text-sm font-medium text-primary opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                  <span>Visiter le site</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ExternalLink size={14} />
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Industrial Projects */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Cpu className="text-primary" size={28} />
            <h3 className="text-2xl font-semibold">Systèmes Industriels & Embarqués</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industrialProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-muted/30 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                <span className="text-sm font-medium text-foreground/90">{project}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

