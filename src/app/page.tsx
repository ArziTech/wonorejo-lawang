// app/page.tsx

import Navbar from "@/components/global/navbar";
import HeroSection from "@/app/_components/hero-section";
import ImageGallery from "@/components/global/image-gallery";
import AboutSection from "@/app/_components/about-section";
import ContactSection from "@/app/_components/contact-section";
import Footer from "@/components/global/footer";
import ArticleSection from "@/app/_components/article-section";
import {Faq1} from "@/components/faq1";

export default function Home() {
  return (
      <div className="relative">
        <Navbar />
        <main>
          <HeroSection />
          <ImageGallery />
          <AboutSection />
          <ArticleSection />
          <Faq1 />
          <ContactSection />
        </main>
        <Footer />
      </div>
  );
}