export default function BigImgCard() {
  return (
    <main className="max-w-xl  sm:max-w-3xl  h-[423px] mx-auto bg-zinc-900">
      <div className="relative h-[423px] overflow-hidden bg-cover bg-no-repeat">
        <picture>
          <img
            src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
            className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"
            alt="Louvre"
          />
        </picture>
      </div>
    </main>
  );
}
