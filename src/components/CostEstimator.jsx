import React, { useState } from 'react';
import { 
  Calculator, 
  Home, 
  Building2, 
  Sparkles, 
  Check, 
  ArrowRight, 
  BadgePercent, 
  ShieldCheck 
} from 'lucide-react';

const PROPERTY_TYPES = [
  { id: 'apartment-small', label: 'Studio / 1-BR Flat', multiplier: 1.0, icon: Home, desc: 'Up to 900 sq ft' },
  { id: 'apartment-large', label: '2 - 3 BR Apartment', multiplier: 1.45, icon: Building2, desc: '900 - 1,800 sq ft' },
  { id: 'villa', label: '4+ BR Luxury Villa', multiplier: 2.1, icon: Home, desc: '1,800 - 4,500 sq ft' },
  { id: 'commercial', label: 'Office / Retail Space', multiplier: 2.6, icon: Building2, desc: 'Commercial footprint' }
];

const PACKAGES = [
  {
    id: 'ac-full',
    categoryId: 'ac-cooling',
    title: 'HVAC Airflow & Coil Chemical Rejuvenation',
    baseUSD: 65,
    includes: ['All indoor blower units', 'High-pressure chemical coil rinse', 'Drain pipe clearing', 'Freon pressure calibration']
  },
  {
    id: 'deep-clean',
    categoryId: 'cleaning',
    title: 'Hospital-Grade Dry Steam Deep Clean',
    baseUSD: 85,
    includes: ['Kärcher 160°C dry steam', 'Kitchen degreasing & oven interior', 'Bathroom descaling & grout scrub', 'Eco sanitization']
  },
  {
    id: 'elec-audit',
    categoryId: 'electrical',
    title: 'Full Electrical & Smart Infrastructure Audit',
    baseUSD: 70,
    includes: ['RCD tripping diagnostics', 'Earth leakage Megger check', 'Smart switch panel testing', 'Infrared hotspot scan']
  },
  {
    id: 'plumb-overhaul',
    categoryId: 'plumbing',
    title: 'Plumbing, Water Heater & Pressure Check',
    baseUSD: 60,
    includes: ['Water heater anode inspection', 'Concealed acoustic leak sweep', 'Pressure regulator calibration', 'Drain trap flush']
  }
];

