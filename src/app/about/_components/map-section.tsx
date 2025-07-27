import React from 'react'
import SectionHeading from "@/components/global/section-heading";
import {MapIcon} from "lucide-react";

import Map from '../../../../public/map/PETA_BATAS_ADMINISTRASI_DESA_WONOREJO_KEC_LAWANG_KAB_MALANG.png'
import Image from 'next/image'

const MapSection = () => {
  return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading Icon={MapIcon} title={"Peta Desa Wonorejo"}/>
          <Image
              alt={'Peta batas administrasi Desa Wonorejo'}
              src={Map}

          />
        </div>
      </ section>
  )
}
export default MapSection
