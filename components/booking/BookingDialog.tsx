// components/booking/BookingDialog.tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Booking } from "@/lib/types";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  date: Date | undefined;
  bookings: Booking[];
}
export default function BookingDialog({
  open,
  onOpenChange,
  date,
  bookings,
}: BookingDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Booking Confirmed</DialogTitle>
          <DialogDescription>
            Your court has been successfully booked
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
