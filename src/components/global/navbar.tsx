// components/Navbar.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Using shadcn button

const Navbar = () => {
  return (
      // Adjust pt-8 to account for the TopBar height
      <nav className="bg-primary py-4 shadow-sm fixed  left-0 w-full z-40">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            {/* Replace with your actual logo if available */}
            <span className="text-lg font-bold text-white">Wonorejo Lawang</span>
          </Link>
          <ul className="hidden md:flex space-x-6 text-gray-700">
            <li><Link href="#home" className="text-white hover:text-green-600 transition-colors">Home</Link></li>
            <li><Link href="#about" className="text-white hover:text-green-600 transition-colors">About Us</Link></li>
            <li><Link href="#gallery" className="text-white hover:text-green-600 transition-colors">Gallery</Link></li>
            <li><Link href="#features" className="text-white hover:text-green-600 transition-colors">Features</Link></li>
            <li><Link href="#faq" className="text-white hover:text-green-600 transition-colors">FAQ</Link></li>
            <li><Link href="#contact" className="text-white hover:text-green-600 transition-colors">Contact</Link></li>
          </ul>
          {/* Mobile menu button (implementation omitted for brevity) */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </Button>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;