import { Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const timelineEvents = [
  {
    date: "Março de 2019",
    title: "O Começo",
    description: "Nos conhecemos na escola. Voce foi o primeiro a falar de verdade e me chamar para sentar com voces na aula do Sisi.",
  },
  {
    date: "26 de fevereiro de 2022",
    title: "Nosso Primeiro beiju",
    description: "Quase derreti de vergonha, mas você tava lá me olhando com os olhinhos brilhando e dizendo que estava esperando por isso a muito tempo",
  },
  {
    date: "13 de Dezembro de 2024",
    title: "Um Marco Especial",
    description: "O dia em que salvamos oque nunca deveria ter 'acabado'.",
  },
    {
    date: "25 de Outubro de 2025",
    title: "Aniversario da Di e do seu pai ",
    description: "Conhecer a sua familia foi mais que demais. Espero conhecer cada vez mais seu mundo.",
  },
      {
    date: "06 de Dezembro de 2025",
    title: "Seu aniversário ",
    description: "Participar da sua familia e ganhar o primeiro pedaço com certeza foi o auge2",
  },
      {
    date: "Todos",
    title: "Cada dia, hora, minuto ",
    description: "Todos os momentos que a gente consegue são especiais",
  },
];

const TimelineItem = ({ event, index }: { event: typeof timelineEvents[0]; index: number }) => {
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

  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className={`flex items-center w-full mb-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:gap-8`}>
      <div
        className={`md:w-5/12 w-full transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
          <span className="font-cursive text-gold text-xl">{event.date}</span>
          <h3 className="font-display text-xl font-bold text-foreground mt-2">{event.title}</h3>
          <p className="text-muted-foreground mt-2 leading-relaxed">{event.description}</p>
        </div>
      </div>

      <div className="hidden md:flex flex-col items-center w-2/12">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
          <Heart className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
        </div>
        <div className="w-0.5 h-16 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>

      <div className="md:w-5/12 hidden md:block" />
    </div>
  );
};

const TimelineSection = () => (
  <section id="historia" className="py-20 px-4 bg-cream">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-rose-deep mb-4">Nossa História</h2>
      <p className="font-cursive text-gold text-2xl text-center mb-16">cada momento juntos é especial</p>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/30 via-primary/20 to-transparent" />
        {timelineEvents.map((event, i) => (
          <TimelineItem key={i} event={event} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default TimelineSection;
