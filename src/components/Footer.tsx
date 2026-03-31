import { Mail, MapPin, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-background py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Travaillons Ensemble</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Vous avez un projet industriel ou logiciel ? Discutons de la manière dont je peux vous aider à le concrétiser.
            </p>
            <div className="space-y-4">
              <a href="mailto:dtagboton@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
                <span>Me contacter par email</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={20} />
                <span>Disponible pour des missions</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end gap-6">
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/fabio-agboton-477863317" className="p-3 bg-muted rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Unknow-human" className="p-3 bg-muted rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Github size={24} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © {new Date().getFullYear()} Fabio AGBOTON. Tous droits réservés.<br/>
              Ingénieur Systèmes Industriels & Développeur.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
