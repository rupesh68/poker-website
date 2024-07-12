import BigCard from "./bigcard";
import ImgWithContent from "./card";
import Heading from "./heading";

const card = [
  {
    id: 1,
    title: "Top Strategies for Winning Big in Online Poker",
    imageUrl: "/pokerimages2/card1.jpg",
    content:
      "Learn effective strategies and tips to enhance your online poker game.",
  },
  {
    id: 2,
    title: "Upcoming Online Poker Tournaments You Can't Miss",
    imageUrl: "/pokerimages2/card2.jpg",
    content:
      "Explore the latest tournaments and competitions in the world of online poker.",
  },
  {
    id: 3,
    title: "Introduction to Online Poker: Getting Started",
    imageUrl: "/pokerimages2/card1.jpg",
    content:
      "New to online poker? Discover how to get started and enjoy the game.",
  },
];

export default function GameInfoSection() {
  return (
    <main className="max-w-screen-xl mx-auto sm:p-0 lg:p-5 sm:p-10 md:p-16">
      <Heading
        name="Elevate Your Online Poker Experience"
        title="Discover the best of online poker with Natural8 India, featuring exciting games, special app features, game-enhancing tools, and more."
      />
      <BigCard />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
        {card.map((item) => (
          <ImgWithContent
            key={item.id}
            title={item.title}
            image={item.imageUrl}
            content={item.content}
          />
        ))}
      </div>
    </main>
  );
}
