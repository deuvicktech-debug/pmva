import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  HeartHandshake,
  Scale,
  AlertTriangle,
  Calendar,
  MapPin,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  FileText,
} from 'lucide-react';
import { useTraining } from '../context/useTraining';

export const Home: React.FC = () => {
  const { upcomingTraining } = useTraining();

  const focusPillars = [
    {
      icon: AlertTriangle,
      title: 'Early Recognition',
      desc: 'Identifying early warning signs of escalating behaviour before crisis occurs.',
    },
    {
      icon: HeartHandshake,
      title: 'Prevention & De-escalation',
      desc: 'Trauma-informed communication and de-escalation as primary strategies.',
    },
    {
      icon: Scale,
      title: 'Proportionate Last Resort',
      desc: 'Lawful, non-harmful physical intervention applied strictly as a last resort.',
    },
    {
      icon: Shield,
      title: 'Dignity & Human Rights',
      desc: 'Upholding safety, dignity, and human rights for all service users and staff.',
    },
  ];

  const standards = [
    'NHS and CQC expectations',
    'BILD ACT / RRN Training Standards',
    'Mental Health Act & Mental Capacity Act',
    'Positive & Proactive Care',
    'Trauma-informed practice',
  ];

  const targetRoles = [
    'Mental Health Support Workers',
    'Healthcare Assistants',
    'Supported Living & Residential Care Staff',
    'Security Personnel',
    'Education & SEN Staff',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
              BILD ACT &amp; RRN Aligned Training Framework
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Prevention and Management of Violence and Aggression (PMVA)
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              A structured training framework used across healthcare, mental health,
              social care, education, and security settings to reduce the risk of
              violence and manage aggressive behaviour safely, lawfully, and ethically.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/book"
                className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-6 py-3.5 rounded-lg inline-flex items-center gap-2 transition-colors shadow-lg"
              >
                Book Upcoming Training <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-3.5 rounded-lg transition-colors"
              >
                Explore Courses &amp; Techniques
              </Link>
            </div>
          </div>

          {/* Dynamic Next Upcoming Training Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 sm:p-8 border-t-4 border-teal-500">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-teal-100 text-teal-800 text-xs font-bold uppercase px-3 py-1 rounded-full">
                  Next Upcoming Training
                </span>
                <span className="text-xs font-semibold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full">
                  {upcomingTraining.spotsAvailable} Spots Remaining
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 mb-4">
                {upcomingTraining.courseTitle}
              </h2>

              <div className="space-y-3 text-sm text-slate-600 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-teal-700 shrink-0" />
                  <span>
                    <strong>Dates:</strong> {upcomingTraining.startDate} to{' '}
                    {upcomingTraining.endDate}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-teal-700 shrink-0" />
                  <span>
                    <strong>Schedule:</strong> {upcomingTraining.time}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-teal-700 shrink-0" />
                  <span>
                    <strong>Location:</strong> {upcomingTraining.location}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-teal-700 shrink-0" />
                  <span>
                    <strong>Fee:</strong> {upcomingTraining.price}
                  </span>
                </div>
              </div>

              <Link
                to="/book"
                className="block w-full text-center bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                Book This Session Now
              </Link>
              <p className="text-[11px] text-slate-400 text-center mt-3">
                Includes BILD ACT-aligned PMVA certificate (valid for 1 year)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus Pillars */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900">What PMVA Focuses On</h2>
            <p className="text-slate-600 mt-3">
              Every module prioritizes least-restrictive practice, trauma-informed
              care, and legal accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusPillars.map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-teal-500 transition-colors"
              >
                <div className="w-12 h-12 bg-teal-50 text-teal-700 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PMVA is Essential & Who Should Attend */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-slate-900 text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Why PMVA Training is Essential</h2>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              PMVA is widely recognised as a mandatory professional standard in
              high-risk environments such as mental health, supported living,
              hospitals, and specialist education. Our curriculum aligns with:
            </p>
            <ul className="space-y-3">
              {standards.map((standard) => (
                <li key={standard} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                  <span>{standard}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-teal-50 border border-teal-200 p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Who Should Attend?
              </h2>
              <p className="text-slate-700 text-sm mb-6">
                Designed for frontline staff and practitioners operating in
                challenging or complex care settings:
              </p>
              <ul className="space-y-3 mb-8">
                {targetRoles.map((role) => (
                  <li
                    key={role}
                    className="flex items-center gap-3 text-slate-800 font-medium text-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-teal-600" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-4 rounded-xl border border-teal-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-teal-700 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Mandatory Pre-Course Forms
                  </p>
                  <p className="text-xs text-slate-500">
                    Application Form &amp; Pre-Health Screen Check Form
                  </p>
                </div>
              </div>
              <Link
                to="/book"
                className="text-xs font-bold bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-800 shrink-0"
              >
                Access &amp; Upload Forms
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};