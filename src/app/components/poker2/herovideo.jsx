import { FaArrowRightLong } from "react-icons/fa6";

export default function BgVideo() {
  return (
    <>
      <main className="relative text-white text-center pb-18">
        <div className="relative h-screen">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/pokervideo/Mesmerizing Poker Ambiance_ Dark & Intense (online-video-cutter.com).mp4"
            autoPlay
            loop
            muted
          />
          <div
            className="absolute inset-0 pointer-events-none text-center flex flex-col gap-4 justify-center items-center"
            style={{
              background:
                "linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
            }}
          >
            <h1 className="text-2xl font-semibold text-yellow-400  lg:text-7xl">
            Your Online Poker Journey Starts Here
            </h1>
            <p className="text-2xl font-semibold text-yellow-200  lg:text-3xl">Where the Thrill of Poker Meets the Heart of India</p>
            <button className="relative px-8 py-2  bg-black isolation-auto z-10 border-none
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-lime-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 cursor-pointer">Register Now</button>
          </div>
        </div>
      </main>
    </>
  );
}
