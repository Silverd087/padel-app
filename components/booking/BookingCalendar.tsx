// components/booking/BookingCalendar.tsx
"use client";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useMemo, useEffect } from "react";
import { AVAILABLE_TIMES, COURTS } from "@/lib/constants";
import { isTimeSlotBooked, hasBookingsOnDate } from "@/lib/bookings";

interface BookingCalendarProps {
  date: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  onTimeSelect: (court: string, time: string) => void;
  disabledDates?: (date: Date) => boolean;
  disabledStyle?: React.CSSProperties;
}

export default function BookingCalendar({
  date,
  onSelect,
  onTimeSelect,
}: BookingCalendarProps) {
  const [showSchedule, setShowSchedule] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true when component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  const calendarStyles = useMemo(() => ({
    month: { width: "100%" },
    table: { width: "100%" },
    head_cell: { width: "100%" },
    cell: { width: "100%" },
    day: { width: "100%" },
  }), []);

  const modifierStyles = useMemo(() => ({
    booked: { backgroundColor: "rgba(220, 38, 38, 0.1)" },
    available: { backgroundColor: "rgba(34, 197, 94, 0.1)" },
  }), []);

  const handleDayClick = (newDate: Date | undefined) => {
    setSelectedDate(newDate);
    if (newDate) {
      setShowSchedule(true);
      onSelect(newDate);
    }
  };

  const handleBackToCalendar = () => {
    setShowSchedule(false);
  };

  const checkTimeSlotBooked = (court: string, time: string) => {
    if (!date) return false;
    return isTimeSlotBooked(date, court, time);
  };

  // Only render calendar content after client-side hydration
  const renderCalendarContent = () => {
    if (!isClient) {
      return <div className="h-[400px]" />; // Placeholder with approximate height to prevent layout shift
    }

    return (
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={handleDayClick}
        className="w-full"
        modifiers={{
          booked: hasBookingsOnDate,
          available: (day) => !hasBookingsOnDate(day),
        }}
        modifiersStyles={modifierStyles}
        styles={calendarStyles}
        disabled={(date) => date < new Date()}
      />
    );
  };

  if (showSchedule && date) {
    return (
      <Card className="md:col-span-1">
        <CardContent className="p-6">
          <div className="mb-4">
            <Button
              variant="ghost"
              onClick={handleBackToCalendar}
              className="flex items-center"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Calendar
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">Courts</th>
                  {AVAILABLE_TIMES.map((time) => (
                    <th key={time} className="border p-2">
                      {time}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COURTS.map((court) => (
                  <tr key={court}>
                    <td className="border p-2">{court}</td>
                    {AVAILABLE_TIMES.map((time) => {
                      const isBooked = checkTimeSlotBooked(court, time);
                      return (
                        <td
                          key={`${court}-${time}`}
                          className={`border p-2 cursor-pointer ${
                            isBooked ? "bg-red-100" : "bg-green-100 hover:bg-green-200"
                          }`}
                          onClick={() => !isBooked && onTimeSelect(court, time)}
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
    <Card className="md:col-span-1">
      <CardContent className="p-6">
        {renderCalendarContent()}
        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="flex items-center">
            <div className="h-4 w-4 rounded-full bg-red-100 mr-2"></div>
            <span>Partially or fully booked</span>
          </div>
          <div className="flex items-center">
            <div className="h-4 w-4 rounded-full bg-green-100 mr-2"></div>
            <span>Available</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
