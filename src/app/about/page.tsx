// app/about/page.tsx
import AboutIntroSection from './_components/about-intro-section';
import HistorySection from './_components/history-section';
import VisionMissionSection from './_components/vision-mission-section';
// import KeyFiguresSection from './_components/key-figures-section';
import MapSection from "@/app/about/_components/map-section";

// Note: The Hero Section from the homepage is replaced by a simpler banner for subpages.
// You can create a reusable `PageBanner` component if needed.
const AboutPageBanner = () => {
  return (
      <div className="relative h-[300px] flex items-center justify-center text-white bg-cover bg-center"
           style={{ backgroundImage: 'url(/images/about-bg.png)' }}> {/* Using inline style for direct image path */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold">Tentang Kami</h1>
          <p className="mt-2 text-xl">Mengenal lebih jauh Desa Wonorejo</p>
        </div>
      </div>
  );
};


export default function About() {
  return (
      <div className="relative flex flex-col min-h-screen">
        <main className="flex-grow mt-24"> {/* Margin top to account for fixed header */}
          <AboutPageBanner />
          <AboutIntroSection />
          <HistorySection />
          <VisionMissionSection />
          {/*<KeyFiguresSection />*/}
          <MapSection />
          {/* You can add more sections here like facilities, achievements, etc. */}
        </main>
      </div>
  );
}