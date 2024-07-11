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
            <h1 className="text-2xl font-semibold text-gold-700 uppercase lg:text-7xl">
              Make sure to use our available welcome offers when you register.
            </h1>
            <button className="flex items-center gap-2 p-3 bg-black text-white border-none  text-lg font-bold cursor-pointer hover:bg-white hover:text-black">
              Register Now <FaArrowRightLong />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
