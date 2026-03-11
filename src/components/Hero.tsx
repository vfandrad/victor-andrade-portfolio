// componente hero - foto, nome, frase e links sociais
import victorPhoto from "@/assets/victor-photo.png";
import { Github, Linkedin, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      {/* foto de perfil com borda cinza clara */}
      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-border mb-6 shadow-md bg-card">
        <img
          src={victorPhoto}
          alt="Victor Andrade"
          className="w-full h-full object-cover"
        />
      </div>

      {/* saudacao */}
      <p className="text-muted-foreground text-sm font-mono mb-2">Oi! Eu sou o</p>

      {/* nome com cursor piscando - cor mais clara tipo a referencia */}
      <h1 className="text-4xl md:text-5xl font-mono font-bold text-muted-foreground mb-4 typing-cursor">
        Victor Andrade
      </h1>

      {/* frase do hegel */}
      <p className="text-muted-foreground text-center max-w-lg mb-10 text-sm md:text-base font-mono">
        <span className="text-primary font-medium">Nada de grande</span> no mundo foi realizado sem{" "}
        <span className="text-primary font-medium">paixão</span>. — Hegel ❤️‍🔥
      </p>

      {/* links sociais - grid 2 colunas como a referencia */}
      <div className="grid grid-cols-2 gap-3 w-full max-w-lg">
        <a
          href="https://www.linkedin.com/in/vfandrad"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link flex items-center justify-center gap-2 px-6 py-4 bg-secondary rounded-xl text-muted-foreground font-medium text-sm"
        >
          <Linkedin size={18} />
          LinkedIn
        </a>
        <a
          href="https://github.com/vfandrad"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link flex items-center justify-center gap-2 px-6 py-4 bg-secondary rounded-xl text-muted-foreground font-medium text-sm"
        >
          <Github size={18} />
          GitHub
        </a>
      </div>

      {/* seta pra baixo */}
      <a href="#sobre" className="mt-14 text-muted-foreground animate-bounce">
        <ArrowDown size={22} />
      </a>
    </section>
  );
};

export default Hero;
