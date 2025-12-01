import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus as PlusIcon, ShoppingCart, Trash2, X } from "lucide-react";

const meals = [
  {
    id: 1,
    name: "Frango Grelhado com Arroz Branco",
    description: "Proteína magra com carboidratos complexos e legumes no vapor",
    calories: "480 kcal",
    image: "/marmita1.png",
    inStock: true,
  },
  {
    id: 2,
    name: "Bowl Proteico Mediterrâneo",
    description: "carne fatiada com quinoa, nuts e verduras",
    calories: "520 kcal",
    image: "/marmita2.png",
    inStock: true,
  },
  {
    id: 3,
    name: "Quinoa + Burger veg + legumes",
    description: "Quinoa com burger vegetal e mix de legumes assados",
    calories: "450 kcal",
    image: "/marmita3.png",
    inStock: false,
  },
  {
    id: 4,
    name: "Bife de Patinho, arroz e feijão",
    description: "Bife grelhado com arroz e feijão e mix colorido de legumes",
    calories: "680 kcal",
    image: "/marmita4.png",
    inStock: false,
  },
  {
    id: 5,
    name: "Peito de Frango + Vagem + Batatas",
    description: "Peito de frango com vagem e batatas assadas",
    calories: "520 kcal",
    image: "/marmita5.png",
    inStock: true,
  },
  {
    id: 6,
    name: "Strogonogg de frango",
    description: "strogonoff de frango + arroz branco + batata palha",
    calories: "380 kcal",
    image: "/marmita7.png",
    inStock: true,
  },
  {
    id: 7,
    name: "Espaguete de abobrinha e cogumelos",
    description: "opção low carb com espaguete de abobrinha e cogumelos salteados",
    calories: "320 kcal",
    image: "/marmita6.png",
    inStock: true,
  },
] as const;

type Meal = (typeof meals)[number];
type CartItem = Meal & { qty: number };

export default function MenuCarousel() {
  const perView = 3;

  const maxIndex = useMemo(() => Math.max(0, meals.length - perView), [perView]);
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));

  useEffect(() => {
    const t = setInterval(next, 3500);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxIndex]);

  // --- Carrinho ---
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (meal: Meal) => {
    if (!meal.inStock) return;

    setCart((prev) => {
      const found = prev.find((i) => i.id === meal.id);
      if (found) return prev.map((i) => (i.id === meal.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { ...meal, qty: 1 }];
    });

    setIsCartOpen(true);
  };

  const decQty = (id: number) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const incQty = (id: number) => {
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  };

  const removeItem = (id: number) => setCart((prev) => prev.filter((i) => i.id !== id));
  const clearCart = () => setCart([]);

  const cartCount = useMemo(() => cart.reduce((acc, i) => acc + i.qty, 0), [cart]);

  return (
    <section id="meals" className="py-20 md:py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-14 space-y-3">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
            Algumas opções do nosso Menu
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Refeições cuidadosamente elaboradas para impulsionar seu desempenho.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex -mx-3"
              animate={{ x: `-${index * (100 / perView)}%` }}
              transition={{ type: "spring", stiffness: 160, damping: 22 }}
            >
              {meals.map((meal) => (
                <div key={meal.id} className="basis-1/3 shrink-0 px-3">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 hover:shadow-md transition-shadow">
                    <div className="relative h-72 md:h-80 bg-gray-100 overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={meal.image}
                        alt={meal.name}
                        loading="lazy"
                      />

                      {!meal.inStock && (
                        <span className="absolute top-3 left-3 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white">
                          Esgotado
                        </span>
                      )}
                    </div>

                    <div className="p-6 space-y-3">
                      <h3 className="text-xl md:text-2xl font-light text-gray-900">{meal.name}</h3>
                      <p className="text-gray-600 font-light leading-relaxed">{meal.description}</p>
                      <p className="text-sm text-gray-500 font-light">{meal.calories}</p>

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart(meal);
                  }}
                  disabled={!meal.inStock}
                  className={[
                    "w-full mt-2 px-6 py-3 border font-light transition-all duration-300 flex items-center justify-center gap-2",
                    meal.inStock
                      ? "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                      : "border-gray-300 text-gray-400 cursor-not-allowed opacity-60",
                  ].join(" ")}
                >
                  <PlusIcon className="w-4 h-4" />
                  {meal.inStock ? "Adicionar" : "Indisponível"}
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

      {/* Botão flutuante do carrinho */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-gray-900 text-white px-5 py-3 shadow-lg hover:opacity-90"
        aria-label="Open cart"
      >
        <ShoppingCart className="w-5 h-5" />
        <span className="text-sm font-light">Carrinho</span>
        {cartCount > 0 && (
          <span className="ml-1 inline-flex items-center justify-center h-6 min-w-6 px-2 rounded-full bg-white text-gray-900 text-xs font-medium">
            {cartCount}
          </span>
        )}
      </button>

      {/* Drawer do carrinho */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40"
              onClick={() => setIsCartOpen(false)}
            />

            <motion.aside
              initial={{ x: 420 }}
              animate={{ x: 0 }}
              exit={{ x: 420 }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 border-b flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-gray-900" />
                  <h3 className="text-lg font-light text-gray-900">Seu carrinho</h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-auto p-5 space-y-4">
                {cart.length === 0 ? (
                  <p className="text-gray-600 font-light">Carrinho vazio.</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex gap-4 border rounded-2xl p-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-xl object-cover bg-gray-100"
                        loading="lazy"
                      />

                      <div className="flex-1">
                        <p className="text-gray-900 font-light leading-snug">{item.name}</p>
                        <p className="text-sm text-gray-500 font-light mt-1">{item.calories}</p>

                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => decQty(item.id)}
                              className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-50"
                              aria-label="Decrease qty"
                            >
                              <Minus className="w-4 h-4" />
                            </button>

                            <span className="w-8 text-center text-gray-900 font-light">
                              {item.qty}
                            </span>

                            <button
                              onClick={() => incQty(item.id)}
                              className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-50"
                              aria-label="Increase qty"
                            >
                              <PlusIcon className="w-4 h-4" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 rounded-full hover:bg-gray-100"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4 text-gray-700" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="p-5 border-t space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 font-light">Itens</span>
                  <span className="text-gray-900 font-light">{cartCount}</span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={clearCart}
                    disabled={cart.length === 0}
                    className="w-1/3 px-4 py-3 border rounded-xl font-light text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    Limpar
                  </button>

                  <button
                    disabled={cart.length === 0}
                    className="w-2/3 px-4 py-3 rounded-xl font-light bg-gray-900 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
                  >
                    Finalizar pedido
                  </button>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
