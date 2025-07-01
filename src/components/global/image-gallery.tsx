// components/ImageGallery.tsx
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
}

const images: GalleryImage[] = [
  { src: '/images/gallery-1.jpg', alt: 'Mountain view' },
  { src: '/images/gallery-2.jpg', alt: 'Palm tree' },
  { src: '/images/gallery-3.jpg', alt: 'Village aerial view' },
  { src: '/images/gallery-4.jpg', alt: 'Avocado halves' },
  { src: '/images/gallery-5.jpg', alt: 'Green avocados on tree' },
];

const ImageGallery = () => {
  return (
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Galeri Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-lg group">
                  <Image
                      src={image.src}
                      alt={image.alt}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold">{image.alt}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default ImageGallery;