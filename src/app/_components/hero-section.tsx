// components/HeroSection.tsx
import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Using shadcn button

const HeroSection = () => {
  return (
      // Adjust pt-16 to account for both TopBar and Navbar heights
      <section id="home" className="relative h-[600px] flex items-center justify-center text-white text-center pt-24 md:pt-0">
        <Image
            src="/images/hero-bg.png"
            alt="Wonorejo Lawang Landscape"
            layout="fill"
            objectFit="cover"
            quality={90}
            className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        <div className="relative z-20 p-4 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Temukan Keajaiban di Wonorejo Lawang
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Jelajahi keindahan alam dan budaya lokal yang memukau.
          </p>
          <Button className="bg-primary text-white font-semibold py-3 px-8  shadow-lg transition-colors duration-300">
            Jelajahi Sekarang
          </Button>
        </div>
      </section>
  );
};

export default HeroSection;