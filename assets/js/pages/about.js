/* About page — chronological milestone timeline (TIMELINE_MILESTONES). */
(function () {
  var t = window.t;

  function render() {
    var host = document.getElementById('timeline');
    if (!host) return;
    host.innerHTML = TIMELINE_MILESTONES.map(function (m) {
      return '<div class="timeline-item reveal in">' +
        '<div class="timeline-dot"></div>' +
        '<div class="card" style="padding:1.5rem;gap:.5rem">' +
          '<div><span class="badge badge-soft">' + m.year + '</span>' +
          '<h3 style="font-size:19px;font-weight:800;color:var(--ink);margin-top:.5rem">' + t(m.titleEn, m.titleAm) + '</h3></div>' +
          '<p style="font-size:14px;color:var(--muted);line-height:1.7">' + t(m.descEn, m.descAm) + '</p>' +
        '</div></div>';
    }).join('');
  }

  window.renderDynamic = render;
  render();
})();
