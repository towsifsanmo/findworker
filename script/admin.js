/**
 * FindWorker — Platform Administration Controller
 * Manages freelancers, categories, review moderation, and platform metrics.
 */

(function () {
  'use strict';

  let currentAdminUser = null;
  let allWorkers = [];
  let currentActiveTab = 'overview';

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

  function initAdminSession() {
    currentAdminUser = window.FINDWORKER_AUTH ? window.FINDWORKER_AUTH.getCurrentUser() : null;

    if (!currentAdminUser || currentAdminUser.role !== 'admin') {
      window.location.href = 'admin-login.html';
      return false;
    }

    const nameEl = document.getElementById('admin-user-name');
    if (nameEl) nameEl.textContent = currentAdminUser.name;

    populateAdminCredentialsForm();

    return true;
  }

  function populateAdminCredentialsForm() {
    const adminAccount = (window.FINDWORKER_AUTH && window.FINDWORKER_AUTH.getAdminAccount)
      ? window.FINDWORKER_AUTH.getAdminAccount()
      : currentAdminUser;

    if (!adminAccount) return;

    const nameInput = document.getElementById('input-admin-name');
    const emailInput = document.getElementById('input-admin-email');
    const badgeEl = document.getElementById('admin-current-email-badge');
    const currentPassInput = document.getElementById('input-admin-current-pass');
    const newPassInput = document.getElementById('input-admin-new-pass');
    const confirmPassInput = document.getElementById('input-admin-confirm-pass');
    const feedbackEl = document.getElementById('admin-creds-feedback');

    if (nameInput) nameInput.value = adminAccount.name || '';
    if (emailInput) emailInput.value = adminAccount.email || '';
    if (badgeEl) badgeEl.textContent = adminAccount.email || 'admin@findworker.io';
    if (currentPassInput) currentPassInput.value = '';
    if (newPassInput) newPassInput.value = '';
    if (confirmPassInput) confirmPassInput.value = '';
    if (feedbackEl) {
      feedbackEl.style.display = 'none';
      feedbackEl.textContent = '';
    }
  }

  function switchAdminTab(tabId) {
    currentActiveTab = tabId;
    window.location.hash = `#${tabId}`;

    document.querySelectorAll('.dash-nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    document.querySelectorAll('.dash-view-section').forEach(sec => {
      sec.classList.toggle('active', sec.id === `view-${tabId}`);
    });

    const titleMap = {
      overview: 'Platform Overview',
      freelancers: 'Freelancers Management',
      categories: 'Categories & Disciplines',
      reviews: 'Reviews Moderation',
      settings: 'Platform Settings'
    };

    const breadcrumb = document.getElementById('admin-topbar-breadcrumb');
    const title = document.getElementById('admin-topbar-title');
    if (breadcrumb) breadcrumb.textContent = titleMap[tabId] || 'Workspace';
    if (title) title.textContent = titleMap[tabId] || 'Workspace';

    const sidebar = document.getElementById('dash-sidebar');
    if (sidebar) sidebar.classList.remove('open');

    if (tabId === 'settings') {
      populateAdminCredentialsForm();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function loadDataAndRender() {
    allWorkers = window.FINDWORKER_DATA.getAllWorkers({ includeDrafts: true });

    renderOverviewStats();
    renderFreelancersTable();
    renderCategoriesTable();
    renderReviewsTable();
  }

  // 1. Overview Stats
  function renderOverviewStats() {
    const stats = window.FINDWORKER_DATA.getPlatformStats();

    const wTotal = document.getElementById('admin-stat-total-workers');
    const wPublished = document.getElementById('admin-stat-published-workers');
    const cTotal = document.getElementById('admin-stat-total-cats');
    const rTotal = document.getElementById('admin-stat-total-reviews');
    const clTotal = document.getElementById('admin-stat-total-clicks');

    if (wTotal) wTotal.textContent = stats.totalFreelancers;
    if (wPublished) wPublished.textContent = stats.publishedFreelancers;
    if (cTotal) cTotal.textContent = stats.totalCategories;
    if (rTotal) rTotal.textContent = stats.totalReviews;
    if (clTotal) clTotal.textContent = stats.totalClicks;

    // Minimalist Hub Pills
    const hubWorkersPill = document.getElementById('admin-hub-workers-pill');
    const hubCatsPill = document.getElementById('admin-hub-cats-pill');
    const hubReviewsPill = document.getElementById('admin-hub-reviews-pill');

    if (hubWorkersPill) hubWorkersPill.textContent = `${stats.totalFreelancers} Roster`;
    if (hubCatsPill) hubCatsPill.textContent = `${stats.totalCategories} Roles`;
    if (hubReviewsPill) hubReviewsPill.textContent = `${stats.totalReviews} Testimonials`;

    // Dynamic Talent Distribution Breakdown
    const totalCount = allWorkers.length || 1;
    let webCount = 0;
    let designCount = 0;
    let craftCount = 0;
    let creativeCount = 0;

    allWorkers.forEach(w => {
      const trade = (w.trade || '').toLowerCase();
      if (trade.includes('web') || trade.includes('software') || trade.includes('developer') || trade.includes('cloud') || trade.includes('cyber') || trade.includes('mobile')) {
        webCount++;
      } else if (trade.includes('design') || trade.includes('ui') || trade.includes('product') || trade.includes('ux') || trade.includes('brand')) {
        designCount++;
      } else if (trade.includes('carpentry') || trade.includes('joiner') || trade.includes('electric') || trade.includes('plumb') || trade.includes('mason') || trade.includes('metal')) {
        craftCount++;
      } else {
        creativeCount++;
      }
    });

    const webPct = Math.round((webCount / totalCount) * 100);
    const designPct = Math.round((designCount / totalCount) * 100);
    const craftPct = Math.round((craftCount / totalCount) * 100);
    const creativePct = Math.max(0, 100 - (webPct + designPct + craftPct));

    const elWebStat = document.getElementById('dist-stat-web');
    const elWebBar = document.getElementById('dist-bar-web');
    if (elWebStat) elWebStat.textContent = `${webCount} Specialists (${webPct}%)`;
    if (elWebBar) elWebBar.style.width = `${webPct}%`;

    const elDesignStat = document.getElementById('dist-stat-design');
    const elDesignBar = document.getElementById('dist-bar-design');
    if (elDesignStat) elDesignStat.textContent = `${designCount} Specialists (${designPct}%)`;
    if (elDesignBar) elDesignBar.style.width = `${designPct}%`;

    const elCraftStat = document.getElementById('dist-stat-craft');
    const elCraftBar = document.getElementById('dist-bar-craft');
    if (elCraftStat) elCraftStat.textContent = `${craftCount} Specialists (${craftPct}%)`;
    if (elCraftBar) elCraftBar.style.width = `${craftPct}%`;

    const elCreativeStat = document.getElementById('dist-stat-creative');
    const elCreativeBar = document.getElementById('dist-bar-creative');
    if (elCreativeStat) elCreativeStat.textContent = `${creativeCount} Specialists (${creativePct}%)`;
    if (elCreativeBar) elCreativeBar.style.width = `${creativePct}%`;
  }

  // 2. Freelancers Management Table
  function renderFreelancersTable() {
    const tbody = document.getElementById('admin-workers-tbody');
    const searchVal = (document.getElementById('admin-search-input')?.value || '').toLowerCase().trim();
    const catVal = document.getElementById('admin-category-filter')?.value || '';

    if (!tbody) return;

    let filtered = allWorkers.filter(w => {
      const matchSearch = !searchVal ||
        w.name.toLowerCase().includes(searchVal) ||
        (w.craftTitle && w.craftTitle.toLowerCase().includes(searchVal)) ||
        (w.trade && w.trade.toLowerCase().includes(searchVal)) ||
        (w.skills && w.skills.some(s => s.toLowerCase().includes(searchVal)));

      const matchCat = !catVal || w.trade === catVal;

      return matchSearch && matchCat;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align:center; padding:32px; color:var(--color-secondary-muted);">
            No freelancers found matching criteria.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = filtered.map(w => {
      const isLive = w.status !== 'draft';
      return `
        <tr>
          <td>
            <div style="display:flex; align-items:center; gap:10px;">
              <img src="${escapeHtml(w.image)}" alt="${escapeHtml(w.name)}" style="width:36px; height:36px; border-radius:50%; object-fit:cover;">
              <div>
                <strong style="color:var(--color-secondary);">${escapeHtml(w.name)}</strong>
                <div style="font-size:0.75rem; color:var(--color-secondary-muted);">${escapeHtml(w.email || 'No email')}</div>
              </div>
            </div>
          </td>
          <td><span style="background:#F3F4F6; padding:3px 8px; border-radius:var(--radius-full); font-weight:500;">${escapeHtml(w.trade)}</span></td>
          <td><span style="font-size:0.85rem; color:var(--color-secondary); font-weight:500;">${escapeHtml(w.location || 'Remote')}</span></td>
          <td>
            <span style="color:#F59E0B; font-weight:700;">★ ${w.rating ? w.rating.toFixed(1) : '5.0'}</span>
            <span style="font-size:0.75rem; color:var(--color-secondary-muted);">(${w.reviewsCount || 0})</span>
          </td>
          <td>
            <button type="button" class="dash-btn dash-btn-sm toggle-status-btn" data-id="${w.id}"
              style="background:${isLive ? '#DCFCE7' : '#FEF3C7'}; color:${isLive ? '#15803D' : '#B45309'}; border:none;">
              ${isLive ? '● Live' : '○ Draft'}
            </button>
          </td>
          <td>
            <button type="button" class="dash-btn dash-btn-sm toggle-badge-btn" data-id="${w.id}"
              style="background:rgba(80,76,255,0.08); color:var(--color-primary); border:none;">
              ${escapeHtml(w.badge || 'PRO')}
            </button>
          </td>
          <td>
            <div style="display:flex; gap:6px;">
              <a href="profile.html?id=${encodeURIComponent(w.id)}" target="_blank" class="dash-btn-icon" title="View Public Profile">👁</a>
              <button type="button" class="dash-btn-icon delete delete-worker-btn" data-id="${w.id}" title="Delete Freelancer">✕</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    // Table Actions Listeners
    tbody.querySelectorAll('.toggle-status-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        window.FINDWORKER_DATA.toggleWorkerStatus(id);
        loadDataAndRender();
        showToast('Freelancer publication status toggled.');
      });
    });

    tbody.querySelectorAll('.toggle-badge-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const worker = window.FINDWORKER_DATA.getWorkerById(id);
        const newBadge = worker.badge === 'PRO' ? 'TOP RATED' : (worker.badge === 'TOP RATED' ? 'VERIFIED' : 'PRO');
        window.FINDWORKER_DATA.toggleWorkerBadge(id, newBadge);
        loadDataAndRender();
        showToast(`Badge updated to ${newBadge}.`);
      });
    });

    tbody.querySelectorAll('.delete-worker-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        if (confirm('Are you sure you want to remove this freelancer from the platform?')) {
          window.FINDWORKER_DATA.deleteWorkerProfile(id);
          loadDataAndRender();
          showToast('Freelancer removed from directory.');
        }
      });
    });

    // Populate Category Filter dropdown if empty
    const filterSelect = document.getElementById('admin-category-filter');
    if (filterSelect && filterSelect.options.length <= 1) {
      const cats = window.FINDWORKER_DATA.getAllCategories();
      cats.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        filterSelect.appendChild(opt);
      });
    }
  }

  // 3. Categories Table
  function renderCategoriesTable() {
    const tbody = document.getElementById('admin-categories-tbody');
    if (!tbody) return;

    const categories = window.FINDWORKER_DATA.getAllCategories();
    tbody.innerHTML = categories.map(cat => {
      const count = allWorkers.filter(w => w.trade === cat).length;
      return `
        <tr>
          <td><strong style="color:var(--color-secondary); font-size:0.95rem;">${escapeHtml(cat)}</strong></td>
          <td><span style="font-weight:700; color:var(--color-primary);">${count}</span> specialists listed</td>
          <td><span style="color:#10B981; font-weight:600;">● Active in Directory</span></td>
        </tr>
      `;
    }).join('');
  }

  // 4. Reviews Moderation Table
  function renderReviewsTable() {
    const tbody = document.getElementById('admin-reviews-tbody');
    if (!tbody) return;

    const reviews = window.FINDWORKER_DATA.getAllPlatformReviews();
    if (reviews.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align:center; padding:32px; color:var(--color-secondary-muted);">
            No reviews on platform.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = reviews.map(r => `
      <tr>
        <td>
          <a href="profile.html?id=${encodeURIComponent(r.workerId)}" target="_blank" style="color:var(--color-secondary); font-weight:700; text-decoration:none;">
            ${escapeHtml(r.workerName)} ↗
          </a>
          <div style="font-size:0.75rem; color:var(--color-secondary-muted);">${escapeHtml(r.workerTrade)}</div>
        </td>
        <td><strong>${escapeHtml(r.author || 'Anonymous Client')}</strong></td>
        <td><span style="color:#F59E0B; font-weight:700;">★ ${r.rating}</span></td>
        <td style="max-width:320px;">
          <div style="font-weight:600; font-size:0.8rem; margin-bottom:2px;">${escapeHtml(r.title || '')}</div>
          <div style="font-size:0.78rem; color:var(--color-secondary-muted);">${escapeHtml(r.comment || '')}</div>
        </td>
        <td style="font-size:0.75rem; color:var(--color-secondary-muted);">${escapeHtml(r.date || 'Recent')}</td>
        <td>
          <button type="button" class="dash-btn-icon delete delete-admin-review-btn"
            data-worker="${escapeHtml(r.workerId)}" data-review="${escapeHtml(r.id)}" title="Delete Review">✕</button>
        </td>
      </tr>
    `).join('');

    tbody.querySelectorAll('.delete-admin-review-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const workerId = btn.dataset.worker;
        const reviewId = btn.dataset.review;
        if (confirm('Delete this client review permanently?')) {
          window.FINDWORKER_DATA.moderateReview(workerId, reviewId, 'delete');
          loadDataAndRender();
          showToast('Review deleted from ledger.');
        }
      });
    });
  }

  // ── Event Handlers ────────────────────────────────────────────────────────
  function setupEventListeners() {
    // Tab Switching
    document.querySelectorAll('.dash-nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        if (tab) switchAdminTab(tab);
      });
    });

    document.querySelectorAll('[data-nav]').forEach(el => {
      el.addEventListener('click', () => {
        const nav = el.dataset.nav;
        if (nav) switchAdminTab(nav);
      });
    });

    // Mobile Hamburger
    const menuToggle = document.getElementById('dash-menu-toggle');
    const sidebar = document.getElementById('dash-sidebar');
    if (menuToggle && sidebar) {
      menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
      });
    }

    // Search and Filter Listeners
    const searchInput = document.getElementById('admin-search-input');
    const catFilter = document.getElementById('admin-category-filter');
    if (searchInput) searchInput.addEventListener('input', renderFreelancersTable);
    if (catFilter) catFilter.addEventListener('change', renderFreelancersTable);

    // Add Category Modal
    const modalCategory = document.getElementById('modal-add-category');
    const openCategoryBtn = document.getElementById('btn-admin-add-category');
    const closeCategoryBtn = document.getElementById('modal-category-close');
    const cancelCategoryBtn = document.getElementById('modal-category-cancel');
    const formCategory = document.getElementById('form-add-category');

    if (openCategoryBtn && modalCategory) {
      openCategoryBtn.addEventListener('click', () => {
        formCategory.reset();
        modalCategory.classList.add('active');
      });
    }
    if (closeCategoryBtn && modalCategory) {
      closeCategoryBtn.addEventListener('click', () => modalCategory.classList.remove('active'));
    }
    if (cancelCategoryBtn && modalCategory) {
      cancelCategoryBtn.addEventListener('click', () => modalCategory.classList.remove('active'));
    }

    if (formCategory) {
      formCategory.addEventListener('submit', (e) => {
        e.preventDefault();
        const catName = document.getElementById('input-new-cat-name').value.trim();
        if (catName) {
          window.FINDWORKER_DATA.addCategory(catName);
          loadDataAndRender();
          modalCategory.classList.remove('active');
          showToast(`✓ Category "${catName}" created!`);
        }
      });
    }

    // Add Worker Shortcut
    const addWorkerBtn = document.getElementById('btn-admin-add-worker');
    if (addWorkerBtn) {
      addWorkerBtn.addEventListener('click', () => {
        const name = prompt('Enter Freelancer Full Name:', 'Jane Doe');
        if (!name) return;
        const trade = prompt('Enter Freelancer Category (e.g. Web Development, UI/UX Design):', 'Web Development');
        if (!trade) return;

        const newProfile = {
          name: name,
          trade: trade,
          craftTitle: `Lead ${trade} Specialist`,
          image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85',
          location: 'Remote Available',
          experienceYears: 6,
          bio: `Independent ${trade.toLowerCase()} specialist available for direct commissions.`,
          skills: [trade, 'Creative Direction', 'Direct Practice'],
          platforms: [
            { name: 'Upwork', url: 'https://upwork.com', icon: 'upwork', badge: 'Top Rated Plus', actionText: 'Hire on Upwork', active: true },
            { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin', badge: 'Verified Pro', actionText: 'Connect on LinkedIn', active: true }
          ]
        };

        window.FINDWORKER_DATA.addWorkerProfile(newProfile);
        loadDataAndRender();
        showToast(`✓ Profile for ${name} added!`);
      });
    }

    // Overview Header Add Worker Shortcut
    const overviewAddWorkerBtn = document.getElementById('btn-admin-overview-add-worker');
    if (overviewAddWorkerBtn && addWorkerBtn) {
      overviewAddWorkerBtn.addEventListener('click', () => {
        addWorkerBtn.click();
      });
    }

    // Reset Platform to Factory
    const resetDataBtn = document.getElementById('btn-admin-reset-data');
    if (resetDataBtn) {
      resetDataBtn.addEventListener('click', () => {
        if (confirm('Reset platform data? This will clear custom workers and overrides.')) {
          localStorage.removeItem('findworker_custom_profiles');
          localStorage.removeItem('findworker_worker_overrides');
          localStorage.removeItem('findworker_deleted_workers');
          localStorage.removeItem('findworker_custom_platforms');
          loadDataAndRender();
          showToast('Platform reset to clean master seed state.');
        }
      });
    }

    // Admin Credentials Form Submit
    const formCreds = document.getElementById('form-admin-credentials');
    if (formCreds) {
      formCreds.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('input-admin-name');
        const emailInput = document.getElementById('input-admin-email');
        const currentPassInput = document.getElementById('input-admin-current-pass');
        const newPassInput = document.getElementById('input-admin-new-pass');
        const confirmPassInput = document.getElementById('input-admin-confirm-pass');
        const feedbackEl = document.getElementById('admin-creds-feedback');

        const newName = nameInput ? nameInput.value.trim() : '';
        const newEmail = emailInput ? emailInput.value.trim() : '';
        const currentPassword = currentPassInput ? currentPassInput.value : '';
        const newPassword = newPassInput ? newPassInput.value : '';
        const confirmPassword = confirmPassInput ? confirmPassInput.value : '';

        function setFeedback(msg, isSuccess) {
          if (!feedbackEl) return;
          feedbackEl.style.display = 'block';
          feedbackEl.style.background = isSuccess ? 'rgba(34, 197, 94, 0.12)' : 'rgba(239, 68, 68, 0.12)';
          feedbackEl.style.border = `1px solid ${isSuccess ? '#22C55E' : '#EF4444'}`;
          feedbackEl.style.color = isSuccess ? '#15803D' : '#B91C1C';
          feedbackEl.innerHTML = (isSuccess ? '✓ ' : '⚠ ') + escapeHtml(msg);
        }

        if (newPassword && newPassword !== confirmPassword) {
          setFeedback('New passwords do not match. Please re-enter carefully.', false);
          if (confirmPassInput) confirmPassInput.focus();
          return;
        }

        if (!window.FINDWORKER_AUTH || !window.FINDWORKER_AUTH.updateAdminCredentials) {
          setFeedback('Authentication service is not loaded.', false);
          return;
        }

        const result = window.FINDWORKER_AUTH.updateAdminCredentials({
          currentPassword,
          newEmail,
          newPassword,
          newName
        });

        if (!result.success) {
          setFeedback(result.message || 'Failed to update administrative credentials.', false);
          if (result.message && result.message.toLowerCase().includes('current password') && currentPassInput) {
            currentPassInput.focus();
            currentPassInput.select();
          }
          return;
        }

        // Success
        currentAdminUser = result.user;
        const nameEl = document.getElementById('admin-user-name');
        if (nameEl) nameEl.textContent = result.user.name;

        populateAdminCredentialsForm();
        setFeedback(result.message || 'Security credentials successfully updated!', true);
        showToast('✓ Administrator credentials updated successfully');
      });
    }

    // Toggle password inputs
    const btnToggleCurr = document.getElementById('btn-toggle-curr-pass');
    if (btnToggleCurr) {
      btnToggleCurr.addEventListener('click', () => {
        const input = document.getElementById('input-admin-current-pass');
        if (input) {
          const isPass = input.type === 'password';
          input.type = isPass ? 'text' : 'password';
          btnToggleCurr.textContent = isPass ? '🔒' : '👁';
        }
      });
    }

    const btnToggleNew = document.getElementById('btn-toggle-new-pass');
    if (btnToggleNew) {
      btnToggleNew.addEventListener('click', () => {
        const input = document.getElementById('input-admin-new-pass');
        if (input) {
          const isPass = input.type === 'password';
          input.type = isPass ? 'text' : 'password';
          btnToggleNew.textContent = isPass ? '🔒' : '👁';
        }
      });
    }

    // Sign Out
    const logoutBtn = document.getElementById('btn-admin-logout');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        if (confirm('Sign out from Admin Center?')) {
          window.FINDWORKER_AUTH.logout('admin-login.html');
        }
      });
    }

    // Hash Route Listeners
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['overview', 'freelancers', 'categories', 'reviews', 'settings'].includes(hash)) {
        switchAdminTab(hash);
      }
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (!initAdminSession()) return;
    setupEventListeners();
    loadDataAndRender();

    const hash = window.location.hash.replace('#', '');
    if (hash && ['overview', 'freelancers', 'categories', 'reviews', 'settings'].includes(hash)) {
      switchAdminTab(hash);
    } else {
      switchAdminTab('overview');
    }
  });

})();
