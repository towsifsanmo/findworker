/**
 * FindWorker — Role-Based Authentication & Session Architecture
 * Manages dual account roles (Admin & Freelancer), session state, and navigation sync.
 */

(function (global) {
  'use strict';

  const STORAGE_USERS = 'findworker_auth_users';
  const STORAGE_SESSION = 'findworker_auth_session';

  // Seed default demonstration accounts for testing & instant access
  const DEFAULT_USERS = [
    {
      id: 'user-admin-1',
      name: 'Platform Administrator',
      email: 'admin@findworker.io',
      password: 'admin123',
      role: 'admin',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      createdAt: '2026-01-01'
    },
    {
      id: 'user-freelancer-1',
      name: 'Julian Vance',
      email: 'julian@findworker.io',
      password: 'freelancer123',
      role: 'freelancer',
      workerId: 'worker-1',
      avatar: 'assets/images/hero_craftsman.jpg',
      createdAt: '2026-01-01'
    }
  ];

  function getStoredUsers() {
    try {
      const raw = localStorage.getItem(STORAGE_USERS);
      if (!raw) {
        localStorage.setItem(STORAGE_USERS, JSON.stringify(DEFAULT_USERS));
        return DEFAULT_USERS;
      }
      const users = JSON.parse(raw);
      // Ensure default users always exist (matched by ID so email/password changes persist)
      let modified = false;
      DEFAULT_USERS.forEach(def => {
        if (!users.some(u => u.id === def.id)) {
          users.push(def);
          modified = true;
        }
      });
      if (modified) {
        localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
      }
      return users;
    } catch (e) {
      return DEFAULT_USERS;
    }
  }

  function saveStoredUsers(users) {
    try {
      localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
      return true;
    } catch (e) {
      return false;
    }
  }

  function getCurrentUser() {
    try {
      const raw = localStorage.getItem(STORAGE_SESSION);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  function setCurrentSession(user) {
    try {
      if (!user) {
        localStorage.removeItem(STORAGE_SESSION);
      } else {
        localStorage.setItem(STORAGE_SESSION, JSON.stringify(user));
      }
      dispatchAuthChange();
      return true;
    } catch (e) {
      return false;
    }
  }

  function dispatchAuthChange() {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('findworker:auth-changed', { detail: { user: getCurrentUser() } }));
    }
  }

  // ── Authentication API ─────────────────────────────────────────────────────

  function login(email, password) {
    if (!email || !password) {
      return { success: false, message: 'Please enter both email and password.' };
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = password.trim();
    const users = getStoredUsers();

    const user = users.find(u => u.email.toLowerCase() === cleanEmail);
    if (!user) {
      return { success: false, message: 'No account registered with this email address.' };
    }

    if (user.password !== cleanPass) {
      return { success: false, message: 'Incorrect password. Please verify your credentials.' };
    }

    // If freelancer, verify matching worker profile
    let workerProfile = null;
    if (user.role === 'freelancer' && user.workerId && global.FINDWORKER_DATA) {
      workerProfile = global.FINDWORKER_DATA.getWorkerById(user.workerId);
    }

    const sessionUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      workerId: user.workerId || null,
      avatar: (workerProfile && workerProfile.image) ? workerProfile.image : (user.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80')
    };

    setCurrentSession(sessionUser);
    return { success: true, user: sessionUser };
  }

  function signupFreelancer(formData) {
    if (!formData || !formData.email || !formData.password || !formData.name) {
      return { success: false, message: 'Please fill out all required fields.' };
    }

    const cleanEmail = formData.email.trim().toLowerCase();
    const users = getStoredUsers();

    if (users.some(u => u.email.toLowerCase() === cleanEmail)) {
      return { success: false, message: 'An account is already registered with this email. Please sign in.' };
    }

    const trade = formData.trade || 'Web Development';
    const craftTitle = formData.craftTitle || `Independent ${trade} Specialist`;
    const exp = Number(formData.experience) || 5;
    const location = formData.location || 'Remote Available';
    const bio = formData.bio || `Independent ${trade.toLowerCase()} specialist focused on high-quality delivery.`;
    const skills = Array.isArray(formData.skills) ? formData.skills : [trade, 'Creative Direction', 'System Architecture'];

    const avatarPool = [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=85',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=85'
    ];
    const chosenAvatar = formData.image || avatarPool[Math.floor(Math.random() * avatarPool.length)];

    const workerId = `custom-worker-${Date.now()}`;
    const newWorker = {
      id: workerId,
      name: formData.name.trim(),
      trade: trade,
      craftTitle: craftTitle,
      image: chosenAvatar,
      badge: 'PRO',
      badgeLabel: 'Independent Professional',
      rating: 5.0,
      reviewsCount: 0,
      location: location,
      experienceYears: exp,
      availability: 'Available Today',
      status: 'published',
      language: 'English',
      email: cleanEmail,
      phone: '+1 (555) 019-2831',
      website: `${formData.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.studio`,
      bio: bio,
      about: bio,
      skills: skills,
      certifications: ['Verified Independent Specialist', 'Directory Certified'],
      guarantee: 'Direct contact, 0% platform intermediary commission.',
      platforms: [
        { name: 'Upwork', url: 'https://upwork.com', icon: 'upwork', badge: 'Top Rated Plus', actionText: 'Hire on Upwork', active: true },
        { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin', badge: 'Verified Pro', actionText: 'Connect on LinkedIn', active: true },
        { name: 'GitHub', url: 'https://github.com', icon: 'github', badge: 'Active Repositories', actionText: 'Inspect Code', active: true }
      ],
      experience: [
        {
          role: craftTitle,
          company: 'Independent Practice',
          period: '2022 — Present',
          description: `Delivering bespoke ${trade.toLowerCase()} solutions, creative architecture, and direct client collaborations.`
        }
      ],
      portfolio: [
        {
          title: `${craftTitle} Signature Project`,
          category: trade,
          year: new Date().getFullYear().toString(),
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85',
          description: `A selected ${trade.toLowerCase()} engagement showcasing independent creative rigor, production-grade output, and client impact.`,
          tags: skills.slice(0, 3)
        }
      ],
      reviews: []
    };

    // Add profile to data layer
    if (global.FINDWORKER_DATA && typeof global.FINDWORKER_DATA.addWorkerProfile === 'function') {
      global.FINDWORKER_DATA.addWorkerProfile(newWorker);
    } else {
      const existingCustom = JSON.parse(localStorage.getItem('findworker_custom_profiles') || '[]');
      existingCustom.unshift(newWorker);
      localStorage.setItem('findworker_custom_profiles', JSON.stringify(existingCustom));
    }

    // Create user credential entry
    const newUser = {
      id: `user-${Date.now()}`,
      name: formData.name.trim(),
      email: cleanEmail,
      password: formData.password.trim(),
      role: 'freelancer',
      workerId: workerId,
      avatar: chosenAvatar,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveStoredUsers(users);

    const sessionUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      workerId: workerId,
      avatar: chosenAvatar
    };

    setCurrentSession(sessionUser);
    return { success: true, user: sessionUser, worker: newWorker };
  }

  function logout(redirectTo = 'index.html#home') {
    setCurrentSession(null);
    if (typeof window !== 'undefined') {
      if (redirectTo) {
        window.location.href = redirectTo;
      } else {
        window.location.reload();
      }
    }
  }

  function changePassword(oldPassword, newPassword) {
    const session = getCurrentUser();
    if (!session) return { success: false, message: 'You must be logged in to change your password.' };

    const users = getStoredUsers();
    const userIndex = users.findIndex(u => u.id === session.id);
    if (userIndex === -1) return { success: false, message: 'User record not found.' };

    if (users[userIndex].password !== oldPassword.trim()) {
      return { success: false, message: 'Current password does not match.' };
    }

    users[userIndex].password = newPassword.trim();
    saveStoredUsers(users);
    return { success: true, message: 'Password updated successfully.' };
  }

  function updateCurrentUser(updates) {
    const session = getCurrentUser();
    if (!session) return null;

    const users = getStoredUsers();
    const userIndex = users.findIndex(u => u.id === session.id);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], ...updates };
      saveStoredUsers(users);
    }

    const updatedSession = { ...session, ...updates };
    setCurrentSession(updatedSession);
    return updatedSession;
  }

  function isLoggedIn() {
    return !!getCurrentUser();
  }

  function isAdmin() {
    const u = getCurrentUser();
    return !!u && u.role === 'admin';
  }

  function isFreelancer() {
    const u = getCurrentUser();
    return !!u && u.role === 'freelancer';
  }

  function requireFreelancer(redirectUrl = 'index.html#signin') {
    const user = getCurrentUser();
    if (!user) {
      window.location.href = redirectUrl;
      return null;
    }
    if (user.role !== 'freelancer') {
      window.location.href = 'admin.html';
      return null;
    }
    return user;
  }

  function getAdminAccount() {
    const users = getStoredUsers();
    return users.find(u => u.role === 'admin') || DEFAULT_USERS[0];
  }

  function updateAdminCredentials({ currentPassword, newEmail, newPassword, newName }) {
    const session = getCurrentUser();
    if (!session || session.role !== 'admin') {
      return { success: false, message: 'Administrator session required to modify credentials.' };
    }

    const users = getStoredUsers();
    const adminIndex = users.findIndex(u => u.id === session.id && u.role === 'admin');
    if (adminIndex === -1) {
      return { success: false, message: 'Admin account record not found.' };
    }

    const adminUser = users[adminIndex];

    // Verify current password
    if (!currentPassword || adminUser.password !== currentPassword.trim()) {
      return { success: false, message: 'Current administrator password is incorrect.' };
    }

    const updates = {};

    // Validate new email if provided
    if (newEmail && newEmail.trim().toLowerCase() !== adminUser.email.toLowerCase()) {
      const cleanEmail = newEmail.trim().toLowerCase();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(cleanEmail)) {
        return { success: false, message: 'Please provide a valid email address.' };
      }
      const emailExists = users.some((u, idx) => idx !== adminIndex && u.email.toLowerCase() === cleanEmail);
      if (emailExists) {
        return { success: false, message: 'An account with this email address already exists.' };
      }
      updates.email = cleanEmail;
    }

    // Validate new password if provided
    if (newPassword && newPassword.trim()) {
      const cleanPass = newPassword.trim();
      if (cleanPass.length < 6) {
        return { success: false, message: 'New password must be at least 6 characters.' };
      }
      updates.password = cleanPass;
    }

    // Validate new name if provided
    if (newName && newName.trim()) {
      updates.name = newName.trim();
    }

    if (Object.keys(updates).length === 0) {
      return { success: false, message: 'No credential changes specified.' };
    }

    // Apply updates
    users[adminIndex] = { ...adminUser, ...updates };
    saveStoredUsers(users);

    // Update active session
    const updatedSession = { ...session };
    if (updates.email) updatedSession.email = updates.email;
    if (updates.name) updatedSession.name = updates.name;
    setCurrentSession(updatedSession);

    return {
      success: true,
      message: 'Admin credentials updated successfully. Please use these new credentials for future logins.',
      user: updatedSession
    };
  }

  function requireAdmin(redirectUrl = 'admin-login.html') {
    const user = getCurrentUser();
    if (!user) {
      window.location.href = redirectUrl;
      return null;
    }
    if (user.role !== 'admin') {
      window.location.href = redirectUrl;
      return null;
    }
    return user;
  }

  // ── Universal Header Authentication Sync ──────────────────────────────────
  function initHeaderAuth() {
    const user = getCurrentUser();
    const loginBtns = document.querySelectorAll('#header-login-btn');
    const mobileActions = document.querySelectorAll('.mobile-nav-actions');

    loginBtns.forEach(btn => {
      if (!user) {
        // Logged Out State
        btn.setAttribute('href', 'index.html#signin');
        btn.className = 'primary-btn no-min-width go-to-directory-link';
        btn.innerHTML = `
          <div class="btn-text">Sign In</div>
          <div class="btn-dot"></div>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        `;
      } else if (user.role === 'admin') {
        // Admin Logged In
        btn.setAttribute('href', 'admin.html');
        btn.className = 'primary-btn no-min-width header-user-capsule-btn';
        btn.innerHTML = `
          <span class="user-capsule-role-badge">ADMIN</span>
          <span class="user-capsule-name">Admin Panel</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        `;
      } else {
        // Freelancer Logged In
        btn.setAttribute('href', 'dashboard.html');
        btn.className = 'primary-btn no-min-width header-user-capsule-btn';
        const avatarSrc = user.avatar || 'assets/images/hero_craftsman.jpg';
        btn.innerHTML = `
          <img src="${avatarSrc}" alt="${user.name}" class="user-capsule-avatar">
          <span class="user-capsule-name">Dashboard</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        `;
      }
    });

    // Update Mobile Nav Drawers
    mobileActions.forEach(wrap => {
      if (!user) {
        wrap.innerHTML = `
          <a href="index.html#signin" class="btn btn-outline" style="width: 100%; text-align: center; text-decoration: none;">Sign In</a>
          <a href="index.html#signup" class="btn btn-primary" style="width: 100%; text-align: center; text-decoration: none;">Sign Up as Freelancer ↗</a>
        `;
      } else if (user.role === 'admin') {
        wrap.innerHTML = `
          <a href="admin.html" class="btn btn-primary" style="width: 100%; text-align: center; text-decoration: none;">✦ Admin Dashboard</a>
          <button type="button" class="btn btn-outline" id="global-logout-btn" style="width: 100%;">Sign Out (${user.name})</button>
        `;
        const logoutBtn = wrap.querySelector('#global-logout-btn');
        if (logoutBtn) logoutBtn.addEventListener('click', () => logout('index.html#home'));
      } else {
        wrap.innerHTML = `
          <a href="dashboard.html" class="btn btn-primary" style="width: 100%; text-align: center; text-decoration: none;">⚡ Freelancer Dashboard</a>
          ${user.workerId ? `<a href="profile.html?id=${user.workerId}" class="btn btn-outline" style="width: 100%; text-align: center; text-decoration: none;">View My Public Profile ↗</a>` : ''}
          <button type="button" class="btn btn-outline" id="global-logout-btn" style="width: 100%;">Sign Out (${user.name})</button>
        `;
        const logoutBtn = wrap.querySelector('#global-logout-btn');
        if (logoutBtn) logoutBtn.addEventListener('click', () => logout('index.html#home'));
      }
    });
  }

  // Auto-init on DOMContentLoaded
  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      getStoredUsers(); // ensure seeding
      initHeaderAuth();
    });
    window.addEventListener('findworker:auth-changed', initHeaderAuth);
  }

  // Export to global scope
  global.FINDWORKER_AUTH = {
    login,
    signupFreelancer,
    logout,
    getCurrentUser,
    updateCurrentUser,
    changePassword,
    isLoggedIn,
    isAdmin,
    isFreelancer,
    requireFreelancer,
    requireAdmin,
    updateAdminCredentials,
    getAdminAccount,
    initHeaderAuth,
    getStoredUsers
  };

})(typeof window !== 'undefined' ? window : this);
