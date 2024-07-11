import Link from "next/link";

export default function Gallary() {
  return (
    <>
      <div className=" max-w-7xl mx-auto h-screen h-full py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <Link
              href="#"
              className="group relative flex h-48 items-end overflow-hidden bg-blackshadow-lg md:h-80"
            >
              <picture>
                <img
                  src="/pokerimages2/gallaryimg1.jpg"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </picture>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                VR
              </span>
            </Link>

            <Link
              href="#"
              className="group relative flex h-48 items-end overflow-hidden bg-blackshadow-lg md:col-span-2 md:h-80"
            >
              <picture>
                <img
                  src="/pokerimages2/gallaryimg2.jpg"
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </picture>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Tech
              </span>
            </Link>

            <Link
              href="#"
              className="group relative flex h-48 items-end overflow-hidden bg-blackshadow-lg md:col-span-2 md:h-80"
            >
              <picture>
                <img
                  src="/pokerimages2/gallaryimg3.jpg"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </picture>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Dev
              </span>
            </Link>

            <Link
              href="#"
              className="group relative flex h-48 items-end overflow-hidden bg-blackshadow-lg md:h-80"
            >
              <picture>
                <img
                  src="/pokerimages2/gallaryimg4.jpg"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </picture>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Retro
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
