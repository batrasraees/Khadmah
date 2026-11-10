import React, { useState } from 'react';
import { Smartphone, Apple, Play, QrCode, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AppDownloadBanner() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sent, setSent] = useState(false);

  const handleSendLink = (e) => {
    e.preventDefault();
    if (phoneNumber.trim()) {
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setPhoneNumber('');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-tr from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-wider border border-blue-500/30">
              <Smartphone className="w-3.5 h-3.5" /> FixKaro "Ek Tap, Sab Fix" Core Mobile App
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Space_Grotesk'] tracking-tight leading-tight">
              One Tap to Fix Anything In Your Home.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Get the Khadmah iOS & Android app. Book certified pros in 30 seconds, track real-time technician GPS arrival, and manage digital warranty certificates seamlessly.
            </p>

            {/* Store Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#download-ios"
                onClick={(e) => { e.preventDefault(); alert("App Store Link: Khadmah iOS App is ready for installation!"); }}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 transition backdrop-blur-md"
              >
                <Apple className="w-6 h-6 text-white" />
                <div className="text-left">
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">Download on the</div>
                  <div className="text-sm font-bold text-white font-['Space_Grotesk'] leading-none">Apple App Store</div>
                </div>
              </a>

              <a
                href="#download-android"
                onClick={(e) => { e.preventDefault(); alert("Google Play Link: Khadmah Android APK is ready for download!"); }}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 transition backdrop-blur-md"
              >
                <Play className="w-5 h-5 text-emerald-400 fill-emerald-400" />
                <div className="text-left">
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">Get it on</div>
                  <div className="text-sm font-bold text-white font-['Space_Grotesk'] leading-none">Google Play Store</div>
                </div>
              </a>
            </div>

            {/* Send Link SMS input */}
            <form onSubmit={handleSendLink} className="pt-2 max-w-md">
              <div className="flex gap-2">
                <input
                  type="tel"
                  placeholder="Enter mobile # for instant app link..."
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1 text-xs font-semibold px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 focus:outline-hidden focus:border-blue-400"
                />
                <button
                  type="submit"
                  className="px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs uppercase tracking-wider transition shrink-0"
                >
                  Send Link
                </button>
              </div>
              {sent && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-2 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Direct download SMS sent to your mobile phone!</span>
                </div>
              )}
            </form>
          </div>

          {/* Right Mobile App Mockup Preview */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 sm:w-80 rounded-[40px] bg-slate-900 border-4 border-slate-700/80 p-3 shadow-2xl shadow-blue-500/20">
              {/* Phone Speaker Notch */}
              <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-3" />

              {/* Screen Content */}
              <div className="rounded-[30px] bg-white text-slate-900 p-4 space-y-3.5 overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                      K
                    </div>
                    <div>
                      <div className="text-xs font-bold leading-none">Khadmah Mobile</div>
                      <div className="text-[10px] text-slate-400">Downtown Dubai</div>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>

                <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white space-y-1">
                  <span className="text-[9px] uppercase font-bold tracking-wider opacity-80">Active Emergency Pro</span>
                  <div className="text-xs font-bold">HVAC Specialist En Route</div>
                  <div className="text-[10px] opacity-90">ETA: 14 Mins • Van #04</div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-bold">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    ❄️ AC Jet-Wash
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    🚰 Leak Detection
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    ⚡ Smart Breaker
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    🧹 Deep Cleaning
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-semibold flex items-center justify-between">
                  <span>30-Day Guarantee Active</span>
                  <span className="font-bold">#KH-89412</span>
                </div>
              </div>

              {/* Home indicator bar */}
              <div className="w-28 h-1 bg-slate-600 rounded-full mx-auto mt-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
