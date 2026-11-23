import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LiftHover,
  quick,
} from '../animations';
import {
  Briefcase,
  Building2,
  CheckCircle2,
  Copy,
  Check,
  MapPin,
  Send,
  ShieldCheck,
  UserCheck,
  Users,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GeezOrnament } from '../components/Layout';
import { SAMPLE_JOB_LISTINGS, JobListing, CONTACT_INFO } from '../data/collegeData';

export const CareersPage: React.FC = () => {
  const { t, lang } = useLanguage();
  const [catFilter, setCatFilter] = useState<'all' | JobListing['category']>('all');
  const [portalTab, setPortalTab] = useState<'alumni' | 'employer'>('alumni');

  // Alumni submission state
  const [alumniName, setAlumniName] = useState('');
  const [alumniPhone, setAlumniPhone] = useState('');
  const [alumniTrack, setAlumniTrack] = useState('Level IV Diploma');
  const [alumniRole, setAlumniRole] = useState('Video Editor & Cinematographer');
  const [alumniPortfolio, setAlumniPortfolio] = useState('');
  const [submittedType, setSubmittedType] = useState<'alumni' | 'employer' | null>(null);
  const [copied, setCopied] = useState(false);

  // Employer crew request state
  const [companyName, setCompanyName] = useState('');
  const [companyContact, setCompanyContact] = useState('');
  const [crewRoleNeeded, setCrewRoleNeeded] = useState('Cinematographer & Video Editor');
  const [crewCount, setCrewCount] = useState('2');
  const [companyDistrict, setCompanyDistrict] = useState('Bole, Addis Ababa');

  const filteredJobs =
    catFilter === 'all'
      ? SAMPLE_JOB_LISTINGS
      : SAMPLE_JOB_LISTINGS.filter((j) => j.category === catFilter);

  const generatedSummary =
    submittedType === 'alumni'
      ? `[Endrias Alumni Job Placement]\nName: ${alumniName}\nPhone: ${alumniPhone}\nGraduated Track: ${alumniTrack}\nTarget Role: ${alumniRole}\nPortfolio/Notes: ${alumniPortfolio || 'Available on request'}`
      : `[Zero-Fee Crew Request — Employer]\nOrganization: ${companyName}\nContact Phone: ${companyContact}\nRole Needed: ${crewRoleNeeded} (x${crewCount})\nLocation: ${companyDistrict}`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(generatedSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div>
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-brand-midnight text-white py-14 sm:py-20 border-b border-brand-amber/30 cinema-grid-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-mono font-semibold">
              <GeezOrnament /> {t('ZERO-COMMISSION CAREER PLACEMENT', 'ከኮሚሽን ነፃ የስራ ትስስር ማዕከል')}
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {t(
                'Direct Studio & Broadcast Placement—With Zero Commission',
                'ለምሩቃን እና ለቀጣሪ ተቋማት 100% ከኮሚሽን ነፃ የስራ ትስስር'
              )}
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              {t(
                'As a core institutional social responsibility, Endrias Film College connects its Diploma and Certificate graduates directly with TV channels, production studios, agencies, and corporate media teams across Addis Ababa without charging a single birr in commission.',
                'ኮሌጁ ለሚያመቻቻቸው ለሁሉም የስራ ትስስሮች ምንም አይነት ኮሚሽን የማይቀበል መሆኑን እያሳወቀ፣ ይህንንም እንደ አንድ ዋነኛ ማህበራዊ ኃላፊነቱ ይወስደዋል።'
              )}
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="p-6 rounded-3xl bg-brand-navyDark border border-brand-orange/40 space-y-3">
              <div className="flex items-center gap-2.5 text-brand-orange font-mono text-xs font-bold">
                <ShieldCheck className="w-5 h-5" />
                OFFICIAL ZERO-FEE PLEDGE
              </div>
              <p className="font-ethiopic text-sm text-white/90 leading-relaxed">
                «ኮሌጁ ለሚያመቻቻቸው ለሁሉም የስራ ትስስሮች ምንም አይነት ኮሚሽን የማይቀበል መሆኑን እያሳወቅን ይልቁንም እንደ አንድ ማህበራዊ ኃላፊነቱ ይወስደዋል።»
              </p>
              <div className="text-xs font-mono text-white/60 pt-1">
                Placement Desks: @efcfilm · @al0254
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SECTION 1: PLACEMENT PIPELINE BOARD */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        className="py-14 sm:py-20 ivory-grid-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-navy font-bold">
                <Briefcase className="w-4 h-4 text-brand-orange" />
                {t('Verified Alumni Placement Tracks', 'ተደጋጋሚ የስራ ዕድል መስኮች')}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-ink">
                {t('Active Industry Placement Categories in Addis Ababa', 'በአዲስ አበባ ለምሩቃን የሚመቻቹ የስራ መደቦች')}
              </h2>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              {[
                { id: 'all', en: 'All Categories', am: 'ሁሉም' },
                { id: 'broadcast', en: 'TV & Broadcast', am: 'ቴሌቪዥንና ሆስት' },
                { id: 'production', en: 'Full Film Crew', am: 'የፊልም ፕሮዳክሽን' },
                { id: 'camera', en: 'Cinematography', am: 'ሲኒማቶግራፊ' },
                { id: 'editing', en: 'Editing & Digital', am: 'ኤዲቲንግና ዲጂታል' },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  type="button"
                  onClick={() => setCatFilter(tab.id as typeof catFilter)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={quick}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    catFilter === tab.id
                      ? 'bg-brand-navy text-white'
                      : 'bg-white text-brand-muted hover:text-brand-ink border border-brand-navy/15'
                  }`}
                >
                  {t(tab.en, tab.am)}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <LiftHover key={job.id} className="bg-white rounded-3xl p-6 sm:p-7 border border-brand-navy/12 shadow-card flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-brand-orange/15 text-brand-orangeHover font-mono text-xs font-bold">
                      {job.openings} {t('Positions', 'ክፍት ቦታዎች')}
                    </span>
                    <span className="text-xs font-mono text-brand-muted">
                      {t(job.employmentTypeEn, job.employmentTypeAm)}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-brand-ink">
                    {t(job.titleEn, job.titleAm)}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-brand-muted">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-navy" />
                      {t(job.districtEn, job.districtAm)}
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium text-brand-navy">
                      <UserCheck className="w-3.5 h-3.5 text-brand-orange" />
                      {t(job.experienceEn, job.experienceAm)}
                    </span>
                  </div>

                  <ul className="space-y-1.5 pt-1">
                    {(lang === 'en' ? job.requirementsEn : job.requirementsAm).map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-brand-ink/85">
                        <CheckCircle2 className="w-4 h-4 text-brand-navy shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-brand-navy/10 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                    {t('0% Commission Guaranteed', '0% ኮሚሽን (ነፃ አገልግሎት)')}
                  </span>
                  <a
                    href={CONTACT_INFO.telegramCareers}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-navy hover:text-brand-orangeHover"
                  >
                    <Send className="w-3.5 h-3.5" />
                    {t('Apply via @efcfilm', 'በ @efcfilm ያመልክቱ')}
                  </a>
                </div>
              </LiftHover>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SECTION 2: DUAL INTERACTIVE PLACEMENT & EMPLOYER PORTAL */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className="py-14 sm:py-20 bg-brand-sand/70 border-t border-brand-navy/10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-ink">
              {t(
                'Alumni Talent Desk & Employer Crew Request Portal',
                'የምሩቃን የስራ መመዝገቢያ እና የቀጣሪ ድርጅቶች መጠየቂያ ቅጽ'
              )}
            </h2>
            <p className="text-sm text-brand-muted">
              {t(
                'Prepare a structured placement dispatch for immediate review by our Career Office (@efcfilm / @al0254).',
                'መረጃዎን በመሙላት ለኮሌጁ የስራ ትስስር ክፍል (@efcfilm / @al0254) በቀጥታ ይላኩ።'
              )}
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-brand-navy/15 shadow-card overflow-hidden">
            {/* Switch Tabs */}
            <div className="grid grid-cols-2 border-b border-brand-navy/10">
              <button
                type="button"
                onClick={() => {
                  setPortalTab('alumni');
                  setSubmittedType(null);
                }}
                className={`py-4 px-4 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-colors ${
                  portalTab === 'alumni'
                    ? 'bg-brand-navy text-white'
                    : 'bg-brand-ivory text-brand-muted hover:text-brand-ink'
                }`}
              >
                <Users className="w-4 h-4 text-brand-orange" />
                {t('I Am an Endrias Graduate', 'የኮሌጁ ምሩቅ ነኝ (ስራ ፈላጊ)')}
              </button>
              <button
                type="button"
                onClick={() => {
                  setPortalTab('employer');
                  setSubmittedType(null);
                }}
                className={`py-4 px-4 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-colors ${
                  portalTab === 'employer'
                    ? 'bg-brand-navy text-white'
                    : 'bg-brand-ivory text-brand-muted hover:text-brand-ink'
                }`}
              >
                <Building2 className="w-4 h-4 text-brand-orange" />
                {t('Hire Endrias Crew (0% Fee)', 'ባለሙያ እፈልጋለሁ (ቀጣሪ ድርጅት)')}
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {portalTab === 'alumni' ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmittedType('alumni');
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-ink mb-1.5">
                        {t('Full Name *', 'ሙሉ ስም *')}
                      </label>
                      <input
                        required
                        type="text"
                        value={alumniName}
                        onChange={(e) => setAlumniName(e.target.value)}
                        placeholder={t('e.g. Abenezer Zenebe', 'ለምሳሌ፦ አቤኔዘር ዘነበ')}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-navy/20 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-ink mb-1.5">
                        {t('Phone / Telegram Number *', 'ስልክ ቁጥር *')}
                      </label>
                      <input
                        required
                        type="tel"
                        value={alumniPhone}
                        onChange={(e) => setAlumniPhone(e.target.value)}
                        placeholder="09..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-navy/20 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-ink mb-1.5">
                        {t('Completed Program Track', 'ያጠናቀቁት የትምህርት ፕሮግራም')}
                      </label>
                      <select
                        value={alumniTrack}
                        onChange={(e) => setAlumniTrack(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-navy/20 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      >
                        <option>Level IV Regular Diploma</option>
                        <option>1-Year General Filmmaking Certificate</option>
                        <option>9-Month Audio-Visual Certificate</option>
                        <option>3-Month / 2-Month Specialized Track</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-ink mb-1.5">
                        {t('Primary Specialization', 'የሚፈልጉት የስራ መስክ')}
                      </label>
                      <input
                        required
                        type="text"
                        value={alumniRole}
                        onChange={(e) => setAlumniRole(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-navy/20 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-ink mb-1.5">
                      {t('Showreel Link or Key Skills Summary', 'የሰሩት ፊልም / ፖርትፎሊዮ ሊንክ ወይም አጭር መግለጫ')}
                    </label>
                    <textarea
                      rows={3}
                      value={alumniPortfolio}
                      onChange={(e) => setAlumniPortfolio(e.target.value)}
                      placeholder={t(
                        'Share Premiere/DaVinci proficiency, graduation short film role, or drive link...',
                        'ስለ ችሎታዎ ወይም የመመረቂያ ፊልምዎ አጭር ማብራሪያ ይፃፉ...'
                      )}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-brand-navy/20 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-brand-midnight font-extrabold text-sm transition-colors"
                  >
                    {t('Generate Placement Dispatch', 'የስራ ትስስር ማመልከቻ አዘጋጅ')}
                  </button>
                </form>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmittedType('employer');
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-brand-ink mb-1.5">
                        {t('Production House / Company Name *', 'የድርጅቱ / ፕሮዳክሽኑ ስም *')}
                      </label>
                      <input
                        required
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder={t('Studio, TV Channel, Agency or NGO', 'የድርጅት ስም')}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-navy/20 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-ink mb-1.5">
                        {t('Hiring Manager Phone *', 'የስልክ ቁጥር *')}
                      </label>
                      <input
                        required
                        type="tel"
                        value={companyContact}
                        onChange={(e) => setCompanyContact(e.target.value)}
                        placeholder="09..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-navy/20 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-brand-ink mb-1.5">
                        {t('Crew Role(s) Needed *', 'የሚፈለገው የባለሙያ አይነት *')}
                      </label>
                      <input
                        required
                        type="text"
                        value={crewRoleNeeded}
                        onChange={(e) => setCrewRoleNeeded(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-navy/20 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-brand-ink mb-1.5">
                        {t('Headcount', 'ብዛት')}
                      </label>
                      <input
                        required
                        type="number"
                        min="1"
                        max="30"
                        value={crewCount}
                        onChange={(e) => setCrewCount(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-brand-navy/20 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-ink mb-1.5">
                      {t('Workplace District in Addis Ababa', 'የስራ ቦታ አድራሻ')}
                    </label>
                    <input
                      required
                      type="text"
                      value={companyDistrict}
                      onChange={(e) => setCompanyDistrict(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-brand-navy/20 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-brand-navy hover:bg-brand-navyDark text-white font-extrabold text-sm transition-colors"
                  >
                    {t('Prepare Zero-Commission Crew Request', 'ከኮሚሽን ነፃ የባለሙያ ጥያቄ አዘጋጅ')}
                  </button>
                </form>
              )}

              {submittedType && (
                <div className="mt-6 p-5 rounded-2xl bg-brand-ivory border border-brand-orange/50 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-brand-navy">
                      {t('DISPATCH READY FOR @efcfilm / @al0254', 'መልዕክቱ ተዘጋጅቷል')}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-brand-navy/20 text-xs font-bold text-brand-ink hover:bg-brand-sand"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied ? t('Copied!', 'ተቀድቷል!') : t('Copy Text', 'ጽሑፉን ቅዳ')}
                    </button>
                  </div>
                  <pre className="text-xs font-mono bg-white p-3.5 rounded-xl border border-brand-navy/10 whitespace-pre-wrap text-brand-ink">
                    {generatedSummary}
                  </pre>
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    <a
                      href={CONTACT_INFO.telegramCareers}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-navyDark"
                    >
                      <Send className="w-3.5 h-3.5 text-brand-orange" />
                      {t('Open @efcfilm Placement Desk', 'ወደ @efcfilm ላክ')}
                    </a>
                    <a
                      href={`mailto:${CONTACT_INFO.emailPrimary}?subject=${encodeURIComponent(
                        'Endrias Film College Career Placement'
                      )}&body=${encodeURIComponent(generatedSummary)}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-orange text-brand-midnight text-xs font-bold"
                    >
                      {t('Send via Official Email', 'በኢሜይል ላክ')}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
