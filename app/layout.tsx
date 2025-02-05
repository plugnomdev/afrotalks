import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta'
});

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
    <html lang="en">
      <body className={`${plusJakarta.variable} font-sans`}>
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
              <a href="#" className="text-gray-600 hover:text-orange-600 transition">About</a>
              <a href="#" className="text-gray-600 hover:text-orange-600 transition">Events</a>
              <a href="#" className="text-gray-600 hover:text-orange-600 transition">Speakers</a>
              <a href="#" className="text-gray-600 hover:text-orange-600 transition">Contact</a>
            </nav>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition">
              Register
            </button>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Image 
                    src="/images/logo.png" 
                    alt="AfroTalks Logo" 
                    width={24} 
                    height={24} 
                    className="w-6 h-6"
                  />
                  <span className="font-bold text-xl text-white">AfroTalks</span>
                </div>
                <p className="text-sm">
                  Amplifying African voices and inspiring global change through powerful conversations and connections.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-orange-600 transition">About Us</a></li>
                  <li><a href="#" className="hover:text-orange-600 transition">Events</a></li>
                  <li><a href="#" className="hover:text-orange-600 transition">Speakers</a></li>
                  <li><a href="#" className="hover:text-orange-600 transition">Blog</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li>Eko Convention Center</li>
                  <li>Lagos, Nigeria</li>
                  <li>info@afrotalks.com</li>
                  <li>+234 123 456 7890</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Follow Us</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-orange-600 transition">Twitter</a></li>
                  <li><a href="#" className="hover:text-orange-600 transition">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-orange-600 transition">Instagram</a></li>
                  <li><a href="#" className="hover:text-orange-600 transition">Facebook</a></li>
                </ul>
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