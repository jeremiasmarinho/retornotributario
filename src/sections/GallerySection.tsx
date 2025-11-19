import { galleryImages } from "../content/data";

export const GallerySection = () => (
  <section
    class="section section-gallery bg-gray-900 py-20"
    data-animate="fade-up"
  >
    <div class="mx-auto max-w-6xl px-6">
      <div class="section-header text-center">
        <span class="section-tag text-sm uppercase tracking-[0.4em] text-amber-300">
          Bastidores
        </span>
        <h2 class="text-3xl font-semibold text-white">
          Veja como conduzimos cada projeto
        </h2>
        <p class="section-subtitle text-white/70">
          Registro fotográfico realça credibilidade e aproxima sua empresa do
          público.
        </p>
      </div>
      <div class="gallery-grid grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {galleryImages.map((image) => (
          <article
            class="gallery-card tilt-card group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-xl"
            key={image.caption}
            data-animate="zoom-in"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div class="gallery-caption absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950/90 via-gray-950/50 to-transparent px-4 py-3 text-sm text-white">
              <p>{image.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
