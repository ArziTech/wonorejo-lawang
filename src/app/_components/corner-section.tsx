// components/AboutSection.tsx
import SectionHeading from "@/components/global/section-heading";
import {ImageIcon} from "lucide-react";
import Image from 'next/image'

import gambar1 from '../../../public/images/gambar1.jpg'
import gambar2 from '../../../public/images/gambar2.jpg'
import gambar3 from '../../../public/images/gambar3.jpg'

const CornerSection = () => {
  return (
        <section className="container mx-auto">
          <SectionHeading Icon={ImageIcon} title={"Pemandangan Desa Wonorejo"} />
          <div className="grid gap-7 lg:grid-cols-3">
            <Image src={gambar1} alt={'gambar 1'}
                 className="size-full max-h-[620px]  object-cover lg:col-span-2"/>
            <div className="flex flex-col overflow-hidden gap-4 max-h-[620px] md:flex-row lg:flex-col">
                <Image className="h-1/2 object-cover" src={gambar2} alt={'gambar 2'}/>
                <Image className="h-1/2 object-cover" src={gambar3} alt={'gambar 2'}/>
            </div>
          </div>
        </section>
  );
};

export default CornerSection;