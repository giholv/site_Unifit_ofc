export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_440px] lg:gap-14">
          <div className="max-w-2xl space-y-6">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
              Sobre Nós
            </h2>

            <div className="space-y-5 text-base md:text-lg font-light leading-relaxed text-gray-600 text-justify">
              <p>
                Na UNIFIT, acreditamos que uma boa nutrição é a base de uma rotina saudável
                e ativa. Nossa missão é entregar refeições práticas que sustentem seu dia com
                energia e equilíbrio.
              </p>
              <p>
                Cada refeição é feita com ingredientes frescos e de alta qualidade, pensada
                para apoiar seus objetivos sem abrir mão do sabor.
              </p>
              <p>
                Seja para manter o foco nos estudos ou evoluir no treino, nossos planos semanais
                e mensais encaixam na sua rotina: sem stress, sem complicação.
              </p>
            </div>
          </div>

          {/* IMAGEM (menor, sem cara de placeholder) */} 
          <div className="relative lg:justify-self-end w-full max-w-md">
             <div className="rounded-2xl overflow-hidden bg-white shadow-sm ring-1 ring-black/5"> 
             <img src="/about-unifit.jpg" 
             alt="Sobre a UNIFIT"
              className="w-full h-auto object-contain p-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
