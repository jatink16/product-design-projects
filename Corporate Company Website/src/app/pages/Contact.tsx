import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  const boutiques = [
    {
      city: 'New York',
      country: 'United States',
      address: 'SoHo, Manhattan, NY 10013',
      phone: '+1 212 555 0100',
      email: 'ny@jkola.co',
      hours: 'Mon-Sat: 10:00 - 19:00',
    },
    {
      city: 'Los Angeles',
      country: 'United States',
      address: 'Melrose Avenue, LA 90046',
      phone: '+1 310 555 0200',
      email: 'la@jkola.co',
      hours: 'Mon-Sat: 10:00 - 19:00',
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: 'Mayfair, London W1K 5SA',
      phone: '+44 20 1234 5678',
      email: 'london@jkola.co',
      hours: 'Mon-Sat: 10:00 - 18:00',
    },
    {
      city: 'Dubai',
      country: 'UAE',
      address: 'Dubai Mall, Downtown',
      phone: '+971 4 123 4567',
      email: 'dubai@jkola.co',
      hours: 'Daily: 10:00 - 22:00',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl sm:text-6xl mb-6">Contact Us</h1>
          <p className="text-gray-700 text-lg mb-12">
            Visit a boutique or reach out. We're here to help you find your perfect watch.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
            <h2 className="font-serif text-3xl mb-8 text-center">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-gray-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-gray-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-gray-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                  placeholder="john.smith@example.com"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-gray-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Subject</label>
                <select className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-gray-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 transition-all">
                  <option>General Inquiry</option>
                  <option>Product Information</option>
                  <option>Service & Repair</option>
                  <option>Boutique Visit</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-gray-300/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 transition-all resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white px-8 py-4 hover:bg-gray-800 transition-all rounded-lg shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Boutiques */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl mb-4">Our Boutiques</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit us in person to experience our collections and receive personalized service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boutiques.map((boutique, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="font-serif text-2xl mb-1">{boutique.city}</h3>
                <p className="text-gray-600 text-sm mb-6">{boutique.country}</p>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0 text-gray-600" />
                    <p className="text-sm text-gray-700">{boutique.address}</p>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0 text-gray-600" />
                    <p className="text-sm text-gray-700">{boutique.phone}</p>
                  </div>

                  <div className="flex gap-3">
                    <Mail className="w-5 h-5 flex-shrink-0 text-gray-600" />
                    <p className="text-sm text-gray-700">{boutique.email}</p>
                  </div>

                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 flex-shrink-0 text-gray-600" />
                    <p className="text-sm text-gray-700">{boutique.hours}</p>
                  </div>
                </div>

                <button className="w-full mt-6 bg-white/60 backdrop-blur-md border-2 border-black/20 px-4 py-2 hover:bg-black hover:text-white hover:border-black transition-all shadow-lg rounded-lg">
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/40 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Customer Service</h3>
              <p className="text-gray-600 mb-2">+1 (800) 555-5565</p>
              <p className="text-sm text-gray-500">Mon-Fri: 9:00 - 18:00 EST</p>
            </div>

            <div className="bg-white/40 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">hello@jkola.co</p>
              <p className="text-sm text-gray-500">24 hour response time</p>
            </div>

            <div className="bg-white/40 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Service & Care</h3>
              <p className="text-gray-600 mb-2">care@jkola.co</p>
              <p className="text-sm text-gray-500">Expert watch maintenance</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
