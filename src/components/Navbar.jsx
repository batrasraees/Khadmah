import React, { useState } from 'react';
import { 
  Wrench, 
  MapPin, 
  Coins, 
  Phone, 
  Menu, 
  X, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  ChevronDown, 
  CalendarCheck2 
} from 'lucide-react';
import { CITIES, CURRENCIES } from '../data/servicesData';

export default function Navbar({ 
  currentCity, 
  setCurrentCity, 
  currentCurrency, 
  setCurrentCurrency, 
  onOpenBooking, 
  onOpenTracker, 
  onOpenPartnerModal,
  activeBooking
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cityDropdown, setCityDropdown] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  return (
    <>
      {/* Top International Announcement Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-semibold text-[11px]">
              <Sparkles className="w-3 h-3" /> GLOBAL STANDARDS
            </span>
            <span className="hidden sm:inline text-slate-300">
              Vetted master technicians across UAE, UK, US, KSA & global hubs.
            </span>
            <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" /> $1M Insurance Coverage
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1 text-slate-300 hover:text-white cursor-pointer">
              <Clock className="w-3 h-3 text-blue-400" />
              <span>24/7 Emergency Dispatch</span>
            </div>
            <a 
              href="tel:+18005423624" 
              className="font-semibold text-white hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-emerald-400" /> +1 (800) KHADMAH
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-8">
              <a href="#" className="flex items-center gap-3 group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
                  <Wrench className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-2xl font-extrabold tracking-tight text-slate-900 font-['Space_Grotesk']">
                      KHADMAH
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200/60">
                      PRO
                    </span>
                  </div>
                  <p className="text-[10px] font-medium tracking-widest text-slate-400 uppercase -mt-0.5">
                    Global On-Demand Services
                  </p>
                </div>
              </a>

              {/* Desktop Nav Links */}
              <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
                <a href="#services" className="hover:text-blue-600 transition-colors">
                  Services
                </a>
                <a href="#estimator" className="hover:text-blue-600 transition-colors">
                  Instant Quote
                </a>
                <a href="#how-it-works" className="hover:text-blue-600 transition-colors">
                  How It Works
                </a>
                <a href="#why-us" className="hover:text-blue-600 transition-colors">
                  Quality Guarantee
                </a>
                <a href="#reviews" className="hover:text-blue-600 transition-colors">
                  Reviews
                </a>
                <button 
                  onClick={onOpenPartnerModal} 
                  className="text-slate-500 hover:text-blue-600 transition-colors"
                >
                  Join as Pro
                </button>
              </nav>
            </div>

            {/* Right Controls: City, Currency, Tracker, Booking CTA */}
            <div className="hidden md:flex items-center gap-3">
              {/* City Switcher */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setCityDropdown(!cityDropdown);
                    setCurrencyDropdown(false);
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/70 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition"
                >
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>{currentCity.flag} {currentCity.name}</span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                {cityDropdown && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-2 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Select Service City
                    </div>
                    {CITIES.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => {
                          setCurrentCity(c);
                          if (CURRENCIES[c.currency]) {
                            setCurrentCurrency(CURRENCIES[c.currency]);
                          }
                          setCityDropdown(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg transition text-left ${
                          currentCity.id === c.id ? 'bg-blue-50 text-blue-700 font-bold' : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-base">{c.flag}</span>
                          <span>{c.name}</span>
                        </span>
                        <span className="text-[11px] text-slate-400">{c.currency}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Currency Selector */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setCurrencyDropdown(!currencyDropdown);
                    setCityDropdown(false);
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/70 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition"
                >
                  <Coins className="w-3.5 h-3.5 text-amber-500" />
                  <span>{currentCurrency.code}</span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                {currencyDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50">
                    <div className="px-2 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Select Currency
                    </div>
                    {Object.values(CURRENCIES).map((curr) => (
                      <button
                        key={curr.code}
                        onClick={() => {
                          setCurrentCurrency(curr);
                          setCurrencyDropdown(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg transition text-left ${
                          currentCurrency.code === curr.code ? 'bg-blue-50 text-blue-700 font-bold' : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{curr.flag}</span>
                          <span>{curr.code}</span>
                        </span>
                        <span className="text-[11px] text-slate-400">{curr.symbol}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Live Tracker Button (FixKaro inspired) */}
              <button
                onClick={onOpenTracker}
                className="relative flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 hover:border-blue-300 bg-white hover:bg-blue-50/50 text-xs font-semibold text-slate-700 transition"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Track Pro</span>
              </button>

              {/* Primary Book CTA */}
              <button
                onClick={() => onOpenBooking()}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white text-xs font-bold tracking-wide shadow-md shadow-blue-600/30 transition"
              >
                <CalendarCheck2 className="w-4 h-4" />
                <span>BOOK SERVICE</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold shadow-xs"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  City Location
                </label>
                <select
                  value={currentCity.id}
                  onChange={(e) => {
                    const found = CITIES.find((c) => c.id === e.target.value);
                    if (found) {
                      setCurrentCity(found);
                      if (CURRENCIES[found.currency]) setCurrentCurrency(CURRENCIES[found.currency]);
                    }
                  }}
                  className="w-full text-xs font-semibold p-2 rounded-lg border border-slate-200 bg-slate-50"
                >
                  {CITIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.flag} {c.name} ({c.currency})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Currency
                </label>
                <select
                  value={currentCurrency.code}
                  onChange={(e) => {
                    if (CURRENCIES[e.target.value]) setCurrentCurrency(CURRENCIES[e.target.value]);
                  }}
                  className="w-full text-xs font-semibold p-2 rounded-lg border border-slate-200 bg-slate-50"
                >
                  {Object.values(CURRENCIES).map((cu) => (
                    <option key={cu.code} value={cu.code}>
                      {cu.flag} {cu.code} ({cu.symbol})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-700">
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-50"
              >
                All Services
              </a>
              <a 
                href="#estimator" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-50"
              >
                Cost Calculator
              </a>
              <a 
                href="#how-it-works" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-50"
              >
                How It Works
              </a>
              <a 
                href="#why-us" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-50"
              >
                Quality & Guarantees
              </a>
              <a 
                href="#reviews" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-slate-50"
              >
                Customer Testimonials
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTracker();
                }}
                className="flex items-center justify-between p-2 rounded-lg text-emerald-700 bg-emerald-50 text-left font-bold"
              >
                <span>Live Technician Status</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-800">Live</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPartnerModal();
                }}
                className="p-2 text-left rounded-lg text-blue-600 hover:bg-blue-50 font-semibold"
              >
                Join As Verified Pro / Technician
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-center shadow-lg shadow-blue-600/30"
            >
              Book Service Now
            </button>
          </div>
        )}
      </header>
    </>
  );
}
