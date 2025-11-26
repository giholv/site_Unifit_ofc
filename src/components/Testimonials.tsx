import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Giovanna Pires",
    role: "Estudante de Data Science",
    content:
      "A UNIFIT salvou minha rotina. Agora eu como bem todos os dias sem perder tempo e sem gastar mais do que posso.",
    image: "/giovanna-pires.png",
  },
  {
    id: 2,
    name: "Gustavo Ursino",
    role: "Engenharia da Computação",
    content:
      "As marmitas proteicas melhoraram meu desempenho no treino e ainda retiro tudo rapidinho dentro da faculdade.",
    image: "/gustavo-ursino.png",
  },
  {
    id: 3,
    name: "Ana Paula Ribeiro",
    role: "Estágio + Faculdade",
    content:
      "Eu vivia no improviso. Com a UNIFIT, minha alimentação ficou organizada e eu tenho mais disposição no dia a dia.",
    image: "/julia-ribeiro.png",
  },
  {
    id: 4,
    name: "Gabriel Almeida",
    role: "Aluno e Atleta Amador",
    content:
      "Comida gostosa, porção certa e muito prática. Melhorou minha energia e minha recuperação pós-treino.",
    image: "/gabriel-santos.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl font-light text-gray-900 tracking-tight">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Resultados reais de pessoas reais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-10 rounded-sm space-y-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 text-gray-900">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="text-lg text-gray-700 font-light leading-relaxed italic">
                “{t.content}”
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div>
                  <p className="text-gray-900 font-light text-lg">{t.name}</p>
                  <p className="text-gray-500 font-light text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
