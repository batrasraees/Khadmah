export const CURRENCIES = {
  USD: { code: 'USD', symbol: '$', rate: 1.0, flag: '🇺🇸', name: 'US Dollar' },
  AED: { code: 'AED', symbol: 'AED ', rate: 3.67, flag: '🇦🇪', name: 'UAE Dirham' },
  GBP: { code: 'GBP', symbol: '£', rate: 0.78, flag: '🇬🇧', name: 'British Pound' },
  EUR: { code: 'EUR', symbol: '€', rate: 0.92, flag: '🇪🇺', name: 'Euro' },
  SAR: { code: 'SAR', symbol: 'SAR ', rate: 3.75, flag: '🇸🇦', name: 'Saudi Riyal' },
  PKR: { code: 'PKR', symbol: '₨ ', rate: 278.5, flag: '🇵🇰', name: 'Pakistani Rupee' }
};

export const CITIES = [
  { id: 'dubai', name: 'Dubai', country: 'United Arab Emirates', flag: '🇦🇪', currency: 'AED', popularZones: ['Downtown', 'Dubai Marina', 'Palm Jumeirah', 'Business Bay', 'JVC'] },
  { id: 'london', name: 'London', country: 'United Kingdom', flag: '🇬🇧', currency: 'GBP', popularZones: ['Mayfair', 'Kensington', 'Canary Wharf', 'Chelsea', 'Westminster'] },
  { id: 'newyork', name: 'New York', country: 'United States', flag: '🇺🇸', currency: 'USD', popularZones: ['Manhattan', 'Brooklyn', 'Queens', 'Upper East Side', 'SoHo'] },
  { id: 'riyadh', name: 'Riyadh', country: 'Saudi Arabia', flag: '🇸🇦', currency: 'SAR', popularZones: ['Al Olaya', 'Al Malqa', 'Al Nakheel', 'Al Yasmin', 'Digital City'] },
  { id: 'singapore', name: 'Singapore', country: 'Singapore', flag: '🇸🇬', currency: 'USD', popularZones: ['Marina Bay', 'Orchard', 'Sentosa', 'Tanjong Pagar', 'Bugis'] },
  { id: 'toronto', name: 'Toronto', country: 'Canada', flag: '🇨🇦', currency: 'USD', popularZones: ['Downtown Core', 'Yorkville', 'Liberty Village', 'North York'] },
  { id: 'karachi', name: 'Karachi & Lahore', country: 'Pakistan (South Asia)', flag: '🇵🇰', currency: 'PKR', popularZones: ['Clifton', 'DHA Phase 5-8', 'Gulberg', 'Bahria Town'] }
];

