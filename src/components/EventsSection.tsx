import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { X } from "lucide-react";

import eventE2 from "@/assets/e2.jpeg";
import eventE3 from "@/assets/e3.jpeg";
import eventE4 from "@/assets/e4.jpeg";
import eventE5 from "@/assets/e5.jpeg";
import eventE6 from "@/assets/e6.jpeg";

const images = [
  { src: eventE6, caption: "Interactive Nutrition Session" },
  { src: eventE5, caption: "Audience Engagement" },
  { src: eventE4, caption: "Healthcare Workshop" },
  { src: eventE3, caption: "Seminar in Progress" },
  { src: eventE2, caption: "Wellness Event" },
];

const EventsSection = () => {
  const [selected, setSelected] = useState<typeof images[0] | null>(null);

  return (
    <>
      <section id="events" className="py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container-narrow mx-auto px-6 lg:px-8">

          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase">
                Gallery
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Events & <span className="text-primary">Workshops</span>
              </h2>

              <p className="text-muted-foreground">
                Highlights from wellness sessions, hospital collaborations,
                and transformative seminars.
              </p>
            </div>
          </ScrollReveal>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-6">

            {/* Large Feature */}
            <ScrollReveal className="col-span-2 row-span-2">
              <div
                onClick={() => setSelected(images[0])}
                className="relative h-full w-full rounded-3xl overflow-hidden cursor-pointer group shadow-xl"
              >
                <img
                  src={images[0].src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-6 left-6 text-white font-semibold text-lg">
                  {images[0].caption}
                </p>
              </div>
            </ScrollReveal>

            {/* Medium Top Right */}
            <ScrollReveal className="col-span-2 row-span-1">
              <div
                onClick={() => setSelected(images[1])}
                className="relative h-full w-full rounded-3xl overflow-hidden cursor-pointer group shadow-lg"
              >
                <img
                  src={images[1].src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white text-sm font-medium">
                  {images[1].caption}
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
                <p className="absolute bottom-4 left-4 text-white text-sm font-medium">
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
                <p className="absolute bottom-4 left-4 text-white text-sm font-medium">
                  {images[3].caption}
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

export default EventsSection;
