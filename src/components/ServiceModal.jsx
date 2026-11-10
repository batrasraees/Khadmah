import React, { useState, useEffect } from 'react';
import { 
  X, 
  Check, 
  Calendar, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Phone, 
  User, 
  Mail, 
  CreditCard, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  AlertCircle,
  Tag,
  CheckCircle2
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/servicesData';

export default function ServiceModal({
  isOpen,
  onClose,
  initialCategoryId,
  initialSubserviceId,
  currentCity,
  currentCurrency,
  onBookingConfirmed
}) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubservice, setSelectedSubservice] = useState(null);
  const [step, setStep] = useState(1); // 1: Service selection, 2: Slot & Add-ons, 3: Address & Contact, 4: Review & Confirm

  // Slot and Add-ons
  const [selectedDate, setSelectedDate] = useState('today');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('09:00 - 12:00 (Morning)');
  const [isExpressEmergency, setIsExpressEmergency] = useState(false);
  const [addons, setAddons] = useState({
    extraWarranty: false,
    ecoSanitize: false
  });

  // Contact & Address
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    zone: '',
    streetAddress: '',
    buildingVilla: '',
    notes: '',
    paymentMethod: 'card'
  });

  // Promo code
  const [promoInput, setPromoInput] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');

  // Sync initial selection when opened
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      const cat = SERVICE_CATEGORIES.find((c) => c.id === initialCategoryId) || SERVICE_CATEGORIES[0];
      setSelectedCategory(cat);
      if (initialSubserviceId) {
        const sub = cat.popularSubservices.find((s) => s.id === initialSubserviceId) || cat.popularSubservices[0];
        setSelectedSubservice(sub);
      } else {
        setSelectedSubservice(cat.popularSubservices[0]);
      }
      // default zone
      if (currentCity?.popularZones?.length > 0) {
        setFormData((prev) => ({ ...prev, zone: currentCity.popularZones[0] }));
      }
    }
  }, [isOpen, initialCategoryId, initialSubserviceId, currentCity]);

  if (!isOpen || !selectedCategory || !selectedSubservice) return null;

  const convertPrice = (usd) => {
    const converted = usd * currentCurrency.rate;
    if (currentCurrency.code === 'PKR') {
      return `${currentCurrency.symbol}${Math.round(converted).toLocaleString()}`;
    }
    return `${currentCurrency.symbol}${Math.round(converted)}`;
  };

  // Price calculations
  const basePrice = selectedSubservice.priceUSD;
  const expressFeeUSD = isExpressEmergency ? 15 : 0;
  const warrantyFeeUSD = addons.extraWarranty ? 12 : 0;
  const sanitizeFeeUSD = addons.ecoSanitize ? 10 : 0;
  const subtotalUSD = basePrice + expressFeeUSD + warrantyFeeUSD + sanitizeFeeUSD;
  const discountUSD = (subtotalUSD * discountPercent) / 100;
  const totalUSD = Math.max(0, subtotalUSD - discountUSD);

  const handleApplyPromo = () => {
    if (promoInput.trim().toUpperCase() === 'WELCOME20' || promoInput.trim().toUpperCase() === 'FIXKARO') {
      setDiscountPercent(20);
      setPromoMessage('20% Global Launch Discount Applied!');
    } else if (promoInput.trim().toUpperCase() === 'EXPRESS') {
      setDiscountPercent(15);
      setPromoMessage('15% Express Booking Discount Applied!');
    } else {
      setPromoMessage('Invalid coupon code. Try WELCOME20');
      setDiscountPercent(0);
    }
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    const newBooking = {
      id: `KH-${Math.floor(10000 + Math.random() * 90000)}`,
      category: selectedCategory.title,
      subservice: selectedSubservice.name,
      city: currentCity.name,
      country: currentCity.country,
      zone: formData.zone || currentCity.popularZones[0],
      address: `${formData.buildingVilla ? formData.buildingVilla + ', ' : ''}${formData.streetAddress || 'Residential Sector'}`,
      customerName: formData.fullName || 'Valued Client',
      phone: formData.phone || '+1 800 555 0192',
      email: formData.email,
      date: selectedDate === 'today' ? 'Today' : selectedDate === 'tomorrow' ? 'Tomorrow' : 'Scheduled',
      timeSlot: isExpressEmergency ? '⚡ 60-Min Emergency Express' : selectedTimeSlot,
      totalFormatted: convertPrice(totalUSD),
      paymentMethod: formData.paymentMethod,
      status: 'confirmed',
      technician: {
        name: 'Eng. Tariq Mansoor',
        role: 'Master Certified Specialist',
        rating: 4.96,
        jobsDone: 1420,
        license: 'ISO-9001 & EPA Certified',
        phone: '+971 50 839 2101',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
      }
    };
    onBookingConfirmed(newBooking);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-400/30 flex items-center justify-center text-blue-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-lg font-['Space_Grotesk']">
                  Instant Booking Platform
                </h3>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Fixed Rate
                </span>
              </div>
              <p className="text-xs text-slate-300">
                {currentCity.flag} {currentCity.name} Hub • 30-Day Digital Warranty Included
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex items-center justify-between text-xs font-semibold text-slate-600">
          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
              step >= 1 ? 'bg-blue-600 text-white font-bold' : 'bg-slate-200 text-slate-600'
            }`}>
              1
            </span>
            <span className={step === 1 ? 'text-blue-700 font-bold' : ''}>Service Details</span>
          </div>

          <div className="h-0.5 w-8 bg-slate-200" />

          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
              step >= 2 ? 'bg-blue-600 text-white font-bold' : 'bg-slate-200 text-slate-600'
            }`}>
              2
            </span>
            <span className={step === 2 ? 'text-blue-700 font-bold' : ''}>Slot & Express</span>
          </div>

          <div className="h-0.5 w-8 bg-slate-200" />

          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
              step >= 3 ? 'bg-blue-600 text-white font-bold' : 'bg-slate-200 text-slate-600'
            }`}>
              3
            </span>
            <span className={step === 3 ? 'text-blue-700 font-bold' : ''}>Address & Signoff</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {/* STEP 1: SERVICE & PACKAGE SELECTION */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  1. Select Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {SERVICE_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat);
                        setSelectedSubservice(cat.popularSubservices[0]);
                      }}
                      className={`p-3 rounded-xl border text-left text-xs font-bold transition flex flex-col justify-between ${
                        selectedCategory.id === cat.id
                          ? 'border-blue-600 bg-blue-50/70 text-blue-700 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                      }`}
                    >
                      <span className="line-clamp-1">{cat.title}</span>
                      <span className="text-[10px] text-slate-400 mt-1">from {convertPrice(cat.basePriceUSD)}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  2. Select Specific Job / Package
                </label>
                <div className="space-y-2.5">
                  {selectedCategory.popularSubservices.map((sub) => (
                    <div
                      key={sub.id}
                      onClick={() => setSelectedSubservice(sub)}
                      className={`p-4 rounded-2xl border-2 transition cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        selectedSubservice.id === sub.id
                          ? 'border-blue-600 bg-blue-50/40 ring-2 ring-blue-500/10'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-sm">
                            {sub.name}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-semibold flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {sub.duration}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500">
                          {sub.description}
                        </p>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1 text-[11px] text-emerald-700">
                          {sub.included.map((inc, i) => (
                            <span key={i} className="flex items-center gap-1">
                              <Check className="w-3 h-3 text-emerald-600" /> {inc}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="text-right sm:pl-4 shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100">
                        <div className="text-xs text-slate-400 font-medium">Standard Rate</div>
                        <div className="text-xl font-extrabold text-blue-600">
                          {convertPrice(sub.priceUSD)}
                        </div>
                        <div className="text-[10px] text-slate-400 font-semibold">{sub.warranty}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900">
                  <span className="font-bold">Transparent Rate Promise:</span> The quote you see includes labor, diagnostic tools, and standard consumables. Any special spare parts required are billed strictly against certified manufacturer MSRP.
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: TIMING & ADD-ONS */}
          {step === 2 && (
            <div className="space-y-6">
              {/* Emergency Express Toggle */}
              <div className={`p-4 rounded-2xl border-2 transition cursor-pointer flex items-center justify-between ${
                isExpressEmergency ? 'border-amber-500 bg-amber-50/60' : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
              onClick={() => setIsExpressEmergency(!isExpressEmergency)}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                    isExpressEmergency ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    ⚡
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
                      <span>Express Emergency Dispatch</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold">
                        Within 60 Minutes
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">
                      Top priority geo-routing for burst pipes, AC breakdown, or power faults.
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-amber-700">+{convertPrice(15)}</span>
                  <div className="text-[10px] text-slate-400">Express Priority</div>
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Select Booking Date
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'today', label: 'Today', sub: 'Immediate availability' },
                    { id: 'tomorrow', label: 'Tomorrow', sub: 'Guaranteed window' },
                    { id: 'later', label: 'Weekend / Later', sub: 'Custom appointment' }
                  ].map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setSelectedDate(d.id)}
                      className={`p-3 rounded-xl border text-left text-xs font-bold transition ${
                        selectedDate === d.id
                          ? 'border-blue-600 bg-blue-50/70 text-blue-700 shadow-2xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                      }`}
                    >
                      <div className="text-sm font-bold">{d.label}</div>
                      <div className="text-[10px] text-slate-400 font-normal mt-0.5">{d.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              {!isExpressEmergency && (
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Preferred Time Window
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      '09:00 - 12:00 (Morning)',
                      '12:00 - 16:00 (Afternoon)',
                      '16:00 - 20:00 (Evening)'
                    ].map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`p-3 rounded-xl border text-left text-xs font-semibold transition ${
                          selectedTimeSlot === slot
                            ? 'border-blue-600 bg-blue-50/70 text-blue-700 font-bold'
                            : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5 inline mr-1.5 text-blue-600" />
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Value Add-ons */}
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Optional Protection Add-ons
                </label>
                <div className="space-y-2">
                  <div
                    onClick={() => setAddons((p) => ({ ...p, extraWarranty: !p.extraWarranty }))}
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition text-xs ${
                      addons.extraWarranty ? 'border-blue-600 bg-blue-50/40' : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={addons.extraWarranty}
                        readOnly
                        className="rounded text-blue-600 pointer-events-none"
                      />
                      <div>
                        <div className="font-bold text-slate-800">Extended 90-Day VIP Warranty Passport</div>
                        <div className="text-[11px] text-slate-500">Free re-visit anytime within 3 months, zero questions asked.</div>
                      </div>
                    </div>
                    <span className="font-bold text-slate-900">+{convertPrice(12)}</span>
                  </div>

                  <div
                    onClick={() => setAddons((p) => ({ ...p, ecoSanitize: !p.ecoSanitize }))}
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition text-xs ${
                      addons.ecoSanitize ? 'border-blue-600 bg-blue-50/40' : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={addons.ecoSanitize}
                        readOnly
                        className="rounded text-blue-600 pointer-events-none"
                      />
                      <div>
                        <div className="font-bold text-slate-800">Hospital-Grade Antibacterial Mist Finish</div>
                        <div className="text-[11px] text-slate-500">Organic botanical sanitizer applied around the workspace.</div>
                      </div>
                    </div>
                    <span className="font-bold text-slate-900">+{convertPrice(10)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: ADDRESS, CONTACT & COUPON */}
          {step === 3 && (
            <form onSubmit={handleSubmitBooking} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Wright"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full text-xs font-medium pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Mobile Phone (for live WhatsApp tracking) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567 or +44 20 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs font-medium pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    City Zone / Area *
                  </label>
                  <select
                    value={formData.zone}
                    onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                    className="w-full text-xs font-medium p-2.5 rounded-xl border border-slate-200 bg-white"
                  >
                    {currentCity.popularZones.map((z) => (
                      <option key={z} value={z}>
                        {z} ({currentCity.name})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Apt / Villa / Suite #
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Villa 42B or Apt 1403"
                    value={formData.buildingVilla}
                    onChange={(e) => setFormData({ ...formData, buildingVilla: e.target.value })}
                    className="w-full text-xs font-medium px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Street Address & Building Name *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marina Gate Tower 1, Al Marsa St"
                    value={formData.streetAddress}
                    onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                    className="w-full text-xs font-medium pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Access Notes / Problem Details (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Gate passcode, parking spot instructions, or specific noise symptom..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full text-xs font-medium p-3 rounded-xl border border-slate-200 focus:outline-hidden focus:border-blue-500"
                />
              </div>

              {/* Promo Code Box */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      placeholder="Promo Code (Use: WELCOME20)"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="w-full text-xs font-bold pl-8 pr-3 py-2 rounded-lg border border-slate-200 uppercase bg-white"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleApplyPromo}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition"
                  >
                    Apply
                  </button>
                </div>
                {promoMessage && (
                  <p className={`text-[11px] font-semibold mt-1.5 ${
                    discountPercent > 0 ? 'text-emerald-600' : 'text-rose-600'
                  }`}>
                    {promoMessage}
                  </p>
                )}
              </div>

              {/* Payment Method */}
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'card', label: 'Credit / Debit Card', badge: 'Apple / Google Pay' },
                    { id: 'cash', label: 'Pay On Completion', badge: 'Cash or Tap' },
                    { id: 'invoice', label: 'Corporate Billing', badge: 'VAT Invoice' }
                  ].map((pay) => (
                    <button
                      key={pay.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: pay.id })}
                      className={`p-3 rounded-xl border text-left text-xs font-bold transition ${
                        formData.paymentMethod === pay.id
                          ? 'border-blue-600 bg-blue-50/70 text-blue-700'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <div>{pay.label}</div>
                      <div className="text-[10px] text-slate-400 font-normal">{pay.badge}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Invoice Summary Box */}
              <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>{selectedSubservice.name}</span>
                  <span>{convertPrice(basePrice)}</span>
                </div>
                {isExpressEmergency && (
                  <div className="flex justify-between text-amber-400">
                    <span>⚡ 60-Min Emergency Dispatch</span>
                    <span>+{convertPrice(15)}</span>
                  </div>
                )}
                {addons.extraWarranty && (
                  <div className="flex justify-between text-slate-300">
                    <span>Extended 90-Day VIP Warranty</span>
                    <span>+{convertPrice(12)}</span>
                  </div>
                )}
                {addons.ecoSanitize && (
                  <div className="flex justify-between text-slate-300">
                    <span>Antibacterial Mist Sanitization</span>
                    <span>+{convertPrice(10)}</span>
                  </div>
                )}
                {discountPercent > 0 && (
                  <div className="flex justify-between text-emerald-400 font-bold">
                    <span>Launch Discount ({discountPercent}%)</span>
                    <span>-{convertPrice(discountUSD)}</span>
                  </div>
                )}
                <div className="border-t border-slate-700 pt-2 flex justify-between items-baseline font-bold text-sm">
                  <span>Total Due ({currentCurrency.code})</span>
                  <span className="text-xl text-blue-400">{convertPrice(totalUSD)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm tracking-wide shadow-xl shadow-blue-600/30 transition active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>CONFIRM & DISPATCH TECHNICIAN</span>
              </button>
            </form>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-200 text-xs font-bold transition"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          ) : (
            <div className="text-xs text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>FixKaro / Khadmah Verified</span>
            </div>
          )}

          {step < 3 && (
            <button
              type="button"
              onClick={() => setStep(step + 1)}
              className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition shadow-sm"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
