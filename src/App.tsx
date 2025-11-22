import {
  AboutSection,
  ContactSection,
  CtaSection,
  DifferentialsSection,
  FooterSection,
  GallerySection,
  HeroSection,
  ProcessSection,
  ThesesSection,
} from "./sections";

export const App = () => (
  <>
    <HeroSection />
    <AboutSection />
    <DifferentialsSection />
    <GallerySection />
    <ProcessSection />
    {/* <ResultsSection /> reservado para fase futura */}
    <ThesesSection />
    {/* <TestimonialsSection /> reservado para fase futura */}
    <CtaSection />
    <ContactSection />
    <FooterSection />
  </>
);

export default App;
