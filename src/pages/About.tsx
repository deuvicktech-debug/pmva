import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Users, CheckCircle2, Heart, Scale } from 'lucide-react';

export const About: React.FC = () => {
  const approachPoints = [
    {
      title: 'Trauma-Informed, Least-Restrictive Practice',
      desc: 'We equip staff to understand trauma triggers and apply compassionate, person-centred de-escalation before any physical intervention is ever considered.',
      icon: Heart,
    },
    {
      title: 'Hands-On, Scenario-Based Learning',
      desc: 'Realistic workplace simulations build calm confidence under pressure across mental health wards, supported living homes, and classrooms.',
      icon: Users,
    },
    {
      title: 'Compliance with RRN Standards',
      desc: 'Fully structured around the Restraint Reduction Network (RRN) Training Standards and BILD ACT certification expectations.',
      icon: Scale,
    },
    {
      title: 'Delivered by Qualified, Experienced Trainers',
      desc: 'Taught by accredited PMVA instructors with extensive frontline clinical, social care, and specialist education experience.',
      icon: ShieldCheck,
    },
  ];

  const whyChooseUs = [
    'Delivered by qualified, accredited trainers',
    'Fully aligned with BILD ACT / RRN expectations',
    'Hands-on, scenario-based learning',
    'Focus on least-restrictive practice and human rights',
    'Suitable for NHS, social care, education, and private providers',
  ];

  return (
    <div className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Intro */}
        <div className="max-w-3xl">
          <span className="text-teal-700 font-bold text-xs uppercase tracking-wider">
            About Our PMVA Framework
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Raising Standards in Safe, Ethical, and Lawful Care
          </h1>
          <p className="text-slate-600 text-lg mt-4 leading-relaxed">
            Prevention and Management of Violence and Aggression (PMVA) is more than a
            physical skills course—it is an ethical governance framework committed to
            reducing restrictive practices while keeping staff and service users safe.
          </p>
        </div>

        {/* Our Training Approach */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Our Training Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {approachPoints.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-4"
              >
                <div className="p-3 bg-teal-700 text-white rounded-xl shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Our PMVA Training */}
        <div className="bg-teal-900 text-white rounded-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Why Choose Our PMVA Training?
            </h2>
            <ul className="space-y-3 pt-2">
              {whyChooseUs.map((reason) => (
                <li key={reason} className="flex items-center gap-3 text-teal-50">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 bg-white/10 border border-white/20 rounded-xl p-6 space-y-4">
            <h3 className="font-bold text-lg">In-House &amp; Group Commissioning</h3>
            <p className="text-sm text-teal-100 leading-relaxed">
              We deliver bespoke on-site training tailored to your ward, school, or
              supported living service policies, as well as open-enrolment cohorts for
              individual practitioners.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-sm px-5 py-3 rounded-lg transition-colors"
            >
              Request Organisational Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};