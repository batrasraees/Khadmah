import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Sparkles, 
  ShieldCheck, 
  Star, 
  Clock, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  BadgePercent,
  ChevronRight
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/servicesData';

export default function Hero({ currentCity, currentCurrency, onSelectService, onOpenBooking }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Flatten all subservices for quick search matching
  const allSubservices = useMemo(() => {
    const list = [];
    SERVICE_CATEGORIES.forEach((cat) => {
      cat.popularSubservices.forEach((sub) => {
        list.push({
          ...sub,
          categoryTitle: cat.title,
          categoryId: cat.id
        });
      });
    });
    return list;
  }, []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return allSubservices.filter(
      (s) => s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q) || s.categoryTitle.toLowerCase().includes(q)
    ).slice(0, 5);
  }, [searchQuery, allSubservices]);

  const convertPrice = (usd) => {
    const converted = usd * currentCurrency.rate;
    if (currentCurrency.code === 'PKR') {
      return `${currentCurrency.symbol}${Math.round(converted).toLocaleString()}`;
    }
    return `${currentCurrency.symbol}${Math.round(converted)}`;
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-blue-50/60 via-slate-50 to-white">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-blue-400/10 via-indigo-500/10 to-teal-400/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs text-xs font-semibold text-slate-700 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-slate-500">Operating in</span>
            <span className="text-blue-700 font-bold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> {currentCity.name}, {currentCity.country}
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-emerald-600 font-bold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> 60-Min Express Dispatch
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 font-['Space_Grotesk'] leading-[1.12]">
            World-Class Home Services,{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 bg-clip-text text-transparent">
              In Just One Tap.
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            The modern international alternative to messy local directories. Transparent fixed pricing, background-vetted master technicians, and a full 30-day workmanship guarantee.
          </p>

          {/* Search Box with Real-time Dropdown */}
          <div className="relative max-w-2xl mx-auto pt-2">
            <div className={`relative flex items-center bg-white rounded-2xl shadow-xl shadow-blue-900/5 border-2 transition-all duration-200 ${
              isSearchFocused ? 'border-blue-500 ring-4 ring-blue-500/10 shadow-2xl' : 'border-slate-200 hover:border-slate-300'
            }`}>
              <div className="pl-4 sm:pl-5 text-slate-400">
                <Search className="w-5 h-5 text-blue-600" />
              </div>
              <input
                type="text"
                placeholder="Search 'AC gas leak', 'Drain unclog', 'TV mount', 'Sofa steam clean'..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 250)}
                className="w-full py-4 px-3 sm:px-4 text-sm sm:text-base font-medium text-slate-900 placeholder-slate-400 bg-transparent focus:outline-hidden"
              />
              <div className="pr-2 sm:pr-3">
                <button
                  type="button"
                  onClick={() => onOpenBooking()}
                  className="px-4 sm:px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-blue-600/30 transition active:scale-95 flex items-center gap-1.5"
                >
                  <span>Search</span>
                  <ArrowRight className="w-4 h-4 hidden sm:inline" />
                </button>
              </div>
            </div>

            {/* Live Autocomplete Results */}
            {isSearchFocused && searchResults.length > 0 && (
              <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 z-50 text-left animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Matching Verified Services
                </div>
                {searchResults.map((sub) => (
                  <div
                    key={sub.id}
                    onClick={() => {
                      onSelectService(sub.categoryId, sub.id);
                      setIsSearchFocused(false);
                      setSearchQuery('');
                    }}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50/70 transition cursor-pointer group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-800 group-hover:text-blue-700">
                          {sub.name}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold">
                          {sub.categoryTitle}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {sub.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 pl-3 text-right shrink-0">
                      <div>
                        <span className="text-xs text-slate-400 block font-normal">from</span>
                        <span className="text-sm font-extrabold text-slate-900">
                          {convertPrice(sub.priceUSD)}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Popular Fast Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs text-slate-600">
            <span className="text-slate-400 font-semibold flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> Popular:
            </span>
            {[
              { label: 'AC Jet-Wash', cat: 'ac-cooling', sub: 'ac-deep-clean' },
              { label: 'Thermal Leak Detection', cat: 'plumbing', sub: 'plumb-leak-detect' },
              { label: 'Laser TV Mount', cat: 'handyman-carpentry', sub: 'handy-tv-mount' },
              { label: 'Steam Villa Cleaning', cat: 'cleaning', sub: 'clean-deep-home' },
              { label: 'EV Charger Setup', cat: 'electrical', sub: 'elec-ev-charger' }
            ].map((chip) => (
              <button
                key={chip.label}
                onClick={() => onSelectService(chip.cat, chip.sub)}
                className="px-3 py-1.5 rounded-full bg-white hover:bg-blue-50 hover:text-blue-600 border border-slate-200/80 shadow-2xs font-medium transition cursor-pointer"
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Trust Badges Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-200/70 max-w-4xl mx-auto">
            <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-xl bg-white/70 border border-slate-200/60 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-800">100% Vetted Pros</div>
                <div className="text-[11px] text-slate-500">5-Tier Background Check</div>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-xl bg-white/70 border border-slate-200/60 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <BadgePercent className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-800">Upfront Flat Rates</div>
                <div className="text-[11px] text-slate-500">Zero Hidden Surcharges</div>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-xl bg-white/70 border border-slate-200/60 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 fill-amber-400 text-amber-500" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-800">4.94/5 Rating</div>
                <div className="text-[11px] text-slate-500">From 48k+ Global Homes</div>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-xl bg-white/70 border border-slate-200/60 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-800">30-Day Guarantee</div>
                <div className="text-[11px] text-slate-500">Digital Warranty Passport</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
