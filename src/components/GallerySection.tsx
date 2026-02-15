import { useEffect, useRef, useState } from "react";

const photos = [
  { id: 1, src: "/1.jpeg", caption: "Juntos sempre" },
  { id: 2, src: "/2.jpeg", caption: "Juntos sempre" },
  { id: 3, src: "/3.jpeg", caption: "Juntos sempre" },
  { id: 4, src: "/4.jpeg", caption: "Nosso amor" },
  { id: 8, src: "/8.jpeg", caption: "Nosso amor" },
  
];

const GallerySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="galeria" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-rose-deep mb-4">
          Galeria
        </h2>
        <p className="font-cursive text-gold text-2xl text-center mb-16">
          nossos momentos registrados
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div
              key={photo.id}
              className={`group relative aspect-square rounded-lg overflow-hidden border transition-all duration-700 hover:shadow-lg hover:scale-[1.02]
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={photo.src}
                alt={photo.caption}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-primary-foreground font-display text-sm">
                  {photo.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
