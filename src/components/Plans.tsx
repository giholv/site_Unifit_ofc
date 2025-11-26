import { Check } from 'lucide-react';

const plans = [
  {
    id: 1,
    name: 'Weekly Plan',
    price: '$89',
    period: 'per week',
    features: [
      '7 daily meals',
      'Flexible delivery',
      'Customizable menu',
      'Nutritional guidance',
      'Cancel anytime',
    ],
  },
  {
    id: 2,
    name: 'Biweekly Plan',
    price: '$169',
    period: 'per 2 weeks',
    features: [
      '14 daily meals',
      'Priority delivery',
      'Customizable menu',
      'Nutritional guidance',
      'Exclusive recipes',
      'Save 5%',
    ],
    featured: true,
  },
  {
    id: 3,
    name: 'Monthly Plan',
    price: '$319',
    period: 'per month',
    features: [
      '30 daily meals',
      'Priority delivery',
      'Full menu access',
      'Personal nutrition coach',
      'Exclusive recipes',
      'Save 10%',
    ],
  },
];

export default function Plans() {
  return (
    <section id="plans" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl font-light text-gray-900 tracking-tight">
            UNIFIT Plans
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Choose the plan that fits your lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white border rounded-sm p-10 space-y-8 hover:shadow-xl transition-all duration-300 ${
                plan.featured
                  ? 'border-gray-900 shadow-lg scale-105'
                  : 'border-gray-200'
              }`}
            >
              <div className="space-y-2">
                <h3 className="text-2xl font-light text-gray-900">
                  {plan.name}
                </h3>
                {plan.featured && (
                  <span className="inline-block px-3 py-1 text-xs font-light bg-gray-900 text-white rounded-full">
                    MOST POPULAR
                  </span>
                )}
              </div>

              <div className="space-y-1">
                <p className="text-5xl font-light text-gray-900">{plan.price}</p>
                <p className="text-sm text-gray-500 font-light">{plan.period}</p>
              </div>

              <ul className="space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full px-6 py-4 font-light text-lg transition-all duration-300 ${
                  plan.featured
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
