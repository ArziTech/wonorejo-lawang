// components/AboutSection.tsx
import Image from 'next/image';
import Gapura from '../../../public/images/gapura.jpg'
import SectionHeading from "@/components/global/section-heading";
import {Star} from "lucide-react";

const AboutSection = () => {
  return (
      <section id="about" className="my-16 bg-white">
        {/* Detailed About Content / Features Section */}
        <div  className="container mx-auto ">
          <div className="w-full flex justify-between">
            <div className={'w-full'}>
              <SectionHeading Icon={Star} title={'Lebih Dekat dengan Desa Wonorejo'} />
              <p className={'max-w-prose text-justify text-lg '}>
                Desa Wonorejo merupakan desa paling utara pada bagian wilayah Kabupaten Malang. Desa Wonorejo juga merupakan pintu masuk Kabupaten dari arah Surabaya yang berbatasan dengan Kabupaten Pasuruan. Dikelilingi oleh hamparan hijau pegunungan dan udara yang segar, desa ini menjadi rumah bagi beragam flora dan fauna endemik. Kehidupan masyarakatnya yang harmonis dan kental dengan adat istiadat leluhur menjadikan Wonorejo sebuah destinasi yang otentik.
              </p>
            </div>
            <Image src={Gapura} alt={'Peta desa wonorejo'} className={'w-1/2' +
                ' rounded-xl'}/>
          </div>
        </div>

        {/* Top About Section (similar to the second hero) */}
        <div className="relative mt-16 h-[400px] md:h-[500px] flex items-center justify-center text-white text-center">
          <Image
              src="/images/marching.jpg" // A different large background image
              alt="Scenic view of Wonorejo Lawang"
              layout="fill"
              objectFit="cover"
              quality={90}
              className="absolute inset-0 z-0"
          />
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          <div className="relative z-20  max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Temukan Keajaiban di Wonorejo Lawang</h2>
            <p className="text-lg">
              Desa Wonorejo Lawang, sebuah permata tersembunyi, menawarkan keindahan alam yang menakjubkan dan kekayaan budaya yang otentik.
              Nikmati pemandangan pegunungan yang hijau, udara segar, serta keramahan penduduk lokal.
            </p>
          </div>
        </div>


      </section>
  );
};

export default AboutSection;