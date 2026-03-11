// secao de educacao - timeline style
import { GraduationCap } from "lucide-react";

// dados da educacao
const educationData = [
  {
    school: "IFRO - Campus Cacoal",
    period: "2023 - 2025",
    title: "Técnico em Informática Integrado ao Ensino Médio",
    items: [
      "Projeto de Pesquisa e Extensão com Arduino.",
      "Noções de bancos de dados e manipulação básica.",
      "Fundamentos de redes de computadores.",
      "Fundamentos de lógica e arquitetura de software.",
      "Conhecimentos básicos em HTML, CSS e PHP.",
    ],
  },
  {
    school: "Anisio Serrão De Carvalho - Pimenta Bueno",
    period: "2020 - 2022",
    title: "Ensino Fundamental",
    items: [
      "Projeto de Pesquisa e Extensão em desenvolvimento de games com programação em blocos.",
      "Medalhas na Olimpíada Brasileira de Matemática.",
    ],
  },
  {
    school: "SESI - Pimenta Bueno",
    period: "2016 - 2019",
    title: "Ensino Fundamental",
    items: [
      "Cofundador da equipe de robótica escolar.",
      "Campeão estadual na FIRST LEGO League Challenge, competição internacional de robótica educacional.",
    ],
  },
];

const Education = () => {
  return (
    <section id="educacao" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-8 flex items-center gap-3">
          <GraduationCap className="text-primary" size={28} />
          Educação<span className="text-primary">:</span>
        </h2>

        {/* lista de educacao */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative pl-6 border-l-2 border-muted"
            >
              {/* bolinha da timeline */}
              <div className="timeline-dot absolute -left-[7px] top-1" />

              <div className="mb-1">
                <h3 className="font-mono font-bold text-foreground text-lg">
                  {edu.school}
                </h3>
                <p className="text-primary text-sm font-mono">{edu.period}</p>
              </div>

              <p className="text-foreground font-medium text-sm mb-2">
                {edu.title}
              </p>

              <ul className="space-y-1">
                {edu.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground text-sm flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
