import Link from "next/link";

export default function Card({ image, title, id }) {
  return (
    <>
      <div key={id} className="max-w-xs mx-auto sm:max-w-full">
        {/* Center on mobile with max width */}
        <Link href="#">
          <div className="h-40 sm:h-48 lg:h-56 relative bg-cover text-center overflow-hidden bg-no-repeat">
            {/* Responsive height */}
            <picture>
              <img
                src={image}
                className="transition duration-300 ease-in-out hover:scale-110"
                alt="Poker image"
              />
            </picture>
          </div>
        </Link>
        <div className="text-black bg-white font-semibold text-md p-2 pb-16 hover:text-black/80 transition duration-500 ease-in-out">
          {/* Margin and padding for spacing */}
          <h2>{title}</h2>
        </div>
      </div>
    </>
  );
}
