import React from 'react';
import { 
  X, 
  Check, 
  Clock, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

export default function ServiceDetailModal({ 
  isOpen, 
  onClose, 
  category, 
  subservice, 
  currentCurrency, 
  onBookNow 
}) {
  if (!isOpen || !category || !subservice) return null;

  const convertPrice = (usd) => {
    const converted = usd * currentCurrency.rate;
    if (currentCurrency.code === 'PKR') {
      return `${currentCurrency.symbol}${Math.round(converted).toLocaleString()}`;
    }
    return `${currentCurrency.symbol}${Math.round(converted)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cover Image Banner */}
        <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
          <img
            src={category.coverImage}
            alt={subservice.name}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-500/80 text-white">
              {category.title}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white font-['Space_Grotesk'] mt-1">
              {subservice.name}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[65vh] overflow-y-auto text-xs sm:text-sm">
          {/* Overview & Pricing */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div>
              <div className="text-xs text-slate-500">Fixed Rate Guarantee</div>
              <div className="text-2xl font-extrabold text-blue-600 font-['Space_Grotesk']">
                {convertPrice(subservice.priceUSD)}
              </div>
              <div className="text-xs text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
                <span>{subservice.warranty}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Duration: <strong>{subservice.duration}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Insurance: <strong>$1M Covered</strong></span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-1.5">Service Overview</h4>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
              {subservice.description}
            </p>
          </div>

          {/* What is Included */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-2.5">What Is Included in Standard Rate</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {subservice.included.map((inc, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-emerald-950 text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{inc}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-blue-50/70 border border-blue-100 text-blue-950 text-xs font-medium">
                <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Pre & Post Work Digital Diagnostic Report</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-purple-50/70 border border-purple-100 text-purple-950 text-xs font-medium">
                <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0" />
                <span>Workplace Sanitization & Waste Disposal</span>
              </div>
            </div>
          </div>

          {/* 18-Point Protocol Note */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs space-y-1">
            <div className="font-bold flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-700" />
              <span>International Trade Standard (ISO-9001 Certified)</span>
            </div>
            <p className="text-amber-800">
              Our technicians arrive in dedicated mobile workshops equipped with calibrated electronic diagnostic gear (Fluke, Testo, Kärcher). All spare parts provided are 100% OEM with digital manufacturer receipts.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 transition"
          >
            Close Details
          </button>

          <button
            onClick={() => {
              onClose();
              onBookNow(category.id, subservice.id);
            }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs tracking-wider uppercase shadow-md shadow-blue-600/30 transition"
          >
            <span>Proceed to Booking</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
