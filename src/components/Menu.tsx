import { Plus } from 'lucide-react';

const meals = [
  {
    id: 1,
    name: 'Grilled Chicken with Brown Rice',
    description: 'Lean protein with complex carbs and steamed vegetables',
    calories: '480 kcal',
  },
  {
    id: 2,
    name: 'Salmon & Quinoa Bowl',
    description: 'Omega-3 rich salmon with superfood quinoa and greens',
    calories: '520 kcal',
  },
  {
    id: 3,
    name: 'Turkey Meatballs & Sweet Potato',
    description: 'High-protein meatballs with roasted sweet potato wedges',
    calories: '450 kcal',
  },
  {
    id: 4,
    name: 'Beef Stir-Fry with Vegetables',
    description: 'Grass-fed beef with colorful mixed vegetables',
    calories: '510 kcal',
  },
  {
    id: 5,
    name: 'Mediterranean Chicken Plate',
    description: 'Herb-marinated chicken with hummus and fresh veggies',
    calories: '465 kcal',
  },
  {
    id: 6,
    name: 'Shrimp & Cauliflower Rice',
    description: 'Low-carb option with succulent shrimp and seasoned cauliflower',
    calories: '380 kcal',
  },
];

export default function Menu() {
  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl font-light text-gray-900 tracking-tight">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Carefully crafted meals designed to fuel your performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {meals.map((meal) => (
            <div
              key={meal.id}
              className="bg-white rounded-sm overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-80 bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-light">
                  [Meal Photo]
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-light text-gray-900">
                  {meal.name}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {meal.description}
                </p>
                <p className="text-sm text-gray-500 font-light">
                  {meal.calories}
                </p>
                <button className="w-full mt-4 px-6 py-3 border border-gray-900 text-gray-900 font-light hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group">
                  <Plus className="w-4 h-4" />
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
