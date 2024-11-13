import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString()
}

export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString()
}

export const isBusinessHours = (date: Date): boolean => {
  // Add business hours validation logic
  return true
}
