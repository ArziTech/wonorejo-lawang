// components/AboutIntroSection.tsx
import Image from 'next/image';
import { Star } from 'lucide-react'; // Assuming lucide-react is installed
import SectionHeading from "@/components/global/section-heading";
// import Map from '@/public/images/wonorejo-map.png'; // Corrected import path for public image
import Gamelan from '../../../../public/images/gamelan.jpg'

const AboutIntroSection = () => {
  return (
      <section id="about-intro" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row  justify-between gap-8">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <SectionHeading
                  Icon={Star}
                  title="Lebih Dekat dengan Desa Wonorejo"
                  className="text-left" // Align text left for this specific heading
              />
              <p className="max-w-prose text-justify text-lg text-gray-700">
                Desa Wonorejo merupakan desa paling utara pada bagian wilayah Kabupaten Malang. Desa Wonorejo juga merupakan pintu masuk Kabupaten dari arah Surabaya yang berbatasan dengan Kabupaten Pasuruan. Dikelilingi oleh hamparan hijau pegunungan dan udara yang segar, desa ini menjadi rumah bagi beragam flora dan fauna endemik. Kehidupan masyarakatnya yang harmonis dan kental dengan adat istiadat leluhur menjadikan Wonorejo sebuah destinasi yang otentik.
                <br /><br />
                Pengembangan desa ini sangat berfokus pada pelestarian lingkungan dan pemberdayaan ekonomi lokal, terutama melalui hasil pertanian unggulan seperti alpukat. Berbagai inisiatif telah dilakukan untuk meningkatkan kualitas hidup warga sekaligus menjaga kelestarian alamnya.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex  justify-center md:justify-end">
              <Image
                  src={Gamelan}
                  alt={'Profil desa Wonorejo'}
                  width={800} // Adjust based on your map image's aspect ratio
                  height={400} // Adjust based on your map image's aspect ratio
                  className={'rounded-xl shadow-lg '}
                  priority // For images in the initial viewport
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default AboutIntroSection;