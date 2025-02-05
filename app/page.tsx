'use client';

import { Mail, Calendar, MapPin, ChevronRight, Mic2 } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeIn = {
  hidden: { 
    opacity: 0, 
    y: 50,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { 
    scale: 0.8, 
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
    setEmail('');
  };

  return (
    <AnimatePresence>
      <main className="min-h-screen bg-gray-950 text-gray-100">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-orange-950">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent" />
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          >
            <motion.div 
              variants={fadeIn}
              className="inline-block animate-text-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#ff6b00,45%,#ffa07a,55%,#ff6b00)] bg-[length:250%_100%] mb-6"
            >
              <h1 className="text-7xl font-bold tracking-tight">AfroTalks 2025</h1>
            </motion.div>
            <motion.p 
              variants={fadeIn}
              className="text-2xl mb-10 text-gray-300 font-light tracking-wide"
            >
              Amplifying African Voices, Inspiring Global Change
            </motion.p>
            <motion.div 
              variants={fadeIn}
              className="flex gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
                className="group bg-gradient-to-br from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
              >
                Register Now
                <ChevronRight className="inline ml-2 transition-transform group-hover:translate-x-1" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
                className="px-8 py-4 rounded-lg border border-orange-500/20 text-orange-500 hover:bg-orange-500/10 transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* Event Info */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-24 bg-gray-900/50 backdrop-blur-xl"
        >
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-12">
            {[
              { icon: Calendar, title: "Date & Time", details: ["March 15-17, 2025", "9:00 AM - 6:00 PM WAT"] },
              { icon: MapPin, title: "Location", details: ["Eko Convention Center", "Lagos, Nigeria"] },
              { icon: Mic2, title: "Speakers", details: ["30+ Industry Leaders", "From Across Africa"] }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ 
                  scale: 1.05, 
                  transition: { duration: 0.2 }
                }}
                className="group flex items-start gap-6 p-6 rounded-xl bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-300"
              >
                <item.icon className="w-10 h-10 text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold text-xl mb-3 text-gray-100 tracking-tight">{item.title}</h3>
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-gray-400 font-normal">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Events */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-24 bg-gray-950"
        >
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2 
              variants={fadeIn}
              className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300"
            >
              Upcoming Events
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Tech Innovation Summit',
                  date: 'March 15, 2025',
                  image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000',
                },
                {
                  title: 'Creative Arts Showcase',
                  date: 'March 16, 2025',
                  image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000',
                },
                {
                  title: 'Business Leadership Forum',
                  date: 'March 17, 2025',
                  image: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&q=80&w=1000',
                },
              ].map((event, index) => (
                <motion.div 
                  key={index}
                  variants={scaleIn}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  className="group bg-gray-900/30 rounded-xl overflow-hidden hover:bg-gray-800/50 transition-all duration-500 backdrop-blur-sm border border-gray-800"
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.5 }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-100 tracking-tight">{event.title}</h3>
                    <p className="text-gray-400 mb-4">{event.date}</p>
                    <motion.button 
                      whileHover={{ 
                        x: 10,
                        transition: { duration: 0.2 }
                      }}
                      className="text-orange-500 font-semibold flex items-center group-hover:gap-2 transition-all"
                    >
                      Register Now <ChevronRight className="ml-1 w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-24 bg-gradient-to-b from-gray-950 to-gray-900"
        >
          <div className="max-w-2xl mx-auto px-4 text-center">
            <motion.h2 
              variants={fadeIn}
              className="text-3xl font-bold mb-6"
            >
              Stay Updated
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-gray-400 mb-8"
            >
              Subscribe to our newsletter for the latest updates about AfroTalks 2025
            </motion.p>
            <motion.form 
              variants={fadeIn}
              onSubmit={handleSubmit} 
              className="flex gap-4 max-w-md mx-auto"
            >
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                type="submit"
                className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Subscribe
              </motion.button>
            </motion.form>
          </div>
        </motion.section>
      </main>
    </AnimatePresence>
  );
}