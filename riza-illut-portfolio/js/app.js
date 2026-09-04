(function () {
  "use strict";

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $all = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  function el(tag, opts) {
    opts = opts || {};
    const node = document.createElement(tag);
    if (opts.class) node.className = opts.class;
    if (opts.text) node.textContent = opts.text;
    if (opts.html) node.innerHTML = opts.html;
    if (opts.attrs) Object.entries(opts.attrs).forEach(([k, v]) => node.setAttribute(k, v));
    return node;
  }

  /* ---------- ICON LIBRARY ----------
     Custom line icons (not brand logos or emoji) used throughout the site.
     Available names: shield, headset, folder, gear, monitor, globe,
     handshake, code, plane, coins, people, pulse, chat, cap, medal,
     palette, browser, clock, layers, grid, mail, phone, pin, sparkle,
     ticket, board, candles, trend, bag, cart, share, flow, bolt,
     database, terminal, arrow-right, chevron-down */
  const ICONS = {
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3Z"/><path d="m9 12 2 2 4-4"/></svg>',
    headset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="3" y="13" width="4" height="6" rx="1.5"/><rect x="17" y="13" width="4" height="6" rx="1.5"/><path d="M19 19v1a2 2 0 0 1-2 2h-3"/></svg>',
    folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 13a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V19a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H5a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H11a1.7 1.7 0 0 0 1-1.5V5a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V11a1.7 1.7 0 0 0 1.5 1H19a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.4 1Z"/></svg>',
    monitor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z"/></svg>',
    handshake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12l4-3 4 2 3-2 2 1"/><path d="m9 11 3.5 3.5a1.5 1.5 0 0 0 2.2-2L11 9"/><path d="m13 10 2-1.5a1.6 1.6 0 0 1 2.2.3L22 13l-3 3-2-1"/><path d="m7 17 2 1.6a1.6 1.6 0 0 0 2.1-.1L13 17"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m9 8-4 4 4 4M15 8l4 4-4 4"/></svg>',
    plane: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 20.5 12 15l-7-2 1.5-2 8-1 3-5a1.4 1.4 0 0 1 2.5 1.2l-3 5.3 1 8-2-1.5-1-3-3 3Z"/></svg>',
    coins: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="9" cy="8" rx="6" ry="3"/><path d="M3 8v4c0 1.7 2.7 3 6 3s6-1.3 6-3V8"/><path d="M9 15c0 1.7 2.7 3 6 3s6-1.3 6-3v-4c0-1-.9-1.9-2.3-2.5"/><path d="M9 12c0 1.7 2.7 3 6 3"/></svg>',
    people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 20v-1a6 6 0 0 1 12 0v1"/><path d="M16 8.5a3 3 0 1 1 3 4.6M21 20v-1a5.5 5.5 0 0 0-3.5-5.1"/></svg>',
    pulse: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h4l2 6 4-14 2 8h8"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v11H8l-4 4V5Z"/><path d="M8 9h8M8 12h5"/></svg>',
    cap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9 12 5l10 4-10 4-10-4Z"/><path d="M6 11v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4M22 9v6"/></svg>',
    medal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="15" r="5"/><path d="M12 12.5 13 15l2 .3-1.5 1.4.4 2-1.9-1-1.9 1 .4-2L9 15.3l2-.3.5-2.4Z"/><path d="m7 4 3 6M17 4l-3 6"/></svg>',
    palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 8 0 1 0 0 16c1 0 1.6-.6 1.6-1.4 0-.4-.2-.7-.4-1a1.4 1.4 0 0 1 1-2.4H16a4 4 0 0 0 4-4c0-4-3.6-7.2-8-7.2Z"/><circle cx="7.5" cy="10.5" r="1" fill="currentColor" stroke="none"/><circle cx="11" cy="7.5" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="8.5" r="1" fill="currentColor" stroke="none"/></svg>',
    browser: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="M3 8.5h18"/><circle cx="6" cy="6.5" r="0.6" fill="currentColor" stroke="none"/><circle cx="8.2" cy="6.5" r="0.6" fill="currentColor" stroke="none"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
    layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5M3 8v10M21 8v10"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="7" height="7" rx="1"/><rect x="13.5" y="3.5" width="7" height="7" rx="1"/><rect x="3.5" y="13.5" width="7" height="7" rx="1"/><rect x="13.5" y="13.5" width="7" height="7" rx="1"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 6.5 8 6 8-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 3h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.3"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/></svg>',
    ticket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1.5a1.5 1.5 0 0 0 0 3V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.5a1.5 1.5 0 0 0 0-3V9Z"/><path d="M9 7v10" stroke-dasharray="2 2"/></svg>',
    board: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 8v10M13 8v6M18 8v3"/></svg>',
    candles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v4M18 3v4"/><rect x="4" y="7" width="4" height="7" rx="1"/><rect x="16" y="9" width="4" height="8" rx="1"/><path d="M6 14v7M18 17v4"/></svg>',
    trend: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/></svg>',
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8h12l1 12H5L6 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1"/><circle cx="17" cy="20" r="1"/><path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.8h7.2a2 2 0 0 0 2-1.6L20 8H6"/></svg>',
    share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="2.4"/><circle cx="17" cy="6" r="2.4"/><circle cx="17" cy="18" r="2.4"/><path d="M8.2 10.8 14.8 7.2M8.2 13.2l6.6 3.6"/></svg>',
    flow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 6h6a4 4 0 0 1 4 4v2a4 4 0 0 0 4 4v0"/><path d="M15 12l3-2 0 4Z"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/></svg>',
    database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5.5" rx="7" ry="2.5"/><path d="M5 5.5V18a7 2.5 0 0 0 14 0V5.5"/><path d="M5 12a7 2.5 0 0 0 14 0"/></svg>',
    terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3M13 15h4"/></svg>',
    "arrow-right": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    "chevron-down": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>'
  };

  function iconEl(name, cls) {
    const span = el("span", { class: cls || "icon", html: ICONS[name] || ICONS.sparkle });
    span.setAttribute("aria-hidden", "true");
    return span;
  }

  /* ---------- HERO ---------- */
  function renderHero() {
    const { hero, person } = SITE_DATA;
    if (person.availableForWork) {
      const badge = $("#hero-availability");
      badge.appendChild(el("span", { class: "dot" }));
      badge.appendChild(document.createTextNode(person.availabilityLabel));
    } else {
      $("#hero-availability").remove();
    }

    $("#hero-name-first").textContent = hero.headline + " ";
    $("#hero-name-accent").textContent = hero.headlineAccent;
    $("#hero-role").textContent = person.role;
    $("#hero-subhead").textContent = hero.subhead;
    $("#hero-photo").src = person.photo;
    $("#hero-photo").alt = "Portrait of " + person.name;
    $("#hero-role-badge").appendChild(iconEl("shield", "role-badge-icon"));
    $("#hero-role-badge").appendChild(el("span", { text: person.roleBadge }));

    const statsRow = $("#hero-stats");
    hero.stats.forEach((s) => {
      const card = el("div", { class: "stat-pill" });
      card.appendChild(iconEl(s.icon, "stat-pill-icon"));
      const text = el("div", { class: "stat-pill-text" });
      text.appendChild(el("span", { class: "stat-value", text: s.value }));
      text.appendChild(el("span", { class: "stat-label", text: s.label }));
      card.appendChild(text);
      statsRow.appendChild(card);
    });
  }

  /* ---------- ABOUT ---------- */
  function renderAbout() {
    $("#about-intro").textContent = SITE_DATA.about.intro;
    const wrap = $("#about-text");
    SITE_DATA.about.paragraphs.forEach((p) => wrap.appendChild(el("p", { text: p })));

    const grid = $("#about-highlights");
    SITE_DATA.about.highlights.forEach((h) => {
      const card = el("div", { class: "highlight-card" });
      const iconWrap = el("div", { class: "icon-badge" });
      iconWrap.appendChild(iconEl(h.icon));
      card.appendChild(iconWrap);
      const copy = el("div");
      copy.appendChild(el("h3", { text: h.title }));
      copy.appendChild(el("p", { text: h.body }));
      card.appendChild(copy);
      grid.appendChild(card);
    });
  }

  /* ---------- VALUES ---------- */
  function renderValues() {
    const grid = $("#value-grid");
    SITE_DATA.values.forEach((v) => {
      const card = el("div", { class: "value-card" });
      const iconWrap = el("div", { class: "icon-badge" });
      iconWrap.appendChild(iconEl(v.icon));
      card.appendChild(iconWrap);
      card.appendChild(el("h3", { text: v.title }));
      card.appendChild(el("p", { text: v.body }));
      grid.appendChild(card);
    });
  }

  /* ---------- SERVICES ---------- */
  function renderServices() {
    $("#services-intro").textContent = SITE_DATA.services.intro;
    const grid = $("#services-grid");
    SITE_DATA.services.categories.forEach((cat) => {
      const card = el("div", { class: "service-card" });
      const head = el("div", { class: "service-head" });
      const iconWrap = el("div", { class: "icon-badge icon-badge-sm" });
      iconWrap.appendChild(iconEl(cat.icon));
      head.appendChild(iconWrap);
      head.appendChild(el("h3", { text: cat.name }));
      card.appendChild(head);
      const chipRow = el("div", { class: "chip-row" });
      cat.items.forEach((item) => chipRow.appendChild(el("span", { class: "chip", text: item })));
      card.appendChild(chipRow);
      grid.appendChild(card);
    });
  }

  /* ---------- TIMELINE (experience) ---------- */
  function renderTimeline() {
    const list = $("#timeline");
    SITE_DATA.experience.forEach((job, i) => {
      const item = el("li", { class: "timeline-item" + (job.current ? " is-current" : "") });

      const btn = el("button", {
        class: "timeline-entry",
        attrs: { "aria-expanded": "false", "aria-controls": "job-details-" + i, type: "button" }
      });

      const iconWrap = el("div", { class: "icon-badge timeline-icon" });
      iconWrap.appendChild(iconEl(job.icon));
      btn.appendChild(iconWrap);

      const body = el("div", { class: "timeline-copy" });
      const head = el("div", { class: "timeline-head" });
      head.appendChild(el("span", { class: "timeline-role", text: job.role }));
      head.appendChild(el("span", { class: "timeline-meta", text: job.dates }));
      body.appendChild(head);
      body.appendChild(el("div", { class: "timeline-company", text: job.company }));
      body.appendChild(el("p", { class: "timeline-summary", text: job.summary }));

      const toggleRow = el("div", { class: "timeline-toggle-row" });
      toggleRow.appendChild(el("span", { text: "View details" }));
      toggleRow.appendChild(iconEl("chevron-down", "chevron"));
      body.appendChild(toggleRow);
      btn.appendChild(body);

      const detailsWrap = el("div", { class: "timeline-body", attrs: { id: "job-details-" + i, hidden: "" } });
      const details = el("ul", { class: "timeline-details" });
      job.details.forEach((d) => details.appendChild(el("li", { text: d })));
      detailsWrap.appendChild(details);

      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!expanded));
        const label = toggleRow.firstChild;
        if (expanded) {
          detailsWrap.setAttribute("hidden", "");
          label.textContent = "View details";
        } else {
          detailsWrap.removeAttribute("hidden");
          label.textContent = "Hide details";
        }
      });

      item.appendChild(btn);
      item.appendChild(detailsWrap);
      list.appendChild(item);
    });
  }

  /* ---------- TOOLS ---------- */
  function renderTools() {
    const grid = $("#tools-grid");
    const filterBar = $("#tools-filter");
    const categories = ["All", ...Array.from(new Set(SITE_DATA.tools.map((t) => t.category)))];

    function draw(filter) {
      grid.innerHTML = "";
      SITE_DATA.tools
        .filter((t) => filter === "All" || t.category === filter)
        .forEach((tool) => {
          const card = el("button", {
            class: "tool-card",
            attrs: { type: "button", "aria-expanded": "false", "aria-label": tool.name + " — " + tool.category }
          });
          card.appendChild(iconEl(tool.icon, "tool-icon"));
          card.appendChild(el("span", { class: "tool-name", text: tool.name }));
          card.appendChild(el("p", { class: "tool-detail", text: tool.detail }));
          card.addEventListener("click", () => {
            const expanded = card.getAttribute("aria-expanded") === "true";
            card.setAttribute("aria-expanded", String(!expanded));
          });
          grid.appendChild(card);
        });
    }

    categories.forEach((cat) => {
      const b = el("button", { text: cat, attrs: { type: "button", role: "tab" } });
      if (cat === "All") b.classList.add("is-active");
      b.addEventListener("click", () => {
        $all("button", filterBar).forEach((x) => x.classList.remove("is-active"));
        b.classList.add("is-active");
        draw(cat);
      });
      filterBar.appendChild(b);
    });

    draw("All");
  }

  /* ---------- PROJECTS ---------- */
  function renderProjects() {
    const grid = $("#projects-grid");
    SITE_DATA.projects.forEach((p) => {
      const card = el("div", { class: "project-card" });
      const head = el("div", { class: "project-head" });
      const iconWrap = el("div", { class: "icon-badge icon-badge-sm" });
      iconWrap.appendChild(iconEl(p.icon));
      head.appendChild(iconWrap);
      const headText = el("div");
      headText.appendChild(el("span", { class: "project-category", text: p.category }));
      if (p.sample) headText.appendChild(el("span", { class: "sample-tag", text: "Sample" }));
      head.appendChild(headText);
      card.appendChild(head);
      card.appendChild(el("h3", { text: p.title }));

      const rows = [["Problem", p.problem], ["Approach", p.approach], ["Outcome", p.outcome]];
      rows.forEach(([label, text]) => {
        if (!text) return;
        const row = el("div", { class: "project-row" });
        row.appendChild(el("span", { class: "project-row-label", text: label }));
        row.appendChild(el("p", { text: text }));
        card.appendChild(row);
      });

      if (p.tags && p.tags.length) {
        const chipRow = el("div", { class: "chip-row" });
        p.tags.forEach((t) => chipRow.appendChild(el("span", { class: "chip chip-sm", text: t })));
        card.appendChild(chipRow);
      }

      grid.appendChild(card);
    });
  }

  /* ---------- TESTIMONIALS ---------- */
  function renderTestimonials() {
    const grid = $("#testimonials-grid");
    SITE_DATA.testimonials.forEach((t) => {
      const card = el("div", { class: "testimonial-card" });
      card.appendChild(el("p", { class: "testimonial-quote", text: "\u201C" + t.quote + "\u201D" }));
      card.appendChild(el("p", { class: "testimonial-name", text: t.name }));
      card.appendChild(el("p", { class: "testimonial-role", text: t.position }));
      grid.appendChild(card);
    });
  }

  /* ---------- EDUCATION ---------- */
  function renderEducation() {
    const edu = SITE_DATA.education;
    const card = $("#edu-card");
    const iconWrap = el("div", { class: "icon-badge icon-badge-sm" });
    iconWrap.appendChild(iconEl(edu.icon));
    card.appendChild(iconWrap);
    const copy = el("div");
    copy.appendChild(el("div", { class: "degree", text: edu.degree }));
    copy.appendChild(el("div", { class: "school", text: edu.school }));
    copy.appendChild(el("div", { class: "dates", text: edu.dates }));
    card.appendChild(copy);

    const list = $("#cert-list");
    SITE_DATA.certifications.forEach((c) => {
      const li = el("li");
      const iw = el("span", { class: "cert-icon" });
      iw.appendChild(iconEl(c.icon));
      li.appendChild(iw);
      const textWrap = el("span", { class: "cert-text" });
      textWrap.appendChild(el("span", { text: c.name }));
      li.appendChild(textWrap);
      li.appendChild(el("span", { class: "cert-date", text: c.date }));
      list.appendChild(li);
    });
  }

  /* ---------- CONTACT ---------- */
  function renderContact() {
    const { person } = SITE_DATA;
    const grid = $("#contact-grid");

    const items = [
      { icon: "mail", label: "Email", value: person.email, href: "mailto:" + person.email },
      { icon: "pin", label: "Location", value: person.location, href: null },
      { icon: "globe", label: "LinkedIn", value: person.linkedin ? "View profile" : "Coming soon", href: person.linkedin || null },
      { icon: "code", label: "GitHub", value: person.github ? "View profile" : "Coming soon", href: person.github || null }
    ];

    items.forEach((item) => {
      const tag = item.href ? "a" : "div";
      const node = el(tag, { class: "contact-item" + (!item.href ? " is-disabled" : "") });
      if (item.href) node.setAttribute("href", item.href);
      node.appendChild(iconEl(item.icon, "contact-icon"));
      const textWrap = el("div");
      textWrap.appendChild(el("span", { class: "label", text: item.label }));
      textWrap.appendChild(el("span", { class: "value", text: item.value }));
      node.appendChild(textWrap);
      grid.appendChild(node);
    });
  }

  /* ---------- NAV BEHAVIOR ---------- */
  function initNav() {
    const toggle = $("#nav-toggle");
    const nav = $("#main-nav");
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    $all("#main-nav a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    const sections = $all("main .section, .hero").filter((s) => s.id);
    const navLinks = $all("#main-nav a[href^='#']");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + id));
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
  }

  /* ---------- LEAVE FEEDBACK FORM ---------- */
  function initFeedbackForm() {
    const form = $("#feedback-form");
    if (!form) return;
    const nameInput = $("#fb-name");
    const roleInput = $("#fb-role");
    const quoteInput = $("#fb-quote");
    const previewName = $("#preview-name");
    const previewRole = $("#preview-role");
    const previewQuote = $("#preview-quote");

    function updatePreview() {
      previewName.textContent = nameInput.value.trim() || "Your name";
      previewRole.textContent = roleInput.value.trim() || "Your role, company";
      const quote = quoteInput.value.trim();
      previewQuote.textContent = "\u201C" + (quote || "Your feedback will appear here as you type.") + "\u201D";
    }
    [nameInput, roleInput, quoteInput].forEach((input) => input.addEventListener("input", updatePreview));

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = nameInput.value.trim();
      const role = roleInput.value.trim();
      const quote = quoteInput.value.trim();
      const subject = "Portfolio feedback from " + (name || "a former colleague");
      const bodyLines = [
        "Name: " + (name || "(not provided)"),
        "Role / Company: " + (role || "(not provided)"),
        "",
        "Feedback:",
        quote || "(not provided)"
      ];
      const mailto = "mailto:" + SITE_DATA.person.email +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\n"));
      window.location.href = mailto;
    });
  }

  function init() {
    renderHero();
    renderAbout();
    renderValues();
    renderServices();
    renderTimeline();
    renderTools();
    renderProjects();
    renderTestimonials();
    renderEducation();
    renderContact();
    initNav();
    initFeedbackForm();
    $("#year").textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
