import React, { useState } from 'react';
import { 
  Snowflake, 
  Droplets, 
  Zap, 
  Sparkles, 
  Hammer, 
  Paintbrush, 
  Wrench, 
  Star, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/servicesData';

const iconMap = {
  Snowflake,
  Droplets,
  Zap,
  Sparkles,
  Hammer,
  Paintbrush,
  Wrench
};

export default function CategoriesSection({ currentCurrency, onSelectCategory, onSelectSubservice }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const convertPrice = (usd) => {
    const converted = usd * currentCurrency.rate;
    if (currentCurrency.code === 'PKR') {
      return `${currentCurrency.symbol}${Math.round(converted).toLocaleString()}`;
    }
    return `${currentCurrency.symbol}${Math.round(converted)}`;
  };

  const filteredCategories = selectedFilter === 'all'
    ? SERVICE_CATEGORIES
    : SERVICE_CATEGORIES.filter((c) => c.id === selectedFilter);

  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Certified Services Directory
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Space_Grotesk'] tracking-tight">
              Transparent Upfront Pricing.{' '}
              <span className="text-blue-600">Zero Surprises.</span>
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Select your required trade below. Every service includes verified technicians, OEM components, and digital warranty certificates.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3.5 py-2 rounded-xl transition ${
                selectedFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Trades
            </button>
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-3.5 py-2 rounded-xl transition ${
                  selectedFilter === cat.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.title.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || Wrench;

            return (
              <div
                key={category.id}
                className="group relative flex flex-col bg-slate-50/60 rounded-3xl border border-slate-200/80 overflow-hidden hover:border-blue-400 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
              >
                {/* Cover Image with Overlay Badge */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={category.coverImage}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Floating Demand Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-slate-800 shadow-xs">
                      {category.badge}
                    </span>
                  </div>

                  {/* Rating Tag */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{category.rating}</span>
                    <span className="text-slate-400 text-[10px]">({category.reviewsCount.toLocaleString()})</span>
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/40">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                        {category.title}
                      </h3>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">from</span>
                        <span className="text-base font-extrabold text-blue-600">
                          {convertPrice(category.basePriceUSD)}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {category.tagline}
                    </p>

                    {/* Subservice Pills */}
                    <div className="mt-4 space-y-2 border-t border-slate-200/70 pt-4">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Available Packages
                      </div>
                      {category.popularSubservices.slice(0, 3).map((sub) => (
                        <div
                          key={sub.id}
                          onClick={() => onSelectSubservice(category.id, sub.id)}
                          className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200/60 hover:border-blue-300 hover:bg-blue-50/50 cursor-pointer transition text-xs group/sub"
                        >
                          <span className="font-semibold text-slate-700 group-hover/sub:text-blue-700 line-clamp-1 pr-2">
                            {sub.name}
                          </span>
                          <span className="font-bold text-slate-900 shrink-0">
                            {convertPrice(sub.priceUSD)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA */}
                  <button
                    type="button"
                    onClick={() => onSelectCategory(category.id)}
                    className="w-full py-3 px-4 rounded-xl bg-slate-900 group-hover:bg-blue-600 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition duration-200 shadow-sm"
                  >
                    <span>Instant Booking</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
