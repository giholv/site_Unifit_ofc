export default function About() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h2 className="text-5xl font-light text-gray-900 tracking-tight">
            About UNIFIT
          </h2>
          <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
            <p>
              At UNIFIT, we believe that proper nutrition is the foundation of a healthy,
              active lifestyle. Our mission is to provide health-driven meal solutions that
              fuel your body with the nutrients it needs to perform at its best.
            </p>
            <p>
              Every meal is crafted from fresh, high-quality ingredients, designed to support
              your fitness goals and busy schedule. We combine nutritional science with
              culinary excellence to deliver meals that are both delicious and functional.
            </p>
            <p>
              Whether you're training for a competition or simply maintaining a balanced
              lifestyle, our weekly and monthly meal plans offer practical solutions that
              fit seamlessly into your routine. No prep, no stress—just pure, clean nutrition.
            </p>
          </div>
        </div>

        <div className="relative h-[600px] bg-gray-100 rounded-sm overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-light text-lg">
            [About Image Placeholder]
          </div>
        </div>
      </div>
    </section>
  );
}
