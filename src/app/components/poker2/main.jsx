import Section2 from "./section2";
import HeroVideo from "./herovideo";
import FaqSection from "./FaqSection";
import NewsSection from "./NewsSection";
import ComapnySection from "./ComapnySection";
import GameInfoSection from "./GameInfoSection";
import FeatureSection from "./FeatureSection";
import Gallary2 from "./gallary2";
import GallarySection from "./GallarySection";
import ImgDance from "./imgDance";
import Banner from "./banner";
import Footer from "./footer";

export default function Main2() {
  return (
    <>
      <div className="bg-gradient-to-r from-violet-800 via-zinc-900 to-yellow-400">
        
        <HeroVideo />
        <Section2 />
        <GameInfoSection />
        <Gallary2 />
        <FeatureSection />
        <NewsSection />
        <GallarySection />
        <ComapnySection />
        <FaqSection /> 
        <ImgDance/>
        {/* <Banner/> */}
        <Footer/>
      </div>
    </>
  );
}
