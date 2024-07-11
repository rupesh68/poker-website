import Link from "next/link";

const PokerNewsList = [
  {
    head: "Aug 18",
    title: "Cristiano Ronaldo of Juventus FC looks dejected during the...",
    imageUrl: "/pokerimages2/markus-spiske-QOuHmf0_qqk-unsplash.jpg",
  },
  {
    head: "Aug 18",
    title: "Cristiano Ronaldo of Juventus FC looks dejected during the...",
    imageUrl: "/pokerimages2/markus-spiske-QOuHmf0_qqk-unsplash.jpg",
  },
  {
    head: "Aug 18",
    title: "Cristiano Ronaldo of Juventus FC looks dejected during the...",
    imageUrl: "/pokerimages2/markus-spiske-QOuHmf0_qqk-unsplash.jpg",
  },

  {
    head: "Aug 18",
    title: "Cristiano Ronaldo of Juventus FC looks dejected during the...",
    imageUrl: "/pokerimages2/markus-spiske-QOuHmf0_qqk-unsplash.jpg",
  },
  {
    head: "Aug 18",
    title: "Cristiano Ronaldo of Juventus FC looks dejected during the...",
    imageUrl: "/pokerimages2/markus-spiske-QOuHmf0_qqk-unsplash.jpg",
  },
];

export default function List() {
  return (
    <div>
      {PokerNewsList.map((item, index) => (
        <div key={index} className="flex items-start mb-3 pb-3">
          <Link href="#">
            <div className="inline-block mr-3">
              <div className="w-24 h-24 bg-cover bg-center bg-no-repeat overflow-hidden">
                <picture>
                  <img
                    src={item.imageUrl}
                    alt="img"
                    className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"
                  />
                </picture>
              </div>
            </div>
          </Link>
          <div className="text-lg text-white">
            <p className="text-white text-lg">{item.head}</p>
            <Link href="#">
              <div className="text font-medium hover:text-white/70 leading-none">
                {item.title}
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
