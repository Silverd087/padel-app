"use client";
// components/sections/BookingSection.tsx
import { useState } from "react";
import BookingCalendar from "@/components/booking/BookingCalendar";
import BookingForm from "@/components/booking/BookingForm";
import BookingDialog from "@/components/booking/BookingDialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { AVAILABLE_TIMES, COURTS } from "@/lib/constants";
import { isTimeSlotBooked, hasBookingsOnDate } from "@/lib/bookings";
import { useAuth } from "@/contexts/AuthContext";

export default function BookingSection() {
  const { isLoggedIn } = useAuth();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedCourt, setSelectedCourt] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [showBookingInfo, setShowBookingInfo] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [authError, setAuthError] = useState<string>("");

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      setShowSchedule(true);
    }
  };

  const handleTimeSelect = (court: string, time: string) => {
    if (!isLoggedIn) {
      setAuthError("Please log in to book a court");
      return;
    }
    setAuthError("");
    setSelectedCourt(court);
    setSelectedTime(time);
  };

  const handleBookingComplete = () => {
    setDate(undefined);
    setSelectedCourt("");
    setSelectedTime("");
    setShowBookingInfo(true);
    setShowSchedule(false);
  };

  const handleBackToCalendar = () => {
    setShowSchedule(false);
  };

  const checkTimeSlotBooked = (court: string, time: string) => {
    if (!date) return false;
    return isTimeSlotBooked(date, court, time);
  };

  const handleCourtSelect = (court: string) => {
    setSelectedCourt(court);
  };

  const renderCalendarOrSchedule = () => {
    if (showSchedule && date) {
      return (
        <Card className="md:col-span-1">
          <CardContent className="p-6">
            <Button
              variant="ghost"
              onClick={handleBackToCalendar}
              className="mb-4"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Calendar
            </Button>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border p-2 text-left font-medium">Courts</th>
                    {AVAILABLE_TIMES.map((time) => (
                      <th
                        key={time}
                        className="border p-2 text-left font-medium"
                      >
                        {time}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COURTS.map((court) => (
                    <tr key={court}>
                      <td className="border p-2 font-medium">{court}</td>
                      {AVAILABLE_TIMES.map((time) => {
                        const isBooked = checkTimeSlotBooked(court, time);
                        return (
                          <td
                            key={`${court}-${time}`}
                            className={`border p-2 ${
                              isBooked
                                ? "text-destructive"
                                : "text-green-500 cursor-pointer hover:bg-muted"
                            }`}
                            onClick={() =>
                              !isBooked && handleTimeSelect(court, time)
                            }
                          >
                            {isBooked ? "Booked" : "Available"}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      );
    }

    return (
      <BookingCalendar
        date={date}
        onSelect={handleDateSelect}
        onTimeSelect={handleTimeSelect}
        disabledDates={(day: Date) => hasBookingsOnDate(day)}
        disabledStyle={{ color: "var(--destructive)" }}
      />
    );
  };

  return (
    <section
      id="booking"
      className="flex flex-col justify-center items-center w-full py-12 md:py-24 lg:py-32 bg-white"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#4169E1] mb-4">
            Book Your Court
          </h2>
          <p className="text-gray-600 max-w-[600px] mx-auto">
            Reserve your preferred court time and start playing today
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {renderCalendarOrSchedule()}
          <BookingForm
            date={date}
            selectedCourt={selectedCourt}
            selectedTime={selectedTime}
            onBooking={handleBookingComplete}
            onCourtSelect={handleCourtSelect}
            onTimeSelect={(time) => handleTimeSelect(selectedCourt, time)}
            onSelect={handleDateSelect}
            availableTimes={AVAILABLE_TIMES.filter(
              (time) => !checkTimeSlotBooked(selectedCourt, time)
            )}
            authError={authError}
          />
        </div>
      </div>
      <BookingDialog
        open={showBookingInfo}
        onOpenChange={setShowBookingInfo}
        date={date}
        bookings={[]}
      />
    </section>
  );
}
