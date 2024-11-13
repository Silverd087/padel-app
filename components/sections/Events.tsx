// components/sections/Events.tsx
import { Card, CardContent } from "@/components/ui/card";

export default function Events() {
  return (
    <section
      id="events"
      className="flex flex-col justify-center items-center w-full py-12 md:py-24 lg:py-32 bg-[#4169E1]/5"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#4169E1]">
          Announcements & Events
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Card key={index} className="border-2 border-[#4169E1]/10 hover:border-[#E17041]/30 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#E17041]">Upcoming Tournament</h3>
                <p className="text-gray-600">
                  Join us for our monthly padel tournament. Great prizes to be won!
                </p>
                <p className="mt-2 font-semibold text-[#4169E1]">Date: June 15, 2024</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
