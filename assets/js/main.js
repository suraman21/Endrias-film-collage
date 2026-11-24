/* Shared app logic — replaces React Context (LanguageContext), Layout effects,
   framer-motion entrance animations, and react-router active-link handling. */
(function () {
  'use strict';

  /* ---------- Language (EN / AM) — port of LanguageContext.tsx ---------- */
  var LANG_KEY = 'efc_lang';
  function getLang() {
    try {
      var s = localStorage.getItem(LANG_KEY);
      if (s === 'en' || s === 'am') return s;
    } catch (e) { /* sandboxed iframe */ }
    return 'en';
  }
  var lang = getLang();

  function t(en, am) { return lang === 'am' ? am : en; }
  window.t = t;
  window.getLang = function () { return lang; };

  function applyStaticLang() {
    document.documentElement.lang = lang === 'am' ? 'am' : 'en';
    document.querySelectorAll('[data-en]').forEach(function (el) {
      var val = lang === 'am' ? el.getAttribute('data-am') : el.getAttribute('data-en');
      if (val !== null) el.textContent = val;
    });
    document.querySelectorAll('[data-en-html]').forEach(function (el) {
      var val = lang === 'am' ? el.getAttribute('data-am-html') : el.getAttribute('data-en-html');
      if (val !== null) el.innerHTML = val;
    });
    document.querySelectorAll('[data-en-ph]').forEach(function (el) {
      var val = lang === 'am' ? el.getAttribute('data-am-ph') : el.getAttribute('data-en-ph');
      if (val !== null) el.setAttribute('placeholder', val);
    });
    document.querySelectorAll('.lang-label').forEach(function (el) {
      el.textContent = lang === 'en' ? 'አማርኛ' : 'EN';
    });
    /* re-render dynamic sections if the page module exposes a renderer */
    if (typeof window.renderDynamic === 'function') window.renderDynamic();
  }

  function setLang(next) {
    lang = next;
    try { localStorage.setItem(LANG_KEY, next); } catch (e) {}
    applyStaticLang();
  }
  function toggleLang() { setLang(lang === 'en' ? 'am' : 'en'); }
  window.setLang = setLang;

  /* ---------- Header scroll state (Layout.tsx useEffect) ---------- */
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 18);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile drawer (Layout.tsx) ---------- */
  var overlay = document.getElementById('drawer-overlay');
  var drawer = document.getElementById('drawer');
  var openBtn = document.getElementById('menu-open');
  var closeBtn = document.getElementById('menu-close');
  function setDrawer(open) {
    if (!overlay || !drawer) return;
    overlay.classList.toggle('open', open);
    drawer.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (openBtn) openBtn.addEventListener('click', function () { setDrawer(true); });
  if (closeBtn) closeBtn.addEventListener('click', function () { setDrawer(false); });
  if (overlay) overlay.addEventListener('click', function () { setDrawer(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setDrawer(false); });

  /* ---------- Language buttons ---------- */
  document.querySelectorAll('.lang-btn').forEach(function (b) {
    b.addEventListener('click', toggleLang);
  });

  /* ---------- Active nav link (react-router NavLink isActive) ---------- */
  var page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if (page === '' || page === '/') page = 'index.html';
  document.querySelectorAll('[data-nav]').forEach(function (a) {
    var href = (a.getAttribute('href') || '').split('#')[0].split('?')[0].toLowerCase();
    if (href === page || (page === 'index.html' && (href === 'index.html' || href === './index.html' || href === '/'))) {
      a.classList.add('active');
    }
  });

  /* ---------- Footer year (Layout.tsx new Date().getFullYear()) ---------- */
  document.querySelectorAll('.year').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Entrance animations (framer-motion -> IntersectionObserver) ---------- */
  var supportsIO = typeof IntersectionObserver === 'function';
  var io = supportsIO ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }) : null;

  function observeReveals() {
    var nodes = document.querySelectorAll('.reveal:not(.in), .stagger:not(.in)');
    nodes.forEach(function (el) {
      if (io) io.observe(el);
      else el.classList.add('in'); /* graceful fallback: show immediately */
    });
  }
  window.observeReveals = observeReveals;

  /* ---------- Boot ---------- */
  hydrateIcons(document);
  applyStaticLang();
  observeReveals();
})();
