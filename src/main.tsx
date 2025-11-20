import React from "react";
import ReactDOM from "react-dom/client";
import {
  AboutSection,
  ContactSection,
  CtaSection,
  DifferentialsSection,
  FooterSection,
  GallerySection,
  HeroSection,
  ProcessSection,
  ResultsSection,
  TestimonialsSection,
  ThesesSection,
} from "./sections";

function App() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <DifferentialsSection />
      <GallerySection />
      <ProcessSection />
      <ResultsSection />
      <ThesesSection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

// Render the app
const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(<App />);
}
