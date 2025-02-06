'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeIn = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const scaleIn = {
  hidden: { 
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const speakers = [
  {
    name: "Dr. Amara Okafor",
    role: "Tech Innovation Director",
    country: "Nigeria",
    image: "/images/speakers/speaker1.jpg"
  },
  {
    name: "Sarah Mensah",
    role: "Climate Change Advocate",
    country: "Ghana",
    image: "/images/speakers/speaker2.jpg"
  },
  {
    name: "Jean-Pierre Hakizimana",
    role: "Digital Economy Expert",
    country: "Rwanda",
    image: "/images/speakers/speaker3.jpg"
  },
  {
    name: "Dr. Aisha Mohamed",
    role: "AI Ethics Researcher",
    country: "Kenya",
    image: "/images/speakers/speaker4.jpg"
  },
  {
    name: "Thabo Ndlovu",
    role: "Sustainable Energy Pioneer",
    country: "South Africa",
    image: "/images/speakers/speaker5.jpg"
  },
  {
    name: "Mariam Diallo",
    role: "Digital Health Innovator",
    country: "Senegal",
    image: "/images/speakers/speaker6.jpg"
  }
];

export default function FeaturedSpeakers() {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
      className="py-24 bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">
            Featured Speakers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet our distinguished speakers from across Africa, bringing diverse perspectives and expertise to AfroTalks 2025.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent z-10" />
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 relative z-20">
                <h3 className="text-xl font-semibold mb-1 text-white">{speaker.name}</h3>
                <p className="text-orange-500 font-medium mb-1">{speaker.role}</p>
                <p className="text-gray-400">{speaker.country}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
