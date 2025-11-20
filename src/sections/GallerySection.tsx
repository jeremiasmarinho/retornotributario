import { galleryImages } from "../content/data";

export const GallerySection = () => (
  <section
    className="section section-gallery bg-gray-900 py-20"
    data-animate="fade-up"
  >
    <div className="mx-auto max-w-6xl px-6">
      <div className="section-header text-center">
        <span className="section-tag text-sm uppercase tracking-[0.4em] text-amber-300">
          Bastidores
        </span>
        <h2 className="text-3xl font-semibold text-white">
          Veja como conduzimos cada projeto
        </h2>
        <p className="section-subtitle text-white/70">
          Registro fotográfico realça credibilidade e aproxima sua empresa do
          público.
        </p>
      </div>
      <div className="gallery-grid grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((image) => (
          <article
            className="gallery-card tilt-card group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-xl"
            key={image.caption}
            data-animate="zoom-in"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="gallery-caption absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-transparent px-4 py-3 text-sm text-white">
              <p>{image.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
