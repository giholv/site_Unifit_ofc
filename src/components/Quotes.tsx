const benefits = [
  {
    title: "01. Técnicas avançadas",
    text: "Usamos técnicas de congelamento/preparo para manter sabor e textura, sem “comida aguada”.",
  },
  {
    title: "02. Embalagens",
    text: "Embalagens resistentes ao calor e próprias para alimentos (livres de BPA, quando aplicável).",
  },
];

const menu = [
  { title: "01. Dia a dia", text: "Refeições práticas, equilibradas e gostosas pra facilitar sua rotina." },
  { title: "02. Low carb", text: "Opções com baixo teor de carboidratos e alto sabor, ideais pra controle de peso." },
  { title: "03. Saúde e bem-estar", text: "Preparações leves e nutritivas, ricas em vitaminas e fibras." },
  { title: "04. Ganho de massa", text: "Mais proteína e energia: focado em performance, força e recuperação." },
];

const sizes = [{ label: "P - 250g" }, { label: "M - 370g" }, { label: "G - 500g" }];

export default function BenefitsMenuSizesV2() {
  return (
    <section className="py-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* BENEFÍCIOS */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10">
            <div className="inline-flex px-6 py-3 rounded-xl bg-[#C89B7B] text-white text-sm tracking-widest">
              BENEFÍCIOS
            </div>

            <p className="mt-6 text-gray-600 font-light leading-relaxed">
              Proporcionamos uma alimentação rápida, prática e 100% saudável com excelente qualidade nutricional.
            </p>

            <div className="mt-8 space-y-7">
              {benefits.map((b) => (
                <div key={b.title}>
                  <h4 className="text-gray-900 font-light tracking-wide">{b.title.toUpperCase()}</h4>
                  <p className="mt-2 text-gray-600 font-light leading-relaxed text-sm">{b.text}</p>
                </div>
              ))}
            </div>

            {/* IMAGEM estilo "hero" + bolinha branca */}
            <div className="mt-10 relative h-56 rounded-2xl overflow-hidden">
              <img
                src="/beneficios.png"
                alt="Ingredientes frescos"
                className="absolute inset-0 w-full h-full object-cover scale-[1.1]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

              {/* bolinha branca (igual do hero) */}
              <div className="absolute right-6 bottom-6 w-16 h-16 rounded-full bg-white/95 shadow-lg" />
            </div>
          </div>

          {/* CARDÁPIO */}
          <div className="bg-[#F4F0EC] border border-gray-200 rounded-2xl p-10">
            <div className="inline-flex px-6 py-3 rounded-xl bg-[#2F5A60] text-white text-sm tracking-widest">
              MENU
            </div>

            <p className="mt-6 text-gray-700 font-light leading-relaxed">
              Oferecemos uma alimentação cuidadosamente elaborada para apoiar você em qualquer objetivo nutricional.
            </p>

            <div className="mt-8 space-y-7">
              {menu.map((m) => (
                <div key={m.title}>
                  <h4 className="text-gray-900 font-light tracking-wide">{m.title.toUpperCase()}</h4>
                  <p className="mt-2 text-gray-700 font-light leading-relaxed text-sm">{m.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TAMANHOS */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            {/* IMAGEM sem borda cinza + estilo hero */}
            <div className="relative h-80 md:h-96 overflow-hidden">
              <img
                src="/marmita-banner.png"
                alt="Marmitas UNIFIT"
                className="absolute inset-0 w-full h-full object-cover scale-[1.08]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

              <div className="absolute left-0 top-0 w-24 h-24 bg-white rounded-br-[42px]" />
              <div className="absolute right-6 bottom-6 w-16 h-16 rounded-full bg-[#2F5A60] shadow-lg" />
            </div>

            <div className="p-10">
              <div className="inline-flex px-6 py-3 rounded-xl bg-[#C89B7B] text-white text-sm tracking-widest">
                TAMANHOS
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                {sizes.map((s, idx) => (
                  <button
                    key={s.label}
                    className={[
                      "px-6 py-2.5 rounded-lg text-sm font-light border transition",
                      idx === 0
                        ? "bg-[#2F5A60] text-white border-transparent"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50",
                    ].join(" ")}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              <p className="mt-6 text-gray-600 font-light leading-relaxed text-sm">
                Aproveite uma seleção especial de pratos preparados com ingredientes frescos e cuidadosamente escolhidos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
