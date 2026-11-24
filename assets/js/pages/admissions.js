/* Admissions page — program/shift selects, pre-registration slip generation,
   copy + print + mail handoff. Deep links: ?program=<id>&shift=<id> */
(function () {
  var t = window.t;
  var slipCode = '';

  function param(name) {
    var m = new RegExp('[?&]' + name + '=([^&#]*)').exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : '';
  }

  function fillSelects() {
    var pSel = document.getElementById('f-program');
    var sSel = document.getElementById('f-shift');
    if (!pSel || !sSel) return;

    var wantProgram = param('program');
    var wantShift = param('shift');
    if (!PROGRAM_TIERS.some(function (p) { return p.id === wantProgram; })) wantProgram = 'level-4-diploma';
    if (!DAILY_SHIFTS.some(function (s) { return s.id === wantShift; })) wantShift = 'shift-1';

    var keepP = pSel.value || wantProgram;
    var keepS = sSel.value || wantShift;

    pSel.innerHTML = PROGRAM_TIERS.map(function (p) {
      return '<option value="' + p.id + '">[' + p.code + '] ' + t(p.titleEn, p.titleAm) + ' — ' + t(p.durationEn, p.durationAm) + '</option>';
    }).join('');
    sSel.innerHTML = DAILY_SHIFTS.map(function (s) {
      return '<option value="' + s.id + '">' + t(s.labelEn, s.labelAm) + ' · ' + s.ethiopianTime + ' (' + s.intlTime + ')</option>';
    }).join('');

    pSel.value = keepP;
    sSel.value = keepS;
  }

  function selectedProgram() {
    var id = (document.getElementById('f-program') || {}).value;
    return PROGRAM_TIERS.find(function (p) { return p.id === id; }) || PROGRAM_TIERS[0];
  }
  function selectedShift() {
    var id = (document.getElementById('f-shift') || {}).value;
    return DAILY_SHIFTS.find(function (s) { return s.id === id; }) || DAILY_SHIFTS[0];
  }

  function buildSlip() {
    var name = (document.getElementById('f-name') || {}).value || '';
    var phone = (document.getElementById('f-phone') || {}).value || '';
    var email = (document.getElementById('f-email') || {}).value || '';
    var edu = (document.getElementById('f-education') || {}).value || '';
    var notes = (document.getElementById('f-notes') || {}).value || '';
    var prog = selectedProgram();
    var shift = selectedShift();

    return 'ENDRIAS FILM COLLEGE PLC — PRE-REGISTRATION SLIP (' + slipCode + ')\n' +
      'Applicant: ' + name + '\n' +
      'Phone: ' + phone + '\n' +
      'Email: ' + (email || 'N/A') + '\n' +
      'Program: ' + prog.titleEn + ' (' + prog.code + ')\n' +
      'Preferred Shift: ' + shift.labelEn + ' — ' + shift.ethiopianTime + ' (' + shift.intlTime + ')\n' +
      'Background: ' + edu + '\n' +
      'Notes: ' + (notes || 'None') + '\n' +
      'Campus: 4 Kilo Roundabout, Next to Wekma (Main Campus), Addis Ababa';
  }

  function showSlip() {
    var box = document.getElementById('slip');
    var code = document.getElementById('slip-code');
    var pre = document.getElementById('slip-text');
    var text = buildSlip();
    if (code) code.textContent = slipCode;
    if (pre) pre.textContent = text;
    if (box) box.hidden = false;
    var mail = document.getElementById('slip-mail');
    if (mail) {
      mail.setAttribute('href', 'mailto:endriasfilmacademyplc@gmail.com?subject=' +
        encodeURIComponent('Admission Inquiry ' + slipCode) + '&body=' + encodeURIComponent(text));
    }
    if (box && box.scrollIntoView) box.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function wire() {
    var form = document.getElementById('admission-form');
    if (form) form.addEventListener('submit', function (e) {
      e.preventDefault();
      slipCode = 'EFC-2019-' + Math.floor(1000 + Math.random() * 9000);
      showSlip();
    });

    var copy = document.getElementById('slip-copy');
    if (copy) copy.addEventListener('click', function () {
      var pre = document.getElementById('slip-text');
      var label = copy.querySelector('span');
      if (navigator.clipboard && pre) {
        navigator.clipboard.writeText(pre.textContent).catch(function () {});
        if (label) {
          label.textContent = t('Copied', 'ተቀድቷል');
          setTimeout(function () { label.textContent = t('Copy', 'ቅዳ'); }, 2200);
        }
      }
    });

    var print = document.getElementById('slip-print');
    if (print) print.addEventListener('click', function () { window.print(); });
  }

  function render() {
    fillSelects();
    if (slipCode) showSlip();
  }

  window.renderDynamic = render;
  render();
  wire();
})();
