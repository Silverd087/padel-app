// components/sections/Contact.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";
import AnimatedImage from "../ui/AnimatedImage";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-[#4169E1]/5"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#4169E1]">
          Contact Us
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-2 border-[#4169E1]/10">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <Button className="w-full bg-[#E17041] text-white hover:bg-[#E17041]/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          <Card className="border-2 border-[#4169E1]/10">
            <CardContent className="p-6">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <AnimatedImage
                  src="/placeholder.svg"
                  alt="Location Map"
                  width={400}
                  height={300}
                  className="rounded-md object-cover"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-[#4169E1]">
                  <MapPin className="h-5 w-5" />
                  <span className="text-gray-600">123 Padel Street, Sportsville, SP 12345</span>
                </div>
                <div className="flex items-center space-x-2 text-[#4169E1]">
                  <Phone className="h-5 w-5" />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-[#4169E1]">
                  <Mail className="h-5 w-5" />
                  <span className="text-gray-600">info@padelclub.com</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
