import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const START_DATE = new Date("2024-12-13T00:00:00");

const CounterSection = () => {
  const [elapsed, setElapsed] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const diff = now.getTime() - START_DATE.getTime();
      const totalSeconds = Math.floor(diff / 1000);
      const seconds = totalSeconds % 60;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

      let years = now.getFullYear() - START_DATE.getFullYear();
      let months = now.getMonth() - START_DATE.getMonth();
      let days = now.getDate() - START_DATE.getDate();

      if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      setElapsed({ years, months, days, hours, minutes, seconds });
    };

    calc();
    const interval = setInterval(calc, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { value: elapsed.years, label: "Anos" },
    { value: elapsed.months, label: "Meses" },
    { value: elapsed.days, label: "Dias" },
    { value: elapsed.hours, label: "Horas" },
    { value: elapsed.minutes, label: "Minutos" },
    { value: elapsed.seconds, label: "Segundos" },
  ];

  return (
    <section id="contador" className="py-20 px-4 bg-gradient-to-br from-rose-deep to-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className="absolute fill-current"
            style={{
              width: 40 + i * 15,
              height: 40 + i * 15,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float-heart ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Juntos Há</h2>
        <p className="font-cursive text-3xl text-gold-light mb-12">cada segundo conta</p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {units.map((unit) => (
            <div key={unit.label} className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20">
              <span className="font-display text-3xl md:text-4xl font-bold block">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="text-sm uppercase tracking-wider opacity-80">{unit.label}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm opacity-70">Desde 13 de Dezembro de 2024</p>
      </div>
    </section>
  );
};

export default CounterSection;
