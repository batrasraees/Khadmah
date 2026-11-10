import React from 'react';
import { 
  ShieldCheck, 
  Coins, 
  Award, 
  Clock, 
  Globe2, 
  Sparkles, 
  FileCheck2, 
  Users 
} from 'lucide-react';
import { STATS } from '../data/servicesData';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: '5-Tier Police & Skill Screening',
      desc: 'Every specialist undergoes government criminal background checks, license verification, and rigorous practical aptitude exams before boarding.'
    },
    {
      icon: Award,
      title: '$1,000,000 Property Protection',
      desc: 'Your property is comprehensively insured against any accidental damage with top-tier global underwriters.'
    },
    {
      icon: Coins,
      title: 'Fixed Rate Cards (No Haggling)',
      desc: 'Transparent pricing with standardized line items. The price quoted on the app is the price you pay, guaranteed.'
    },
    {
      icon: FileCheck2,
      title: 'Digital Warranty Passport',
      desc: 'Every service generates a tamper-evident digital warranty (30 to 180 days). If anything fails, a senior pro resolves it free.'
    },
    {
      icon: Clock,
      title: '60-Minute Urgent Emergency Dispatch',
      desc: 'Rapid telemetry matches the closest available master vehicle with onboard OEM components for immediate arrival.'
    },
    {
      icon: Globe2,
      title: 'Multi-Region & Multi-Currency Standards',
      desc: 'Engineered for international residences in Dubai, London, New York, Riyadh, and premier worldwide metropolitan hubs.'
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> International Quality Benchmark
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Space_Grotesk'] tracking-tight">
            Built for Global Excellence,{' '}
            <span className="text-blue-600">Not Just a Local Directory.</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Most local platforms connect you to random unverified contractors with inconsistent pricing. Khadmah enforces institutional-grade standards across every single trade.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-400 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-5 shadow-md shadow-blue-600/30">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Numbers Bar */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {STATS.map((s, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-blue-400">
                  {s.value}
                </div>
                <div className="text-xs text-slate-300 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
