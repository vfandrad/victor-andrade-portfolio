// rodape do site
const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          Criado por{" "}
          <span className="text-foreground font-medium">Victor Figueiredo</span>{" "}
          usando{" "}
          <span className="text-primary font-medium">Lovable</span>,{" "}
          <span className="text-primary font-medium">NextJs</span> e{" "}
          <span className="text-primary font-medium">TailwindCSS</span>.
        </p>
        <p className="text-muted-foreground text-xs mt-1">
          © Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
