import ImgAndSideContent from "./bigcard";
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
  {
    id: 3,
    title: "Trump Steps Back Into Coronavirus Spotlight",
    imageUrl: "/pokerimages2/card1.jpg",
  },
];

export default function Section7() {
  return (
    <main className="max-w-screen-xl mx-auto sm:p-0 lg:p-5 sm:p-10 md:p-16">
      <Heading
        name="Frequently Asked Questions"
        title="Frequently asked questions about poker."
      />
      <ImgAndSideContent />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
        {card.map((item) => (
          <ImgWithContent
            key={item.id}
            title={item.title}
            image={item.imageUrl}
          />
        ))}
      </div>
    </main>
  );
}
