import Link from "next/link";

const PokerNewsList = [
  {
    head: "July 12",
    title: "World Series of Poker 2024: Highlights and Key Moments",
    imageUrl: "/pokerimages2/card1.jpg",
  },
  {
    head: "July 11",
    title: "Top 10 Poker Hands of the Week: Expert Analysis",
    imageUrl: "/pokerimages2/cardimg1.jpg",
  },
  {
    head: "July 10",
    title: "How to Master Bluffing: Tips from Professional Poker Players",
    imageUrl: "/pokerimages2/cardimg2.jpg",
  },
  {
    head: "July 9",
    title: "Online Poker Tournaments: Upcoming Events and Strategies",
    imageUrl: "/pokerimages2/card1.jpg",
  },
  {
    head: "July 8",
    title: "The Evolution of Poker: From Saloon Games to Global Phenomenon",
    imageUrl: "/pokerimages2/cardimg4.jpg",
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
