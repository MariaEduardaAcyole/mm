import { useMemo } from "react";

const phrases = [
"Você e o meu refúgio",
"Nada é mais precioso que nosso amor",
"Nosso amor é a minha fortaleza",
"Amar você é a melhor parte da minha vida",
"Com você, o amor se torna poesia",
"Voce é a definição de perfeição",
"Você é o meu sonho realizado",
"Você é a razão do meu sorriso",
"Ao seu lado, cada dia é uma aventura",
"Estar ao seu lado é o meu maior privilégio",
"Seu sorriso é minha canção favorita",
"Só voce consegue me fazer sentir assim",
"Você ilumina meus dias",
"Cada dia é um capítulo novo na nossa história de amor",
"Nossa conexão é inexplicável",
"Meu amor por você só cresce cada dia",
"Com você encontrei meu lar"
];

const WordCloudSection = () => {

  const words = useMemo(() => {
    return phrases.map((text) => ({
      text,
      size: Math.floor(Math.random() * 20) + 18,
      rotate: Math.random() > 0.7 ? "rotate-2" : "-rotate-2",
      delay: Math.random() * 5
    }));
  }, []);

  return (
    <section className="py-20 px-6 bg-background text-center overflow-hidden">
      <h2 className="text-3xl font-semibold mb-12 text-rose-500">
        Nossas breguices 💌
      </h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">

        {words.map((word, index) => (
          <span
            key={index}
            className={`
            text-rose-700 font-medium
            transition-transform duration-500
            hover:scale-125 hover:text-rose-500
            animate-float
            ${word.rotate}
            `}
            style={{
              fontSize: `${word.size}px`,
              animationDelay: `${word.delay}s`
            }}
          >
            {word.text}
          </span>
        ))}

      </div>
    </section>
  );
};

export default WordCloudSection;