import { BookingsByDate } from "./types";

// lib/constants.ts
export const AVAILABLE_TIMES = [
  "9:00 AM",
  "10:30 AM",
  "12:00 PM",
  "1:30 PM",
  "3:00 PM",
  "4:30 PM",
  "6:00 PM",
];

export const COURTS = ["court1", "court2", "court3"];

export const BOOKINGS: BookingsByDate = {
  "2024-06-15": [
    { court: "court1", time: "10:30 AM", user: "John Doe", date: "2024-06-15" },
    {
      court: "court2",
      time: "2:00 PM",
      user: "Jane Smith",
      date: "2024-06-15",
    },
  ],
  "2024-06-16": [
    {
      court: "court1",
      time: "11:30 AM",
      user: "Alice Johnson",
      date: "2024-06-16",
    },
  ],
  // ... rest of the booking data
};
