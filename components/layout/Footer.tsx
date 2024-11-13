// components/layout/Footer.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-[#4169E1]/5 border-t border-[#4169E1]/10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg"
                alt="Padel Club Logo"
                width={32}
                height={32}
                className="text-[#E17041]"
              />
              <span className="font-bold text-[#4169E1]">Euphoria Club</span>
            </div>
            <p className="text-sm text-gray-600">
              Your premier destination for padel tennis excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[#4169E1]">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Courts', 'Events', 'Booking'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-[#E17041] text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Membership */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[#4169E1]">Membership</h3>
            <ul className="space-y-2">
              {['Plans', 'Benefits', 'Register', 'Login'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-[#E17041] text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-[#4169E1]">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#E17041]" />
                123 Padel Street, Sportsville
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#E17041]" />
                +1 (555) 123-4567
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#E17041]" />
                info@euphoriaclub.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-[#4169E1]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2024 Euphoria Club. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/terms"
              className="text-sm text-gray-600 hover:text-[#E17041]"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-600 hover:text-[#E17041]"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
