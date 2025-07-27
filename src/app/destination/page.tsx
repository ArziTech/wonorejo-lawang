import React from 'react'
import SectionHeading from "@/components/global/section-heading";
import {FerrisWheel, Leaf, MapIcon, Mountain, Trees} from "lucide-react";
import Map
  from '../../../public/map/PETA_POTENSI_WISATA_DESA_WONOREJO_KEC_LAWANG_KAB_MALANG.png'
import Tea from '../../../public/images/kebun_teh.jpg'
import Tlogoland from '../../../public/images/tlogoland.jpg'
import Avocado from '../../../public/images/central-alpukat.jpg'
import Arjuna from '../../../public/images/arjuna.jpg'
import Image from 'next/image'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils";

const Page = () => {
  return (<main className={'flex-grow'}>
    <section id="history" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className={cn('flex py-4 gap-4 items-center mt-12')}>
          <div
              className={'bg-primary size-fit rounded-full aspect-square  p-2'}>
            <MapIcon className={'text-white'}/>
          </div>
          <h2 className={'font-bold text-2xl'}>
            Peta Destinasi Wisata di Desa Wonorejo
          </h2>
        </div>
        <Image alt={'Peta batas administrasi Desa Wonorejo'} src={Map}

        />
      </div>
      <div className="container mx-auto px-4">
        <SectionHeading Icon={Mountain}
                        title="Pos Pendakian Gunung Arjuna Via Lawang"
                        className={'mt-4'}/>
        <div className={'flex gap-4'}>
          <div className={'basis-1/2'}>
          <p className="text-justify text-lg my-2 text-gray-700 leading-relaxed">
              Pos ini berperan sebagai titik keberangkatan utama bagi para
              pendaki yang berencana melakukan ekspedisi menuju puncak Gunung
              Arjuno. Selain akses ke Gunung Arjuno, pos ini juga menyediakan
              jalur pendakian alternatif menuju dua destinasi menarik lainnya,
              yaitu Bukit Lincing dan Gunung Budug Asu. Sebagai prosedur standar
              keamanan dan pendataan, seluruh pendaki diwajibkan untuk
              mendaftarkan diri serta melengkapi data yang diperlukan di pos ini
              sebelum memulai aktivitas pendakian mereka. </p>
            <p className="text-justify text-lg my-2 text-gray-700 leading-relaxed">
              Selain itu, disini juga terdapat Pujasera yang dirancang khusus
              untuk memenuhi kebutuhan logistik para pendaki. Fasilitas ini
              menyediakan beragam pilihan hidangan yang dapat dinikmati para
              pendaki baik sebelum memulai pendakian, untuk mengisi energi dan
              mempersiapkan diri, maupun setelah menyelesaikan pendakian,
              sebagai tempat untuk beristirahat dan memulihkan tenaga sambil
              menyantap makanan. </p>
            <Button asChild>
              <Link href={'https://maps.app.goo.gl/xRQrkdAyk7eKmKdLA'}>
                Go To Location
              </Link>
            </Button>
          </div>
          <div className={'basis-1/2'}>
            <Image src={Arjuna}
                   alt={'Gambar dari Pos Pendakian Gunung Arjuna Via Lawang'}/>
          </div>
        </div>
        <SectionHeading Icon={Trees} title="Central Alpukat Pameling Nasional"
                        className={'mt-4'}/>
        <div className={'flex gap-4'}>
          <div className={'basis-1/2 overflow-hidden'}>
            <Image src={Avocado}
                   alt={'Gambar dari central alpukat pameling nasional'}/>
          </div>
          <div className={'basis-1/2'}>
            <p className="text-justify text-lg text-gray-700 my-2 leading-relaxed">
              Central Alpukat Pameling Nasional, yang telah diresmikan oleh
              Menteri Pertanian Republik Indonesia, adalah pusat pembibitan
              dan riset alpukat Pameling. Berlokasi di ketinggian 650 mdpl,
              tempat ini menawarkan udara sejuk, pemandangan alam yang
              indah, dan suasana asri. </p>
            <span
                className="text-justify text-xl font-medium text-gray-700 leading-relaxed">
                  Fasilitas dan Penawaran
                </span>
            <p className="text-justify text-lg text-gray-700 my-2 leading-relaxed">
              Di area ini, Anda akan menemukan beragam jenis bibit alpukat
              Pameling, kebun alpukat Pameling, serta gazebo besar dan kecil
              yang ideal untuk diskusi atau bersantai. Pengunjung juga dapat
              membeli bibit dan buah alpukat (saat musim panen), serta
              memperoleh informasi lengkap tentang budidaya alpukat
              Pameling, varietas unggulan nasional dari Kabupaten Malang
              ini. </p>
            <span
                className="text-justify text-xl font-medium text-gray-700 leading-relaxed">
                  Keunggulan Alpukat Pameling
                </span>
            <p className="text-justify text-lg text-gray-700 my-2 leading-relaxed">
              Pohon alpukat Pameling mulai berbuah pada usia 2,5 hingga 3
              tahun setelah tanam. Saat mencapai usia produktif (5 tahun ke
              atas), satu pohon dapat menghasilkan lebih dari 300 kg per
              panen, dengan dua kali panen setiap tahun. Buah alpukat
              Pameling memiliki berat umumnya 600-1200 gram per buah, dengan
              daging tebal, tanpa serat, bertekstur lembut, serta bercita
              rasa gurih manis. </p>
            <p className="text-justify text-lg text-gray-700 my-2 leading-relaxed">
              Alpukat Pameling tidak hanya cocok untuk pasar buah segar lokal
              dan ekspor, tetapi juga diolah menjadi produk turunan seperti
              bentuk beku dan pasta. Selain itu, buah ini juga menjadi bahan
              baku penting untuk industri seperti minyak alpukat, bubuk alpukat,
              serta aneka produk kosmetika.</p>
            <Button asChild>
              <Link href={'https://maps.app.goo.gl/ELqbaWbZgkiMfZWf7'}>
                Go To Location
              </Link>
            </Button>
          </div>
        </div>
        <SectionHeading Icon={FerrisWheel} title="Tlogoland"
                        className={'mt-4'}/>
        <div className={'flex gap-4'}>
          <div className={'basis-1/2'}>
            <p className="text-justify text-lg text-gray-700 my-2 leading-relaxed">
              Tlogo Land, sebuah destinasi wisata yang terletak di Kecamatan
              Lawang, Kabupaten Malang, menawarkan suasana asri yang ideal
              untuk berbagai kalangan, baik bersama teman, keluarga, maupun
              kolega. </p>
            <span
                className="text-justify text-xl font-medium text-gray-700 leading-relaxed">
                  Ragam Aktivitas untuk Relaksasi dan Rekreasi
                </span>
            <p className="text-justify text-lg text-gray-700 my-2 leading-relaxed">
              Pengunjung dapat melepas penat dari hiruk pikuk perkotaan
              dengan berbagai kegiatan, mulai dari bersantap, berfoto,
              hingga menikmati keindahan alam sekitar. Selain panorama alam
              yang memukau, Tlogo Land juga menyediakan beragam aktivitas
              bernuansa alam yang menarik, termasuk outbound dan
              berenang. </p>
            <span
                className="text-justify text-xl font-medium text-gray-700 leading-relaxed">
                  Fasilitas Lengkap untuk Pengalaman Tak Terlupakan
                </span>
            <p className="text-justify text-lg text-gray-700 my-2 leading-relaxed">
              Tlogo Land dilengkapi dengan beragam fasilitas penunjang
              rekreasi. Terdapat berbagai spot foto Instagramable yang unik
              dan menarik. Bagi pecinta petualangan, tersedia arena
              outbound, flying fox, dan arena sepeda gunung. Selain itu,
              Tlogo Land juga menawarkan wahana kolam renang dan area
              camping yang luas. Beberapa jalan setapak dengan deretan gubuk
              juga tersedia sebagai spot bersantai yang nyaman. </p>
            <span
                className="text-justify text-xl font-medium text-gray-700 leading-relaxed">
                  Melestarikan Kebudayaan Lokal
                </span>
            <p className="text-justify text-lg text-gray-700 my-2 leading-relaxed">
              Pada hari-hari tertentu, Tlogo Land menyelenggarakan berbagai
              kegiatan kebudayaan lokal seperti pertunjukan Jaranan dan
              Bantengan, yang semakin memperkaya pengalaman wisata Anda.</p>

            <Button asChild>
              <Link href={'https://maps.app.goo.gl/f68eGFR1Qm5fR3hZ6'}>
                Go To Location
              </Link>
            </Button>
          </div>
          <div className={'basis-1/2 overflow-hidden'}>
            <Image src={Tlogoland} alt={'Gambar dari Tlogoland'}/>
          </div>
        </div>
        <SectionHeading Icon={Leaf} title="Kebun Teh Wonosari"
                        className={'mt-4'}/>
        <div className={'flex gap-4'}>
          <div className={'basis-1/2 overflow-hidden'}>
            <Image src={Tea} alt={'Kebun Teh Wonosari'}/>
          </div>

          <div className={'basis-1/2'}>
            <p className="text-justify text-lg text-gray-700 my-2 leading-relaxed">
              Agrowisata Kebun Teh Wonosari, merupakan destinasi memukau
              di Kabupaten Malang yang menawarkan lebih dari sekadar pemandangan
              indah. Terletak di lereng Gunung Arjuna pada ketinggian 950-1250
              meter di atas permukaan laut, Kebun Teh Wonosari menjanjikan udara
              sejuk dengan temperatur sekitar 19&deg;C -26&deg;C dan kelembaban
              udara
              yang nyaman. </p>
            <p className="text-justify text-lg text-gray-700 my-2 leading-relaxed">
              Sejak resmi dibuka sebagai agrowisata pada Agustus 1994, Kebun Teh
              Wonosari telah menjadi pilihan ideal untuk rekreasi keluarga
              maupun petualangan seru. Konsep agrowisata yang kami usung
              sepenuhnya memanfaatkan keindahan alam sebagai daya tarik utama,
              dipadukan dengan berbagai fasilitas modern untuk kenyamanan
              Anda. </p>
            <p className="text-justify text-lg text-gray-700 my-2 leading-relaxed">
              Agrowisata Kebun Teh Wonosari, bagian dari PT. Perkebunan
              Nusantara XII (Persero). </p>
            <Button asChild>
              <Link href={'https://maps.app.goo.gl/g6Bg2bdFCR98rcFw5'}>
                Go To Location
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

  </main>)
}
export default Page
