/**
 * FindWorker — Interactive Application Engine
 * Color Palette:
 *   - Primary:    #D6441E
 *   - Secondary:  #1B1A17
 *   - Foreground: #123A2C
 *   - Background: #F4EFE6
 * Fonts: Instrument Sans & Fraunces
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // Master Directory Dataset
  // =========================================================================
  const workersData = [
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
      bio: 'Specializing in traditional mortise-and-tenon joinery, custom architectural cabinetry, walnut credenzas, and heritage wood preservation.',
      skills: ['Custom Cabinetry', 'Dovetail Joinery', 'Heritage Wood', 'Timber Framing'],
      guarantee: 'Escrow Protected • 5-Year Craft Guarantee'
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
      bio: 'Certified master electrician handling architectural lighting design, 200A panel conversions, EV wallboxes, and residential smart automation.',
      skills: ['Panel Upgrades', 'EV Wallboxes', 'Architectural Lighting', 'Fault Diagnostics'],
      guarantee: 'Licensed & $2M Insured • Full Compliance'
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
      bio: 'Expert in European copper pipework, brass fittings, luxury bathroom rough-ins, tankless water heating systems, and hydronic radiant floors.',
      skills: ['Copper Pipework', 'Hydronic Radiant', 'Luxury Fixtures', 'Gas Lines'],
      guarantee: 'Master Guild Certified • Leak-Free Seal'
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
      bio: 'Restoring historic lime-mortar masonry, flagstone terraces, custom stone fireplaces, and structural retaining walls with artisanal accuracy.',
      skills: ['Tuckpointing', 'Dry-Stack Stone', 'Fireplace Surrounds', 'Flagstone'],
      guarantee: 'Structural Warranty • Guild Member'
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
      bio: 'Venetian marmorino plaster, zero-VOC mineral paints, fine spray cabinetry refinishing, and meticulous historic color matching.',
      skills: ['Venetian Plaster', 'Cabinet Enameling', 'Limewash', 'Dustless Prep'],
      guarantee: 'Zero-VOC Certified • Dustless Sanding'
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
      bio: 'Native botanical garden installations, natural wood pergolas, permeable stone paths, rainwater bioswales, and artistic tree preservation.',
      skills: ['Native Planting', 'Hardscape Stone', 'Timber Pergolas', 'Smart Drip'],
      guarantee: 'Sustainable Plant Guarantee (1 Yr)'
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
      bio: 'Hand-forged architectural railings, internal steel-and-glass Crittall-style doors, brass hardware patination, and structural framing.',
      skills: ['TIG Welding', 'Steel Partitions', 'Brass Hardware', 'Patina Finishes'],
      guarantee: 'Structural Integrity Guaranteed'
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
      bio: 'High-efficiency heat pump retrofits, whole-home HEPA air exchangers, acoustic vibration damping, and multi-zone climate calibration.',
      skills: ['Geothermal Pumps', 'HEPA Filtration', 'Zoned Ducts', 'Energy Audits'],
      guarantee: 'Energy Efficiency Guarantee'
    }
  ];

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
  let specCarouselOffset = 0;

  // =========================================================================
  // DOM References
  // =========================================================================
  const homeView = document.getElementById('home-view');
  const freelancersView = document.getElementById('freelancers-view');
  const navLinkFreelancers = document.getElementById('nav-link-freelancers');
  const brandLogoLink = document.getElementById('brand-logo-link');

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
  const heroSearchBtn = document.getElementById('hero-search-btn');

  // Modals & Drawers
  const shortlistTrigger = document.getElementById('shortlist-trigger');
  const shortlistCountEl = document.getElementById('shortlist-count');
  const shortlistDrawer = document.getElementById('shortlist-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const drawerList = document.getElementById('drawer-list');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const clearShortlistBtn = document.getElementById('clear-shortlist-btn');

  const bookingModal = document.getElementById('booking-modal');
  const bookingModalClose = document.getElementById('booking-modal-close');
  const bookingForm = document.getElementById('booking-form');
  const bookingAvatar = document.getElementById('booking-avatar');
  const bookingWorkerName = document.getElementById('booking-worker-name');
  const bookingWorkerTrade = document.getElementById('booking-worker-trade');
  const bookingWorkerRate = document.getElementById('booking-worker-rate');
  const bookingHoursInput = document.getElementById('booking-hours');
  const calcRatePerHour = document.getElementById('calc-rate-per-hour');
  const calcHoursCount = document.getElementById('calc-hours-count');
  const calcSubtotal = document.getElementById('calc-subtotal');
  const calcTotal = document.getElementById('calc-total');

  const loginModal = document.getElementById('login-modal');
  const loginModalClose = document.getElementById('login-modal-close');
  const loginForm = document.getElementById('login-form');

  const signupModal = document.getElementById('signup-modal');
  const signupModalClose = document.getElementById('signup-modal-close');
  const signupForm = document.getElementById('signup-form');

  const toastContainer = document.getElementById('toast-container');

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
  // Render Top Freelancers & Open Opportunities Grids (Home View)
  // =========================================================================
  function renderHomeCarousels() {
    // Top Freelancers (4 items)
    if (topFreelancersContainer) {
      const topWorkers = workersData.slice(topCarouselOffset, topCarouselOffset + 4);
      topFreelancersContainer.innerHTML = topWorkers.map(w => renderGridCardHtml(w)).join('');
    }

    // Specializations / Highest Rated (4 items shifted)
    if (specializationsContainer) {
      const specWorkers = workersData.slice(specCarouselOffset, specCarouselOffset + 4);
      specializationsContainer.innerHTML = specWorkers.map(w => renderGridCardHtml(w)).join('');
    }

    attachCardEventListeners();
  }

  function renderGridCardHtml(w) {
    const isSaved = savedWorkerIds.includes(w.id);
    let badgeHtml = '';
    if (w.badge === 'PRO') {
      badgeHtml = `<span class="badge-tier-pro">★ PRO Seller</span>`;
    } else if (w.badge === 'L3') {
      badgeHtml = `<span class="badge-tier-l3">✦✦✦ Level 3</span>`;
    } else if (w.badge === 'L2') {
      badgeHtml = `<span class="badge-tier-l2">✦✦ Level 2</span>`;
    } else {
      badgeHtml = `<span class="badge-tier-l2">Top Rated</span>`;
    }

    return `
      <div class="freelancer-grid-card" data-id="${w.id}">
        <div class="card-top-action-bar">
          ${badgeHtml}
          <button class="bookmark-heart-btn ${isSaved ? 'active' : ''}" data-id="${w.id}" title="${isSaved ? 'Saved' : 'Save freelancer'}" style="position: static;">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        </div>

        <div class="card-avatar-center">
          <div class="avatar-round-frame">
            <img src="${w.image}" alt="${w.name}" loading="lazy">
          </div>
        </div>

        <div class="card-center-details">
          <h4 class="card-worker-name">${w.name}</h4>
          <span class="card-worker-craft">${w.trade} • ${w.location.split('&')[0]}</span>
          <div class="card-rating-line">
            <span style="color: var(--color-primary);">★</span>
            <span>${w.rating.toFixed(1)}</span>
            <span style="color: var(--color-secondary-muted); font-weight: 400;">(${w.reviewsCount} reviews)</span>
          </div>
        </div>

        <div class="card-skills-row">
          ${w.skills.slice(0, 3).map(s => `<span class="skill-chip">${s}</span>`).join('')}
        </div>

        <div class="card-bottom-footer">
          <div>
            <div class="card-rate-label">Hourly Rate</div>
            <div class="card-rate-val">$${w.hourlyRate}<span style="font-size: 0.76rem; font-family: var(--font-sans); font-weight: 500; color: var(--color-secondary-muted);">/hr</span></div>
          </div>
          <button class="btn btn-outline btn-sm card-profile-btn" data-id="${w.id}">
            <span>Profile</span>
            <span>↗</span>
          </button>
        </div>
      </div>
    `;
  }

  // Carousel Next / Prev Click Handlers
  if (topCarouselNext) {
    topCarouselNext.addEventListener('click', () => {
      topCarouselOffset = (topCarouselOffset + 2) % (workersData.length - 2);
      renderHomeCarousels();
    });
  }
  if (topCarouselPrev) {
    topCarouselPrev.addEventListener('click', () => {
      topCarouselOffset = Math.max(0, topCarouselOffset - 2);
      renderHomeCarousels();
    });
  }
  if (specCarouselNext) {
    specCarouselNext.addEventListener('click', () => {
      specCarouselOffset = (specCarouselOffset + 2) % (workersData.length - 2);
      renderHomeCarousels();
    });
  }
  if (specCarouselPrev) {
    specCarouselPrev.addEventListener('click', () => {
      specCarouselOffset = Math.max(0, specCarouselOffset - 2);
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
                        worker.bio.toLowerCase().includes(q);
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
      directoryCountEl.innerHTML = `Showing <strong>${totalItems === 0 ? 0 : startIndex + 1}-${endIndex}</strong> of <strong>${totalItems}</strong> results`;
    }

    if (pageItems.length === 0) {
      directoryCardsList.innerHTML = `
        <div style="background: var(--color-background-pure); border: 1.5px dashed var(--color-border); border-radius: var(--radius-xl); padding: 56px 24px; text-align: center;">
          <div style="font-size: 2.2rem; color: var(--color-primary); margin-bottom: 10px;">✦</div>
          <h3 style="font-family: var(--font-display); font-size: 1.5rem; margin-bottom: 6px;">No Freelancers Match Your Filter Criteria</h3>
          <p style="color: var(--color-secondary-muted); max-width: 440px; margin: 0 auto 20px;">
            Try loosening your price slider or clearing specific badge and skill filters.
          </p>
          <button class="btn btn-primary btn-sm" id="empty-reset-btn">Reset All Filters</button>
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
        badgeHtml = `<span class="badge-tier-pro">★ Pro Seller</span>`;
      } else if (w.badge === 'L3') {
        badgeHtml = `<span class="badge-tier-l3">Level 3 Seller</span>`;
      } else if (w.badge === 'L2') {
        badgeHtml = `<span class="badge-tier-l2">Level 2 Seller</span>`;
      } else {
        badgeHtml = `<span class="badge-tier-l2">Top Rated</span>`;
      }

      return `
        <article class="freelancer-row-card" data-id="${w.id}">
          <button class="bookmark-heart-btn ${isSaved ? 'active' : ''}" data-id="${w.id}" title="${isSaved ? 'Saved' : 'Save freelancer'}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>

          <div class="freelancer-avatar-wrap">
            <img src="${w.image}" alt="${w.name}" class="freelancer-avatar-img" loading="lazy">
            <span class="online-dot-badge" title="Active & Ready to Hire"></span>
          </div>

          <div class="freelancer-main-info">
            <div class="freelancer-header-line">
              <div class="freelancer-name-title">
                <h3 class="freelancer-name">${w.name}</h3>
                ${badgeHtml}
                <span class="freelancer-specialty">• ${w.trade}</span>
              </div>
            </div>

            <div class="freelancer-meta-row">
              <span>📍 ${w.location}</span>
              <span>•</span>
              <div class="freelancer-rating-box">
                <span class="star">★</span>
                <span>${w.rating.toFixed(1)}</span>
                <span style="font-weight: 400; color: var(--color-secondary-muted);">(${w.reviewsCount} reviews)</span>
              </div>
              <span>•</span>
              <span>${w.experienceYears} yrs experience</span>
              <span>•</span>
              <span style="color: var(--color-foreground); font-weight: 600;">✓ ${w.availability}</span>
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

            <button class="btn btn-primary btn-sm card-profile-btn" data-id="${w.id}" style="width: 100%;">
              <span>Profile</span>
              <span>↗</span>
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
      <button class="page-btn" id="prev-page-btn" ${activePage === 1 ? 'disabled' : ''}>←</button>
    `;

    for (let i = 1; i <= totalPages; i++) {
      html += `
        <button class="page-btn ${i === activePage ? 'active' : ''}" data-page="${i}">${i}</button>
      `;
    }

    html += `
      <button class="page-btn" id="next-page-btn" ${activePage === totalPages ? 'disabled' : ''}>Next →</button>
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
        <div style="text-align: center; padding: 48px 16px; color: var(--color-secondary-muted);">
          <div style="font-size: 2rem; color: var(--color-primary); margin-bottom: 8px;">✦</div>
          <p style="font-weight: 700; color: var(--color-secondary); margin-bottom: 4px;">Your shortlist is empty</p>
          <p style="font-size: 0.88rem;">Click the bookmark icon on any craftsman card to save them here for quick comparison.</p>
        </div>
      `;
    } else {
      drawerList.innerHTML = saved.map(w => `
        <div style="display: flex; gap: 14px; background: var(--color-background-card); padding: 14px; border-radius: 14px; border: 1px solid var(--color-border); align-items: center;">
          <img src="${w.image}" alt="${w.name}" style="width: 54px; height: 54px; border-radius: 12px; object-fit: cover; border: 1.5px solid var(--color-primary);">
          <div style="flex-grow: 1;">
            <h4 style="font-size: 0.98rem; font-weight: 700; color: var(--color-secondary);">${w.name}</h4>
            <div style="font-size: 0.8rem; color: var(--color-primary); font-weight: 600;">${w.trade} • $${w.hourlyRate}/hr</div>
            <div style="font-size: 0.76rem; color: var(--color-secondary-muted);">${w.location.split('&')[0]}</div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <button class="btn btn-primary btn-sm drawer-book-btn" data-id="${w.id}" style="padding: 6px 12px; font-size: 0.78rem;">Book</button>
            <button class="btn btn-outline btn-sm drawer-remove-btn" data-id="${w.id}" style="padding: 4px 8px; font-size: 0.74rem;">Remove</button>
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
    drawerBackdrop.classList.add('active');
  }

  function closeShortlistDrawer() {
    drawerBackdrop.classList.remove('active');
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
  // Booking Modal & Price Calculator
  // =========================================================================
  function openBookingModal(workerId) {
    const worker = workersData.find(w => w.id === workerId);
    if (!worker) return;
    activeBookingWorker = worker;

    bookingAvatar.src = worker.image;
    bookingWorkerName.textContent = worker.name;
    bookingWorkerTrade.textContent = `${worker.craftTitle} • ★ ${worker.rating.toFixed(2)}`;
    bookingWorkerRate.textContent = `$${worker.hourlyRate}/hour`;

    const modalBadge = document.getElementById('booking-modal-badge');
    if (modalBadge) {
      modalBadge.textContent = worker.badge;
    }

    if (calcRatePerHour) calcRatePerHour.textContent = `$${worker.hourlyRate}`;
    updateBookingCalculation();

    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeBookingModal() {
    bookingModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateBookingCalculation() {
    if (!activeBookingWorker) return;
    const hours = parseInt(bookingHoursInput.value, 10) || 4;
    const rate = activeBookingWorker.hourlyRate;
    const subtotal = hours * rate;
    const platformFee = 15;
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
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const totalAmount = calcTotal ? calcTotal.textContent : '';
      closeBookingModal();
      showToast(`✓ Booking Request Sent to ${activeBookingWorker.name}! Protected by Escrow (${totalAmount})`);
      bookingForm.reset();
    });
  }

  // =========================================================================
  // Log In and Sign Up Modals
  // =========================================================================
  function openLoginModal() {
    loginModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeLoginModal() {
    loginModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openSignupModal() {
    signupModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeSignupModal() {
    signupModal.classList.remove('active');
    document.body.style.overflow = '';
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
      closeSignupModal();
      showToast('✓ Registration complete! Welcome to the FindWorker network.');
      signupForm.reset();
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
      showToast('Switched to Freelancers Directory');
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
      <span style="color: var(--color-primary); font-size: 1.15rem;">✦</span>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 300ms ease, transform 300ms ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 320);
    }, 3800);
  }

  // Escape Key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBookingModal();
      closeLoginModal();
      closeSignupModal();
      closeShortlistDrawer();
    }
  });

  // =========================================================================
  // Initial Boot
  // =========================================================================
  updateShortlistUI();
  renderHomeCarousels();
  handleHashRoute();
});
