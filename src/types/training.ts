export interface UpcomingTraining {
  id: string;
  courseTitle: string;
  courseType: '1-Day Refresher' | '2-Day Full Course' | '3-Day Full Course';
  startDate: string;
  endDate: string;
  time: string;
  location: string;
  spotsAvailable: number;
  price: string;
  instructor: string;
}

export interface BookingRecord {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  role: string;
  selectedCourse: string;
  trainingDate: string;
  preHealthConfirmed: boolean;
  medicalNotes: string;
  applicationFileName?: string;
  preHealthFileName?: string;
  submittedAt: string;
}