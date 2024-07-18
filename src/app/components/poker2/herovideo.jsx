import { FaArrowRightLong } from "react-icons/fa6";

export default function HeroVideo() {
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
            <h1 className="text-6xl font-manrope font-black leading-snug text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">
              Your Online Poker Journey Starts Here
            </h1>
            <p className="text-2xl font-manrope font-black leading-snug text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">
              Where the Thrill of Poker Meets the Heart of India
            </p>
            <button className="m-4 p-0.5 rounded-full from-indigo-400 via-pink-500 to-purple-500 bg-gradient-to-r"></button>
          </div>
        </div>
      </main>
    </>
  );
}
