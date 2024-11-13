// components/sections/About.tsx
import AnimatedImage from "../ui/AnimatedImage";
import { Button } from "../ui/button";

export default function About() {
  return (
    <section
      id="about"
      className="flex items-center justify-evenly w-full py-12 md:py-24 lg:py-32 bg-white"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#4169E1]">
              About Euphoria Club
            </h2>
            <p className="text-gray-600">
              Euphoria Club is your premier destination for all things padel. With
              state-of-the-art courts and a vibrant community, we're dedicated
              to growing the sport and providing the best playing experience for
              enthusiasts of all levels.
            </p>
            <Button className="bg-[#E17041] text-white hover:bg-[#E17041]/90">
              Learn More
            </Button>
          </div>
          <AnimatedImage
            src="/placeholder.svg"
            alt="About Padel Club"
            width={600}
            height={400}
            className="rounded-md border-2 border-[#4169E1]/10"
          />
        </div>
      </div>
    </section>
  );
}
