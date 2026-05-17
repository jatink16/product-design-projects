import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ChevronRight, Droplet, Shield, Battery, Watch as WatchIcon } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useState } from 'react';

export function Home() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotY = ((x - centerX) / centerX) * 20;
    const rotX = ((centerY - y) / centerY) * 20;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const watches = [
    {
      name: 'Elegance Black',
      detail: 'Timeless precision',
      image: 'https://images.unsplash.com/photo-1600003014608-c2ccc1570a65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjB3YXRjaGVzfGVufDF8fHx8MTc3NzUzODM3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Prestige Gold',
      detail: 'Bold statement',
      image: 'https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjB3YXRjaGVzfGVufDF8fHx8MTc3NzUzODM3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Sport Blue',
      detail: 'Active lifestyle',
      image: 'https://images.unsplash.com/photo-1730757679771-b53e798846cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxsdXh1cnklMjB3YXRjaGVzfGVufDF8fHx8MTc3NzUzODM3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const features = [
    { icon: Droplet, title: 'Water Resistant', desc: '50m depth protection' },
    { icon: Shield, title: 'Scratch Proof', desc: 'Sapphire crystal' },
    { icon: Battery, title: 'Long Battery', desc: '5+ years lifespan' },
    { icon: WatchIcon, title: 'Precision Movement', desc: 'Swiss accuracy' },
  ];

  const testimonials = [
    { quote: 'Minimal. Elegant. Exactly what I wanted.', author: 'Michael R.' },
    { quote: 'Feels premium the moment you wear it.', author: 'Sarah K.' },
    { quote: 'Perfect balance of style and function.', author: 'James L.' },
  ];

  const lifestyle = [
    'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaGVzfGVufDF8fHx8MTc3NzUzODM3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjB3YXRjaGVzfGVufDF8fHx8MTc3NzUzODM3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1670404160620-a3a86428560e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjB3YXRjaGVzfGVufDF8fHx8MTc3NzUzODM3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1618215649872-6e3143a716ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8bHV4dXJ5JTIwd2F0Y2hlc3xlbnwxfHx8fDE3Nzc1MzgzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1600003014608-c2ccc1570a65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjB3YXRjaGVzfGVufDF8fHx8MTc3NzUzODM3NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="JKola.Co Watch"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl mb-8 tracking-tight">JKola.Co</h1>
          <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafted for Passionate people for those who want to Live Every Second.
          </p>
          <Link to="/collections">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-10 py-4 text-lg hover:bg-gray-100 transition-all inline-flex items-center gap-2 rounded-full"
            >
              Explore Collection
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>

      {/* 3. SIGNATURE COLLECTION */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-5xl sm:text-6xl mb-4">Signature Collection</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {watches.map((watch, index) => (
              <Link to="/collections" key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group p-6 rounded-2xl transition-all duration-500 hover:bg-gray-50 hover:shadow-2xl"
                >
                  <div className="relative overflow-hidden mb-6 aspect-square bg-gray-100 rounded-xl">
                    <ImageWithFallback
                      src={watch.image}
                      alt={watch.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 border-2 border-black/0 group-hover:border-black/20 rounded-xl transition-all duration-500"></div>
                  </div>
                  <h3 className="text-2xl mb-2 font-light group-hover:text-black transition-colors">{watch.name}</h3>
                  <p className="text-gray-600 group-hover:text-black transition-colors">{watch.detail}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BRAND PHILOSOPHY */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl sm:text-5xl mb-6 leading-tight">
                At JKola.Co, time is not measured.<br />It's expressed.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px]"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1618215649872-6e3143a716ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8bHV4dXJ5JTIwd2F0Y2hlc3xlbnwxfHx8fDE3Nzc1MzgzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Lifestyle"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CRAFTSMANSHIP SECTION */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-5xl sm:text-6xl mb-6">Craftsmanship</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Premium materials meet precision engineering
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Stainless Steel', desc: '316L surgical grade' },
              { title: 'Sapphire Glass', desc: 'Scratch resistant' },
              { title: 'Swiss Movement', desc: 'Precision tested' },
              { title: 'Premium Finish', desc: 'Hand polished' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group text-center p-8 border border-amber-500/20 hover:border-amber-500/60 rounded-2xl hover:bg-white/10 hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-2 h-2 bg-amber-500 rounded-full mx-auto mb-4 group-hover:scale-150 transition-transform duration-500"></div>
                <h3 className="text-xl mb-2 group-hover:text-white transition-colors duration-500">{item.title}</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors duration-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. IMMERSIVE VISUAL SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1670404160620-a3a86428560e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjB3YXRjaGVzfGVufDF8fHx8MTc3NzUzODM3NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Watch detail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 text-center text-white px-4"
        >
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl">
            Built for every second<br />that matters.
          </h2>
        </motion.div>
      </section>

      {/* 7. FEATURE HIGHLIGHTS */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border-2 border-black rounded-full">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE SECTION */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-serif text-4xl sm:text-5xl mb-12"
          >
            Experience the Detail
          </motion.h2>

          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative h-[500px] flex items-center justify-center"
          >
            <motion.div
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative w-full max-w-md h-full"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1604242692760-2f7b0c26856d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjB3YXRjaGVzfGVufDF8fHx8MTc3NzUzODM3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Watch"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

          <p className="text-gray-600 mt-8">Move your mouse to explore</p>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gray-50"
              >
                <p className="text-xl mb-6 italic">"{testimonial.quote}"</p>
                <p className="text-sm text-gray-600">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. LIFESTYLE GRID */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl sm:text-6xl mb-4">Every Lifestyle</h2>
            <p className="text-xl text-gray-400">This watch fits your every moment</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {lifestyle.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square overflow-hidden"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Lifestyle ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. COLLECTION CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-5xl sm:text-6xl mb-8">
            Find the watch<br />that defines you.
          </h2>
          <Link to="/collections">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-12 py-4 text-lg hover:bg-gray-800 transition-all inline-flex items-center gap-2 rounded-full"
            >
              Explore Full Collection
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* 12. ABOUT PREVIEW */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl mb-6">About JKola.Co</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              JKola.Co was created for those who value precision, design, and presence.
            </p>
            <Link to="/heritage">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-black px-8 py-3 hover:bg-black hover:text-white transition-all rounded-full"
              >
                Read More
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 13. NEWSLETTER */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl mb-6">Join the JKola Circle</h2>
            <p className="text-gray-400 mb-8">Be the first to know about new releases</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/50 transition-colors rounded-full"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-colors rounded-full"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
