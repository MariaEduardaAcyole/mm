import { Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const MessageSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="mensagem" className="py-20 px-4 bg-background">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <Heart className="w-12 h-12 text-primary fill-primary/30 mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-4xl font-bold text-rose-deep mb-8">Para Você</h2>

        <div className="bg-card border border-border rounded-lg p-8 md:p-12 shadow-sm">
          <p className="font-cursive text-3xl md:text-4xl text-gold mb-6">Meu amor,</p>
          <p className="text-muted-foreground leading-relaxed text-lg italic">
 A vida é imprevisivel. Nem tudo eestá sob nosso controle,
 mas estando com as pessoas certas, voce consegue lidar com tudo
 E voce, (meu) Jake Peralta, é a pessoa certa para mim.
 -- Amy Santiago (Maria)
          </p>
          <p className="font-cursive text-2xl text-gold mt-8">Com todo meu amor, para sempre ❤️</p>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              className="text-primary/40 fill-primary/20"
              style={{
                width: 12 + i * 2,
                height: 12 + i * 2,
                animation: `float-heart ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
