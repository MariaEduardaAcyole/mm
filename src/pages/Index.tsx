import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TimelineSection from "../components/TimelineSection";
import GallerySection from "../components/GallerySection";
import MusicSection from "../components/MusicSection";
import CounterSection from "../components/CounterSection";
import MessageSection from "../components/MessageSection";
import Footer from "../components/Footer";
import ButtonContrato from "../components/buttonContrato";
import WordCloudSection from "../components/WordCloudSection";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TimelineSection />
      <GallerySection />
      <MusicSection />
      <CounterSection />
      <ButtonContrato />
      <MessageSection />
      <WordCloudSection/>
      <Footer />

    </main>
  );
};

export default Index;
