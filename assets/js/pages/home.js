/* Home page dynamic grids — replaces the React .map() render blocks. */
(function () {
  var t = window.t;

  var METRICS = [
    { stat: '8+ Yrs', en: 'Training Ethiopian Filmmakers (Since 2010 E.C.)', am: 'በፊልም ጥበብ የማስተማር ልምድ (ከ2010 ዓ.ም ጀምሮ)' },
    { stat: '250+', en: 'Annual Diploma & Certificate Graduates', am: 'በየዓመቱ የሚመረቁ የዲፕሎማና ሰርተፍኬት ሰልጣኞች' },
    { stat: '6 Tiers', en: '1-Month VIP up to 2-Year Level IV Diploma', am: 'ከ1 ወር VIP እስከ 2 ዓመት ደረጃ 4 ዲፕሎማ' },
    { stat: '0% Fee', en: 'Zero-Commission Graduate Job Placement', am: 'ከኮሚሽን ነፃ የምሩቃን የስራ ትስስር አገልግሎት' }
  ];

  var PILLARS = [
    { icon: 'camera', en: 'Blackmagic 6K Pro & 5D Mk IV', am: 'Blackmagic 6K Pro እና 5D Mark IV', den: 'RAW cinema acquisition alongside dedicated mobile filmmaking training.', dam: 'በዘመናዊ የሲኒማ ካሜራዎችና በስልክ ፊልም ስራ የተሟላ ልምምድ።' },
    { icon: 'sparkles', en: 'AI for Filmmaking & Branding', am: 'AI ለፊልም ስራ እና ፖርትፎሊዮ ብራንዲንግ', den: '2018–2019 E.C. modules in AI pre-vis, content strategy & showreels.', dam: 'ለዘመኑ የሚመጥኑ የAI፣ ዲጂታል ሚዲያና የባለሙያ ብራንዲንግ ኮርሶች።' },
    { icon: 'graduation-cap', en: 'AAU & Gondar MA/MFA Faculty', am: 'የአዲስ አበባና ጎንደር ዩኒቨስቲ መምህራን', den: 'Taught by Master’s-qualified scholars and award-winning directors.', dam: 'ሁለተኛ ዲግሪና ከዚያ በላይ ባላቸው ምሁራንና አንጋፋ ባለሙያዎች።' },
    { icon: 'briefcase', en: 'Zero-Fee Job Placement', am: 'ከኮሚሽን ነፃ የስራ ትስስር', den: 'Direct crew referrals to TV channels, studios & agencies at 0% commission.', dam: 'ለሁሉም ምሩቃን ያለምንም ክፍያና ኮሚሽን ቀጥታ የስራ ዕድል ትስስር።' }
  ];

  var ENDI_ROWS = [
    { icon: 'award', en: '3-Film Direct Quota at Ethiopia’s Guma Award', am: 'በጉማ አዋርድ የ3 አጫጭር ፊልሞች ልዩ ኮታ',
      ten: 'Endrias provides free cinema cameras, lighting gear, and faculty mentorship for 3 student films selected annually to compete directly in the Guma Award.',
      tam: 'ኮሌጁ ነፃ የቀረፃ መሳሪያዎችና የመምህራን ድጋፍ በማድረግ በየዓመቱ 3 የተማሪ ፊልሞችን በቀጥታ ለጉማ አዋርድ ውድድር ያቀርባል።' },
    { icon: 'users', en: 'Global & Emmy-Winning Mentorship', am: 'ዓለም አቀፍ ወርክሾፖች እና የኤሚ አዋርድ አሸናፊ መምህራን',
      ten: 'Learn from Int’l Emmy winner Habtamu Sefiw, veteran director Henok Ayele, Munich’s Prof. Andreas Sippel (Otto Falckenberg School), and French visual artist Sébastien Cailleux.',
      tam: 'ከዓለም አቀፍ ኤሚ አዋርድ አሸናፊው ሐብታሙ ሰፊው፣ ከሔኖክ አየለ፣ ከጀርመኑ አንድሬስ ሲፔል እና ከፈረንሳዊው ባስቲያን ካይሊውክስ ልምድ ይቅሰሙ።' },
    { icon: 'tv', en: 'Proven Screen Alumni — From “Hagere” to EBS TV’s “Besintu”', am: 'በቴሌቪዥንና በሲኒማ ያሸበረቁ ምሩቃን',
      ten: 'Alumni include 2018 E.C. double-winner Yodit Solomon ("Hagere") and child star Dagim Tezera ("Nati" on EBS TV sitcom Besintu).',
      tam: 'በ2018 ዓ.ም የ«ሀገሬ» ፊልም አሸናፊዋ ዮዲት ሰሎሞን እና የኢቢኤስ «በስንቱ» ድራማ ተዋናይ ህፃን ዳግም ተዘራ የኮሌጁ ፍሬዎች ናቸው።' }
  ];

  function esc(s) { return String(s).replace(/"/g, '&quot;'); }

  function programCard(p) {
    var hl = (window.getLang() === 'am' ? p.highlightsAm : p.highlightsEn)
      .map(function (x) { return '<li><i data-icon="check-circle-2"></i><span>' + x + '</span></li>'; })
      .join('');
    var featured = !!p.featured;
    return '' +
      '<article class="card' + (featured ? ' card-dark' : '') + '"' + (featured ? ' style="box-shadow:var(--shadow-cinema)"' : '') + '>' +
        '<div>' +
          '<div style="display:flex;align-items:center;justify-content:space-between;gap:.5rem">' +
            '<span class="badge ' + (featured ? 'badge-orange' : 'badge-soft') + '">' + p.code + '</span>' +
            '<span style="font-size:12px;font-weight:600;' + (featured ? 'color:var(--amber)' : 'color:var(--muted)') + '">' + t(p.durationEn, p.durationAm) + '</span>' +
          '</div>' +
          '<div style="margin-top:1rem">' +
            '<div style="font-size:12px;font-weight:600;margin-bottom:.25rem;' + (featured ? 'color:var(--amber)' : 'color:var(--orange-hover)') + '">' + t(p.levelBadgeEn, p.levelBadgeAm) + '</div>' +
            '<h3 class="h3">' + t(p.titleEn, p.titleAm) + '</h3>' +
          '</div>' +
          '<p style="font-size:14px;line-height:1.7;margin-top:.75rem;' + (featured ? 'color:rgba(255,255,255,.8)' : 'color:var(--muted)') + '">' + t(p.summaryEn, p.summaryAm) + '</p>' +
          '<ul class="check-list" style="margin-top:.75rem">' + hl + '</ul>' +
        '</div>' +
        '<div style="margin-top:1.5rem;padding-top:1rem;border-top:1px solid ' + (featured ? 'rgba(255,255,255,.15)' : 'rgba(5,70,119,.1)') + ';display:flex;align-items:center;justify-content:space-between;gap:.75rem">' +
          '<a href="programs.html#' + p.id + '" style="font-size:14px;font-weight:700;display:inline-flex;align-items:center;gap:.375rem;' + (featured ? 'color:var(--orange)' : 'color:var(--navy)') + '">' +
            t('View Syllabus', 'ዝርዝር ኮርሶች') + ' <i data-icon="arrow-right"></i></a>' +
          '<a href="admissions.html?program=' + p.id + '" style="padding:.5rem .875rem;border-radius:8px;font-size:12px;font-weight:700;' +
            (featured ? 'background:rgba(255,255,255,.15);color:#fff' : 'background:var(--sand);color:var(--navy)') + '">' +
            t('Enroll', 'ይመዝገቡ') + '</a>' +
        '</div>' +
      '</article>';
  }

  function render() {
    var m = document.getElementById('home-metrics');
    if (m) {
      m.innerHTML = METRICS.map(function (x) {
        return '<div class="metric"><div class="num">' + x.stat + '</div><div class="lbl">' + t(x.en, x.am) + '</div></div>';
      }).join('');
    }

    var p = document.getElementById('home-programs');
    if (p) p.innerHTML = PROGRAM_TIERS.map(programCard).join('');

    var pil = document.getElementById('home-pillars');
    if (pil) {
      pil.innerHTML = PILLARS.map(function (c) {
        return '<div class="card" style="gap:.375rem;padding:1rem;box-shadow:0 1px 2px rgba(0,0,0,.04)">' +
          '<div class="icon-box"><i data-icon="' + c.icon + '"></i></div>' +
          '<h3 style="font-size:15px;font-weight:700;margin-top:.375rem">' + t(c.en, c.am) + '</h3>' +
          '<p style="font-size:12px;color:var(--muted);line-height:1.6">' + t(c.den, c.dam) + '</p></div>';
      }).join('');
    }

    var er = document.getElementById('home-endi-rows');
    if (er) {
      er.innerHTML = ENDI_ROWS.map(function (r) {
        return '<div style="padding:1rem;border-radius:16px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);display:flex;gap:.875rem;align-items:flex-start">' +
          '<div class="icon-box-lg"><i data-icon="' + r.icon + '"></i></div>' +
          '<div><h3 style="font-size:15px;font-weight:700;color:#fff">' + t(r.en, r.am) + '</h3>' +
          '<p style="font-size:13px;color:rgba(255,255,255,.7);margin-top:.25rem;line-height:1.6">' + t(r.ten, r.tam) + '</p></div></div>';
      }).join('');
    }

    var sh = document.getElementById('home-shifts');
    if (sh) {
      sh.innerHTML = DAILY_SHIFTS.map(function (s) {
        return '<div class="shift-card">' +
          '<div><span class="badge badge-soft">' + t(s.daysEn, s.daysAm) + '</span>' +
          '<h3 style="font-weight:700;font-size:14px;margin-top:.5rem">' + t(s.labelEn, s.labelAm) + '</h3></div>' +
          '<div class="foot"><div class="et">' + s.ethiopianTime + '</div><div class="intl">' + s.intlTime + '</div></div></div>';
      }).join('');
    }

    if (window.hydrateIcons) window.hydrateIcons(document);
    if (window.observeReveals) window.observeReveals();
  }

  window.renderDynamic = render;
  render();
})();
