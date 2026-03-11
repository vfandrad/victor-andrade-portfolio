// secao sobre mim
const About = () => {
  return (
    <section id="sobre" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-8">
          Sobre mim<span className="text-primary">:</span>
        </h2>

        {/* textos sobre mim */}
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Entusiasta de tecnologia desde cedo, com interesse em programação,
            robótica e experimentação técnica.
          </p>
          <p>
            Acredito no conhecimento como ferramenta fundamental e no mérito
            como consequência do esforço consistente.
          </p>
          <p>
            Natural de <span className="text-foreground font-medium">Cacoal</span> e criado em{" "}
            <span className="text-foreground font-medium">Pimenta Bueno</span>.
          </p>
          <p>
            Em 2026, estou focado no desenvolvimento de projetos envolvendo{" "}
            <span className="text-primary font-medium">inteligência artificial</span> e no
            aprimoramento do <span className="text-primary font-medium">inglês</span> e do{" "}
            <span className="text-primary font-medium">italiano</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
