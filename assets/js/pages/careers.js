/* Careers page — job board filters + alumni / employer dispatch portal. */
(function () {
  var t = window.t;
  var catFilter = 'all';
  var portalTab = 'alumni';

  var FILTERS = [
    { id: 'all', en: 'All Categories', am: 'ሁሉም' },
    { id: 'broadcast', en: 'TV & Broadcast', am: 'ቴሌቪዥንና ሆስት' },
    { id: 'production', en: 'Full Film Crew', am: 'የፊልም ፕሮዳክሽን' },
    { id: 'camera', en: 'Cinematography', am: 'ሲኒማቶግራፊ' },
    { id: 'editing', en: 'Editing & Digital', am: 'ኤዲቲንግና ዲጂታል' }
  ];

  function renderFilters() {
    var host = document.getElementById('job-filters');
    if (!host) return;
    host.innerHTML = FILTERS.map(function (f) {
      return '<button type="button" class="pill-btn' + (catFilter === f.id ? ' active' : '') + '" data-cat="' + f.id + '">' + t(f.en, f.am) + '</button>';
    }).join('');
    host.querySelectorAll('[data-cat]').forEach(function (b) {
      b.addEventListener('click', function () {
        catFilter = b.getAttribute('data-cat');
        renderFilters();
        renderJobs();
      });
    });
  }

  function renderJobs() {
    var host = document.getElementById('job-grid');
    if (!host) return;
    var list = catFilter === 'all' ? SAMPLE_JOB_LISTINGS : SAMPLE_JOB_LISTINGS.filter(function (j) { return j.category === catFilter; });
    host.innerHTML = list.map(function (job) {
      var reqs = (window.getLang() === 'am' ? job.requirementsAm : job.requirementsEn).map(function (r) {
        return '<li><i data-icon="check-circle-2"></i><span>' + r + '</span></li>';
      }).join('');
      return '<article class="card" style="border-radius:24px;padding:1.75rem;gap:1rem">' +
        '<div>' +
          '<div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.5rem">' +
            '<span class="badge" style="background:rgba(255,144,0,.15);color:var(--orange-hover)">' + job.openings + ' ' + t('Positions', 'ክፍት ቦታዎች') + '</span>' +
            '<span style="font-family:var(--font-mono);font-size:11px;color:var(--muted)">' + t(job.employmentTypeEn, job.employmentTypeAm) + '</span>' +
          '</div>' +
          '<h3 style="font-size:19px;font-weight:800;color:var(--ink);margin-top:.75rem">' + t(job.titleEn, job.titleAm) + '</h3>' +
          '<div style="display:flex;flex-wrap:wrap;align-items:center;gap:1rem;font-size:12px;color:var(--muted);margin-top:.5rem">' +
            '<span style="display:inline-flex;align-items:center;gap:.25rem"><i data-icon="map-pin" style="width:14px;height:14px;color:var(--navy)"></i>' + t(job.districtEn, job.districtAm) + '</span>' +
            '<span style="display:inline-flex;align-items:center;gap:.25rem;font-weight:500;color:var(--navy)"><i data-icon="user-check" style="width:14px;height:14px;color:var(--orange)"></i>' + t(job.experienceEn, job.experienceAm) + '</span>' +
          '</div>' +
          '<ul class="check-list" style="margin-top:.75rem">' + reqs + '</ul>' +
        '</div>' +
        '<div style="padding-top:1rem;border-top:1px solid rgba(5,70,119,.1);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.75rem">' +
          '<span style="font-size:12px;font-weight:600;color:#047857;background:#ecfdf5;padding:.25rem .625rem;border-radius:6px">' + t('0% Commission Guaranteed', '0% ኮሚሽን (ነፃ አገልግሎት)') + '</span>' +
          '<a href="https://t.me/efcfilm" target="_blank" rel="noreferrer" style="display:inline-flex;align-items:center;gap:.375rem;font-size:13px;font-weight:700;color:var(--navy)">' +
            '<i data-icon="send" style="width:14px;height:14px"></i>' + t('Apply via @efcfilm', 'በ @efcfilm ያመልክቱ') + '</a>' +
        '</div></article>';
    }).join('');
    if (window.hydrateIcons) window.hydrateIcons(host);
  }

  /* ---------- portal ---------- */
  function setTab(tab) {
    portalTab = tab;
    var ta = document.getElementById('tab-alumni'), te = document.getElementById('tab-employer');
    var fa = document.getElementById('form-alumni'), fe = document.getElementById('form-employer');
    if (ta) ta.classList.toggle('active', tab === 'alumni');
    if (te) te.classList.toggle('active', tab === 'employer');
    if (fa) fa.hidden = tab !== 'alumni';
    if (fe) fe.hidden = tab !== 'employer';
    var box = document.getElementById('dispatch-box');
    if (box) box.hidden = true;
  }

  function val(id) {
    var el = document.getElementById(id);
    return el ? el.value : '';
  }

  function buildAlumni() {
    return '[Endrias Alumni Job Placement]\nName: ' + val('alumni-name') +
      '\nPhone: ' + val('alumni-phone') +
      '\nGraduated Track: ' + val('alumni-track') +
      '\nTarget Role: ' + val('alumni-role') +
      '\nPortfolio/Notes: ' + (val('alumni-portfolio') || 'Available on request');
  }

  function buildEmployer() {
    return '[Zero-Fee Crew Request — Employer]\nOrganization: ' + val('company-name') +
      '\nContact Phone: ' + val('company-contact') +
      '\nRole Needed: ' + val('crew-role') + ' (x' + val('crew-count') + ')' +
      '\nLocation: ' + val('company-district');
  }

  function showDispatch(text) {
    var box = document.getElementById('dispatch-box');
    var pre = document.getElementById('dispatch-text');
    if (pre) pre.textContent = text;
    if (box) box.hidden = false;
    var mail = document.getElementById('mail-dispatch');
    if (mail) {
      mail.setAttribute('href', 'mailto:endriasfilmacademyplc@gmail.com?subject=' +
        encodeURIComponent('Endrias Film College Career Placement') +
        '&body=' + encodeURIComponent(text));
    }
    if (box && box.scrollIntoView) box.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function wire() {
    var ta = document.getElementById('tab-alumni');
    var te = document.getElementById('tab-employer');
    if (ta) ta.addEventListener('click', function () { setTab('alumni'); });
    if (te) te.addEventListener('click', function () { setTab('employer'); });

    var fa = document.getElementById('form-alumni');
    if (fa) fa.addEventListener('submit', function (e) {
      e.preventDefault();
      showDispatch(buildAlumni());
    });

    var fe = document.getElementById('form-employer');
    if (fe) fe.addEventListener('submit', function (e) {
      e.preventDefault();
      showDispatch(buildEmployer());
    });

    var copy = document.getElementById('copy-dispatch');
    if (copy) copy.addEventListener('click', function () {
      var pre = document.getElementById('dispatch-text');
      var label = copy.querySelector('span');
      if (navigator.clipboard && pre) {
        navigator.clipboard.writeText(pre.textContent).catch(function () {});
        if (label) {
          label.textContent = t('Copied!', 'ተቀድቷል!');
          setTimeout(function () { label.textContent = t('Copy Text', 'ጽሑፍን ቅዳ'); }, 2200);
        }
      }
    });
  }

  function render() { renderFilters(); renderJobs(); }

  window.renderDynamic = function () { renderFilters(); renderJobs(); };
  render();
  wire();
})();
