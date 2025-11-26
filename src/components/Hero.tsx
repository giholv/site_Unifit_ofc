import React from "react";
import { ArrowRight } from "lucide-react";

const stats = [
  { label: "Refeições servidas", value: "15k+" },
  { label: "Campus atendidos", value: "8+" },
  { label: "Avaliação média", value: "4.9 ★" },
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
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
              <div className="space-y-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex justify-between items-center">
                    <span className="text-white/85">{stat.label}</span>
                    <span className="font-bold text-white">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ONDA */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
