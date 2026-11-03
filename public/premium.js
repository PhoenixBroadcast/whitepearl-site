(function () {
  "use strict";
  var S = window.SITE, B = S.business, T = window.WP_T || {};
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  var reduced = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var pill = '<span class="confirm-pill">To confirm</span>';

  /* ---------- languages (same keys and drafts as the other pages) ---------- */
  var lang = "en", EN = {};
  $$("[data-i18n]").forEach(function (el) { var k = el.getAttribute("data-i18n"); if (!(k in EN)) EN[k] = el.hasAttribute("data-html") ? el.innerHTML : el.textContent; });
  function t(key) { return (T[lang] && T[lang][key]) || EN[key] || key; }
  function setLang(l) {
    lang = T[l] ? l : "en";
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (el.hasAttribute("data-html") && lang === "en") el.innerHTML = EN[k]; else el.textContent = t(k);
    });
    $("#lang").value = lang;
    $$("[data-lang]").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang); });
    store.set("wp-lang", lang);
  }

  /* ---------- business details ---------- */
  $$("[data-site]").forEach(function (el) { var v = B[el.getAttribute("data-site")]; if (v) el.textContent = v; });
  $$("[data-tel]").forEach(function (a) { a.href = "tel:" + B.phoneLink; });
  $$("[data-tel2]").forEach(function (a) { a.href = "tel:" + B.phone2Link; });
  $$("[data-wa]").forEach(function (a) { a.href = "https://wa.me/" + B.whatsapp + "?text=" + encodeURIComponent("Hello White Pearl, I would like to plan a trip."); });
  $$("[data-mail]").forEach(function (a) { a.href = "mailto:" + B.email; });
  $$("[data-web]").forEach(function (a) { a.href = "https://" + B.website + "/"; });
  $$("[data-insta]").forEach(function (a) { a.href = "https://www.instagram.com/" + B.instagram + "/"; a.textContent = "@" + B.instagram; });
  $("#maps-link").href = B.mapsUrl;
  $("#year").textContent = new Date().getFullYear();

  /* ---------- icons ---------- */
  var ICON = {
    seat: '<path d="M8 3v10h8"/><path d="M6 13h12v3H6z"/><path d="M8 16v4M16 16v4"/>',
    snow: '<path d="M12 2v20M4.9 6.5l14.2 11M19.1 6.5 4.9 17.5"/><path d="M9 4l3 2 3-2M9 20l3-2 3 2"/>',
    shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
    group: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 14.5c3 0 6 2 6 5.5"/>',
    bag: '<rect x="5" y="7" width="14" height="13" rx="2"/><path d="M9 7V4h6v3M9 11v5M15 11v5"/>',
    hill: '<path d="M2 20 9 8l4 6 3-4 6 10z"/><circle cx="17" cy="5" r="2"/>',
    plane: '<path d="M3 15l18-7-3 9-5-2-3 4-1-5z"/><path d="M13 15 21 8"/>',
    road: '<path d="M8 3 4 21M16 3l4 18M12 4v3M12 11v3M12 18v3"/>',
    brief: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18"/>',
    map: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',
    van: '<path d="M2 16V8a2 2 0 0 1 2-2h11l4 4h1a2 2 0 0 1 2 2v4h-2"/><path d="M2 16h3M9 16h6"/><circle cx="7" cy="16.5" r="2"/><circle cx="17" cy="16.5" r="2"/><path d="M5 6v4h10"/>',
    car: '<path d="M3 16v-3l2-5a2 2 0 0 1 2-1.3h10a2 2 0 0 1 2 1.3l2 5v3h-2"/><path d="M3 16h2M9 16h6M3 12h18"/><circle cx="7" cy="16.5" r="2"/><circle cx="17" cy="16.5" r="2"/>',
    bed: '<path d="M3 18V7M3 13h18v5M21 13a3 3 0 0 0-3-3h-7v3"/><circle cx="7" cy="10.5" r="1.8"/>'
  };
  function icon(n) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICON[n] || "") + "</svg>"; }
  var ARROW = '<svg aria-hidden="true"><use href="#i-arrow"/></svg>';
  function bookBtn(label, cls, extra) { return '<a class="btn ' + cls + '" href="#book" data-book="' + esc(label) + '"' + (extra || "") + '><span data-i18n="book">Book</span>' + ARROW + "</a>"; }
  var C = S.corporate || {};

  /* ---------- render ---------- */
  var N = S.newArrival;
  $("#specs").innerHTML = N.specs.map(function (x) {
    return "<div" + (x.confirm ? " data-confirm" : "") + "><dt>" + esc(x.k) + "</dt><dd>" + (x.confirm ? pill : esc(x.v)) + "</dd></div>";
  }).join("");
  $("#features").innerHTML = N.features.map(function (f) {
    return "<li" + (f.confirm ? " data-confirm" : "") + ">" + icon(f.icon) + "<b>" + esc(f.title) + (f.confirm ? " " + pill : "") + "</b><p>" + esc(f.body) + "</p></li>";
  }).join("");

  $("#offer-grid").innerHTML = (C.offers || []).map(function (o) {
    var extra = ' data-trip="' + esc(o.trip) + '"' + (o.to ? ' data-to="' + esc(o.to) + '"' : "") + (o.from ? ' data-from="' + esc(o.from) + '"' : "");
    return '<article class="offer"><div class="offer-top" style="--c1:' + o.c[0] + ";--c2:" + o.c[1] + '"><span class="offer-tag">' + esc(o.tag) + "</span>" + icon(o.icon) + "</div>" +
      '<div class="offer-body"><h3>' + esc(o.title) + "</h3><p>" + esc(o.body) + '</p><div class="offer-foot"><span class="offer-price ph">' + esc(o.price) + "</span>" + bookBtn(o.title, "btn-line", extra) + "</div></div></article>";
  }).join("");

  $("#svc-grid").innerHTML = (C.services || S.services).map(function (x, i) {
    return '<article class="svc' + (x.confirm ? " ph" : "") + '"><span class="svc-n">' + ("0" + (i + 1)).slice(-2) + '</span><span class="svc-ico">' + icon(x.icon) + "</span>" + (x.confirm ? pill : "") + "<h3>" + esc(x.title) + "</h3><p>" + esc(x.body) + "</p></article>";
  }).join("");

  $("#pk-grid").innerHTML = S.pilgrim.map(function (p) {
    return '<article class="pk"><p class="pk-when">' + esc(p.when) + '</p><div class="pk-body"><h3>' + esc(p.title) + "</h3><p>" + esc(p.body) + "</p></div>" +
      '<div class="pk-foot"><div class="pk-meta"><span class="pk-price' + (p.ph ? " ph" : "") + '">' + esc(p.price) + '</span><span class="pk-veh">' + esc(p.vehicles) + "</span></div>" +
      bookBtn(p.title, "btn-line", ' data-trip="Pilgrimage"') + "</div></article>";
  }).join("");

  $("#fleet-grid").innerHTML = S.fleet.map(function (v) {
    var pic = v.photo
      ? '<img src="' + esc(v.photo) + '" alt="' + esc(v.name + ", " + v.badge) + '" loading="lazy" style="object-position:' + esc(v.pos || "50% 50%") + '">'
      : '<span class="ghost">' + esc(v.name) + "</span>";
    var chips = [v.seats, v.ac, "Driver included"].map(function (c) { return "<li" + (/confirm/i.test(c) ? ' class="tbc" data-confirm' : "") + ">" + esc(c) + "</li>"; }).join("");
    return '<article class="car' + (v.guess ? " ph" : "") + '"><div class="car-pic">' + pic + '<span class="car-badge' + (v.isNew ? " is-new" : "") + '">' + esc(v.badge) + "</span></div>" +
      '<div class="car-body"><h3>' + esc(v.name) + '</h3><ul class="car-specs">' + chips + '</ul><p class="car-note">' + esc(v.note) + "</p>" +
      '<div class="car-foot"><span class="car-rate ph">' + esc(v.rate) + "</span>" + bookBtn(v.name + (v.isNew ? " (new)" : v.guess ? "" : " " + v.badge), "btn-line") + "</div></div></article>";
  }).join("");

  /* tour art: a dusk landscape per place under a navy sky, drawn in code (photos to come) */
  function tourArt(tr, i) {
    var id = "ta" + i, h = tr.hue, sky = tr.sky || ["#3b2a78", "#ff8a5c"];
    var defs = '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + sky[0] + '"/><stop offset=".6" stop-color="' + sky[1] + '"/><stop offset="1" stop-color="' + sky[1] + '"/></linearGradient>' +
      '<radialGradient id="' + id + 's" cx=".7" cy=".42" r=".5"><stop offset="0" stop-color="#fff3d1" stop-opacity=".95"/><stop offset=".25" stop-color="' + sky[1] + '" stop-opacity=".55"/><stop offset="1" stop-color="' + sky[1] + '" stop-opacity="0"/></radialGradient></defs>';
    var base = '<rect width="400" height="500" fill="url(#' + id + ')"/><rect width="400" height="500" fill="url(#' + id + 's)"/><circle cx="280" cy="210" r="34" fill="#fff6dc" opacity=".9"/>';
    var lines = "";
    for (var k = 0; k < 5; k++) lines += '<path d="M0 ' + (300 + k * 22) + ' C100 ' + (285 + k * 22) + " 220 " + (318 + k * 22) + " 400 " + (296 + k * 22) + '" stroke="#fff" stroke-opacity="' + (0.06 + k * 0.03) + '" fill="none"/>';
    var land = {
      hills: '<path d="M0 330 C80 270 150 290 220 250 C290 214 340 260 400 240 V500 H0Z" fill="' + h + '" opacity=".55"/><path d="M0 380 C90 340 190 360 260 330 C320 306 360 320 400 314 V500 H0Z" fill="' + h + '"/><path d="M0 430 C110 400 230 420 400 392 V500 H0Z" fill="#121a2e" opacity=".55"/>',
      lake: '<path d="M0 320 C90 280 170 300 250 270 C320 248 360 280 400 272 V340 H0Z" fill="' + h + '" opacity=".8"/><rect y="340" width="400" height="160" fill="#121a2e" opacity=".5"/>' + lines.replace(/ 3/g, " 4"),
      boat: '<rect y="330" width="400" height="170" fill="#121a2e" opacity=".45"/><path d="M90 362 Q200 392 310 362 L298 378 Q200 404 102 378Z" fill="#1b1206"/><path d="M118 362 Q150 326 200 322 Q250 326 282 362Z" fill="#f2c46d" opacity=".9"/><path d="M0 330 C120 318 280 318 400 330" stroke="' + h + '" stroke-width="3" fill="none"/>',
      palms: '<rect y="340" width="400" height="160" fill="#121a2e" opacity=".5"/><path d="M80 345 Q90 280 74 220 M300 345 Q292 290 310 236 M346 345 Q340 300 356 262" stroke="#121a2e" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M74 220 Q44 206 24 224 M74 220 Q100 200 128 214 M74 220 Q66 190 46 182 M74 220 Q90 194 108 186 M310 236 Q282 224 264 240 M310 236 Q336 220 358 232 M356 262 Q338 250 324 260 M356 262 Q376 248 392 258" stroke="#121a2e" stroke-width="8" fill="none" stroke-linecap="round"/>',
      nets: '<rect y="340" width="400" height="160" fill="#121a2e" opacity=".5"/><path d="M80 345 L170 210 L260 345 M170 210 L170 345" stroke="#121a2e" stroke-width="4" fill="none"/><path d="M112 228 L228 228 L250 280 L90 280Z" fill="none" stroke="#121a2e" stroke-width="1.6"/><path d="M90 280 Q170 312 250 280" stroke="#121a2e" stroke-width="2" fill="none"/>'
    };
    return '<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' + defs + base + (land[tr.scene] || land.hills) + "</svg>";
  }
  $("#tour-grid").innerHTML = S.tours.map(function (tr, i) {
    return '<article class="tour"><div class="tour-art">' + tourArt(tr, i) + '</div><div class="tour-top"><span class="tour-tag">Photo to come</span><span class="tour-days">' + esc(tr.days) + "</span></div>" +
      "<h3>" + esc(tr.place) + "</h3><p>" + esc(tr.body) + "</p>" + bookBtn(tr.place + " tour", "btn-glass btn-sm", ' data-trip="Kerala tour" data-to="' + esc(tr.place) + '"') + "</article>";
  }).join("");

  $("#stars-row").innerHTML = S.stars.map(function (n) { return '<span class="star"><i aria-hidden="true">' + new Array(n + 1).join("★") + "</i>" + n + "-star</span>"; }).join("");
  $("#stay-grid").innerHTML = S.stays.map(function (h, i) {
    return '<div class="stay"><p class="stay-ok">Available</p><h3>' + esc(h.title) + "</h3><p>" + esc(h.body) + "</p></div>";
  }).join("");

  $("#why-grid").innerHTML = (C.why || S.why).map(function (w, i) {
    return '<div class="why-item' + (w.confirm || !C.why ? " ph" : "") + '"><span class="why-n">' + ("0" + (i + 1)).slice(-2) + "</span><h3>" + esc(w.title) + "</h3><p>" + esc(w.body) + "</p></div>";
  }).join("");

  (function routes() {
    var groups = [["transit", "Airports & stations", "#121a2e"], ["tour", "Tour places", "#b68a3e"], ["pilgrim", "Pilgrim places", "#7d8aa8"]];
    var base = S.places.filter(function (p) { return p.kind === "base"; })[0];
    var html = '<div class="route-base"><span>White Pearl base</span><b>' + esc(base.name) + "</b><p>Near Erumeli, Kottayam district. Every trip starts here.</p></div>";
    groups.forEach(function (g) {
      var names = S.places.filter(function (p) { return p.kind === g[0]; }).map(function (p) { return "<li>" + esc(p.name) + "</li>"; }).join("");
      html += '<div class="route-col"><h3><i style="background:' + g[2] + '"></i>' + g[1] + "</h3><ul>" + names + "</ul></div>";
    });
    $("#routes").innerHTML = html;
  })();

  $("#rev-grid").innerHTML = S.reviews.map(function (r) {
    return '<figure class="rev ph"><span class="rev-q" aria-hidden="true">&ldquo;</span><blockquote>' + esc(r.text) + "</blockquote><figcaption><b>" + esc(r.who) + "</b><span>" + esc(r.trip) + "</span></figcaption></figure>";
  }).join("");

  (function marquee() {
    var row = (C.ticker || S.ticker).map(function (p) { return "<span>" + esc(p) + "</span>"; }).join('<i aria-hidden="true"></i>');
    $("#marquee").innerHTML = '<div class="marquee-row">' + row + '<i aria-hidden="true"></i></div><div class="marquee-row" aria-hidden="true">' + row + '<i aria-hidden="true"></i></div>';
  })();

  /* ---------- booking buttons fill the form ---------- */
  var picked = $("#picked"), vehicle = $("#f-vehicle");
  function showPicked(label) {
    vehicle.value = label || "";
    if (!label) { picked.hidden = true; return; }
    picked.innerHTML = "<span>Selected: <b>" + esc(label) + '</b></span><button type="button">Clear</button>';
    picked.hidden = false;
    $("button", picked).onclick = function () { showPicked(""); };
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("[data-book]");
    if (!a) return;
    e.preventDefault();
    var label = a.getAttribute("data-book"), trip = a.getAttribute("data-trip");
    if (trip) { var r = $('input[name="trip"][value="' + trip + '"]'); if (r) r.checked = true; }
    if (a.getAttribute("data-to")) $("#f-to").value = a.getAttribute("data-to");
    if (a.getAttribute("data-from")) $("#f-from").value = a.getAttribute("data-from");
    if (label && label !== "Hotel booking") showPicked(label);
    $("#book").scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    setTimeout(function () { $("#f-name").focus({ preventScroll: true }); }, 700);
  });

  /* ---------- form → WhatsApp ---------- */
  var today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  $("#f-date").min = today.toISOString().slice(0, 10);
  $("#enquiry").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target, err = $("#form-error"), bad = [];
    var name = f.name.value.trim(), phone = f.phone.value.trim(), digits = phone.replace(/\D/g, "").length;
    var trip = ($('input[name="trip"]:checked') || {}).value || "Vehicle hire";
    f.name.setAttribute("aria-invalid", !name);
    f.phone.setAttribute("aria-invalid", digits < 10);
    if (!name) bad.push("your name");
    if (digits < 10) bad.push("a phone number with 10 digits");
    if (bad.length) { err.textContent = "Please add " + bad.join(" and ") + "."; err.hidden = false; return; }
    err.hidden = true;
    var lines = [
      (trip === "Pilgrimage" ? "Swamiye Saranam. " : "Hello. ") + "New enquiry for White Pearl from the website.",
      "Trip: " + trip,
      f.from.value && "From: " + f.from.value,
      f.to.value && "To: " + f.to.value,
      f.date.value && "Date: " + f.date.value.split("-").reverse().join("-"),
      "People: " + f.people.value,
      vehicle.value && "Vehicle / package: " + vehicle.value,
      "Name: " + name,
      "Phone: " + phone,
      lang !== "en" && "Language: " + $("#lang").selectedOptions[0].textContent
    ].filter(Boolean);
    var url = "https://wa.me/" + B.whatsapp + "?text=" + encodeURIComponent(lines.join("\n"));
    var w = window.open(url, "_blank", "noopener");
    if (!w) location.href = url;
  });

  /* ---------- "what to confirm" outlines ---------- */
  var toggle = $("#ph-toggle");
  toggle.addEventListener("click", function () {
    var on = document.body.classList.toggle("show-ph");
    toggle.setAttribute("aria-pressed", on);
    toggle.textContent = on ? "Hide outlines" : "Show what to confirm";
  });

  /* ---------- header and progress ---------- */
  var top = $("#top"), bar = $("#progress");
  function onScroll() {
    top.classList.toggle("scrolled", scrollY > 30);
    var max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = "scaleX(" + (max > 0 ? Math.min(1, scrollY / max) : 0) + ")";
  }
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* ---------- language, then the headline words ---------- */
  $("#lang").addEventListener("change", function (e) { setLang(e.target.value); });
  $$("[data-lang]").forEach(function (b) { b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); }); });
  var saved = store.get("wp-lang"), guess = saved || (navigator.language || "en").slice(0, 2);
  setLang(T[guess] ? guess : "en");

  function splitWords(el) {
    var out = [];
    (function walk(node, cls) {
      Array.prototype.forEach.call(node.childNodes, function (n) {
        if (n.nodeType === 3) {
          n.textContent.split(/(\s+)/).forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) { out.push(document.createTextNode(" ")); return; }
            var w = document.createElement("span"), inner = document.createElement("span");
            w.className = "w"; inner.textContent = part; if (cls) inner.className = cls;
            w.appendChild(inner); out.push(w);
          });
        } else if (n.nodeType === 1) {
          walk(n, n.tagName === "EM" ? "g-gold" : cls);
        }
      });
    })(el, "");
    el.textContent = "";
    out.forEach(function (n) { el.appendChild(n); });
    return $$(".w > span", el);
  }

  /* ---------- motion (GSAP). Without it, or with reduced motion, everything simply shows. ---------- */
  var G = window.gsap, ST = window.ScrollTrigger;
  // ?still turns the motion off (for checking layout and taking screenshots)
  if (!G || !ST || reduced || /[?&]still(?![a-z])/.test(location.search)) return;
  G.registerPlugin(ST);
  document.documentElement.classList.add("anim");

  var h1 = $(".hero h1"), words = lang === "en" ? splitWords(h1) : [h1];

  /* the card's gold curves draw themselves in */
  $$(".swoosh .sw").forEach(function (p) {
    var len = p.getTotalLength ? p.getTotalLength() : 1600;
    p.style.strokeDasharray = len; p.style.strokeDashoffset = len;
  });
  var intro = G.timeline({ defaults: { ease: "expo.out" } });
  intro.to(".hero .sw", { strokeDashoffset: 0, duration: 2.6, ease: "power2.inOut", stagger: 0.18 }, 0)
    .from(".corner", { scale: 0.6, opacity: 0, duration: 1.8, stagger: 0.15 }, 0.1)
    .from(words, { yPercent: 110, duration: 1.3, stagger: 0.08 }, 0.25)
    .from("[data-hero]", { y: 24, opacity: 0, duration: 1.1, stagger: 0.1 }, 0.5)
    .from(".hero-frame", { clipPath: "inset(18% 12% 0% 12% round 240px 240px 4px 4px)", duration: 1.7 }, 0.2)
    .from(".hero-frame img", { scale: 1.25, duration: 2.4 }, 0.2)
    .from(".frame-line", { opacity: 0, x: -20, y: -20, duration: 1.4 }, 0.9)
    .from(".badge-card", { x: -30, opacity: 0, duration: 1.1 }, 1.1);

  G.to(".hero-frame img", { yPercent: -8, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  G.to(".hero .swoosh", { yPercent: 10, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

  $$(".contact .sw").forEach(function (p) {
    G.to(p, { strokeDashoffset: 0, duration: 2.4, ease: "power2.inOut", scrollTrigger: { trigger: ".contact", start: "top 75%", once: true } });
  });

  G.fromTo("#cinema-frame", { clipPath: "inset(8% 8% 8% 8%)" }, { clipPath: "inset(0% 0% 0% 0%)", ease: "none",
    scrollTrigger: { trigger: "#cinema", start: "top 90%", end: "center 55%", scrub: 0.6 } });
  G.fromTo("#cinema-frame img", { scale: 1.2 }, { scale: 1, ease: "none", scrollTrigger: { trigger: "#cinema", start: "top bottom", end: "bottom top", scrub: true } });

  $$("[data-reveal]").forEach(function (el) {
    G.to(el, { opacity: 1, y: 0, duration: 1.1, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } });
  });
  ST.batch(".offer, .svc, .car, .tour, .stay, .features li, .why-item, .pk, .rev, .route-col, .route-base", {
    start: "top 92%", once: true,
    onEnter: function (els) { G.to(els, { opacity: 1, y: 0, duration: 1, ease: "expo.out", stagger: 0.08 }); }
  });

  /* tour cards lean toward the pointer (mouse only) */
  if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
    $$(".tour").forEach(function (card) {
      card.addEventListener("pointermove", function (e) {
        var r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = "rotateY(" + (x * 4).toFixed(2) + "deg) rotateX(" + (-y * 4).toFixed(2) + "deg) translateY(-4px)";
      });
      card.addEventListener("pointerleave", function () { card.style.transform = "none"; });
    });
  }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ST.refresh(); });
  addEventListener("load", function () { ST.refresh(); });
})();
