/* ===================================================================
   Island Kitchens — main.js
   =================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------
     0. Theme (dark / light) — applied ASAP to avoid flash
  --------------------------------------------------------------- */
  const THEME_KEY = "island-kitchens-theme";
  function applyTheme(mode) {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }
  (function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(saved || (prefersDark ? "dark" : "light"));
  })();

  /* ---------------------------------------------------------------
     Data
  --------------------------------------------------------------- */
  const IMG = {
    heroAbout: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80",
    wood: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=500&q=80",
  };

  const services = [
    { icon: "layout-grid", title: "Modular Kitchens", desc: "Flexible, factory-precision modules built around your space." },
    { icon: "square-dashed-bottom", title: "Island Kitchens", desc: "A statement centrepiece for cooking, dining and gathering." },
    { icon: "corner-down-right", title: "L-Shaped Kitchens", desc: "Efficient corner layouts that maximise every inch." },
    { icon: "layout-template", title: "U-Shaped Kitchens", desc: "Generous counter space for the most demanding cooks." },
    { icon: "rows-3", title: "Parallel Kitchens", desc: "Two facing counters for smooth, high-traffic workflows." },
    { icon: "archive", title: "Pantry Units", desc: "Dedicated storage systems that keep every ingredient in place." },
    { icon: "shirt", title: "Wardrobes", desc: "Walk-in and sliding wardrobes tailored to your wardrobe life." },
    { icon: "tv", title: "TV Units", desc: "Media consoles that anchor the living room with quiet elegance." },
    { icon: "sofa", title: "Interior Design", desc: "Whole-home interiors designed with a single cohesive vision." },
    { icon: "hammer", title: "Renovation", desc: "End-to-end renovation of existing kitchens and interiors." },
  ];

  const projectImgs = {
    modern: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    island: "https://images.unsplash.com/photo-1592506119503-c0b18879bd5a?auto=format&fit=crop&w=800&q=80",
    minimal: "https://images.unsplash.com/photo-1665771080265-62e101266dd9?auto=format&fit=crop&w=800&q=80",
    wooden: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=800&q=80",
    matte: "https://images.unsplash.com/photo-1556912102-ea493a2a5b93?auto=format&fit=crop&w=800&q=80",
    gloss: "https://images.unsplash.com/photo-1760072513457-651955c7074d?auto=format&fit=crop&w=800&q=80",
    scandi: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=800&q=80",
    contemporary: "https://images.unsplash.com/photo-1759147960461-b74a7e9a75d4?auto=format&fit=crop&w=800&q=80",
  };

  const projects = [
    { name: "Modern Kitchen", cat: "modern", tag: "Modern", img: projectImgs.modern, desc: "Clean lines and handle-less cabinetry in matte charcoal." },
    { name: "Island Kitchen", cat: "island", tag: "Island", img: projectImgs.island, desc: "A marble-topped island built for entertaining." },
    { name: "Minimal Kitchen", cat: "minimal", tag: "Minimal", img: projectImgs.minimal, desc: "Pared-back forms, warm light, uninterrupted surfaces." },
    { name: "Wooden Kitchen", cat: "modern", tag: "Wood", img: projectImgs.wooden, desc: "Natural oak veneer paired with soft-close hardware." },
    { name: "Matte Finish Kitchen", cat: "finish", tag: "Matte", img: projectImgs.matte, desc: "Fingerprint-proof matte lacquer in deep graphite." },
    { name: "High Gloss Kitchen", cat: "finish", tag: "Gloss", img: projectImgs.gloss, desc: "Mirror-polish acrylic fronts that reflect natural light." },
    { name: "Scandinavian Kitchen", cat: "minimal", tag: "Scandi", img: projectImgs.scandi, desc: "Light woods and airy palettes, function led design." },
    { name: "Contemporary Kitchen", cat: "island", tag: "Contemporary", img: projectImgs.contemporary, desc: "Bold contrasts of stone, steel and warm oak." },
  ];

  const whyUs = [
    { icon: "gem", title: "Premium Quality Materials", desc: "German hinges, natural stone, and marine-grade ply as standard." },
    { icon: "sliders-horizontal", title: "Customized Designs", desc: "No templates — every kitchen is drawn around your space." },
    { icon: "box", title: "3D Visualization", desc: "Walk through a photorealistic render before we build a thing." },
    { icon: "wrench", title: "Professional Installation", desc: "In-house craftsmen, not subcontracted labour." },
    { icon: "shield-check", title: "10-Year Warranty", desc: "Structural and hardware warranty, fully transferable." },
    { icon: "tag", title: "Affordable Pricing", desc: "Transparent, itemised quotes — no surprises at handover." },
  ];

  const process = [
    { title: "Consultation", desc: "We visit your space and understand how you live and cook." },
    { title: "Design", desc: "Concept layouts tailored to your workflow and aesthetic." },
    { title: "3D Rendering", desc: "Photorealistic visuals so you can see it before it's built." },
    { title: "Material Selection", desc: "Hand-pick finishes, stone, hardware and accessories." },
    { title: "Manufacturing", desc: "Precision fabrication in our climate-controlled facility." },
    { title: "Installation", desc: "Clean, scheduled fitting by our dedicated install team." },
    { title: "Final Handover", desc: "A walkthrough, care guide, and your warranty pack." },
  ];

  const testimonials = [
    { name: "Ananya Rao", role: "Bengaluru", img: "https://randomuser.me/api/portraits/women/44.jpg", stars: 5, text: "Island Kitchens turned our cramped kitchen into the best room in the house. The island alone changed how we entertain." },
    { name: "Rohan Mehta", role: "Mumbai", img: "https://randomuser.me/api/portraits/men/32.jpg", stars: 5, text: "The 3D render matched the final result almost exactly. Genuinely impressive attention to detail throughout." },
    { name: "Priya Nair", role: "Hyderabad", img: "https://randomuser.me/api/portraits/women/68.jpg", stars: 5, text: "Professional from first call to final handover. Our U-shaped kitchen is both beautiful and incredibly functional." },
    { name: "Arjun Kapoor", role: "Pune", img: "https://randomuser.me/api/portraits/men/54.jpg", stars: 4, text: "Great materials, great installation team. Minor delay in delivery but the quality more than made up for it." },
    { name: "Sneha Iyer", role: "Chennai", img: "https://randomuser.me/api/portraits/women/21.jpg", stars: 5, text: "Five years on and the matte finish still looks brand new. Worth every rupee of the investment." },
  ];

  const galleryImgs = [
    { img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80", h: 1 },
    { img: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=700&q=80", h: 1.3 },
    { img: "https://images.unsplash.com/photo-1592506119503-c0b18879bd5a?auto=format&fit=crop&w=700&q=80", h: 1 },
    { img: "https://images.unsplash.com/photo-1610177534644-34d881503b83?auto=format&fit=crop&w=700&q=80", h: 1.2 },
    { img: "https://images.unsplash.com/photo-1671197244266-73129c97c096?auto=format&fit=crop&w=700&q=80", h: 1 },
    { img: "https://images.unsplash.com/photo-1556912102-ea493a2a5b93?auto=format&fit=crop&w=700&q=80", h: 1.35 },
    { img: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=700&q=80", h: 1.1 },
    { img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=700&q=80", h: 1 },
    { img: "https://images.unsplash.com/photo-1759147960461-b74a7e9a75d4?auto=format&fit=crop&w=700&q=80", h: 1.25 },
    { img: "https://images.unsplash.com/photo-1649361811423-a55616f7ab11?auto=format&fit=crop&w=700&q=80", h: 1 },
    { img: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=700&q=80", h: 1.2 },
    { img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=700&q=80", h: 1 },
  ];

  const faqs = [
    { q: "How long does a full kitchen installation take?", a: "Most modular kitchens are designed, manufactured and installed within 6–8 weeks from final design approval, depending on complexity and material availability." },
    { q: "Do you offer free consultations and site visits?", a: "Yes. Every project begins with a complimentary consultation and site measurement, with no obligation to proceed." },
    { q: "What materials do you use for cabinetry?", a: "We work with marine-grade plywood, MDF, and solid wood carcasses, finished in acrylic, laminate, PU matte, or natural veneer, all sourced from certified suppliers." },
    { q: "Can I see a 3D render before committing?", a: "Absolutely — a photorealistic 3D visualization is included with every design proposal so you can review and refine before manufacturing begins." },
    { q: "Do you provide a warranty?", a: "Yes, every installation carries a 10-year structural and hardware warranty, along with ongoing after-sales support." },
    { q: "Do you handle wardrobes and other interiors too?", a: "Yes — beyond kitchens, we design wardrobes, TV units, pantry systems and full-home interior solutions as part of a single cohesive project." },
  ];

  const socials = [
    { name: "Facebook", url: "#", path: '<path d="M14 9h3V6h-3c-1.66 0-3 1.34-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.55.45-1 1-1z"/>' },
    { name: "Instagram", path: '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="17.3" cy="6.7" r="1.1"/>', url: "#" },
    { name: "Pinterest", path: '<path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.63 7.86 6.35 9.33-.09-.79-.17-2.01.03-2.88.19-.79 1.21-5.02 1.21-5.02s-.31-.62-.31-1.53c0-1.43.83-2.51 1.87-2.51.88 0 1.31.66 1.31 1.45 0 .89-.56 2.21-.86 3.44-.24 1.03.52 1.87 1.53 1.87 1.84 0 3.08-2.36 3.08-5.16 0-2.13-1.44-3.72-4.05-3.72-2.95 0-4.79 2.2-4.79 4.66 0 .85.25 1.44.64 1.9.18.21.2.3.14.55-.05.18-.16.63-.2.8-.07.27-.27.36-.5.26-1.39-.57-2.04-2.09-2.04-3.8 0-2.83 2.39-6.22 7.12-6.22 3.8 0 6.31 2.75 6.31 5.71 0 3.91-2.15 6.83-5.33 6.83-1.07 0-2.07-.58-2.41-1.24 0 0-.57 2.28-.69 2.72-.21.76-.63 1.52-1.01 2.11.9.27 1.85.42 2.84.42 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>', url: "#" },
    { name: "YouTube", path: '<path d="M23 12s0-3.5-.45-5.17a2.9 2.9 0 0 0-2.05-2.06C18.87 4.3 12 4.3 12 4.3s-6.87 0-8.5.47A2.9 2.9 0 0 0 1.45 6.83 30.6 30.6 0 0 0 1 12s0 3.5.45 5.17a2.9 2.9 0 0 0 2.05 2.06c1.63.47 8.5.47 8.5.47s6.87 0 8.5-.47a2.9 2.9 0 0 0 2.05-2.06A30.6 30.6 0 0 0 23 12z" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M9.75 15.02 15.5 12 9.75 8.98z"/>', url: "#" },
  ];

  /* ---------------------------------------------------------------
     Helpers
  --------------------------------------------------------------- */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const starsMarkup = (n) =>
    Array.from({ length: 5 })
      .map((_, i) => `<i data-lucide="star" ${i < n ? 'fill="currentColor"' : ""}></i>`)
      .join("");

  /* ---------------------------------------------------------------
     Render: Services
  --------------------------------------------------------------- */
  function renderServices() {
    const grid = $("#services-grid");
    if (!grid) return;
    grid.innerHTML = services
      .map(
        (s) => `
      <div class="service-card reveal-card">
        <div class="service-icon"><i data-lucide="${s.icon}"></i></div>
        <h3 class="font-serif text-xl font-semibold">${s.title}</h3>
        <p class="mt-2 text-sm text-cream/60 leading-relaxed">${s.desc}</p>
      </div>`
      )
      .join("");
  }

  /* ---------------------------------------------------------------
     Render: Projects (with filter)
  --------------------------------------------------------------- */
  function renderProjects() {
    const grid = $("#projects-grid");
    if (!grid) return;
    grid.innerHTML = projects
      .map(
        (p) => `
      <div class="project-card reveal-card" data-cat="${p.cat}">
        <figure>
          <img loading="lazy" src="${p.img}" alt="${p.name} — ${p.desc}">
        </figure>
        <div class="overlay"></div>
        <div class="caption">
          <span class="cat-tag">${p.tag}</span>
          <h3 class="font-serif text-xl font-semibold">${p.name}</h3>
          <p class="text-xs text-white/70 mt-1">${p.desc}</p>
        </div>
      </div>`
      )
      .join("");

    $$("#project-filters .filter-chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        $$("#project-filters .filter-chip").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const f = btn.dataset.filter;
        $$(".project-card", grid).forEach((card) => {
          card.classList.toggle("hide", !(f === "all" || card.dataset.cat === f));
        });
      });
    });
  }

  /* ---------------------------------------------------------------
     Render: Why Us
  --------------------------------------------------------------- */
  function renderWhyUs() {
    const grid = $("#why-us-grid");
    if (!grid) return;
    grid.innerHTML = whyUs
      .map(
        (w) => `
      <div class="why-card reveal-card">
        <div class="feature-icon mb-5"><i data-lucide="${w.icon}"></i></div>
        <h3 class="font-serif text-xl font-semibold">${w.title}</h3>
        <p class="mt-2 text-sm text-current/60 leading-relaxed">${w.desc}</p>
      </div>`
      )
      .join("");
  }

  /* ---------------------------------------------------------------
     Render: Process timeline
  --------------------------------------------------------------- */
  function renderProcess() {
    const track = $("#process-track");
    if (!track) return;
    track.innerHTML = process
      .map(
        (step, i) => `
      <div class="process-item reveal-card">
        <div class="process-num">${i + 1}</div>
        <h3 class="font-serif text-xl md:text-2xl font-semibold">${step.title}</h3>
        <p class="mt-1.5 text-current/60 max-w-md">${step.desc}</p>
      </div>`
      )
      .join("");
  }

  /* ---------------------------------------------------------------
     Render: Testimonials slider
  --------------------------------------------------------------- */
  function renderTestimonials() {
    const track = $("#testimonial-track");
    const dotsWrap = $("#testimonial-dots");
    if (!track) return;

    track.innerHTML = testimonials
      .map(
        (t) => `
      <div class="testimonial-card">
        <div class="testimonial-inner">
          <div class="stars">${starsMarkup(t.stars)}</div>
          <p class="text-lg md:text-xl font-serif leading-relaxed">&ldquo;${t.text}&rdquo;</p>
          <img class="t-avatar mt-6" src="${t.img}" alt="${t.name}" loading="lazy">
          <h4 class="font-semibold">${t.name}</h4>
          <p class="text-xs text-cream/50 uppercase tracking-widest mt-0.5">${t.role}</p>
        </div>
      </div>`
      )
      .join("");

    dotsWrap.innerHTML = testimonials.map((_, i) => `<span class="t-dot ${i === 0 ? "active" : ""}" data-i="${i}"></span>`).join("");

    let index = 0;
    const total = testimonials.length;
    function go(i) {
      index = (i + total) % total;
      track.style.transform = `translateX(-${index * 100}%)`;
      $$(".t-dot", dotsWrap).forEach((d, di) => d.classList.toggle("active", di === index));
    }
    $("#t-prev").addEventListener("click", () => { go(index - 1); resetAuto(); });
    $("#t-next").addEventListener("click", () => { go(index + 1); resetAuto(); });
    $$(".t-dot", dotsWrap).forEach((d) => d.addEventListener("click", () => { go(+d.dataset.i); resetAuto(); }));

    let auto = setInterval(() => go(index + 1), 6000);
    function resetAuto() { clearInterval(auto); auto = setInterval(() => go(index + 1), 6000); }
  }

  /* ---------------------------------------------------------------
     Render: Gallery masonry + lightbox
  --------------------------------------------------------------- */
  function renderGallery() {
    const grid = $("#masonry-grid");
    if (!grid) return;
    grid.innerHTML = galleryImgs
      .map(
        (g) => `
      <div class="masonry-item reveal-card" data-full="${g.img.replace("w=700", "w=1600")}">
        <img loading="lazy" src="${g.img}" alt="Island Kitchens project detail" style="aspect-ratio:${(1 / g.h).toFixed(2)}/1">
        <span class="zoom-icon"><i data-lucide="maximize-2"></i></span>
      </div>`
      )
      .join("");

    const lightbox = $("#lightbox");
    const lightboxImg = $("#lightbox-img");
    $$(".masonry-item", grid).forEach((item) => {
      item.addEventListener("click", () => {
        lightboxImg.src = item.dataset.full;
        lightboxImg.alt = item.querySelector("img").alt;
        lightbox.classList.remove("hidden");
        lightbox.classList.add("flex");
        document.body.style.overflow = "hidden";
      });
    });
    function closeLightbox() {
      lightbox.classList.add("hidden");
      lightbox.classList.remove("flex");
      document.body.style.overflow = "";
    }
    $("#lightbox-close").addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });
  }

  /* ---------------------------------------------------------------
     Render: FAQ accordion
  --------------------------------------------------------------- */
  function renderFaq() {
    const list = $("#faq-list");
    if (!list) return;
    list.innerHTML = faqs
      .map(
        (f, i) => `
      <div class="faq-item ${i === 0 ? "open" : ""}">
        <button class="faq-q" aria-expanded="${i === 0}">
          <span>${f.q}</span>
          <span class="faq-icon"><i data-lucide="plus"></i></span>
        </button>
        <div class="faq-a"><p>${f.a}</p></div>
      </div>`
      )
      .join("");

    $$(".faq-item", list).forEach((item) => {
      const btn = $(".faq-q", item);
      btn.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        $$(".faq-item", list).forEach((it) => { it.classList.remove("open"); $(".faq-q", it).setAttribute("aria-expanded", "false"); });
        if (!isOpen) { item.classList.add("open"); btn.setAttribute("aria-expanded", "true"); }
      });
    });
  }

  /* ---------------------------------------------------------------
     Render: Social icons
  --------------------------------------------------------------- */
  function renderSocials() {
    const wrap = $("#social-icons");
    if (!wrap) return;
    wrap.innerHTML = socials
      .map((s) => `<a href="${s.url}" aria-label="${s.name}" class="social-icon"><svg viewBox="0 0 24 24" fill="currentColor">${s.path}</svg></a>`)
      .join("");
  }

  /* ---------------------------------------------------------------
     Icons: lucide render + safety fallback
  --------------------------------------------------------------- */
  function renderIcons() {
    if (!window.lucide) return;
    window.lucide.createIcons();
    const leftover = $$("[data-lucide]").filter((el) => el.tagName !== "svg");
    if (leftover.length) {
      leftover.forEach((el) => el.setAttribute("data-lucide", "circle"));
      window.lucide.createIcons();
    }
  }

  /* ---------------------------------------------------------------
     Header: scroll state + active nav link + mobile menu
  --------------------------------------------------------------- */
  function initHeader() {
    const header = $("#site-header");
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const menuToggle = $("#menu-toggle");
    const mobileMenu = $("#mobile-menu");
    const burger = $("#icon-burger");
    const close = $("#icon-close");
    menuToggle.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.contains("hidden");
      mobileMenu.classList.toggle("hidden");
      burger.classList.toggle("hidden", isHidden);
      close.classList.toggle("hidden", !isHidden);
    });
    $$("#mobile-menu a").forEach((a) =>
      a.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        burger.classList.remove("hidden");
        close.classList.add("hidden");
      })
    );

    const sections = $$("main section[id]");
    const navLinks = $$(".nav-link");
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------------------------------------------------------------
     Theme toggle button
  --------------------------------------------------------------- */
  function initThemeToggle() {
    const btn = $("#theme-toggle");
    btn.addEventListener("click", () => {
      const isDark = document.documentElement.classList.toggle("dark");
      localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    });
  }

  /* ---------------------------------------------------------------
     Scroll reveal via IntersectionObserver
  --------------------------------------------------------------- */
  function initReveal() {
    const targets = $$("[data-anim], .reveal-card");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = parseFloat(el.dataset.delay || 0);
            setTimeout(() => el.classList.add("in-view"), delay * 1000);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    targets.forEach((el) => io.observe(el));
  }

  /* ---------------------------------------------------------------
     Animated counters
  --------------------------------------------------------------- */
  function initCounters() {
    const items = $$(".stat-item");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = +el.dataset.count;
          const suffix = el.dataset.suffix || "";
          const numEl = $(".stat-number", el);
          const duration = 1800;
          const start = performance.now();
          function tick(now) {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            numEl.textContent = Math.round(eased * target) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          io.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    items.forEach((el) => io.observe(el));
  }

  /* ---------------------------------------------------------------
     Back to top + sticky CTA
  --------------------------------------------------------------- */
  function initFloating() {
    const backTop = $("#back-to-top");
    const stickyCta = $("#sticky-cta");
    const contact = $("#contact");
    window.addEventListener(
      "scroll",
      () => {
        backTop.classList.toggle("show", window.scrollY > 600);
        if (contact) {
          const rect = contact.getBoundingClientRect();
          const nearContact = rect.top < window.innerHeight * 0.8;
          stickyCta.classList.toggle("translate-y-full", window.scrollY < 500 || nearContact);
        }
      },
      { passive: true }
    );
    backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------------------------------------------------------------
     Contact form (client-side demo submit)
  --------------------------------------------------------------- */
  function initForm() {
    const form = $("#contact-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      $("#form-success").classList.remove("hidden");
      form.reset();
      setTimeout(() => $("#form-success").classList.add("hidden"), 6000);
    });
  }

  /* ---------------------------------------------------------------
     Hero parallax (progressive enhancement via GSAP)
  --------------------------------------------------------------- */
  function initHeroParallax() {
    const img = $("#hero-img");
    if (!img) return;
    if (window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(img, {
        yPercent: 12,
        scale: 1.16,
        ease: "none",
        scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: true },
      });
    }
  }

  /* ---------------------------------------------------------------
     Preloader
  --------------------------------------------------------------- */
  function initPreloader() {
    const pre = $("#preloader");
    const bar = $("#preloader-bar");
    if (!pre) return;
    requestAnimationFrame(() => (bar.style.width = "100%"));
    window.addEventListener("load", () => {
      setTimeout(() => {
        pre.classList.add("done");
        setTimeout(() => pre.remove(), 700);
      }, 400);
    });
  }

  /* ---------------------------------------------------------------
     Footer year
  --------------------------------------------------------------- */
  function initYear() {
    const y = $("#year");
    if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------------------------------------------------------------
     Init
  --------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderServices();
    renderProjects();
    renderWhyUs();
    renderProcess();
    renderTestimonials();
    renderGallery();
    renderFaq();
    renderSocials();
    renderIcons();

    initHeader();
    initThemeToggle();
    initReveal();
    initCounters();
    initFloating();
    initForm();
    initHeroParallax();
    initPreloader();
    initYear();
  });
})();
