import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  CheckCircle,
  Download,
  Upload,
  ShieldAlert,
  BookOpen,
} from 'lucide-react';

export const Services: React.FC = () => {
  const safeHoldingOptions = [
    {
      code: 'Technique 26',
      title: 'Thumb in Palm Hold (Standing)',
      category: 'Standing Safe Hold',
      description:
        'A low-level, non-harmful standing physical intervention designed to safely stabilize an arm without restricting airways or joints.',
      imageUrl: '/images/thumb-in-palm-hold.jpg', // Replace with actual asset path
    },
    {
      code: 'Technique 25',
      title: 'Figure of Four Hold (FOF) Stage 4 (Standing)',
      category: 'Standing Safe Hold',
      description:
        'Structured two-person standing support hold providing controlled stabilization while maintaining dignity and continuous communication.',
      imageUrl: '/images/figure-of-four-hold.jpg', // Replace with actual asset path
    },
    {
      code: 'Drill 40c',
      title: 'Chair De-escalation 40c Trouble Drill',
      category: 'Seated De-escalation',
      description:
        'Coordinated seated support and de-escalation drill enabling staff to manage agitation safely while seated and transition back to non-restrictive support.',
      imageUrl: '/images/chair-deescalation-40c.jpg', // Replace with actual asset path
    },
    {
      code: 'Manoeuvre 48b',
      title: 'Controlled Descent - Manoeuvre (2 Staff)',
      category: 'Team Descent Protocol',
      description:
        'Synchronized two-staff guided descent to floor mats protecting the head, neck, and airway while strictly avoiding prone restraint risks.',
      imageUrl: '/images/controlled-descent-48b.jpg', // Replace with actual asset path
    },
  ];

  // Helper to generate downloadable template forms for delegates
  const downloadTemplate = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Accredited PMVA Training Courses
          </h1>
          <p className="text-slate-600 mt-4 text-lg">
            Practical, scenario-based training delivered by qualified, experienced
            instructors in full compliance with RRN and BILD ACT standards.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Course 1: 1-Day Refresher */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1 rounded-full">
                  BILD ACT Certified
                </span>
                <span className="text-sm font-semibold text-slate-500">1 Day</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                PMVA 1-Day Refresher
              </h2>
              <p className="text-slate-600 text-sm mb-6">
                For staff who have completed PMVA previously and require annual renewal.
              </p>

              <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wider mb-3">
                Course Includes:
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-700 mb-8">
                {[
                  'Legal updates',
                  'Safety principles',
                  'Breakaway techniques',
                  'Non-harmful restraint',
                  'Dynamic risk assessment',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/book"
              className="w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              Book 1-Day Refresher
            </Link>
          </div>

          {/* Course 2: 2-Day or 3-Day Full Course */}
          <div className="bg-white rounded-2xl shadow-sm border-2 border-teal-600 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-teal-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Comprehensive Foundation
                </span>
                <span className="text-sm font-semibold text-teal-700">2 or 3 Days</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                PMVA 2-Day or 3-Day Full Course
              </h2>
              <p className="text-slate-600 text-sm mb-6">
                Designed for staff working in challenging environments requiring full
                foundation competence.
              </p>

              <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wider mb-3">
                Core Curriculum Covers:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700 mb-8">
                {[
                  'Law & ethics',
                  'Health & safety',
                  'Positional asphyxia',
                  'Substance-related aggression',
                  'Breakaway (low & high level)',
                  'Restrictive & non-restrictive interventions',
                  'Post-incident reporting & debriefing',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/book"
              className="w-full text-center bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              Book Full Course
            </Link>
          </div>
        </div>

        {/* 3-Day Course Structure & Learning Outcomes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2.5 mb-4">
              <BookOpen className="w-6 h-6 text-teal-700" />
              <h2 className="text-xl font-bold text-slate-900">Course Structure</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-teal-600">
                <span className="text-xs font-bold uppercase text-teal-700">Day 1</span>
                <p className="font-semibold text-slate-900">
                  Law, safety, risk, de-escalation
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-teal-600">
                <span className="text-xs font-bold uppercase text-teal-700">Day 2</span>
                <p className="font-semibold text-slate-900">
                  Breakaway, non-harmful restraint, debriefing
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-teal-600">
                <span className="text-xs font-bold uppercase text-teal-700">Day 3</span>
                <p className="font-semibold text-slate-900">
                  Advanced interventions, Practical assessment
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
              <Award className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-slate-900">Certification</h4>
                <p className="text-xs text-slate-700 mt-1">
                  Delegates receive an accredited BILD ACT-aligned certification PMVA
                  certificate, typically valid for 1 year, depending on the awarding body.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Key Learning Outcomes
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              Upon successful completion of our PMVA training, participants and learners
              will be able to:
            </p>
            <ul className="space-y-3.5 text-sm text-slate-800">
              {[
                'Identify and recognise early warning signs of aggression',
                'Apply trauma-informed de-escalation and communication strategies',
                'Use safe, proportionate, non-harmful physical interventions as a last resort',
                'Protect themselves and others using evidence-based breakaway and holding techniques',
                'Complete accurate post-incident documentation and reflective debriefs',
              ].map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-teal-600 shrink-0" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Safe Holding Options Section */}
        <section>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider mb-1">
              <ShieldAlert className="w-4 h-4" /> Practical Syllabus Demonstrations
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Safe Holding Options &amp; De-escalation Drills
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              All physical interventions strictly avoid prone restraint, protect
              respiratory function, and prioritize rapid de-escalation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safeHoldingOptions.map((hold) => (
              <div
                key={hold.code}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex flex-col"
              >
                <div className="h-48 bg-slate-200 relative overflow-hidden flex items-center justify-center">
                  <img
                    src={hold.imageUrl}
                    alt={hold.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Graceful fallback if local image file is not yet placed in public/images/
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="text-center p-4 text-slate-600">
                    <span className="block text-xs font-bold uppercase text-teal-700">
                      {hold.code}
                    </span>
                    <span className="text-sm font-semibold">{hold.title}</span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full">
                      {hold.category}
                    </span>
                    <h3 className="font-bold text-slate-900 mt-2 text-base">
                      {hold.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {hold.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application Form & Pre-Health Screen Check Form Section */}
        <section className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-3">
                Delegate Application &amp; Pre-Health Screen Check Forms
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Because PMVA involves physical breakaway and safe holding practice, all
                delegates must complete an <strong>Application Form</strong> and a{' '}
                <strong>Pre-Health Screen Check Form</strong> prior to attending. You can
                download the forms below or upload your completed copies directly on the
                booking page.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <button
                type="button"
                onClick={() =>
                  downloadTemplate(
                    'PMVA_Application_Form.txt',
                    'PMVA TRAINING APPLICATION FORM\n\nFull Name:\nJob Role:\nOrganisation:\nCourse Selected (1-Day Refresher / 2-Day / 3-Day):\nPreferred Training Date:\nEmergency Contact:\nSignature:'
                  )
                }
                className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-5 py-3 rounded-xl inline-flex items-center justify-center gap-2 text-sm"
              >
                <Download className="w-4 h-4 text-teal-700" />
                Download Application Form
              </button>

              <button
                type="button"
                onClick={() =>
                  downloadTemplate(
                    'PMVA_Pre_Health_Screen_Check_Form.txt',
                    'PMVA PRE-HEALTH SCREEN CHECK FORM\n\nFull Name:\nDate of Birth:\n1. Do you have any musculoskeletal, back, neck, or joint injuries?\n2. Do you have any cardiovascular or respiratory conditions?\n3. Are you pregnant or recovering from recent surgery?\n4. Declaration: I confirm I am physically fit to participate in practical PMVA physical intervention drills.\nSignature & Date:'
                  )
                }
                className="bg-teal-600 hover:bg-teal-500 text-white font-semibold px-5 py-3 rounded-xl inline-flex items-center justify-center gap-2 text-sm"
              >
                <Download className="w-4 h-4" />
                Download Pre-Health Screen Form
              </button>

              <Link
                to="/book"
                className="border border-teal-400 text-teal-300 hover:bg-teal-950 font-semibold px-5 py-3 rounded-xl inline-flex items-center justify-center gap-2 text-sm"
              >
                <Upload className="w-4 h-4" />
                Upload Forms &amp; Book
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};