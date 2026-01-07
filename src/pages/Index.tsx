import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import CursorGlow from "@/components/CursorGlow";

const Index = () => {
  return (
    <div className="bg-background relative">
      <InteractiveBackground />
      <CursorGlow />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
