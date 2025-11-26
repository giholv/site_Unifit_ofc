export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h2 className="text-5xl font-light text-gray-900 tracking-tight">
            About UNIFIT
          </h2>

          <div className="space-y-6 text-lg text-gray-700 font-light leading-relaxed">
            <p>
              At UNIFIT, we believe proper nutrition is the foundation of a healthy,
              active lifestyle. Our mission is to deliver practical meal solutions that
              fuel your body with what it needs to perform at its best.
            </p>
            <p>
              Every meal is crafted with fresh, high-quality ingredients, designed to
              support your goals and your routine. We blend nutritional science with
              real flavor—food that works and tastes good.
            </p>
            <p>
              Whether you’re training hard or just aiming for balance, our weekly and
              monthly plans fit seamlessly into your week. No prep, no stress—just clean
              nutrition.
            </p>
          </div>
        </div>

        <div className="relative h-[600px] rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center text-white/50 font-light text-lg">
            [About Image Placeholder]
          </div>
        </div>
      </div>
    </section>
  );
}
