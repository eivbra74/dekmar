/* =========================================================
   Dekmar AS — interactions
   ========================================================= */
(function () {
  "use strict";
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Sticky header shadow ---- */
  var header = document.getElementById("header");
  function onScroll() {
    if (window.scrollY > 8) header.classList.add("is-stuck");
    else header.classList.remove("is-stuck");
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Mobile navigation ---- */
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("navToggle");
  var backdrop = document.createElement("div");
  backdrop.className = "nav-backdrop";
  document.body.appendChild(backdrop);

  function setNav(open) {
    nav.classList.toggle("is-open", open);
    backdrop.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Lukk meny" : "Åpne meny");
  }
  toggle.addEventListener("click", function () {
    setNav(nav.classList.contains("is-open") === false);
  });
  backdrop.addEventListener("click", function () { setNav(false); });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setNav(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("is-open")) setNav(false);
  });
  // Reset mobile state if resized to desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth > 820 && nav.classList.contains("is-open")) setNav(false);
  });

  /* ---- Active nav link on scroll ---- */
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav__link"));
  var sections = links
    .map(function (l) { return document.querySelector(l.getAttribute("href")); })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = "#" + entry.target.id;
          links.forEach(function (l) {
            l.classList.toggle("is-active", l.getAttribute("href") === id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    sections.forEach(function (s) { navObserver.observe(s); });
  }

  /* ---- Reveal on scroll ---- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (prefersReduced || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          // small stagger for siblings entering together
          var delay = Math.min(i * 60, 240);
          setTimeout(function () { entry.target.classList.add("is-in"); }, delay);
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    reveals.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---- Count-up stats ---- */
  var counters = Array.prototype.slice.call(document.querySelectorAll(".stat__num[data-count]"));
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    if (prefersReduced) { el.textContent = target + suffix; return; }
    var start = 0, dur = 1100, t0 = null;
    function tick(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(start + (target - start) * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if ("IntersectionObserver" in window && counters.length) {
    var countObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { animateCount(entry.target); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { countObserver.observe(c); });
  }

  /* ---- Reference project lightbox ---- */
  var cards = Array.prototype.slice.call(document.querySelectorAll(".proj-card"));
  if (cards.length) {
    var lbEN = (document.documentElement.lang || "nb").slice(0, 2) === "en";
    var lbClose = lbEN ? "Close" : "Lukk";
    var lbPrev = lbEN ? "Previous image" : "Forrige bilde";
    var lbNext = lbEN ? "Next image" : "Neste bilde";

    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.innerHTML =
      '<button class="lightbox__btn lightbox__close" type="button" aria-label="' + lbClose + '">' +
      '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg></button>' +
      '<div class="lightbox__top"><span class="lightbox__title"></span><span class="lightbox__counter"></span></div>' +
      '<button class="lightbox__btn lightbox__nav lightbox__nav--prev" type="button" aria-label="' + lbPrev + '">' +
      '<svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg></button>' +
      '<div class="lightbox__stage"><img class="lightbox__img" alt="" /></div>' +
      '<button class="lightbox__btn lightbox__nav lightbox__nav--next" type="button" aria-label="' + lbNext + '">' +
      '<svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg></button>' +
      '<div class="lightbox__strip"></div>';
    document.body.appendChild(lb);

    var lbImg = lb.querySelector(".lightbox__img");
    var lbTitle = lb.querySelector(".lightbox__title");
    var lbCounter = lb.querySelector(".lightbox__counter");
    var lbStrip = lb.querySelector(".lightbox__strip");
    var current = { slug: "", name: "", count: 0, i: 0 };

    function imgPath(slug, n) {
      return "img/projects/" + slug + "/" + (n < 9 ? "0" : "") + (n + 1) + ".jpg";
    }
    function preload(slug, n) {
      if (n < 0 || n >= current.count) return;
      var im = new Image(); im.src = imgPath(slug, n);
    }
    function render() {
      lbImg.src = imgPath(current.slug, current.i);
      lbImg.alt = current.name + " — " + (current.i + 1);
      lbCounter.textContent = (current.i + 1) + " / " + current.count;
      var thumbs = lbStrip.children;
      for (var t = 0; t < thumbs.length; t++) thumbs[t].classList.toggle("is-active", t === current.i);
      var active = thumbs[current.i];
      if (active && active.scrollIntoView) active.scrollIntoView({ block: "nearest", inline: "center" });
      preload(current.slug, current.i + 1);
      preload(current.slug, current.i - 1);
    }
    function buildStrip() {
      lbStrip.innerHTML = "";
      for (var n = 0; n < current.count; n++) {
        var th = document.createElement("button");
        th.type = "button";
        th.className = "lightbox__thumb";
        th.setAttribute("aria-label", current.name + " " + (n + 1));
        th.innerHTML = '<img loading="lazy" src="' + imgPath(current.slug, n) + '" alt="" />';
        (function (idx) { th.addEventListener("click", function () { current.i = idx; render(); }); })(n);
        lbStrip.appendChild(th);
      }
    }
    function openLb(slug, name, count) {
      current.slug = slug; current.name = name; current.count = count; current.i = 0;
      lbTitle.textContent = name;
      buildStrip();
      render();
      lb.classList.add("is-open");
      document.body.classList.add("lb-open");
      lb.querySelector(".lightbox__close").focus();
    }
    function closeLb() {
      lb.classList.remove("is-open");
      document.body.classList.remove("lb-open");
      lbImg.src = "";
      if (lastCard && lastCard.focus) lastCard.focus();
    }
    function step(d) {
      current.i = (current.i + d + current.count) % current.count;
      render();
    }

    var lastCard = null;
    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        lastCard = card;
        openLb(card.getAttribute("data-project"), card.getAttribute("data-name"), parseInt(card.getAttribute("data-count"), 10));
      });
    });
    lb.querySelector(".lightbox__close").addEventListener("click", closeLb);
    lb.querySelector(".lightbox__nav--prev").addEventListener("click", function () { step(-1); });
    lb.querySelector(".lightbox__nav--next").addEventListener("click", function () { step(1); });
    lb.addEventListener("click", function (e) {
      if (e.target === lb || e.target.classList.contains("lightbox__stage")) closeLb();
    });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLb();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    });
  }

  /* ---- Form validation + mailto fallback ---- */
  var form = document.getElementById("quoteForm");
  if (form) {
    var success = document.getElementById("formSuccess");
    var isEN = (document.documentElement.lang || "nb").slice(0, 2) === "en";
    var T = isEN
      ? {
          errName: "Please enter your name.",
          errEmail: "Please enter your email address.",
          errEmailInvalid: "Please enter a valid email address.",
          errMsg: "Please tell us briefly what it's about.",
          subject: "Quote request",
          lName: "Name", lEmail: "Email", lPhone: "Phone", lService: "Service", lMessage: "Message"
        }
      : {
          errName: "Vennligst skriv inn navnet ditt.",
          errEmail: "Vennligst skriv inn e-postadressen din.",
          errEmailInvalid: "Skriv inn en gyldig e-postadresse.",
          errMsg: "Fortell oss kort hva det gjelder.",
          subject: "Forespørsel om tilbud",
          lName: "Navn", lEmail: "E-post", lPhone: "Telefon", lService: "Tjeneste", lMessage: "Melding"
        };

    function showError(name, msg) {
      var el = form.querySelector('.field__error[data-for="' + name + '"]');
      if (el) { el.textContent = msg; el.classList.add("is-shown"); }
    }
    function clearError(name) {
      var el = form.querySelector('.field__error[data-for="' + name + '"]');
      if (el) { el.textContent = ""; el.classList.remove("is-shown"); }
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      var navn = form.navn, epost = form.epost, melding = form.melding;

      clearError("navn"); clearError("epost"); clearError("melding");

      if (!navn.value.trim()) { showError("navn", T.errName); ok = false; }
      if (!epost.value.trim()) { showError("epost", T.errEmail); ok = false; }
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(epost.value.trim())) { showError("epost", T.errEmailInvalid); ok = false; }
      if (!melding.value.trim()) { showError("melding", T.errMsg); ok = false; }

      if (!ok) {
        var firstErr = form.querySelector(".field__error.is-shown");
        if (firstErr) {
          var input = firstErr.previousElementSibling;
          if (input && input.focus) input.focus();
        }
        return;
      }

      // Build a mailto so the static site can still deliver the request.
      var subject = T.subject + " — " + navn.value.trim();
      var body =
        T.lName + ": " + navn.value.trim() + "\n" +
        T.lEmail + ": " + epost.value.trim() + "\n" +
        T.lPhone + ": " + (form.telefon.value.trim() || "—") + "\n" +
        T.lService + ": " + (form.tjeneste.value || "—") + "\n\n" +
        T.lMessage + ":\n" + melding.value.trim() + "\n";
      var href = "mailto:post@dekmar.no?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

      if (success) success.hidden = false;
      window.location.href = href;
    });

    // Clear error as the user fixes the field
    ["navn", "epost", "melding"].forEach(function (name) {
      var field = form[name];
      if (field) field.addEventListener("input", function () { clearError(name); });
    });
  }
})();
