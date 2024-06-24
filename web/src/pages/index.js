// app/page.js

import VideoSection from "../components/VideoSection";
import HeroSection from "@/components/HeroSection";
import IconSection from "@/components/IconSection";
import GridCardSection from "@/components/GridCardSection";
import TwoColumnSection from "@/components/TwoColumnSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IconSection />
      <VideoSection />
      <GridCardSection />
      <TwoColumnSection />
      <ContactSection />
    </>
  );
}
