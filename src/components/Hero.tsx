import { motion } from "motion/react";
import { ArrowRight, Terminal, Cpu } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border text-sm text-muted-foreground mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Disponible pour de nouveaux projets
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Fabio <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">AGBOTON</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 font-light"
        >
          Ingénieur Systèmes Industriels & Développeur.
          <br />
          <span className="text-lg mt-2 block">Solutions & Technologies au service de l'industrie et du web.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
          >
            Voir mes projets <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-muted text-foreground border border-border px-8 py-3 rounded-md font-medium hover:bg-muted/80 transition-colors w-full sm:w-auto justify-center"
          >
            Me contacter
          </a>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 flex justify-center gap-8 text-muted-foreground opacity-50"
        >
          <div className="flex flex-col items-center gap-2">
            <Cpu size={32} />
            <span className="text-xs font-mono uppercase">Embarqué</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Terminal size={32} />
            <span className="text-xs font-mono uppercase">Logiciel</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
