import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Watch, Award, Shield, Clock } from 'lucide-react';

export function Craftsmanship() {
  const features = [
    {
      icon: Watch,
      title: 'Precision Movement',
      description: 'Swiss-grade automatic movements engineered for accuracy and reliability.',
    },
    {
      icon: Award,
      title: 'Premium Materials',
      description: '316L stainless steel, sapphire crystal, and hand-selected leather straps.',
    },
    {
      icon: Shield,
      title: '5-Year Warranty',
      description: 'Comprehensive warranty covering all manufacturing defects and movement issues.',
    },
    {
      icon: Clock,
      title: 'Quality Tested',
      description: 'Every watch undergoes rigorous testing before leaving our workshop.',
    },
  ];

  const processes = [
    {
      step: '01',
      title: 'Design',
      description: 'Clean, minimal design philosophy. Every element serves a purpose. No excess, only essentials.',
      image: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaGVzfGVufDF8fHx8MTc3NzUzODM3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      step: '02',
      title: 'Materials',
      description: 'Premium grade materials sourced from trusted suppliers. Stainless steel, sapphire crystal, genuine leather.',
      image: 'https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjB3YXRjaGVzfGVufDF8fHx8MTc3NzUzODM3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      step: '03',
      title: 'Assembly',
      description: 'Precision assembly of movement and case components. Each watch built to exacting standards.',
      image: 'https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjB3YXRjaGVzfGVufDF8fHx8MTc3NzUzODM3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Rigorous quality control. Water resistance, accuracy, durability. Only the best make it to your wrist.',
      image: 'https://images.unsplash.com/photo-1730757679771-b53e798846cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxsdXh1cnklMjB3YXRjaGVzfGVufDF8fHx8MTc3NzUzODM3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1618215649872-6e3143a716ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8bHV4dXJ5JTIwd2F0Y2hlc3xlbnwxfHx8fDE3Nzc1MzgzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 sm:p-12 max-w-3xl mx-auto shadow-2xl">
            <h1 className="font-serif text-5xl sm:text-6xl mb-4">Craftsmanship</h1>
            <p className="text-lg sm:text-xl">
              Precision engineering meets modern design
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl mb-4">Our Commitment to Excellence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every detail matters in the pursuit of perfection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group text-center p-8 bg-white/40 backdrop-blur-sm border border-gray-200/50 rounded-2xl hover:bg-white/80 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="bg-white/60 backdrop-blur-md border border-white/40 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:bg-white transition-all duration-500">
                    <Icon className="w-10 h-10 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl mb-3 group-hover:text-black transition-colors duration-500">{feature.title}</h3>
                  <p className="text-gray-600 group-hover:text-black transition-colors duration-500">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl mb-4">The Art of Creation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From concept to completion, every step is a testament to our dedication
            </p>
          </div>

          <div className="space-y-24">
            {processes.map((process, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
                    <ImageWithFallback
                      src={process.image}
                      alt={process.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl px-6 py-3">
                      <span className="font-serif text-4xl text-white">{process.step}</span>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-white/40 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
                    <h3 className="font-serif text-3xl mb-4">{process.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl sm:text-5xl mb-6">Experience JKola.Co</h2>
          <p className="text-gray-700 text-lg mb-8">
            Visit a boutique to see our watches in person and find the one that defines you.
          </p>
          <button className="bg-white/60 backdrop-blur-md border-2 border-black/20 px-8 py-3 hover:bg-black hover:text-white hover:border-black transition-all shadow-lg rounded-lg text-lg">
            Visit a Boutique
          </button>
        </div>
      </section>
    </>
  );
}
