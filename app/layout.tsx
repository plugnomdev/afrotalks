import { Inter } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AfroTalks 2025 - Amplifying African Voices',
  description: 'Join AfroTalks 2025, a premier event celebrating African innovation, creativity, and leadership.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${playfair.variable}`}>
      <body className="font-sans">
        {/* Header */}
        <header className="fixed w-full z-50 bg-white border-b">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <Image 
              src="/images/logo.png" 
              alt="AfroTalks Logo" 
              width={120} 
              height={40} 
              className="h-10 w-auto"
              priority
            />
            <nav className="hidden md:flex items-center gap-8">
              <a href="#our-purpose" className="text-gray-600 hover:text-orange-600 transition">About</a>
              <a href="#dates" className="text-gray-600 hover:text-orange-600 transition">Dates</a>
              <a href="#" className="text-gray-600 hover:text-orange-600 transition">Speakers</a>
              <a href="#meet-our-team" className="text-gray-600 hover:text-orange-600 transition">Team</a>
              <a href="#contact" className="text-gray-600 hover:text-orange-600 transition">Contact</a>
            </nav>
            <a 
              href="https://web.akwaaba.app/events/86c9cf10-ed73-4ef6-bde9-a221169ce26d"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
            >
              Register
            </a>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <p className="text-sm">
                  Amplifying African voices and inspiring global change through powerful conversations and connections.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#our-purpose" className="hover:text-orange-600 transition">About</a></li>
                  <li><a href="#dates" className="hover:text-orange-600 transition">Dates</a></li>
                  <li><a href="#" className="hover:text-orange-600 transition">Speakers</a></li>
                  <li><a href="#meet-our-team" className="hover:text-orange-600 transition">Team</a></li>
                </ul>
              </div>
              <div id="contact">
                <h3 className="font-semibold text-white mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li><FaEnvelope className="inline-block mr-2" /> hello@afrotalks.com</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://twitter.com/afrotalks" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-600 transition">
                    <FaTwitter size={20} title="X (Twitter)" />
                  </a>
                  <a href="https://www.linkedin.com/company/afrotalks" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-600 transition">
                    <FaLinkedin size={20} title="LinkedIn" />
                  </a>
                  <a href="https://www.instagram.com/afrotalks" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-600 transition">
                    <FaInstagram size={20} title="Instagram" />
                  </a>
                  <a href="https://www.facebook.com/afrotalks" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-600 transition">
                    <FaFacebook size={20} title="Facebook" />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm">
              <p>&copy; 2025 AfroTalks. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}