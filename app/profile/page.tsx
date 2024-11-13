"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, User, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useScrollToHash } from "@/hooks/useScrollToHash";

// Simulated user data
const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "/placeholder.svg?height=100&width=100",
  reservationCount: 5,
  subscription: null, // Change this to null to simulate a user without a subscription
  remainingReservations: 10,
  nextReservation: {
    date: "2024-06-01",
    time: "10:00 AM",
    court: "Court 2",
  },
  pastReservations: [
    { id: 1, date: "2024-05-15", time: "10:00 AM", court: "Court 1" },
    { id: 2, date: "2024-05-10", time: "2:00 PM", court: "Court 2" },
    { id: 3, date: "2024-05-05", time: "11:00 AM", court: "Court 3" },
    { id: 4, date: "2024-04-30", time: "4:00 PM", court: "Court 1" },
    { id: 5, date: "2024-04-25", time: "1:00 PM", court: "Court 2" },
  ],
  nextReservations: [
    { id: 1, date: "2024-06-01", time: "10:00 AM", court: "Court 2" },
    { id: 2, date: "2024-06-05", time: "2:00 PM", court: "Court 1" },
    { id: 3, date: "2024-06-10", time: "11:00 AM", court: "Court 3" },
  ],
};

export default function Profile() {
  const { handleClick } = useScrollToHash();

  return (
    <div className="container mx-auto mt-10 px-4 md:px-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Profile Card */}
        <Card className="col-span-full border-2 border-[#4169E1]/10">
          <CardHeader>
            <CardTitle className="text-[#4169E1]">Profile</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center space-x-4">
            <Avatar className="h-20 w-20 border-2 border-[#4169E1]/20">
              <AvatarImage src={userData.avatar} alt={userData.name} />
              <AvatarFallback className="bg-[#4169E1]/5 text-[#4169E1]">
                {userData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold text-[#4169E1]">
                {userData.name}
              </h2>
              <p className="text-gray-600">{userData.email}</p>
              {userData.subscription ? (
                <Badge className="mt-2 bg-[#E17041] hover:bg-[#E17041]/90">
                  {userData.subscription} Subscription
                </Badge>
              ) : (
                <Badge className="mt-2 bg-red-500 hover:bg-red-600">
                  No Subscription
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <Card className="border-2 border-[#4169E1]/10 hover:border-[#E17041]/30 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#4169E1]">
              Total Reservations
            </CardTitle>
            <User className="h-4 w-4 text-[#E17041]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#4169E1]">
              {userData.reservationCount}
            </div>
            <p className="text-xs text-gray-600">Lifetime reservations</p>
          </CardContent>
        </Card>

        <Card className="border-2 border-[#4169E1]/10 hover:border-[#E17041]/30 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#4169E1]">
              Subscription Status
            </CardTitle>
            <CalendarDays className="h-4 w-4 text-[#E17041]" />
          </CardHeader>
          <CardContent>
            {userData.subscription ? (
              <>
                <div className="text-2xl font-bold text-[#4169E1]">
                  {userData.subscription}
                </div>
                <p className="text-xs text-gray-600">Current plan</p>
              </>
            ) : (
              <>
                <div className="text-2xl font-bold text-red-500">
                  No Subscription
                </div>
                <Link
                  href="/#subscription"
                  onClick={(e) => handleClick(e, "#subscription")}
                  className="text-xs text-[#E17041] hover:text-[#E17041]/80 hover:underline"
                >
                  Get a subscription now
                </Link>
              </>
            )}
          </CardContent>
        </Card>

        {userData.subscription && (
          <Card className="border-2 border-[#4169E1]/10 hover:border-[#E17041]/30 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#4169E1]">
                Remaining Reservations
              </CardTitle>
              <AlertCircle className="h-4 w-4 text-[#E17041]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#4169E1]">
                {userData.remainingReservations}
              </div>
              <p className="text-xs text-gray-600">Available this month</p>
            </CardContent>
          </Card>
        )}

        {!userData.subscription && (
          <Card className="col-span-full bg-[#4169E1] text-white border-2 border-[#4169E1]">
            <CardHeader>
              <CardTitle className="text-xl">
                Upgrade Your Padel Experience!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-white/90">
                Get unlimited access to our courts and exclusive member
                benefits.
              </p>
              <Button
                asChild
                className="bg-[#E17041] hover:bg-[#E17041]/90 border-none"
              >
                <Link
                  href="/#subscription"
                  onClick={(e) => handleClick(e, "#subscription")}
                >
                  Subscribe Now
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Reservations Cards */}
        <Card className="col-span-full border-2 border-[#4169E1]/10">
          <CardHeader>
            <CardTitle className="text-[#4169E1]">Next Reservations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {userData.nextReservations.map((reservation) => (
                <div key={reservation.id} className="flex items-center">
                  <CalendarDays className="h-9 w-9 text-[#E17041]" />
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none text-[#4169E1]">
                      {reservation.court}
                    </p>
                    <p className="text-sm text-gray-600">
                      {reservation.date} at {reservation.time}
                    </p>
                  </div>
                  <div className="ml-auto font-medium text-[#E17041]">
                    Upcoming
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-full mb-10 border-2 border-[#4169E1]/10">
          <CardHeader>
            <CardTitle className="text-[#4169E1]">Past Reservations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {userData.pastReservations.map((reservation) => (
                <div key={reservation.id} className="flex items-center">
                  <CalendarDays className="h-9 w-9 text-[#E17041]" />
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none text-[#4169E1]">
                      {reservation.court}
                    </p>
                    <p className="text-sm text-gray-600">
                      {reservation.date} at {reservation.time}
                    </p>
                  </div>
                  <div className="ml-auto font-medium text-gray-500">
                    Completed
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
