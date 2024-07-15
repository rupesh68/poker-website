import Link from "next/link";

const sponser = [

  "/pokercompanyimg/companyimg4.webp",
  "/pokercompanyimg/companyimg4.webp",

  "/pokercompanyimg/companyimg4.webp",

  "/pokercompanyimg/companyimg4.webp",

  "/pokercompanyimg/companyimg4.webp",
  "/pokercompanyimg/companyimg4.webp",

  "/pokercompanyimg/companyimg4.webp",
  "/pokercompanyimg/companyimg4.webp",


];

export default function Company() {
  return (
    <section className=" max-w-7xl mx-auto flex justify-center items-center p-8 ">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16 ">
        <div className="grid grid-cols-2 gap-8 text-white sm:gap-12 sm:grid-cols-3 lg:grid-cols-4 ">
          {sponser.map((img, index) => (
            <Link
              key={index}
              href=""
              className="flex items-center lg:justify-center "
            >
              <picture>
                <img src={img} alt="img" className="" />
              </picture>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
