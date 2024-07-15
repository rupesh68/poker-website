import Link from "next/link";

const images = [
  "/pokerimages2/gallary2img5.jpg",
  "/pokerimages2/gallary2img2.jpg",
  "/pokerimages2/gallary2img3.jpg",
  "/pokerimages2/gallary2img1.jpg",
  "/pokerimages2/gallary2img4.jpg",
];

export default function Gallary2() {
  return (
    <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
        <div className="col-span-2 sm:col-span-1 md:col-span-2  h-auto md:h-full flex flex-col">
          <Link
            href=""
            className="group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40 flex-grow"
          >
            <picture>
              <img
                src={images[0]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </picture>

            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
              Casino
            </h3>
          </Link>
        </div>

        <div className="col-span-2 sm:col-span-1 md:col-span-2">
          <Link
            href=""
            className="group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40 mb-4"
          >
            <picture>
              <img
                src={images[1]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
              Cards
            </h3>
          </Link>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
            <Link
              href=""
              className="group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40"
            >
              <picture>
                {" "}
                <img
                  src={images[2]}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                Poker
              </h3>
            </Link>
            <Link
              href=""
              className="group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40"
            >
              <picture>
                <img
                  src={images[3]}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl"></h3>
            </Link>
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1 md:col-span-1 h-auto md:h-full flex flex-col">
          <Link
            href=""
            className="group relative flex flex-col overflow-hidden px-4 pb-4 pt-40 flex-grow"
          >
            <picture>
              <img
                src={images[4]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl"></h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
