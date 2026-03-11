// componente hero - foto, nome, frase e links sociais
import victorPhoto from "@/assets/victor-photo.png";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  // efeito de digitacao letra por letra
  const fullName = "Victor Andrade";
  const [displayedName, setDisplayedName] = useState("");
  const [doneTyping, setDoneTyping] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedName(fullName.slice(0, i + 1));
      i++;
      if (i >= fullName.length) {
        clearInterval(interval);
        setDoneTyping(true);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      {/* foto de perfil */}
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-muted mb-6 shadow-lg">
        <img
          src={victorPhoto}
          alt="Victor Andrade"
          className="w-full h-full object-cover"
        />
      </div>

      {/* saudacao */}
      <p className="text-muted-foreground text-sm font-mono mb-2">Oi! Eu sou o</p>

      {/* nome com efeito de digitacao */}
      <h1 className="text-4xl md:text-5xl font-mono font-bold text-foreground mb-4 min-h-[3rem] md:min-h-[3.5rem]">
        <span>{displayedName}</span>
        <span className={`typing-cursor-char ${doneTyping ? "blink" : ""}`}>|</span>
      </h1>

      {/* frase do hegel */}
      <p className="text-muted-foreground text-center max-w-lg mb-8 text-sm md:text-base">
        &ldquo;<span className="text-primary font-medium">Nada de grande</span> no mundo foi realizado sem{" "}
        <span className="text-primary font-medium">paixão</span>.&rdquo; — Hegel
      </p>

      {/* links sociais */}
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/vfandrad"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link flex items-center gap-2 px-6 py-3 bg-muted rounded-lg text-foreground font-medium text-sm"
        >
          <Linkedin size={18} />
          LinkedIn
        </a>
        <a
          href="https://github.com/vfandrad"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link flex items-center gap-2 px-6 py-3 bg-muted rounded-lg text-foreground font-medium text-sm"
        >
          <Github size={18} />
          GitHub
        </a>
      </div>

      {/* seta pra baixo */}
      <a href="#sobre" className="mt-12 text-muted-foreground animate-bounce">
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
