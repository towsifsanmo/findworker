/**
 * FindWorker — Unique Editorial Profile Controller
 * Focuses on where the freelancer works, featured projects, skills,
 * and compact side reviews with 1-review-per-device integrity.
 */

(function () {
  'use strict';

  // ── Brand SVG Icons & Call-to-Actions for Work Platforms ─────────────────
  const PLATFORMS_CONFIG = {
    upwork: {
      name: 'Upwork',
      actionText: 'Hire on Upwork',
      defaultBadge: 'Top Rated Plus',
      svg: `<svg viewBox="0 0 24 24" fill="#14A800"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-3.722 0-5.467 2.651-6.02 4.101-1.396-2.179-2.434-4.821-2.73-7.119H6.273v10.364c0 1.956-1.591 3.547-3.547 3.547-.791 0-1.523-.26-2.115-.701l-1.326 2.22c1.01.766 2.235 1.189 3.521 1.189 3.456 0 6.273-2.817 6.273-6.273V7.794c.361 1.83 1.309 4.298 2.671 6.302L9.815 24h3.708l1.455-6.52c1.07.72 2.307 1.16 3.663 1.16 3.456 0 6.273-2.817 6.273-6.273 0-3.457-2.817-6.274-6.273-6.274h-.08z"/></svg>`
    },
    fiverr: {
      name: 'Fiverr',
      actionText: 'Order on Fiverr',
      defaultBadge: 'Pro Verified Seller',
      svg: `<svg viewBox="0 0 24 24" fill="#1DBF73"><circle cx="12" cy="12" r="12"/><path fill="#fff" d="M16.2 8.3c-.4-.3-1-.4-1.7-.4-.8 0-1.4.3-1.8.8v-.6h-2.1v7.6h2.2v-4.1c0-.9.5-1.5 1.3-1.5.2 0 .5 0 .6.1l.5-1.9h-1l2 .5zm-7.6 1.3H7.5v-1h1.1v-1c0-1.4.9-2.1 2.3-2.1.6 0 1.1.1 1.4.2l-.3 1.4c-.2 0-.5-.1-.8-.1-.6 0-.8.3-.8.9v.7h1.6v1.3h-1.6v6.3H8.6V9.6z"/></svg>`
    },
    github: {
      name: 'GitHub',
      actionText: 'Inspect Code',
      defaultBadge: 'Verified Repositories',
      svg: `<svg viewBox="0 0 24 24" fill="#181717"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>`
    },
    linkedin: {
      name: 'LinkedIn',
      actionText: 'Connect on LinkedIn',
      defaultBadge: 'Verified Profile',
      svg: `<svg viewBox="0 0 24 24" fill="#0A66C2"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`
    },
    behance: {
      name: 'Behance',
      actionText: 'View Portfolio',
      defaultBadge: 'Curated Works',
      svg: `<svg viewBox="0 0 24 24" fill="#1769FF"><path d="M22 7h-7v2h7V7zm1.726 10c-.442 1.297-1.646 2.16-3.27 2.16-2.296 0-3.69-1.603-3.69-4.148 0-2.528 1.455-4.225 3.65-4.225 2.193 0 3.42 1.657 3.42 3.978 0 .29-.03.578-.067.755h-4.83c.09 1.134.78 1.782 1.83 1.782.72 0 1.33-.312 1.63-.84l1.327.538zm-4.793-3.23h2.64c-.06-.975-.55-1.57-1.32-1.57-.75 0-1.26.59-1.32 1.57zM8.008 13.72c.81 0 1.46-.425 1.46-1.282 0-.752-.51-1.18-1.35-1.18H4.62v2.462h3.388zm-.24-4.238c.67 0 1.21-.37 1.21-1.07 0-.67-.48-1.02-1.17-1.02H4.62v2.09h3.148zM12 12.38c0 1.39-.75 2.41-1.94 2.82v.04c1.38.35 2.18 1.52 2.18 3.03 0 2.27-1.74 3.73-4.38 3.73H2V4h6.08c2.43 0 3.92 1.4 3.92 3.42 0 1.29-.65 2.3-1.66 2.79v.04c1.08.43 1.66 1.29 1.66 2.13z"/></svg>`
    },
    dribbble: {
      name: 'Dribbble',
      actionText: 'View Showcase',
      defaultBadge: 'Pro Showcase',
      svg: `<svg viewBox="0 0 24 24" fill="#EA4C89"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7.65 6.35c.98 1.09 1.64 2.44 1.87 3.92-1.12-.23-2.61-.41-4.29-.41-.57 0-1.14.02-1.7.07-.15-.36-.31-.73-.48-1.09-.73-1.54-1.61-3.03-2.58-4.32 2.89.28 5.37 1.66 7.18 3.83zM12 4.07c1.88 0 3.61.64 5 1.71-.97 1.28-1.85 2.74-2.58 4.26-.06.12-.11.25-.17.37-2.73-.89-5.74-1.37-8.86-1.37-.58 0-1.15.02-1.71.05C5.11 6.57 8.28 4.07 12 4.07zm-7.93 7.02c.57-.03 1.15-.05 1.74-.05 3.32 0 6.53.51 9.42 1.45-.19.53-.41 1.05-.65 1.56-3.23 1.03-6.41 3.25-8.54 6.22-1.36-1.6-2.18-3.67-2.18-5.93 0-1.17.22-2.28.21-3.25zm4.84 8.78c1.94-2.74 4.88-4.8 7.89-5.78.7 1.94 1.14 4.04 1.28 6.13-1.78 1.14-3.89 1.8-6.18 1.8-1.07 0-2.1-.14-3.08-.41.03-.58.06-1.16.09-1.74zm10.74-1.42c-.15-1.92-.55-3.85-1.18-5.63 1.48.01 2.81.16 3.82.35-.38 2.07-1.35 3.89-2.64 5.28z"/></svg>`
    },
    web: {
      name: 'Personal Studio',
      actionText: 'Visit Website',
      defaultBadge: 'Official Atelier',
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
    }
  };

  // ── Helper Utilities ──────────────────────────────────────────────────────
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast toast-show';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.remove('toast-show');
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  // ── Composite Device Fingerprint Engine (1 Review per Device) ─────────────
  let cachedDeviceId = null;
  const pageLoadTimestamp = Date.now();

  function generateDeviceFingerprint() {
    if (cachedDeviceId) return Promise.resolve(cachedDeviceId);

    const localId = localStorage.getItem('fw_device_token');
    if (localId && localId.length >= 16) {
      cachedDeviceId = localId;
      return Promise.resolve(cachedDeviceId);
    }

    return new Promise((resolve) => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 240;
        canvas.height = 60;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.textBaseline = 'top';
          ctx.font = "14px 'Poppins', Arial";
          ctx.fillStyle = '#504CFF';
          ctx.fillRect(15, 5, 60, 20);
          ctx.fillStyle = '#0F0F0F';
          ctx.fillText('FindWorker_Sig_#984', 4, 17);
        }
        const canvasData = canvas.toDataURL();
        const screenStr = `${screen.width}x${screen.height}x${screen.colorDepth || 24}`;
        const hardwareStr = `${navigator.hardwareConcurrency || 4}_${navigator.language || 'en'}`;

        const rawString = `${canvasData}___${screenStr}___${hardwareStr}`;
        let h1 = 0xdeadbeef;
        let h2 = 0x41c6ce57;
        for (let i = 0; i < rawString.length; i++) {
          const ch = rawString.charCodeAt(i);
          h1 = Math.imul(h1 ^ ch, 2654435761);
          h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);

        const hashPart = 4294967296 * (2097151 & h2) + (h1 >>> 0);
        const deviceId = `fw_dev_${hashPart.toString(36)}_${Date.now().toString(36).slice(-4)}`;

        localStorage.setItem('fw_device_token', deviceId);
        cachedDeviceId = deviceId;
        resolve(deviceId);
      } catch (e) {
        const fallbackId = `fw_dev_fb_${Math.random().toString(36).substring(2, 14)}`;
        localStorage.setItem('fw_device_token', fallbackId);
        cachedDeviceId = fallbackId;
        resolve(fallbackId);
      }
    });
  }

  // ── Main Controller State ────────────────────────────────────────────────
  let currentWorker = null;
  let selectedRating = 5;

  function initProfilePage() {
    // Setup mobile drawer toggle matching Home Page navbar
    setupMobileNav();

    // Determine target worker from URL query ?id=worker-1 or hash
    const urlParams = new URLSearchParams(window.location.search);
    let workerId = urlParams.get('id');

    if (!workerId && window.location.hash) {
      const cleanHash = window.location.hash.replace(/^#/, '');
      if (cleanHash.startsWith('worker-') || cleanHash.startsWith('custom-worker-')) {
        workerId = cleanHash;
      }
    }

    if (!workerId) {
      workerId = 'worker-1';
    }

    if (typeof FINDWORKER_DATA === 'undefined') {
      console.error('FINDWORKER_DATA is not available.');
      showErrorScreen();
      return;
    }

    currentWorker = FINDWORKER_DATA.getWorkerById(workerId);
    if (!currentWorker) {
      showErrorScreen();
      return;
    }

    // Render all elements
    renderFullEditorialProfile(currentWorker);

    // Initialize Device Fingerprint & Check One-Review-Per-Device status
    generateDeviceFingerprint().then((devId) => {
      checkDeviceReviewStatus(currentWorker.id, devId);
    });

    // Setup simplified review form
    setupSimplifiedReviewForm();

    // Setup sidebar tools (share link)
    setupSidebarTools();
  }

  function setupMobileNav() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNavDrawer = document.getElementById('mobile-nav-drawer');

    if (mobileMenuToggle && mobileNavDrawer) {
      mobileMenuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = mobileNavDrawer.classList.contains('active');
        mobileNavDrawer.classList.toggle('active', !isOpen);
        mobileMenuToggle.classList.toggle('active', !isOpen);
        mobileMenuToggle.setAttribute('aria-expanded', String(!isOpen));
      });

      document.addEventListener('click', (e) => {
        if (!mobileNavDrawer.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
          mobileNavDrawer.classList.remove('active');
          mobileMenuToggle.classList.remove('active');
          mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  function showErrorScreen() {
    document.getElementById('profile-loading').style.display = 'none';
    document.getElementById('profile-content').style.display = 'none';
    document.getElementById('profile-error').style.display = 'flex';
  }

  // ── Render Full Editorial Profile ─────────────────────────────────────────
  function renderFullEditorialProfile(w) {
    document.title = `${w.name} — ${w.craftTitle} | FindWorker`;

    // 1. Breadcrumbs
    const bTrade = document.getElementById('breadcrumb-trade');
    const bName = document.getElementById('breadcrumb-name');
    if (bTrade) bTrade.textContent = w.trade;
    if (bName) bName.textContent = w.name;

    // 2. Editorial Hero
    const avatarImg = document.getElementById('profile-avatar');
    if (avatarImg) {
      avatarImg.src = w.image;
      avatarImg.alt = `${w.name} portrait`;
    }

    const badgeEl = document.getElementById('profile-badge');
    if (badgeEl) {
      badgeEl.textContent = w.badge === 'PRO' ? '✦ PRO CRAFTSMAN' : (w.badgeLabel || '✦ FEATURED');
      badgeEl.className = w.badge === 'PRO' ? 'badge-tier-pro' : 'badge-tier-l3';
    }

    const expPill = document.getElementById('profile-experience-pill');
    if (expPill) expPill.textContent = `${w.experienceYears}y Experience`;

    const locPill = document.getElementById('profile-location-pill');
    if (locPill) locPill.textContent = `📍 ${w.location}`;

    const nameEl = document.getElementById('profile-name');
    if (nameEl) nameEl.textContent = w.name;

    const titleEl = document.getElementById('profile-craft-title');
    if (titleEl) titleEl.textContent = w.craftTitle || w.trade;

    const aboutText = document.getElementById('profile-about-text');
    if (aboutText) aboutText.textContent = w.about || w.bio;

    const rateVal = document.getElementById('profile-rate-val');
    if (rateVal) rateVal.textContent = `$${w.hourlyRate}/hr`;

    // 3. Highlighted Section: "Where I Work" Platforms
    renderWhereIWorkPlatforms(w);

    // 4. Featured Projects & Portfolio
    renderProjectsGallery(w);

    // 5. Skills & Capabilities Mosaic
    renderSkillsMosaic(w);

    // 6. Work Experience Timeline
    renderExperienceTimeline(w);

    // 7. Right Column: Dossier & Side Reviews
    renderSidebarDossier(w);
    renderSideReviews(w);

    // Show Content
    document.getElementById('profile-loading').style.display = 'none';
    document.getElementById('profile-content').style.display = 'block';
  }

  // ── Highlighted Section: Where I Work Platforms ───────────────────────────
  function renderWhereIWorkPlatforms(w) {
    const platformsGrid = document.getElementById('profile-platforms-grid');
    if (!platformsGrid) return;

    // Build curated platform links
    let platforms = w.platforms && w.platforms.length > 0 ? [...w.platforms] : [];

    // Ensure prominent platforms are represented
    if (platforms.length === 0) {
      platforms = [
        { name: 'Upwork', url: 'https://www.upwork.com', icon: 'upwork', badge: 'Top Rated Plus' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com', icon: 'linkedin', badge: 'Verified Pro' },
        { name: 'GitHub', url: 'https://github.com', icon: 'github', badge: 'Open Source' },
        { name: 'Personal Studio', url: `https://${w.website || 'findworker.directory'}`, icon: 'web', badge: 'Official Website' }
      ];
    }

    platformsGrid.innerHTML = platforms.map(p => {
      const cfg = PLATFORMS_CONFIG[p.icon] || PLATFORMS_CONFIG.web;
      const actionText = cfg.actionText || 'View Profile';
      const badgeText = p.badge || cfg.defaultBadge;

      return `
        <a href="${escapeHtml(p.url)}" target="_blank" rel="noopener noreferrer" class="unique-platform-card">
          <div class="platform-logo-box">
            ${cfg.svg}
          </div>
          <div class="platform-text-block">
            <div class="platform-brand-name">${escapeHtml(p.name)}</div>
            <span class="platform-badge-tag">✓ ${escapeHtml(badgeText)}</span>
          </div>
          <span class="platform-action-arrow" title="${actionText}">↗</span>
        </a>
      `;
    }).join('');
  }

  // ── Featured Projects & Portfolio Showcase ────────────────────────────────
  function renderProjectsGallery(w) {
    const gallery = document.getElementById('profile-portfolio-grid');
    if (!gallery) return;

    const projects = w.portfolio && w.portfolio.length > 0 ? w.portfolio : [
      {
        title: `${w.trade} Master Showcase`,
        category: w.trade,
        year: '2025',
        image: w.image,
        description: `Bespoke architectural execution completed according to strict specifications and verified delivery milestones.`,
        tags: w.skills.slice(0, 3)
      }
    ];

    gallery.innerHTML = projects.map(p => `
      <article class="unique-project-card">
        <div class="project-visual-stage">
          <img src="${p.image}" alt="${escapeHtml(p.title)}" class="project-cover-image" loading="lazy">
          <span class="project-year-badge">${p.year || '2025'}</span>
        </div>
        <div class="project-info-stage">
          <span class="project-discipline-tag">${escapeHtml(p.category || w.trade)}</span>
          <h3 class="project-headline-title">${escapeHtml(p.title)}</h3>
          <p class="project-narrative-desc">${escapeHtml(p.description)}</p>
          <div class="project-tech-tags">
            ${(p.tags || []).map(t => `<span class="tech-pill">${escapeHtml(t)}</span>`).join('')}
          </div>
        </div>
      </article>
    `).join('');
  }

  // ── Skills & Technical Mastery ────────────────────────────────────────────
  function renderSkillsMosaic(w) {
    const cloud = document.getElementById('profile-skills-cloud');
    if (!cloud) return;

    cloud.innerHTML = w.skills.map(s => `
      <span class="skill-tag-badge">${escapeHtml(s)}</span>
    `).join('');
  }

  // ── Work Experience Timeline ──────────────────────────────────────────────
  function renderExperienceTimeline(w) {
    const flow = document.getElementById('profile-experience-timeline');
    if (!flow) return;

    const experience = w.experience && w.experience.length > 0 ? w.experience : [
      {
        role: `Independent Principal Specialist`,
        company: `${w.name.split(' ')[0]} Practice`,
        period: '2021 — Present',
        description: 'Direct commissions and client engagements executed with 0% platform intermediary commission.'
      },
      {
        role: `Senior ${w.trade} Associate`,
        company: 'Guild Trade Studio',
        period: '2016 — 2021',
        description: 'Led end-to-end delivery of complex architectural and digital specifications.'
      }
    ];

    flow.innerHTML = experience.map(exp => `
      <div class="experience-flow-card">
        <div class="experience-flow-node"></div>
        <div class="experience-flow-header">
          <span class="experience-role-title">${escapeHtml(exp.role)}</span>
          <span class="experience-period-label">${escapeHtml(exp.period)}</span>
        </div>
        <div class="experience-org-name">${escapeHtml(exp.company)}</div>
        <p class="experience-narrative">${escapeHtml(exp.description)}</p>
      </div>
    `).join('');
  }

  // ── Right Column Dossier ──────────────────────────────────────────────────
  function renderSidebarDossier(w) {
    const rateEl = document.getElementById('sidebar-rate');
    const locEl = document.getElementById('sidebar-location');
    const expEl = document.getElementById('sidebar-experience');
    const langEl = document.getElementById('sidebar-language');

    if (rateEl) rateEl.textContent = `$${w.hourlyRate} / hr`;
    if (locEl) locEl.textContent = w.location;
    if (expEl) expEl.textContent = `${w.experienceYears} Years`;
    if (langEl) langEl.textContent = w.language || 'English';
  }

  // ── Compact Side Reviews & Ratings System ─────────────────────────────────
  function renderSideReviews(w) {
    const reviews = FINDWORKER_DATA.getWorkerReviews(w.id);
    const count = reviews.length;

    let avgScore = w.rating;
    if (count > 0) {
      const sum = reviews.reduce((acc, r) => acc + Number(r.rating || 5), 0);
      avgScore = (sum / count).toFixed(2);
    }

    const heroRatingVal = document.getElementById('profile-rating-val');
    const reviewsCountChip = document.getElementById('profile-reviews-count-chip');
    const sideScore = document.getElementById('side-rating-score');
    const sideCount = document.getElementById('side-reviews-count');

    if (heroRatingVal) heroRatingVal.textContent = avgScore;
    if (reviewsCountChip) reviewsCountChip.textContent = `(${count} reviews)`;
    if (sideScore) sideScore.textContent = avgScore;
    if (sideCount) sideCount.textContent = count;

    // Compact Feed
    const feed = document.getElementById('reviews-feed-list');
    if (feed) {
      if (reviews.length === 0) {
        feed.innerHTML = `
          <div style="font-size: 0.82rem; color: var(--color-secondary-muted); text-align: center; padding: 12px 0;">
            No reviews yet. Be the first client to leave feedback.
          </div>
        `;
      } else {
        feed.innerHTML = reviews.map(r => `
          <div class="side-review-item">
            <div class="side-review-top">
              <span class="side-review-author">${escapeHtml(r.author || 'Verified Client')}</span>
              <span class="side-review-stars">${'★'.repeat(Math.round(r.rating))}</span>
            </div>
            <p class="side-review-msg">${escapeHtml(r.comment)}</p>
            <span class="side-review-date">${escapeHtml(r.date || 'Recent')}</span>
          </div>
        `).join('');
      }
    }
  }

  // ── Device Integrity & One-Review-Per-Device Check ─────────────────────────
  function checkDeviceReviewStatus(workerId, deviceId) {
    const existing = FINDWORKER_DATA.getDeviceReviewForWorker(workerId, deviceId);
    const formState = document.getElementById('review-form-state');
    const alreadyState = document.getElementById('already-reviewed-state');
    const existingDisplay = document.getElementById('user-existing-review-display');

    if (existing) {
      if (formState) formState.style.display = 'none';
      if (alreadyState) alreadyState.style.display = 'block';

      if (existingDisplay) {
        existingDisplay.innerHTML = `
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 0.84rem; font-weight: 700; color: #0F0F0F;">${escapeHtml(existing.author)}</span>
            <span style="color: #D97706; font-size: 0.85rem;">${'★'.repeat(Math.round(existing.rating))}</span>
          </div>
          <p style="font-size: 0.8rem; color: #4B5563; margin: 0; line-height: 1.45;">${escapeHtml(existing.comment)}</p>
        `;
      }
    } else {
      if (formState) formState.style.display = 'block';
      if (alreadyState) alreadyState.style.display = 'none';
    }
  }

  // ── Simplified Client Review Form (Rating + Review Message + Name) ─────────
  function setupSimplifiedReviewForm() {
    const form = document.getElementById('public-review-form');
    const starPickerGroup = document.getElementById('star-picker-group');
    const starLabel = document.getElementById('star-picker-label');
    const alertBox = document.getElementById('review-validation-alert');

    // Star selector interaction
    if (starPickerGroup) {
      const starBtns = starPickerGroup.querySelectorAll('.compact-star-btn');
      const starDescriptions = {
        1: '1★ Poor',
        2: '2★ Below Average',
        3: '3★ Good',
        4: '4★ Very Good',
        5: '5★ Exceptional'
      };

      starBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          selectedRating = parseInt(btn.dataset.val, 10);
          updateStarUI(selectedRating);
        });

        btn.addEventListener('mouseenter', () => {
          const hoverVal = parseInt(btn.dataset.val, 10);
          starBtns.forEach(b => {
            const bVal = parseInt(b.dataset.val, 10);
            b.classList.toggle('hover', bVal <= hoverVal);
          });
          if (starLabel) starLabel.textContent = starDescriptions[hoverVal];
        });

        btn.addEventListener('mouseleave', () => {
          starBtns.forEach(b => b.classList.remove('hover'));
          if (starLabel) starLabel.textContent = starDescriptions[selectedRating];
        });
      });

      function updateStarUI(val) {
        starBtns.forEach(b => {
          const bVal = parseInt(b.dataset.val, 10);
          b.classList.toggle('active', bVal <= val);
        });
        if (starLabel) starLabel.textContent = starDescriptions[val];
      }
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        // 1. Anti-Bot Honeypot
        const hpVal = document.getElementById('hp_anti_bot_check')?.value || '';
        if (hpVal.trim() !== '') {
          showToast('⚠️ Submission rejected.');
          return;
        }

        // 2. Submission Timing Check (>2s to prevent rapid script spam)
        const secondsOnPage = (Date.now() - pageLoadTimestamp) / 1000;
        if (secondsOnPage < 2.0) {
          showFormAlert('⚠️ Please take a moment to review before submitting.');
          return;
        }

        // 3. Simple fields: Client Name + Review Message
        const author = document.getElementById('review-author-name')?.value?.trim() || '';
        const comment = document.getElementById('review-post-comment')?.value?.trim() || '';

        if (!author) {
          showFormAlert('Please enter your name.');
          return;
        }
        if (comment.length < 20) {
          showFormAlert('Review message must be at least 20 characters.');
          return;
        }

        clearFormAlert();

        // 4. Submit with device token
        generateDeviceFingerprint().then((devId) => {
          const result = FINDWORKER_DATA.addWorkerReview(currentWorker.id, {
            author,
            title: 'Client Collaboration',
            comment,
            rating: selectedRating
          }, devId);

          if (!result.success) {
            showFormAlert(result.message || 'Error submitting review.');
            return;
          }

          showToast('✓ Thank you! Your review has been published.');
          form.reset();

          // Refresh side reviews and transition to "Already Reviewed" state
          renderSideReviews(currentWorker);
          checkDeviceReviewStatus(currentWorker.id, devId);
        });
      });
    }

    function showFormAlert(msg) {
      if (alertBox) {
        alertBox.textContent = msg;
        alertBox.style.display = 'block';
      }
    }

    function clearFormAlert() {
      if (alertBox) {
        alertBox.textContent = '';
        alertBox.style.display = 'none';
      }
    }
  }

  // ── Sidebar Share Tool ────────────────────────────────────────────────────
  function setupSidebarTools() {
    const shareBtn = document.getElementById('sidebar-share-btn');
    if (shareBtn) {
      shareBtn.addEventListener('click', () => {
        const url = window.location.href;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(() => {
            showToast('✓ Profile link copied to clipboard!');
          }).catch(() => {
            fallbackCopy(url);
          });
        } else {
          fallbackCopy(url);
        }
      });
    }

    function fallbackCopy(text) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        showToast('✓ Profile link copied to clipboard!');
      } catch (err) {
        showToast('Profile URL: ' + text);
      }
      ta.remove();
    }

    const footerBackToTop = document.getElementById('footer-back-to-top');
    if (footerBackToTop) {
      footerBackToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // ── Bootstrap on DOM Ready ────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProfilePage);
  } else {
    initProfilePage();
  }

})();
