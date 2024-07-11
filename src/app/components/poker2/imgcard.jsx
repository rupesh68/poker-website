import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const images = [
  "/pokerimages2/cardimg1.jpg",
  "/pokerimages2/cardimg2.jpg",
  "/pokerimages2/cardimg3.jpg",
  "/pokerimages2/cardimg4.jpg",
  "/pokerimages2/cardimg5.jpg",
];
export default function Card() {
  useEffect(() => {
    const slider = new Glide(".glide-03", {
      type: "carousel",
      focusAt: "center",
      perView: 5,
      animationDuration: 700,
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 2,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="pb-10 bg-gradient-to-b from-[#545454] to-[#000000] ">
      <main className="max-w-4xl mx-auto  mt-[-40px] ">
        <div className="glide-03 relative w-full">
          <div className="overflow-hidden" data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
              {images.map((image, index) => (
                <li key={index}>
                  <div className="relative max-w-xs h-72 overflow-hidden bg-cover bg-no-repeat bg-black/100">
                    <picture>
                      <img
                        src={image}
                        className="max-w-xs h-96 transition duration-300 ease-in-out hover:scale-110"
                        style={{
                          opacity: 0.8,
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                        }}
                        alt="Louvre"
                      />
                    </picture>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/*    <!-- Controls --> */}
          <div
            className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
            data-glide-el="controls"
          >
            <button data-glide-dir="<" aria-label="prev slide">
              <FaChevronLeft className="h-8 w-8 text-white" />
            </button>
            <button data-glide-dir=">" aria-label="next slide">
              <FaChevronRight className="h-8 w-8 text-white" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
