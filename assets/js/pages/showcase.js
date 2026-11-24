/* Showcase page — Endi Award categories (12) + graduation archive. */
(function () {
  var t = window.t;

  function render() {
    var cats = document.getElementById('award-categories');
    if (cats) {
      cats.innerHTML = ENDI_AWARD_CATEGORIES.map(function (cat, idx) {
        return '<div style="padding:1.25rem;border-radius:16px;background:#fff;border:1px solid rgba(5,70,119,.12);box-shadow:var(--shadow-card);display:flex;align-items:flex-start;gap:.875rem">' +
          '<div style="width:36px;height:36px;border-radius:12px;background:rgba(255,144,0,.15);color:var(--orange-hover);font-family:var(--font-mono);font-weight:800;font-size:11px;display:flex;align-items:center;justify-content:center;flex-shrink:0">' + String(idx + 1).padStart(2, '0') + '</div>' +
          '<div><h3 style="font-weight:800;color:var(--ink);font-size:15px">' + t(cat.en, cat.am) + '</h3>' +
          '<p style="font-family:var(--font-mono);font-size:11px;color:var(--muted);margin-top:2px">' + cat.weight + '</p></div></div>';
      }).join('');
    }

    var arch = document.getElementById('graduation-archive');
    if (arch) {
      arch.innerHTML = GRADUATION_RECORDS.map(function (g) {
        var hl = (window.getLang() === 'am' ? g.highlightsAm : g.highlightsEn).map(function (h) {
          return '<li><i data-icon="check-circle-2"></i><span>' + h + '</span></li>';
        }).join('');
        var honoree = g.honoreeEn
          ? '<div style="padding:.75rem;border-radius:12px;background:var(--ivory);border:1px solid rgba(230,154,53,.4);font-size:13px;font-weight:700;color:var(--navy);display:flex;align-items:center;gap:.5rem;margin-top:.75rem">' +
            '<i data-icon="award" style="width:16px;height:16px;color:var(--orange);flex-shrink:0"></i><span>' + t(g.honoreeEn, g.honoreeAm || g.honoreeEn) + '</span></div>'
          : '';
        return '<article class="card" style="border-radius:24px;padding:2rem;gap:1rem">' +
          '<div>' +
            '<div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.5rem">' +
              '<span class="badge badge-navy">' + g.yearEc + '</span>' +
              '<span style="padding:.25rem .75rem;border-radius:8px;background:rgba(255,144,0,.15);color:var(--orange-hover);font-weight:700;font-size:12px">' + g.graduatesCount + '</span>' +
            '</div>' +
            '<h3 style="font-size:20px;font-weight:800;color:var(--ink);margin-top:.75rem">' + t(g.venueEn, g.venueAm) + '</h3>' +
            '<div style="font-family:var(--font-mono);font-size:11px;color:var(--muted);margin-top:.25rem">' + t(g.dateEn, g.dateAm) + '</div>' +
            honoree +
            '<ul class="check-list" style="margin-top:.75rem">' + hl + '</ul>' +
          '</div></article>';
      }).join('');
    }

    if (window.hydrateIcons) window.hydrateIcons(document);
  }

  window.renderDynamic = render;
  render();
})();
