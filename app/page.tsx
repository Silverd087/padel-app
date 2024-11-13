// app/page.tsx
export const runtime = "edge";
import { Suspense } from "react";
import Hero from "@/components/sections/Hero";
import CourtCarousel from "@/components/sections/CourtCarousel";
import Events from "@/components/sections/Events";
import About from "@/components/sections/About";
import Membership from "@/components/sections/Membership";
import Contact from "@/components/sections/Contact";
import BookingSection from "@/components/sections/BookingSection";
import { LoadingSpinner } from "../components/ui/loading-spinner";

export default function Home() {
  return (
    <main className="flex-1 mx-auto w-full max-w-[1920px]">
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
        <CourtCarousel />
        <Events />
        <About />
        <section id="subscription">
          <Membership />
        </section>
        <BookingSection />
        <Contact />
      </Suspense>
    </main>
  );
}
