/**
 * FindWorker — Master Blog & Field Notes Dataset
 * Contains rich editorial essays authored by verified independent specialists in the directory.
 * Strictly uses existing colors, fonts, and data models.
 */

(function (global) {
  'use strict';

  const BLOG_ARTICLES = [
    {
      id: 'article-1',
      title: 'A portfolio is more than a grid of finished work',
      standfirst: 'Show the decisions, experiments, and architectural trade-offs that made the final build matter. How senior independent makers turn static case studies into irresistible client conversations.',
      category: 'DESIGN & CRAFT',
      date: 'October 24, 2026',
      readTime: '5 min read',
      readMinutes: 5,
      claps: 142,
      author: {
        id: 'worker-2',
        name: 'Elena Rostova',
        role: 'Principal Design Systems Architect & Staff Engineer',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=85',
        hourlyRate: '$125/hr',
        rateNum: 125,
        location: 'Berlin, DE / Remote',
        rating: '4.98',
        reviewsCount: 192,
        bio: 'Elena is a senior product architect with 9+ years architecting enterprise design systems, token pipelines, and high-frequency workflow interfaces across Figma, Web Components, and TypeScript.'
      },
      heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85',
      caption: 'Exploratory design tokens, spacing scales, and typography hierarchy during the redesign of an enterprise design system.',
      toc: [
        { id: 'toc-death-grid', label: '1. The Death of the Dribbble Grid' },
        { id: 'toc-decision-log', label: '2. Anatomy of a Decision Log' },
        { id: 'toc-architecture', label: '3. Architecture Behind the Pixels' },
        { id: 'toc-framing-value', label: '4. Framing Value in Client Discovery' }
      ],
      proseHtml: `
        <p class="drop-cap-p">
          Most design portfolios suffer from the same quiet flaw: they treat digital products as static, decorative art rather than living instruments of human behavior. When prospective clients land on a three-column masonry grid of glossy device mockups, they see aesthetics—but they cannot see judgment.
        </p>
        <p>
          In a market increasingly flooded with automated templates and surface-level rebrands, the independent practitioners commanding premium rates are not those with the shiniest mockups. They are the creators who treat their portfolio as an intellectual audit trail.
        </p>

        <div class="editorial-takeaways-box">
          <span class="takeaways-badge">FIELD NOTES SUMMARY</span>
          <h3 class="takeaways-heading">Four Principles for Editorial Portfolios</h3>
          <ul class="takeaways-list">
            <li><span class="takeaways-check">✓</span> <span><strong>Document the constraints:</strong> Every client project is shaped by tight deadlines, tech debt, and conflicting goals. Stating them first grounds your triumph in reality.</span></li>
            <li><span class="takeaways-check">✓</span> <span><strong>Show rejected variants:</strong> Reveal the two paths you explored and consciously chose not to take. Seniority is defined by what you choose to omit.</span></li>
            <li><span class="takeaways-check">✓</span> <span><strong>Quantify behavioral shift:</strong> Reframe "redesigned the onboarding" into "reduced checkout abandonment by 18.4% across 82,000 monthly transactions."</span></li>
            <li><span class="takeaways-check">✓</span> <span><strong>Provide inspectable tokens:</strong> Give engineers and directors a taste of your file hygiene, design tokens, and component architecture.</span></li>
          </ul>
        </div>

        <h2 id="toc-death-grid">1. The Death of the Dribbble Grid</h2>
        <p>
          For over a decade, creative platforms trained us to compress multi-month product engineering initiatives into a 1600×1200 thumbnail. That visual shorthand served a purpose when the primary objective was aesthetic inspiration. But when an enterprise founder or VP of Product is deciding whether to entrust you with a $45,000 redesign, they are not shopping for wallpapers.
        </p>
        <p>
          They are assessing risk. They want to know: What happens when the database query returns 10,000 rows instead of three? How does your type hierarchy scale to German localization? What trade-offs were negotiated between marketing requirements and accessibility compliance?
        </p>

        <blockquote class="editorial-pullquote">
          <p>“Clients never hire you for the final mockup. They hire you for the hundreds of micro-decisions that kept the project from sliding into chaos.”</p>
          <cite>— Elena Rostova, Principal Systems Architect</cite>
        </blockquote>

        <h2 id="toc-decision-log">2. Anatomy of a Decision Log</h2>
        <p>
          The most effective case study structure we have observed on FindWorker is the <em>Decision Log</em> format. Rather than following a generic "Discover, Define, Design, Deliver" chronological recap, senior independents anchor each project around three critical forks in the road:
        </p>
        <ul>
          <li><strong>The Architectural Fork:</strong> Choosing between custom component logic versus headless library integration.</li>
          <li><strong>The Usability Friction:</strong> When user testing revealed that a clever interaction actually increased cognitive load, and how it was simplified.</li>
          <li><strong>The Performance Boundary:</strong> Keeping page load under 1.2 seconds while preserving high-contrast typography and fluid transitions.</li>
        </ul>

        <div class="editorial-callout-tip">
          <div class="callout-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          </div>
          <div class="callout-content">
            <strong>Practical Takeaway for Independent Makers:</strong>
            Dedicate at least 30% of your case study scroll depth to wireframes with handwritten annotations and design system token specs. It signals immediate maturity to engineering leads.
          </div>
        </div>

        <h2 id="toc-architecture">3. Architecture Behind the Pixels</h2>
        <p>
          Great software design is invisible when it works. When you showcase interactive prototypes, include a lightweight breakdown of your design tokens: font weights, semantic color variables, spacing units, and responsive breakpoints.
        </p>
        <p>
          When prospective collaborators see that your Figma files map 1:1 to modern CSS custom properties and clean HTML/JS components, the fear of expensive design-to-development handoffs evaporates. You become an asset before the first invoice is even written.
        </p>

        <h2 id="toc-framing-value">4. Framing Value in Client Discovery</h2>
        <p>
          Finally, remember that the goal of a portfolio is not to close the deal on the spot—it is to pre-qualify the conversation. When an inbound inquiry starts with "We read your case study on the checkout redesign and loved how you handled state management," the dynamic shifts from a defensive bidding war into a peer-to-peer advisory relationship.
        </p>
        <p>
          That quiet confidence is what separates the best independent creators from the rest of the market.
        </p>
      `,
      tags: ['Design Systems', 'UX Architecture', 'Portfolio Strategy', 'Figma Tokens', 'Client Discovery']
    },
    {
      id: 'article-2',
      title: 'The quiet confidence of a clear point of view',
      standfirst: 'How independent creators make their practice instantly recognizable without shouting, discounting rates, or chasing algorithms.',
      category: 'PRACTICE',
      date: 'October 18, 2026',
      readTime: '6 min read',
      readMinutes: 6,
      claps: 198,
      author: {
        id: 'worker-1',
        name: 'Julian Vance',
        role: 'Master Joiner & Architectural Woodcraft',
        avatar: 'assets/images/hero_craftsman.jpg',
        hourlyRate: '$75/hr',
        rateNum: 75,
        location: 'Central & North District',
        rating: '4.98',
        reviewsCount: 312,
        bio: 'Guild-certified master joiner with 16 years creating heirloom architectural millwork, bespoke walnut cabinetry, and sustainable timber installations.'
      },
      heroImage: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=1400&q=85',
      caption: 'A quiet workshop bench configured for deep, uninterrupted creative and engineering flow.',
      toc: [
        { id: 'toc-race-bottom', label: '1. The Race to the Bottom' },
        { id: 'toc-saying-no', label: '2. Curating What You Say No To' },
        { id: 'toc-opinionated', label: '3. Opinionated Engineering & Craft' },
        { id: 'toc-conviction', label: '4. Why Clients Pay for Conviction' }
      ],
      proseHtml: `
        <p class="drop-cap-p">
          In the early days of independent work, the prevailing instinct is to be everything to everyone. You list fourteen services, twelve CAD tools, and declare yourself equally adept at low-cost repairs and museum-grade architectural restorations.
        </p>
        <p>
          It feels safe, but it produces an insidious side-effect: you become a commodity. When you match everyone else’s keyword checklist, clients have only one variable left on which to evaluate you: price.
        </p>

        <div class="editorial-takeaways-box">
          <span class="takeaways-badge">STRATEGY CHECKPOINT</span>
          <h3 class="takeaways-heading">The Pillars of Opinionated Practice</h3>
          <ul class="takeaways-list">
            <li><span class="takeaways-check">✓</span> <span><strong>Define your craft creed:</strong> Choose three core disciplines that you master deeply rather than fifteen you dabble in.</span></li>
            <li><span class="takeaways-check">✓</span> <span><strong>Publish transparent working standards:</strong> Outline your workshop cadence, communication rules, and milestone delivery upfront.</span></li>
            <li><span class="takeaways-check">✓</span> <span><strong>Reject ill-fitting projects early:</strong> A polite referral to another specialist earns more long-term goodwill than taking a bad-fit contract.</span></li>
          </ul>
        </div>

        <h2 id="toc-race-bottom">1. The Race to the Bottom</h2>
        <p>
          Platforms that prioritize keyword bidding inadvertently train clients to view talent like interchangeable parts. But real physical or digital craft—building a resilient build that lasts decades and delights users—is not interchangeable.
        </p>
        <p>
          When you refuse to engage in frantic self-promotion and instead anchor your reputation on deliberate craftsmanship, something fascinating happens: clients with discerning taste start seeking you out.
        </p>

        <blockquote class="editorial-pullquote">
          <p>“Specialization is not about limiting your craft; it is about respecting your time enough to only do work you can execute with absolute mastery.”</p>
          <cite>— Julian Vance, Master Joiner</cite>
        </blockquote>

        <h2 id="toc-saying-no">2. Curating What You Say No To</h2>
        <p>
          Your brand is not what you say you do; it is defined by what you refuse to touch. When a prospective client asks for an insecure workaround or shortcuts that jeopardize structural integrity, the senior craftsman says no—and explains why.
        </p>
        <p>
          Clients do not want yes-men. They hire experienced independents specifically to protect them from their own unvetted impulses.
        </p>

        <h2 id="toc-opinionated">3. Opinionated Engineering & Craft</h2>
        <p>
          Having an opinionated foundation means you have solved the core challenges dozens of times. You know how material selection affects longevity. You know how sustainable finishes age over time. You know how precise tolerances prevent failures years down the road.
        </p>
        <p>
          This velocity is what makes an independent senior creator more productive than an entire bloated committee.
        </p>

        <h2 id="toc-conviction">4. Why Clients Pay for Conviction</h2>
        <p>
          When you present your solutions with calm conviction, backed by evidence and past case studies, trust is established in minutes. The negotiation changes from "Can you do this for less?" to "When can we get on your calendar?"
        </p>
      `,
      tags: ['Independent Practice', 'Master Craft', 'Positioning', 'Pricing Strategy', 'Client Trust']
    },
    {
      id: 'article-3',
      title: 'Finding the right people, not just the right keywords',
      standfirst: 'Why a portfolio-first directory makes client-talent discovery more human, transparent, and built on lasting trust.',
      category: 'INDEPENDENCE',
      date: 'October 11, 2026',
      readTime: '4 min read',
      readMinutes: 4,
      claps: 115,
      author: {
        id: 'worker-3',
        name: 'Mateo Rossi',
        role: 'Master Electrician & Smart Home Engineer',
        avatar: 'assets/images/craftsman_welder.jpg',
        hourlyRate: '$85/hr',
        rateNum: 85,
        location: 'Metro & West Suburbs',
        rating: '4.99',
        reviewsCount: 248,
        bio: 'Licensed master electrician with 14 years specializing in residential panel modernization, architectural lighting, and off-grid solar storage.'
      },
      heroImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=85',
      caption: 'Schematic drawings, circuit maps, and architectural specifications for a residential modernization project.',
      toc: [
        { id: 'toc-algorithmic-fatigue', label: '1. Algorithmic Keyword Overload' },
        { id: 'toc-proof-of-craft', label: '2. Seeing Proof of Craft First' },
        { id: 'toc-zero-commission', label: '3. The Zero-Commission Philosophy' },
        { id: 'toc-partnerships', label: '4. Building Collaborative Guilds' }
      ],
      proseHtml: `
        <p class="drop-cap-p">
          Traditional freelance marketplaces were built on an industrial hiring paradigm: write a sterile job requisition, filter 400 algorithmic applications, and hope the lowest bidder delivers something acceptable.
        </p>
        <p>
          For craftsmen and ambitious property owners, this model is fundamentally broken. Meaningful collaborations do not flourish through anonymous bidding; they thrive on resonance, technical competence, and direct human communication.
        </p>

        <h2 id="toc-algorithmic-fatigue">1. Algorithmic Keyword Overload</h2>
        <p>
          When hiring software prioritizes resume keywords over actual work samples, the best talent gets buried under automated applicants. A specialist whose portfolio exudes precision and flawless execution might get filtered out simply because they didn’t repeat corporate buzzwords thirty times in their profile.
        </p>

        <blockquote class="editorial-pullquote">
          <p>“Direct discovery lets the work speak before the algorithm gets in the way. It turns hiring from a numbers game into a curated portfolio inspection.”</p>
          <cite>— Mateo Rossi, Master Electrician</cite>
        </blockquote>

        <h2 id="toc-proof-of-craft">2. Seeing Proof of Craft First</h2>
        <p>
          When you can inspect real, unvarnished case studies—complete with client testimonials, hourly rate transparency, and real-world results—the vetting cycle shrinks from three weeks of screening calls to a fifteen-minute conversation.
        </p>

        <h2 id="toc-zero-commission">3. The Zero-Commission Philosophy</h2>
        <p>
          Taking a 20% cut from independent creators devalues the labor of craftspeople and incentivizes clients and freelancers to move off-platform in secrecy. By eliminating middleman commissions, FindWorker creates a clean, transparent environment where both parties can focus purely on the quality of the build.
        </p>

        <h2 id="toc-partnerships">4. Building Collaborative Guilds</h2>
        <p>
          The future of independent labor is not monolithic agencies with layers of account executives. It is nimble, sovereign guilds of senior specialists who assemble dynamically for high-impact projects and disband when the mission is accomplished.
        </p>
      `,
      tags: ['Talent Discovery', 'Master Electrician', 'Zero Commission', 'Guild Model', 'Direct Hiring']
    },
    {
      id: 'article-4',
      title: 'The art of invisible engineering: shipping builds that last',
      standfirst: 'Why the cleanest systems feel boring from the outside, and why senior independent specialists obsess over ergonomics, low maintenance, and structural simplicity.',
      category: 'ENGINEERING',
      date: 'October 03, 2026',
      readTime: '7 min read',
      readMinutes: 7,
      claps: 230,
      author: {
        id: 'worker-4',
        name: 'Darius Chen',
        role: 'Master Plumber & Hydronics Specialist',
        avatar: 'assets/images/craftsman_plumber.jpg',
        hourlyRate: '$90/hr',
        rateNum: 90,
        location: 'South District & Harborside',
        rating: '5.00',
        reviewsCount: 189,
        bio: '18 years mastering radiant heating loops, high-efficiency combi-boilers, architectural brass fixtures, and zero-leak hydronic installations.'
      },
      heroImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=85',
      caption: 'Precision hydronic manifold balance and telemetry monitoring in a zero-emission residential heating system.',
      toc: [
        { id: 'toc-boring-tech', label: '1. The Power of Boring Technology' },
        { id: 'toc-ergonomics', label: '2. Building for the Next Human' },
        { id: 'toc-zero-downtime', label: '3. Reliability in Independent Practice' },
        { id: 'toc-engineering-ethics', label: '4. The Independent Craftsman’s Code' }
      ],
      proseHtml: `
        <p class="drop-cap-p">
          There is a common paradox in engineering and skilled infrastructure: the better you do your job, the less anyone notices you were ever there. When a plumbing or electrical system operates flawlessly for twenty years, the homeowner gives it zero conscious thought. It simply functions.
        </p>
        <p>
          In an era that often celebrates flashy complexity and over-engineered contraptions, the true mark of mastery is restraint. Senior specialists understand that every unnecessary fitting, line of code, or moving part is an invitation for future failure.
        </p>

        <h2 id="toc-boring-tech">1. The Power of Boring Technology</h2>
        <p>
          Chasing the newest untested trend is exciting, but clients pay for longevity. When installing hydronic radiant heating or wiring a modern workshop, proven materials—copper, PEX-a, cast brass, and standardized valves—consistently outperform exotic novelties.
        </p>

        <blockquote class="editorial-pullquote">
          <p>“Elegance in craft is not about how much you can add; it is about reaching the point where nothing more can be removed without compromising safety.”</p>
          <cite>— Darius Chen, Hydronics Specialist</cite>
        </blockquote>

        <h2 id="toc-ergonomics">2. Building for the Next Human</h2>
        <p>
          A master craftsman builds with empathy for whoever will service the installation ten years from now. That means clean labeling, generous clearances, standardized shut-off valves, and documentation left in an accessible, weather-sealed envelope next to the utility panel.
        </p>

        <h2 id="toc-zero-downtime">3. Reliability in Independent Practice</h2>
        <p>
          When you operate independently without an army of warranty dispatchers, high reliability is not merely a moral virtue—it is a business necessity. Getting the job done right the first time protects your calendar and preserves your reputation.
        </p>

        <h2 id="toc-engineering-ethics">4. The Independent Craftsman’s Code</h2>
        <p>
          At FindWorker, our directory exists to honor this standard of uncompromising craft. When independent masters connect directly with clients who appreciate substance over hype, the result is enduring work that stands the test of time.
        </p>
      `,
      tags: ['Hydronics', 'Infrastructure', 'Reliability', 'Master Craftsman', 'Longevity']
    }
  ];

  // Helper methods
  function getArticleById(id) {
    if (!id) return BLOG_ARTICLES[0];
    const match = BLOG_ARTICLES.find(a => a.id === id);
    return match || BLOG_ARTICLES[0];
  }

  function getAllArticles() {
    return BLOG_ARTICLES;
  }

  function getRelatedArticles(currentId, count = 3) {
    return BLOG_ARTICLES.filter(a => a.id !== currentId).slice(0, count);
  }

  function getNextAndPrevArticles(currentId) {
    const currentIndex = BLOG_ARTICLES.findIndex(a => a.id === currentId);
    const validIndex = currentIndex >= 0 ? currentIndex : 0;
    const prev = BLOG_ARTICLES[validIndex - 1] || BLOG_ARTICLES[BLOG_ARTICLES.length - 1];
    const next = BLOG_ARTICLES[validIndex + 1] || BLOG_ARTICLES[0];
    return { prev, next };
  }

  function getClapCount(articleId) {
    const stored = localStorage.getItem(`findworker_claps_${articleId}`);
    if (stored !== null) {
      return parseInt(stored, 10) || 0;
    }
    const article = getArticleById(articleId);
    return article ? article.claps : 140;
  }

  function incrementClap(articleId) {
    const current = getClapCount(articleId);
    const updated = current + 1;
    localStorage.setItem(`findworker_claps_${articleId}`, String(updated));
    return updated;
  }

  global.FINDWORKER_BLOG = {
    articles: BLOG_ARTICLES,
    getArticleById,
    getAllArticles,
    getRelatedArticles,
    getNextAndPrevArticles,
    getClapCount,
    incrementClap
  };

})(typeof window !== 'undefined' ? window : this);
