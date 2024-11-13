"use client";

import { Booking } from "./types";

export const getBookings = (): Booking[] => {
  if (typeof window === "undefined") return [];
  const bookings = localStorage.getItem("bookings");
  return bookings ? JSON.parse(bookings) : [];
};

export const addBooking = (booking: Booking) => {
  if (typeof window === "undefined") return;
  const bookings = getBookings();
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));
};

export const isTimeSlotBooked = (
  date: Date,
  court: string,
  time: string
): boolean => {
  if (typeof window === "undefined") return false;
  const bookings = getBookings();
  const dateString = date.toISOString().split("T")[0];
  return bookings.some(
    (booking) =>
      booking.date === dateString &&
      booking.court === court &&
      booking.time === time
  );
};

export const hasBookingsOnDate = (date: Date): boolean => {
  if (typeof window === "undefined") return false;
  const bookings = getBookings();
  const dateString = date.toISOString().split("T")[0];
  return bookings.some((booking) => booking.date === dateString);
};
