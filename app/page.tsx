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
              Igniting the African Dream
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

        {/* About AfroTalks Section */}
        <motion.section
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
                About AfroTalks
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                variants={fadeIn}
                className="space-y-8"
              >
                <div className="bg-gray-900/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-orange-500/30 transition-colors duration-300">
                  <p className="text-lg text-gray-100 leading-relaxed">
                    We are driven by a unified purpose to build a generational legacy by Spearheading
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
                  <p className="text-orange-500 text-lg">Have we achieved the African Dream?</p>
                  <p className="text-gray-400 italic mt-1">Not Yet, Never or Hopefully</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-800/30 p-5 rounded-xl border border-gray-700">
                    <h4 className="text-orange-500 font-semibold mb-2">The Vision</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Driven by the vision to actualize the African Dream, Bright Tenbil founded AfroTalks. 
                      As the Founding Partner of Hyperlink Africa, he has dedicated a decade to creating 
                      impactful experiences and fostering meaningful connections.
                    </p>
                  </div>

                  <div className="bg-gray-800/30 p-5 rounded-xl border border-gray-700">
                    <h4 className="text-orange-500 font-semibold mb-2">The Impact</h4>
                    <p className="text-gray-300 leading-relaxed">
                      With a rich background in PR, Digital Marketing, and Law, Bright has curated about 10 TED 
                      events in Ghana, working closely with TED West Africa and Global Citizen - Accra. His mission: 
                      to ignite the African Dream through synergy.
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
          className="py-24 bg-gray-900"
        >
          <div className="max-w-6xl mx-auto px-4">
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
                Advisory Board
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our advisory board brings together experienced leaders who guide our vision and strategy
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Elizabeth Mensah",
                  role: "Innovation Strategy",
                  image: "/images/beatrice.jpg", // Using temporary image
                  bio: "Former Tech Executive with 20+ years experience in African innovation"
                },
                {
                  name: "Prof. Samuel Osei",
                  role: "Academic Relations",
                  image: "/images/beatrice.jpg", // Using temporary image
                  bio: "Distinguished Professor of Technology and Innovation Studies"
                },
                {
                  name: "Grace Kimani",
                  role: "Community Development",
                  image: "/images/beatrice.jpg", // Using temporary image
                  bio: "Social Impact Leader and Community Building Expert"
                }
              ].map((advisor, index) => (
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
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      className="rounded-full object-cover"
                      sizes="128px"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-semibold text-white mb-2">{advisor.name}</h4>
                    <p className="text-orange-500 mb-3">{advisor.role}</p>
                    <p className="text-gray-400 text-sm">{advisor.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Volunteers Section */}
        <motion.section
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