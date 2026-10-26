/**
 * FindWorker — Interactive Application Engine
 * Portfolio-first directory for independent digital talent.
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // Master Directory Dataset (Enriched with Portfolios & Contact Details)
  // =========================================================================
  const defaultWorkersData = [
    {
      id: 'worker-1',
      name: 'Julian Vance',
      trade: 'Carpentry',
      craftTitle: 'Master Joiner & Architectural Woodcraft',
      image: 'assets/images/hero_craftsman.jpg',
      badge: 'PRO',
      badgeLabel: 'Pro Craftsman',
      rating: 4.98,
      reviewsCount: 312,
      hourlyRate: 75,
      location: 'Central & North District',
      experienceYears: 16,
      availability: 'Available Today',
      instantBooking: true,
      language: 'English',
      email: 'julian.vance@craftguild.org',
      phone: '+1 (555) 382-9104',
      website: 'julianvancewoodcraft.com',
      bio: 'Specializing in traditional mortise-and-tenon joinery, custom architectural cabinetry, walnut credenzas, and heritage wood preservation.',
      about: 'With 16 years of guild-certified woodworking experience, Julian creates heirloom-quality architectural millwork and custom furniture for residential and boutique commercial spaces. Every piece is constructed using traditional joinery, sustainably harvested hardwoods, and natural hand-rubbed oil finishes.',
      skills: ['Custom Cabinetry', 'Dovetail Joinery', 'Heritage Wood', 'Timber Framing', 'Acoustic Paneling', 'Architectural Millwork'],
      certifications: ['Guild Master Joiner (Level 4)', 'Historic Preservation Specialist', 'Zero-VOC Finishes Certified'],
      guarantee: '5-Year Craft Guarantee • Guild Insured ($2M)',
      portfolio: [
        {
          title: 'Bespoke American Walnut Media Credenza',
          category: 'Custom Furniture',
          year: '2025',
          image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
          description: 'Solid American black walnut with hand-cut through-dovetails, bookmatched door fronts, concealed soft-close Blum hardware, and integrated wire channels.',
          tags: ['Black Walnut', 'Dovetails', 'Hand Rubbed Wax']
        },
        {
          title: 'Floor-to-Ceiling White Oak Library Wall',
          category: 'Architectural Millwork',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
          description: 'Modular quarter-sawn white oak library system featuring integrated warm 2700K linear LED channels, fluted column details, and custom brass rolling ladder.',
          tags: ['White Oak', 'Integrated LED', 'Rolling Ladder']
        },
        {
          title: 'Heritage Victorian Entryway Restoration',
          category: 'Historic Preservation',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
          description: 'Complete stabilization and restoration of an 1890s chestnut double door, including custom moulding profiles run on vintage shapers and solid bronze weatherstripping.',
          tags: ['Historic Chestnut', 'Moulding Replication', 'Bronze Stripping']
        }
      ]
    },
    {
      id: 'worker-2',
      name: 'Elena Ramos',
      trade: 'Electrical',
      craftTitle: 'Licensed Master Electrician & Solar/EV',
      image: 'assets/images/worker_electrician.jpg',
      badge: 'PRO',
      badgeLabel: 'Pro Craftsman',
      rating: 4.96,
      reviewsCount: 248,
      hourlyRate: 85,
      location: 'Metro Area & West End',
      experienceYears: 12,
      availability: 'Available Today',
      instantBooking: true,
      language: 'English',
      email: 'elena.ramos@voltpro.tech',
      phone: '+1 (555) 492-7218',
      website: 'ramos-electrical.com',
      bio: 'Certified master electrician handling architectural lighting design, 200A panel conversions, EV wallboxes, and residential smart automation.',
      about: 'Elena holds dual Master Electrician licensing with over a decade of high-end residential experience. She specializes in future-proofing electrical infrastructure with clean conduit work, high-output EV charging stations, and invisible smart home lighting architecture.',
      skills: ['Panel Upgrades', 'EV Wallboxes', 'Architectural Lighting', 'Fault Diagnostics', 'Lutron Automation', 'Clean Energy Backup'],
      certifications: ['State Master Electrician #ME-84920', 'Tesla Certified Installer', 'NABCEP Solar PV Associate'],
      guarantee: 'Licensed & $2M Insured • Full Code Compliance',
      portfolio: [
        {
          title: 'Residential 200A Smart Panel & Tesla Wallbox',
          category: 'EV & Infrastructure',
          year: '2025',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
          description: 'Complete 200A service upgrade featuring square-D smart breakers, whole-home surge suppression, and dual 48A hardwired EV charging stations with neat conduit architecture.',
          tags: ['200A Service', 'Tesla Wallbox', 'Surge Protection']
        },
        {
          title: 'Architectural Minimalist Loft Lighting',
          category: 'Lighting Design',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
          description: 'Recessed magnetic low-voltage track lighting system with 5-zone Lutron Caséta automation and museum-grade 95+ CRI warm dimming fixtures.',
          tags: ['Magnetic Track', 'Lutron Caséta', '95+ CRI']
        },
        {
          title: 'Enphase Solar & Smart Battery Storage',
          category: 'Clean Energy',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
          description: 'Seamless integration of an 8.4kW rooftop PV system with whole-home battery backup, automatic grid isolation switch, and real-time app telemetry.',
          tags: ['Solar PV', 'Battery Backup', 'Grid Isolation']
        }
      ]
    },
    {
      id: 'worker-3',
      name: 'Arthur Berits',
      trade: 'Plumbing',
      craftTitle: 'Precision Copper & Radiant Hydronic Specialist',
      image: 'assets/images/worker_plumber.jpg',
      badge: 'L3',
      badgeLabel: 'Level 3 Guild Master',
      rating: 4.94,
      reviewsCount: 189,
      hourlyRate: 80,
      location: 'Southside & Downtown',
      experienceYears: 19,
      availability: 'Available Tomorrow',
      instantBooking: false,
      language: 'German',
      email: 'arthur.berits@beritshydronic.de',
      phone: '+1 (555) 601-3829',
      website: 'berits-copperworks.com',
      bio: 'Expert in European copper pipework, brass fittings, luxury bathroom rough-ins, tankless water heating systems, and hydronic radiant floors.',
      about: 'Trained under European master guild standards, Arthur brings 19 years of precision mechanical craftsmanship to copper soldering, radiant hydronic floor manifolds, and acoustic isolation plumbing for luxury architectural renovations.',
      skills: ['Copper Pipework', 'Hydronic Radiant', 'Luxury Fixtures', 'Gas Lines', 'Acoustic Drainage', 'Tankless Water Heating'],
      certifications: ['Master Plumber License #MP-4109', 'Rinnai & Navien Elite Specialist', 'Radiant Panel Association Fellow'],
      guarantee: 'Master Guild Certified • Leak-Free Seal Guarantee',
      portfolio: [
        {
          title: 'Custom Hydronic Floor Heating Installation',
          category: 'Radiant Systems',
          year: '2025',
          image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
          description: '6-zone whole-home hydronic floor heating installation with stainless steel distribution manifolds, oxygen-barrier tubing, and smart digital thermostats.',
          tags: ['Hydronic Radiant', 'Stainless Manifold', 'Smart Zoning']
        },
        {
          title: 'Exposed Brushed Copper Bathroom Suite',
          category: 'Luxury Fixtures',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
          description: 'Architectural exposed copper supply and waste piping hand-polished and clear-coated, paired with bespoke unlacquered brass thermostatic shower valves.',
          tags: ['Exposed Copper', 'Bespoke Brass', 'Hand-Polished']
        },
        {
          title: 'Cascading Dual Tankless Water Heaters',
          category: 'Mechanical Engineering',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80',
          description: 'Dual condensing high-efficiency tankless water heaters plumbed with copper headers, smart recirculating loop, and magnetic scale prevention.',
          tags: ['Tankless Array', 'Copper Headers', 'Continuous Loop']
        }
      ]
    },
    {
      id: 'worker-4',
      name: 'Marcus Thorne',
      trade: 'Masonry',
      craftTitle: 'Heritage Bricklayer & Precision Stone Mason',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80',
      badge: 'L2',
      badgeLabel: 'Level 2 Guild Craftsman',
      rating: 4.92,
      reviewsCount: 142,
      hourlyRate: 70,
      location: 'River Valley & East Hills',
      experienceYears: 14,
      availability: 'Available This Week',
      instantBooking: true,
      language: 'English',
      email: 'marcus.thorne@stonemasters.org',
      phone: '+1 (555) 782-1490',
      website: 'thornemasonry.com',
      bio: 'Restoring historic lime-mortar masonry, flagstone terraces, custom stone fireplaces, and structural retaining walls with artisanal accuracy.',
      about: 'Marcus Thorne combines 14 years of geological knowledge with traditional stonemasonry techniques. His focus centers on lime mortar restoration, dry-stack architectural walls, and stone masonry designed to endure for centuries.',
      skills: ['Tuckpointing', 'Dry-Stack Stone', 'Fireplace Surrounds', 'Flagstone', 'Lime Mortar', 'Structural Stonework'],
      certifications: ['Guild Masonry Journeyman', 'Preservation Trades Network Fellow', 'Lime Mortar Heritage Certified'],
      guarantee: '10-Year Structural Guarantee • Guild Member',
      portfolio: [
        {
          title: 'Historic 1890s Brownstone Tuckpointing',
          category: 'Historic Restoration',
          year: '2025',
          image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
          description: 'Surgical extraction of failed Portland cement mortar and replacement with vapor-permeable natural hydraulic lime mortar matched to original aggregate.',
          tags: ['Hydraulic Lime', 'Tuckpointing', 'Historic Match']
        },
        {
          title: 'Dry-Stack Blue Ridge Flagstone Courtyard',
          category: 'Architectural Stone',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
          description: 'Precision hand-split Pennsylvania bluestone laid on a permeable open-graded aggregate base with a hand-chiseled radius retaining perimeter.',
          tags: ['Bluestone', 'Dry-Stack', 'Permeable Base']
        },
        {
          title: 'Monolithic Limestone Fireplace Surround',
          category: 'Custom Fireplace',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
          description: 'Hand-carved Indiana limestone lintel and monolithic jamb slabs with herringbone refractory firebrick firebox.',
          tags: ['Indiana Limestone', 'Hand Carved', 'Herringbone Brick']
        }
      ]
    },
    {
      id: 'worker-5',
      name: 'Claire Moreau',
      trade: 'Painting',
      craftTitle: 'Artisan Architectural Finisher & Plasterer',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
      badge: 'PRO',
      badgeLabel: 'Pro Craftsman',
      rating: 4.97,
      reviewsCount: 206,
      hourlyRate: 60,
      location: 'Citywide & Outer Suburbs',
      experienceYears: 10,
      availability: 'Available Today',
      instantBooking: true,
      language: 'French',
      email: 'claire.moreau@atelier-moreau.fr',
      phone: '+1 (555) 819-4502',
      website: 'clairemoreaufinishes.com',
      bio: 'Venetian marmorino plaster, zero-VOC mineral paints, fine spray cabinetry refinishing, and meticulous historic color matching.',
      about: 'Trained at the Ecole d’Art Mural in Paris, Claire specializes in organic Italian lime plasters, luminous limewash, and high-durability catalyzed lacquer finishes for custom cabinetry.',
      skills: ['Venetian Plaster', 'Cabinet Enameling', 'Limewash', 'Dustless Prep', 'Color Formulation', 'Metallic Patinas'],
      certifications: ['Certified Venetian Plaster Artisan (Venezia)', 'EPA Lead-Safe Certified Renovator', 'Zero-VOC Master Applicator'],
      guarantee: 'Zero-VOC Certified • Dustless Prep Guarantee',
      portfolio: [
        {
          title: 'Venetian Marmorino Polished Plaster Lounge',
          category: 'Artisanal Plaster',
          year: '2025',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
          description: 'Three-coat Marmorino plaster infused with Carrara marble dust and burnished with natural Marseille olive oil soap to achieve stone-smooth tactile warmth.',
          tags: ['Marmorino', 'Carrara Marble', 'Burnished Olive Soap']
        },
        {
          title: 'Historic Mineral Limewash Facade',
          category: 'Mineral Finishes',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
          description: 'Multi-layer breathable mineral limewash on historic brick masonry tinted with raw Italian earth pigments for enduring velvet texture.',
          tags: ['Natural Limewash', 'Raw Pigments', 'Breathable']
        },
        {
          title: 'Catalyzed Satin Spray Cabinet Enameling',
          category: 'Fine Spray Finishes',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
          description: 'Off-site HEPA spray application of two-component Italian polyurethane lacquer on 36 bespoke kitchen doors and cabinet faces.',
          tags: ['Catalyzed Lacquer', 'Satin Enamel', 'Dust-Free Spray']
        }
      ]
    },
    {
      id: 'worker-6',
      name: 'Soren Lindqvist',
      trade: 'Landscaping',
      craftTitle: 'Ecological Landscape Craftsman & Stonework',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      badge: 'L2',
      badgeLabel: 'Level 2 Guild Craftsman',
      rating: 4.91,
      reviewsCount: 167,
      hourlyRate: 65,
      location: 'North Suburbs & Woodlands',
      experienceYears: 11,
      availability: 'Available Thursday',
      instantBooking: false,
      language: 'English',
      email: 'soren.lindqvist@nordicgreen.design',
      phone: '+1 (555) 948-2615',
      website: 'lindqvistlandscapes.com',
      bio: 'Native botanical garden installations, natural wood pergolas, permeable stone paths, rainwater bioswales, and artistic tree preservation.',
      about: 'Soren combines Scandinavian landscape architecture with sustainable permaculture principles. He designs outdoor environments that thrive naturally with minimal irrigation while incorporating hand-hewn timber and native stone elements.',
      skills: ['Native Planting', 'Hardscape Stone', 'Timber Pergolas', 'Smart Drip', 'Rain Bioswales', 'Pollinator Meadows'],
      certifications: ['Certified Landscape Horticulturalist', 'Rainwater Harvesting Professional', 'Sustainable Sites Initiative AP'],
      guarantee: 'Sustainable Plant Guarantee (1 Yr) • Ecological Pledge',
      portfolio: [
        {
          title: 'Nordic Coastal Native Botanical Garden',
          category: 'Ecological Landscape',
          year: '2025',
          image: 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=800&q=80',
          description: 'Drought-tolerant perennial meadow featuring native ornamental grasses, granite focal boulders, and automated subsurface smart drip irrigation.',
          tags: ['Native Perennials', 'Smart Drip', 'Granite Boulders']
        },
        {
          title: 'Architectural Red Cedar Pergola with Louvers',
          category: 'Timber Structures',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
          description: 'Custom clear-grade Western red cedar pergola with concealed stainless tension rods and motorized cedar privacy louvers.',
          tags: ['Western Red Cedar', 'Timber Joinery', 'Motorized Louvers']
        },
        {
          title: 'Permeable Bluestone Walkway & Rain Bioswale',
          category: 'Water Conservation',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
          description: 'Permeable blue-grey stone path lined with river cobbles and wetland native sedges designed to channel and naturally filter 100% of property stormwater.',
          tags: ['Permeable Stone', 'Bioswale', 'Stormwater Filter']
        }
      ]
    },
    {
      id: 'worker-7',
      name: 'David Kalu',
      trade: 'Metalwork',
      craftTitle: 'Architectural Forged Iron & Steel Fabrication',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      badge: 'L3',
      badgeLabel: 'Level 3 Guild Master',
      rating: 4.95,
      reviewsCount: 118,
      hourlyRate: 88,
      location: 'Industrial District & Metro',
      experienceYears: 15,
      availability: 'Available Next Week',
      instantBooking: true,
      language: 'English',
      email: 'david.kalu@kaluironworks.com',
      phone: '+1 (555) 304-9582',
      website: 'kaluironworks.com',
      bio: 'Hand-forged architectural railings, internal steel-and-glass Crittall-style doors, brass hardware patination, and structural framing.',
      about: 'David operates an independent architectural blacksmithing and welding studio. He fuses traditional hot-forge methods with precision laser-assisted metal joinery for bespoke staircases, steel partitions, and custom hardware.',
      skills: ['TIG Welding', 'Steel Partitions', 'Brass Hardware', 'Patina Finishes', 'Architectural Railings', 'Structural Steel'],
      certifications: ['AWS Certified Structural Welder', 'Architectural Ironworkers Guild Fellow', 'Fine Finishes & Patination Master'],
      guarantee: 'Lifetime Structural Integrity Guarantee',
      portfolio: [
        {
          title: 'Crittall-Style Steel & Fluted Glass Room Divider',
          category: 'Architectural Steel',
          year: '2025',
          image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
          description: 'Hand-fabricated slimline mild steel frames with baked matte black enamel finish, custom pivot hinge, and tempered fluted privacy glass.',
          tags: ['Crittall Steel', 'Fluted Glass', 'Pivot Hardware']
        },
        {
          title: 'Sculptural Forged Bronze & Steel Stair Railing',
          category: 'Custom Railings',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
          description: 'Continuous hammered steel balustrade with organic branch-like nodes, topped with a custom solid bronze handrail aged to a warm chocolate patina.',
          tags: ['Hand Forged', 'Solid Bronze', 'Aged Patina']
        },
        {
          title: 'Contemporary Geometric Entrance Security Gate',
          category: 'Exterior Ironwork',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80',
          description: 'Architectural security gate constructed from hot-dip galvanized steel tubing, magnetic silent latches, and laser-cut perforated bronze panels.',
          tags: ['Galvanized Steel', 'Magnetic Latch', 'Perforated Bronze']
        }
      ]
    },
    {
      id: 'worker-8',
      name: 'Ronald Vance',
      trade: 'HVAC',
      craftTitle: 'Clean Energy Heat Pump & Climate Systems',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      badge: 'L1',
      badgeLabel: 'Level 1 Specialist',
      rating: 4.93,
      reviewsCount: 94,
      hourlyRate: 78,
      location: 'Metro East & Suburbs',
      experienceYears: 9,
      availability: 'Available Today',
      instantBooking: true,
      language: 'English',
      email: 'ronald.vance@pureairclimate.com',
      phone: '+1 (555) 521-8763',
      website: 'vanceclimatesystems.com',
      bio: 'High-efficiency heat pump retrofits, whole-home HEPA air exchangers, acoustic vibration damping, and multi-zone climate calibration.',
      about: 'Ronald specializes in electrification of residential heating and cooling. His engineered installations focus on whisper-quiet operation, hospital-grade indoor air filtration, and maximum energy efficiency coefficients.',
      skills: ['Geothermal Pumps', 'HEPA Filtration', 'Zoned Ducts', 'Energy Audits', 'Acoustic Damping', 'Inverter Calibration'],
      certifications: ['EPA Section 608 Universal Certification', 'NATE Certified Heat Pump Master', 'Building Performance Institute (BPI) Analyst'],
      guarantee: 'Energy Efficiency Guarantee • 10-Yr Compressor Warranty',
      portfolio: [
        {
          title: 'Whisper-Quiet Multi-Zone Heat Pump Conversion',
          category: 'Electrification',
          year: '2025',
          image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
          description: 'Conversion from gas furnace to a 4-zone cold-climate heat pump system with concealed slim-duct ceiling units and acoustic vibration isolation.',
          tags: ['Heat Pump', 'Cold Climate', 'Concealed Duct']
        },
        {
          title: 'Whole-Home Hospital-Grade HEPA & ERV Filtration',
          category: 'Indoor Air Quality',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
          description: 'Installation of a continuous Energy Recovery Ventilator (ERV) paired with MERV 16 medical-grade filtration and active VOC carbon beds.',
          tags: ['MERV 16', 'ERV System', 'Carbon VOC']
        },
        {
          title: 'Residential Geothermal Heat Exchanger Retrofit',
          category: 'Geothermal',
          year: '2024',
          image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
          description: 'Closed-loop ground-source geothermal heat pump system delivering exceptional seasonal COP of 4.6 for year-round temperature stability.',
          tags: ['Geothermal', 'Closed Loop', 'High COP']
        }
      ]
    },
    {
      id: 'worker-9',
      name: 'Kieran Vance',
      trade: 'AI Development',
      craftTitle: 'Principal AI Architect & LLM Engineer',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=85',
      badge: 'PRO',
      badgeLabel: 'Top 1% Pro',
      rating: 4.99,
      reviewsCount: 284,
      hourlyRate: 110,
      location: 'San Francisco, CA',
      experienceYears: 11,
      availability: 'Available Next Week',
      instantBooking: true,
      language: 'English',
      email: 'kieran@vance-ai.io',
      phone: '+1 (555) 714-9921',
      website: 'vance-ai.io',
      bio: 'Enterprise agentic workflows, fine-tuned domain models, and high-throughput LLM architectures.',
      about: 'Kieran designs resilient AI infrastructure and autonomous agentic pipelines for high-growth tech companies and research labs.',
      skills: ['PyTorch', 'LLM Fine-Tuning', 'LangChain', 'RAG Architecture', 'Vector Databases', 'Python'],
      certifications: ['DeepLearning.AI Fellow', 'AWS Certified Machine Learning Specialty', 'NVIDIA DLI Ambassador'],
      guarantee: 'Deterministic Evaluation • High-Throughput SLA',
      portfolio: [
        { title: 'Autonomous Multi-Agent Enterprise Pipeline', category: 'AI Architecture', year: '2025', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=85', description: 'Distributed multi-agent pipeline processing 2M financial documents daily with RAG verification.', tags: ['RAG', 'LangChain', 'Python'] }
      ]
    },
    {
      id: 'worker-10',
      name: 'Aria Lindqvist',
      trade: '3D & WebGL',
      craftTitle: 'Creative Technologist & Interactive 3D Director',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=85',
      badge: 'PRO',
      badgeLabel: 'Top 1% Pro',
      rating: 4.97,
      reviewsCount: 196,
      hourlyRate: 95,
      location: 'Stockholm, SE',
      experienceYears: 9,
      availability: 'Available Today',
      instantBooking: true,
      language: 'Swedish & English',
      email: 'aria@lindqvist-spatial.studio',
      phone: '+46 (8) 492-810',
      website: 'lindqvist-spatial.studio',
      bio: 'Crafting performant WebGL visual experiences, kinetic spatial worlds, and custom GLSL shaders.',
      about: 'Aria blends cinematic 3D direction with browser performance engineering to create visceral web experiences.',
      skills: ['Three.js', 'WebGL', 'GLSL Shaders', 'Blender', 'WebGPU', 'Creative Coding'],
      certifications: ['Awwwards Site of the Year Winner', 'FWA of the Day Judge', 'Three.js Journey Fellow'],
      guarantee: '60fps GPU Performance • Cross-Device Support',
      portfolio: [
        { title: 'Kinetic Spatial Exhibition', category: 'Interactive 3D', year: '2025', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=900&q=85', description: 'Browser-based 3D digital museum environment optimized for desktop and mobile Safari.', tags: ['Three.js', 'GLSL', 'Blender'] }
      ]
    },
    {
      id: 'worker-11',
      name: 'Marcus Sterling',
      trade: 'Fractional Leadership',
      craftTitle: 'Fractional Chief Technology Officer (CTO)',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=85',
      badge: 'L3',
      badgeLabel: 'Executive Advisor',
      rating: 4.98,
      reviewsCount: 162,
      hourlyRate: 130,
      location: 'London, UK',
      experienceYears: 18,
      availability: 'Available This Month',
      instantBooking: false,
      language: 'English',
      email: 'marcus@sterlingadvisory.co.uk',
      phone: '+44 20 7946 0912',
      website: 'sterlingadvisory.co.uk',
      bio: 'Guiding Series A-C founders on architecture, technical roadmap, security audits, and team scaling.',
      about: 'Former Tier-1 VP of Engineering helping funded startups avoid tech debt, scale infrastructure, and pass enterprise SOC-2 audits.',
      skills: ['Cloud Architecture', 'SOC-2 Compliance', 'DevOps Scaling', 'Engineering Leadership', 'Security', 'Kubernetes'],
      certifications: ['AWS Solutions Architect Professional', 'CISSP Security Professional', 'Google Cloud Fellow'],
      guarantee: 'Executive Roadmap Delivery • Direct Founder Advisory',
      portfolio: [
        { title: 'Global Banking Core Cloud Migration', category: 'Systems Architecture', year: '2025', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85', description: 'Zero-downtime microservices re-architecture servicing 14M daily transactions.', tags: ['Kubernetes', 'Cloud', 'Fintech'] }
      ]
    },
    {
      id: 'worker-12',
      name: 'Zahra Morales',
      trade: 'Brand Strategy',
      craftTitle: 'Luxury Creative Director & Identity Strategist',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=85',
      badge: 'PRO',
      badgeLabel: 'Top 1% Pro',
      rating: 4.96,
      reviewsCount: 215,
      hourlyRate: 105,
      location: 'Zurich, CH & Milan',
      experienceYears: 14,
      availability: 'Available Tomorrow',
      instantBooking: true,
      language: 'English & Italian',
      email: 'zahra@moralesatelier.ch',
      phone: '+41 44 219 8830',
      website: 'moralesatelier.ch',
      bio: 'Bespoke identity systems, editorial typography, and creative direction for high-craft luxury brands.',
      about: 'Zahra brings Swiss typographic rigor and Italian aesthetic warmth to architectural and luxury branding.',
      skills: ['Brand Identity', 'Art Direction', 'Typography', 'Luxury Packaging', 'Campaigns', 'Print Production'],
      certifications: ['D&AD Yellow Pencil Winner', 'Art Directors Club Gold', 'Swiss Design Award Fellow'],
      guarantee: 'Comprehensive Brand Architecture & Production Handoff',
      portfolio: [
        { title: 'Haute Horlogerie Heritage Identity', category: 'Luxury Identity', year: '2025', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85', description: 'Complete brand positioning, bespoke typeface, and tactile packaging for an independent Swiss watchmaker.', tags: ['Identity', 'Typography', 'Luxury'] }
      ]
    },
    {
      id: 'worker-13',
      name: 'Liam O\'Connor',
      trade: 'Web Development',
      craftTitle: 'Fullstack Rust & Next.js Performance Architect',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=85',
      badge: 'PRO',
      badgeLabel: 'Top 1% Pro',
      rating: 4.95,
      reviewsCount: 188,
      hourlyRate: 90,
      location: 'Dublin, IE & Remote',
      experienceYears: 8,
      availability: 'Available Today',
      instantBooking: true,
      language: 'English',
      email: 'liam@oconnorengineering.dev',
      phone: '+353 1 496 0234',
      website: 'oconnorengineering.dev',
      bio: 'High-throughput web applications with sub-millisecond API response times and flawless TypeScript safety.',
      about: 'Liam specializes in web performance engineering, compiling Rust to WebAssembly for heavy client-side computations.',
      skills: ['Rust', 'TypeScript', 'Next.js', 'WebAssembly', 'PostgreSQL', 'Tailwind'],
      certifications: ['Rust Foundation Certified Developer', 'Vercel Certified Partner', 'Performance Web Guild Fellow'],
      guarantee: '100 Core Web Vitals • Zero-Leak Memory Safety',
      portfolio: [
        { title: 'Sub-Millisecond Financial Execution Terminal', category: 'Web Performance', year: '2025', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=85', description: 'Next.js 15 interface coupled with WebAssembly Rust engine rendering 100k data points at 60fps.', tags: ['Rust', 'Next.js', 'Wasm'] }
      ]
    },
    {
      id: 'worker-14',
      name: 'Camille Dupont',
      trade: 'UI/UX Design',
      craftTitle: 'Design Systems Architect & Principal Interaction Designer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=85',
      badge: 'PRO',
      badgeLabel: 'Top 1% Pro',
      rating: 4.98,
      reviewsCount: 240,
      hourlyRate: 95,
      location: 'Paris, FR',
      experienceYears: 10,
      availability: 'Available Today',
      instantBooking: true,
      language: 'French & English',
      email: 'camille@dupontsystems.fr',
      phone: '+33 1 42 68 55 10',
      website: 'dupontsystems.fr',
      bio: 'Scalable multi-brand Figma tokens, accessible components, and micro-interaction specifications.',
      about: 'Camille has built design systems powering products used by over 40 million global users with strict WCAG AAA compliance.',
      skills: ['Figma Variables', 'Design Tokens', 'Micro-Interactions', 'WCAG AAA', 'User Testing', 'Prototyping'],
      certifications: ['Certified Design Systems Leader', 'NN/g Master UX Certification', 'W3C Accessibility Specialist'],
      guarantee: 'Production-Ready Figma Variables & Token JSON Sync',
      portfolio: [
        { title: 'Enterprise Global Design System', category: 'Design Systems', year: '2025', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=900&q=85', description: 'Unified component library with semantic color modes, automatic dark mode, and React code sync.', tags: ['Design Tokens', 'Figma', 'System'] }
      ]
    },
    {
      id: 'worker-15',
      name: 'Devon Brooks',
      trade: 'Cybersecurity',
      craftTitle: 'Smart Contract Security Auditor & Web3 Engineer',
      image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=85',
      badge: 'PRO',
      badgeLabel: 'Top 1% Pro',
      rating: 4.99,
      reviewsCount: 147,
      hourlyRate: 120,
      location: 'Austin, TX',
      experienceYears: 12,
      availability: 'Available Next Week',
      instantBooking: false,
      language: 'English',
      email: 'devon@brooks-security.io',
      phone: '+1 (555) 839-2041',
      website: 'brooks-security.io',
      bio: 'Protocol security audits, invariant fuzzing, EVM formal verification, and penetration testing.',
      about: 'Devon has audited over $800M in on-chain assets with zero post-audit security incidents.',
      skills: ['Solidity', 'Foundry', 'Fuzz Testing', 'Security Audits', 'EVM Mechanics', 'Zero-Knowledge'],
      certifications: ['Certified Smart Contract Auditor', 'OSCP Penetration Tester', 'Stanford Cryptography Alum'],
      guarantee: 'Comprehensive Vulnerability Report & Mitigation Signoff',
      portfolio: [
        { title: 'Decentralized Lending Protocol Security Audit', category: 'Security & Web3', year: '2025', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=85', description: 'End-to-end formal verification and fuzzing suite identifying 4 critical economic reentrancy vectors.', tags: ['Solidity', 'Foundry', 'Audit'] }
      ]
    },
    {
      id: 'worker-16',
      name: 'Hina Takahashi',
      trade: 'Motion Design',
      craftTitle: 'Sound & Sonic Brand Architect',
      image: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=400&q=85',
      badge: 'PRO',
      badgeLabel: 'Top 1% Pro',
      rating: 4.94,
      reviewsCount: 172,
      hourlyRate: 85,
      location: 'Tokyo, JP & Remote',
      experienceYears: 7,
      availability: 'Available Tomorrow',
      instantBooking: true,
      language: 'Japanese & English',
      email: 'hina@takahashi-sound.jp',
      phone: '+81 3 5555 0142',
      website: 'takahashi-sound.jp',
      bio: 'Bespoke product sound design, interface earcons, spatial audio identity, and audio branding.',
      about: 'Hina creates emotional sound identities that make digital interactions satisfying, intuitive, and unforgettable.',
      skills: ['Spatial Audio', 'Dolby Atmos', 'Sonic Branding', 'Interface UI Sounds', 'Logic Pro', 'FMOD'],
      certifications: ['AES Professional Member', 'Berklee Sound Design Specialist', 'Tokyo Audio Guild Fellow'],
      guarantee: 'Universal Format Audio Suite & Spatial Stems',
      portfolio: [
        { title: 'Autonomous EV Cockpit Sonic Architecture', category: 'Sonic Identity', year: '2025', image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=85', description: 'Complete auditory suite for electric vehicle HMI, including subtle feedback earcons and drive chimes.', tags: ['Sonic Brand', 'Spatial', 'Audio'] }
      ]
    },
    {
      id: 'worker-17',
      name: 'Soren Lindemann',
      trade: 'Industrial Design',
      craftTitle: 'Hardware & Ergonomic Product Designer',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=85',
      badge: 'PRO',
      badgeLabel: 'Top 1% Pro',
      rating: 4.96,
      reviewsCount: 154,
      hourlyRate: 90,
      location: 'Copenhagen, DK',
      experienceYears: 13,
      availability: 'Available Today',
      instantBooking: true,
      language: 'Danish & English',
      email: 'soren@lindemann-design.dk',
      phone: '+45 32 88 19 00',
      website: 'lindemann-design.dk',
      bio: 'Tactile physical computing, precision CNC consumer electronics, and sustainable material studies.',
      about: 'Soren combines Nordic minimalism with DFM (Design for Manufacturing) expertise to ship physical hardware people love holding.',
      skills: ['CNC Aluminum', 'Industrial Design', 'SolidWorks', 'Ergonomics', 'DFM', 'Prototyping'],
      certifications: ['Red Dot Best of the Best', 'iF Gold Design Award', 'Danish Design Council Fellow'],
      guarantee: 'DFM-Verified STEP Files & Factory Tooling Ready',
      portfolio: [
        { title: 'Minimalist CNC Aluminum Computing Terminal', category: 'Product Design', year: '2025', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85', description: 'Monolithic bead-blasted 6063 aluminum desktop mechanical interface with gasket acoustic mount.', tags: ['CNC', 'Hardware', 'Industrial'] }
      ]
    }
  ];

  const digitalWorkerProfiles = [
    {
      name: 'Jordan Lee',
      trade: 'Web Development',
      craftTitle: 'Product Engineer · Web & No-code',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=85',
      email: 'jordan.lee@studio.dev',
      website: 'jordanlee.studio',
      bio: 'Building expressive, fast digital products for early-stage teams and independent brands.',
      about: 'Jordan is an independent product engineer working across front-end development, interaction design, and no-code systems. He partners directly with thoughtful teams to turn ambitious ideas into clear, accessible digital experiences.',
      skills: ['React', 'Next.js', 'TypeScript', 'Webflow', 'Design Systems', 'Accessibility'],
      certifications: ['Frontend Engineering · Scrimba', 'Web Accessibility Specialist', 'Webflow Professional Partner'],
      guarantee: 'Thoughtful builds, clear handoffs, and reliable ongoing support.',
      portfolio: [
        { title: 'A calmer way to manage money', category: 'Product design & development', year: '2025', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85', description: 'A responsive product website and interactive dashboard for a modern finance studio.', tags: ['Next.js', 'Product UI', 'Fintech'] },
        { title: 'Studio North digital home', category: 'Brand website', year: '2024', image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=85', description: 'A considered, editorial website system for an independent architecture practice.', tags: ['Webflow', 'CMS', 'Art direction'] }
      ]
    },
    {
      name: 'Maya Chen',
      trade: 'UI/UX Design',
      craftTitle: 'Product Designer · Research to Prototype',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=85',
      email: 'maya@mayachen.design',
      website: 'mayachen.design',
      bio: 'Making complex products feel intuitive through thoughtful research, elegant systems, and careful interaction.',
      about: 'Maya is a product designer who brings clarity to complex digital tools. Her practice combines customer research, prototyping, and systems thinking to make useful products feel effortless.',
      skills: ['Product Strategy', 'Figma', 'UX Research', 'Prototyping', 'Design Systems', 'Usability Testing'],
      certifications: ['Nielsen Norman UX Certification', 'Certified Design Sprint Facilitator', 'Inclusive Design Practitioner'],
      guarantee: 'Research-led decisions, accessible details, and collaborative delivery.',
      portfolio: [
        { title: 'Care, made easier', category: 'Healthcare product', year: '2025', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=85', description: 'Patient-first service design and an accessible mobile experience for a care platform.', tags: ['UX Research', 'Mobile', 'Accessibility'] },
        { title: 'A better workspace for teams', category: 'SaaS platform', year: '2024', image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=900&q=85', description: 'A more legible project dashboard shaped by interviews with distributed teams.', tags: ['SaaS', 'Figma', 'Design system'] }
      ]
    },
    {
      name: 'Theo Martin',
      trade: 'Graphic Design',
      craftTitle: 'Visual Designer · Identity & Digital',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=85',
      email: 'hello@theomartin.design',
      website: 'theomartin.design',
      bio: 'Distinctive visual identities and digital art direction for culture-forward companies.',
      about: 'Theo is an independent visual designer creating identities that feel unmistakable and work beautifully in the real world. He moves between strategy, typography, and digital art direction.',
      skills: ['Brand Identity', 'Art Direction', 'Typography', 'Illustration', 'Figma', 'Adobe Creative Suite'],
      certifications: ['Brand Strategy · IDEO U', 'Adobe Certified Professional', 'Type Directors Club Member'],
      guarantee: 'A thoughtful identity system, ready to work across every touchpoint.',
      portfolio: [
        { title: 'Objects with a second life', category: 'Brand identity', year: '2025', image: 'https://images.unsplash.com/photo-1634942536790-253d6a7e5c6d?auto=format&fit=crop&w=900&q=85', description: 'A warm, tactile visual identity for a circular design marketplace.', tags: ['Identity', 'Typography', 'Art direction'] },
        { title: 'Common Ground journal', category: 'Editorial design', year: '2024', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=85', description: 'A flexible editorial system for stories at the intersection of food and place.', tags: ['Editorial', 'Print', 'Art direction'] }
      ]
    },
    {
      name: 'Amara Okafor',
      trade: 'Digital Marketing',
      craftTitle: 'Growth Strategist · Content & Performance',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=85',
      email: 'amara@okaforgrowth.com',
      website: 'okaforgrowth.com',
      bio: 'Building sustainable growth systems through sharp positioning, useful content, and measurable campaigns.',
      about: 'Amara helps independent brands find the right audience and grow with intention. Her work connects audience insight to practical content strategy, lifecycle marketing, and performance experiments.',
      skills: ['Growth Strategy', 'SEO', 'Lifecycle Marketing', 'Analytics', 'Paid Social', 'Content Strategy'],
      certifications: ['Google Analytics Certification', 'HubSpot Content Marketing', 'Meta Media Buying Professional'],
      guarantee: 'Clear goals, honest reporting, and growth built for the long term.',
      portfolio: [
        { title: 'A better launch for Goodwell', category: 'Launch strategy', year: '2025', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85', description: 'A multi-channel launch plan that introduced a new wellness brand to its first audience.', tags: ['Positioning', 'Paid social', 'Analytics'] },
        { title: 'The newsletter people open', category: 'Lifecycle marketing', year: '2024', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=85', description: 'A customer lifecycle refresh built around useful, human email content.', tags: ['Email', 'Automation', 'Retention'] }
      ]
    },
    {
      name: 'Clara Moreau',
      trade: 'Content Writing',
      craftTitle: 'Writer & Editor · Brand Voice',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=85',
      email: 'clara@clarawrites.co',
      website: 'clarawrites.co',
      bio: 'A clear, memorable voice for thoughtful brands, from the first headline to the final edit.',
      about: 'Clara is a writer and editor working with teams who care about what they say and how it lands. She turns subject-matter expertise into useful stories, confident brand language, and carefully edited copy.',
      skills: ['Brand Voice', 'Editorial Strategy', 'UX Writing', 'Copywriting', 'SEO Content', 'Editing'],
      certifications: ['UX Writing · UX Content Collective', 'Content Design London', 'Editors Canada Member'],
      guarantee: 'Clear writing, considered voice, and copy that earns its place.',
      portfolio: [
        { title: 'Words for a more human bank', category: 'Brand voice & UX writing', year: '2025', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85', description: 'Voice principles and product copy for a financial brand built around real people.', tags: ['UX writing', 'Voice', 'Fintech'] },
        { title: 'Field notes from the future', category: 'Editorial series', year: '2024', image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=85', description: 'An editorial content series making climate research approachable and actionable.', tags: ['Editorial', 'Research', 'SEO'] }
      ]
    },
    {
      name: 'Noah Berg',
      trade: 'Motion Design',
      craftTitle: 'Motion Designer · 2D, 3D & Story',
      image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=400&q=85',
      email: 'noah@bergmotion.studio',
      website: 'bergmotion.studio',
      bio: 'Making ideas move with tactile animation, clear visual storytelling, and a little bit of surprise.',
      about: 'Noah is a motion designer and animator collaborating with studios and independent teams. From a product moment to a complete campaign, he brings a strong sense of rhythm and detail to every frame.',
      skills: ['Motion Design', 'After Effects', 'Cinema 4D', 'Art Direction', 'Storyboarding', 'Lottie'],
      certifications: ['School of Motion · Advanced Motion Methods', 'Cinema 4D Artist Certification', 'Rive Animation Specialist'],
      guarantee: 'Polished motion, delivered in the formats your team needs.',
      portfolio: [
        { title: 'Small moments, made useful', category: 'Product motion', year: '2025', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=85', description: 'A lively motion language for onboarding and product feedback moments.', tags: ['Lottie', 'Product', 'After Effects'] },
        { title: 'The shape of sound', category: 'Campaign film', year: '2024', image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=900&q=85', description: 'A tactile title sequence and visual world for an independent music label.', tags: ['3D', 'Cinema 4D', 'Campaign'] }
      ]
    },
    {
      name: 'Sofia Rivera',
      trade: 'Photography',
      craftTitle: 'Photographer · Portraits & Campaigns',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=85',
      email: 'studio@sofiarivera.photo',
      website: 'sofiarivera.photo',
      bio: 'Cinematic portraits and campaign imagery with a natural, quietly confident point of view.',
      about: 'Sofia is a freelance photographer working with people-first brands, independent publications, and creative teams. Her images balance thoughtful direction with the unexpected moments in between.',
      skills: ['Portrait Photography', 'Art Direction', 'Campaigns', 'Lightroom', 'Studio Lighting', 'Retouching'],
      certifications: ['BFA Photography · School of Visual Arts', 'Adobe Certified Professional', 'ASMP Professional Member'],
      guarantee: 'Carefully produced imagery with straightforward usage licensing.',
      portfolio: [
        { title: 'People who make the place', category: 'Portrait series', year: '2025', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85', description: 'A portrait series celebrating the people behind a new independent fashion label.', tags: ['Portraits', 'Campaign', 'Studio'] },
        { title: 'A slower kind of morning', category: 'Editorial campaign', year: '2024', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85', description: 'Soft, natural-light imagery for a small-batch home and lifestyle collection.', tags: ['Editorial', 'Lifestyle', 'Natural light'] }
      ]
    },
    {
      name: 'Elliot Park',
      trade: 'Brand Strategy',
      craftTitle: 'Brand Strategist · Positioning & Naming',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=85',
      email: 'elliot@parkandco.studio',
      website: 'parkandco.studio',
      bio: 'Helping ambitious founders find the sharp idea at the heart of their brand.',
      about: 'Elliot is an independent brand strategist who works closely with founders and creative teams. His process brings audience insight, commercial clarity, and a distinctive point of view into one useful brand platform.',
      skills: ['Brand Positioning', 'Naming', 'Audience Research', 'Messaging', 'Workshop Facilitation', 'Go-to-market'],
      certifications: ['Brand Strategy · Section School', 'IDEO U · Human-centered Strategy', 'Strategyzer Business Model Innovation'],
      guarantee: 'A clear strategic foundation your team can actually use.',
      portfolio: [
        { title: 'A new chapter for Openhouse', category: 'Brand positioning', year: '2025', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85', description: 'Audience positioning and messaging for a new kind of creative workspace.', tags: ['Positioning', 'Research', 'Messaging'] },
        { title: 'Naming the next good thing', category: 'Naming & identity strategy', year: '2024', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85', description: 'A distinctive name and brand platform for a better everyday essentials company.', tags: ['Naming', 'Strategy', 'Workshop'] }
      ]
    }
  ];

  defaultWorkersData.forEach((worker, index) => {
    if (digitalWorkerProfiles[index]) Object.assign(worker, digitalWorkerProfiles[index]);
  });

  // Load any user-created profiles from localStorage
  const savedCustomProfiles = JSON.parse(localStorage.getItem('findworker_custom_profiles') || '[]');
  let workersData = [...savedCustomProfiles, ...defaultWorkersData];

  // =========================================================================
  // State
  // =========================================================================
  let currentView = 'home'; // 'home' or 'freelancers'
  let selectedCategories = [];
  let selectedBadges = [];
  let selectedSkills = [];
  let selectedLanguages = [];
  let maxRate = 120;
  let searchQuery = '';
  let sortBy = 'rating-desc';
  let currentPage = 1;
  const itemsPerPage = 4;
  let savedWorkerIds = JSON.parse(localStorage.getItem('findworker_saved') || '["worker-1", "worker-2"]');
  let activeBookingWorker = null;
  let showMoreSkills = false;

  // Carousel sliding offsets
  let topCarouselOffset = 0;
  let specCarouselOffset = 4;

  // =========================================================================
  // DOM References
  // =========================================================================
  const siteHeader = document.getElementById('site-header');
  const homeView = document.getElementById('home-view');
  const freelancersView = document.getElementById('freelancers-view');
  const navLinkFreelancers = document.getElementById('nav-link-freelancers');
  const brandLogoLink = document.getElementById('brand-logo-link');

  // Mobile Navigation
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');

  // Top Freelancers & Specializations Carousel Containers
  const topFreelancersContainer = document.getElementById('top-freelancers-container');
  const specializationsContainer = document.getElementById('specializations-container');
  const topCarouselPrev = document.getElementById('top-carousel-prev');
  const topCarouselNext = document.getElementById('top-carousel-next');
  const specCarouselPrev = document.getElementById('spec-carousel-prev');
  const specCarouselNext = document.getElementById('spec-carousel-next');

  // Directory View Elements
  const directoryCardsList = document.getElementById('directory-cards-list');
  const directoryCountEl = document.getElementById('directory-count-el');
  const directorySearchInput = document.getElementById('directory-search-input');
  const directorySearchBtn = document.getElementById('directory-search-btn');
  const directorySortSelect = document.getElementById('directory-sort-select');
  const paginationControls = document.getElementById('pagination-controls');
  const rateRangeInput = document.getElementById('rate-range-input');
  const rateRangeDisplay = document.getElementById('rate-range-display');
  const resetFiltersBtn = document.getElementById('reset-filters-btn');
  const activeFiltersBadge = document.getElementById('active-filters-count');
  const showMoreSkillsBtn = document.getElementById('show-more-skills-btn');
  const extraSkillsBox = document.getElementById('extra-skills-box');

  // Hero Search Elements
  const heroTradeSelect = document.getElementById('hero-trade-select');
  const heroLocationInput = document.getElementById('hero-location-input');
  const heroAvailability = document.getElementById('hero-availability');
  const heroSearchBtn = document.getElementById('hero-search-btn');

  // Modals & Drawers
  const shortlistTrigger = document.getElementById('shortlist-trigger');
  const shortlistCountEl = document.getElementById('shortlist-count');
  const shortlistDrawer = document.getElementById('shortlist-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerList = document.getElementById('drawer-list');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const clearShortlistBtn = document.getElementById('clear-shortlist-btn');

  // Profile Modal Elements
  const bookingModal = document.getElementById('booking-modal');
  const bookingModalClose = document.getElementById('booking-modal-close');
  const bookingAvatar = document.getElementById('booking-avatar');
  const bookingWorkerName = document.getElementById('booking-worker-name');
  const bookingWorkerTrade = document.getElementById('booking-worker-trade');
  const bookingWorkerRate = document.getElementById('booking-worker-rate');
  const bookingModalBadge = document.getElementById('booking-modal-badge');
  const bookingForm = document.getElementById('booking-form');
  const bookingHoursInput = document.getElementById('booking-hours');
  const calcRatePerHour = document.getElementById('calc-rate-per-hour');
  const calcHoursCount = document.getElementById('calc-hours-count');
  const calcSubtotal = document.getElementById('calc-subtotal');
  const calcTotal = document.getElementById('calc-total');

  // Extended Profile Modal Tabs & Elements
  const profilePortfolioGrid = document.getElementById('profile-portfolio-grid');
  const profileAboutText = document.getElementById('profile-about-text');
  const profileExperiencePill = document.getElementById('profile-experience-pill');
  const profileLocationPill = document.getElementById('profile-location-pill');
  const profileCertificationsList = document.getElementById('profile-certifications-list');
  const profileGuaranteeText = document.getElementById('profile-guarantee-text');
  const profileSkillsTags = document.getElementById('profile-skills-tags');
  const profileWorkerPhone = document.getElementById('profile-worker-phone');
  const profileWorkerEmail = document.getElementById('profile-worker-email');
  const profileWorkerWebsite = document.getElementById('profile-worker-website');
  const copyPhoneBtn = document.getElementById('copy-phone-btn');
  const copyEmailBtn = document.getElementById('copy-email-btn');

  // Login & Sign Up Modals
  const loginModal = document.getElementById('login-modal');
  const loginModalClose = document.getElementById('login-modal-close');
  const loginForm = document.getElementById('login-form');

  const signupModal = document.getElementById('signup-modal');
  const signupModalClose = document.getElementById('signup-modal-close');
  const signupForm = document.getElementById('signup-form');
  const signupRole = document.getElementById('signup-role');
  const workerProfileFields = document.getElementById('worker-profile-fields');

  // Toast & Back to Top
  const toastContainer = document.getElementById('toast-container');
  const backToTopBtn = document.getElementById('back-to-top-btn');

  // =========================================================================
  // View Router (Switch between Home View & Dedicated /freelancers View)
  // =========================================================================
  function switchView(viewName) {
    currentView = viewName;

    if (viewName === 'freelancers') {
      homeView.classList.add('view-hidden');
      freelancersView.classList.remove('view-hidden');
      if (navLinkFreelancers) navLinkFreelancers.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      renderDirectory();
    } else {
      freelancersView.classList.add('view-hidden');
      homeView.classList.remove('view-hidden');
      if (navLinkFreelancers) navLinkFreelancers.classList.remove('active');
    }
  }

  // Handle URL hash changes
  function handleHashRoute() {
    const hash = window.location.hash;
    if (hash === '#freelancers' || hash.startsWith('#freelancers')) {
      switchView('freelancers');
    } else {
      switchView('home');
      if (hash && hash !== '#home') {
        const target = document.querySelector(hash);
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth' });
          }, 60);
        }
      }
    }
  }

  window.addEventListener('hashchange', handleHashRoute);

  // Nav link clicks
  if (navLinkFreelancers) {
    navLinkFreelancers.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = '#freelancers';
      switchView('freelancers');
    });
  }

  if (brandLogoLink) {
    brandLogoLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = '#home';
      switchView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  document.querySelectorAll('.go-to-directory-link, #hero-explore-roles-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.hash = '#freelancers';
      switchView('freelancers');
    });
  });

  // Category boxes in home view click -> filter in directory
  document.querySelectorAll('.role-category-box').forEach(box => {
    box.addEventListener('click', () => {
      const trade = box.dataset.trade;
      if (trade) {
        selectedCategories = [trade];
        document.querySelectorAll('input[data-filter-group="category"]').forEach(cb => {
          cb.checked = cb.value === trade;
        });
        window.location.hash = '#freelancers';
        switchView('freelancers');
        showToast(`Filtered by ${trade}`);
      }
    });
  });

  // =========================================================================
  // Render Top Freelancers & Curated Talent Spotlight Grids (Home View)
  // =========================================================================
  function renderHomeCarousels() {
    // Top Elite Freelancers (Curated Top 1% by rating, 4 items starting at topCarouselOffset)
    if (topFreelancersContainer) {
      const topTierWorkers = [...workersData].sort((a, b) => b.rating - a.rating);
      const topWorkers = [];
      for (let i = 0; i < 4; i++) {
        topWorkers.push(topTierWorkers[(topCarouselOffset + i) % topTierWorkers.length]);
      }
      topFreelancersContainer.innerHTML = topWorkers.map((w, idx) => renderGridCardHtml(w, (topCarouselOffset + idx) % topTierWorkers.length + 1)).join('');

      // Update Top Cohort Tracker
      const topTrackerCurrent = document.getElementById('top-tracker-current');
      const topTrackerTotal = document.getElementById('top-tracker-total');
      if (topTrackerCurrent && topTrackerTotal) {
        const totalCohorts = Math.ceil(topTierWorkers.length / 4);
        const currentCohort = Math.floor(topCarouselOffset / 4) + 1;
        topTrackerCurrent.textContent = String(currentCohort).padStart(2, '0');
        topTrackerTotal.textContent = String(totalCohorts).padStart(2, '0');
      }
    }

    // Curated Talent Spotlight (#specializations - 8 items starting at specCarouselOffset)
    if (specializationsContainer) {
      const specWorkers = [];
      for (let i = 0; i < 8; i++) {
        specWorkers.push(workersData[(specCarouselOffset + i) % workersData.length]);
      }
      specializationsContainer.innerHTML = specWorkers.map(w => renderSpotlightCardHtml(w)).join('');

      // Update Cohort Tracker
      const trackerCurrent = document.getElementById('spec-tracker-current');
      const trackerTotal = document.getElementById('spec-tracker-total');
      if (trackerCurrent && trackerTotal) {
        const totalCohorts = Math.ceil(workersData.length / 8);
        const currentCohort = Math.floor(specCarouselOffset / 8) + 1;
        trackerCurrent.textContent = String(currentCohort).padStart(2, '0');
        trackerTotal.textContent = String(totalCohorts).padStart(2, '0');
      }
    }

    attachCardEventListeners();
  }

  // Curated Talent Spotlight Card Design (Clean, Visual-First & Premium)
  function renderSpotlightCardHtml(w) {
    const isSaved = savedWorkerIds.includes(w.id);
    const featuredProject = w.portfolio && w.portfolio[0] ? w.portfolio[0] : {
      title: 'Flagship Digital Architecture',
      category: w.trade,
      image: w.image
    };

    return `
      <article class="spotlight-talent-card" data-id="${w.id}">
        <!-- Flagship Work Preview -->
        <div class="spotlight-media-cover">
          <img src="${featuredProject.image}" alt="${featuredProject.title}" loading="lazy">
          <div class="spotlight-cover-top">
            <span class="spotlight-category-chip">${featuredProject.category || w.trade}</span>
            <button class="bookmark-heart-btn ${isSaved ? 'active' : ''}" data-id="${w.id}" title="${isSaved ? 'Remove from shortlist' : 'Save to shortlist'}" aria-label="Save ${w.name}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Creator Identity & Rating -->
        <div class="spotlight-creator-row">
          <div class="spotlight-avatar-wrap">
            <img src="${w.image}" alt="${w.name}" loading="lazy">
            <span class="online-indicator-dot" title="Available"></span>
          </div>
          <div class="spotlight-creator-info">
            <h3 class="spotlight-creator-name">${w.name}</h3>
            <span class="spotlight-creator-craft">${w.craftTitle || w.trade}</span>
          </div>
          <div class="spotlight-rating-badge">
            <span class="star-gold">★</span>
            <span class="rating-num">${w.rating}</span>
          </div>
        </div>

        <!-- Core Skill Chips -->
        <div class="spotlight-skills-list">
          ${w.skills.slice(0, 2).map(s => `<span class="spotlight-skill-pill">${s}</span>`).join('')}
        </div>

        <!-- Rate & Action Footer -->
        <div class="spotlight-card-footer">
          <div class="spotlight-rate-block">
            <span class="spotlight-rate-val">$${w.hourlyRate}</span>
            <span class="spotlight-rate-unit">/hr</span>
          </div>
          <button class="btn btn-primary btn-sm card-profile-btn spotlight-cta-btn" data-id="${w.id}">
            <span>View Profile</span>
            <span class="arrow-up-right">→</span>
          </button>
        </div>
      </article>
    `;
  }

  // Top Freelancers Card Design (Meet the Independents - Standout VIP Elite Showcase)
  function renderGridCardHtml(w, rank) {
    const isSaved = savedWorkerIds.includes(w.id);
    const featuredProject = w.portfolio && w.portfolio[0] ? w.portfolio[0] : {
      title: 'Flagship Digital Architecture',
      category: w.trade,
      image: w.image
    };
    

    return `
      <article class="vip-independents-card" data-id="${w.id}">
        <!-- Top Prismatic Foil Accent -->
        

        <!-- Media Stage / Project Preview Aperture -->
        <div class="vip-card-media-stage">
          <img src="${featuredProject.image}" alt="${featuredProject.title}" class="vip-card-image" loading="lazy">
          <div class="vip-card-media-scrim" aria-hidden="true"></div>

          <!-- Top Floating Crests -->
          <div class="vip-card-badge-row">
            <div class="vip-card-crests-group">
              
              <span class="vip-card-hallmark">★ TOP RATED</span>
              
            </div>
        
          </div>

         
        </div>

        <!-- Creator Profile Deck -->
        <div class="vip-card-profile-deck">
          <div class="vip-card-avatar-stage">
            <img src="${w.image}" alt="${w.name}" class="vip-card-avatar-img" loading="lazy">
            <span class="vip-card-live-dot" title="Available for direct engagement"></span>
          </div>
          <div class="vip-card-identity-block">
            <div class="vip-card-name-line">
              <h3 class="vip-card-name">${w.name}</h3>
              <span class="vip-card-verified-icon" title="Verified Independent Pro">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#10B981">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </span>
            </div>
            <span class="vip-card-role-title">${w.craftTitle || w.trade}</span>
          </div>
          <div class="vip-card-rating-capsule">
            <span class="star-icon">★</span>
            <span class="rating-val">${w.rating}</span>
          </div>
        </div>

        <!-- Signature Skills & Performance Ribbon -->
        <div class="vip-card-spec-highlight">
          <div class="vip-card-skills-row">
            ${w.skills.slice(0, 2).map(s => `<span class="vip-card-skill-tag">${s}</span>`).join('')}
          </div>
          <span class="vip-card-status-badge">
            <span class="badge-bolt">⚡</span> 100% Success
          </span>
        </div>

        <!-- Action & Rate Bottom Dock -->
        <div class="vip-card-bottom-dock">
          <div class="vip-card-rate-group">
            <div class="vip-card-rate-main">
              <span class="vip-card-rate-amount">$${w.hourlyRate}</span>
              <span class="vip-card-rate-period">/hr</span>
            </div>
            <span class="vip-card-rate-note">Direct • 0% Cut</span>
          </div>
          <button class="btn btn-primary btn-sm vip-card-action-btn card-profile-btn" data-id="${w.id}">
            <span>View Profile</span>
            <span class="vip-btn-arrow">→</span>
          </button>
        </div>
      </article>
    `;
  }

  // Carousel Next / Prev Click Handlers
  if (topCarouselNext) {
    topCarouselNext.addEventListener('click', () => {
      topCarouselOffset = (topCarouselOffset + 4) % workersData.length;
      if (topFreelancersContainer) {
        topFreelancersContainer.classList.add('carousel-sliding');
        setTimeout(() => topFreelancersContainer.classList.remove('carousel-sliding'), 380);
      }
      renderHomeCarousels();
    });
  }
  if (topCarouselPrev) {
    topCarouselPrev.addEventListener('click', () => {
      topCarouselOffset = (topCarouselOffset - 4 + workersData.length) % workersData.length;
      if (topFreelancersContainer) {
        topFreelancersContainer.classList.add('carousel-sliding');
        setTimeout(() => topFreelancersContainer.classList.remove('carousel-sliding'), 380);
      }
      renderHomeCarousels();
    });
  }
  if (specCarouselNext) {
    specCarouselNext.addEventListener('click', () => {
      specCarouselOffset = (specCarouselOffset + 8) % workersData.length;
      if (specializationsContainer) {
        specializationsContainer.classList.add('carousel-sliding');
        setTimeout(() => specializationsContainer.classList.remove('carousel-sliding'), 380);
      }
      renderHomeCarousels();
    });
  }
  if (specCarouselPrev) {
    specCarouselPrev.addEventListener('click', () => {
      specCarouselOffset = (specCarouselOffset - 8 + workersData.length) % workersData.length;
      if (specializationsContainer) {
        specializationsContainer.classList.add('carousel-sliding');
        setTimeout(() => specializationsContainer.classList.remove('carousel-sliding'), 380);
      }
      renderHomeCarousels();
    });
  }

  // =========================================================================
  // Filtering & Directory Rendering (Dedicated Freelancers View)
  // =========================================================================
  function getFilteredWorkers() {
    return workersData.filter(worker => {
      // Category
      if (selectedCategories.length > 0 && !selectedCategories.includes(worker.trade)) {
        return false;
      }
      // Badges
      if (selectedBadges.length > 0) {
        const matchesBadge = selectedBadges.some(b => {
          if (b === 'Top Rated') return worker.rating >= 4.95;
          return worker.badge === b;
        });
        if (!matchesBadge) return false;
      }
      // Skills
      if (selectedSkills.length > 0) {
        const hasSkill = selectedSkills.some(skill =>
          worker.skills.some(ws => ws.toLowerCase().includes(skill.toLowerCase()))
        );
        if (!hasSkill) return false;
      }
      // Languages
      if (selectedLanguages.length > 0 && !selectedLanguages.includes(worker.language)) {
        return false;
      }
      // Price slider
      if (worker.hourlyRate > maxRate) {
        return false;
      }
      // Text search
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matches = worker.name.toLowerCase().includes(q) ||
                        worker.craftTitle.toLowerCase().includes(q) ||
                        worker.skills.some(s => s.toLowerCase().includes(q)) ||
                        worker.location.toLowerCase().includes(q) ||
                        worker.bio.toLowerCase().includes(q) ||
                        (worker.portfolio && worker.portfolio.some(p => p.title.toLowerCase().includes(q)));
        if (!matches) return false;
      }
      return true;
    });
  }

  function getSortedWorkers(list) {
    const sorted = [...list];
    if (sortBy === 'rating-desc') sorted.sort((a, b) => b.rating - a.rating);
    if (sortBy === 'rate-asc') sorted.sort((a, b) => a.hourlyRate - b.hourlyRate);
    if (sortBy === 'rate-desc') sorted.sort((a, b) => b.hourlyRate - a.hourlyRate);
    if (sortBy === 'experience-desc') sorted.sort((a, b) => b.experienceYears - a.experienceYears);
    return sorted;
  }

  function renderDirectory() {
    if (!directoryCardsList) return;
    const filtered = getFilteredWorkers();
    const sorted = getSortedWorkers(filtered);

    // Active filters count
    let activeCount = selectedCategories.length + selectedBadges.length + selectedSkills.length + selectedLanguages.length;
    if (maxRate < 120) activeCount++;
    if (searchQuery.trim() !== '') activeCount++;

    if (activeFiltersBadge) {
      if (activeCount > 0) {
        activeFiltersBadge.textContent = `${activeCount} Active`;
        activeFiltersBadge.style.display = 'inline-block';
      } else {
        activeFiltersBadge.style.display = 'none';
      }
    }

    // Pagination
    const totalItems = sorted.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
    if (currentPage > totalPages) currentPage = 1;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const pageItems = sorted.slice(startIndex, endIndex);

    if (directoryCountEl) {
      directoryCountEl.innerHTML = `Showing <strong>${totalItems === 0 ? 0 : startIndex + 1}-${endIndex}</strong> of <strong>${totalItems}</strong> independent profiles`;
    }

    if (pageItems.length === 0) {
      directoryCardsList.innerHTML = `
        <div class="empty-results-box">
          <div class="empty-icon-glow">✦</div>
          <h3 class="empty-title">No Freelancers Match Your Filter Criteria</h3>
          <p class="empty-desc">
            Try adjusting your hourly rate filter, clearing specific skills, or resetting all filters to see all available talent.
          </p>
          <button class="btn btn-primary btn-sm" id="empty-reset-btn">
            <span>Reset All Filters</span>
          </button>
        </div>
      `;
      const emptyReset = document.getElementById('empty-reset-btn');
      if (emptyReset) emptyReset.addEventListener('click', resetAllFilters);
      renderPaginationControls(0, 1);
      return;
    }

    directoryCardsList.innerHTML = pageItems.map(w => {
      const isSaved = savedWorkerIds.includes(w.id);
      let badgeHtml = '';
      if (w.badge === 'PRO') {
        badgeHtml = `<span class="badge-tier-pro">✦ Independent</span>`;
      } else if (w.badge === 'L3') {
        badgeHtml = `<span class="badge-tier-l3">✦ Featured</span>`;
      } else if (w.badge === 'L2') {
        badgeHtml = `<span class="badge-tier-l2">✦ Profile</span>`;
      } else {
        badgeHtml = `<span class="badge-tier-l2">Independent</span>`;
      }

      const projectsCount = w.portfolio ? w.portfolio.length : 3;

      return `
        <article class="freelancer-row-card" data-id="${w.id}">
          <button class="bookmark-heart-btn ${isSaved ? 'active' : ''}" data-id="${w.id}" title="${isSaved ? 'Saved to shortlist' : 'Save freelancer'}" aria-label="Save ${w.name}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>

          <div class="freelancer-project-thumb">
            <img src="${w.portfolio && w.portfolio[0] ? w.portfolio[0].image : w.image}" alt="${w.portfolio && w.portfolio[0] ? w.portfolio[0].title : `${w.name} selected work`}" loading="lazy">
          </div>

          <div class="freelancer-avatar-wrap">
            <img src="${w.image}" alt="${w.name}" class="freelancer-avatar-img" loading="lazy">
            <span class="online-dot-badge" title="Active & Ready to Connect"></span>
          </div>

          <div class="freelancer-main-info">
            <div class="freelancer-header-line">
              <div class="freelancer-name-title">
                <h3 class="freelancer-name">${w.name}</h3>
                ${badgeHtml}
                <span class="freelancer-specialty">• ${w.craftTitle}</span>
              </div>
            </div>

            <div class="freelancer-meta-row">
              <span class="meta-item"><span class="meta-icon">📍</span> ${w.location}</span>
              <span class="meta-divider">•</span>
              <span class="meta-item"><strong>${w.experienceYears}y</strong> experience</span>
              <span class="meta-divider">•</span>
              <span class="meta-portfolio-count">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
                ${projectsCount} Projects
              </span>
              <span class="meta-divider">•</span>
              <span class="availability-pill">Available for direct contact</span>
            </div>

            <p class="freelancer-bio-text">${w.bio}</p>

            <div class="freelancer-skill-chips">
              ${w.skills.map(s => `<span class="skill-chip">${s}</span>`).join('')}
            </div>
          </div>

          <div class="freelancer-action-col">
            <div class="freelancer-hourly-rate">
              <div class="rate-number">$${w.hourlyRate}</div>
              <div class="rate-label">USD / hour</div>
            </div>

            <button class="btn btn-primary btn-sm card-profile-btn" data-id="${w.id}">
              <span>View Profile &amp; Portfolio</span>
              <span class="arrow-up-right">↗</span>
            </button>
          </div>
        </article>
      `;
    }).join('');

    renderPaginationControls(totalPages, currentPage);
    attachCardEventListeners();
  }

  function renderPaginationControls(totalPages, activePage) {
    if (!paginationControls) return;
    if (totalPages <= 1) {
      paginationControls.innerHTML = '';
      return;
    }

    let html = `
      <button class="page-btn" id="prev-page-btn" ${activePage === 1 ? 'disabled' : ''} aria-label="Previous page">←</button>
    `;

    for (let i = 1; i <= totalPages; i++) {
      html += `
        <button class="page-btn ${i === activePage ? 'active' : ''}" data-page="${i}">${i}</button>
      `;
    }

    html += `
      <button class="page-btn" id="next-page-btn" ${activePage === totalPages ? 'disabled' : ''} aria-label="Next page">Next →</button>
    `;

    paginationControls.innerHTML = html;

    const prev = document.getElementById('prev-page-btn');
    const next = document.getElementById('next-page-btn');
    if (prev) {
      prev.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          renderDirectory();
          window.scrollTo({ top: 300, behavior: 'smooth' });
        }
      });
    }
    if (next) {
      next.addEventListener('click', () => {
        if (currentPage < totalPages) {
          currentPage++;
          renderDirectory();
          window.scrollTo({ top: 300, behavior: 'smooth' });
        }
      });
    }
    paginationControls.querySelectorAll('.page-btn[data-page]').forEach(btn => {
      btn.addEventListener('click', () => {
        currentPage = parseInt(btn.dataset.page, 10);
        renderDirectory();
        window.scrollTo({ top: 300, behavior: 'smooth' });
      });
    });
  }

  // =========================================================================
  // Attach Dynamic Card Listeners (Hearts, Profile Modals)
  // =========================================================================
  function attachCardEventListeners() {
    // Bookmark buttons
    document.querySelectorAll('.bookmark-heart-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        toggleSaveWorker(btn.dataset.id);
      };
    });

    // Profile buttons
    document.querySelectorAll('.card-profile-btn').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        openBookingModal(btn.dataset.id);
      };
    });

    // Card whole-card click trigger for instant profile discovery
    document.querySelectorAll('.spotlight-talent-card, .freelancer-grid-card, .vip-independents-card').forEach(card => {
      card.onclick = (e) => {
        if (e.target.closest('.bookmark-heart-btn')) return;
        openBookingModal(card.dataset.id);
      };
      card.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          if (e.target.closest('.bookmark-heart-btn')) return;
          e.preventDefault();
          openBookingModal(card.dataset.id);
        }
      };
    });
  }

  // =========================================================================
  // Shortlist / Bookmarks
  // =========================================================================
  function toggleSaveWorker(workerId) {
    const worker = workersData.find(w => w.id === workerId);
    if (!worker) return;

    if (savedWorkerIds.includes(workerId)) {
      savedWorkerIds = savedWorkerIds.filter(id => id !== workerId);
      showToast(`Removed ${worker.name} from shortlist`);
    } else {
      savedWorkerIds.push(workerId);
      showToast(`Saved ${worker.name} to shortlist`);
    }

    localStorage.setItem('findworker_saved', JSON.stringify(savedWorkerIds));
    updateShortlistUI();
    renderHomeCarousels();
    renderDirectory();
  }

  function updateShortlistUI() {
    if (shortlistCountEl) {
      shortlistCountEl.textContent = savedWorkerIds.length;
    }

    const saved = workersData.filter(w => savedWorkerIds.includes(w.id));
    if (!drawerList) return;

    if (saved.length === 0) {
      drawerList.innerHTML = `
        <div class="drawer-empty-state">
          <div class="empty-icon-glow">✦</div>
          <h4 class="empty-title">Your shortlist is empty</h4>
          <p class="empty-desc">Click the bookmark icon on any specialist card to save them here for quick comparison and contact.</p>
        </div>
      `;
    } else {
      drawerList.innerHTML = saved.map(w => `
        <div class="shortlist-card-item">
          <img src="${w.image}" alt="${w.name}" class="shortlist-avatar">
          <div class="shortlist-info">
            <h4 class="shortlist-name">${w.name}</h4>
            <div class="shortlist-trade">${w.trade} • $${w.hourlyRate}/hr</div>
            <div class="shortlist-loc">${w.location.split('&')[0]}</div>
          </div>
          <div class="shortlist-actions">
            <button class="btn btn-primary btn-sm drawer-book-btn" data-id="${w.id}">Profile</button>
            <button class="btn btn-outline btn-sm drawer-remove-btn" data-id="${w.id}">Remove</button>
          </div>
        </div>
      `).join('');

      drawerList.querySelectorAll('.drawer-book-btn').forEach(b => {
        b.addEventListener('click', () => {
          closeShortlistDrawer();
          openBookingModal(b.dataset.id);
        });
      });

      drawerList.querySelectorAll('.drawer-remove-btn').forEach(b => {
        b.addEventListener('click', () => {
          toggleSaveWorker(b.dataset.id);
        });
      });
    }
  }

  function openShortlistDrawer() {
    updateShortlistUI();
    if (drawerBackdrop) drawerBackdrop.classList.add('active');
  }

  function closeShortlistDrawer() {
    if (drawerBackdrop) drawerBackdrop.classList.remove('active');
  }

  if (shortlistTrigger) shortlistTrigger.addEventListener('click', openShortlistDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeShortlistDrawer);
  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', (e) => {
      if (e.target === drawerBackdrop) closeShortlistDrawer();
    });
  }
  if (clearShortlistBtn) {
    clearShortlistBtn.addEventListener('click', () => {
      savedWorkerIds = [];
      localStorage.setItem('findworker_saved', JSON.stringify(savedWorkerIds));
      updateShortlistUI();
      renderHomeCarousels();
      renderDirectory();
      showToast('Shortlist cleared');
    });
  }

  // =========================================================================
  // Comprehensive Freelancer Profile & Portfolio Showcase Modal
  // =========================================================================
  function openBookingModal(workerId) {
    const worker = workersData.find(w => w.id === workerId);
    if (!worker) return;
    activeBookingWorker = worker;

    // Header info
    if (bookingAvatar) bookingAvatar.src = worker.image;
    if (bookingWorkerName) bookingWorkerName.textContent = worker.name;
    if (bookingWorkerTrade)     bookingWorkerTrade.textContent = worker.craftTitle;
    if (bookingWorkerRate) bookingWorkerRate.textContent = `$${worker.hourlyRate}/hour`;

    if (bookingModalBadge) {
      bookingModalBadge.textContent = 'Independent';
      bookingModalBadge.className = worker.badge === 'PRO' ? 'badge-tier-pro' : 'badge-tier-l3';
    }

    // Extended Profile Information
    if (profileAboutText) {
      profileAboutText.textContent = worker.about || worker.bio;
    }
    if (profileExperiencePill) {
      profileExperiencePill.textContent = `${worker.experienceYears} Years Experience`;
    }
    if (profileLocationPill) {
      profileLocationPill.textContent = worker.location;
    }
    if (profileGuaranteeText) {
      profileGuaranteeText.textContent = worker.guarantee || 'Independent professional profile.';
    }

    // Certifications
    if (profileCertificationsList) {
      const certs = worker.certifications || [
        'Independent FindWorker Profile',
        'Portfolio available on request',
        'Direct professional contact'
      ];
      profileCertificationsList.innerHTML = certs.map(c => `
        <li class="cert-item">
          <span class="cert-check">✓</span>
          <span>${c}</span>
        </li>
      `).join('');
    }

    // Skills
    if (profileSkillsTags) {
      profileSkillsTags.innerHTML = worker.skills.map(s => `
        <span class="skill-chip modal-skill-chip">${s}</span>
      `).join('');
    }

    // Direct Contact Info Cards
    if (profileWorkerPhone) {
      profileWorkerPhone.textContent = worker.phone || '+1 (555) 382-9104';
      profileWorkerPhone.href = `tel:${(worker.phone || '+15553829104').replace(/\s+/g, '')}`;
    }
    if (profileWorkerEmail) {
      profileWorkerEmail.textContent = worker.email || `${worker.name.toLowerCase().replace(/\s+/g, '.')}@findworker.directory`;
      profileWorkerEmail.href = `mailto:${worker.email || 'hello@findworker.directory'}`;
    }
    if (profileWorkerWebsite) {
      const web = worker.website || `${worker.name.toLowerCase().replace(/\s+/g, '')}.studio`;
      profileWorkerWebsite.textContent = web;
      profileWorkerWebsite.href = `https://${web}`;
    }

    // Portfolio Projects
    if (profilePortfolioGrid) {
      const projects = worker.portfolio || [
        {
          title: `${worker.trade} Master Showcase Project`,
          category: worker.trade,
          year: '2025',
          image: worker.image,
          description: `Custom, high-precision ${worker.trade.toLowerCase()} project completed according to strict architectural specifications.`,
          tags: worker.skills.slice(0, 3)
        }
      ];

      profilePortfolioGrid.innerHTML = projects.map(p => `
        <div class="portfolio-card">
          <div class="portfolio-img-wrap">
            <img src="${p.image}" alt="${p.title}" class="portfolio-img" loading="lazy">
            <span class="portfolio-year-badge">${p.year || '2025'}</span>
          </div>
          <div class="portfolio-body">
            <div class="portfolio-category-tag">${p.category || worker.trade}</div>
            <h4 class="portfolio-title">${p.title}</h4>
            <p class="portfolio-desc">${p.description}</p>
            <div class="portfolio-tags-row">
              ${(p.tags || []).map(t => `<span class="portfolio-tag-pill">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      `).join('');
    }

    // Calculator updates
    if (calcRatePerHour) calcRatePerHour.textContent = `$${worker.hourlyRate}`;
    updateBookingCalculation();

    // Default to Portfolio Tab
    switchProfileTab('portfolio');

    // Open Modal
    if (bookingModal) {
      bookingModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeBookingModal() {
    if (bookingModal) {
      bookingModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Profile Modal Tab Switching
  function switchProfileTab(tabName) {
    document.querySelectorAll('.profile-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabName);
    });

    document.querySelectorAll('.profile-tab-panel').forEach(panel => {
      panel.classList.toggle('active', panel.dataset.panel === tabName);
    });
  }

  document.querySelectorAll('.profile-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchProfileTab(btn.dataset.tab);
    });
  });

  // Direct Contact Jump Button
  document.querySelectorAll('.jump-to-contact-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchProfileTab('contact');
    });
  });

  // Copy Phone & Email Clipboard
  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      if (profileWorkerPhone) {
        navigator.clipboard.writeText(profileWorkerPhone.textContent.trim());
        showToast('✓ Phone number copied to clipboard!');
      }
    });
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      if (profileWorkerEmail) {
        navigator.clipboard.writeText(profileWorkerEmail.textContent.trim());
        showToast('✓ Email address copied to clipboard!');
      }
    });
  }

  function updateBookingCalculation() {
    if (!activeBookingWorker) return;
    const hours = parseInt(bookingHoursInput ? bookingHoursInput.value : 4, 10) || 4;
    const rate = activeBookingWorker.hourlyRate;
    const subtotal = hours * rate;
    const platformFee = 0; // Direct platform, 0 middleman commission
    const total = subtotal + platformFee;

    if (calcHoursCount) calcHoursCount.textContent = `${hours} hours`;
    if (calcSubtotal) calcSubtotal.textContent = `$${subtotal}`;
    if (calcTotal) calcTotal.textContent = `$${total} USD`;
  }

  if (bookingHoursInput) bookingHoursInput.addEventListener('input', updateBookingCalculation);
  if (bookingModalClose) bookingModalClose.addEventListener('click', closeBookingModal);
  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) closeBookingModal();
    });
  }

  // Direct Message / Inquiry Form Submission
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const workerName = activeBookingWorker ? activeBookingWorker.name : 'Specialist';
      closeBookingModal();
      showToast(`✓ Direct inquiry sent to ${workerName}! They will respond to your contact info directly.`);
      bookingForm.reset();
    });
  }

  // =========================================================================
  // Log In and Sign Up Modals
  // =========================================================================
  function openLoginModal() {
    if (loginModal) {
      loginModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }
  function closeLoginModal() {
    if (loginModal) {
      loginModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function openSignupModal() {
    if (signupModal) {
      signupModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }
  function closeSignupModal() {
    if (signupModal) {
      signupModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('#header-login-btn, #footer-login-btn, #cta-login-btn').forEach(b => {
    b.addEventListener('click', openLoginModal);
  });
  if (loginModalClose) loginModalClose.addEventListener('click', closeLoginModal);
  if (loginModal) {
    loginModal.addEventListener('click', (e) => {
      if (e.target === loginModal) closeLoginModal();
    });
  }
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeLoginModal();
      showToast('✓ Successfully logged in to FindWorker Workspace');
      loginForm.reset();
    });
  }

  // Freelancer Profile Creation in Sign Up Modal
  if (signupRole) {
    signupRole.addEventListener('change', () => {
      if (workerProfileFields) {
        if (signupRole.value === 'worker') {
          workerProfileFields.style.display = 'block';
        } else {
          workerProfileFields.style.display = 'none';
        }
      }
    });
  }

  document.querySelectorAll('#header-signup-btn, #footer-signup-btn, #hero-apply-btn, #cta-apply-btn').forEach(b => {
    b.addEventListener('click', openSignupModal);
  });
  if (signupModalClose) signupModalClose.addEventListener('click', closeSignupModal);
  if (signupModal) {
    signupModal.addEventListener('click', (e) => {
      if (e.target === signupModal) closeSignupModal();
    });
  }

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const role = signupRole ? signupRole.value : 'client';
      const name = document.getElementById('signup-name') ? document.getElementById('signup-name').value : 'Contributor';
      const email = document.getElementById('signup-email') ? document.getElementById('signup-email').value : '';

      if (role === 'worker') {
        const trade = document.getElementById('signup-trade') ? document.getElementById('signup-trade').value : 'Web Development';
        const title = document.getElementById('signup-title') && document.getElementById('signup-title').value
          ? document.getElementById('signup-title').value
          : `Independent ${trade} professional`;
        const rate = document.getElementById('signup-rate') ? parseInt(document.getElementById('signup-rate').value, 10) || 75 : 75;
        const exp = document.getElementById('signup-experience') ? parseInt(document.getElementById('signup-experience').value, 10) || 5 : 5;
        const skillsRaw = document.getElementById('signup-skills') ? document.getElementById('signup-skills').value : '';
        const skills = skillsRaw ? skillsRaw.split(',').map(s => s.trim()).filter(Boolean) : [trade, 'Creative direction', 'Digital strategy'];
        const bio = document.getElementById('signup-bio') && document.getElementById('signup-bio').value
          ? document.getElementById('signup-bio').value
          : `Independent ${trade.toLowerCase()} professional sharing thoughtful digital work.`;
        const loc = document.getElementById('signup-location') && document.getElementById('signup-location').value
          ? document.getElementById('signup-location').value
          : 'Remote · Worldwide';

        const newWorker = {
          id: `custom-worker-${Date.now()}`,
          name: name,
          trade: trade,
          craftTitle: title,
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85',
          badge: 'PRO',
          badgeLabel: 'Independent Professional',
          rating: 5.0,
          reviewsCount: 1,
          hourlyRate: rate,
          location: loc,
          experienceYears: exp,
          availability: 'Available Today',
          instantBooking: true,
          language: 'English',
          email: email,
          phone: '+1 (555) 720-4190',
          website: `${name.toLowerCase().replace(/\s+/g, '')}.studio`,
          bio: bio,
          about: bio,
          skills: skills,
          certifications: ['Independent FindWorker Profile', 'Portfolio available on request'],
          guarantee: 'Direct contact, independent practice.',
          portfolio: [
            {
              title: `${title} Portfolio Highlight`,
              category: trade,
              year: '2025',
              image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85',
              description: `A selected ${trade.toLowerCase()} project showing an independent creative process and finished digital work.`,
              tags: skills.slice(0, 3)
            }
          ]
        };

        // Add to active dataset and localStorage
        workersData.unshift(newWorker);
        const currentCustom = JSON.parse(localStorage.getItem('findworker_custom_profiles') || '[]');
        currentCustom.unshift(newWorker);
        localStorage.setItem('findworker_custom_profiles', JSON.stringify(currentCustom));

        closeSignupModal();
        renderHomeCarousels();
        renderDirectory();
        switchView('freelancers');
        showToast(`🎉 Welcome ${name}! Your freelancer profile is published and ready to be discovered.`);
      } else {
        closeSignupModal();
        showToast('✓ Registration complete! Welcome to the FindWorker directory network.');
      }

      signupForm.reset();
      if (workerProfileFields) workerProfileFields.style.display = 'none';
    });
  }

  // =========================================================================
  // Reset All Filters in Sidebar
  // =========================================================================
  function resetAllFilters() {
    selectedCategories = [];
    selectedBadges = [];
    selectedSkills = [];
    selectedLanguages = [];
    maxRate = 120;
    searchQuery = '';
    sortBy = 'rating-desc';
    currentPage = 1;

    if (directorySearchInput) directorySearchInput.value = '';
    if (rateRangeInput) rateRangeInput.value = 120;
    if (rateRangeDisplay) rateRangeDisplay.textContent = '$120/hr';
    if (directorySortSelect) directorySortSelect.value = 'rating-desc';

    document.querySelectorAll('.sidebar-checkbox').forEach(cb => {
      cb.checked = false;
    });

    renderDirectory();
    showToast('Filters cleared');
  }

  if (resetFiltersBtn) resetFiltersBtn.addEventListener('click', resetAllFilters);

  // Checkbox listeners
  document.querySelectorAll('input[data-filter-group="category"]').forEach(cb => {
    cb.addEventListener('change', () => {
      const val = cb.value;
      if (cb.checked) {
        selectedCategories.push(val);
      } else {
        selectedCategories = selectedCategories.filter(c => c !== val);
      }
      currentPage = 1;
      renderDirectory();
    });
  });

  document.querySelectorAll('input[data-filter-group="badge"]').forEach(cb => {
    cb.addEventListener('change', () => {
      const val = cb.value;
      if (cb.checked) {
        selectedBadges.push(val);
      } else {
        selectedBadges = selectedBadges.filter(b => b !== val);
      }
      currentPage = 1;
      renderDirectory();
    });
  });

  document.querySelectorAll('input[data-filter-group="skill"]').forEach(cb => {
    cb.addEventListener('change', () => {
      const val = cb.value;
      if (cb.checked) {
        selectedSkills.push(val);
      } else {
        selectedSkills = selectedSkills.filter(s => s !== val);
      }
      currentPage = 1;
      renderDirectory();
    });
  });

  document.querySelectorAll('input[data-filter-group="language"]').forEach(cb => {
    cb.addEventListener('change', () => {
      const val = cb.value;
      if (cb.checked) {
        selectedLanguages.push(val);
      } else {
        selectedLanguages = selectedLanguages.filter(l => l !== val);
      }
      currentPage = 1;
      renderDirectory();
    });
  });

  if (rateRangeInput) {
    rateRangeInput.addEventListener('input', (e) => {
      maxRate = parseInt(e.target.value, 10);
      if (rateRangeDisplay) rateRangeDisplay.textContent = `$${maxRate}/hr`;
      currentPage = 1;
      renderDirectory();
    });
  }

  if (directorySearchInput) {
    directorySearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      currentPage = 1;
      renderDirectory();
    });
  }
  if (directorySearchBtn) {
    directorySearchBtn.addEventListener('click', () => {
      if (directorySearchInput) searchQuery = directorySearchInput.value;
      currentPage = 1;
      renderDirectory();
    });
  }

  if (directorySortSelect) {
    directorySortSelect.addEventListener('change', (e) => {
      sortBy = e.target.value;
      renderDirectory();
    });
  }

  if (showMoreSkillsBtn && extraSkillsBox) {
    showMoreSkillsBtn.addEventListener('click', () => {
      showMoreSkills = !showMoreSkills;
      extraSkillsBox.style.display = showMoreSkills ? 'flex' : 'none';
      showMoreSkillsBtn.textContent = showMoreSkills ? '- Show Less' : '+ Show More';
    });
  }

  // Hero Search Matrix Button
  if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', () => {
      if (heroTradeSelect && heroTradeSelect.value !== 'all') {
        selectedCategories = [heroTradeSelect.value];
        document.querySelectorAll('input[data-filter-group="category"]').forEach(cb => {
          cb.checked = cb.value === heroTradeSelect.value;
        });
      }
      if (heroLocationInput && heroLocationInput.value.trim() !== '') {
        searchQuery = heroLocationInput.value.trim();
        if (directorySearchInput) directorySearchInput.value = searchQuery;
      }
      window.location.hash = '#freelancers';
      switchView('freelancers');
      showToast('Filtered Freelancers Directory');
    });
  }

  // Trending search pills
  document.querySelectorAll('.pill-item').forEach(pill => {
    pill.addEventListener('click', () => {
      const trade = pill.dataset.filterTrade;
      if (trade) {
        selectedCategories = [trade];
        document.querySelectorAll('input[data-filter-group="category"]').forEach(cb => {
          cb.checked = cb.value === trade;
        });
        window.location.hash = '#freelancers';
        switchView('freelancers');
        showToast(`Filtered by ${trade}`);
      }
    });
  });

  // =========================================================================
  // Fiverr-Inspired Search Placeholder Rotator & Featured Talent Trigger
  // =========================================================================
  const heroSearchInput = document.getElementById('hero-location-input');
  if (heroSearchInput) {
    const searchSuggestions = [
      'Search any skill or role, e.g. Web Development…',
      'Try "Product & UI/UX Designer"…',
      'Try "Full-Stack Web Architect"…',
      'Try "Motion & 3D Visual Artist"…',
      'Try "Brand Systems & Identity"…',
      'Try "Growth & Digital Marketing"…',
      'Try "Remote Specialist in Europe"…'
    ];
    let suggestionIdx = 0;
    let placeholderInterval = null;

    function cyclePlaceholder() {
      // Don't cycle if the user is currently typing or focused
      if (document.activeElement === heroSearchInput || heroSearchInput.value.trim() !== '') {
        return;
      }
      suggestionIdx = (suggestionIdx + 1) % searchSuggestions.length;
      heroSearchInput.placeholder = searchSuggestions[suggestionIdx];
    }

    placeholderInterval = setInterval(cyclePlaceholder, 3200);

    // Stop rotation when user focuses input
    heroSearchInput.addEventListener('focus', () => {
      heroSearchInput.placeholder = 'Search by skill, trade, name, or location…';
    });

    heroSearchInput.addEventListener('blur', () => {
      if (heroSearchInput.value.trim() === '') {
        heroSearchInput.placeholder = searchSuggestions[suggestionIdx];
      }
    });

    // Enter key triggers search
    heroSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const searchBtn = document.getElementById('hero-search-btn');
        if (searchBtn) searchBtn.click();
      }
    });
  }

  // Featured Talent Card Profile Triggers
  document.querySelectorAll('.fiverr-talent-card, .talent-view-profile-btn').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      if (e.target.closest('a')) return; // Allow native mailto link
      const workerId = trigger.dataset.workerId || 'worker-1';
      if (typeof openBookingModal === 'function') {
        openBookingModal(workerId);
      }
    });
  });

  // =========================================================================
  // Mobile Navigation Drawer
  // =========================================================================
  if (mobileMenuToggle && mobileNavDrawer) {
    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = mobileNavDrawer.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active', isOpen);
      mobileMenuToggle.setAttribute('aria-expanded', isOpen);
    });

    mobileNavDrawer.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // =========================================================================
  // Header Glass Elevation & Back-To-Top Button
  // =========================================================================
  window.addEventListener('scroll', () => {
    if (siteHeader) {
      if (window.scrollY > 20) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // =========================================================================
  // FAQ Accordion
  // =========================================================================
  document.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq-item');
      const isActive = item.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // =========================================================================
  // Toast Notification System
  // =========================================================================
  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="toast-sparkle">✦</span>
      <span class="toast-text">${message}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 300ms ease, transform 300ms ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(12px) scale(0.96)';
      setTimeout(() => toast.remove(), 320);
    }, 4000);
  }

  // Escape Key to close all dialogs
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBookingModal();
      closeLoginModal();
      closeSignupModal();
      closeShortlistDrawer();
      if (mobileNavDrawer) mobileNavDrawer.classList.remove('active');
      if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
    }
  });

  // =========================================================================
  // Full Website Scroll Reveal & Elevation Engine
  // =========================================================================
  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }

  // Header Elevation on Scroll
  window.addEventListener('scroll', () => {
    if (siteHeader) {
      if (window.scrollY > 25) {
        siteHeader.classList.add('header-scrolled');
      } else {
        siteHeader.classList.remove('header-scrolled');
      }
    }
  }, { passive: true });

  // =========================================================================
  // Initial Boot
  // =========================================================================
  updateShortlistUI();
  renderHomeCarousels();
  handleHashRoute();
  initScrollReveal();
});
