// components/sections/CourtCarousel.tsx
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AnimatedImage from "../ui/AnimatedImage";

export default function CourtCarousel() {
  return (
    <section
      id="courts"
      className="flex flex-col justify-center items-center w-full py-4 md:py-8 bg-white"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-center mb-4 text-[#4169E1]">
          Our Courts
        </h2>
        <Carousel className="w-full max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card className="border-2 border-[#4169E1]/10 hover:border-[#E17041]/30 transition-colors">
                  <CardContent className="flex aspect-[21/9] items-center justify-center p-0 sm:p-1">
                    <AnimatedImage
                      src={`/placeholder.svg`}
                      alt={`Court ${index + 1}`}
                      width={1050}
                      height={450}
                      className="rounded-md w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex bg-[#4169E1] text-white hover:bg-[#4169E1]/90" />
          <CarouselNext className="hidden sm:flex bg-[#4169E1] text-white hover:bg-[#4169E1]/90" />
        </Carousel>
      </div>
    </section>
  );
}
