import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl font-light text-gray-900 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Have questions? We'd love to hear from you.
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
                  Name
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
                  Phone
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
                  Message
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
                Send Message
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
                  <p className="font-light text-gray-900 text-lg mb-1">Phone</p>
                  <p className="text-gray-600 font-light">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gray-900 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-light text-gray-900 text-lg mb-1">Location</p>
                  <p className="text-gray-600 font-light">
                    123 Fitness Street<br />
                    San Francisco, CA 94102<br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className="h-80 bg-gray-100 rounded-sm flex items-center justify-center text-gray-400 font-light">
              [Map Placeholder]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
