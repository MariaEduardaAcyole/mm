import { Heart } from "lucide-react";

const FloatingHeart = ({ delay, left, size }: { delay: number; left: string; size: number }) => (
  <Heart
    className="absolute text-primary/30 fill-primary/20"
    style={{
      left,
      bottom: `${Math.random() * 30}%`,
      width: size,
      height: size,
      animation: `float-heart ${3 + Math.random() * 3}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    }}
  />
);

const HeroSection = () => {
  const hearts = [
    { delay: 0, left: "10%", size: 24 },
    { delay: 1.2, left: "25%", size: 18 },
    { delay: 0.5, left: "70%", size: 28 },
    { delay: 2, left: "85%", size: 20 },
    { delay: 1.5, left: "45%", size: 16 },
    { delay: 0.8, left: "60%", size: 22 },
    { delay: 2.5, left: "15%", size: 14 },
    { delay: 1.8, left: "90%", size: 18 },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary via-background to-cream">
      {hearts.map((h, i) => (
        <FloatingHeart key={i} {...h} />
      ))}

      <div className="relative z-10 text-center px-4">
        <p className="font-cursive text-gold text-2xl md:text-3xl mb-4">Nossa história</p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-rose-deep tracking-wide">
          Maria & Murilo
        </h1>
        <div className="w-24 h-0.5 bg-gold mx-auto my-6" />
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-md mx-auto italic">
          "Uma breguice para o dia do amor"
        </p>
        <Heart className="mx-auto mt-8 text-primary fill-primary/30 w-8 h-8 animate-float-heart" />
      </div>
    </section>
  );
};

export default HeroSection;
