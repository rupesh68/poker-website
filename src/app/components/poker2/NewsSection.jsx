import BigImgCard from "./bigimgcard";
import List from "./list";
import ImgWithContent from "./card";
import Heading from "./heading";

const card = [
  {
    id: 1,
    title: "Top Poker Strategies for Winning Big",
    imageUrl: "/pokerimages2/card1.jpg",
  },
  {
    id: 2,
    title: "Upcoming Poker Tournaments You Can't Miss",
    imageUrl: "/pokerimages2/card2.jpg",
  },
];

export default function NewsSection() {
  return (
    <main
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url(/pokerimages2/gallaryi.jpg)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
      <div className="relative max-w-screen-xl mx-auto p-4 sm:p-8 lg:p-12">
        {/* Updated padding for different screen sizes */}
        <Heading
          name="Poker News"
          title="Stay Updated with the Latest Poker Strategies and Tournaments"
        />
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 lg:gap-10">
          {/* Updated gap for different screen sizes */}
          <div className="sm:col-span-6 lg:col-span-4">
            <List />
          </div>

          <div className="sm:col-span-6 lg:col-span-8">
            <BigImgCard />
            <div className="flex flex-col sm:flex-row justify-around gap-4 sm:gap-6 lg:gap-8 mt-4 sm:mt-0">
              {/* Flex column for mobile, row for larger screens */}
              {card.map((item) => (
                <ImgWithContent
                  key={item.id}
                  title={item.title}
                  image={item.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
