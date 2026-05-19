import AboutBanner from "../components/about/AboutBanner";
import MeetTheBoard from "../components/about/MeetTheBoard";
import OurStory from "../components/about/OurStory";
import Vision from "../components/about/Vision";
import AboutHero from "../components/about/AboutHero";
import SupportMission from "../components/about/SupportMission";

export default function About() {
  return (
    <main className="bg-[#FAFAFA]">
      <AboutBanner />
      <MeetTheBoard />
      <OurStory />
      <Vision />
      <AboutHero />
      <SupportMission />
    </main>
  );
}
