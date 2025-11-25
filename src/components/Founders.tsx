const founders = [
  {
    id: 1,
    name: 'Alexandra Reed',
    role: 'Co-Founder & Nutrition Specialist',
    bio: 'With 10 years of experience in sports nutrition, Alexandra is passionate about making healthy eating accessible and delicious for everyone.',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Co-Founder & Executive Chef',
    bio: 'A classically trained chef with a focus on clean, wholesome ingredients, Marcus brings culinary excellence to every UNIFIT meal.',
  },
  {
    id: 3,
    name: 'Dr. Emily Santos',
    role: 'Head of Nutrition Science',
    bio: 'Dr. Santos holds a PhD in nutritional biochemistry and ensures every meal is scientifically optimized for peak performance and wellness.',
  },
];

export default function Founders() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-5xl font-light text-gray-900 tracking-tight">
            Meet the Founders
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            The passionate team behind UNIFIT, dedicated to revolutionizing how you think about healthy eating
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-20">
          {founders.map((founder) => (
            <div
              key={founder.id}
              className="text-center space-y-6 group"
            >
              <div className="w-48 h-48 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-light overflow-hidden group-hover:scale-105 transition-transform duration-300">
                [Photo]
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-light text-gray-900">
                  {founder.name}
                </h3>
                <p className="text-sm text-gray-500 font-light uppercase tracking-wider">
                  {founder.role}
                </p>
              </div>
              <p className="text-gray-600 font-light leading-relaxed">
                {founder.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
