import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Refeições Servidas", value: "15k+" },
  { label: "Campus Atendidos", value: "8+" },
  { label: "Avaliação Média", value: "4.9 ★" },
  { label: "Pratos no menu", value: "40+" },
];

const Hero: React.FC = () => {
  const handleExploreClick = () => {
    const element = document.getElementById("marmita-carousel"); // seu id real
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* FUNDO: imagem no HERO inteiro + overlay igual ao exemplo */}
      <div className="absolute inset-0 z-0">
        {/* overlay cinza (pode ajustar opacidade) */}
        <div className="absolute inset-0 bg-[#6f7882] opacity-80" />
        {/* imagem de fundo */}
        <img
          src="/hero-unifit.jpg"
          alt="Marmitas UNIFIT"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTEÚDO */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 md:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* TEXTO */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="block">Energia para</span>
              <span className="block mt-2">seus estudos</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/85 max-w-lg">
              Nutrição prática para o seu dia a dia universitário.
            </p>

            <div className="flex">
              <button
                onClick={handleExploreClick}
                className="bg-[#417078] hover:bg-[#2e4f54] text-white font-semibold py-3 px-6 rounded-md transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Explore o Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          {/* CARD STATS */}
          {/* CARD STATS (menor + animado) */}
      <div className="hidden md:flex justify-end">
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ y: -6 }}
          className="w-full max-w-md bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20"
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
            }}
            className="space-y-3"
          >
            {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={{
                      hidden: { opacity: 0, x: 12 },
                      show: { opacity: 1, x: 0 },
                    }}
                    className="flex justify-between items-center"
                  >
                    <span className="text-white/85 text-[20px]">{stat.label}</span>
                    <span className="font-semibold text-white text-[20px]">{stat.value}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>


      {/* Onda */}
      <div className="absolute -bottom-1 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 120" className="w-full h-28 md:h-32" preserveAspectRatio="none">
          <path
            fill="#f9fafb"
            d="M0,64 C240,120 480,8 720,40 C960,72 1200,120 1440,64 L1440,120 L0,120 Z"
          />
        </svg>
      </div>

    </section>
  );
};

export default Hero;


