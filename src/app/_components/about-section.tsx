// components/AboutSection.tsx
import Image from 'next/image';
import FeatureCard from './feature-card';
import SectionHeading from "@/components/global/section-heading";
import {Star} from "lucide-react";

const AboutSection = () => {
  return (
      <section id="about" className="py-16 bg-white">
        {/* Top About Section (similar to the second hero) */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center text-white text-center">
          <Image
              src="/images/about-bg.png" // A different large background image
              alt="Scenic view of Wonorejo Lawang"
              layout="fill"
              objectFit="cover"
              quality={90}
              className="absolute inset-0 z-0"
          />
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          <div className="relative z-20 p-4 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Temukan Keajaiban di Wonorejo Lawang</h2>
            <p className="text-lg">
              Desa Wonorejo Lawang, sebuah permata tersembunyi, menawarkan keindahan alam yang menakjubkan dan kekayaan budaya yang otentik.
              Nikmati pemandangan pegunungan yang hijau, udara segar, serta keramahan penduduk lokal.
            </p>
          </div>
        </div>

        {/* Detailed About Content / Features Section */}
        <div id="features" className="container mx-auto px-4 mt-16">
          <SectionHeading Icon={Star} title={'Mengapa Memilih Kami?'} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <FeatureCard
                icon="🌿"
                title="Alam Memukau"
                description="Dikelilingi oleh pemandangan pegunungan dan hijau yang asri."
            />
            <FeatureCard
                icon="🏡"
                title="Budaya Lokal"
                description="Pengalaman otentik dengan keramahan penduduk setempat."
            />
            <FeatureCard
                icon="🥑"
                title="Produk Segar"
                description="Menikmati hasil bumi langsung dari petani."
            />
            <FeatureCard
                icon="🧘‍♀️"
                title="Ketenangan"
                description="Tempat sempurna untuk relaksasi dan melepas penat."
            />
          </div>

        </div>
      </section>
  );
};

export default AboutSection;