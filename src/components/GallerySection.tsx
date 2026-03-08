import { useEffect, useRef, useState } from "react";

import foto1 from "../assets/1.jpeg";
import foto2 from "../assets/2.jpeg";
import foto3 from "../assets/3.jpeg";
import foto4 from "../assets/4.jpeg";
import foto5 from "../assets/5.jpeg";
import foto6 from "../assets/6.jpeg";
import foto7 from "../assets/7.jpeg";
import foto8 from "../assets/8.jpeg";
import foto9 from "../assets/9.jpeg";
import foto10 from "../assets/10.jpeg";
import foto11 from "../assets/11.jpeg";
import foto12 from "../assets/12.jpeg";
import foto13 from "../assets/13.jpeg";
import foto14 from "../assets/14.jpeg";

const photos = [
  { id: 1, src: foto1, caption: "Juntos sempre" },
  { id: 2, src: foto2, caption: "Juntos sempre" },
  { id: 3, src: foto3, caption: "Juntos sempre" },
  { id: 4, src: foto4, caption: "Juntos sempre" },
  { id: 5, src: foto5, caption: "Juntos sempre" },
  { id: 6, src: foto6, caption: "Juntos sempre" },
  { id: 7, src: foto7, caption: "Juntos sempre" },
  { id: 8, src: foto8, caption: "Juntos sempre" },
  { id: 9, src: foto9, caption: "Juntos sempre" },
  { id: 10, src: foto10, caption: "Juntos sempre" },
  { id: 11, src: foto11, caption: "Juntos sempre" },
  { id: 12, src: foto12, caption: "Juntos sempre" },
  { id: 13, src: foto13, caption: "Juntos sempre" },
  { id: 14, src: foto14, caption: "Juntos sempre" },
];

const GallerySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="galeria" className="py-24 px-6 bg-background">
      <div ref={ref} className="max-w-7xl mx-auto">

        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rose-deep mb-4">
            Galeria
          </h2>

          <p className="text-gold text-2xl">
            nossos momentos registrados
          </p>
        </header>

        {/* Masonry Layout */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">

          {photos.map((photo, i) => (
            <figure
              key={photo.id}
              className={`
              break-inside-avoid
              relative
              overflow-hidden
              rounded-xl
              shadow-sm
              hover:shadow-xl
              transition-all duration-500
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />

              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition flex items-end p-4">
                <span className="text-white text-sm">
                  {photo.caption}
                </span>
              </figcaption>
            </figure>
          ))}

        </div>

      </div>
    </section>
  );
};

export default GallerySection;