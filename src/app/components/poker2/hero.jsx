export default function Hero() {
  return (
    <>
      <div className="h-screen text-white text-center grid bg-cover bg-[url('/pokerimages2/hero.jpg')] animate-zoom-in-out relative">
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        {/* Content */}
        <div className="col-start-1 row-start-1 mx-auto my-auto animate-fade-in-out relative z-10">
          <h1 className="font-bold text-2xl">Hero Message</h1>
          <p>Something interesting about hero message</p>
        </div>
        {/* Shadow effect */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black"></div>
      </div>
    </>
  );
}
