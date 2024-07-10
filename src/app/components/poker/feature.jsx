import { RiSettings2Fill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { PiMedalFill } from "react-icons/pi";
import { MdOutlineElectricBolt } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
export default function Feature() {
  return (
    <>
      <div className="max-w-8xl mx-auto sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 to-violet-600">
        <div className="text-center py-12  px-6 flex flex-col gap-8 justify-center items-center">
          <h1 className="font-bebas-neue uppercase text-3xl sm:text-3xl font-black flex flex-col leading-none text-white w-[45%]">
            Unmatched Poker Features to Elevate Experience
          </h1>
          <p className="text-lg font-semibold sm:text-base text-white/30 ">
            Discover unique features that set Poker Paradise apart, delivering
            <br /> unmatched gaming experience for all players.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 mx-8 ">
          <div className="col-span-4 ">
            <div className="overflow-hidden rounded-xl bg-white text-slate-500 shadow-md shadow-slate-200 transition delay-150 duration-300 ease-in-out h-72 flex flex-col justify-center group hover:bg-green-600 hover:text-white">
              <div className="flex flex-col gap-8 px-6 h-56 transition duration-300 ease-in-out group-hover:bg-transparent group-hover:text-white">
                <RiSettings2Fill className="text-3xl text-green-600 group-hover:text-white" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl sm:text-xl font-black text-black group-hover:text-white">
                    Variety of Games
                  </h1>
                  <p className="text-lg font-semibold leading sm:text-base text-black/70 group-hover:text-white/70 w-3/4">
                    Explore diverse poker games catering to every skill level.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="overflow-hidden rounded-xl bg-white text-slate-500 shadow-md shadow-slate-200 transition delay-150 duration-300 ease-in-out h-72 flex flex-col justify-center group hover:bg-green-600 hover:text-white">
              <div className="flex flex-col gap-8 px-6 h-56 transition duration-300 ease-in-out group-hover:bg-transparent group-hover:text-white">
                <FaRegHeart className="text-3xl text-green-600 group-hover:text-white" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl sm:text-xl font-black text-black group-hover:text-white">
                    Live Dealers
                  </h1>
                  <p className="text-lg font-semibold leading sm:text-base text-black/70 group-hover:text-white/70 w-3/4">
                    Experience the thrill of live dealer games.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 ">
            <div className="overflow-hidden rounded-xl bg-white text-slate-500 shadow-md shadow-slate-200 transition delay-150 duration-300 ease-in-out h-72 flex flex-col justify-center group hover:bg-green-600 hover:text-white">
              <div className="flex flex-col gap-8 px-6 h-56 transition duration-300 ease-in-out group-hover:bg-transparent group-hover:text-white">
                <FaThumbsUp className="text-3xl text-green-600 group-hover:text-white" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl sm:text-xl font-black text-black group-hover:text-white">
                    Access Online Poker
                  </h1>
                  <p className="text-lg font-semibold leading sm:text-base text-black/70 group-hover:text-white/70 w-3/4">
                    Dive into thrilling poker games and tournaments at Poker
                    Paradise, perfect for any skill level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 py-8 mx-8">
          <div className="col-span-4">
            <div className="overflow-hidden rounded-xl bg-white text-slate-500 shadow-md shadow-slate-200 transition delay-150 duration-300 ease-in-out h-72 flex flex-col justify-center group hover:bg-green-600 hover:text-white">
              <div className="flex flex-col gap-8 px-6 h-56 transition duration-300 ease-in-out group-hover:bg-transparent group-hover:text-white">
                <PiMedalFill className="text-3xl text-green-600 group-hover:text-white" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl sm:text-xl font-black text-black group-hover:text-white">
                    Exclusive Bonuses
                  </h1>
                  <p className="text-lg font-semibold leading sm:text-base text-black/70 group-hover:text-white/70 w-3/4">
                    Claim exciting bonuses and exclusive rewards.
                  </p>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="col-span-4">
            <div className="overflow-hidden rounded-xl bg-white text-slate-500 shadow-md shadow-slate-200 transition delay-150 duration-300 ease-in-out h-72 flex flex-col justify-center group hover:bg-green-600 hover:text-white">
              <div className="flex flex-col gap-8 px-6 h-56 transition duration-300 ease-in-out group-hover:bg-transparent group-hover:text-white">
                <MdOutlineElectricBolt className="text-3xl text-green-600 group-hover:text-white" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl sm:text-xl font-black text-black group-hover:text-white">
                    Player Support
                  </h1>
                  <p className="text-lg font-semibold leading sm:text-base text-black/70 group-hover:text-white/70 w-3/4">
                    Get 24/7 assistance from our dedicated support team.
                  </p>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="col-span-4 ">
            <div className="overflow-hidden rounded-xl bg-white text-slate-500 shadow-md shadow-slate-200 transition delay-150 duration-300 ease-in-out h-72 flex flex-col justify-center group hover:bg-green-600 hover:text-white">
              <div className="flex flex-col gap-8 px-6 h-56 transition duration-300 ease-in-out group-hover:bg-transparent group-hover:text-white">
                <MdOutlineDone className="text-3xl text-green-600 group-hover:text-white" />
                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl sm:text-xl font-black text-black group-hover:text-white">
                    Secure Payments
                  </h1>
                  <p className="text-lg font-semibold leading sm:text-base text-black/70 group-hover:text-white/70 w-3/4">
                    Enjoy fast and secure transaction processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

//     <section className="text-gray-400 bg-white">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
//       <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-black w-96">  Unmatched Poker Features to Elevate Experience</h1>
//       <p className="lg:w-1/2 w-1/3 leading-relaxed text-black/80 font-semibold "> Discover unique features that set Poker Paradise apart, delivering
//            unmatched gaming experience for all players..</p>
//     </div>
//     <div className="flex flex-wrap -m-4">
//       <div className="xl:w-1/3 md:w-1/2 p-4">
//         <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
//           <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
//             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
//               <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
//             </svg>
//           </div>
//           <h2 className="text-lg text-white font-medium title-font mb-2">Shooting Stars</h2>
//           <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
//         </div>
//       </div>
//       <div className="xl:w-1/3 md:w-1/2 p-4">
//         <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
//           <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
//             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
//               <circle cx="6" cy="6" r="3"></circle>
//               <circle cx="6" cy="18" r="3"></circle>
//               <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
//             </svg>
//           </div>
//           <h2 className="text-lg text-white font-medium title-font mb-2">The Catalyzer</h2>
//           <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
//         </div>
//       </div>
//       <div className="xl:w-1/3 md:w-1/2 p-4">
//         <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
//           <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
//             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
//               <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
//               <circle cx="12" cy="7" r="4"></circle>
//             </svg>
//           </div>
//           <h2 className="text-lg text-white font-medium title-font mb-2">Neptune</h2>
//           <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
//         </div>
//       </div>
//       <div className="xl:w-1/3 md:w-1/2 p-4">
//         <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
//           <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
//             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
//               <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
//             </svg>
//           </div>
//           <h2 className="text-lg text-white font-medium title-font mb-2">Melanchole</h2>
//           <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
//         </div>
//       </div>
//       <div className="xl:w-1/3 md:w-1/2 p-4">
//         <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
//           <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
//             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
//               <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
//             </svg>
//           </div>
//           <h2 className="text-lg text-white font-medium title-font mb-2">Bunker</h2>
//           <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
//         </div>
//       </div>
//       <div className="xl:w-1/3 md:w-1/2 p-4">
//         <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
//           <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
//             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
//               <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
//             </svg>
//           </div>
//           <h2 className="text-lg text-white font-medium title-font mb-2">Ramona Falls</h2>
//           <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
//         </div>
//       </div>
//     </div>
   
//   </div>
// </section>
  );
}
