import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  Clock,
  Upload,
  CheckCircle2,
  FileCheck,
  AlertCircle,
} from 'lucide-react';
import { useTraining } from '../context/useTraining';

export const BookTraining: React.FC = () => {
  const { upcomingTraining, addBooking } = useTraining();
  const [bookingComplete, setBookingComplete] = useState(false);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [role, setRole] = useState('Mental Health Support Worker');
  const [selectedCourse, setSelectedCourse] = useState(upcomingTraining.courseTitle);
  const [preHealthConfirmed, setPreHealthConfirmed] = useState(false);
  const [medicalNotes, setMedicalNotes] = useState('');
  const [applicationFileName, setApplicationFileName] = useState('');
  const [preHealthFileName, setPreHealthFileName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBooking({
      fullName,
      email,
      phone,
      organization,
      role,
      selectedCourse,
      trainingDate: `${upcomingTraining.startDate} to ${upcomingTraining.endDate}`,
      preHealthConfirmed,
      medicalNotes,
      applicationFileName,
      preHealthFileName,
    });
    setBookingComplete(true);
  };

  if (bookingComplete) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8 text-center space-y-4">
          <CheckCircle2 className="w-14 h-14 text-teal-600 mx-auto" />
          <h1 className="text-2xl font-extrabold text-slate-900">
            PMVA Training Booking Confirmed!
          </h1>
          <p className="text-slate-600 text-sm">
            Thank you, <strong>{fullName}</strong>. Your reservation for{' '}
            <strong>{selectedCourse}</strong> ({upcomingTraining.startDate}) has been
            recorded.
          </p>
          <div className="bg-slate-50 p-4 rounded-xl text-left text-xs text-slate-600 space-y-1.5 border border-slate-200">
            <p>
              <strong>Delegate:</strong> {fullName} ({role})
            </p>
            <p>
              <strong>Location:</strong> {upcomingTraining.location}
            </p>
            <p>
              <strong>Application Form:</strong>{' '}
              {applicationFileName || 'Submitted electronically'}
            </p>
            <p>
              <strong>Pre-Health Check:</strong>{' '}
              {preHealthFileName || 'Declared fit for physical training'}
            </p>
          </div>
          <button
            onClick={() => setBookingComplete(false)}
            className="bg-teal-700 text-white font-semibold px-6 py-2.5 rounded-lg text-sm"
          >
            Book Another Delegate
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">
            Book PMVA Training
          </h1>
          <p className="text-slate-600 mt-2 text-sm">
            Reserve your place on the next scheduled cohort and submit your mandatory
            Application and Pre-Health Screen Check forms.
          </p>
        </div>

        {/* Highlighted Next Training Banner */}
        <div className="bg-teal-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider bg-teal-500 text-slate-950 px-2.5 py-0.5 rounded-full">
              Featured Upcoming Cohort
            </span>
            <h2 className="text-xl sm:text-2xl font-bold">
              {upcomingTraining.courseTitle}
            </h2>
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-teal-100 pt-1">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-teal-400" />
                {upcomingTraining.startDate} – {upcomingTraining.endDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-teal-400" />
                {upcomingTraining.time}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-teal-400" />
                {upcomingTraining.location}
              </span>
            </div>
          </div>
          <div className="bg-white/10 border border-white/20 px-5 py-3 rounded-xl text-center shrink-0">
            <span className="block text-2xl font-extrabold text-teal-300">
              {upcomingTraining.spotsAvailable}
            </span>
            <span className="text-xs text-teal-100">Places Available</span>
          </div>
        </div>

        {/* Booking Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 space-y-6"
        >
          <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
            1. Delegate Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Full Name (as it should appear on Certificate) *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Contact Phone Number *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Employer / Care Organisation
              </label>
              <input
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Job Role *
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm"
              >
                <option>Mental Health Support Worker</option>
                <option>Healthcare Assistant</option>
                <option>Supported Living &amp; Residential Care Staff</option>
                <option>Security Personnel</option>
                <option>Education &amp; SEN Staff</option>
                <option>Other Healthcare / Care Professional</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Course Selection *
              </label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm"
              >
                <option value={upcomingTraining.courseTitle}>
                  Next Cohort: {upcomingTraining.courseTitle} ({upcomingTraining.startDate})
                </option>
                <option value="PMVA 1-Day Refresher (BILD ACT Certified)">
                  PMVA 1-Day Refresher (BILD ACT Certified)
                </option>
                <option value="PMVA 2-Day Full Course">PMVA 2-Day Full Course</option>
                <option value="PMVA 3-Day Full Course">PMVA 3-Day Full Course</option>
              </select>
            </div>
          </div>

          {/* Document Uploads: Application Form & Pre-Health Screen Check Form */}
          <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3 pt-2">
            2. Application &amp; Pre-Health Screen Check Forms
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 bg-slate-50">
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Upload Completed Application Form (PDF/DOCX/TXT)
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                onChange={(e) =>
                  setApplicationFileName(e.target.files?.[0]?.name || '')
                }
                className="text-xs text-slate-600 mt-1 block w-full"
              />
              {applicationFileName && (
                <p className="text-xs text-teal-700 font-medium mt-2 flex items-center gap-1">
                  <FileCheck className="w-4 h-4" /> Attached: {applicationFileName}
                </p>
              )}
            </div>

            <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 bg-slate-50">
              <label className="block text-sm font-semibold text-slate-800 mb-1">
                Upload Pre-Health Screen Check Form (PDF/DOCX/TXT)
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                onChange={(e) =>
                  setPreHealthFileName(e.target.files?.[0]?.name || '')
                }
                className="text-xs text-slate-600 mt-1 block w-full"
              />
              {preHealthFileName && (
                <p className="text-xs text-teal-700 font-medium mt-2 flex items-center gap-1">
                  <FileCheck className="w-4 h-4" /> Attached: {preHealthFileName}
                </p>
              )}
            </div>
          </div>

          {/* Pre-Health Declaration */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-3">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700">
                <strong>Pre-Health Screen Check Declaration:</strong> PMVA practical
                assessments include breakaway techniques, safe holding (Thumb in Palm,
                Figure of Four), and Controlled Descent manoeuvres. Please disclose any
                musculoskeletal, cardiovascular, respiratory, or pregnancy considerations.
              </div>
            </div>

            <textarea
              rows={2}
              value={medicalNotes}
              onChange={(e) => setMedicalNotes(e.target.value)}
              placeholder="Optional: Enter any relevant medical notes or reasonable adjustments needed..."
              className="w-full border border-amber-300 bg-white rounded-lg px-3 py-2 text-xs"
            />

            <label className="flex items-center gap-2.5 text-sm font-medium text-slate-900 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={preHealthConfirmed}
                onChange={(e) => setPreHealthConfirmed(e.target.checked)}
                className="w-4 h-4 text-teal-700 rounded"
              />
              <span>
                I confirm I have completed / will complete the Pre-Health Screen Check
                and am fit to participate in practical PMVA training. *
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={upcomingTraining.spotsAvailable === 0}
            className="w-full sm:w-auto bg-teal-700 hover:bg-teal-800 disabled:bg-slate-400 text-white font-bold px-8 py-3.5 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
          >
            <Upload className="w-4 h-4" />
            Confirm &amp; Submit Training Booking
          </button>
        </form>
      </div>
    </div>
  );
};