import { FaLongArrowAltRight } from "react-icons/fa";

export default function Banner() {
  return (
    <>
      <section className="relative w-full h-[80vh] flex flex-col items-center justify-center text-center bg-muted overflow-hidden">
        <video
          src="/pokervideo/Mesmerizing Poker Ambiance_ Dark & Intense (online-video-cutter.com).mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 blur-sm"
        ></video>
        <div className="relative z-10 max-w-3xl px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Unlock the Power of the Web
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Discover our suite of tools to build, deploy, and scale your web
            applications with ease.
          </p>
          <form className="flex gap-2 max-w-md mx-auto justify-center">
            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                autocomplete="email"
                aria-label="Email address"
                className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
              />
              <div className="absolute inset-y-1 right-1 flex justify-end">
                <button
                  type="submit"
                  aria-label="Submit"
                  className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
                >
                  <FaLongArrowAltRight className="w-4" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
