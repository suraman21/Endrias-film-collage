/* Faculty page — faculty cards + filterable masterclass series. */
(function () {
  var t = window.t;
  var workshopFilter = 'all';

  var FILTERS = [
    { id: 'all', en: 'All Workshops', am: 'ሁሉም' },
    { id: 'international', en: 'International Guests', am: 'ዓለም አቀፍ እንግዶች' },
    { id: 'ai', en: 'AI & Innovation', am: 'AI እና ቴክኖሎጂ' },
    { id: 'industry', en: 'Ethiopian DP Spotlight', am: 'የሀገር ውስጥ ባለሙያዎች' }
  ];

  function initials(name) {
    return name.split(' ').slice(0, 2).map(function (n) { return n[0]; }).join('');
  }

  function renderFaculty() {
    var host = document.getElementById('faculty-grid');
    if (!host) return;
    host.innerHTML = FACULTY_MEMBERS.map(function (f) {
      var creds = (window.getLang() === 'am' ? f.credentialsAm : f.credentialsEn)
        .map(function (c) {
          return '<li><i data-icon="check-circle-2"></i><span>' + c + '</span></li>';
        }).join('');
      return '<article class="card" style="border-radius:24px;padding:1.75rem;gap:1.25rem">' +
        '<div>' +
          '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:.75rem">' +
            '<div style="width:56px;height:56px;border-radius:16px;background:var(--navy);color:var(--orange);font-weight:800;font-size:18px;display:flex;align-items:center;justify-content:center;flex-shrink:0">' + initials(f.nameEn) + '</div>' +
            '<span class="badge" style="background:rgba(255,144,0,.15);color:var(--orange-hover)">' + t(f.badgeEn, f.badgeAm) + '</span>' +
          '</div>' +
          '<h3 style="font-size:20px;font-weight:800;color:var(--ink);margin-top:1rem">' + t(f.nameEn, f.nameAm) + '</h3>' +
          '<p class="font-ethiopic" style="font-size:12px;color:var(--muted);margin-top:2px">' + (window.getLang() === 'en' ? f.nameAm : f.nameEn) + '</p>' +
          '<div style="font-size:14px;font-weight:700;color:var(--navy);margin-top:.375rem">' + t(f.roleEn, f.roleAm) + '</div>' +
          '<div style="font-family:var(--font-mono);font-size:11px;color:var(--muted);background:var(--ivory);padding:.625rem;border-radius:12px;border:1px solid rgba(5,70,119,.1);margin-top:.75rem">' + t(f.specialtyEn, f.specialtyAm) + '</div>' +
        '</div>' +
        '<ul class="check-list">' + creds + '</ul>' +
      '</article>';
    }).join('');
    if (window.hydrateIcons) window.hydrateIcons(host);
  }

  function renderFilters() {
    var host = document.getElementById('workshop-filters');
    if (!host) return;
    host.innerHTML = FILTERS.map(function (b) {
      return '<button type="button" class="pill-btn on-dark' + (workshopFilter === b.id ? ' active' : '') + '" data-wf="' + b.id + '">' + t(b.en, b.am) + '</button>';
    }).join('');
    host.querySelectorAll('[data-wf]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        workshopFilter = btn.getAttribute('data-wf');
        renderFilters();
        renderWorkshops();
      });
    });
  }

  function renderWorkshops() {
    var host = document.getElementById('workshop-grid');
    if (!host) return;
    var list = workshopFilter === 'all' ? MASTERCLASSES : MASTERCLASSES.filter(function (w) { return w.category === workshopFilter; });
    host.innerHTML = list.map(function (w) {
      return '<article class="card" style="border-radius:24px;padding:1.75rem;gap:1rem;background:rgba(3,41,72,.9);border-color:rgba(255,255,255,.12);color:#fff">' +
        '<div>' +
          '<div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.5rem">' +
            '<span class="badge" style="background:rgba(255,144,0,.2);color:var(--orange);display:inline-flex;align-items:center;gap:.375rem"><i data-icon="globe" style="width:14px;height:14px"></i>' + t(w.originEn, w.originAm) + '</span>' +
            '<span style="font-family:var(--font-mono);font-size:11px;color:rgba(255,255,255,.6)">' + t(w.dateEn, w.dateAm) + '</span>' +
          '</div>' +
          '<h3 style="font-size:20px;font-weight:800;color:#fff;margin-top:.75rem">' + t(w.speakerEn, w.speakerAm) + '</h3>' +
          '<div style="font-size:13px;font-weight:600;color:var(--amber);margin-top:.25rem">' + t(w.affiliationEn, w.affiliationAm) + '</div>' +
          '<div style="padding:.75rem;border-radius:12px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);font-size:14px;font-weight:700;color:#fff;display:flex;align-items:center;gap:.5rem;margin-top:.75rem">' +
            '<i data-icon="sparkles" style="width:16px;height:16px;color:var(--orange);flex-shrink:0"></i><span>' + t(w.topicEn, w.topicAm) + '</span></div>' +
          '<p style="font-size:13px;color:rgba(255,255,255,.75);line-height:1.7;margin-top:.75rem">' + t(w.summaryEn, w.summaryAm) + '</p>' +
        '</div>' +
        '<div style="padding-top:.75rem;border-top:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:space-between;font-size:12px;color:var(--amber)">' +
          '<span>' + t('Free Admission for Endrias Students & Alumni', 'ለኮሌጁ ተማሪዎች በነፃ የሚዘጋጅ') + '</span>' +
          '<i data-icon="award" style="width:16px;height:16px;color:var(--orange)"></i>' +
        '</div>' +
      '</article>';
    }).join('');
    if (window.hydrateIcons) window.hydrateIcons(host);
  }

  function render() { renderFaculty(); renderFilters(); renderWorkshops(); }

  window.renderDynamic = render;
  render();
})();
