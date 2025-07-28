// components/KeyFiguresSection.tsx
import Image from 'next/image';
import SectionHeading from "@/components/global/section-heading";
import { Users } from "lucide-react";
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';

interface Figure {
  name: string;
  position: string;
  image: string;
  description: string;
}

const keyFigures: Figure[] = [
  {
    name: "Bapak Sutrisno",
    position: "Kepala Desa",
    image: "/images/figure-placeholder-1.jpg",
    description: "Memimpin dengan visi untuk kemajuan dan kesejahteraan Desa Wonorejo. Beliau berkomitmen pada pembangunan berkelanjutan."
  },
  {
    name: "Ibu Indah Lestari",
    position: "Sekretaris Desa",
    image: "/images/figure-placeholder-2.jpg",
    description: "Berdedikasi dalam mengelola administrasi desa dan memastikan efisiensi pelayanan publik. Penata dokumen yang teliti."
  },
  {
    name: "Bapak Edi Wijaya",
    position: "Bendahara Desa",
    image: "/images/figure-placeholder-3.jpg",
    description: "Bertanggung jawab atas pengelolaan keuangan desa dengan integritas dan akuntabilitas. Menjamin alokasi dana yang tepat."
  },
];

const KeyFiguresSection = () => {
  return (
      <section id="key-figures" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionHeading Icon={Users} title="Tokoh Penting Desa Wonorejo" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {keyFigures.map((figure, index) => (
                <Card key={index} className="p-6 text-center shadow-lg">
                  <CardContent className="flex flex-col items-center">
                    <Image
                        src={figure.image}
                        alt={figure.name}
                        width={150}
                        height={150}
                        className="rounded-full object-cover mb-4 border-4 border-green-500"
                    />
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">{figure.name}</CardTitle>
                    <CardDescription className="text-green-600 mb-4">{figure.position}</CardDescription>
                    <p className="text-gray-700 text-sm">{figure.description}</p>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>
  );
};

export default KeyFiguresSection;