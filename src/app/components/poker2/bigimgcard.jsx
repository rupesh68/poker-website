import Temp from "./temp";

const imgandvideo = [
  " /pokervideo/Mesmerizing Poker Ambiance_ Dark & Intense (online-video-cutter.com).mp4",
  "/pokerimages2/gallaryimg1.jpg/",
];

export default function BigImgCard() {
  return (
    <div className="relative h-72 overflow-hidden bg-cover bg-no-repeat">

      {
        imgandvideo.map((item,index)=>(
          <Temp key={index} mediaSrc={item} cls={"w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"}/>

        ))
      }

      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">
        <h2 className="text-lg font-bold">Poker Strategies</h2>
        <p className="text-sm">
          Dive into the world of poker with expert strategies, tips, and
          insights to up your game. Whether you are a beginner or a pro, stay
          ahead of the competition with our in-depth guides and articles.
        </p>
        
      </div>
    </div>
  );
}
