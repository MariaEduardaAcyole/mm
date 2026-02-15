import { Music } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const songs = [
  {
    title: "Ta vendo aquela lua",
    artist: "DRIKA",
    lyrics: "Tá vendo aquela lua que brilha lá no céu?\n Se você me pedir eu vou buscar só para te dar\n Se bem que o brilho dela nem se compara ao seu\nDeixa eu te dar um beijo vou mostrar o tempo que perdeu",
  },
  {
    title: "E foi assim",
    artist: "Artista",
    lyrics: "E foi assim\nQuando eu te vi a primeira vez \n Você duvidava da minha cara, me chamava de canalha\n Mas hoje o tempo passou e olha só o que a gente fez \n E quando eu vi \n Num piscar de olhos, me entreguei \n Agora não penso mais em nada além de te ter em casa\n Virou minha namorada que me chama de meu bem",
  },
  {
    title: "O vagabundo e a dama",
    artist: "oriente",
    lyrics: "Ele se apresentou, ela sorriu \n Ele chegou juntinho no ouvido, ela caiu (ela caiu)\n Ele ratinho de desenrolo, ela, beleza indescritível\n E começa a história de um amor impossível\n"
  },
];

const MusicSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="musicas" className="py-20 px-4 bg-cream">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-rose-deep mb-4">Nossas Músicas</h2>
        <p className="font-cursive text-gold text-2xl text-center mb-16">a trilha sonora do nosso amor</p>

        <div className="grid md:grid-cols-3 gap-6">
          {songs.map((song, i) => (
            <div
              key={i}
              className={`bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Music className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-display text-lg font-bold text-foreground">{song.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{song.artist}</p>
              <p className="text-sm text-muted-foreground italic whitespace-pre-line leading-relaxed">{song.lyrics}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
