// pagina principal - portfolio do victor andrade
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Footer />
    </main>
  );
};

export default Index;