export default function CostEstimator({ currentCurrency, onBookCustomQuote }) {
  const [selectedProperty, setSelectedProperty] = useState(PROPERTY_TYPES[1]);
  const [selectedPackage, setSelectedPackage] = useState(PACKAGES[0]);
  const [frequency, setFrequency] = useState('monthly'); // 'onetime' | 'monthly' | 'quarterly'

  const discountRate = frequency === 'monthly' ? 0.20 : frequency === 'quarterly' ? 0.10 : 0;
  const rawUSD = selectedPackage.baseUSD * selectedProperty.multiplier;
  const finalUSD = rawUSD * (1 - discountRate);

  const convertPrice = (usd) => {
    const converted = usd * currentCurrency.rate;
    if (currentCurrency.code === 'PKR') {
      return `${currentCurrency.symbol}${Math.round(converted).toLocaleString()}`;
    }
    return `${currentCurrency.symbol}${Math.round(converted)}`;
  };

  return (
    <section id="estimator" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-wider mb-3 border border-blue-500/30">
            <Calculator className="w-3.5 h-3.5" /> Instant Quote Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] tracking-tight">
            Calculate Your Flat Rate in Seconds
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Select your property footprint and service scope. Dynamic pricing converted in real time into {currentCurrency.code}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Property Type */}
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                1. Select Property Footprint
              </label>
              <div className="grid grid-cols-2 gap-3">
                {PROPERTY_TYPES.map((prop) => {
                  const Icon = prop.icon;
                  const isSelected = selectedProperty.id === prop.id;
                  return (
                    <button
                      key={prop.id}
                      type="button"
                      onClick={() => setSelectedProperty(prop)}
                      className={`p-3.5 rounded-2xl border text-left transition flex flex-col justify-between ${
                        isSelected
                          ? 'border-blue-500 bg-blue-950/60 ring-2 ring-blue-500/30 text-white'
                          : 'border-slate-800 bg-slate-800/60 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-blue-400' : 'text-slate-400'}`} />
                        {isSelected && <span className="w-2 h-2 rounded-full bg-blue-400" />}
                      </div>
                      <div className="font-bold text-xs sm:text-sm">{prop.label}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{prop.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Service Scope */}
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                2. Select Scope Package
              </label>
              <div className="space-y-2.5">
                {PACKAGES.map((pkg) => {
                  const isSelected = selectedPackage.id === pkg.id;
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg)}
                      className={`p-4 rounded-2xl border transition cursor-pointer flex items-center justify-between gap-4 ${
                        isSelected
                          ? 'border-blue-500 bg-blue-950/60 ring-2 ring-blue-500/30'
                          : 'border-slate-800 bg-slate-800/60 hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm text-white">{pkg.title}</div>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1 text-[11px] text-slate-400">
                          {pkg.includes.slice(0, 3).map((item, i) => (
                            <span key={i} className="flex items-center gap-1">
                              <Check className="w-3 h-3 text-emerald-400" /> {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-sm font-extrabold text-blue-400">
                          {convertPrice(pkg.baseUSD * selectedProperty.multiplier)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Frequency / Plan */}
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                3. Maintenance Frequency
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'onetime', label: 'One-Time Visit', discount: null },
                  { id: 'quarterly', label: 'Quarterly Care', discount: 'Save 10%' },
                  { id: 'monthly', label: 'Monthly Priority', discount: 'Save 20%' }
                ].map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFrequency(f.id)}
                    className={`p-3 rounded-2xl border text-center transition ${
                      frequency === f.id
                        ? 'border-blue-500 bg-blue-950/70 text-white font-bold ring-2 ring-blue-500/30'
                        : 'border-slate-800 bg-slate-800/60 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">{f.label}</div>
                    {f.discount && (
                      <span className="inline-block mt-1 text-[10px] font-extrabold px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        {f.discount}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Instant Quote Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl relative">
            <div className="flex items-center justify-between pb-6 border-b border-slate-700/80">
              <div>
                <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">
                  Guaranteed Rate Card
                </span>
                <h3 className="text-xl font-extrabold font-['Space_Grotesk'] mt-0.5">
                  Instant Quote Summary
                </h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-blue-400">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>

            <div className="py-6 space-y-3.5 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Property:</span>
                <span className="font-bold text-white">{selectedProperty.label}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Selected Scope:</span>
                <span className="font-bold text-white text-right max-w-[200px] truncate">{selectedPackage.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Frequency:</span>
                <span className="font-bold text-white capitalize">{frequency}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Included In Standard Fee:</span>
                <span className="text-emerald-400 font-semibold">Consumables & Labor</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Warranty Passport:</span>
                <span className="text-emerald-400 font-semibold">30 to 90 Days Coverage</span>
              </div>

              {discountRate > 0 && (
                <div className="flex justify-between text-emerald-400 font-bold border-t border-slate-700/60 pt-3">
                  <span>Frequency Discount ({discountRate * 100}%):</span>
                  <span>-{convertPrice(rawUSD * discountRate)}</span>
                </div>
              )}

              <div className="border-t border-slate-700 pt-4 flex items-baseline justify-between">
                <div>
                  <div className="text-[11px] text-slate-400 uppercase font-semibold">Estimated Total ({currentCurrency.code})</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk'] mt-0.5">
                    {convertPrice(finalUSD)}
                  </div>
                </div>
                <div className="text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20">
                  Fixed Price
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onBookCustomQuote(selectedPackage.categoryId)}
                className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 active:scale-[0.99] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 transition duration-200"
              >
                <span>Lock This Quote & Book Pro</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>No pre-payment required. Pay only after satisfaction.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
