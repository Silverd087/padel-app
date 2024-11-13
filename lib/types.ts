// lib/types.ts
export interface Booking {
  date: string;
  court: string;
  time: string;
  user: string;
}

export interface BookingsByDate {
  [date: string]: Booking[];
}

export interface UserData {
  id: number;
  name: string;
  email: string;
  avatar: string;
  subscription?: string;
  reservationCount: number;
  remainingReservations?: number;
  nextReservation?: {
    date: string;
    time: string;
    court: string;
  };
  pastReservations: Array<{
    id: string;
    date: string;
    time: string;
    court: string;
  }>;
}
