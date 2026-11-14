import React, { useState, useEffect } from 'react';
import type { UpcomingTraining, BookingRecord } from '../types/training';
import { TrainingContext } from './useTraining';

const DEFAULT_TRAINING: UpcomingTraining = {
  id: 'pmva-cohort-01',
  courseTitle: 'PMVA 3-Day Full Accredited Course (BILD ACT / RRN Aligned)',
  courseType: '3-Day Full Course',
  startDate: '2026-12-07',
  endDate: '2026-12-09',
  time: '09:00 AM – 04:30 PM Daily',
  location: 'London Healthcare Training Hub & On-Site UK Delivery',
  spotsAvailable: 12,
  price: '£395 per delegate',
  instructor: 'Senior BILD ACT Accredited Lead Trainer',
};

export const TrainingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [upcomingTraining, setUpcomingTraining] = useState<UpcomingTraining>(() => {
    const saved = localStorage.getItem('pmva_upcoming_training');
    return saved ? JSON.parse(saved) : DEFAULT_TRAINING;
  });

  const [bookings, setBookings] = useState<BookingRecord[]>(() => {
    const saved = localStorage.getItem('pmva_bookings');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('pmva_upcoming_training', JSON.stringify(upcomingTraining));
  }, [upcomingTraining]);

  useEffect(() => {
    localStorage.setItem('pmva_bookings', JSON.stringify(bookings));
  }, [bookings]);

  const updateUpcomingTraining = (updated: UpcomingTraining) => {
    setUpcomingTraining(updated);
  };

  const addBooking = (newBooking: Omit<BookingRecord, 'id' | 'submittedAt'>) => {
    const record: BookingRecord = {
      ...newBooking,
      id: `BK-${Date.now()}`,
      submittedAt: new Date().toLocaleString(),
    };
    setBookings((prev) => [record, ...prev]);

    // Automatically decrement available spots if > 0
    if (upcomingTraining.spotsAvailable > 0) {
      setUpcomingTraining((prev) => ({
        ...prev,
        spotsAvailable: Math.max(0, prev.spotsAvailable - 1),
      }));
    }
  };

  return (
    <TrainingContext.Provider
      value={{ upcomingTraining, updateUpcomingTraining, bookings, addBooking }}
    >
      {children}
    </TrainingContext.Provider>
  );
};