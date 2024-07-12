import Link from "next/link";

const imgArr = [
  {
    linkCss: "",
    img: "/pokerimages2/gallaryimg1.jpg",
    text: "High Stakes",
  },
  {
    linkCss: "md:col-span-2",
    img: "/pokerimages2/gallaryimg2.jpg",
    text: "Royal Flush",
  },
  {
    linkCss: "md:col-span-2",
    img: "/pokerimages2/gallaryimg3.jpg",
    text: "Poker Night",
  },
  {
    linkCss: "",
    img: "/pokerimages2/gallaryimg4.jpg",
    text: "Winning Hand",
  },
];

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto h-screen h-full py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {imgArr.map((item, index) => (
            <Link
              key={index}
              href="#"
              className={`group relative flex h-48 items-end overflow-hidden bg-black shadow-lg md:h-80 ${item.linkCss}`}
            >
              <picture>
                <img
                  src={item.img}
                  loading="lazy"
                  alt={`Photo representing ${item.text}`}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </picture>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                {item.text}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
