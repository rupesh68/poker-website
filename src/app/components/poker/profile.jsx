import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Link from "next/link";

export default function Profile() {
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
          perView: 4,
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
    // <>
    //   <div className="glide-01 relative max-w-7xl bg-zinc-900 mx-auto ">
    //     <div data-glide-el="track" className="container">
    //       <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 pb-12 mt-20">
    //         <li>
    //           <div className="">
    //             <div className="h-full overflow-hidden rounded bg-white text-slate-500 shadow-2xl shadow-slate-200">
    //               <div className="relative">
    //                 <div className="relative group  overflow-hidden bg-black m-auto">
    //                   <picture>
    //                     <img
    //                       className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
    //                       src="/pokerimages/pexels-aperture-pro-2032212-3678384.jpg"
    //                       alt="img"
    //                     />
    //                   </picture>
    //                   <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
    //                   <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
    //                     <div className="absolute w-full flex place-content-center">
    //                       <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">
    //                         Team work
    //                       </p>
    //                     </div>
    //                     <div className="absolute w-full flex place-content-center mt-20">
    //                       <p className="font-sans text-center w-4/5 text-white mt-5">
    //                         Collaborative effort of a group to achieve a common
    //                         goal the most effective and efficient way!
    //                       </p>
    //                     </div>
    //                     <button className="absolute left-[30%] bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48">
    //                       Contact Us
    //                     </button>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             {/*                    <!-- End Testimonial --> */}
    //           </div>
    //         </li>

    //       </ul>
    //     </div>
    //     {/*    <!-- Indicators --> */}
    //     <div
    //       className="-mt-6 flex w-full items-center justify-center gap-2"
    //       data-glide-el="controls[nav]"
    //     >
    //       <button
    //         className="group p-4"
    //         data-glide-dir="=0"
    //         aria-label="goto slide 1"
    //       >
    //         <span className="block h-2 w-2 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
    //       </button>
    //       <button
    //         className="group p-4"
    //         data-glide-dir="=1"
    //         aria-label="goto slide 2"
    //       >
    //         <span className="block h-2 w-2 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
    //       </button>
    //       <button
    //         className="group p-4"
    //         data-glide-dir="=2"
    //         aria-label="goto slide 3"
    //       >
    //         <span className="block h-2 w-2 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
    //       </button>
    //     </div>
    //   </div>
    //   {/*<!-- End Testimonial carousel --> */}
    // </>

    // <>
    //   <div className="glide-08  max-w-7xl mx-auto">
    //     <div data-glide-el="track" className=" max-w-7xl mx-auto">
    //       <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex overflow-hidden p-0 pb-12">
    //         <li>
    //           <div className="h-full ">
    //             <div className="h-full overflow-hidden rounded bg-white text-slate-500 shadow-2xl shadow-slate-200">
    //               <div className="relative">
    //                 <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
    //                   <div className="p-6">
    //                     <header className="mb-4 flex gap-4">
    //                       <Link
    //                         href="#"
    //                         className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
    //                       >
    //                         <picture>
    //                           <img
    //                             src="https://i.pravatar.cc/48?img=25"
    //                             alt="user name"
    //                             title="user name"
    //                             width="48"
    //                             height="48"
    //                             className=" rounded-full"
    //                           />
    //                         </picture>
    //                       </Link>
    //                       <div>
    //                         <h3 className="text-xl font-medium text-slate-700">
    //                           In the urban Jungle
    //                         </h3>
    //                         <p className="text-sm text-slate-400">
    //                           {" "}
    //                           By Mary Jay, jun 3 2023
    //                         </p>
    //                       </div>
    //                     </header>
    //                     <p>
    //                       Day to day life operates outside, so get ready to see
    //                       the beach become the living room, and the street the
    //                       kitchen. A simple, yet beautiful, way of life that
    //                       explains the sunny outlook.
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>

    //     <div
    //       className="-mt-6 flex items-center justify-center gap-2"
    //       data-glide-el="controls[nav]"
    //     >
    //       <button
    //         className="group p-4"
    //         data-glide-dir="=0"
    //         aria-label="goto slide 1"
    //       >
    //         <span className="block h-2 w-2 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
    //       </button>
    //       <button
    //         className="group p-4"
    //         data-glide-dir="=1"
    //         aria-label="goto slide 2"
    //       >
    //         <span className="block h-2 w-2 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
    //       </button>
    //       <button
    //         className="group p-4"
    //         data-glide-dir="=2"
    //         aria-label="goto slide 3"
    //       >
    //         <span className="block h-2 w-2 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
    //       </button>
    //     </div>
    //   </div>
    // </>

    // <main className=" bg-zinc-900 max-w-7xl mx-auto">
    //   <div className="glide-01 relative  ">
    //     {/*    <!-- Slides --> */}
    //     <div className="overflow-hidden container" data-glide-el="track">
    //       <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 pb-12 mt-20">
    //         <li>
    //           <div className="">
    //             <div className="h-full overflow-hidden rounded bg-white text-slate-500 shadow-2xl shadow-slate-200">
    //               <div className="relative">
    //                 <div className="relative group  overflow-hidden bg-black m-auto">
    //                   <picture>
    //                     <img
    //                       className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
    //                       src="/pokerimages/pexels-aperture-pro-2032212-3678384.jpg"
    //                       alt="img"
    //                     />
    //                   </picture>
    //                   <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
    //                   <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
    //                     <div className="absolute w-full flex place-content-center">
    //                       <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white mt-10">
    //                         Team work
    //                       </p>
    //                     </div>
    //                     <div className="absolute w-full flex place-content-center mt-20">
    //                       <p className="font-sans text-center w-4/5 text-white mt-5">
    //                         Collaborative effort of a group to achieve a common
    //                         goal the most effective and efficient way!
    //                       </p>
    //                     </div>
    //                     <button className="absolute left-[30%] bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48">
    //                       Contact Us
    //                     </button>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             {/*                    <!-- End Testimonial --> */}
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </main>
    <>
      <main className="  max-w-7xl mx-auto">
        <div className="glide-01 relative  ">
          {/*    <!-- Slides --> */}
          <div className="overflow-hidden " data-glide-el="track">
            <ul className=" p-4 whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 ">
              <li className="card group perspective-1000 w-96 h-96">
                <div className="card-inner relative w-full h-full transform-style-preserve-3d transition-transform duration-1000 group-hover:rotate-y-180">
                  <div className="card-front absolute w-full h-full flex items-center justify-center  rounded-lg backface-hidden">
                    <picture className="card-front absolute w-full h-full flex items-center justify-center  rounded-lg ">
                      <img
                        src="/pokerimages/pexels-aperture-pro-2032212-3678384.jpg"
                        alt=""
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </picture>
                  </div>

                  <div className="card-back absolute w-full h-full text-black flex items-center justify-center bg-white rounded-lg text-2xl backface-hidden transform rotate-y-180">
                    <div className="">
                      <p className="capitalize font-serif font-bold text-xl">
                        {" "}
                        Team work
                      </p>
                      <div className="">
                        <p className="">
                          Collaborative effort of a group to achieve a common
                          goal the most effective and efficient way!
                        </p>
                      </div>
                      <button
                        className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
                border-blue-600
                      border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                   active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                      >
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="card group perspective-1000 w-96 h-96">
                <div className="card-inner relative w-full h-full transform-style-preserve-3d transition-transform duration-1000 group-hover:rotate-y-180">
                  <div className="card-front absolute w-full h-full flex items-center justify-center  rounded-lg backface-hidden">
                    <picture className="card-front absolute w-full h-full flex items-center justify-center  rounded-lg ">
                      <img
                        src="/pokerimages/pexels-aperture-pro-2032212-3678384.jpg"
                        alt=""
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </picture>
                  </div>

                  <div className="card-back absolute w-full h-full text-black flex items-center justify-center bg-white rounded-lg text-2xl backface-hidden transform rotate-y-180">
                    <div className="">
                      <p className="capitalize font-serif font-bold text-xl">
                        {" "}
                        Team work
                      </p>
                      <div className="">
                        <p className="">
                          Collaborative effort of a group to achieve a common
                          goal the most effective and efficient way!
                        </p>
                      </div>
                      <button
                        className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
                border-blue-600
                      border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                   active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                      >
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="card group perspective-1000 w-96 h-96">
                <div className="card-inner relative w-full h-full transform-style-preserve-3d transition-transform duration-1000 group-hover:rotate-y-180">
                  <div className="card-front absolute w-full h-full flex items-center justify-center  rounded-lg backface-hidden">
                    <picture className="card-front absolute w-full h-full flex items-center justify-center  rounded-lg ">
                      <img
                        src="/pokerimages/pexels-aperture-pro-2032212-3678384.jpg"
                        alt=""
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </picture>
                  </div>

                  <div className="card-back absolute w-full h-full text-black flex items-center justify-center bg-white rounded-lg text-2xl backface-hidden transform rotate-y-180">
                    <div className="">
                      <p className="capitalize font-serif font-bold text-xl">
                        {" "}
                        Team work
                      </p>
                      <div className="">
                        <p className="">
                          Collaborative effort of a group to achieve a common
                          goal the most effective and efficient way!
                        </p>
                      </div>
                      <button
                        className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
                border-blue-600
                      border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                   active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                      >
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="card group perspective-1000 w-96 h-96">
                <div className="card-inner relative w-full h-full transform-style-preserve-3d transition-transform duration-1000 group-hover:rotate-y-180">
                  <div className="card-front absolute w-full h-full flex items-center justify-center  rounded-lg backface-hidden">
                    <picture className="card-front absolute w-full h-full flex items-center justify-center  rounded-lg ">
                      <img
                        src="/pokerimages/pexels-aperture-pro-2032212-3678384.jpg"
                        alt=""
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </picture>
                  </div>

                  <div className="card-back absolute w-full h-full text-black flex items-center justify-center bg-white rounded-lg text-2xl backface-hidden transform rotate-y-180">
                    <div className="">
                      <p className="capitalize font-serif font-bold text-xl">
                        {" "}
                        Team work
                      </p>
                      <div className="">
                        <p className="">
                          Collaborative effort of a group to achieve a common
                          goal the most effective and efficient way!
                        </p>
                      </div>
                      <button
                        className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
                border-blue-600
                      border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                   active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                      >
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="card group perspective-1000 w-96 h-96">
                <div className="card-inner relative w-full h-full transform-style-preserve-3d transition-transform duration-1000 group-hover:rotate-y-180">
                  <div className="card-front absolute w-full h-full flex items-center justify-center  rounded-lg backface-hidden">
                    <picture className="card-front absolute w-full h-full flex items-center justify-center  rounded-lg ">
                      <img
                        src="/pokerimages/pexels-aperture-pro-2032212-3678384.jpg"
                        alt=""
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </picture>
                  </div>

                  <div className="card-back absolute w-full h-full text-black flex items-center justify-center bg-white rounded-lg text-2xl backface-hidden transform rotate-y-180">
                    <div className="">
                      <p className="capitalize font-serif font-bold text-xl">
                        {" "}
                        Team work
                      </p>
                      <div className="">
                        <p className="">
                          Collaborative effort of a group to achieve a common
                          goal the most effective and efficient way!
                        </p>
                      </div>
                      <button
                        className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
                border-blue-600
                      border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                   active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                      >
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
