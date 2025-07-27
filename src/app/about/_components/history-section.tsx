// components/HistorySection.tsx
import Image from 'next/image';
import SectionHeading from "@/components/global/section-heading";
import { History } from "lucide-react";

const HistorySection = () => {
  return (
      <section id="history" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionHeading Icon={History} title="Profil Desa Wonorejo"/>
          <div className="flex flex-col md:flex-row  gap-8 mt-8">
            <div className="w-full md:w-1/2">
              <p className="text-justify text-lg text-gray-700 leading-relaxed">
                Desa Wonorejo merupakan desa paling utara pada bagian wilayah
                Kabupaten Malang. Desa Wonorejo juga merupakan pintu masuk
                Kabupaten Malang dari arah Surabaya yang berbatasan dengan
                Kabupaten Pasuruan. </p><br/>
              <h3 className={'text-xl font-medium mb-2'}>Kondisi Geografis</h3>
              <p className="text-justify text-lg text-gray-700 leading-relaxed">
                Bahwa Desa Wonorejo Kecamatan Lawang terletak disebelah utara -+
                20 km dari Pusat Pemerintahan KecamatanLawang atau sebelah utara
                dari Kota Malang dengan ketinggian 600 m diatas permukaan air
                laut. Wilayah Desa Wonorejo memiliki luas wilayah sebesar 623 ha
                yang merupakah salah satu wilayah di Kecamatan Lawang yang cukup
                besar, dimana Desa Wonorejo merupakan suatu wilayah yang
                strategis untuk jenis pertanian. Desa Wonorejo berbatasan
                langsung dengan: </p>
              <ul className="list-disc font-normal list-inside ms-8 text-lg text-gray-700 space-y-2">
                <li>
                  Sebelah utara: Desa Jatisari Kecamatan Purwodadi Kabupaten
                  Pasuruan
                </li>
                <li>
                  Sebelah bara: Perkebunan Teh / PTPN.12 AFD Gebuk Lor Wonosari
                </li>
                <li>
                  Sebelah timur: Desa Turirejo Kecamatan Lawang Kabupaten Malang
                </li>
                <li>
                  Sebelah selatan: Desa Ketindan Kecamatan Lawang Kabupaten
                  Malang
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image src="/images/ancak.jpg" // Placeholder image
                     alt="Sejarah Desa Wonorejo" width={800} height={400}
                     className="rounded-xl shadow-lg object-cover"/>
            </div>
          </div>
          <div className={'mt-16 grid grid-cols-2 gap-4'}>
            <div className={'bg-red-900 rounded-xl overflow-hidden'}>
              <Image src="/images/tlogorejo.jpg" // Placeholder image
                     alt="Gambar Desa Wonorejo" width={800} height={400}
                     className="rounded-xl shadow-lg object-cover"/>
            </div>
            <div>
              <h3 className={'text-xl font-medium mt-4 mb-2'}>Kondisi
                Demografi</h3>
              <p className="text-justify text-lg text-gray-700 leading-relaxed">
                Desa Wonorejo terdiri dari 6 Dusun, 19 RW, dan 42 RT. Untuk
                dusun-dusun yang ada di Desa Wonorejo yaitu: </p>
              <ul className="list-disc font-normal mt-2 list-inside ms-8 text-lg text-gray-700 space-y-2">
                <li>Dusun Tlogorejo</li>
                <li>Dusun Sentong</li>
                <li>Dusun Krajan Tengah</li>
                <li>Dusun Krajan Timur</li>
                <li>Dusun Krajan Barat</li>
                <li>Dusun Gebug Utara</li>
              </ul>
            </div>
          </div>
        </div>
      </section>);
};

export default HistorySection;