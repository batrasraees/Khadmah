import React, { useState, useEffect } from 'react';
import { 
  X, 
  MapPin, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  Star, 
  Clock, 
  CheckCircle2, 
  Navigation, 
  Award, 
  FileText, 
  AlertTriangle,
  RotateCcw
} from 'lucide-react';

const STAGES = [
  { id: 1, title: 'Booking Confirmed', desc: 'Job telemetry registered in dispatch network.' },
  { id: 2, title: 'Certified Pro Assigned', desc: 'Background-checked master specialist allocated.' },
  { id: 3, title: 'Technician En Route', desc: 'Equipped with diagnostic gear & OEM spares.' },
  { id: 4, title: 'In Progress On-Site', desc: 'Active execution following 18-point safety protocol.' },
  { id: 5, title: 'Work Complete & Insured', desc: 'Digital warranty passport issued & verified.' }
];

export default function LiveTrackerModal({ isOpen, onClose, activeBooking, currentCity }) {
  const [currentStage, setCurrentStage] = useState(3);
  const [etaMinutes, setEtaMinutes] = useState(14);
  const [showCallAlert, setShowCallAlert] = useState(false);
  const [showWhatsappAlert, setShowWhatsappAlert] = useState(false);
  const [showWarrantyPass, setShowWarrantyPass] = useState(false);

  // Default mock booking if opened directly without prior submission
  const booking = activeBooking || {
    id: 'KH-89412',
    category: 'AC & Climate Control',
    subservice: 'Full Jet-Wash & Sanitization',
    city: currentCity?.name || 'Dubai',
    country: currentCity?.country || 'United Arab Emirates',
    zone: currentCity?.popularZones?.[0] || 'Downtown',
    address: 'Apartment 1804, Tower B',
    customerName: 'Valued Client',
    timeSlot: '⚡ 60-Min Express Dispatch',
    totalFormatted: '$49.00',
    technician: {
      name: 'Eng. Tariq Mansoor',
      role: 'HVAC Master Specialist',
      rating: 4.96,
      jobsDone: 1420,
      license: 'EPA & German TÜV Certified',
      phone: '+1 (800) 542-3624',
      vehicle: 'Khadmah Mobile Workshop Van #04',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    }
  };

  useEffect(() => {
    if (isOpen) {
      setCurrentStage(3);
      setEtaMinutes(14);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
              <Navigation className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base font-['Space_Grotesk']">
                  Live Dispatch Radar
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 animate-pulse">
                  GPS Active
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Tracking Order #{booking.id} • {booking.city}
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

        {/* Interactive Simulation Banner */}
        <div className="bg-blue-50 border-b border-blue-100 px-5 py-2.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-blue-900 font-semibold">
            <span>FixKaro "Ek Tap, Sab Fix" Real-Time Engine</span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setCurrentStage((prev) => Math.min(5, prev + 1))}
              className="px-2.5 py-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] transition shadow-2xs"
            >
              Simulate Next Step
            </button>
            <button
              onClick={() => {
                setCurrentStage(1);
                setEtaMinutes(25);
              }}
              title="Reset"
              className="p-1 rounded-md bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 text-[11px]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Simulated Live Map Preview */}
          <div className="relative h-44 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center">
            {/* Background Grid Pattern resembling GPS map */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />

            {/* Simulated Route Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <path
                d="M 60 110 Q 180 30 320 80 T 520 70"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="4"
                strokeDasharray="6 6"
              />
            </svg>

            {/* Destination Marker */}
            <div className="absolute right-12 top-10 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/50">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-extrabold text-white bg-slate-900/90 px-2 py-0.5 rounded-full mt-1">
                Your Address
              </span>
            </div>

            {/* Technician Van Marker */}
            <div className="absolute left-20 bottom-10 flex flex-col items-center animate-bounce duration-1000">
              <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/50">
                🚗
              </div>
              <span className="text-[10px] font-extrabold text-white bg-emerald-800/90 px-2 py-0.5 rounded-full mt-1">
                Pro En Route
              </span>
            </div>

            {/* Overlay Info Card */}
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 text-xs shadow-md">
              <span className="text-slate-500 font-medium">Estimated Arrival: </span>
              <span className="font-extrabold text-slate-900">
                {currentStage >= 4 ? 'Arrived On-Site' : `${etaMinutes} Minutes`}
              </span>
            </div>
          </div>

          {/* Assigned Pro Card */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="relative">
                <img
                  src={booking.technician.photo}
                  alt={booking.technician.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-md"
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-slate-900 text-sm">
                    {booking.technician.name}
                  </h4>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Vetted
                  </span>
                </div>
                <p className="text-xs text-slate-500">{booking.technician.role}</p>
                <div className="flex items-center gap-3 text-xs text-slate-600 mt-1">
                  <span className="flex items-center gap-1 font-bold text-slate-800">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    {booking.technician.rating}
                  </span>
                  <span>•</span>
                  <span>{booking.technician.jobsDone} Jobs Completed</span>
                  <span>•</span>
                  <span className="text-[11px] text-blue-600 font-semibold">{booking.technician.license}</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  setShowCallAlert(true);
                  setTimeout(() => setShowCallAlert(false), 3000);
                }}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call Pro</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowWhatsappAlert(true);
                  setTimeout(() => setShowWhatsappAlert(false), 3000);
                }}
                className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {showCallAlert && (
            <div className="p-3 rounded-xl bg-slate-900 text-white text-xs flex items-center justify-between animate-in fade-in">
              <span>Connecting encrypted voice line to {booking.technician.name}...</span>
              <span className="text-emerald-400 font-mono text-[11px]">+1 (800) 542-3624</span>
            </div>
          )}

          {showWhatsappAlert && (
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center justify-between animate-in fade-in">
              <span>Live WhatsApp dispatch conversation active. Direct chat link generated.</span>
              <span className="font-bold underline cursor-pointer">Open WhatsApp</span>
            </div>
          )}

          {/* Stepper Timeline */}
          <div>
            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Real-Time Job Progression
            </h5>
            <div className="space-y-4">
              {STAGES.map((s) => {
                const isPast = currentStage > s.id;
                const isCurrent = currentStage === s.id;

                return (
                  <div key={s.id} className="flex items-start gap-3.5">
                    <div className="flex flex-col items-center">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition ${
                        isPast
                          ? 'bg-emerald-500 text-white'
                          : isCurrent
                          ? 'bg-blue-600 text-white ring-4 ring-blue-500/20'
                          : 'bg-slate-200 text-slate-500'
                      }`}>
                        {isPast ? <CheckCircle2 className="w-4 h-4" /> : s.id}
                      </div>
                      {s.id !== 5 && (
                        <div className={`w-0.5 h-8 my-1 ${
                          isPast ? 'bg-emerald-400' : 'bg-slate-200'
                        }`} />
                      )}
                    </div>

                    <div className="pt-0.5">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold ${
                          isCurrent ? 'text-blue-700' : isPast ? 'text-slate-900' : 'text-slate-400'
                        }`}>
                          {s.title}
                        </span>
                        {isCurrent && (
                          <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded bg-blue-100 text-blue-700">
                            Current Stage
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Digital Warranty Passport Card */}
          {currentStage >= 5 && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950 to-slate-900 text-white border border-emerald-500/30 animate-in fade-in duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span className="font-bold text-sm">Digital Warranty Certificate Issued</span>
                </div>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  Verified
                </span>
              </div>
              <p className="text-xs text-slate-300 mb-3">
                Congratulations! Your work is fully covered by Khadmah 30-Day Workmanship Guarantee and $1,000,000 global property protection.
              </p>
              <div className="flex items-center justify-between text-xs border-t border-slate-700 pt-3">
                <span className="text-slate-400">Passport Certificate #WRN-{booking.id}</span>
                <button
                  type="button"
                  onClick={() => alert(`Warranty Certificate downloaded for Order #${booking.id}`)}
                  className="px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs"
                >
                  Download PDF Certificate
                </button>
              </div>
            </div>
          )}

          {/* Booking Meta Details */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
            <div className="flex justify-between">
              <span className="text-slate-500">Service:</span>
              <span className="font-bold text-slate-800">{booking.subservice}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Location:</span>
              <span className="font-bold text-slate-800">{booking.address}, {booking.zone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Total Price:</span>
              <span className="font-extrabold text-blue-600">{booking.totalFormatted}</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3.5 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            Need urgent assistance? Hotline: <span className="font-bold text-slate-800">+1 (800) KHADMAH</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition"
          >
            Close Radar
          </button>
        </div>
      </div>
    </div>
  );
}
