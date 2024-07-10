import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function SlideCard() {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 4,
      autoplay: 3000,
      animationDuration: 700,
      gap: 18,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);
  return (
    <>
    <div className=" mt-44">
    <main className=" mt-[-40px] max-w-7xl mx-auto">
        <div className="glide-01 relative  ">
          {/*    <!-- Slides --> */}
          <div className="overflow-hidden " data-glide-el="track">
            <ul className=" p-4 whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 ">
              <li className="flex justify-center items-center">
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                  <picture>
                    <img
                      src="/pokerimages/pexels-shvetsa-6664189.jpg"
                      alt="Product"
                      className="h-80 w-72 object-cover rounded-t-xl"
                    />
                  </picture>

                  <div className="px-4 py-3 w-72">
                    <p className="text-lg font-bold text-black truncate block capitalize text-center">
                      Product Name
                    </p>

                    <p className="text-lg font-semibold text-black cursor-auto my-3 text-center">
                      $149
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex justify-center items-center">
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                  <picture>
                    <img
                      src="/pokerimages/pexels-shvetsa-6664189.jpg"
                      alt="Product"
                      className="h-80 w-72 object-cover rounded-t-xl"
                    />
                  </picture>

                  <div className="px-4 py-3 w-72">
                    <p className="text-lg font-bold text-black truncate block capitalize text-center">
                      Product Name
                    </p>

                    <p className="text-lg font-semibold text-black cursor-auto my-3 text-center">
                      $149
                    </p>
                  </div>
                </div>
              </li>
              <li className="flex justify-center items-center">
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                  <picture>
                    <img
                      src="/pokerimages/pexels-shvetsa-6664189.jpg"
                      alt="Product"
                      className="h-80 w-72 object-cover rounded-t-xl"
                    />
                  </picture>

                  <div className="px-4 py-3 w-72">
                    <p className="text-lg font-bold text-black truncate block capitalize text-center">
                      Product Name
                    </p>

                    <p className="text-lg font-semibold text-black cursor-auto my-3 text-center">
                      $149
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/*    <!-- Controls --> */}
          <div
            className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
            data-glide-el="controls"
          >
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white bg-white/40 text-white transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
              data-glide-dir="<"
              aria-label="prev slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <title>prev slide</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </button>
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white bg-white/40 text-white transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
              data-glide-dir=">"
              aria-label="next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <title>next slide</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </main>

    </div>
    
    </>
  );
}
