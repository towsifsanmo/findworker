/**
 * FindWorker — Dedicated Blog & Field Notes Controller
 * Manages article rendering, sticky TOC scrollspy, clap persistence, and share toasts.
 */

(function () {
  'use strict';

  // 1. Resolve Active Article ID from URL Query String
  const urlParams = new URLSearchParams(window.location.search);
  const requestedId = urlParams.get('id') || 'article-1';

  if (!window.FINDWORKER_BLOG) {
    console.error('FINDWORKER_BLOG dataset not loaded.');
    return;
  }

  const article = window.FINDWORKER_BLOG.getArticleById(requestedId);

  // Update Page Meta
  document.title = `${article.title} — Field Notes | FindWorker`;

  // 2. Elements Cache
  const readingProgressBar = document.getElementById('reading-progress-bar');
  const articleCategoryBadge = document.getElementById('article-category-badge');
  const articleKickerCat = document.getElementById('article-kicker-cat');
  const articleTitle = document.getElementById('article-title');
  const articleStandfirst = document.getElementById('article-standfirst');

  // Byline Elements
  const bylineAvatar = document.getElementById('byline-avatar');
  const bylineAuthorName = document.getElementById('byline-author-name');
  const bylineAuthorRate = document.getElementById('byline-author-rate');
  const bylineAuthorRole = document.getElementById('byline-author-role');
  const bylineDate = document.getElementById('byline-date');
  const bylineReadTime = document.getElementById('byline-read-time');
  const bylineProfileBtn = document.getElementById('byline-profile-btn');

  // Media
  const articleHeroImg = document.getElementById('article-hero-img');
  const articleHeroCaption = document.getElementById('article-hero-caption');

  // Sidebar & Prose
  const sidebarTocNav = document.getElementById('sidebar-toc-nav');
  const statCategory = document.getElementById('stat-category');
  const statReadTime = document.getElementById('stat-read-time');
  const sidebarClapBtn = document.getElementById('sidebar-clap-btn');
  const sidebarClapCount = document.getElementById('sidebar-clap-count');
  const shareCopyBtn = document.getElementById('share-copy-btn');

  const articleProse = document.getElementById('article-prose');
  const articleTagsCloud = document.getElementById('article-tags-cloud');

  // Bottom Applaud
  const bottomClapBtn = document.getElementById('bottom-clap-btn');
  const bottomClapCount = document.getElementById('bottom-clap-count');
  const bottomShareBtn = document.getElementById('bottom-share-btn');

  // Author Spotlight
  const authorSpotlightAvatar = document.getElementById('author-spotlight-avatar');
  const authorSpotlightName = document.getElementById('author-spotlight-name');
  const authorSpotlightRate = document.getElementById('author-spotlight-rate');
  const authorSpotlightCraft = document.getElementById('author-spotlight-craft');
  const authorSpotlightBio = document.getElementById('author-spotlight-bio');
  const authorSpotlightProfileBtn = document.getElementById('author-spotlight-profile-btn');

  // Navigation & Related
  const storyPaginationNav = document.getElementById('story-pagination-nav');
  const relatedStoriesGrid = document.getElementById('related-stories-grid');

  // Toast Container
  const toastContainer = document.getElementById('toast-container');

  // 3. Render Article Data
  function renderArticle() {
    if (articleCategoryBadge) articleCategoryBadge.textContent = article.category;
    if (articleKickerCat) articleKickerCat.textContent = article.category;
    if (articleTitle) articleTitle.textContent = article.title;
    if (articleStandfirst) articleStandfirst.textContent = article.standfirst;

    // Byline
    if (bylineAvatar) {
      bylineAvatar.src = article.author.avatar;
      bylineAvatar.alt = article.author.name;
    }
    if (bylineAuthorName) bylineAuthorName.textContent = article.author.name;
    if (bylineAuthorRate) bylineAuthorRate.textContent = article.author.hourlyRate;
    if (bylineAuthorRole) bylineAuthorRole.textContent = article.author.role;
    if (bylineDate) bylineDate.textContent = article.date;
    if (bylineReadTime) bylineReadTime.textContent = article.readTime;
    if (bylineProfileBtn) {
      bylineProfileBtn.href = `profile.html?id=${article.author.id}`;
      bylineProfileBtn.innerHTML = `<span>View Profile &amp; Platforms</span> <span>→</span>`;
    }

    // Media
    if (articleHeroImg) {
      articleHeroImg.src = article.heroImage;
      articleHeroImg.alt = article.title;
    }
    if (articleHeroCaption) {
      articleHeroCaption.textContent = article.caption;
    }

    // Sidebar Stats
    if (statCategory) statCategory.textContent = article.category;
    if (statReadTime) statReadTime.textContent = article.readTime;

    // Prose
    if (articleProse) {
      articleProse.innerHTML = article.proseHtml;
    }

    // Tags Cloud
    if (articleTagsCloud) {
      articleTagsCloud.innerHTML = article.tags.map(tag => `
        <span class="tag-pill">#${tag}</span>
      `).join('');
    }

    // Render TOC
    if (sidebarTocNav && article.toc) {
      sidebarTocNav.innerHTML = article.toc.map((item, idx) => `
        <a href="#${item.id}" class="toc-nav-item ${idx === 0 ? 'active' : ''}" data-target-id="${item.id}">
          ${item.label}
        </a>
      `).join('');

      // Bind TOC smooth scroll
      sidebarTocNav.querySelectorAll('.toc-nav-item').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('data-target-id');
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            history.replaceState(null, '', `#${targetId}`);
          }
        });
      });
    }

    // Author Spotlight Dossier Card
    if (authorSpotlightAvatar) {
      authorSpotlightAvatar.src = article.author.avatar;
      authorSpotlightAvatar.alt = article.author.name;
    }
    if (authorSpotlightName) authorSpotlightName.textContent = article.author.name;
    if (authorSpotlightRate) authorSpotlightRate.textContent = article.author.hourlyRate;
    if (authorSpotlightCraft) authorSpotlightCraft.textContent = `${article.author.role} • ${article.author.location}`;
    if (authorSpotlightBio) authorSpotlightBio.textContent = article.author.bio;
    if (authorSpotlightProfileBtn) {
      authorSpotlightProfileBtn.href = `profile.html?id=${article.author.id}`;
    }

    // Update Claps
    const initialClaps = window.FINDWORKER_BLOG.getClapCount(article.id);
    if (sidebarClapCount) sidebarClapCount.textContent = initialClaps;
    if (bottomClapCount) bottomClapCount.textContent = initialClaps;

    // Previous / Next Story Pagination
    const { prev, next } = window.FINDWORKER_BLOG.getNextAndPrevArticles(article.id);
    if (storyPaginationNav) {
      storyPaginationNav.innerHTML = `
        <a href="blog.html?id=${prev.id}" class="story-pag-card">
          <span class="story-pag-dir">← PREVIOUS ESSAY</span>
          <h5 class="story-pag-title">${prev.title}</h5>
        </a>
        <a href="blog.html?id=${next.id}" class="story-pag-card" style="text-align: right;">
          <span class="story-pag-dir">NEXT ESSAY →</span>
          <h5 class="story-pag-title">${next.title}</h5>
        </a>
      `;
    }

    // Related Stories
    const related = window.FINDWORKER_BLOG.getRelatedArticles(article.id, 3);
    if (relatedStoriesGrid) {
      relatedStoriesGrid.innerHTML = related.map(item => `
        <a href="blog.html?id=${item.id}" class="related-card">
          <div class="related-card-img-wrap">
            <img src="${item.heroImage}" alt="${item.title}" loading="lazy">
          </div>
          <div class="related-card-body">
            <div class="related-card-meta">${item.category} • ${item.readTime}</div>
            <h4 class="related-card-title">${item.title}</h4>
            <span class="related-card-readlink">Read Essay →</span>
          </div>
        </a>
      `).join('');
    }
  }

  // 4. Clapping Handlers
  function handleClap() {
    const updated = window.FINDWORKER_BLOG.incrementClap(article.id);
    if (sidebarClapCount) sidebarClapCount.textContent = updated;
    if (bottomClapCount) bottomClapCount.textContent = updated;

    if (sidebarClapBtn) sidebarClapBtn.classList.add('clapped');
    if (bottomClapBtn) bottomClapBtn.classList.add('clapped');

    showToast(`👏 Applauded! Total claps: ${updated}`);
  }

  if (sidebarClapBtn) sidebarClapBtn.addEventListener('click', handleClap);
  if (bottomClapBtn) bottomClapBtn.addEventListener('click', handleClap);

  // 5. Share / Copy Link Handler
  function handleShare() {
    const shareUrl = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        showToast('✓ Article link copied to clipboard.');
      }).catch(() => {
        showToast('Link copied: ' + shareUrl);
      });
    } else {
      showToast('Link: ' + shareUrl);
    }
  }

  if (shareCopyBtn) shareCopyBtn.addEventListener('click', handleShare);
  if (bottomShareBtn) bottomShareBtn.addEventListener('click', handleShare);

  // 6. Toast Notification Helper
  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // 7. Reading Progress & TOC Scrollspy
  window.addEventListener('scroll', () => {
    // Reading Progress
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0 && readingProgressBar) {
      const scrolled = window.scrollY;
      const progress = Math.min(100, Math.max(0, (scrolled / docHeight) * 100));
      readingProgressBar.style.width = `${progress}%`;
    }

    // Scrollspy for TOC
    if (!articleProse) return;
    const headings = articleProse.querySelectorAll('h2[id]');
    let activeId = '';

    headings.forEach(heading => {
      const rect = heading.getBoundingClientRect();
      if (rect.top <= 140) {
        activeId = heading.id;
      }
    });

    if (sidebarTocNav && activeId) {
      sidebarTocNav.querySelectorAll('.toc-nav-item').forEach(item => {
        if (item.getAttribute('data-target-id') === activeId) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  }, { passive: true });

  // 8. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('active');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mobileDrawer.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const footerBackToTop = document.getElementById('footer-back-to-top');
  if (footerBackToTop) {
    footerBackToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Initialize
  renderArticle();

})();
