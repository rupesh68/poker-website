import Link from "next/link";

export default function ImgWithContent({ image, title, id }) {
  return (
    <>
      <div key={id}>
        <Link href="#">
          <div className="h-40 max-w-xs  relative bg-cover text-center overflow-hidden bg-no-repeat ">
            <picture>
              <img
                src={image}
                className=" transition duration-300 ease-in-out hover:scale-110"
                alt="Louvre"
              />
            </picture>
          </div>
        </Link>
        <div className="max-w-xs text-black bg-white  font-semibold text-md pb-12 hover:text-black/80 transition duration-500 ease-in-out">
          <h2> {title}</h2>
        </div>
      </div>
    </>
  );
}
