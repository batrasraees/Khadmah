import React, { useState } from 'react';
import { 
  X, 
  Briefcase, 
  ShieldCheck, 
  CheckCircle2, 
  Upload, 
  Coins, 
  MapPin, 
  User, 
  Phone, 
  Mail, 
  Sparkles 
} from 'lucide-react';
import { CITIES } from '../data/servicesData';

export default function ProJoinModal({ isOpen, onClose, currentCity }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: currentCity?.name || 'Dubai',
    trade: 'HVAC & Air Conditioning',
    experienceYears: '5-10 Years',
    insuranceConfirmed: true
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-blue-400 border border-blue-400/30 flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base font-['Space_Grotesk']">
                Join As Verified Global Pro
              </h3>
              <p className="text-xs text-slate-400">
                Guaranteed high-ticket bookings • Weekly payouts • Zero lead fees
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 font-['Space_Grotesk']">
              Application Under Review!
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto">
              Thank you, <span className="font-bold text-slate-800">{formData.name}</span>. Our fleet onboarding team in {formData.city} will contact you on <span className="font-bold text-slate-800">{formData.phone}</span> within 24 hours to schedule your practical trade test and identity check.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Full Name / Trade Company *</label>
                <input
                  type="text"
                  required
                  placeholder="Master Technician / Business Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full font-medium p-2.5 rounded-xl border border-slate-200"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Direct Mobile Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+971 50 ... or +44 ..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full font-medium p-2.5 rounded-xl border border-slate-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Operating City *</label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full font-medium p-2.5 rounded-xl border border-slate-200 bg-white"
                >
                  {CITIES.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.flag} {c.name} ({c.country})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Primary Trade Specialty *</label>
                <select
                  value={formData.trade}
                  onChange={(e) => setFormData({ ...formData, trade: e.target.value })}
                  className="w-full font-medium p-2.5 rounded-xl border border-slate-200 bg-white"
                >
                  <option>HVAC & Air Conditioning</option>
                  <option>Master Plumbing & Drainage</option>
                  <option>Electrical & EV Charging</option>
                  <option>Luxury Deep Cleaning</option>
                  <option>Handyman & Joinery</option>
                  <option>Interior Painting & Waterproofing</option>
                  <option>Major Appliance Repair</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Years of Practical Experience *</label>
              <div className="grid grid-cols-3 gap-2">
                {['3-5 Years', '5-10 Years', '10+ Years Master'].map((exp) => (
                  <button
                    key={exp}
                    type="button"
                    onClick={() => setFormData({ ...formData, experienceYears: exp })}
                    className={`p-2.5 rounded-xl border text-center font-bold transition ${
                      formData.experienceYears === exp
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {exp}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Onboarding Requirements:</span>
              </div>
              <ul className="space-y-1 text-slate-500 text-[11px] list-disc list-inside">
                <li>Valid government trade trade license / certified diploma</li>
                <li>Clear police background check certificate</li>
                <li>Ownership of professional tools and diagnostic instruments</li>
              </ul>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase tracking-wider transition shadow-md shadow-blue-600/30"
            >
              Submit Fleet Application
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
