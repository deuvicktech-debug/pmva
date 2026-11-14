import { createContext, useContext } from 'react';
import type { BookingRecord, UpcomingTraining } from '../types/training';

interface TrainingContextType {
  upcomingTraining: UpcomingTraining;
  updateUpcomingTraining: (updated: UpcomingTraining) => void;
  bookings: BookingRecord[];
  addBooking: (booking: Omit<BookingRecord, 'id' | 'submittedAt'>) => void;
}

export const TrainingContext = createContext<TrainingContextType | undefined>(undefined);

export const useTraining = () => {
  const context = useContext(TrainingContext);
  if (!context) {
    throw new Error('useTraining must be used within a TrainingProvider');
  }
  return context;
};