export const SERVICE_CATEGORIES = [
  {
    id: 'ac-cooling',
    title: 'AC & Climate Control',
    tagline: 'HVAC repair, deep coil chemical wash, gas refill & smart thermostats',
    icon: 'Snowflake',
    badge: 'High Demand',
    basePriceUSD: 45,
    rating: 4.94,
    reviewsCount: 14200,
    coverImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    popularSubservices: [
      {
        id: 'ac-deep-clean',
        name: 'Full Jet-Wash & Sanitization',
        description: 'Complete high-pressure bag wash, antibacterial chemical coil cleaning, drain flush & filter scrub.',
        priceUSD: 49,
        duration: '60 mins',
        warranty: '60-day cool guarantee',
        included: ['Indoor coil jet wash', 'Outdoor condenser rinse', 'Antibacterial deodorizer', 'Drain pan clearing']
      },
      {
        id: 'ac-gas-refill',
        name: 'Eco Gas Refill (R410A / R32 / R22)',
        description: 'Vacuum leak inspection, pressure test, and precision refrigerant top-up for peak cooling efficiency.',
        priceUSD: 65,
        duration: '45 mins',
        warranty: '90-day leak warranty',
        included: ['Manifold gauge digital test', 'Leak pin-point check', 'Original pure refrigerant', 'Thermal probe test']
      },
      {
        id: 'ac-diagnostic',
        name: 'HVAC Diagnostic & General Fix',
        description: 'Troubleshoot compressor tripping, water dripping, loud fan motor, or thermostat wiring errors.',
        priceUSD: 35,
        duration: '45 mins',
        warranty: '30-day workmanship',
        included: ['Full 18-point inspection', 'Capacitor & PCB test', 'Amp draw check', 'Detailed digital report']
      },
      {
        id: 'ac-install',
        name: 'Complete Unit Installation / Removal',
        description: 'Professional wall mounting, copper pipe flare sealing, vibration damping brackets, and vacuum commission.',
        priceUSD: 95,
        duration: '120 mins',
        warranty: '180-day installation warranty',
        included: ['Brackets & hardware', 'Vacuum evacuation', 'Electrical interlink', 'Operational load check']
      }
    ]
  },
  {
    id: 'plumbing',
    title: 'Plumbing & Water Systems',
    tagline: 'Concealed leak detection, water heaters, pumps & sanitary fittings',
    icon: 'Droplets',
    badge: '60-Min Emergency',
    basePriceUSD: 40,
    rating: 4.91,
    reviewsCount: 11800,
    coverImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
    popularSubservices: [
      {
        id: 'plumb-leak-detect',
        name: 'Acoustic / Thermal Leak Detection',
        description: 'Non-invasive acoustic and thermal imaging scan to locate hidden wall/floor pipe bursts.',
        priceUSD: 75,
        duration: '60 mins',
        warranty: 'Non-invasive guarantee',
        included: ['Infrared wall scan', 'Moisture mapping', 'Acoustic listening rod', 'Pinpoint excavation plan']
      },
      {
        id: 'plumb-drain-unclog',
        name: 'Heavy-Duty Motorized Drain Snaking',
        description: 'High-torque electronic spiral unclogging for kitchen grease traps, showers, and main sewer backups.',
        priceUSD: 48,
        duration: '45 mins',
        warranty: '30-day free flow',
        included: ['High-torque auger wire', 'Bio-enzyme drain flush', 'Trap cleanout & seal', 'Flow rate verification']
      },
      {
        id: 'plumb-heater-tank',
        name: 'Water Heater Repair & Element Replacement',
        description: 'Thermostat testing, sacrificial anode replacement, relief valve overhaul, and tank descaling.',
        priceUSD: 55,
        duration: '60 mins',
        warranty: '90-day parts & labor',
        included: ['Pressure relief test', 'Heating coil inspection', 'Thermostat calibration', 'Safety ground check']
      },
      {
        id: 'plumb-fixtures',
        name: 'Designer Faucet, Vanity & Mixer Setup',
        description: 'Precision installation of luxury thermostatic mixers, rainfall showers, and European vanity sinks.',
        priceUSD: 42,
        duration: '40 mins',
        warranty: '1-year leak-free guarantee',
        included: ['Braided stainless connectors', 'Silicone perimeter seal', 'Angle stop valves check', 'Pressure test']
      }
    ]
  },
  {
    id: 'electrical',
    title: 'Electrical & Smart Home',
    tagline: 'Breaker panels, smart lighting, EV chargers & power diagnostics',
    icon: 'Zap',
    badge: 'Certified Master Electricians',
    basePriceUSD: 45,
    rating: 4.96,
    reviewsCount: 9700,
    coverImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
    popularSubservices: [
      {
        id: 'elec-short-circuit',
        name: 'Short Circuit & Breaker Tripping Diagnostic',
        description: 'Megger insulation test, earth leakage assessment, and breaker replacement.',
        priceUSD: 50,
        duration: '45 mins',
        warranty: '60-day safety guarantee',
        included: ['Megohmmeter test', 'RCD sensitivity check', 'Load balancing check', 'Fault isolation']
      },
      {
        id: 'elec-ev-charger',
        name: 'EV Home Charger Installation (Level 2)',
        description: 'Dedicated 32A/40A breaker run, heavy gauge wiring, conduit routing, and commissioning for Tesla/Porsche/BMW.',
        priceUSD: 180,
        duration: '180 mins',
        warranty: '3-year certified warranty',
        included: ['Dedicated MCB/RCBO', 'Armored cable routing', 'Safety earth rod test', 'Mobile app paired']
      },
      {
        id: 'elec-smart-switch',
        name: 'Smart Switches, Ring Doorbell & CCTV',
        description: 'Upgrade standard switches to Lutron/Tuya/Zigbee smart dimmers, plus video doorbell hardwiring.',
        priceUSD: 60,
        duration: '60 mins',
        warranty: '1-year configuration warranty',
        included: ['Neutral wire bridge', 'App pairing to HomeKit/Alexa', 'Doorbell transformer step-down', 'Wi-Fi test']
      },
      {
        id: 'elec-chandelier',
        name: 'Luxury Chandelier & Pendant Fixture Mount',
        description: 'Reinforced ceiling box anchors, laser alignment, and crystal assembly for high-ceiling lighting.',
        priceUSD: 70,
        duration: '90 mins',
        warranty: 'Heavy-weight safety guarantee',
        included: ['Heavy duty toggle bolts', 'Dimmer compatibility check', 'Gloves crystal handling', 'Balance tuning']
      }
    ]
  },
  {
    id: 'cleaning',
    title: 'Luxury Deep Cleaning',
    tagline: 'Eco-certified steam sanitation, move-in/out & hospital-grade hygiene',
    icon: 'Sparkles',
    badge: 'Hospital-Grade Steam',
    basePriceUSD: 65,
    rating: 4.93,
    reviewsCount: 18400,
    coverImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    popularSubservices: [
      {
        id: 'clean-deep-home',
        name: 'Complete Deep Villa & Apartment Cleaning',
        description: 'High-temperature 160°C dry steam sanitization, kitchen degreasing, bathroom grout scrubbing, and window polishing.',
        priceUSD: 99,
        duration: '180 mins',
        warranty: '100% re-clean satisfaction guarantee',
        included: ['Kärcher steam extraction', 'Kitchen oven interior degrease', 'Bathroom descaling', 'Baseboards & doors scrub']
      },
      {
        id: 'clean-sofa-carpet',
        name: 'Upholstery & Mattress Extraction Wash',
        description: 'Fabric pH-balanced shampooing and industrial moisture extraction removing 99.8% of dust mites and stains.',
        priceUSD: 58,
        duration: '75 mins',
        warranty: 'Stain treatment guarantee',
        included: ['Industrial vacuuming', 'Pre-spray enzyme stain lifter', 'Deep injection extraction', 'Rapid drying blowers']
      },
      {
        id: 'clean-movein',
        name: 'Move-in / Move-out Turnover Sanitation',
        description: 'Interior cabinets, wardrobes, balcony power wash, and paint-dust neutralization for new tenants.',
        priceUSD: 130,
        duration: '240 mins',
        warranty: 'Deposit refund checklist guarantee',
        included: ['Inside all cupboards/closets', 'Light fixture de-dusting', 'Balcony pressure rinse', 'Floor machine scrub']
      }
    ]
  },
  {
    id: 'handyman-carpentry',
    title: 'Handyman & Carpentry',
    tagline: 'TV mounting, custom joinery, door re-alignments & hardware installation',
    icon: 'Hammer',
    badge: 'Equipped With Lasers',
    basePriceUSD: 38,
    rating: 4.89,
    reviewsCount: 8900,
    coverImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    popularSubservices: [
      {
        id: 'handy-tv-mount',
        name: 'Laser-Leveled TV Wall Mount (up to 85")',
        description: 'Stud detection, heavy masonry Fischer anchors, hidden cable conduit management, and tilt/swivel adjustment.',
        priceUSD: 45,
        duration: '45 mins',
        warranty: 'Zero-drop guarantee',
        included: ['German Fischer metal anchors', 'Stud sensor scan', 'Cable raceway trimming', 'Level certification']
      },
      {
        id: 'handy-door-locks',
        name: 'Smart Lock & Deadbolt Installation',
        description: 'Mortise chisel fitting, magnetic door catch, and digital keypad/fingerprint smart lock calibration.',
        priceUSD: 52,
        duration: '60 mins',
        warranty: 'Smooth latch guarantee',
        included: ['Template wood routing', 'Strike plate realignment', 'Emergency mechanical key test', 'App setup']
      },
      {
        id: 'handy-furniture-assembly',
        name: 'IKEA & Designer Furniture Assembly',
        description: 'Precision build for wardrobes, modular sofas, executive desks, and walk-in closet shelving.',
        priceUSD: 40,
        duration: '60 mins',
        warranty: 'Wobble-free guarantee',
        included: ['Wall safety anchors', 'Torque calibrated fastening', 'Drawer slide alignment', 'Packaging recycling']
      }
    ]
  },
  {
    id: 'painting',
    title: 'Painting & Finishing',
    tagline: 'Zero-VOC luxury paints, wallpaper application, moisture barriers & accent walls',
    icon: 'Paintbrush',
    badge: 'Dustless Sanding',
    basePriceUSD: 85,
    rating: 4.92,
    reviewsCount: 6300,
    coverImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    popularSubservices: [
      {
        id: 'paint-room-accent',
        name: 'Room Interior Paint & Accent Feature Wall',
        description: 'Surface crack filling, HEPA dustless sanding, primer coat, and 2 premium Benjamin Moore/Jotun finish coats.',
        priceUSD: 110,
        duration: '240 mins',
        warranty: '2-year anti-peel warranty',
        included: ['Furniture & floor plastic sheeting', 'Crack spackle repair', 'Zero-VOC premium paint', 'Cleanup & handover']
      },
      {
        id: 'paint-waterproof',
        name: 'Ceiling Moisture & Mildew Treatment',
        description: 'Antifungal biocidal wash, damp-block isolation primer, and moisture-resistant breathable topcoat.',
        priceUSD: 75,
        duration: '90 mins',
        warranty: 'Anti-mold guarantee',
        included: ['Mold spore neutralization', 'Moisture meter reading', 'Stain-blocking primer', 'Seamless blend']
      }
    ]
  },
  {
    id: 'appliance-repair',
    title: 'Appliance Diagnostics',
    tagline: 'Refrigerators, front-load washers, dishwashers, Bosch/Miele/Samsung specialists',
    icon: 'Wrench',
    badge: 'OEM Certified Parts',
    basePriceUSD: 42,
    rating: 4.95,
    reviewsCount: 10400,
    coverImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    popularSubservices: [
      {
        id: 'app-washer-fix',
        name: 'Washing Machine Drum & Pump Repair',
        description: 'Drain pump clearing, drum bearing replacement, error code E20/4E troubleshooting, and vibration pads.',
        priceUSD: 52,
        duration: '60 mins',
        warranty: '90-day parts warranty',
        included: ['Magnetic pump check', 'Belt tension inspection', 'Inlet solenoid test', 'Spin calibration']
      },
      {
        id: 'app-fridge-gas',
        name: 'Refrigerator Inverter & Defrost Repair',
        description: 'Bi-metal defrost sensor replacement, inverter board diagnosis, fan motor rebuild, and evaporator thaw.',
        priceUSD: 58,
        duration: '60 mins',
        warranty: '90-day cooling warranty',
        included: ['Digital temperature telemetry', 'Defrost heater test', 'Door gasket seal inspection', 'Compressor relay check']
      }
    ]
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Homeowner, Kensington London',
    city: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'Yesterday',
    service: 'AC & Climate Control',
    comment: 'FixKaro/Khadmah is remarkable. Booked the AC jet-wash in the morning, technician Tariq arrived with full PPE and industrial bag wash gear within an hour. Zero mess left behind. Truly international quality.'
  },
  {
    id: 2,
    name: 'Farhan Al-Qasimi',
    role: 'Villa Owner, Palm Jumeirah',
    city: 'Dubai, UAE',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '3 days ago',
    service: 'Plumbing & Water Systems',
    comment: 'We had a hidden ceiling leak that two previous companies failed to spot. Khadmah sent an engineer with thermal imaging equipment who pinpointed the cracked manifold in 15 minutes. Transparent AED pricing.'
  },
  {
    id: 3,
    name: 'Dr. Michael Vance',
    role: 'Apartment Owner, Manhattan NY',
    city: 'New York, USA',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '5 days ago',
    service: 'Electrical & Smart Home',
    comment: 'Installed Level 2 Tesla charger and Lutron smart dimmers across our duplex. The technician was certified, carried insurance certificates, and finished ahead of schedule. Flawless execution.'
  },
  {
    id: 4,
    name: 'Nora Al-Sulaiman',
    role: 'Diplomatic Quarter',
    city: 'Riyadh, KSA',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '1 week ago',
    service: 'Luxury Deep Cleaning',
    comment: 'Post-renovation steam cleaning service was top notch. All paint specks were removed safely without scratching the marble tiles. Will definitely subscribe to their monthly maintenance plan.'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Select Service & Flat Pricing',
    description: 'Browse transparent upfront rate cards for over 150+ residential and commercial tasks with zero hidden surcharges.'
  },
  {
    step: '02',
    title: 'Choose Time & Express Slot',
    description: 'Pick same-day arrival within 60 minutes or schedule at your convenience. Real-time GPS dispatched technician.'
  },
  {
    step: '03',
    title: 'Vetted & Insured Pro Arrives',
    description: 'Every expert undergoes a 5-tier criminal background check, practical skills exam, and carries $1M liability coverage.'
  },
  {
    step: '04',
    title: 'Digital Signoff & 30-Day Guarantee',
    description: 'Inspect the completed work, pay seamlessly via digital card or cash, and enjoy automated 30 to 180-day digital warranty.'
  }
];

