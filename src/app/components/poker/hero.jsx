import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <main className="bg-zinc-900 max-w-7xl mx-auto">
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div className="">
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-teal-accent-400">
                  New Colaboration
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                The quick, brown fox
                <br className="hidden md:block" />
                jumps over{" "}
                <span className="inline-block text-deep-purple-accent-400">
                  a lazy dog
                </span>
              </h2>
              <p className="text-base text-white md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 items-center md:flex-row">
              <button
                className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
                  border-blue-600
                   border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                   active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
              >
                Button
              </button>
              <button
                className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
                border-blue-600
                      border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                   active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
              >
                Button
              </button>
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <picture>
            <img
              className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
              src="/pokerimages/pexels-yanina-91152-297507.jpg"
              alt=""
            />
          </picture>
        </div>
      </div>
    </main>

    // <section class="text-gray-400 bg-gray-900 body-font">
    //   <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    //     <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
    //       <picture>
    //         <img
    //           class="object-cover object-center rounded"
    //           alt="hero"
    //           src="https://dummyimage.com/720x600"
    //         />
    //       </picture>
    //     </div>
    //     <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    //     <di class="flex flex-wrap -m-4 text-center">
    //   <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
    //     <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
    //       <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
    //         <path d="M8 17l4 4 4-4m-4-5v9"></path>
    //         <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
    //       </svg>
    //       <h2 class="title-font font-medium text-3xl text-white">2.7K</h2>
    //       <p class="leading-relaxed">Downloads</p>
    //     </div>
    //   </div>
    //   <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
    //     <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
    //       <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
    //         <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
    //         <circle cx="9" cy="7" r="4"></circle>
    //         <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
    //       </svg>
    //       <h2 class="title-font font-medium text-3xl text-white">1.3K</h2>
    //       <p class="leading-relaxed">Users</p>
    //     </div>
    //   </div>
    //   </di
    //       <div class="flex justify-center">
    //         <button class="bg-white text-black rounded-full text-lg font-semibold px-8 py-4 cursor-pointer transition-all duration-300 ease-in-out border border-black shadow-none hover:transform hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[2px_5px_0_0_black] active:transform active:translate-y-0.5 active:translate-x-0.25 active:shadow-none">
    //           Play Now
    //         </button>
    //         <button class="flex items-center justify-center cursor-pointer font-bold font-sans transition-all duration-200 px-4 py-2 rounded-full bg-transparent border border-transparent text-base  active:scale-95">
    //           <span>Join Now</span>
    //           <FaArrowRight className="ml-2" />
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
