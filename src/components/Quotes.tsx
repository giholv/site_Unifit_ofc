const quotes = [
  {
    id: 1,
    text: 'Small daily choices create big long-term changes.',
    author: 'Unknown',
  },
  {
    id: 2,
    text: 'Eat for the body you want, not just the moment you\'re in.',
    author: 'Unknown',
  },
  {
    id: 3,
    text: 'Discipline is choosing what you want most over what you want now.',
    author: 'Unknown',
  },
  {
    id: 4,
    text: 'Your body is a reflection of your lifestyle.',
    author: 'Unknown',
  },
  {
    id: 5,
    text: 'Take care of your body. It\'s the only place you have to live.',
    author: 'Jim Rohn',
  },
];

export default function Quotes() {
  return (
    <section className="py-32 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-gray-900 tracking-tight">
            Healthy Inspiration
          </h2>
        </div>

        <div className="space-y-16">
          {quotes.map((quote) => (
            <div
              key={quote.id}
              className="text-center space-y-4 py-8 hover:scale-105 transition-transform duration-300"
            >
              <p className="text-3xl md:text-4xl font-light text-gray-800 leading-relaxed italic">
                "{quote.text}"
              </p>
              <p className="text-gray-500 font-light text-lg">
                — {quote.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
