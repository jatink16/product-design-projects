import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Heritage() {
  const timeline = [
    { year: '2020', event: 'The Vision', description: 'JKola.Co was founded with a simple mission: create watches for passionate people.' },
    { year: '2021', event: 'First Collection', description: 'Launch of the Elegance Black, our signature minimal timepiece.' },
    { year: '2023', event: 'Global Expansion', description: 'Opening boutiques in major cities worldwide.' },
    { year: '2024', event: 'Signature Edition', description: 'Introduction of our limited edition collection for discerning collectors.' },
    { year: '2025', event: 'Innovation Award', description: 'Recognized for design excellence and precision engineering.' },
    { year: '2026', event: 'Community of 50K', description: 'Growing community of passionate individuals living every second.' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1618215649872-6e3143a716ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8bHV4dXJ5JTIwd2F0Y2hlc3xlbnwxfHx8fDE3Nzc1MzgzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Heritage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 sm:p-12 shadow-2xl">
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl mb-6">About JKola.Co</h1>
            <p className="text-lg sm:text-xl">
              Precision, design, and presence
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl sm:text-5xl mb-8">Our Philosophy</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              JKola.Co was created for those who value precision, design, and presence. We believe that time
              is not just measured—it's expressed through every second you live.
            </p>
            <p>
              Our watches are crafted for passionate people who understand that a timepiece is more than an
              accessory. It's a statement of who you are and what you stand for.
            </p>
            <p>
              Every JKola.Co watch combines modern minimalism with uncompromising quality. Clean lines,
              premium materials, and precision engineering define our approach.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl sm:text-5xl text-center mb-16">Our Journey</h2>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-20 border-l-2 border-black/20 pb-8 last:pb-0"
              >
                <div className="absolute left-0 -translate-x-1/2 w-4 h-4 bg-black rounded-full shadow-lg"></div>

                <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-3">
                    <span className="font-serif text-3xl">{item.year}</span>
                    <div className="hidden md:block w-px h-8 bg-gray-300"></div>
                    <h3 className="text-2xl">{item.event}</h3>
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Image Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaGVzfGVufDF8fHx8MTc3NzUzODM3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Watchmaking"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjB3YXRjaGVzfGVufDF8fHx8MTc3NzUzODM3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Swiss precision"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
