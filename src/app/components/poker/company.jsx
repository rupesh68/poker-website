import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function Company() {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 5,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 6,
        },
        640: {
          perView: 2,
          gap: 36,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <main className=" max-w-7xl mx-auto">
      <div className="glide-01 relative  ">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden " data-glide-el="track">
          <ul className=" p-4 whitespace-no-wrap flex-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 ">
            <li>
              <picture>
                <img
                  src="/pokercompanyimg/sig.webp"
                  className="m-auto h-20 max-h-full max-w-7xl mx-auto"
                  alt="image"
                />
              </picture>
            </li>
            <li>
              <picture>
                <img
                  src="/pokercompanyimg/drw.webp"
                  className="m-auto h-20 max-h-full w-auto max-w-7xl mx-auto"
                  alt="image"
                />
              </picture>
            </li>
            <li>
              <picture>
                <img
                  src="/pokercompanyimg/janestreet.webp"
                  className="m-auto h-20 max-h-full w-auto max-w-7xl mx-auto"
                  alt="image"
                />
              </picture>
            </li>
            <li>
              <picture>
                <img
                  src="/pokercompanyimg/hrt.webp"
                  className="m-auto h-20 max-h-full w-auto max-w-7xl mx-auto"
                  alt="image"
                />
              </picture>
            </li>
            <li>
              <picture>
                <img
                  src="/pokercompanyimg/imc.webp"
                  className="m-auto h-20 max-h-full w-auto max-w-7xl mx-auto"
                  alt="image"
                />
              </picture>
            </li>

            <li>
              <picture>
                <img
                  src="/pokercompanyimg/jumptrading.webp"
                  className="m-auto h-20 max-h-full w-auto max-w-7xl mx-auto"
                  alt="image"
                />
              </picture>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
