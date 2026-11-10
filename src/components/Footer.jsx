import React from 'react';
import { 
  Wrench, 
  ShieldCheck, 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles, 
  Heart,
  Globe2
} from 'lucide-react';
import { CITIES } from '../data/servicesData';

export default function Footer({ onOpenBooking, onOpenPartnerModal }) {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      {/* Top Footer Banner */}
      <div className="border-b border-slate-800/80 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/30">
              <Wrench className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold text-white font-['Space_Grotesk'] tracking-tight">
                  KHADMAH GLOBAL
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  FixKaro Modern Clone
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                On-Demand Residential & Commercial Property Services
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenPartnerModal}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition"
            >
              Join As Verified Pro
            </button>
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition shadow-md shadow-blue-600/30"
            >
              Book Service
            </button>
          </div>
        </div>
      </div>

      {/* Main Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Col 1: About */}
          <div className="col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Institutional Quality Standards
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed pr-6">
              Khadmah replaces unverified informal repair contractors with background-vetted, insured master tradesmen operating transparent flat-rate cards. Backed by our 30 to 180-day digital warranty passport.
            </p>
            <div className="pt-2 flex items-center gap-2 text-emerald-400 font-semibold text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>Underwritten by Global Lloyd's Syndicate Partners</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition">AC Jet-Wash & Gas Refill</a></li>
              <li><a href="#services" className="hover:text-white transition">Thermal Leak Detection</a></li>
              <li><a href="#services" className="hover:text-white transition">Smart Home & Breakers</a></li>
              <li><a href="#services" className="hover:text-white transition">Hospital-Grade Deep Clean</a></li>
              <li><a href="#services" className="hover:text-white transition">Laser-Leveled TV Mounting</a></li>
              <li><a href="#services" className="hover:text-white transition">Water Heater Descaling</a></li>
            </ul>
          </div>

          {/* Col 3: Coverage Hubs */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Global Coverage
            </h4>
            <ul className="space-y-2 text-xs">
              {CITIES.map((c) => (
                <li key={c.id}>
                  <span className="text-slate-300 font-semibold">{c.flag} {c.name}</span>
                  <span className="text-slate-500 text-[11px] block">{c.country}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Legal */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact & Support
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-white font-semibold">+1 (800) KHADMAH</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>support@khadmah.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe2 className="w-3.5 h-3.5 text-blue-400" />
                <span>24/7 International Dispatch</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/80 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} Khadmah Global Technologies Inc. Inspired by FixKaro core on-demand architecture.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Workmanship Warranty Terms</a>
            <a href="#" className="hover:text-white transition">Insurance Schedule</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
