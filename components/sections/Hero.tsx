// components/sections/Hero.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full flex justify-center items-center flex-col py-12 md:py-24 lg:py-32 xl:py-48 bg-[#4169E1]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Welcome to Euphoria Club
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
              Experience the thrill of padel in our state-of-the-art facilities.
              Book your court today!
            </p>
          </div>
          <div className="space-x-4">
            <Link href="#booking">
              <Button
                variant="secondary"
                className="bg-[#E17041] text-white hover:bg-[#E17041]/90"
              >
                Book a Court
              </Button>
            </Link>
            <Button
              variant="outline"
              className="bg-white text-[#4169E1] hover:bg-white/90"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
