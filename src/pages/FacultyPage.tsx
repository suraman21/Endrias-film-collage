import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  sectionFadeUp,
  LiftHover,
  quick,
} from '../animations';
import {
  Award,
  CheckCircle2,
  Globe,
  GraduationCap,
  Mic2,
  Sparkles,
  Users,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GeezOrnament } from '../components/Layout';
import { FACULTY_MEMBERS, MASTERCLASSES, MasterclassEvent } from '../data/collegeData';

export const FacultyPage: React.FC = () => {
  const { t, lang } = useLanguage();
  const [workshopFilter, setWorkshopFilter] = useState<'all' | MasterclassEvent['category']>('all');

  const visibleWorkshops =
    workshopFilter === 'all'
      ? MASTERCLASSES
      : MASTERCLASSES.filter((w) => w.category === workshopFilter);

  return (
    <div>
      {/* Page Hero */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-brand-navyDark text-white py-14 sm:py-20 border-b border-brand-amber/30 cinema-grid-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl lg:mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-mono font-semibold">
            <GeezOrnament /> {t('FACULTY, LEADERSHIP & MASTERCLASSES', 'መምህራን፣ አመራር እና ወርክሾፖች')}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {t(
              'Learn from University Scholars, Emmy Winners & Active Directors',
              'በዩኒቨርሲቲ ምሁራን፣ በኤሚ አዋርድ አሸናፊና በአንጋፋ ዳይሬክተሮች ይማሩ'
            )}
          </h1>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-3xl">
            {t(
              'Regular Diploma faculty at Endrias Film College hold Master’s degrees (MA/MFA) and above—with lecturing experience at Addis Ababa University and the University of Gondar—paired with celebrated Ethiopian filmmakers and international visiting professors.',
              'የኮሌጁ መደበኛ መምህራን በአዲስ አበባ ዩኒቨርሲቲና በጎንደር ዩኒቨርሲቲ ያስተማሩና እያስተማሩ ያሉ የሁለተኛ ዲግሪ (MA/MFA) ባለቤቶች እንዲሁም በተግባር ያስመሰከሩ የፊልም ባለሙያዎች ናቸው።'
            )}
          </p>
        </div>
      </motion.section>

      {/* SECTION 1: LEADERSHIP & CORE FACULTY */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        className="py-14 sm:py-20 ivory-grid-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-navy font-bold">
                <Users className="w-4 h-4 text-brand-orange" />
                {t('Academic Leadership & Instructors', 'የኮሌጁ አመራር እና መምህራን')}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-ink">
                {t('Mentors Dedicated to Ethiopian Cinema', 'የኢትዮጵያን ሲኒማ የሚቀርፁ መምህራን')}
              </h2>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-sand text-brand-navy text-xs font-bold border border-brand-navy/15">
              <GraduationCap className="w-4 h-4 text-brand-orange" />
              {t('MA / MFA Minimum Diploma Faculty Standard', 'የሁለተኛ ዲግሪ (MA/MFA) የመምህራን ደረጃ')}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACULTY_MEMBERS.map((f) => {
              const initials = f.nameEn
                .split(' ')
                .slice(0, 2)
                .map((n) => n[0])
                .join('');
              return (
                <LiftHover key={f.id} className="bg-white rounded-3xl p-6 sm:p-7 border border-brand-navy/12 shadow-card flex flex-col justify-between space-y-5">
                <div
                  key={f.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-brand-navy/12 shadow-card flex flex-col justify-between space-y-5 hover:border-brand-navy/35 transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-brand-navy text-brand-orange font-extrabold text-lg flex items-center justify-center shadow-sm shrink-0">
                        {initials}
                      </div>
                      <span className="px-3 py-1 rounded-full bg-brand-orange/15 text-brand-orangeHover text-xs font-bold">
                        {t(f.badgeEn, f.badgeAm)}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-extrabold text-brand-ink">
                        {t(f.nameEn, f.nameAm)}
                      </h3>
                      <p className="text-xs font-ethiopic text-brand-muted mt-0.5">
                        {lang === 'en' ? f.nameAm : f.nameEn}
                      </p>
                      <div className="text-sm font-bold text-brand-navy mt-1.5">
                        {t(f.roleEn, f.roleAm)}
                      </div>
                    </div>

                    <div className="text-xs font-mono text-brand-muted bg-brand-ivory p-2.5 rounded-xl border border-brand-navy/10">
                      {t(f.specialtyEn, f.specialtyAm)}
                    </div>

                    <ul className="space-y-2">
                      {(lang === 'en' ? f.credentialsEn : f.credentialsAm).map((c, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-brand-ink/85">
                          <CheckCircle2 className="w-4 h-4 text-brand-navy shrink-0 mt-0.5" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </LiftHover>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* SECTION 2: INTERNATIONAL & INDUSTRY MASTERCLASSES */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className="py-14 sm:py-20 bg-brand-midnight text-white cinema-grid-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-brand-orange font-bold">
                <Mic2 className="w-4 h-4" />
                {t('Open-Campus Masterclass Series', 'ዓለም አቀፍ እና የሀገር ውስጥ ወርክሾፖች')}
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold">
                {t(
                  'Global Film Pedagogues & Industry Pioneers on Our 4 Kilo Stage',
                  'ከጀርመን፣ ፈረንሳይ፣ ናይጄሪያና ኢትዮጵያ የተጋበዙ የጥበብ ባለሙያዎች'
                )}
              </h2>
              <p className="text-sm sm:text-base text-white/75">
                {t(
                  'Current trainees and alumni receive free admission to regular workshops connecting Addis Ababa classrooms to Munich, Paris, Nairobi, and Nollywood.',
                  'የአሁንም ሆነ የቀድሞ ተማሪዎቻችን ያለምንም ክፍያ የሚሳተፉባቸው ተከታታይ ሙያዊ ወርክሾፖች።'
                )}
              </p>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              {[
                { id: 'all', en: 'All Workshops', am: 'ሁሉም' },
                { id: 'international', en: 'International Guests', am: 'ዓለም አቀፍ እንግዶች' },
                { id: 'ai', en: 'AI & Innovation', am: 'AI እና ቴክኖሎጂ' },
                { id: 'industry', en: 'Ethiopian DP Spotlight', am: 'የሀገር ውስጥ ባለሙያዎች' },
              ].map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setWorkshopFilter(b.id as typeof workshopFilter)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    workshopFilter === b.id
                      ? 'bg-brand-orange text-brand-midnight'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  {t(b.en, b.am)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleWorkshops.map((w) => (
              <LiftHover key={w.id} className="p-6 sm:p-7 rounded-3xl bg-brand-navyDark/90 border border-white/12 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-mono font-bold">
                      <Globe className="w-3.5 h-3.5" />
                      {t(w.originEn, w.originAm)}
                    </span>
                    <span className="text-xs font-mono text-white/60">
                      {t(w.dateEn, w.dateAm)}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white">
                    {t(w.speakerEn, w.speakerAm)}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold text-brand-amber">
                    {t(w.affiliationEn, w.affiliationAm)}
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>{t(w.topicEn, w.topicAm)}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                    {t(w.summaryEn, w.summaryAm)}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-brand-amber">
                  <span>{t('Free Admission for Endrias Students & Alumni', 'ለኮሌጁ ተማሪዎች በነፃ የሚዘጋጅ')}</span>
                  <Award className="w-4 h-4 text-brand-orange" />
                </div>
              </LiftHover>
            ))}
          </div>

          <div className="pt-4 text-center">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-brand-orange hover:bg-brand-orangeHover text-brand-midnight font-extrabold text-sm sm:text-base shadow-glow transition-all"
            >
              {t('Join Our Next Cohort & Masterclasses', 'ቤተሰባችንን ይቀላቀሉ — አሁኑኑ ይመዝገቡ')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
