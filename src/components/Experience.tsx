// secao de experiencia profissional
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experiencia" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-8 flex items-center gap-3">
          <Briefcase className="text-primary" size={28} />
          Experiência<span className="text-primary">:</span>
        </h2>

        {/* experiencia unica por enquanto */}
        <div className="relative pl-6 border-l-2 border-muted">
          <div className="timeline-dot absolute -left-[7px] top-1" />

          <div className="mb-1">
            <h3 className="font-mono font-bold text-foreground text-lg">
              F5 Informática - Pimenta Bueno [Estágio]
            </h3>
            <p className="text-primary text-sm font-mono">Jul 2025 - Jul 2025</p>
          </div>

          <p className="text-foreground font-medium text-sm mb-2">
            Técnico em Informática
          </p>

          <ul className="space-y-1">
            <li className="text-muted-foreground text-sm flex items-start gap-2">
              <span className="text-primary mt-1">▸</span>
              Atendimento técnico a clientes e diagnóstico de problemas em computadores e notebooks.
            </li>
            <li className="text-muted-foreground text-sm flex items-start gap-2">
              <span className="text-primary mt-1">▸</span>
              Formatação de sistemas e instalação de softwares essenciais.
            </li>
            <li className="text-muted-foreground text-sm flex items-start gap-2">
              <span className="text-primary mt-1">▸</span>
              Manutenção de hardware: troca e instalação de componentes internos.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
