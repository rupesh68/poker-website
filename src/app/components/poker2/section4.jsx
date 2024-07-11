import BigImgCard from "./bigimgcard";
import List from "./list";
import ImgWithContent from "./card";
import Heading from "./heading";
const card = [
  {
    id: 1,
    title: "Trump Steps Back Into Coronavirus Spotlight",
    imageUrl: "/pokerimages2/card1.jpg",
  },
  {
    id: 2,
    title: "Trump Steps Back Into Coronavirus Spotlight",
    imageUrl: "/pokerimages2/card2.jpg",
  },
];
export default function Section4() {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto sm:p-0 lg:p-5 sm:p-10 md:p-16 relative">
        <Heading
          name="Poker News"
          title="Dive into the latest in technology with our insightful blog posts."
        />
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-10">
          <div className="sm:col-span-6 lg:col-span-4">
            <List />
          </div>

          <div className="sm:col-span-6 lg:col-span-8">
            <BigImgCard />

            <div className="sm:col-span-12 lg:col-span-4 flex lg:p-8 justify-around ">
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