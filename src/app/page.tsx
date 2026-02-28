import { CustomCursor } from "@/components/layout/CustomCursor";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { Philosophy } from "@/components/sections/Philosophy";
import { GallerySection } from "@/components/sections/GallerySection";
import { Preloader } from "@/components/ui/Preloader";
import { RecoveryLab } from "@/components/sections/RecoveryLab";
import { PerformanceHub } from "@/components/sections/PerformanceHub";
import { Hospitality } from "@/components/sections/Hospitality";
import { LocationSection } from "@/components/sections/LocationSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />

      <main>
        {/* Bloco 1: Hero Reveal */}
        <HeroSection />

        {/* Bloco 2: The Philosophy — Split Parallax */}
        <Philosophy />

        {/* Bloco 3: Private Residences Gallery */}
        <GallerySection />

        {/* Bloco 4: Recovery Lab — Glassmorphism Grid */}
        <RecoveryLab />

        {/* Bloco 4: Performance Hub — Vertical Stack */}
        <PerformanceHub />

        {/* Espaço luxury entre seções */}
        <div className="py-16" />

        {/* Bloco 5: Hospitality — Curadoria Daslu */}
        <Hospitality />

        {/* Bloco 6: Location & Lifestyle Context */}
        <LocationSection />

        {/* Bloco 7: Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
