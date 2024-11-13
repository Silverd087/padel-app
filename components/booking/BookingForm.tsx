// components/booking/BookingForm.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AVAILABLE_TIMES, COURTS } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";
import { addBooking } from "@/lib/bookings";
import { useAuth } from "@/contexts/AuthContext";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingFormProps {
  date: Date | undefined;
  selectedCourt: string;
  selectedTime: string;
  onCourtSelect: (court: string) => void;
  onTimeSelect: (time: string) => void;
  onBooking: () => void;
  bookedTimes?: string[];
  availableTimes: string[];
  authError?: string;
  onSelect: (date: Date | undefined) => void;
}

export default function BookingForm({
  date,
  selectedCourt,
  selectedTime,
  onCourtSelect,
  onTimeSelect,
  onBooking,
  bookedTimes = [],
  availableTimes,
  authError,
  onSelect,
}: BookingFormProps) {
  const { toast } = useToast();
  const { isLoggedIn, user } = useAuth();

  const handleBooking = () => {
    if (!isLoggedIn) {
      toast({
        title: "Authentication required",
        description: "Please log in to make a reservation.",
        variant: "destructive",
      });
      return;
    }

    if (date && selectedCourt && selectedTime) {
      try {
        addBooking({
          court: selectedCourt,
          time: selectedTime,
          date: date.toISOString().split("T")[0],
          user: user!.id.toString(),
        });

        toast({
          title: "Booking Confirmed",
          description: `You have booked ${selectedCourt} for ${selectedTime} on ${date.toDateString()}.`,
        });
        onBooking();
      } catch (error) {
        toast({
          title: "Booking Failed",
          description: "There was an error processing your booking.",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Booking Failed",
        description: "Please select a date, court, and time.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="md:col-span-1">
      <CardContent className="p-6">
        <div className="space-y-4">
          {authError && (
            <p className="text-red-500 text-sm mb-4">{authError}</p>
          )}
          <div className="space-y-2">
            <Label>Select Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                  onClick={() => {
                    console.log("Button clicked", date);
                  }}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => {
                    if (typeof onSelect === "function") {
                      onSelect(newDate);
                    }
                    console.log("Date selected", newDate);
                  }}
                  disabled={(date) => date < new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <Label>Select Court</Label>
            <Select value={selectedCourt} onValueChange={onCourtSelect}>
              <SelectTrigger>
                <SelectValue placeholder="Select a court" />
              </SelectTrigger>
              <SelectContent>
                {COURTS.map((court) => (
                  <SelectItem key={court} value={court}>
                    {court}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Select Time</Label>
            <Select value={selectedTime} onValueChange={onTimeSelect}>
              <SelectTrigger>
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                {availableTimes.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button
            className="w-full"
            onClick={handleBooking}
            disabled={!date || !selectedCourt || !selectedTime}
          >
            Book and Pay
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
