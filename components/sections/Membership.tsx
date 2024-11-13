// components/sections/Membership.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const MEMBERSHIP_PLANS = ["Basic", "Pro", "Elite"];

export default function Membership() {
  return (
    <section
      id="subscription"
      className="flex flex-col justify-center items-center w-full py-12 md:py-24 lg:py-32 bg-[#4169E1]/5"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#4169E1]">
          Membership Plans
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MEMBERSHIP_PLANS.map((plan, index) => (
            <Card 
              key={plan} 
              className={`border-2 ${
                index === 1 
                  ? "border-[#E17041] shadow-lg scale-105" 
                  : "border-[#4169E1]/10"
              } hover:border-[#E17041]/30 transition-all`}
            >
              <CardContent className="p-6">
                <h3 className={`text-2xl font-bold mb-2 ${
                  index === 1 ? "text-[#E17041]" : "text-[#4169E1]"
                }`}>
                  {plan} Plan
                </h3>
                <p className="text-gray-600 mb-4">
                  Perfect for {plan.toLowerCase()} players
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="text-[#E17041] mr-2">✓</span> Access to courts
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-[#E17041] mr-2">✓</span> Online booking
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-[#E17041] mr-2">✓</span> Member events
                  </li>
                </ul>
                <Link href="/payment">
                  <Button 
                    className={`w-full ${
                      index === 1
                        ? "bg-[#E17041] hover:bg-[#E17041]/90"
                        : "bg-[#4169E1] hover:bg-[#4169E1]/90"
                    } text-white`}
                  >
                    Subscribe Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
