import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const meals = [
  {
    id: 1,
    name: "Frango Grelhado com Arroz Branco",
    description: "Proteína magra com carboidratos complexos e legumes no vapor",
    calories: "480 kcal",
    image: "/marmita1.png",
  },
  {
    id: 2,
    name: "Bowl Proteico Mediterrâneo",
    description: "carne fatiada com quinoa, nuts e verduras",
    calories: "520 kcal",
    image: "/marmita2.png",
  },
  {
    id: 3,
    name: "Quinoa + Burger veg + legumes",
    description: "Quinoa com burger vegetal e mix de legumes assados",
    calories: "450 kcal",
    image: "/marmita3.png",
  },
  {
    id: 4,
    name: "Bife de Patinho, arroz e feijão",
    description: "Bife grelhado com arroz e feijão e mix colorido de legumes",
    calories: "680 kcal",
    image: "/marmita4.png",
  },
  {
    id: 5,
    name: "Peito de Frango + Vagem + Batatas",
    description: "Peito de frango com vagem e batatas assadas",
    calories: "520 kcal",
    image: "/marmita5.png",
  },
  {
    id: 6,
    name: "Strogonogg de frango",
    description: " strogonoff de frango + arroz branco + batata palha",
    calories: "380 kcal",
    image: "/marmita7.png",
  },
  {
    id: 7,
    name: "Espaguete de abobrinha e cogumelos",
    description: "opção low carb com espaguete de abobrinha e cogumelos salteados",
    calories: "320 kcal",
    image: "/marmita6.png",
  },
];

export default function MenuCarousel() {
  const perView = 3;

  const maxIndex = useMemo(
    () => Math.max(0, meals.length - perView),
    [perView]
  );

  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));

  useEffect(() => {
    const t = setInterval(next, 3500);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxIndex]);

  return (
    <section id="meals" className="py-20 md:py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-14 space-y-3">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
            Our Menu
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Carefully crafted meals designed to fuel your performance
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            {/* Track */}
            <motion.div
              className="flex -mx-3"
              animate={{ x: `-${index * (100 / perView)}%` }}
              transition={{ type: "spring", stiffness: 160, damping: 22 }}
            >
              {meals.map((meal) => (
                <div
                  key={meal.id}
                  className="basis-1/3 shrink-0 px-3"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow">
                    {/* FOTO MAIOR */}
                    <div className="h-72 md:h-80 bg-gray-100 overflow-hidden">
                      <img
                        src={meal.image}
                        alt={meal.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="text-xl md:text-2xl font-light text-gray-900">
                        {meal.name}
                      </h3>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {meal.description}
                      </p>
                      <p className="text-sm text-gray-500 font-light">
                        {meal.calories}
                      </p>

                      <button className="w-full mt-2 px-6 py-3 border border-gray-900 text-gray-900 font-light hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                        <Plus className="w-4 h-4" />
                        Add to Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Setas */}
          <button
            onClick={prev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full shadow-md w-10 h-10 items-center justify-center text-gray-700 hover:bg-gray-50"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full shadow-md w-10 h-10 items-center justify-center text-gray-700 hover:bg-gray-50"
            aria-label="Next"
          >
            ›
          </button>

          {/* Bolinhas */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "bg-gray-900 w-6" : "bg-gray-300 w-2.5 hover:bg-gray-400"
                }`}
                aria-label={`Go to ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
