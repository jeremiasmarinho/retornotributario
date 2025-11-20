import { Hono } from "hono";
import { renderer } from "./renderer";
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

const app = new Hono();

app.use(renderer);

app.get("/", (c) =>
  c.render(
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
      <script src="/static/script.js"></script>
    </>
  )
);

export default app;