export const STATS = [
  { value: '48,000+', label: 'Homes Serviced Worldwide' },
  { value: '4.94 / 5', label: 'Average Customer Rating' },
  { value: '1,200+', label: 'Vetted Master Technicians' },
  { value: '60 Mins', label: 'Average Urgent Response' }
];

export const FAQS = [
  {
    q: 'How does Khadmah compare to FixKaro and other regional apps?',
    a: 'Khadmah builds on the effortless "Ek Tap, Sab Fix" philosophy of FixKaro while elevating it to international enterprise standards. We support multi-currency transparent pricing (USD, AED, GBP, SAR, PKR), certified multi-national technicians, digital warranty passports, and liability insurance across global metropolitan centers.'
  },
  {
    q: 'How quickly can a technician reach my location?',
    a: 'For urgent emergency requests (burst pipes, total power outage, AC breakdown in peak summer), our intelligent geo-routing dispatches the nearest vetted master technician to reach your doorstep in under 60 minutes. You can also pre-schedule up to 14 days in advance.'
  },
  {
    q: 'Are your technicians background checked and verified?',
    a: 'Yes. 100% of technicians undergo strict government criminal record checks, identity verification, 5+ years of verified trade experience, and in-person practical trade certifications before being accepted into our fleet.'
  },
  {
    q: 'What is the Khadmah Happiness Guarantee?',
    a: 'Every booking is backed by our comprehensive warranty (30 to 180 days depending on the service). If you encounter any issue with the completed job, we will send another senior technician to rectify it free of charge, or issue a full refund.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept Apple Pay, Google Pay, Visa, Mastercard, American Express, and cash upon completion. All digital invoices and warranty certificates are sent automatically via SMS and WhatsApp.'
  }
];
