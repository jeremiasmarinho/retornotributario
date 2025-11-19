import { galleryImages } from "../content/data";

export const GallerySection = () => (
  <section class="section section-gallery" data-animate="fade-up">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Bastidores</span>
        <h2>Veja como conduzimos cada projeto</h2>
        <p class="section-subtitle">
          Registro fotográfico realça credibilidade e aproxima sua empresa do
          público.
        </p>
      </div>
      <div class="gallery-grid">
        {galleryImages.map((image) => (
          <article
            class="gallery-card tilt-card"
            key={image.caption}
            data-animate="zoom-in"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
            />
            <div class="gallery-caption">
              <p>{image.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
