import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const ButtonContrato = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="contrato"
      className="py-20 px-4 bg-background flex justify-center"
    >
      <Link to="/contrato">
        <button
          className={`
          px-10 py-4
          bg-gradient-to-r
          from-rose-500
          to-pink-600
          text-white
          font-semibold
          rounded-xl
          shadow-lg
          hover:scale-105
          hover:shadow-xl
          transition
          duration-500
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          Ver Nosso Contrato ❤️
        </button>
      </Link>
    </section>
  );
};

export default ButtonContrato;