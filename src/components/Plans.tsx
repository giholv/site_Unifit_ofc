import { Check } from "lucide-react";

type Plan = {
  name: string;
  price: string;
  period: string;
  badge?: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Plano Semanal",
    price: "R$ 119",
    period: "por semana",
    features: [
      "5 marmitas (seg–sex)",
      "Entrega flexível",
      "Montagem de cardápio",
      "Informação nutricional",
      "Cancele quando quiser",
    ],
    cta: "Começar",
  },
  {
    name: "Plano Quinzenal",
    price: "R$ 219",
    period: "a cada 2 semanas",
    badge: "MAIS POPULAR",
    highlighted: true,
    features: [
      "10 marmitas (2 semanas)",
      "Entrega prioritária",
      "Cardápio personalizável",
      "Informação nutricional",
      "Receitas exclusivas",
      "Economize 5%",
    ],
    cta: "Começar",
  },
  {
    name: "Plano Mensal",
    price: "R$ 399",
    period: "por mês",
    features: [
      "20 marmitas (mês)",
      "Entrega prioritária",
      "Acesso completo ao cardápio",
      "Suporte nutricional (guia)",
      "Receitas exclusivas",
      "Economize 10%",
    ],
    cta: "Começar",
  },
];

export default function PricingPlans() {
  return (
    <section id="plans" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900">
            Planos
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-light">
            Escolha o plano ideal pra sua rotina.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={[
                "relative rounded-2xl border bg-white shadow-sm",
                plan.highlighted
                  ? "border-gray-900 shadow-xl"
                  : "border-gray-200",
              ].join(" ")}
            >
              <div className="p-8 md:p-10">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-light text-gray-900">
                    {plan.name}
                  </h3>

                  {plan.badge && (
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-xs tracking-wide bg-gray-900 text-white">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="mt-10">
                  <div className="text-5xl md:text-6xl font-light text-gray-900">
                    {plan.price}
                  </div>
                  <div className="mt-2 text-sm text-gray-500">{plan.period}</div>
                </div>

                <ul className="mt-10 space-y-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-3 text-gray-700">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-300">
                        <Check className="h-3.5 w-3.5 text-gray-900" />
                      </span>
                      <span className="font-light">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={[
                    "mt-10 w-full rounded-xl px-6 py-4 text-base transition",
                    plan.highlighted
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "border border-gray-300 text-gray-900 hover:bg-gray-50",
                  ].join(" ")}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          * Valores e benefícios podem variar conforme campus/região.
        </p>
      </div>
    </section>
  );
}
