import React, { useState } from 'react';
import { Lock, Save, CheckCircle2, Users, Calendar } from 'lucide-react';
import { useTraining } from '../context/useTraining';
import type { UpcomingTraining } from '../types/training';

export const Admin: React.FC = () => {
  const { upcomingTraining, updateUpcomingTraining, bookings } = useTraining();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [savedBanner, setSavedBanner] = useState(false);

  const [formState, setFormState] = useState<UpcomingTraining>(upcomingTraining);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid admin password. (Demo password: admin123)');
    }
  };

  const handleSaveTraining = (e: React.FormEvent) => {
    e.preventDefault();
    updateUpcomingTraining(formState);
    setSavedBanner(true);
    setTimeout(() => setSavedBanner(false), 4000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-2xl shadow-md border border-slate-200 max-w-md w-full space-y-5"
        >
          <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mx-auto">
            <Lock className="w-6 h-6" />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold text-slate-900">PMVA Admin Portal</h1>
            <p className="text-xs text-slate-500 mt-1">
              Sign in to update the Next Upcoming Training schedule and review bookings.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Admin Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password (admin123)"
              className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm"
            />
            {authError && (
              <p className="text-xs text-red-600 mt-1.5 font-medium">{authError}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2.5 rounded-lg text-sm"
          >
            Access Dashboard
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Admin Dashboard — Training Schedule &amp; Bookings
            </h1>
            <p className="text-sm text-slate-600">
              Changes made below immediately update the live Next Upcoming Training
              across the entire website.
            </p>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-xs font-semibold border border-slate-300 bg-white px-4 py-2 rounded-lg text-slate-700 self-start"
          >
            Log Out
          </button>
        </div>

        {/* Update Next Upcoming Training Form */}
        <form
          onSubmit={handleSaveTraining}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 space-y-6"
        >
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-teal-700" />
              <h2 className="text-lg font-bold text-slate-900">
                Edit Next Upcoming Training
              </h2>
            </div>
            {savedBanner && (
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-4 h-4" /> Website Updated Successfully!
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Course Title *
              </label>
              <input
                type="text"
                required
                value={formState.courseTitle}
                onChange={(e) =>
                  setFormState({ ...formState, courseTitle: e.target.value })
                }
                className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Course Format *
              </label>
              <select
                value={formState.courseType}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    courseType: e.target.value as UpcomingTraining['courseType'],
                  })
                }
                className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm"
              >
                <option value="1-Day Refresher">1-Day Refresher</option>
                <option value="2-Day Full Course">2-Day Full Course</option>
                <option value="3-Day Full Course">3-Day Full Course</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Available Spots *
              </label>
              <input
                type="number"
                min={0}
                required
                value={formState.spotsAvailable}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    spotsAvailable: Number(e.target.value),
                  })
                }
                className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Start Date *
              </label>
              <input
                type="date"
                required
                value={formState.startDate}
                onChange={(e) =>
                  setFormState({ ...formState, startDate: e.target.value })
                }
                className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                End Date *
              </label>
              <input
                type="date"
                required
                value={formState.endDate}
                onChange={(e) =>
                  setFormState({ ...formState, endDate: e.target.value })
                }
                className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Daily Schedule / Hours *
              </label>
              <input
                type="text"
                required
                value={formState.time}
                onChange={(e) => setFormState({ ...formState, time: e.target.value })}
                className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Delegate Fee *
              </label>
              <input
                type="text"
                required
                value={formState.price}
                onChange={(e) => setFormState({ ...formState, price: e.target.value })}
                className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Training Venue / Location *
              </label>
              <input
                type="text"
                required
                value={formState.location}
                onChange={(e) =>
                  setFormState({ ...formState, location: e.target.value })
                }
                className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-teal-700 hover:bg-teal-800 text-white font-bold px-6 py-3 rounded-xl inline-flex items-center gap-2 text-sm"
          >
            <Save className="w-4 h-4" /> Publish Next Upcoming Training
          </button>
        </form>

        {/* Delegate Bookings Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-5">
            <Users className="w-5 h-5 text-teal-700" />
            <h2 className="text-lg font-bold text-slate-900">
              Submitted Delegate Bookings ({bookings.length})
            </h2>
          </div>

          {bookings.length === 0 ? (
            <p className="text-sm text-slate-500 py-6 text-center bg-slate-50 rounded-xl">
              No delegate bookings submitted yet. Bookings made on the Book Training
              page will appear here.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-xs uppercase text-slate-500">
                    <th className="py-3 px-3">Delegate</th>
                    <th className="py-3 px-3">Role &amp; Org</th>
                    <th className="py-3 px-3">Course &amp; Date</th>
                    <th className="py-3 px-3">Uploaded Forms</th>
                    <th className="py-3 px-3">Pre-Health</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {bookings.map((bk) => (
                    <tr key={bk.id} className="hover:bg-slate-50">
                      <td className="py-3 px-3">
                        <p className="font-semibold text-slate-900">{bk.fullName}</p>
                        <p className="text-xs text-slate-500">
                          {bk.email} | {bk.phone}
                        </p>
                      </td>
                      <td className="py-3 px-3">
                        <p className="text-slate-800">{bk.role}</p>
                        <p className="text-xs text-slate-500">
                          {bk.organization || 'Individual'}
                        </p>
                      </td>
                      <td className="py-3 px-3">
                        <p className="font-medium text-slate-800">
                          {bk.selectedCourse}
                        </p>
                        <p className="text-xs text-teal-700">{bk.trainingDate}</p>
                      </td>
                      <td className="py-3 px-3 text-xs text-slate-600">
                        <p>App: {bk.applicationFileName || 'None attached'}</p>
                        <p>Health: {bk.preHealthFileName || 'None attached'}</p>
                      </td>
                      <td className="py-3 px-3">
                        <span className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          {bk.preHealthConfirmed ? 'Confirmed Fit' : 'Pending'}
                        </span>
                        {bk.medicalNotes && (
                          <p className="text-xs text-amber-700 mt-1">
                            Note: {bk.medicalNotes}
                          </p>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};