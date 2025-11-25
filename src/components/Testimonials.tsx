const testimonials = [
  {
    id: 1,
    name: 'Sarah Martinez',
    role: 'Personal Trainer',
    content:
      'UNIFIT has completely transformed how I fuel my body. The meals are delicious, perfectly portioned, and save me hours every week. My performance has never been better.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marathon Runner',
    content:
      'As an athlete with a demanding schedule, UNIFIT is a game-changer. Fresh, balanced meals delivered right to my door. The quality is outstanding and the results speak for themselves.',
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'Yoga Instructor',
    content:
      'I love that UNIFIT takes the guesswork out of healthy eating. Every meal is thoughtfully prepared with fresh ingredients. It has made maintaining my wellness routine so much easier.',
  },
  {
    id: 4,
    name: 'David Rodriguez',
    role: 'Fitness Enthusiast',
    content:
      'The convenience and quality of UNIFIT meals are unmatched. I have more energy, better recovery, and I actually look forward to every meal. Highly recommend to anyone serious about their health.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl font-light text-gray-900 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Real results from real people
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-10 rounded-sm space-y-6 hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-lg text-gray-700 font-light leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-light text-sm">
                  [Photo]
                </div>
                <div>
                  <p className="text-gray-900 font-light text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 font-light text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
