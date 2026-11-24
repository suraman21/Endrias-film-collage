/* Programs page — tier filters, study planner recommender, module catalog search. */
(function () {
  var t = window.t;

  var tierFilter = 'all';
  var discipline = 'all';
  var searchQuery = '';
  var goal = 'degree';
  var selectedShift = 'shift-1';

  var TIER_TABS = [
    { id: 'all', en: 'All (6)', am: 'ሁሉም (6)' },
    { id: 'diploma', en: 'TVET Diploma', am: 'ደረጃ 4 ዲፕሎማ' },
    { id: 'certificate', en: '9–12 Mo Certificates', am: 'የ9–12 ወር ሰርተፍኬት' },
    { id: 'short', en: '2–3 Mo Short Tracks', am: 'የ2–3 ወር አጫጭር' },
    { id: 'vip', en: '1-Mo VIP & VFX', am: 'የ1 ወር VIP / VFX' }
  ];

  var DISCIPLINES = [
    { id: 'all', en: 'All Disciplines', am: 'ሁሉም ዘርፎች' },
    { id: 'directing', en: 'Directing, Acting & Story', am: 'ዝግጅት፣ ትወና እና ጽሑፍ' },
    { id: 'camera', en: 'Camera, Lighting & Photo', am: 'ካሜራ፣ መብራትና ፎቶ' },
    { id: 'post', en: 'Editing, Color & VFX', am: 'ኤዲቲንግ እና VFX' },
    { id: 'craft', en: 'Sound, Set Design & Makeup', am: 'ድምፅ፣ ሴት ዲዛይንና ሜካፕ' },
    { id: 'digital', en: 'AI, Graphics & Branding', am: 'AI፣ ግራፊክስና ብራንዲንግ' }
  ];

  var GOALS = [
    { id: 'degree', en: 'Full Diploma + BA Degree Bridge (COC)', am: 'ሙሉ ዲፕሎማ እና ወደ ዲግሪ መሸጋገሪያ (COC)' },
    { id: 'allround', en: '1-Yr All-Round Director / Actor / Filmmaker', am: 'በ1 ዓመት ሁለገብ የፊልም ባለሙያ መሆን' },
    { id: 'technical', en: 'Camera, Lighting, Sound & Editing Tech Crew', am: 'የካሜራ፣ መብራትና ኤዲቲንግ ቴክኒክ ባለሙያ' },
    { id: 'upskill', en: 'Learn Any 2 Specific Courses in 3 Months', am: 'በ3 ወር የመረጥኳቸውን 2 ኮርሶች መማር' },
    { id: 'creator', en: 'Digital Content Creator or Youth Summer Camp', am: 'ዲጂታል ኮንቴንት ፈጠራ ወይም የክረምት ታዳጊዎች' },
    { id: 'vfx', en: '1-on-1 VIP Class (VFX / Motion Graphics)', am: 'የግል VIP ስልጠና (VFX / ሞሽን ግራፊክስ)' }
  ];

  var GOAL_MAP = {
    degree: 'level-4-diploma', allround: 'one-year-certificate', technical: 'nine-month-audiovisual',
    upskill: 'three-month-dual', creator: 'two-month-digital-summer', vfx: 'one-month-vip'
  };

  function recommendedTier() {
    return PROGRAM_TIERS.find(function (p) { return p.id === GOAL_MAP[goal]; }) || PROGRAM_TIERS[0];
  }
  function currentShift() {
    return DAILY_SHIFTS.find(function (s) { return s.id === selectedShift; }) || DAILY_SHIFTS[0];
  }

  function renderFilters() {
    var tf = document.getElementById('tier-filters');
    if (tf) {
      tf.innerHTML = TIER_TABS.map(function (tab) {
        return '<button type="button" class="pill-btn' + (tierFilter === tab.id ? ' active' : '') + '" data-tier="' + tab.id + '">' + t(tab.en, tab.am) + '</button>';
      }).join('');
      tf.querySelectorAll('[data-tier]').forEach(function (b) {
        b.addEventListener('click', function () {
          tierFilter = b.getAttribute('data-tier');
          renderFilters();
          renderTiers();
        });
      });
    }

    var df = document.getElementById('discipline-filters');
    if (df) {
      df.innerHTML = DISCIPLINES.map(function (d) {
        return '<button type="button" class="pill-btn' + (discipline === d.id ? ' active-orange' : '') + '" data-disc="' + d.id + '">' + t(d.en, d.am) + '</button>';
      }).join('');
      df.querySelectorAll('[data-disc]').forEach(function (b) {
        b.addEventListener('click', function () {
          discipline = b.getAttribute('data-disc');
          renderFilters();
          renderModules();
        });
      });
    }
  }

  function renderTiers() {
    var host = document.getElementById('tier-list');
    if (!host) return;
    var list = tierFilter === 'all' ? PROGRAM_TIERS : PROGRAM_TIERS.filter(function (p) { return p.category === tierFilter; });
    host.innerHTML = list.map(function (prog) {
      var f = !!prog.featured;
      var hl = (window.getLang() === 'am' ? prog.highlightsAm : prog.highlightsEn)
        .map(function (h) { return '<div style="display:flex;gap:.625rem;font-size:14px;align-items:flex-start"><i data-icon="check-circle-2" style="width:16px;height:16px;flex-shrink:0;margin-top:3px;color:' + (f ? 'var(--orange)' : 'var(--navy)') + '"></i><span>' + h + '</span></div>'; }).join('');
      var mods = (window.getLang() === 'am' ? prog.modulesAm : prog.modulesEn)
        .map(function (m) {
          return '<span style="padding:.25rem .625rem;border-radius:8px;font-size:12px;font-weight:500;' +
            (f ? 'background:rgba(255,255,255,.1);color:rgba(255,255,255,.95)' : 'background:#fff;color:var(--ink);border:1px solid rgba(5,70,119,.1)') + '">' + m + '</span>';
        }).join('');

      return '<div id="' + prog.id + '" class="reveal in" style="border-radius:24px;padding:2rem;border:1px solid ' + (f ? 'var(--amber)' : 'rgba(5,70,119,.15)') + ';' +
        (f ? 'background:var(--navy);color:#fff;box-shadow:var(--shadow-cinema)' : 'background:#fff;box-shadow:var(--shadow-card)') + '">' +
        '<div class="split" style="align-items:start">' +
          '<div class="split-7">' +
            '<div style="display:flex;flex-wrap:wrap;align-items:center;gap:.625rem">' +
              '<span class="badge ' + (f ? 'badge-orange' : 'badge-navy') + '">' + prog.code + '</span>' +
              '<span class="badge ' + (f ? '' : 'badge-soft') + '" style="' + (f ? 'background:rgba(255,255,255,.1);color:var(--amber)' : 'background:var(--sand);color:var(--navy)') + '">' + t(prog.durationEn, prog.durationAm) + '</span>' +
              '<span style="font-size:12px;font-weight:500;' + (f ? 'color:rgba(255,255,255,.75)' : 'color:var(--muted)') + '">' + t(prog.scheduleEn, prog.scheduleAm) + '</span>' +
            '</div>' +
            '<h3 style="font-size:26px;font-weight:800;margin-top:1rem;line-height:1.25">' + t(prog.titleEn, prog.titleAm) + '</h3>' +
            '<p style="font-size:15px;line-height:1.75;margin-top:.75rem;' + (f ? 'color:rgba(255,255,255,.85)' : 'color:var(--muted)') + '">' + t(prog.summaryEn, prog.summaryAm) + '</p>' +
            '<div style="display:flex;flex-direction:column;gap:.5rem;margin-top:1rem">' + hl + '</div>' +
            '<div style="padding:.875rem;border-radius:12px;font-size:13px;font-weight:600;display:flex;gap:.5rem;margin-top:1rem;' +
              (f ? 'background:rgba(3,21,37,.6);color:var(--amber);border:1px solid rgba(255,255,255,.1)' : 'background:var(--ivory);color:var(--navy);border:1px solid rgba(5,70,119,.1)') + '">' +
              '<i data-icon="graduation-cap" style="width:16px;height:16px;color:var(--orange);flex-shrink:0"></i><span>' + t(prog.pathwayEn, prog.pathwayAm) + '</span></div>' +
          '</div>' +
          '<div class="split-5" style="border-radius:16px;padding:1.5rem;display:flex;flex-direction:column;justify-content:space-between;' +
            (f ? 'background:rgba(3,41,72,.9);border:1px solid rgba(255,255,255,.1)' : 'background:var(--ivory);border:1px solid rgba(5,70,119,.1)') + '">' +
            '<div>' +
              '<div style="font-family:var(--font-mono);font-size:11px;text-transform:uppercase;letter-spacing:.06em;font-weight:700;color:var(--orange);display:flex;align-items:center;gap:.375rem"><i data-icon="layers" style="width:16px;height:16px"></i>' +
                t('Included Courses & Modules', 'በፕሮግራሙ የተካተቱ ኮርሶች') + '</div>' +
              '<div style="display:flex;flex-wrap:wrap;gap:.375rem;margin-top:.75rem">' + mods + '</div>' +
            '</div>' +
            '<div style="padding-top:1.5rem;margin-top:1.5rem;border-top:1px solid rgba(128,128,128,.2);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.75rem">' +
              '<span style="font-size:12px;opacity:.75">' + t('Tuition window: 27th–3rd E.C.', 'ወርሃዊ ክፍያ፦ ከ27–3 ባሉት ቀናት') + '</span>' +
              '<a class="btn btn-orange btn-sm" href="admissions.html?program=' + prog.id + '">' + t('Apply for This Track', 'በዚህ ፕሮግራም ይመዝገቡ') + ' <i data-icon="arrow-right"></i></a>' +
            '</div>' +
          '</div>' +
        '</div></div>';
    }).join('');
    if (window.hydrateIcons) window.hydrateIcons(host);
  }

  function renderPlanner() {
    var gg = document.getElementById('goal-grid');
    if (gg) {
      gg.innerHTML = GOALS.map(function (o) {
        return '<button type="button" class="goal-btn' + (goal === o.id ? ' active' : '') + '" data-goal="' + o.id + '">' + t(o.en, o.am) + '</button>';
      }).join('');
      gg.querySelectorAll('[data-goal]').forEach(function (b) {
        b.addEventListener('click', function () { goal = b.getAttribute('data-goal'); renderPlanner(); });
      });
    }

    var sp = document.getElementById('shift-pick');
    if (sp) {
      sp.innerHTML = DAILY_SHIFTS.map(function (sh) {
        return '<button type="button" class="' + (selectedShift === sh.id ? 'active' : '') + '" data-shift="' + sh.id + '">' +
          t(sh.labelEn, sh.labelAm) + ' (' + sh.intlTime.split(' ')[0] + ')</button>';
      }).join('');
      sp.querySelectorAll('[data-shift]').forEach(function (b) {
        b.addEventListener('click', function () { selectedShift = b.getAttribute('data-shift'); renderPlanner(); });
      });
    }

    var tier = recommendedTier();
    var shift = currentShift();
    var code = document.getElementById('rec-code');
    if (code) code.textContent = tier.code;
    var title = document.getElementById('rec-title');
    if (title) title.textContent = t(tier.titleEn, tier.titleAm);
    var rows = document.getElementById('rec-rows');
    if (rows) {
      rows.innerHTML =
        '<div class="row"><span class="k">' + t('Duration:', 'ቆይታ፦') + '</span><span class="v">' + t(tier.durationEn, tier.durationAm) + '</span></div>' +
        '<div class="row"><span class="k">' + t('Ethiopian Time:', 'በኢትዮጵያ ሰዓት፦') + '</span><span class="v font-ethiopic" style="color:var(--amber)">' + shift.ethiopianTime + '</span></div>' +
        '<div class="row"><span class="k">' + t('Standard Time:', 'ዓለም አቀፍ ሰዓት፦') + '</span><span class="v font-mono">' + shift.intlTime + '</span></div>';
    }
    var pw = document.getElementById('rec-pathway');
    if (pw) pw.textContent = t(tier.pathwayEn, tier.pathwayAm);
    var cta = document.getElementById('rec-cta');
    if (cta) cta.setAttribute('href', 'admissions.html?program=' + tier.id + '&shift=' + shift.id);
  }

  function renderModules() {
    var host = document.getElementById('module-grid');
    if (!host) return;
    var q = searchQuery.trim().toLowerCase();
    var list = COURSE_MODULES.filter(function (m) {
      var matchDisc = discipline === 'all' || m.discipline === discipline;
      if (!q) return matchDisc;
      return matchDisc && (
        m.nameEn.toLowerCase().indexOf(q) > -1 || m.nameAm.toLowerCase().indexOf(q) > -1 ||
        m.toolsOrFocus.toLowerCase().indexOf(q) > -1 || m.descEn.toLowerCase().indexOf(q) > -1
      );
    });

    if (!list.length) {
      host.innerHTML = '<div class="empty-note" style="grid-column:1/-1">' +
        t('No modules match your search. Try “DaVinci”, “AI” or “Lighting”.', 'ከፍለጋዎ ጋር የሚዛመድ ኮርስ አልተገኘም። እባክዎ በሌላ ቃል ይሞክሩ።') + '</div>';
      return;
    }

    host.innerHTML = list.map(function (mod) {
      var badgeStyle;
      if (mod.levelTag === '2018–2019 New') badgeStyle = 'background:rgba(255,144,0,.2);color:var(--orange-hover)';
      else if (mod.levelTag === 'VIP Exclusive') badgeStyle = 'background:var(--midnight);color:var(--amber)';
      else if (mod.levelTag === 'Advanced Diploma') badgeStyle = 'background:var(--navy);color:#fff';
      else badgeStyle = 'background:var(--sand);color:var(--navy)';
      return '<article class="card" style="gap:1rem">' +
        '<div>' +
          '<div style="display:flex;align-items:center;justify-content:space-between;gap:.5rem">' +
            '<span class="badge" style="' + badgeStyle + '">' + mod.levelTag + '</span>' +
            '<i data-icon="sparkles" style="width:16px;height:16px;color:rgba(230,154,53,.7)"></i>' +
          '</div>' +
          '<h3 style="font-size:18px;font-weight:800;color:var(--ink);margin-top:.625rem">' + t(mod.nameEn, mod.nameAm) + '</h3>' +
          '<p style="font-size:13px;color:var(--muted);line-height:1.7;margin-top:.5rem">' + t(mod.descEn, mod.descAm) + '</p>' +
        '</div>' +
        '<div style="padding-top:.75rem;border-top:1px solid rgba(5,70,119,.1);font-family:var(--font-mono);font-size:11px;color:var(--navy);font-weight:500">' + mod.toolsOrFocus + '</div>' +
      '</article>';
    }).join('');
    if (window.hydrateIcons) window.hydrateIcons(host);
  }

  function render() {
    renderFilters();
    renderTiers();
    renderPlanner();
    renderModules();
    var s = document.getElementById('module-search');
    if (s && !s.dataset.bound) {
      s.dataset.bound = '1';
      s.addEventListener('input', function () { searchQuery = s.value; renderModules(); });
    }
    if (window.observeReveals) window.observeReveals();
  }

  window.renderDynamic = function () {
    renderFilters(); renderTiers(); renderPlanner(); renderModules();
    var s = document.getElementById('module-search');
    if (s) s.setAttribute('placeholder', t('Search courses, tools (e.g. DaVinci, AI)...', 'ኮርስ ወይም ሶፍትዌር ይፈልጉ...'));
  };
  render();
})();
