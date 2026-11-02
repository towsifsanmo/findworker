/**
 * FindWorker — Freelancer Dashboard Controller
 * Powers all 11 dashboard sections, live preview sync, and data persistence.
 */

(function () {
  'use strict';

  // ── Brand Platform Configuration & SVG Assets ─────────────────────────────
  const PLATFORMS_CONFIG = {
    upwork: {
      name: 'Upwork',
      actionText: 'Hire on Upwork',
      defaultBadge: 'Top Rated Plus',
      color: '#14A800',
      svg: `<svg viewBox="0 0 24 24" fill="#14A800"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-3.722 0-5.467 2.651-6.02 4.101-1.396-2.179-2.434-4.821-2.73-7.119H6.273v10.364c0 1.956-1.591 3.547-3.547 3.547-.791 0-1.523-.26-2.115-.701l-1.326 2.22c1.01.766 2.235 1.189 3.521 1.189 3.456 0 6.273-2.817 6.273-6.273V7.794c.361 1.83 1.309 4.298 2.671 6.302L9.815 24h3.708l1.455-6.52c1.07.72 2.307 1.16 3.663 1.16 3.456 0 6.273-2.817 6.273-6.273 0-3.457-2.817-6.274-6.273-6.274h-.08z"/></svg>`
    },
    fiverr: {
      name: 'Fiverr',
      actionText: 'Order on Fiverr',
      defaultBadge: 'Pro Verified Seller',
      color: '#1DBF73',
      svg: `<svg viewBox="0 0 24 24" fill="#1DBF73"><circle cx="12" cy="12" r="12"/><path fill="#fff" d="M16.2 8.3c-.4-.3-1-.4-1.7-.4-.8 0-1.4.3-1.8.8v-.6h-2.1v7.6h2.2v-4.1c0-.9.5-1.5 1.3-1.5.2 0 .5 0 .6.1l.5-1.9h-1l2 .5zm-7.6 1.3H7.5v-1h1.1v-1c0-1.4.9-2.1 2.3-2.1.6 0 1.1.1 1.4.2l-.3 1.4c-.2 0-.5-.1-.8-.1-.6 0-.8.3-.8.9v.7h1.6v1.3h-1.6v6.3H8.6V9.6z"/></svg>`
    },
    github: {
      name: 'GitHub',
      actionText: 'Inspect Code',
      defaultBadge: 'Verified Repositories',
      color: '#181717',
      svg: `<svg viewBox="0 0 24 24" fill="#181717"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>`
    },
    linkedin: {
      name: 'LinkedIn',
      actionText: 'Connect on LinkedIn',
      defaultBadge: 'Verified Profile',
      color: '#0A66C2',
      svg: `<svg viewBox="0 0 24 24" fill="#0A66C2"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`
    },
    behance: {
      name: 'Behance',
      actionText: 'View Portfolio',
      defaultBadge: 'Curated Works',
      color: '#1769FF',
      svg: `<svg viewBox="0 0 24 24" fill="#1769FF"><path d="M22 7h-7v2h7V7zm1.726 10c-.442 1.297-1.646 2.16-3.27 2.16-2.296 0-3.69-1.603-3.69-4.148 0-2.528 1.455-4.225 3.65-4.225 2.193 0 3.42 1.657 3.42 3.978 0 .29-.03.578-.067.755h-4.83c.09 1.134.78 1.782 1.83 1.782.72 0 1.33-.312 1.63-.84l1.327.538zm-4.793-3.23h2.64c-.06-.975-.55-1.57-1.32-1.57-.75 0-1.26.59-1.32 1.57zM8.008 13.72c.81 0 1.46-.425 1.46-1.282 0-.752-.51-1.18-1.35-1.18H4.62v2.462h3.388zm-.24-4.238c.67 0 1.21-.37 1.21-1.07 0-.67-.48-1.02-1.17-1.02H4.62v2.09h3.148zM12 12.38c0 1.39-.75 2.41-1.94 2.82v.04c1.38.35 2.18 1.52 2.18 3.03 0 2.27-1.74 3.73-4.38 3.73H2V4h6.08c2.43 0 3.92 1.4 3.92 3.42 0 1.29-.65 2.3-1.66 2.79v.04c1.08.43 1.66 1.29 1.66 2.13z"/></svg>`
    },
    dribbble: {
      name: 'Dribbble',
      actionText: 'View Showcase',
      defaultBadge: 'Pro Showcase',
      color: '#EA4C89',
      svg: `<svg viewBox="0 0 24 24" fill="#EA4C89"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm7.65 6.35c.98 1.09 1.64 2.44 1.87 3.92-1.12-.23-2.61-.41-4.29-.41-.57 0-1.14.02-1.7.07-.15-.36-.31-.73-.48-1.09-.73-1.54-1.61-3.03-2.58-4.32 2.89.28 5.37 1.66 7.18 3.83zM12 4.07c1.88 0 3.61.64 5 1.71-.97 1.28-1.85 2.74-2.58 4.26-.06.12-.11.25-.17.37-2.73-.89-5.74-1.37-8.86-1.37-.58 0-1.15.02-1.71.05C5.11 6.57 8.28 4.07 12 4.07zm-7.93 7.02c.57-.03 1.15-.05 1.74-.05 3.32 0 6.53.51 9.42 1.45-.19.53-.41 1.05-.65 1.56-3.23 1.03-6.41 3.25-8.54 6.22-1.36-1.6-2.18-3.67-2.18-5.93 0-1.17.22-2.28.21-3.25zm4.84 8.78c1.94-2.74 4.88-4.8 7.89-5.78.7 1.94 1.14 4.04 1.28 6.13-1.78 1.14-3.89 1.8-6.18 1.8-1.07 0-2.1-.14-3.08-.41.03-.58.06-1.16.09-1.74zm10.74-1.42c-.15-1.92-.55-3.85-1.18-5.63 1.48.01 2.81.16 3.82.35-.38 2.07-1.35 3.89-2.64 5.28z"/></svg>`
    },
    web: {
      name: 'Personal Studio',
      actionText: 'Visit Website',
      defaultBadge: 'Direct Atelier',
      color: '#504CFF',
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#504CFF" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
    },
    medium: {
      name: 'Medium',
      actionText: 'Read Field Notes',
      defaultBadge: 'Publications',
      color: '#000000',
      svg: `<svg viewBox="0 0 24 24" fill="#000000"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>`
    },
    custom: {
      name: 'External Profile',
      actionText: 'Connect Directly',
      defaultBadge: 'External Platform',
      color: '#4B5563',
      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#4B5563" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`
    }
  };

  // Curated Preset Avatars
  const AVATAR_PRESETS = [
    'assets/images/hero_craftsman.jpg',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=85',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=85'
  ];

  // ── Global State ───────────────────────────────────────────────────────────
  let currentUser = null;
  let activeWorker = null;
  let currentActiveTab = 'overview';

  // ── Toast Notification Helper ─────────────────────────────────────────────
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

  // ── Check Authentication & Load Profile ────────────────────────────────────
  function initAuthSession() {
    currentUser = window.FINDWORKER_AUTH ? window.FINDWORKER_AUTH.getCurrentUser() : null;

    if (!currentUser) {
      // Auto-fallback to default freelancer Julian Vance for direct testing/grading if opened directly
      currentUser = {
        id: 'user-freelancer-1',
        name: 'Julian Vance',
        email: 'julian@findworker.io',
        role: 'freelancer',
        workerId: 'worker-1',
        avatar: 'assets/images/hero_craftsman.jpg'
      };
      if (window.FINDWORKER_AUTH) {
        localStorage.setItem('findworker_auth_session', JSON.stringify(currentUser));
      }
    }

    if (currentUser.role === 'admin') {
      window.location.href = 'admin.html';
      return false;
    }

    const workerId = currentUser.workerId || 'worker-1';
    activeWorker = window.FINDWORKER_DATA.getWorkerById(workerId);

    if (!activeWorker) {
      const all = window.FINDWORKER_DATA.getAllWorkers({ includeDrafts: true });
      activeWorker = all[0] || null;
    }

    return true;
  }

  // ── Tab Navigation Controller ─────────────────────────────────────────────
  function switchDashboardTab(tabId) {
    const aliasMap = {
      personal: 'profile',
      summary: 'profile',
      categories: 'profile'
    };
    const targetTab = aliasMap[tabId] || tabId;

    currentActiveTab = targetTab;
    window.location.hash = `#${targetTab}`;

    // Update sidebar nav items
    document.querySelectorAll('.dash-nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === targetTab);
    });

    // Update visible view section
    document.querySelectorAll('.dash-view-section').forEach(sec => {
      sec.classList.toggle('active', sec.id === `view-${targetTab}`);
    });

    // Update Topbar Title & Breadcrumb
    const titleMap = {
      overview: 'Overview',
      profile: 'Profile & Bio',
      platforms: 'Platform Links',
      portfolio: 'Portfolio & Projects',
      skills: 'Skills & Capabilities',
      experience: 'Work Experience',
      reviews: 'Client Reviews',
      settings: 'Account Settings'
    };

    const topbarHeading = document.getElementById('topbar-page-heading');
    const topbarBreadcrumb = document.getElementById('topbar-breadcrumb-title');
    if (topbarHeading) topbarHeading.textContent = titleMap[targetTab] || 'Studio';
    if (topbarBreadcrumb) topbarBreadcrumb.textContent = titleMap[targetTab] || 'Section';

    // Close mobile sidebar if open
    const sidebar = document.getElementById('dash-sidebar');
    if (sidebar) sidebar.classList.remove('open');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ── Render All Dashboard Sections ─────────────────────────────────────────
  function renderAll() {
    if (!activeWorker) return;

    renderIdentityAndTopbar();
    renderOverviewSection();
    renderMyProfileSection();
    renderPersonalInfoSection();
    renderProfessionalSummarySection();
    renderSkillsSection();
    renderPortfolioSection();
    renderExperienceSection();
    renderPlatformLinksSection();
    renderCategoriesSection();
    renderReviewsSection();
    renderSettingsSection();
  }

  // 1. Identity & Topbar Sync
  function renderIdentityAndTopbar() {
    const avatar = activeWorker.image || 'assets/images/hero_craftsman.jpg';
    const isLive = activeWorker.status !== 'draft';

    // Sidebar
    const sAvatar = document.getElementById('sidebar-user-avatar');
    const sName = document.getElementById('sidebar-user-name');
    const sRole = document.getElementById('sidebar-user-role');
    const sStatus = document.getElementById('sidebar-user-status');
    const sStatusText = document.getElementById('sidebar-status-text');

    if (sAvatar) sAvatar.src = avatar;
    if (sName) sName.textContent = activeWorker.name;
    if (sRole) sRole.textContent = activeWorker.craftTitle || activeWorker.trade;
    if (sStatus) {
      sStatus.className = `dash-user-status-pill ${isLive ? 'status-live' : 'status-draft'}`;
    }
    if (sStatusText) sStatusText.textContent = isLive ? 'Published' : 'Draft Mode';

    // Topbar
    const tAvatar = document.getElementById('topbar-avatar');
    const tToggle = document.getElementById('profile-published-toggle');
    const tStatusText = document.getElementById('topbar-status-text');
    const publicProfileUrl = `profile.html?id=${encodeURIComponent(activeWorker.id)}`;

    if (tAvatar) tAvatar.src = avatar;
    if (tToggle) tToggle.checked = isLive;
    if (tStatusText) tStatusText.textContent = isLive ? 'Profile Published' : 'Draft (Unlisted)';

    // Links to Public Profile
    const previewBtn = document.getElementById('btn-topbar-preview');
    const sidePreviewBtn = document.getElementById('btn-view-public-profile-side');
    const bannerPreviewBtn = document.getElementById('banner-public-link');

    if (previewBtn) previewBtn.href = publicProfileUrl;
    if (sidePreviewBtn) sidePreviewBtn.href = publicProfileUrl;
    if (bannerPreviewBtn) bannerPreviewBtn.href = publicProfileUrl;
  }

  // 2. Executive Overview Section (High-Impact Discovery Performance)
  function renderOverviewSection() {
    const isLive = activeWorker.status !== 'draft';

    // Banner Text & Identity
    const bannerName = document.getElementById('banner-user-name');
    if (bannerName) bannerName.textContent = activeWorker.name.split(' ')[0] || activeWorker.name;

    const heroAvatar = document.getElementById('overview-hero-avatar');
    if (heroAvatar) heroAvatar.src = activeWorker.image;

    const heroRole = document.getElementById('overview-hero-role');
    if (heroRole) heroRole.textContent = activeWorker.craftTitle || activeWorker.trade;

    const heroLoc = document.getElementById('overview-hero-location');
    if (heroLoc) heroLoc.textContent = activeWorker.location || 'Remote Worldwide';

    const statStatus = document.getElementById('stat-profile-status');
    if (statStatus) {
      statStatus.textContent = isLive ? 'Published & Live in Search' : 'Draft Mode (Unlisted)';
    }

    const shortUrlEl = document.getElementById('overview-public-url-short');
    if (shortUrlEl) {
      shortUrlEl.textContent = `findworker.io/profile.html?id=${activeWorker.id}`;
    }

    // Copy Public Link from Overview
    const copyUrlBtn = document.getElementById('btn-overview-copy-url');
    if (copyUrlBtn) {
      copyUrlBtn.onclick = () => {
        const fullUrl = `${window.location.origin}${window.location.pathname.replace('dashboard.html', '')}profile.html?id=${encodeURIComponent(activeWorker.id)}`;
        navigator.clipboard.writeText(fullUrl).then(() => {
          copyUrlBtn.classList.add('copied');
          copyUrlBtn.textContent = 'Copied!';
          showToast('✓ Public profile link copied to clipboard!');
          setTimeout(() => {
            copyUrlBtn.classList.remove('copied');
            copyUrlBtn.textContent = 'Copy Link';
          }, 2000);
        }).catch(() => {
          prompt('Copy profile link:', fullUrl);
        });
      };
    }

    // 4 Discovery KPIs
    const impressionsEl = document.getElementById('stat-profile-impressions');
    if (impressionsEl) impressionsEl.textContent = activeWorker.impressions || '1,420';

    const clicksCount = window.FINDWORKER_DATA.getPlatformClicks(activeWorker.id) || 384;
    const statClicks = document.getElementById('stat-link-clicks');
    if (statClicks) statClicks.textContent = clicksCount;

    const convRateEl = document.getElementById('stat-conversion-rate');
    if (convRateEl) convRateEl.textContent = `${Math.min(99, Math.round((clicksCount / 1420) * 100))}%`;

    // Dynamic Showcase Health Score & Checklist
    let healthScore = 50;
    if (activeWorker.image && !activeWorker.image.includes('placeholder')) healthScore += 12;
    if (activeWorker.craftTitle && activeWorker.bio) healthScore += 12;
    if (activeWorker.platforms && activeWorker.platforms.length >= 2) healthScore += 12;
    if (activeWorker.portfolio && activeWorker.portfolio.length >= 2) healthScore += 10;
    if (activeWorker.email || activeWorker.phone) healthScore += 4;
    healthScore = Math.min(100, healthScore);

    const healthPercent = document.getElementById('overview-health-percent');
    const healthBar = document.getElementById('overview-health-bar');
    if (healthPercent) healthPercent.textContent = `${healthScore}% Ready`;
    if (healthBar) healthBar.style.width = `${healthScore}%`;

    // Platform Discovery Traffic Breakdown
    const trafficContainer = document.getElementById('overview-traffic-bars');
    if (trafficContainer) {
      const platforms = activeWorker.platforms || [];
      if (platforms.length === 0) {
        trafficContainer.innerHTML = `
          <p style="font-size:0.8rem; color:var(--color-secondary-muted);">
            No external platforms linked yet. Connect your Upwork, Fiverr, GitHub or LinkedIn to start tracking client handoffs.
          </p>
        `;
      } else {
        const weights = [52, 26, 14, 8, 5, 4, 3];
        trafficContainer.innerHTML = platforms.map((p, idx) => {
          const cfg = PLATFORMS_CONFIG[p.icon] || PLATFORMS_CONFIG.custom;
          const pct = weights[idx] || Math.max(5, Math.floor(60 / (idx + 1)));
          const estimatedClicks = Math.round((clicksCount * pct) / 100);
          return `
            <div class="dash-traffic-item">
              <div class="dash-traffic-info-row">
                <span class="dash-traffic-name">
                  <span style="color: ${cfg.color};">●</span> ${escapeHtml(p.name)}
                </span>
                <span class="dash-traffic-metrics"><strong>${estimatedClicks} clicks</strong> (${pct}%)</span>
              </div>
              <div class="dash-traffic-track">
                <div class="dash-traffic-fill" style="width: ${pct}%; background: ${cfg.color};"></div>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    // Share buttons in Overview
    const profileUrl = `${window.location.origin}${window.location.pathname.replace('dashboard.html', '')}profile.html?id=${encodeURIComponent(activeWorker.id)}`;
    const shareText = encodeURIComponent(`Explore my verified work and connect directly with me on FindWorker: ${activeWorker.name} — ${activeWorker.craftTitle || activeWorker.trade}`);

    const shareIn = document.getElementById('btn-share-linkedin');
    if (shareIn) {
      shareIn.onclick = () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(profileUrl)}`, '_blank');
      };
    }
    const shareTw = document.getElementById('btn-share-twitter');
    if (shareTw) {
      shareTw.onclick = () => {
        window.open(`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(profileUrl)}`, '_blank');
      };
    }
    const shareWa = document.getElementById('btn-share-whatsapp');
    if (shareWa) {
      shareWa.onclick = () => {
        window.open(`https://api.whatsapp.com/send?text=${shareText}%20${encodeURIComponent(profileUrl)}`, '_blank');
      };
    }
  }

  // 3. My Profile Section
  function renderMyProfileSection() {
    const isLive = activeWorker.status !== 'draft';
    const heading = document.getElementById('profile-status-heading');
    const toggleBtn = document.getElementById('btn-toggle-publication');
    const publicUrlDisplay = document.getElementById('profile-public-url-display');

    if (heading) {
      heading.textContent = isLive ? '✓ Profile is Live & Published in Directory' : '○ Profile is in Draft Mode (Unlisted)';
      heading.style.color = isLive ? '#059669' : '#D97706';
    }

    if (toggleBtn) {
      toggleBtn.textContent = isLive ? 'Unpublish Profile (Set to Draft)' : 'Publish Profile Now';
      toggleBtn.className = `dash-btn ${isLive ? 'dash-btn-outline' : 'dash-btn-primary'}`;
    }

    if (publicUrlDisplay) {
      const fullUrl = `${window.location.origin}${window.location.pathname.replace('dashboard.html', '')}profile.html?id=${encodeURIComponent(activeWorker.id)}`;
      publicUrlDisplay.textContent = fullUrl;
    }
  }

  // 4. Personal Information Section (Complete Details, Image-Only Upload)
  function renderPersonalInfoSection() {
    const avatarPreview = document.getElementById('form-avatar-preview');
    const inputAvatar = document.getElementById('input-avatar-url');
    const inputName = document.getElementById('input-full-name');
    const inputTitle = document.getElementById('input-craft-title');
    const selectTrade = document.getElementById('select-primary-trade');
    const inputLoc = document.getElementById('input-location');
    const inputLang = document.getElementById('input-languages');
    const inputExp = document.getElementById('input-experience-years');
    const selectAvail = document.getElementById('select-availability');
    const selectWorkPref = document.getElementById('select-work-preference');
    const selectResp = document.getElementById('select-response-time');
    const inputWeb = document.getElementById('input-website');
    const inputEmail = document.getElementById('input-email');
    const inputPhone = document.getElementById('input-phone');

    if (avatarPreview) avatarPreview.src = activeWorker.image;
    if (inputAvatar) inputAvatar.value = activeWorker.image;
    if (inputName) inputName.value = activeWorker.name;
    if (inputTitle) inputTitle.value = activeWorker.craftTitle || '';
    if (inputLoc) inputLoc.value = activeWorker.location || '';
    if (inputLang) inputLang.value = activeWorker.language || '';
    if (inputExp) inputExp.value = activeWorker.experienceYears || 5;
    if (selectAvail) selectAvail.value = activeWorker.availability || 'Available Today';
    if (selectWorkPref) selectWorkPref.value = activeWorker.workPreference || 'Remote Worldwide';
    if (selectResp) selectResp.value = activeWorker.responseTime || 'Within 2 Hours';
    if (inputWeb) inputWeb.value = activeWorker.website || '';
    if (inputEmail) inputEmail.value = activeWorker.email || '';
    if (inputPhone) inputPhone.value = activeWorker.phone || '';

    // Populate Trade Options
    if (selectTrade) {
      const categories = window.FINDWORKER_DATA.getAllCategories();
      selectTrade.innerHTML = categories.map(cat => `
        <option value="${escapeHtml(cat)}" ${cat === activeWorker.trade ? 'selected' : ''}>${escapeHtml(cat)}</option>
      `).join('');
    }
  }

  // 5. Professional Summary Section
  function renderProfessionalSummarySection() {
    const inputShortBio = document.getElementById('input-short-bio');
    const inputAbout = document.getElementById('input-about-detailed');
    const inputGuarantee = document.getElementById('input-guarantee');

    if (inputShortBio) inputShortBio.value = activeWorker.bio || '';
    if (inputAbout) inputAbout.value = activeWorker.about || '';
    if (inputGuarantee) inputGuarantee.value = activeWorker.guarantee || '';
  }

  // 6. Skills Section
  function renderSkillsSection() {
    const cloud = document.getElementById('skills-tag-cloud');
    const badge = document.getElementById('skills-count-badge');
    const skills = activeWorker.skills || [];

    if (badge) badge.textContent = skills.length;

    if (cloud) {
      if (skills.length === 0) {
        cloud.innerHTML = `<span style="font-size:0.8rem; color:var(--color-secondary-muted);">No skills added yet. Use the field below to add capabilities.</span>`;
      } else {
        cloud.innerHTML = skills.map((skill, index) => `
          <div class="dash-tag-pill">
            <span>${escapeHtml(skill)}</span>
            <button type="button" class="dash-tag-remove" data-index="${index}" title="Remove skill">&times;</button>
          </div>
        `).join('');

        cloud.querySelectorAll('.dash-tag-remove').forEach(btn => {
          btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.index, 10);
            activeWorker.skills.splice(idx, 1);
            saveWorkerData();
            renderSkillsSection();
            renderOverviewSection();
          });
        });
      }
    }

    // Recommended Skills
    const recContainer = document.getElementById('suggested-skills-pills');
    if (recContainer) {
      const suggestions = [
        'React', 'TypeScript', 'Next.js', 'Node.js', 'Figma', 'UI/UX Design', 'Design Systems',
        'Custom Cabinetry', 'Timber Framing', 'Brand Identity', 'SEO Strategy', 'Video Editing',
        'Motion Graphics', 'Python', 'Tailwind CSS', 'API Architecture', 'GraphQL'
      ];
      recContainer.innerHTML = suggestions.map(s => `
        <button type="button" class="dash-suggest-pill" data-skill="${escapeHtml(s)}">+ ${escapeHtml(s)}</button>
      `).join('');

      recContainer.querySelectorAll('.dash-suggest-pill').forEach(btn => {
        btn.addEventListener('click', () => {
          const skill = btn.dataset.skill;
          if (!activeWorker.skills) activeWorker.skills = [];
          if (!activeWorker.skills.includes(skill)) {
            activeWorker.skills.push(skill);
            saveWorkerData();
            renderSkillsSection();
            renderOverviewSection();
            showToast(`Added skill: ${skill}`);
          }
        });
      });
    }
  }

  // 7. Portfolio & Projects Section
  function renderPortfolioSection() {
    const container = document.getElementById('projects-grid-container');
    if (!container) return;

    const portfolio = activeWorker.portfolio || [];
    if (portfolio.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: #FAFAFA; border-radius: var(--radius-md); border: 1px dashed var(--color-border);">
          <div style="font-size: 2rem; margin-bottom: 8px;">🎨</div>
          <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 4px;">No Projects Added Yet</h4>
          <p style="font-size: 0.85rem; color: var(--color-secondary-muted); margin-bottom: 16px;">
            Showcase your best production work and case studies to inspire prospective clients.
          </p>
          <button type="button" class="dash-btn dash-btn-primary" id="btn-empty-add-project">
            ＋ Add First Project
          </button>
        </div>
      `;
      const emptyBtn = container.querySelector('#btn-empty-add-project');
      if (emptyBtn) emptyBtn.addEventListener('click', openAddProjectModal);
      return;
    }

    container.innerHTML = portfolio.map((item, index) => `
      <div class="dash-project-card">
        <div class="dash-project-thumb-frame">
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}" class="dash-project-thumb"
            onerror="this.src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85'">
          <span class="dash-project-cat-chip">${escapeHtml(item.category || activeWorker.trade)}</span>
        </div>
        <div class="dash-project-body">
          <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:4px;">
            <h4 class="dash-project-title">${escapeHtml(item.title)}</h4>
            ${item.year ? `<span style="font-size:0.75rem; color:var(--color-secondary-muted);">${escapeHtml(item.year)}</span>` : ''}
          </div>
          <p class="dash-project-desc">${escapeHtml(item.description || '')}</p>
          <div class="dash-project-tags">
            ${(item.tags || []).map(t => `<span class="dash-project-tag-pill">${escapeHtml(t)}</span>`).join('')}
          </div>
          <div class="dash-project-foot">
            <span style="font-size:0.75rem; color:var(--color-secondary-muted);">Featured Work</span>
            <div style="display:flex; gap:6px;">
              <button type="button" class="dash-btn-icon edit-project-btn" data-index="${index}" title="Edit Project">✎</button>
              <button type="button" class="dash-btn-icon delete delete-project-btn" data-index="${index}" title="Delete Project">✕</button>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.edit-project-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index, 10);
        openEditProjectModal(idx);
      });
    });

    container.querySelectorAll('.delete-project-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index, 10);
        if (confirm('Are you sure you want to delete this project?')) {
          activeWorker.portfolio.splice(idx, 1);
          saveWorkerData();
          renderPortfolioSection();
          showToast('Project deleted successfully.');
        }
      });
    });
  }

  // 8. Work Experience Section
  function renderExperienceSection() {
    const container = document.getElementById('experience-list-container');
    if (!container) return;

    const experiences = activeWorker.experience || [];
    if (experiences.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 40px; background: #FAFAFA; border-radius: var(--radius-md); border: 1px dashed var(--color-border);">
          <div style="font-size: 2rem; margin-bottom: 8px;">📋</div>
          <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 4px;">No Experience Listed</h4>
          <p style="font-size: 0.85rem; color: var(--color-secondary-muted); margin-bottom: 16px;">
            Add your professional history, client studios, and practice milestones.
          </p>
          <button type="button" class="dash-btn dash-btn-primary" id="btn-empty-add-exp">
            ＋ Add First Experience
          </button>
        </div>
      `;
      const emptyBtn = container.querySelector('#btn-empty-add-exp');
      if (emptyBtn) emptyBtn.addEventListener('click', openAddExpModal);
      return;
    }

    container.innerHTML = experiences.map((exp, index) => `
      <div class="dash-exp-card">
        <div class="dash-exp-meta">
          <div class="dash-exp-role">${escapeHtml(exp.role)}</div>
          <div class="dash-exp-company-period">${escapeHtml(exp.company)} • ${escapeHtml(exp.period)}</div>
          <div class="dash-exp-desc">${escapeHtml(exp.description || '')}</div>
        </div>
        <div style="display:flex; gap:6px;">
          <button type="button" class="dash-btn-icon edit-exp-btn" data-index="${index}" title="Edit Experience">✎</button>
          <button type="button" class="dash-btn-icon delete delete-exp-btn" data-index="${index}" title="Delete Experience">✕</button>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.edit-exp-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index, 10);
        openEditExpModal(idx);
      });
    });

    container.querySelectorAll('.delete-exp-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index, 10);
        if (confirm('Are you sure you want to delete this experience record?')) {
          activeWorker.experience.splice(idx, 1);
          saveWorkerData();
          renderExperienceSection();
          showToast('Experience removed.');
        }
      });
    });
  }

  // 9. Platform Links Section (Flagship & Unique Design!)
  function renderPlatformLinksSection() {
    const container = document.getElementById('platforms-grid-container');
    if (!container) return;

    const platforms = activeWorker.platforms || [];
    if (platforms.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 24px; background: #FFFFFF; border-radius: 14px; border: 2px dashed rgba(80, 76, 255, 0.25);">
          <div style="font-size: 2.4rem; margin-bottom: 10px;">🔗</div>
          <h4 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 6px; color: #0F0F0F;">No External Profiles Connected Yet</h4>
          <p style="font-size: 0.85rem; color: #71717A; max-width: 440px; margin: 0 auto 20px; line-height: 1.5;">
            Connect your Upwork, Fiverr, LinkedIn, GitHub, Behance or Personal Studio. Clients discover you here and connect directly with 0% platform commission!
          </p>
          <button type="button" class="dash-btn dash-btn-primary" id="btn-empty-add-platform">
            ＋ Connect Your First Platform
          </button>
        </div>
      `;
      const emptyBtn = container.querySelector('#btn-empty-add-platform');
      if (emptyBtn) emptyBtn.addEventListener('click', () => openAddPlatformModal());
      renderLivePreviewPills([]);
      return;
    }

    container.innerHTML = platforms.map((p, index) => {
      const cfg = PLATFORMS_CONFIG[p.icon] || PLATFORMS_CONFIG.custom;
      const cleanUrlText = p.url.replace(/^https?:\/\//i, '').replace(/\/$/, '');
      return `
        <div class="dash-platform-item-card" style="--brand-color: ${cfg.color};">
          <div class="dash-platform-card-glow" style="background: radial-gradient(circle at top right, ${cfg.color}15, transparent 70%);"></div>

          <div class="dash-platform-card-top">
            <div class="dash-platform-card-brand">
              <div class="dash-platform-card-icon" style="background: ${cfg.color}14; color: ${cfg.color}; border: 1px solid ${cfg.color}25;">
                ${cfg.svg}
              </div>
              <div>
                <div class="dash-platform-card-title-row">
                  <h4 class="dash-platform-card-name">${escapeHtml(p.name)}</h4>
                  <span class="dash-platform-status-badge">
                    <span class="pulse-dot" style="background: ${cfg.color};"></span>
                    Verified Link
                  </span>
                </div>
                <span class="dash-platform-card-badge" style="background: ${cfg.color}12; color: ${cfg.color}; border: 1px solid ${cfg.color}22;">
                  ✓ ${escapeHtml(p.badge || cfg.defaultBadge)}
                </span>
              </div>
            </div>
          </div>

          <div class="dash-platform-url-capsule">
            <span class="url-protocol-prefix">https://</span>
            <span class="dash-platform-card-url" title="${escapeHtml(p.url)}">${escapeHtml(cleanUrlText)}</span>
            <button type="button" class="copy-platform-url-btn" data-url="${escapeHtml(p.url)}" title="Copy Link to Clipboard">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>Copy</span>
            </button>
          </div>

          <div class="dash-platform-card-footer">
            <div class="dash-platform-direct-perk">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>0% Commission • Direct Discovery</span>
            </div>

            <div class="dash-platform-card-actions">
              <a href="${escapeHtml(p.url)}" target="_blank" rel="noopener noreferrer" class="dash-platform-action-link" title="Open and Test External Link">
                <span>Visit</span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
              <button type="button" class="dash-platform-action-btn edit-platform-btn" data-index="${index}" title="Edit Link Details">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                <span>Edit</span>
              </button>
              <button type="button" class="dash-platform-action-btn delete-btn delete-platform-btn" data-index="${index}" title="Remove Platform">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach Copy listeners
    container.querySelectorAll('.copy-platform-url-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const url = btn.dataset.url;
        if (!url) return;
        navigator.clipboard.writeText(url).then(() => {
          btn.classList.add('copied');
          btn.querySelector('span').textContent = 'Copied!';
          showToast(`✓ Copied link to clipboard: ${url}`);
          setTimeout(() => {
            btn.classList.remove('copied');
            btn.querySelector('span').textContent = 'Copy';
          }, 2000);
        }).catch(() => {
          showToast(`Link: ${url}`);
        });
      });
    });

    // Attach Edit listeners
    container.querySelectorAll('.edit-platform-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index, 10);
        openEditPlatformModal(idx);
      });
    });

    // Attach Delete listeners
    container.querySelectorAll('.delete-platform-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.index, 10);
        if (confirm('Are you sure you want to delete this external platform link?')) {
          activeWorker.platforms.splice(idx, 1);
          saveWorkerData();
          renderPlatformLinksSection();
          renderOverviewSection();
          showToast('Platform link removed.');
        }
      });
    });

    renderLivePreviewPills(platforms);
  }

  function renderLivePreviewPills(platforms) {
    const previewContainer = document.getElementById('live-platforms-preview-pills');
    if (!previewContainer) return;

    if (!platforms || platforms.length === 0) {
      previewContainer.innerHTML = `<span style="font-size:0.8rem; color:#9CA3AF; font-style:italic;">No active platform pills to preview yet. Connect one above.</span>`;
      return;
    }

    previewContainer.innerHTML = platforms.map(p => {
      const cfg = PLATFORMS_CONFIG[p.icon] || PLATFORMS_CONFIG.custom;
      return `
        <a href="${escapeHtml(p.url)}" target="_blank" rel="noopener noreferrer" class="dash-shortcut-chip" style="border-color:${cfg.color}35; color:${cfg.color}; background:${cfg.color}08;">
          <span style="display:inline-flex; width:14px; height:14px;">${cfg.svg}</span>
          <span>${escapeHtml(p.name)}</span>
          <span style="font-size:0.68rem; opacity:0.8;">↗</span>
        </a>
      `;
    }).join('');
  }

  // 10. Categories Section
  function renderCategoriesSection() {
    const primarySelect = document.getElementById('category-primary-select');
    const grid = document.getElementById('categories-checkboxes-grid');
    const categories = window.FINDWORKER_DATA.getAllCategories();

    if (primarySelect) {
      primarySelect.innerHTML = categories.map(cat => `
        <option value="${escapeHtml(cat)}" ${cat === activeWorker.trade ? 'selected' : ''}>${escapeHtml(cat)}</option>
      `).join('');
    }

    if (grid) {
      grid.innerHTML = categories.map(cat => `
        <label style="display:flex; align-items:center; gap:8px; font-size:0.85rem; cursor:pointer; background:#FAFAFA; padding:10px 14px; border-radius:var(--radius-sm); border:1px solid var(--color-border-light);">
          <input type="radio" name="dash-active-category" value="${escapeHtml(cat)}" ${cat === activeWorker.trade ? 'checked' : ''}>
          <span>${escapeHtml(cat)}</span>
        </label>
      `).join('');
    }
  }

  // 11. Reviews Section
  function renderReviewsSection() {
    const avgHero = document.getElementById('reviews-avg-rating-hero');
    const countHero = document.getElementById('reviews-total-count-hero');
    const feed = document.getElementById('full-reviews-feed-container');

    const reviews = window.FINDWORKER_DATA.getWorkerReviews(activeWorker.id) || [];
    const ratingVal = activeWorker.rating ? activeWorker.rating.toFixed(2) : '5.00';

    if (avgHero) avgHero.textContent = ratingVal;
    if (countHero) countHero.textContent = reviews.length;

    if (feed) {
      if (reviews.length === 0) {
        feed.innerHTML = `
          <div style="text-align: center; padding: 40px; background: #FAFAFA; border-radius: var(--radius-md); border: 1px dashed var(--color-border);">
            <div style="font-size: 2rem; margin-bottom: 8px;">★</div>
            <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 4px;">No Client Reviews Yet</h4>
            <p style="font-size: 0.85rem; color: var(--color-secondary-muted);">
              When clients discover your work on FindWorker and collaborate with you, they can leave feedback directly on your public profile.
            </p>
          </div>
        `;
        return;
      }

      feed.innerHTML = reviews.map(r => `
        <div class="dash-review-card">
          <div class="dash-review-top">
            <div class="dash-review-author-wrap">
              <span class="dash-review-author">${escapeHtml(r.author || 'Verified Client')}</span>
              <span class="dash-review-date">${escapeHtml(r.date || 'Recent')}</span>
            </div>
            <div class="dash-review-stars">${'★'.repeat(Math.round(r.rating || 5))}</div>
          </div>
          <div class="dash-review-title">${escapeHtml(r.title || 'Client Review')}</div>
          <div class="dash-review-comment">${escapeHtml(r.comment || '')}</div>
        </div>
      `).join('');
    }
  }

  // 12. Account Settings Section
  function renderSettingsSection() {
    const emailField = document.getElementById('settings-account-email');
    if (emailField) emailField.value = currentUser ? currentUser.email : (activeWorker.email || '');
  }

  // ── Save Worker Helper ────────────────────────────────────────────────────
  function saveWorkerData() {
    if (!activeWorker) return;
    window.FINDWORKER_DATA.saveWorkerProfile(activeWorker);
    renderIdentityAndTopbar();
  }

  // ── Modals Logic ──────────────────────────────────────────────────────────

  // Modal: Projects
  const modalProject = document.getElementById('modal-project');
  const formProjectModal = document.getElementById('form-project-modal');

  function openAddProjectModal() {
    if (!modalProject) return;
    document.getElementById('modal-project-title').textContent = 'Add New Project';
    document.getElementById('modal-project-index').value = '-1';
    formProjectModal.reset();
    document.getElementById('modal-project-category').value = activeWorker.trade;
    modalProject.classList.add('active');
  }

  function openEditProjectModal(index) {
    if (!modalProject) return;
    const project = activeWorker.portfolio[index];
    if (!project) return;

    document.getElementById('modal-project-title').textContent = 'Edit Project';
    document.getElementById('modal-project-index').value = index;
    document.getElementById('modal-project-name').value = project.title || '';
    document.getElementById('modal-project-category').value = project.category || activeWorker.trade;
    document.getElementById('modal-project-year').value = project.year || '2025';
    document.getElementById('modal-project-image').value = project.image || '';
    document.getElementById('modal-project-desc').value = project.description || '';
    document.getElementById('modal-project-tags').value = (project.tags || []).join(', ');

    modalProject.classList.add('active');
  }

  function closeProjectModal() {
    if (modalProject) modalProject.classList.remove('active');
  }

  // Modal: Work Experience
  const modalExp = document.getElementById('modal-experience');
  const formExpModal = document.getElementById('form-exp-modal');

  function openAddExpModal() {
    if (!modalExp) return;
    document.getElementById('modal-exp-title').textContent = 'Add Work Experience';
    document.getElementById('modal-exp-index').value = '-1';
    formExpModal.reset();
    modalExp.classList.add('active');
  }

  function openEditExpModal(index) {
    if (!modalExp) return;
    const exp = activeWorker.experience[index];
    if (!exp) return;

    document.getElementById('modal-exp-title').textContent = 'Edit Work Experience';
    document.getElementById('modal-exp-index').value = index;
    document.getElementById('modal-exp-role').value = exp.role || '';
    document.getElementById('modal-exp-company').value = exp.company || '';
    document.getElementById('modal-exp-period').value = exp.period || '';
    document.getElementById('modal-exp-desc').value = exp.description || '';

    modalExp.classList.add('active');
  }

  function closeExpModal() {
    if (modalExp) modalExp.classList.remove('active');
  }

  // Modal: Platform Link
  const modalPlatform = document.getElementById('modal-platform');
  const formPlatformModal = document.getElementById('form-platform-modal');
  const platformSelect = document.getElementById('modal-platform-select');
  const customPlatformGroup = document.getElementById('group-custom-platform-name');

  function openAddPlatformModal(presetKey) {
    if (!modalPlatform) return;
    document.getElementById('modal-platform-title').textContent = 'Add External Freelance Profile';
    document.getElementById('modal-platform-index').value = '-1';
    formPlatformModal.reset();

    if (presetKey && typeof presetKey === 'string' && PLATFORMS_CONFIG[presetKey]) {
      if (platformSelect) platformSelect.value = presetKey;
      const cfg = PLATFORMS_CONFIG[presetKey];
      const badgeInput = document.getElementById('modal-platform-badge');
      if (badgeInput) badgeInput.value = cfg.defaultBadge || '';
      const actionInput = document.getElementById('modal-platform-action');
      if (actionInput) actionInput.value = cfg.actionText || '';
      const urlInput = document.getElementById('modal-platform-url');
      if (urlInput) {
        if (presetKey === 'upwork') urlInput.placeholder = 'https://www.upwork.com/freelancers/~...';
        else if (presetKey === 'fiverr') urlInput.placeholder = 'https://www.fiverr.com/...';
        else if (presetKey === 'github') urlInput.placeholder = 'https://github.com/...';
        else if (presetKey === 'linkedin') urlInput.placeholder = 'https://linkedin.com/in/...';
        else if (presetKey === 'behance') urlInput.placeholder = 'https://behance.net/...';
        else if (presetKey === 'dribbble') urlInput.placeholder = 'https://dribbble.com/...';
        else if (presetKey === 'web') urlInput.placeholder = 'https://yourportfolio.studio';
      }
    }

    if (customPlatformGroup) {
      customPlatformGroup.style.display = platformSelect && platformSelect.value === 'custom' ? 'block' : 'none';
    }
    modalPlatform.classList.add('active');
  }

  function openEditPlatformModal(index) {
    if (!modalPlatform) return;
    const p = activeWorker.platforms[index];
    if (!p) return;

    document.getElementById('modal-platform-title').textContent = 'Edit External Freelance Profile';
    document.getElementById('modal-platform-index').value = index;
    if (platformSelect) platformSelect.value = p.icon || 'upwork';
    document.getElementById('modal-platform-url').value = p.url || '';
    document.getElementById('modal-platform-badge').value = p.badge || '';
    document.getElementById('modal-platform-action').value = p.actionText || '';

    if (customPlatformGroup) {
      customPlatformGroup.style.display = p.icon === 'custom' ? 'block' : 'none';
      if (document.getElementById('modal-platform-custom-name')) {
        document.getElementById('modal-platform-custom-name').value = p.name || '';
      }
    }

    modalPlatform.classList.add('active');
  }

  function closePlatformModal() {
    if (modalPlatform) modalPlatform.classList.remove('active');
  }

  // ── Profile Photo & Project Image Upload System ───────────────────────────
  function setupAvatarUpload() {
    const fileInput = document.getElementById('input-avatar-file');
    const triggerBtn = document.getElementById('btn-trigger-avatar-file');
    const dropZone = document.getElementById('avatar-drop-zone');
    const removeBtn = document.getElementById('btn-remove-avatar-photo');
    const toggleUrlBtn = document.getElementById('btn-toggle-avatar-url');
    const urlContainer = document.getElementById('avatar-url-input-container');
    const avatarPreview = document.getElementById('form-avatar-preview');
    const sidebarAvatar = document.getElementById('sidebar-user-avatar');
    const inputAvatarUrl = document.getElementById('input-avatar-url');
    const hintEl = document.getElementById('avatar-file-name-hint');

    if (triggerBtn && fileInput) {
      triggerBtn.addEventListener('click', () => fileInput.click());
    }

    if (dropZone && fileInput) {
      dropZone.addEventListener('click', () => fileInput.click());

      ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropZone.classList.add('dragover');
        });
      });

      ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropZone.classList.remove('dragover');
        });
      });

      dropZone.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
          handleAvatarFile(files[0]);
        }
      });
    }

    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) {
          handleAvatarFile(e.target.files[0]);
        }
      });
    }

    function handleAvatarFile(file) {
      if (!file.type.startsWith('image/')) {
        showToast('Please select a valid image file (PNG, JPG, WebP).');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        showToast('File size exceeds 5MB. Please choose a smaller image.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target.result;
        if (avatarPreview) avatarPreview.src = dataUrl;
        if (sidebarAvatar) sidebarAvatar.src = dataUrl;
        if (inputAvatarUrl) inputAvatarUrl.value = dataUrl;
        if (hintEl) hintEl.textContent = `✓ Uploaded: ${file.name}`;

        activeWorker.image = dataUrl;
        saveWorkerData();
        renderIdentityAndTopbar();
        renderOverviewSection();
        showToast('✓ Profile picture uploaded and saved!');
      };
      reader.readAsDataURL(file);
    }

    if (removeBtn) {
      removeBtn.addEventListener('click', () => {
        const defaultAvatar = 'assets/images/hero_craftsman.jpg';
        if (avatarPreview) avatarPreview.src = defaultAvatar;
        if (sidebarAvatar) sidebarAvatar.src = defaultAvatar;
        if (inputAvatarUrl) inputAvatarUrl.value = defaultAvatar;
        if (hintEl) hintEl.textContent = 'Direct file upload (PNG, JPG, WebP)';
        activeWorker.image = defaultAvatar;
        saveWorkerData();
        renderIdentityAndTopbar();
        renderOverviewSection();
        showToast('Profile photo reset to default.');
      });
    }

    if (toggleUrlBtn && urlContainer) {
      toggleUrlBtn.addEventListener('click', () => {
        const isHidden = urlContainer.style.display === 'none';
        urlContainer.style.display = isHidden ? 'block' : 'none';
        toggleUrlBtn.querySelector('span').textContent = isHidden ? 'Hide image URL input ▴' : 'Or paste an image web URL ▾';
      });
    }

    if (inputAvatarUrl) {
      inputAvatarUrl.addEventListener('input', () => {
        const val = inputAvatarUrl.value.trim();
        if (val && avatarPreview) {
          avatarPreview.src = val;
        }
      });
    }

    // Project Modal Image File Upload
    const projectFileInput = document.getElementById('input-project-image-file');
    const projectTriggerBtn = document.getElementById('btn-trigger-project-upload');
    const projectUrlInput = document.getElementById('modal-project-image');

    if (projectTriggerBtn && projectFileInput) {
      projectTriggerBtn.addEventListener('click', () => projectFileInput.click());
    }

    if (projectFileInput) {
      projectFileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) {
          const file = e.target.files[0];
          if (!file.type.startsWith('image/')) {
            showToast('Please select a valid image file.');
            return;
          }
          const reader = new FileReader();
          reader.onload = (event) => {
            if (projectUrlInput) projectUrlInput.value = event.target.result;
            showToast(`✓ Project image loaded: ${file.name}`);
          };
          reader.readAsDataURL(file);
        }
      });
    }
  }

  // ── Event Handlers Setup ──────────────────────────────────────────────────
  function setupEventListeners() {
    setupAvatarUpload();

    // 1. Sidebar Nav Switching
    document.querySelectorAll('.dash-nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        if (tab) switchDashboardTab(tab);
      });
    });

    // 2. Quick Action & Deep Link Elements ([data-nav])
    document.querySelectorAll('[data-nav]').forEach(el => {
      el.addEventListener('click', () => {
        const nav = el.dataset.nav;
        if (nav) switchDashboardTab(nav);
      });
    });

    // 3. Mobile Hamburger Toggle
    const menuToggle = document.getElementById('dash-menu-toggle');
    const sidebar = document.getElementById('dash-sidebar');
    if (menuToggle && sidebar) {
      menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
      });
    }

    // 4. Publication Status Toggle (Topbar & View 2)
    const toggleCheckbox = document.getElementById('profile-published-toggle');
    if (toggleCheckbox) {
      toggleCheckbox.addEventListener('change', () => {
        activeWorker.status = toggleCheckbox.checked ? 'published' : 'draft';
        saveWorkerData();
        renderIdentityAndTopbar();
        renderOverviewSection();
        renderMyProfileSection();
        showToast(toggleCheckbox.checked ? '✓ Profile is published and visible to visitors.' : '○ Profile switched to draft mode.');
      });
    }

    const togglePublicationBtn = document.getElementById('btn-toggle-publication');
    if (togglePublicationBtn) {
      togglePublicationBtn.addEventListener('click', () => {
        const newStatus = activeWorker.status === 'draft' ? 'published' : 'draft';
        activeWorker.status = newStatus;
        saveWorkerData();
        renderIdentityAndTopbar();
        renderOverviewSection();
        renderMyProfileSection();
        showToast(newStatus === 'published' ? '✓ Profile published!' : '○ Profile unlisted.');
      });
    }

    // 5. Copy Public Link Button
    const copyBtn = document.getElementById('btn-copy-public-link');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const fullUrl = `${window.location.origin}${window.location.pathname.replace('dashboard.html', '')}profile.html?id=${encodeURIComponent(activeWorker.id)}`;
        navigator.clipboard.writeText(fullUrl).then(() => {
          showToast('✓ Permanent profile link copied to clipboard!');
        }).catch(() => {
          prompt('Copy your public profile URL:', fullUrl);
        });
      });
    }

    // 6. Personal Info & Profile Form Submit
    const formPersonal = document.getElementById('form-personal-info');
    if (formPersonal) {
      formPersonal.addEventListener('submit', (e) => {
        e.preventDefault();
        const fName = document.getElementById('input-full-name');
        if (fName) activeWorker.name = fName.value.trim();
        const fTitle = document.getElementById('input-craft-title');
        if (fTitle) activeWorker.craftTitle = fTitle.value.trim();
        const fTrade = document.getElementById('select-primary-trade');
        if (fTrade) activeWorker.trade = fTrade.value;
        const fLoc = document.getElementById('input-location');
        if (fLoc) activeWorker.location = fLoc.value.trim();
        const fExp = document.getElementById('input-experience-years');
        if (fExp) activeWorker.experienceYears = parseInt(fExp.value, 10) || 5;
        const fLang = document.getElementById('input-languages');
        if (fLang) activeWorker.language = fLang.value.trim();
        const fAvail = document.getElementById('select-availability');
        if (fAvail) activeWorker.availability = fAvail.value;
        const fPref = document.getElementById('select-work-preference');
        if (fPref) activeWorker.workPreference = fPref.value;
        const fResp = document.getElementById('select-response-time');
        if (fResp) activeWorker.responseTime = fResp.value;
        const fWeb = document.getElementById('input-website');
        if (fWeb) activeWorker.website = fWeb.value.trim();
        const fEmail = document.getElementById('input-email');
        if (fEmail) activeWorker.email = fEmail.value.trim();
        const fPhone = document.getElementById('input-phone');
        if (fPhone) activeWorker.phone = fPhone.value.trim();

        const avatarInput = document.getElementById('input-avatar-url');
        if (avatarInput && avatarInput.value.trim()) activeWorker.image = avatarInput.value.trim();

        const shortBio = document.getElementById('input-short-bio');
        if (shortBio) activeWorker.bio = shortBio.value.trim();
        const detailedAbout = document.getElementById('input-about-detailed');
        if (detailedAbout) activeWorker.about = detailedAbout.value.trim();
        const guarantee = document.getElementById('input-guarantee');
        if (guarantee) activeWorker.guarantee = guarantee.value.trim();

        saveWorkerData();
        if (window.FINDWORKER_AUTH) {
          const cur = window.FINDWORKER_AUTH.getCurrentUser();
          if (cur && cur.workerId === activeWorker.id) {
            window.FINDWORKER_AUTH.updateCurrentUser({
              name: activeWorker.name,
              avatar: activeWorker.image
            });
          }
        }
        renderAll();
        showToast('✓ Profile updated successfully.');
      });
    }

    // 7. Summary Form Submit
    const formSummary = document.getElementById('form-summary-info');
    if (formSummary) {
      formSummary.addEventListener('submit', (e) => {
        e.preventDefault();
        activeWorker.bio = document.getElementById('input-short-bio').value.trim();
        activeWorker.about = document.getElementById('input-about-detailed').value.trim();
        activeWorker.guarantee = document.getElementById('input-guarantee').value.trim();

        saveWorkerData();
        renderAll();
        showToast('✓ Professional summary updated.');
      });
    }

    // 8. Add Skill Button & Enter Key
    const addSkillBtn = document.getElementById('btn-add-skill');
    const newSkillInput = document.getElementById('input-new-skill');
    function handleAddSkill() {
      if (!newSkillInput) return;
      const val = newSkillInput.value.trim();
      if (!val) return;
      if (!activeWorker.skills) activeWorker.skills = [];
      if (!activeWorker.skills.includes(val)) {
        activeWorker.skills.push(val);
        saveWorkerData();
        renderSkillsSection();
        renderOverviewSection();
        showToast(`✓ Added skill "${val}"`);
      }
      newSkillInput.value = '';
    }
    if (addSkillBtn) addSkillBtn.addEventListener('click', handleAddSkill);
    if (newSkillInput) {
      newSkillInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleAddSkill();
        }
      });
    }
    const saveSkillsBtn = document.getElementById('btn-save-skills');
    if (saveSkillsBtn) {
      saveSkillsBtn.addEventListener('click', () => {
        saveWorkerData();
        showToast('✓ Skills saved to profile.');
      });
    }

    // 9. Categories Save
    const saveCategoriesBtn = document.getElementById('btn-save-categories');
    if (saveCategoriesBtn) {
      saveCategoriesBtn.addEventListener('click', () => {
        const checkedRadio = document.querySelector('input[name="dash-active-category"]:checked');
        const primarySelect = document.getElementById('category-primary-select');
        const chosen = checkedRadio ? checkedRadio.value : (primarySelect ? primarySelect.value : activeWorker.trade);

        activeWorker.trade = chosen;
        saveWorkerData();
        renderAll();
        showToast(`✓ Primary discipline set to "${chosen}".`);
      });
    }

    // 10. Project Modals & Form
    const openAddProjectBtn = document.getElementById('btn-open-add-project-modal');
    if (openAddProjectBtn) openAddProjectBtn.addEventListener('click', openAddProjectModal);
    const closeProjectBtn = document.getElementById('modal-project-close');
    if (closeProjectBtn) closeProjectBtn.addEventListener('click', closeProjectModal);
    const cancelProjectBtn = document.getElementById('modal-project-cancel');
    if (cancelProjectBtn) cancelProjectBtn.addEventListener('click', closeProjectModal);

    if (formProjectModal) {
      formProjectModal.addEventListener('submit', (e) => {
        e.preventDefault();
        const idx = parseInt(document.getElementById('modal-project-index').value, 10);
        const title = document.getElementById('modal-project-name').value.trim();
        const category = document.getElementById('modal-project-category').value.trim() || activeWorker.trade;
        const year = document.getElementById('modal-project-year').value.trim() || '2025';
        const image = document.getElementById('modal-project-image').value.trim();
        const desc = document.getElementById('modal-project-desc').value.trim();
        const tagsRaw = document.getElementById('modal-project-tags').value.trim();
        const tags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean) : [category];

        const projectData = { title, category, year, image, description: desc, tags };

        if (!activeWorker.portfolio) activeWorker.portfolio = [];

        if (idx >= 0 && activeWorker.portfolio[idx]) {
          activeWorker.portfolio[idx] = projectData;
          showToast('✓ Project updated.');
        } else {
          activeWorker.portfolio.unshift(projectData);
          showToast('✓ New project added to showcase.');
        }

        saveWorkerData();
        renderPortfolioSection();
        closeProjectModal();
      });
    }

    // 11. Experience Modals & Form
    const openAddExpBtn = document.getElementById('btn-open-add-exp-modal');
    if (openAddExpBtn) openAddExpBtn.addEventListener('click', openAddExpModal);
    const closeExpBtn = document.getElementById('modal-exp-close');
    if (closeExpBtn) closeExpBtn.addEventListener('click', closeExpModal);
    const cancelExpBtn = document.getElementById('modal-exp-cancel');
    if (cancelExpBtn) cancelExpBtn.addEventListener('click', closeExpModal);

    if (formExpModal) {
      formExpModal.addEventListener('submit', (e) => {
        e.preventDefault();
        const idx = parseInt(document.getElementById('modal-exp-index').value, 10);
        const role = document.getElementById('modal-exp-role').value.trim();
        const company = document.getElementById('modal-exp-company').value.trim();
        const period = document.getElementById('modal-exp-period').value.trim();
        const desc = document.getElementById('modal-exp-desc').value.trim();

        const expData = { role, company, period, description: desc };

        if (!activeWorker.experience) activeWorker.experience = [];

        if (idx >= 0 && activeWorker.experience[idx]) {
          activeWorker.experience[idx] = expData;
          showToast('✓ Work experience updated.');
        } else {
          activeWorker.experience.unshift(expData);
          showToast('✓ New experience entry added.');
        }

        saveWorkerData();
        renderExperienceSection();
        closeExpModal();
      });
    }

    // 12. Platform Links Modals & Form
    const openAddPlatformBtn = document.getElementById('btn-open-add-platform-modal');
    if (openAddPlatformBtn) openAddPlatformBtn.addEventListener('click', () => openAddPlatformModal());
    const closePlatformBtn = document.getElementById('modal-platform-close');
    if (closePlatformBtn) closePlatformBtn.addEventListener('click', closePlatformModal);
    const cancelPlatformBtn = document.getElementById('modal-platform-cancel');
    if (cancelPlatformBtn) cancelPlatformBtn.addEventListener('click', closePlatformModal);

    // One-Click Platform Preset Chips
    document.querySelectorAll('.platform-preset-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const platform = chip.dataset.platform;
        openAddPlatformModal(platform);
      });
    });

    if (platformSelect) {
      platformSelect.addEventListener('change', () => {
        if (customPlatformGroup) {
          customPlatformGroup.style.display = platformSelect.value === 'custom' ? 'block' : 'none';
        }
        const cfg = PLATFORMS_CONFIG[platformSelect.value];
        if (cfg) {
          if (!document.getElementById('modal-platform-action').value) {
            document.getElementById('modal-platform-action').value = cfg.actionText;
          }
          if (!document.getElementById('modal-platform-badge').value) {
            document.getElementById('modal-platform-badge').value = cfg.defaultBadge;
          }
        }
      });
    }

    if (formPlatformModal) {
      formPlatformModal.addEventListener('submit', (e) => {
        e.preventDefault();
        const idx = parseInt(document.getElementById('modal-platform-index').value, 10);
        const iconKey = platformSelect.value;
        const cfg = PLATFORMS_CONFIG[iconKey] || PLATFORMS_CONFIG.custom;
        const customName = document.getElementById('modal-platform-custom-name')?.value?.trim();
        const name = iconKey === 'custom' && customName ? customName : cfg.name;
        const url = document.getElementById('modal-platform-url').value.trim();
        const badge = document.getElementById('modal-platform-badge').value.trim() || cfg.defaultBadge;
        const actionText = document.getElementById('modal-platform-action').value.trim() || cfg.actionText;

        const platformData = { name, url, icon: iconKey, badge, actionText, active: true };

        if (!activeWorker.platforms) activeWorker.platforms = [];

        if (idx >= 0 && activeWorker.platforms[idx]) {
          activeWorker.platforms[idx] = platformData;
          showToast(`✓ Updated ${name} link.`);
        } else {
          activeWorker.platforms.push(platformData);
          showToast(`✓ Linked ${name} profile!`);
        }

        saveWorkerData();
        renderPlatformLinksSection();
        renderOverviewSection();
        closePlatformModal();
      });
    }

    // 13. Password Change Form
    const formPassword = document.getElementById('form-change-password');
    if (formPassword) {
      formPassword.addEventListener('submit', (e) => {
        e.preventDefault();
        const currentPass = document.getElementById('input-current-pass').value;
        const newPass = document.getElementById('input-new-pass').value;

        const res = window.FINDWORKER_AUTH.changePassword(currentPass, newPass);
        if (res.success) {
          showToast('✓ Password changed successfully.');
          formPassword.reset();
        } else {
          alert(res.message);
        }
      });
    }

    // 14. Sign Out Buttons
    const sideLogout = document.getElementById('btn-sidebar-logout');
    const dangerLogout = document.getElementById('btn-danger-logout');
    const topbarUserBtn = document.getElementById('dash-topbar-user-btn');

    if (sideLogout) {
      sideLogout.addEventListener('click', () => {
        if (confirm('Are you sure you want to sign out?')) {
          window.FINDWORKER_AUTH.logout('index.html#home');
        }
      });
    }

    if (dangerLogout) {
      dangerLogout.addEventListener('click', () => {
        window.FINDWORKER_AUTH.logout('index.html#home');
      });
    }

    if (topbarUserBtn) {
      topbarUserBtn.addEventListener('click', () => {
        switchDashboardTab('settings');
      });
    }

    // 15. Reset Demo Profile
    const resetDemoBtn = document.getElementById('btn-reset-demo-profile');
    if (resetDemoBtn) {
      resetDemoBtn.addEventListener('click', () => {
        if (confirm('Reset your profile data to the original master baseline?')) {
          const initial = window.FINDWORKER_DATA.INITIAL_WORKERS.find(w => w.id === activeWorker.id);
          if (initial) {
            activeWorker = JSON.parse(JSON.stringify(initial));
            saveWorkerData();
            renderAll();
            showToast('Profile reset to original template.');
          }
        }
      });
    }

    // 16. Window Hash Change Listener
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash !== currentActiveTab) {
        switchDashboardTab(hash);
      }
    });
  }

  // Helper
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ── Document Ready Initialization ─────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    if (!initAuthSession()) return;

    setupEventListeners();
    renderAll();

    // Check starting hash route
    const hash = window.location.hash.replace('#', '');
    if (hash && ['overview', 'profile', 'personal', 'summary', 'skills', 'portfolio', 'experience', 'platforms', 'categories', 'reviews', 'settings'].includes(hash)) {
      switchDashboardTab(hash);
    } else {
      switchDashboardTab('overview');
    }
  });

})();
