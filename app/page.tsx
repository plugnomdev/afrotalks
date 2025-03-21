'use client';

import { Mail, Calendar, MapPin, ChevronRight, Mic2 } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Twitter, Linkedin } from 'lucide-react';
// import FeaturedSpeakers from './components/FeaturedSpeakers';

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
        <section className="relative h-screen flex items-center justify-center bg-black">
          {/* Background image - will be replaced later */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent" />
          
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-50">
            {/* Placeholder for the portrait image - will be replaced later */}
            <div className="w-full h-full bg-gradient-to-l from-gray-800 to-transparent" />
          </div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          >
            <motion.div 
              variants={fadeIn}
              className="mb-12"
            >
              <h2 className="text-5xl md:text-6xl font-serif italic font-normal text-white mb-2">
                "the fierce urgency of now"
              </h2>
              <div className="mt-8 text-center">
                <p className="text-xl uppercase tracking-widest mb-1 text-white">DR. MARTIN LUTHER KING, JR.</p>
                <p className="text-orange-500 text-lg">I have a Dream, 1963</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="absolute bottom-16 left-0 right-0 flex justify-center z-20"
          >
            <motion.a
              href="https://web.akwaaba.app/events/86c9cf10-ed73-4ef6-bde9-a221169ce26d"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
              className="group bg-gradient-to-br from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 inline-flex items-center"
            >
              Register Now
              <ChevronRight className="inline ml-2 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </section>

        {/* Event Info */}
        <motion.section 
          id="dates"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-24 bg-gray-900/50 backdrop-blur-xl"
        >
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-12">
            {[
              { icon: Calendar, title: "Date & Time", details: ["May 05, 2025", "10:00 AM"] },
              { icon: MapPin, title: "Location", details: ["UG School of Law", "Accra, Ghana"] },
              { icon: Mic2, title: "Speakers", details: ["Distinguished African Voices,", "Thought Leaders & Innovators"] }
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

        {/* About AfroTalks Section */}
        <motion.section
          id="our-purpose"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-32 relative overflow-hidden"
        >
          {/* Background with Image and Overlays */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-fixed bg-cover brightness-[0.3]" 
              style={{ backgroundImage: 'url("/images/about.jpg")' }} 
            />
            <div className="absolute inset-0 bg-black/80" />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/98 via-gray-900/99 to-gray-900/98" />
          </div>

          {/* Background Design Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
          </div>

          {/* Content */}
          <div className="max-w-6xl mx-auto px-4 relative">
            <motion.div 
              variants={fadeIn}
              className="text-center mb-16"
            >
              <span className="text-orange-500 text-sm font-medium tracking-wider uppercase mb-3 block">Our Purpose</span>
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                Igniting the African Dream
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                variants={fadeIn}
                className="space-y-8"
              >
                <div className="bg-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-orange-500/30 transition-colors duration-300">
                  <p className="text-lg text-gray-100 leading-relaxed">
                    The quest to ignite the African Dream starts by doing. We are driven by a unified purpose to build a generational legacy by Spearheading
                    Global Conversations, Igniting the African Dream, and Driving Impact Community
                    Projects.
                  </p>
                </div>

                <div className="bg-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-orange-500/30 transition-colors duration-300">
                  <p className="text-lg text-gray-100 leading-relaxed">
                    As an NGO, our team of young change-makers is committed to creating meaningful
                    experiences, thought-provoking discussions, lasting connections, and bold solutions
                    to the pressing questions of our time.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeIn}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Exploring Diverse Perspectives
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    "Technology",
                    "History",
                    "Finance",
                    "Innovation",
                    "Creativity",
                    "The Future",
                    "Politics",
                    "Religion",
                    "Love",
                    "Medicine",
                    "Nature",
                    "Relationships",
                    "Law",
                    "Sports",
                    "Work"
                  ].map((topic, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { 
                          opacity: 1, 
                          y: 0,
                          transition: { 
                            duration: 0.5,
                            delay: index * 0.05
                          }
                        }
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: 'rgba(251, 146, 60, 0.1)'
                      }}
                      className="bg-gray-900/40 backdrop-blur-sm rounded-xl px-4 py-3 text-base text-gray-100 text-center border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 cursor-default"
                    >
                      {topic}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Founder Section */}
        <motion.section
          id="meet-our-team"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-24 bg-gray-900/50"
        >
          <div className="max-w-6xl mx-auto px-4">
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                Meet Our Team
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Founder Image and Info */}
              <motion.div 
                variants={fadeIn}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex justify-center">
                  <motion.div
                    variants={scaleIn}
                    className="w-full max-w-[280px] bg-gray-800/50 rounded-xl overflow-hidden"
                  >
                    <div className="relative w-full aspect-square">
                      <Image
                        src="/images/bright.JPEG"
                        alt="Bright Tenbil"
                        fill
                        className="object-cover object-[center_15%]"
                        sizes="(max-width: 768px) 100vw, 280px"
                      />
                    </div>
                    <div className="p-5 text-center">
                      <h4 className="text-xl font-semibold text-white mb-2">Bright Tenbil</h4>
                      <p className="text-orange-500 mb-4">Founder & Lead Curator</p>
                      <div className="flex justify-center gap-4">
                        <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                          <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Founder Story */}
              <motion.div 
                variants={fadeIn}
                className="space-y-6 relative"
              >
                <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-600 rounded-full opacity-50" />
                
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">The Founder's Story</h3>
                  <p className="text-orange-500 text-lg">ACCRA GHANA</p>
                  <p className="text-gray-400 italic mt-1">Have we achieved the African Dream? Not Yet, Never or Hopefully</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-800/30 p-5 rounded-xl border border-gray-700">
                    <h4 className="text-orange-500 font-semibold mb-2">The Vision</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Driven by the vision to actualize the African Dream, Bright Tenbil founded AfroTalks. 
                      Bright has impacted in the capacity as the Founding Partner of Hyperlink Africa and other 
                      initiatives with a decade of experience in event management.
                    </p>
                  </div>

                  <div className="bg-gray-800/30 p-5 rounded-xl border border-gray-700">
                    <h4 className="text-orange-500 font-semibold mb-2">The Impact</h4>
                    <p className="text-gray-300 leading-relaxed">
                      He has curated about 10 TEDx events in Ghana, affiliated to TEDx West Africa and Global Citizen - Accra. 
                      With background in PR, Digital Marketing and Law, he is poised to ignite the African Dream through synergy.
                    </p>
                  </div>
                </div>

                <blockquote className="text-lg text-gray-300 italic">
                  "The African Dream is not just a vision, it's our collective journey."
                </blockquote>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Advisory Board Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-16 bg-gray-900"
        >
          <div className="max-w-6xl mx-auto px-4">
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                Advisory Board
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our advisory board brings together experienced leaders who guide our vision and strategy
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Diallo Sumbry",
                  role: "CEO, Adinkra Group",
                  image: "/images/diallo.png"
                },
                {
                  name: "Apiokor Seyiram",
                  role: "Media Personality",
                  image: "/images/apiokor.png"
                },
                {
                  name: "Okyeame Kwame",
                  role: "Musician",
                  image: "/images/okyeame.png"
                },
                {
                  name: "Gabriel Appiah",
                  role: "Director, BTL Africa",
                  image: "/images/gabriel.png"
                }
              ].map((advisor, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { 
                      opacity: 0, 
                      y: 30,
                      scale: 0.9,
                      transition: { duration: 0.5 }
                    },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      scale: 1,
                      transition: { 
                        duration: 0.5,
                        delay: index * 0.15
                      }
                    }
                  }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3, type: "spring", stiffness: 300 }
                  }}
                  className="rounded-xl p-4 flex flex-col items-center gap-3 relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-orange-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-56 h-56 flex-shrink-0 overflow-hidden rounded-lg transition-all duration-300">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      sizes="224px"
                    />
                  </div>
                  <div className="text-center relative z-10">
                    <h4 className="text-xl font-semibold text-white mb-1 group-hover:text-orange-400 transition-colors duration-300">{advisor.name}</h4>
                    <p className="text-orange-500 group-hover:text-orange-300 transition-colors duration-300">{advisor.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Volunteers Section */}
        {/* 
        <motion.section
          id="volunteers"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="py-24 bg-gray-950"
        >
          <div className="max-w-6xl mx-auto px-4">
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                Our Team
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Meet the passionate individuals driving AfroTalks forward and shaping the future of African innovation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  name: "Beatrice Afful",
                  role: "Project & Partnerships",
                  image: "/images/beatrice.jpg"
                },
                {
                  name: "Sarah Smith",
                  role: "Event Coordination",
                  image: "/images/SarahSmith.jpg"
                },
                {
                  name: "Michael Johnson",
                  role: "Content Creation",
                  image: "/images/team/volunteer3.jpg"
                },
                {
                  name: "Emily Brown",
                  role: "Community Management",
                  image: "/images/team/volunteer4.jpg"
                }
              ].map((volunteer, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-gray-800/50 rounded-xl p-6 flex flex-col items-center gap-4"
                >
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                      src={volunteer.image}
                      alt={volunteer.name}
                      fill
                      className="rounded-full object-cover"
                      sizes="128px"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-white mb-2">{volunteer.name}</h4>
                    <p className="text-orange-500">{volunteer.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition"
              >
                Join Our Volunteer Team
              </motion.button>
            </div>
          </div>
        </motion.section>
        */}

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