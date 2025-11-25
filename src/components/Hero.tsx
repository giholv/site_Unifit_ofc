import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white px-6 py-20">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h1 className="text-6xl lg:text-7xl font-light tracking-tight text-gray-900">
            UNIFIT
          </h1>
          <h2 className="text-3xl lg:text-4xl font-light text-gray-800 leading-tight">
            Smart Nutrition for Your Lifestyle
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Fresh, balanced fitness meals ready for your day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-4 bg-gray-900 text-white font-light text-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2 group">
              View Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-light text-lg hover:bg-gray-50 transition-colors duration-300">
              Subscribe to Weekly Plan
            </button>
          </div>
        </div>

        <div className="relative h-[500px] lg:h-[600px] bg-gray-100 rounded-sm overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-light text-lg">
            [Hero Image Placeholder]
          </div>
        </div>
      </div>
    </section>
  );
}
