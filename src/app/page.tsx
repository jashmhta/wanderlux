import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Intro } from "@/components/Intro";
import { Destinations } from "@/components/Destinations";
import { Packages } from "@/components/Packages";
import { Experiences } from "@/components/Experiences";
import { VideoFeature } from "@/components/VideoFeature";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Marquee />
      <Intro />
      <Destinations />
      <Packages />
      <Experiences />
      <VideoFeature />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
