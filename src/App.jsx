import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoriesSection from './components/CategoriesSection';
import CostEstimator from './components/CostEstimator';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import AppDownloadBanner from './components/AppDownloadBanner';
import Footer from './components/Footer';
import ServiceModal from './components/ServiceModal';
import LiveTrackerModal from './components/LiveTrackerModal';
import ProJoinModal from './components/ProJoinModal';
import { CITIES, CURRENCIES } from './data/servicesData';

export default function App() {
  const [currentCity, setCurrentCity] = useState(CITIES[0]); // Dubai by default
  const [currentCurrency, setCurrentCurrency] = useState(CURRENCIES.AED); // AED default, auto-switchable
  
  // Modals state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState('ac-cooling');
  const [selectedSubserviceId, setSelectedSubserviceId] = useState(null);
  
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [activeBooking, setActiveBooking] = useState(null);

  const handleOpenBooking = (categoryId = 'ac-cooling', subserviceId = null) => {
    setSelectedCategoryId(categoryId);
    setSelectedSubserviceId(subserviceId);
    setIsBookingOpen(true);
  };

  const handleBookingConfirmed = (newBooking) => {
    setActiveBooking(newBooking);
    setIsBookingOpen(false);
    // Immediately open the live tracker so the user experiences the instant FixKaro dispatch!
    setIsTrackerOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-blue-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        currentCity={currentCity}
        setCurrentCity={setCurrentCity}
        currentCurrency={currentCurrency}
        setCurrentCurrency={setCurrentCurrency}
        onOpenBooking={() => handleOpenBooking()}
        onOpenTracker={() => setIsTrackerOpen(true)}
        onOpenPartnerModal={() => setIsPartnerOpen(true)}
        activeBooking={activeBooking}
      />

      {/* Hero with Search and Highlights */}
      <main className="flex-1">
        <Hero
          currentCity={currentCity}
          currentCurrency={currentCurrency}
          onSelectService={(catId, subId) => handleOpenBooking(catId, subId)}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Categories & Packages Section */}
        <CategoriesSection
          currentCurrency={currentCurrency}
          onSelectCategory={(catId) => handleOpenBooking(catId, null)}
          onSelectSubservice={(catId, subId) => handleOpenBooking(catId, subId)}
        />

        {/* Interactive Instant Cost Estimator */}
        <CostEstimator
          currentCurrency={currentCurrency}
          onBookCustomQuote={(catId) => handleOpenBooking(catId, null)}
        />

        {/* How It Works (4-Step Flow) */}
        <HowItWorks onOpenBooking={() => handleOpenBooking()} />

        {/* Why Choose Us - International Quality Benchmark */}
        <WhyChooseUs />

        {/* Verified Customer Reviews */}
        <ReviewsSection />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Mobile App Download Banner */}
        <AppDownloadBanner />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenPartnerModal={() => setIsPartnerOpen(true)}
      />

      {/* Floating Action Button for Mobile Fast Booking */}
      <div className="fixed bottom-4 right-4 z-30 md:hidden">
        <button
          onClick={() => handleOpenBooking()}
          className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-2xl shadow-blue-600/50 active:scale-95 transition"
        >
          <span>⚡ Quick Book</span>
        </button>
      </div>

      {/* Booking Modal (FixKaro Core Flow) */}
      <ServiceModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialCategoryId={selectedCategoryId}
        initialSubserviceId={selectedSubserviceId}
        currentCity={currentCity}
        currentCurrency={currentCurrency}
        onBookingConfirmed={handleBookingConfirmed}
      />

      {/* Live Order Tracker Modal ("Ek Tap, Sab Fix") */}
      <LiveTrackerModal
        isOpen={isTrackerOpen}
        onClose={() => setIsTrackerOpen(false)}
        activeBooking={activeBooking}
        currentCity={currentCity}
      />

      {/* Join as Pro / Partner Onboarding Modal */}
      <ProJoinModal
        isOpen={isPartnerOpen}
        onClose={() => setIsPartnerOpen(false)}
        currentCity={currentCity}
      />
    </div>
  );
}
