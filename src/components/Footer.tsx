import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-3xl font-light text-gray-900 tracking-tight">
              UNIFIT
            </h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Smart nutrition for your lifestyle. Fresh, balanced meals delivered to your door.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-light text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 font-light hover:text-gray-900 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 font-light hover:text-gray-900 transition-colors">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 font-light hover:text-gray-900 transition-colors">
                  Plans & Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 font-light hover:text-gray-900 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-light text-gray-900 mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 font-light hover:text-gray-900 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 font-light hover:text-gray-900 transition-colors">
                  Delivery Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 font-light hover:text-gray-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 font-light hover:text-gray-900 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-light text-gray-900 mb-4">Stay Connected</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 font-light text-sm">
            &copy; 2024 UNIFIT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
