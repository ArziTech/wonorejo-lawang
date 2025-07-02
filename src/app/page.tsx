// app/page.tsx

import HeroSection from "@/app/_components/hero-section";
import AboutSection from "@/app/_components/about-section";
import ContactSection from "@/app/_components/contact-section";
import CornerSection from "@/app/_components/corner-section";

export default function Home() {
  return (
        <main className={'flex-grow'}>
          <HeroSection />
          <AboutSection />
          <CornerSection />
          {/*<UmkmSection />*/}
          {/*<ImageGallery />*/}

          {/*<About3 />*/}
          {/*<ArticleSection />*/}
          {/*<Faq1 />*/}
          <ContactSection />
        </main>
  );
}