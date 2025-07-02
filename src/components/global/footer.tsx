// components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-white">Wonorejo Lawang</span>
            </Link>
            <p className="text-sm">
              Jelajahi keindahan alam dan budaya lokal yang memukau di Wonorejo Lawang. Destinasi sempurna untuk ketenangan dan petualangan.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <address className="not-italic space-y-2 text-sm">
              <p>📧 wonorejo.lawang@malangkab.go.id</p>
              <p>📍 Jl. Raya Wonorejo, Lawang, Malang, Jawa Timur</p>
            </address>
          </div>

          {/* Social Media / Newsletter (Placeholder) */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Replace with actual social media icons/links */}
              <Link href="https://www.facebook.com/share/1FYegtzeqb/" className="text-gray-400 hover:text-accent transition-colors">Facebook</Link>
              <Link href="https://www.instagram.com/desawonorejolawang" className="text-gray-400 hover:text-accent transition-colors">Instagram</Link>
            </div>
            {/* <h4 className="text-lg font-semibold text-white mt-6 mb-4">Newsletter</h4>
          <form className="flex">
            <Input type="email" placeholder="Your Email" className="flex-grow rounded-r-none" />
            <Button type="submit" className="bg-green-600 hover:bg-green-700 rounded-l-none">Subscribe</Button>
          </form> */}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Wonorejo Lawang. All rights reserved.
        </div>
      </footer>
  );
};

export default Footer;