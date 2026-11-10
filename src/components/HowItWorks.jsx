import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  CreditCard, 
  FileCheck 
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/servicesData';

export default function HowItWorks({ onOpenBooking }) {
  const icons = [Clock, ShieldCheck, CreditCard, FileCheck];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 text-blue-700 font-bold text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Effortless Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Space_Grotesk'] tracking-tight">
            How Khadmah Delivers in 4 Simple Steps
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Inspired by the effortless "Ek Tap, Sab Fix" flow, elevated with global security, live tracking, and digital warranties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((item, index) => {
            const Icon = icons[index] || CheckCircle2;

            return (
              <div
                key={item.step}
                className="relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-blue-600/30 font-['Space_Grotesk']">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenBooking()}
            className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-extrabold text-sm tracking-wide shadow-lg shadow-blue-600/25 transition inline-flex items-center gap-2"
          >
            <span>START INSTANT BOOKING</span>
          </button>
        </div>
      </div>
    </section>
  );
}
