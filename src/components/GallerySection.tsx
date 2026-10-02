import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { X } from "lucide-react";

import galleryW1 from "@/assets/w1.jpeg";
import galleryW2 from "@/assets/w2.jpeg";
import galleryW4 from "@/assets/w4.jpeg";
import galleryW5 from "@/assets/w5.jpeg";
import gallery2 from "./2.png";
import gallery11 from "./11.jpeg";
import gallery22 from "./22.jpeg";

const images = [
  { src: galleryW1, caption: "Wellness Practice" },
  { src: gallery2, caption: "Holistic Healing" },
  { src: galleryW4, caption: "Natural Therapy" },
  { src: galleryW5, caption: "Mind & Body Balance" },
  { src: gallery11, caption: "Therapy Session" },
  { src: gallery22, caption: "Wellness Care" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<typeof images[0] | null>(null);

  return (
    <>
      <section id="gallery" className="py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-narrow mx-auto px-6 lg:px-8">

          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">
                Our Gallery
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Wellness <span className="text-primary">Journey</span>
              </h2>

              <p className="text-muted-foreground">
                Glimpses of our wellness practices, therapies, and holistic healing sessions.
              </p>
            </div>
          </ScrollReveal>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-6">

            {/* Large Feature */}
            <ScrollReveal className="col-span-2 row-span-2">
              <div
                onClick={() => setSelected(images[1])}
                className="relative h-full w-full rounded-3xl overflow-hidden cursor-pointer group shadow-xl"
              >
                <img
                  src={images[1].src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-6 left-6 text-white font-semibold text-lg">
                  {images[1].caption}
                </p>
              </div>
            </ScrollReveal>

            {/* Medium Top Right */}
            <ScrollReveal className="col-span-2 row-span-1">
              <div
                onClick={() => setSelected(images[0])}
                className="relative h-full w-full rounded-3xl overflow-hidden cursor-pointer group shadow-lg"
              >
                <img
                  src={images[0].src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white text-sm font-medium">
                  {images[0].caption}
                </p>
              </div>
            </ScrollReveal>

            {/* Bottom Small 1 */}
            <ScrollReveal className="col-span-1 row-span-1">
              <div
                onClick={() => setSelected(images[2])}
                className="relative h-full w-full rounded-3xl overflow-hidden cursor-pointer group shadow-md"
              >
                <img
                  src={images[2].src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white text-xs font-medium">
                  {images[2].caption}
                </p>
              </div>
            </ScrollReveal>

            {/* Bottom Small 2 */}
            <ScrollReveal className="col-span-1 row-span-1">
              <div
                onClick={() => setSelected(images[3])}
                className="relative h-full w-full rounded-3xl overflow-hidden cursor-pointer group shadow-md"
              >
                <img
                  src={images[3].src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white text-xs font-medium">
                  {images[3].caption}
                </p>
              </div>
            </ScrollReveal>

            {/* Additional Image 1 */}
            <ScrollReveal className="col-span-1 row-span-1">
              <div
                onClick={() => setSelected(images[4])}
                className="relative h-full w-full rounded-3xl overflow-hidden cursor-pointer group shadow-md"
              >
                <img
                  src={images[4].src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white text-xs font-medium">
                  {images[4].caption}
                </p>
              </div>
            </ScrollReveal>

            {/* Additional Image 2 */}
            <ScrollReveal className="col-span-1 row-span-1">
              <div
                onClick={() => setSelected(images[5])}
                className="relative h-full w-full rounded-3xl overflow-hidden cursor-pointer group shadow-md"
              >
                <img
                  src={images[5].src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white text-xs font-medium">
                  {images[5].caption}
                </p>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-2 hover:bg-white/30 transition"
            >
              <X size={22} className="text-white" />
            </button>

            <img
              src={selected.src}
              alt=""
              className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
