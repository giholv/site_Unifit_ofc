import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl font-light text-gray-900 tracking-tight">
            Entre em contato

          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Tem alguma dúvida? Adoraríamos ouvi-la.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-light text-gray-700 mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-900 transition-colors font-light"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-light text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-900 transition-colors font-light"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-light text-gray-700 mb-2"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-900 transition-colors font-light"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-light text-gray-700 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-900 transition-colors font-light resize-none"
                  placeholder="Tell us about your goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gray-900 text-white font-light text-lg hover:bg-gray-800 transition-colors duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-gray-900 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-light text-gray-900 text-lg mb-1">Email</p>
                  <p className="text-gray-600 font-light">hello@unifit.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-gray-900 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-light text-gray-900 text-lg mb-1">Telefone</p>
                  <p className="text-gray-600 font-light">+55 (11) 4002-8922</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gray-900 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-light text-gray-900 text-lg mb-1">Localização</p>
                  <p className="text-gray-600 font-light">
                    Av. Dr. Adolpho Pinto, 109 <br />
                    Barra Funda, São Paulo - SP <br />
                    Brasil
                  </p>
                </div>
              </div>
            </div>
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <img
                  src="/mapa.png"
                  alt="Mapa de entrega/retirada"
                  className="absolute inset-0 w-full h-full object-cover scale-[1.05]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                <div className="absolute left-0 top-0 w-24 h-24 bg-white rounded-br-[42px]" />
                <div className="absolute right-6 bottom-6 w-16 h-16 rounded-full bg-white/95 shadow-lg" />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
