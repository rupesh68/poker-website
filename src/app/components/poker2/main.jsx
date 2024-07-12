import Section2 from "./section2";
import HeroVideo from "./herovideo";
import FaqSection from "./FaqSection";
import NewsSection from "./NewsSection";
import ComapnySection from "./ComapnySection";
import GameInfoSection from "./GameInfoSection";
import FeatureSection from "./FeatureSection";
import Gallary2 from "./gallary2";
import GallarySection from "./GallarySection";

export default function Main2() {
  return (
    <>
      <div className="bg-clip-text bg-gradient-to-r from-fuchsia-500 via-zinc-700 to-yellow-500">
        
        <HeroVideo />
        <Section2 />
        <GameInfoSection />
        <Gallary2 />
        <FeatureSection />
        <NewsSection />
        <GallarySection />
        <ComapnySection />
        <FaqSection />
      </div>
    </>
  );
}
