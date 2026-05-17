import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Collections() {
  const collections = [
    {
      name: 'Elegance Black',
      tagline: 'Minimal. Powerful.',
      description: 'The Elegance Black embodies modern minimalism with its clean dial and precision movement. Perfect for those who appreciate understated luxury.',
      image: 'https://images.unsplash.com/photo-1600003014608-c2ccc1570a65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjB3YXRjaGVzfGVufDF8fHx8MTc3NzUzODM3NHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Automatic Movement', 'Sapphire Crystal', '50m Water Resistance', 'Stainless Steel'],
    },
    {
      name: 'Prestige Gold',
      tagline: 'Bold. Confident.',
      description: 'Make a statement with Prestige Gold. Its refined gold accents and premium finish reflect success and sophistication.',
      image: 'https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjB3YXRjaGVzfGVufDF8fHx8MTc3NzUzODM3NHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Swiss Movement', 'Gold-Plated Details', '100m Water Resistance', 'Premium Leather'],
    },
    {
      name: 'Sport Blue',
      tagline: 'Active. Precise.',
      description: 'Built for movement. The Sport Blue combines durability with elegance, perfect for the active professional.',
      image: 'https://images.unsplash.com/photo-1730757679771-b53e798846cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxsdXh1cnklMjB3YXRjaGVzfGVufDF8fHx8MTc3NzUzODM3NHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Chronograph Function', 'Scratch Resistant', '200m Water Resistance', 'Sport Strap'],
    },
    {
      name: 'Signature Edition',
      tagline: 'Exclusive. Limited.',
      description: 'For the discerning few. Each Signature Edition is numbered and crafted with uncompromising attention to detail.',
      image: 'https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjB3YXRjaGVzfGVufDF8fHx8MTc3NzUzODM3NHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: ['Premium Movement', 'Hand-Finished', 'Sapphire Back', 'Limited to 500'],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1635462684825-3621c1df5403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxsdXh1cnklMjB3YXRjaGVzfGVufDF8fHx8MTc3NzUzODM3NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Watch collections"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 sm:p-12 max-w-3xl mx-auto shadow-2xl">
            <h1 className="font-serif text-5xl sm:text-6xl mb-4">The Collection</h1>
            <p className="text-lg sm:text-xl">
              Precision meets passion
            </p>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-32">
          {collections.map((collection, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                  <ImageWithFallback
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="bg-white/40 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg">
                  <p className="text-sm uppercase tracking-widest text-gray-600 mb-2">
                    {collection.tagline}
                  </p>
                  <h2 className="font-serif text-4xl mb-6">{collection.name}</h2>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    {collection.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {collection.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="bg-white/60 backdrop-blur-md border-2 border-black/20 px-8 py-3 hover:bg-black hover:text-white hover:border-black transition-all shadow-lg rounded-lg">
                    View Collection
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
