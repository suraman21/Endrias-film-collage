import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  CalendarCheck,
  Check,
  CheckCircle2,
  Copy,
  FileText,
  Mail,
  MapPin,
  Phone,
  Printer,
  Send,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GeezOrnament } from '../components/Layout';
import { PROGRAM_TIERS, DAILY_SHIFTS, CONTACT_INFO } from '../data/collegeData';

export const AdmissionsPage: React.FC = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [programId, setProgramId] = useState(
    searchParams.get('program') || 'level-4-diploma'
  );
  const [shiftId, setShiftId] = useState(
    searchParams.get('shift') || 'shift-1'
  );
  const [educationBg, setEducationBg] = useState('Grade 10 / 12 Complete');
  const [notes, setNotes] = useState('');
  const [slipCode, setSlipCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const p = searchParams.get('program');
    const s = searchParams.get('shift');
    if (p && PROGRAM_TIERS.some((item) => item.id === p)) setProgramId(p);
    if (s && DAILY_SHIFTS.some((item) => item.id === s)) setShiftId(s);
  }, [searchParams]);

  const selectedProgram =
    PROGRAM_TIERS.find((p) => p.id === programId) || PROGRAM_TIERS[0];
  const selectedShift =
    DAILY_SHIFTS.find((s) => s.id === shiftId) || DAILY_SHIFTS[0];

  const handleGenerateSlip = (e: React.FormEvent) => {
    e.preventDefault();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setSlipCode(`EFC-2019-${randomNum}`);
  };

  const slipText = slipCode
    ? `ENDRIAS FILM COLLEGE PLC — PRE-REGISTRATION SLIP (${slipCode})
Applicant: ${fullName}
Phone: ${phone}
Email: ${email || 'N/A'}
Program: ${selectedProgram.titleEn} (${selectedProgram.code})
Preferred Shift: ${selectedShift.labelEn} — ${selectedShift.ethiopianTime} (${selectedShift.intlTime})
Background: ${educationBg}
Notes: ${notes || 'None'}
Campus: 4 Kilo Roundabout, Next to Wekma (Main Campus), Addis Ababa`
    : '';

  const copySlip = () => {
    navigator.clipboard?.writeText(slipText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div>
      {/* Page Hero */}
      <section className="bg-brand-navyDark text-white py-14 sm:py-20 border-b border-brand-amber/30 cinema-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-mono font-semibold">
              <GeezOrnament /> {t('2019 E.C. ADMISSIONS & 4 KILO CAMPUS', 'የ2019 ዓ.ም ምዝገባ እና አድራሻ')}
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {t(
                'Begin Your Cinema Journey at 4 Kilo Roundabout',
                'የ2019 ዓ.ም የፊልም ጥበብ ምዝገባዎን ዛሬውኑ ይጀምሩ'
              )}
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              {t(
                'Complete your online pre-registration slip below or visit our 4 Kilo Main Campus (next to Wekma & Holy Trinity University 4th Floor) to tour our studios and finalize your shift.',
                'የቅድመ-ምዝገባ ቅጹን ከታች ይሙሉ ወይም 4 ኪሎ አደባባይ ከወክማ ጎን (እና ቅድስት ሥላሴ ዩኒቨርሲቲ 4ኛ ፎቅ) በሚገኘው ካምፓሳችን በአካል በመገኘት ይመዝገቡ።'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: PRE-REGISTRATION FORM + CAMPUS DIRECTORY */}
      <section className="py-14 sm:py-20 ivory-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Interactive Pre-Registration Builder */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl border border-brand-navy/15 shadow-card p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between gap-3 pb-4 border-b border-brand-navy/10">
                <div>
                  <div className="text-xs font-mono uppercase text-brand-orangeHover font-bold">
                    {t('Step 1 · Student Pre-Registration', 'ደረጃ 1 · የቅድመ-ምዝገባ ቅጽ')}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-brand-ink mt-0.5">
                    {t('Generate Your Admission & Shift Slip', 'የመመዝገቢያና የፈረቃ ምርጫ ቅጽ')}
                  </h2>
                </div>
                <img
                  src="/brand/logo-seal.png"
                  alt="Endrias Seal"
                  className="w-12 h-12 rounded-full shrink-0"
                />
              </div>

              <form onSubmit={handleGenerateSlip} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-ink mb-1.5">
                      {t('Applicant Full Name *', 'ሙሉ ስም *')}
                    </label>
                    <input
                      required
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={t('Enter your full name', 'ሙሉ ስምዎን ያስገቡ')}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-brand-navy/20 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-ink mb-1.5">
                      {t('Phone Number *', 'ስልክ ቁጥር *')}
                    </label>
                    <input
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="09... / +251..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-brand-navy/20 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-ink mb-1.5">
                      {t('Email Address (Optional)', 'ኢሜይል (ካለዎት)')}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-brand-navy/20 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-ink mb-1.5">
                      {t('Prior Education / Certificate', 'የትምህርት ዝግጅት')}
                    </label>
                    <select
                      value={educationBg}
                      onChange={(e) => setEducationBg(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-brand-navy/20 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    >
                      <option>Grade 10 / 12 Complete</option>
                      <option>1-Year Filmmaking Certificate (+10-Mo Diploma Bridge)</option>
                      <option>University / College Student or Graduate</option>
                      <option>Working Media Professional / Content Creator</option>
                      <option>Youth / Kiremt Talent Trainee</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-ink mb-1.5">
                    {t('Select Academic Program Tier *', 'የትምህርት ፕሮግራም ይምረጡ *')}
                  </label>
                  <select
                    value={programId}
                    onChange={(e) => setProgramId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-navy/20 text-sm bg-white font-semibold focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  >
                    {PROGRAM_TIERS.map((p) => (
                      <option key={p.id} value={p.id}>
                        [{p.code}] {t(p.titleEn, p.titleAm)} — {t(p.durationEn, p.durationAm)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-ink mb-1.5">
                    {t('Preferred 2-Hour Daily Shift *', 'የሚመርጡት የመማሪያ ፈረቃ *')}
                  </label>
                  <select
                    value={shiftId}
                    onChange={(e) => setShiftId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-navy/20 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  >
                    {DAILY_SHIFTS.map((s) => (
                      <option key={s.id} value={s.id}>
                        {t(s.labelEn, s.labelAm)} · {s.ethiopianTime} ({s.intlTime})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-ink mb-1.5">
                    {t(
                      'Chosen Courses (for 3-Month / 1-Month VIP) or Questions',
                      'የመረጧቸው ኮርሶች (ለ3 ወር / ለ1 ወር VIP) ወይም ተጨማሪ ጥያቄ'
                    )}
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={t(
                      'e.g. Interested in Cinematography + Video Editing, or VFX 1-on-1 VIP class...',
                      'ለምሳሌ፦ ሲኒማቶግራፊ እና ኤዲቲንግ፣ ወይም የግል VFX ስልጠና...'
                    )}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-navy/20 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-brand-midnight font-extrabold text-base shadow-glow transition-all"
                >
                  {t('Generate Official Pre-Registration Slip', 'የቅድመ-ምዝገባ ካርድ አዘጋጅ')}
                </button>
              </form>

              {/* Generated Pre-Registration Card */}
              {slipCode && (
                <div className="p-6 rounded-2xl bg-brand-midnight text-white border-2 border-brand-orange space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/15 pb-3">
                    <div>
                      <div className="text-[11px] font-mono text-brand-orange uppercase">
                        PRE-REGISTRATION REFERENCE
                      </div>
                      <div className="text-lg font-mono font-extrabold text-white">{slipCode}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={copySlip}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-brand-orange" /> : <Copy className="w-3.5 h-3.5" />}
                        {copied ? t('Copied', 'ተቀድቷል') : t('Copy', 'ቅዳ')}
                      </button>
                      <button
                        type="button"
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        {t('Print', 'ፕሪንት')}
                      </button>
                    </div>
                  </div>

                  <pre className="text-xs font-mono text-white/90 whitespace-pre-wrap leading-relaxed">
                    {slipText}
                  </pre>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={CONTACT_INFO.telegramDean}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-orange text-brand-midnight font-extrabold text-xs sm:text-sm"
                    >
                      <Send className="w-4 h-4" />
                      {t('Send Slip to Registrar (@al0254)', 'ለሬጅስትራር (@al0254) በቴሌግራም ላክ')}
                    </a>
                    <a
                      href={`mailto:${CONTACT_INFO.emailPrimary}?subject=${encodeURIComponent(
                        `Admission Inquiry ${slipCode}`
                      )}&body=${encodeURIComponent(slipText)}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm"
                    >
                      <Mail className="w-4 h-4 text-brand-orange" />
                      {t('Submit via Email', 'በኢሜይል ላክ')}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: 4 Kilo Campus Locations, Direct Lines & Academic Policies */}
          <div className="lg:col-span-5 space-y-6">
            {/* Campus Directory Card */}
            <div className="bg-brand-navy text-white rounded-3xl p-6 sm:p-8 shadow-cinema space-y-5">
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase text-brand-amber font-bold">
                  {t('Campus & Registrar Directory', 'የካምፓስ አድራሻ እና ስልኮች')}
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold">
                  {t('Visit Us at 4 Kilo Roundabout', '4 ኪሎ አደባባይ በአካል ያግኙን')}
                </h3>
              </div>

              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-brand-amber">
                    <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                    {t('Main Campus (ዋናው ካምፓስ)', 'ዋናው ካምፓስ')}
                  </div>
                  <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                    {t(CONTACT_INFO.addressMainEn, CONTACT_INFO.addressMainAm)}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-brand-amber">
                    <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                    {t('Holy Trinity Building Studio Hall', 'ቅድስት ሥላሴ ዩኒቨርሲቲ ህንፃ')}
                  </div>
                  <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                    {t(CONTACT_INFO.addressTrinityEn, CONTACT_INFO.addressTrinityAm)}
                  </p>
                </div>

                <div className="space-y-2.5 pt-1">
                  <div className="text-xs font-mono uppercase text-brand-amber">
                    {t('Direct Admissions Hotlines', 'ቀጥታ የምዝገባ ስልክ መስመሮች')}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {CONTACT_INFO.phonesPrimary.map((ph) => (
                      <a
                        key={ph}
                        href={`tel:${ph.replace(/\s+/g, '')}`}
                        className="p-3 rounded-xl bg-brand-midnight/70 hover:bg-brand-orange hover:text-brand-midnight border border-white/15 font-mono text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors"
                      >
                        <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                        {ph}
                      </a>
                    ))}
                  </div>
                  <div className="text-xs text-white/70 font-mono">
                    HR &amp; Admin: {CONTACT_INFO.phonesAdmin.join(' · ')}
                  </div>
                </div>

                <div className="pt-2 border-t border-white/15 space-y-1.5 text-xs">
                  <div className="text-brand-amber font-mono uppercase">
                    {t('Official Emails & Telegram', 'ኦፊሻል ኢሜይል እና ቴሌግራም')}
                  </div>
                  <div>{CONTACT_INFO.emailPrimary}</div>
                  <div>{CONTACT_INFO.emailAcademic}</div>
                  <div className="pt-1 flex flex-wrap gap-2">
                    <a
                      href={CONTACT_INFO.telegramChannel}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-brand-orange text-brand-midnight font-bold"
                    >
                      @endifilm Channel
                    </a>
                    <a
                      href={CONTACT_INFO.telegramDean}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white font-semibold"
                    >
                      Dean Inbox (@al0254)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Registrar Academic Guidelines Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-brand-navy/12 shadow-card space-y-4">
              <div className="flex items-center gap-2 text-brand-navy font-extrabold text-base">
                <CalendarCheck className="w-5 h-5 text-brand-orange" />
                {t('Registrar & Graduation Guidelines', 'የምዝገባ፣ ክፍያ እና ምርቃት ደንቦች')}
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-brand-muted">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-navy shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-brand-ink">
                      {t('Monthly Tuition Window:', 'ወርሃዊ ክፍያ፦')}
                    </strong>{' '}
                    {t(
                      'Paid between the 27th and 3rd of every Ethiopian calendar month.',
                      'በየወሩ ከ27 እስከ 3 ባሉት ቀናት ውስጥ ይፈፀማል።'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-navy shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-brand-ink">
                      {t('Graduation Film Package:', 'የመመረቂያ ፕሮጀክት፦')}
                    </strong>{' '}
                    {t(
                      'Master short film + ≤1–2 min trailer + 65×94 cm framed banner poster approved prior to print.',
                      'አጭር ፊልም፣ ትሬለር እና 65×94 ሴ.ሜ የተወጠረ ፖስተር ማስረከብ ይጠበቃል።'
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-brand-navy shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-brand-ink">
                      {t('COC Competency Support:', 'የCOC ምዘና ድጋፍ፦')}
                    </strong>{' '}
                    {t(
                      'Free exam prep tutorials for Endrias graduates; candidates only pay the 500 ETB government COC fee.',
                      'ነፃ የCOC መሰናዶ ትምህርት ይሰጣል፤ ተመዛኞች የመንግስት 500 ብር ብቻ ይከፍላሉ።'
                    )}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
