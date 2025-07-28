// components/VisionMissionSection.tsx
import SectionHeading from "@/components/global/section-heading";
import { Target, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const VisionMissionSection = () => {
  return (
      <section id="vision-mission" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading Icon={Target} title="Visi dan Misi Desa Wonorejo" />

          <div className="grid grid-cols-1  gap-8 mt-8">
            <Card className="p-6 shadow-lg">
              <CardHeader className="text-center">
                <Lightbulb className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-3xl font-bold text-gray-900">Visi</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside text-lg text-gray-700 font-bold space-y-2">
                  <li>

                    Melanjutkan
                    <ol className="list-upper-alpha list-inside ms-8 text-lg text-gray-700 space-y-2">
                      <li>
                        <span className={'font-bold'}>
                          Melanjutkan Pembangunan Infrastruktur
                        </span>
                        <ul className="list-disc list-inside ms-8 text-lg text-gray-700 space-y-2">
                          <li className={'font-normal'}>Pembangunan jalan paving di area pemukiman dan
                            lahan pertanian
                          </li>
                          <li className={'font-normal'}>Pembangunan pasar desa</li>
                          <li className={'font-normal'}>Pembangunan penyaringan ari bersih</li>
                          <li className={'font-normal'}>Pembangunan sarana olahraga</li>
                          <li className={'font-normal'}>Pembangunan drainase</li>
                          <li className={'font-normal'}>Pembangunan desa wisata</li>
                        </ul>
                      </li>
                      <li>
                        <span className={'font-bold'}>
                          Melanjutkan Pembangunan Sumberdaya Manuasia
                        </span>
                        <ul className="list-disc list-inside ms-8 text-lg text-gray-700 space-y-2">
                          <li className={'font-normal'}>Penerapan nilai-nilai agama dalam kehidupan
                            sehari-hari serta senantiasa selalu bersama-sama
                            dengan masyarakat, ulama, tokoh masyarakat untuk
                            meningkatkan ketakwaan kepada Tuhan Yang Maha Esa
                          </li>
                          <li className={'font-normal'}>Pengolahan desa merupakan kebijakan pemerintah
                            desa dalam mengolah potensi sumber daya alam desa
                            serta didukung oleh sumber daya manusia dan
                            kemandirian masyarakat berupa sikap mengandalkan
                            kemampuan masyarakat desa.
                          </li>
                        </ul>
                      </li>
                    </ol>
                  </li>
                  <li>Meningkatkan
                    <ul className="list-disc font-normal list-inside ms-8 text-lg text-gray-700 space-y-2">
                      <li>Meningkatkan kulalitas sumber daya manusia dan hasil pembangunan yang dicapai dengan semakin meningkatkan kemajuan pembangunan desa.</li>
                      <li>Meningkatkan keamanan masyarakat serta terlaksananya penegakan hukum yang berlaku tanpa memandang pangkat, jabatan, kedudukan serta tidak melupakan Hak Asasi Manusia dan nilai-nilai sosial budaya masyarakat.</li>
                      <li>Meningkatkan sumberdaya Aparatur Pemberintah Desa dalam pelayanan terhadap warga masyarakat.</li>
                      <li>Meningkatkan kualitas serta operasional lembaga kemasyarakatan yang meliputi: LPMD, LINMAS, PKK, Kader Kesehatan, Takmir Masjid, Rt / Rw, guru ngaji, guru PAUD, serta organisasi kepemudaan.</li>
                      <li>Meningkatkan lingkungan hidup yang bersih ramah. Sementara saat ini ada beberapa Bank Sampah, kita kembangkan dan kita tingkatkan penyediaan tempat pengolahan sampah terpadu (TPST)</li>
                      <li>Meningkatkan pengembangan masyarakat yang meliputi pelatihan keterampilan, pertanian, peternakan, serta pengembangan usaha masyarakat yang bisa untuk meningkatkan ekonomi.</li>
                    </ul>
                  </li>
                  <li>Memajukan
                    <p className="text-lg font-normal ms-8 text-gray-700 text-justify">
                      Dari dua aspek berkelanjutan dan peningkatan di segala bidang pembangunan, maka akan menjadi desa maju untuk menuju Desa Mandiri.
                    </p>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-lg">
              <CardHeader className="text-center">
                <Target className="mx-auto h-12 w-12 text-green-600 mb-4"/>
                <CardTitle className="text-3xl font-bold text-gray-900">Misi</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside text-lg text-gray-700 space-y-2">
                  <li>Mewujudkan pemahaman nilai agama serta tidak mengesampingkan atau meninggalkan adat istiadat dan budaya.</li>
                  <li>Mempertahankan segala aspek pembangunan di segala bidang yang telah ada dan sedang berjalan serta meningkatkan demi tercapainya tujuan masyarakat</li>
                  <li>Mewujudkan aparatur pemerintah desa yang adil, jujur, dan berwibawa serta mengedepankan pelayanan dan kepentingan masyarakat.</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  );
};

export default VisionMissionSection;